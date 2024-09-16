import Link from "next/link";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import * as motion from "framer-motion/client";
import { notFound, redirect } from "next/navigation";
import FeedbackCard from "@/components/feedback-card";
import CodeComponent from "@/components/code";

export default async function Product({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const session = await auth();
  const code = `<div id="embed-feedbacks"></div>
<script src="${process.env.NEXT_PUBLIC_BASE_URL}api/embed-feedbacks?productId=${productId}"></script>`;

  if (!session || !session.user) {
    redirect("/signin");
  }

  const productDetails = await prisma.product.findFirst({
    where: {
      id: productId,
    },
    select: {
      name: true,
      feedbacks: true,
    },
  });

  if (!productDetails) {
    notFound();
  }

  const productFeedbackURL = `${process.env.NEXT_PUBLIC_BASE_URL}${productId}`;

  return (
    <main className="flex justify-center p-8">
      <section className="flex w-[90vw] flex-col gap-8 sm:w-[70vw] md:w-[60vw]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{productDetails.name}</h1>

          <p className="text-[0.84rem] text-neutral-500 dark:text-neutral-400 sm:text-sm">
            Feedback URL:{" "}
            <Link
              className="underline hover:text-neutral-200"
              href={productFeedbackURL}
              target="_blank"
            >
              {productFeedbackURL}
            </Link>
          </p>
        </div>

        <CodeComponent code={code} />

        <p className="text-xl font-medium">Feedback</p>

        <motion.article
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 100,
          }}
        >
          {productDetails.feedbacks.map((feedback) => {
            return <FeedbackCard key={feedback.id} feedback={feedback} />;
          })}
        </motion.article>
      </section>
    </main>
  );
}
