import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

interface ProductProp {
  name: string;
}

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "Unauthorized", success: false },
      { status: 401 }
    );
  }

  const body: ProductProp = await req.json();

  try {
    const product = await prisma.product.findFirst({
      where: {
        name: body.name,
        User: {
          id: session.user.id,
        },
      },
    });

    return NextResponse.json(
      { id: product?.id, message: "Product id retrieved", success: true },
      { status: 201 }
    );
  } catch (err) {
    console.log("Error while retrieving product id: ", err);
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
