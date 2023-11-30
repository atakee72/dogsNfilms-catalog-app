import Link from "next/link";

function Navbar() {
  return (
    <ul className="flex z-50 flex-col sm:flex-row justify-around bg-slate-400 text-black h-32 sm:h-12 items-center font-semibold mb-7 fixed top-0 w-full ">
      <Link href="/">Home</Link>
      <Link href="/dogs-catalog">Dogs catalog</Link>
      <Link href="/films-catalog">Films catalog</Link>
    </ul>
  );
}

function Footer() {
  return (
    <div className=" h-24 sm:h-12 bg-slate-400 fixed bottom-0 w-full text-black font-semibold text-center flex items-center justify-center">
      Copyrighted
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="my-32 sm:my-20 px-3"> {children}</div>
      <Footer />
    </div>
  );
}
