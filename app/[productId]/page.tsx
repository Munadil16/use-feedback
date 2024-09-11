import prisma from "@/lib/db";
import FeedbackForm from "@/components/feedback-form";
import { notFound } from "next/navigation";

export default async function FeedbackPage({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const productDetails = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!productDetails) {
    notFound();
  }

  return <FeedbackForm productDetails={productDetails} />;
}
