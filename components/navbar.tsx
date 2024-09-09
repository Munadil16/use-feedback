import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
import ToggleTheme from "./toggle-theme";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="sticky left-0 top-0 z-50 flex items-center justify-between border-b px-6 py-3">
      <Link className="text-lg font-medium sm:text-xl" href="/">
        UseFeedback
      </Link>

      <div className="flex items-center gap-6">
        <ToggleTheme />

        <Link className="hidden hover:text-neutral-400 sm:block" href="/docs">
          Docs
        </Link>

        {session?.user ? (
          <>
            <Link
              className="hidden hover:text-neutral-400 sm:block"
              href="/dashboard"
            >
              Dashboard
            </Link>

            <Image
              className="cursor-pointer rounded-full border"
              src={session.user.image!}
              width={33}
              height={33}
              alt="profile image"
            />
          </>
        ) : (
          <Link className="hover:text-neutral-400" href="/signin">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}
