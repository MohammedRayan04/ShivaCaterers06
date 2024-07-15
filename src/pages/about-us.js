import React from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Clientpart from "@/components/Clientpart";
import Product from "@/components/Product";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import founderImage from "@/assets/images/founder.png";
import image1 from "@/assets/sliders/image1.jpg";
import image2 from "@/assets/sliders/image2.jpg";
import image3 from "@/assets/sliders/image3.jpg";
import image4 from "@/assets/sliders/image4.jpg";
import image5 from "@/assets/sliders/image5.jpg";
import image6 from "@/assets/sliders/image6.jpg";
import image7 from "@/assets/sliders/image7.jpg";
import image8 from "@/assets/sliders/image8.jpg";
import image9 from "@/assets/sliders/image9.jpg";
import image10 from "@/assets/sliders/image10.jpg";
import image11 from "@/assets/sliders/image11.jpg";
import image12 from "@/assets/sliders/image12.jpg";
import image13 from "@/assets/sliders/image13.jpg";
import image14 from "@/assets/sliders/image14.jpg";
import image15 from "@/assets/sliders/image15.jpg";
import image16 from "@/assets/sliders/image16.jpg";
import image17 from "@/assets/sliders/image17.jpg";
import image18 from "@/assets/sliders/image18.jpg";
import image19 from "@/assets/sliders/image19.jpg";
import image20 from "@/assets/sliders/image20.jpg";
import image21 from "@/assets/sliders/image21.jpg";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: image1.src,
    thumbnail: image1.src,
    description: "Shiva Caterers",
  },
  {
    original: image2.src,
    thumbnail: image2.src,
    description: "Shiva Caterers",
  },
  {
    original: image3.src,
    thumbnail: image3.src,
    description: "Shiva Caterers",
  },
  {
    original: image4.src,
    thumbnail: image4.src,
    description: "Shiva Caterers",
  },
  {
    original: image5.src,
    thumbnail: image5.src,
    description: "Shiva Caterers",
  },
  {
    original: image6.src,
    thumbnail: image6.src,
    description: "Shiva Caterers",
  },
  {
    original: image7.src,
    thumbnail: image7.src,
    description: "Shiva Caterers",
  },
  {
    original: image8.src,
    thumbnail: image8.src,
    description: "Shiva Caterers",
  },
  {
    original: image9.src,
    thumbnail: image9.src,
    description: "Shiva Caterers",
  },
  {
    original: image10.src,
    thumbnail: image10.src,
    description: "Shiva Caterers",
  },
  {
    original: image11.src,
    thumbnail: image11.src,
    description: "Shiva Caterers",
  },
  {
    original: image12.src,
    thumbnail: image12.src,
    description: "Shiva Caterers",
  },
  {
    original: image13.src,
    thumbnail: image13.src,
    description: "Shiva Caterers",
  },
  {
    original: image14.src,
    thumbnail: image14.src,
    description: "Shiva Caterers",
  },
  {
    original: image15.src,
    thumbnail: image15.src,
    description: "Shiva Caterers",
  },
  {
    original: image16.src,
    thumbnail: image16.src,
    description: "Shiva Caterers",
  },
  {
    original: image17.src,
    thumbnail: image17.src,
    description: "Shiva Caterers",
  },
  {
    original: image18.src,
    thumbnail: image18.src,
    description: "Shiva Caterers",
  },
  {
    original: image19.src,
    thumbnail: image19.src,
    description: "Shiva Caterers",
  },
  {
    original: image20.src,
    thumbnail: image20.src,
    description: "Shiva Caterers",
  },
  {
    original: image21.src,
    thumbnail: image21.src,
    description: "Shiva Caterers",
  },
];

const FounderSection = () => (
  <div className="font-merriweather flex flex-col lg:flex-row items-center">
    <Image
      src={founderImage}
      alt="Founder"
      className="rounded-8xl shadow-xl bg-sky-50 w-full max-w-xs lg:max-w-xs mb-6 lg:mb-0 lg:mr-8"
      width={300}
      height={300}
    />
    <div className="text-center lg:text-left w-full lg:w-4/5">
      <h3 className="font-merriweather text-4xl font-bold mb-4 text-red-600 mt-6 lg:mt-0">
        Our Founder
      </h3>
      <p className="font-merriweather text-black font-black text-lg leading-relaxed mt-4">
        Mr. Sunil Yadav, with years of culinary expertise and a passion for
        excellence, has built Shiva Caterers from the ground up. With a vision
        to deliver exceptional dining experiences, his dedication and commitment
        have been the cornerstone of our success.
      </p>
      <p className="font-merriweather text-black font-black text-lg leading-relaxed mt-4">
        It all started in 2008, with a small team and a big dream. Over the
        years, we have grown and evolved, always staying true to our core values
        of quality and service. Under Mr. Sunil Yadav's leadership, Shiva
        Caterers has not only flourished but also set new standards in the
        catering industry. With a keen focus on innovation and customer
        satisfaction, we have expanded our services to cater to a diverse range
        of events, from intimate gatherings to large-scale celebrations. Our
        team of dedicated professionals continues to uphold our founder's
        vision, ensuring that each culinary creation reflects our commitment to
        quality and creativity.
      </p>
      <p className="font-merriweather text-black font-black text-lg leading-relaxed mt-4">
        Achievements: With 16 years of working successfully, we have earned a
        reputation for excellence and reliability. Our commitment to quality has
        never wavered, and we continue to strive for perfection in every event
        we cater.
      </p>
    </div>
  </div>
);

const ExperienceSection = () => (
  <div className="text-amber-700 text-center m-4 bg-amber-200 p-2">
    <h3 className="font-merriweather font-bold text-4xl mb-2">
      16 Years Of Experience will never let you down...
    </h3>
    <p className="text-lg font-bold">
      We focus our work on a quality-oriented ideology, emphasizing excellence
      in every detail.
    </p>
  </div>
);

const WhyChooseUsSection = () => (
  <section className="font-merriweather flex flex-col lg:flex-row gap-4 mb-8 text-black">
    {[
      {
        title: "Exceptional Quality",
        text: "At Shiva Caterers, we provide top-notch food and service. Our fresh ingredients and skilled chefs ensure a delightful dining experience.",
      },
      {
        title: "Customizable Menus",
        text: "Every event is unique. We offer customizable menus tailored to your preferences and dietary needs, perfect for weddings, corporate events, or birthday parties.",
      },
      {
        title: "Professional Service",
        text: "Our experienced team ensures your event is seamless and memorable. From planning to execution, we deliver exceptional service with a personal touch.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex-1 bg-red-600 p-6 rounded-lg shadow-lg text-center"
      >
        <h4 className="font-merriweather text-2xl font-bold mb-4">
          {item.title}
        </h4>
        <p className="font-monserrat text-lg leading-relaxed">{item.text}</p>
      </div>
    ))}
  </section>
);

const AboutUsPage = () => (
  <Layout>
    <div className="bg-white py-9 px-4 sm:px-8 lg:px-8">
      <FounderSection />
      <ExperienceSection />
      <ImageGallery items={images} />
      <section className="flex flex-col lg:flex-row mb-12 text-7xl text-center items-center justify-center gap-12">
        <motion.div>Why Choose Us</motion.div>
      </section>
      <WhyChooseUsSection />
      <Product />
      <Clientpart />
    </div>
  </Layout>
);

export default AboutUsPage;
