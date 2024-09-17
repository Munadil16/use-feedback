import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-semibold">Page not found (404)</h1>

      <p className="font-medium text-neutral-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>

      <Button className="font-medium" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </main>
  );
}
