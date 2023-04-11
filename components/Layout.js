import Link from "next/link";

function Navbar() {
  return (
    <ul className="flex flex-col md:flex-row justify-around bg-slate-400 text-black h-32 md:h-12 items-center font-semibold mb-7 fixed top-0 w-full ">
      <Link href="/dogs-catalog">Dogs catalog</Link>
      <Link href="/films-catalog">Films catalog</Link>
      <Link href="/">Home</Link>
    </ul>
  );
}

function Footer() {
  return (
    <div className=" h-12 bg-slate-400 fixed bottom-0 w-full text-black font-semibold text-center flex items-center justify-center">
      Copyrighted
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="mt-32 md:mt-24"> {children}</div>
      <Footer />
    </div>
  );
}
