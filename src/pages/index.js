import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import Moreinfo from "@/components/Moreinfo";
import Product from "@/components/Product";
import Menuflag from "@/components/Menuflag";
import Clientpart from "@/components/Clientpart";
import Hero from "@/components/Hero";
import MetaTags from "@/components/MetaTags";
import previewImage from "@/assets/images/cateringLogo.png"; // Adjust the path to your image

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = "Shiva Caterers";
  const description =
    "Shiva Caterers, we have earned a reputation for excellence and reliability.";
  const imageUrl = previewImage.src; // Use the imported image's src
  const url = "https://shivacaterers06.in/";

  return (
    <Layout>
      <MetaTags
        title={title}
        description={description}
        imageUrl={imageUrl}
        url={url}
      />
      <Hero />
      <Service />
      <Moreinfo />
      <Product />
      <Menuflag />
      <Clientpart />
    </Layout>
  );
}
