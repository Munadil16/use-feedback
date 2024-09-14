import Link from "next/link";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function LandingPage() {
  const [session, totalUsers, totalFeedback] = await Promise.all([
    auth(),
    prisma.user.count(),
    prisma.feedback.count(),
  ]);

  return (
    <section className="flex w-[60vw] flex-col items-center gap-12 text-center">
      <h1 className="text-5xl font-semibold">Getting feedback made easy.</h1>

      <p className="text-lg text-neutral-500 dark:text-neutral-400">
        We built UseFeedback to simplify gathering feedback. Easily collect
        customer feedback with no technical skills or hosting required.
      </p>

      <div className="flex items-center gap-6">
        <Button className="p-6 text-base" asChild>
          <Link href={session?.user ? "/dashboard" : "/signin"}>
            Get started
            <ArrowRight className="ml-1 w-5" />
          </Link>
        </Button>

        <Button className="p-6 text-base" variant="outline" asChild>
          <Link href="/docs">Explore docs</Link>
        </Button>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Total Users</p>
          <p className="text-neutral-500 dark:text-neutral-400">{totalUsers}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Feedback Received</p>
          <p className="text-neutral-500 dark:text-neutral-400">
            {totalFeedback}
          </p>
        </div>
      </div>
    </section>
  );
}
