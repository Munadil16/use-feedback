import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";
import { GoogleSVG } from "@/icons/Google";

export default function SignInComponent() {
  return (
    <main className="flex h-screen items-center justify-center">
      <form
        className="flex flex-col gap-4 rounded-lg border p-8 text-center"
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: "/",
          });
        }}
      >
        <h1 className="text-xl font-semibold sm:text-2xl">
          Welcome to UseFeedback
        </h1>

        <p className="text-neutral-400">Sign in to continue</p>

        <Button type="submit" className="mt-4 flex gap-6 text-base font-medium">
          <GoogleSVG />
          Sign in with Google
        </Button>
      </form>
    </main>
  );
}
