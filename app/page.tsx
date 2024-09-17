import Footer from "@/components/footer";
import LandingPage from "@/components/home/landing-page";

export default function Home() {
  return (
    <>
      <main className="flex min-h-[80svh] justify-center py-10">
        <LandingPage />
      </main>

      <Footer />
    </>
  );
}
