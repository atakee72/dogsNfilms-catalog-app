import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Carousel from "@/components/Carousel";

// const inter = Inter({ subsets: ["latin"] });

const images = [
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  "https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg",
];

const href = ["dogs-catalog", "films-catalog"];

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Carousel images={images} href={href} />
      </main>
    </Layout>
  );
}
