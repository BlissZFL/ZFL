import Link from "next/link";
import Navbar from "./components/nav";
import Footer from "./components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-[#FF7300] selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] mb-3">
          404 // NOT FOUND
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          Page not found
        </h1>
        <p className="text-neutral-400 max-w-md mb-8 text-base">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-2xl bg-[#FF7300] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
