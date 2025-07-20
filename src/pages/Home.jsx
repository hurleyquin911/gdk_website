import React from "react";
import Layout from "./Layout";

import Social from "../components/Social";
import Logo from "../assets/img/1.jpg";
import CarouselBanner from "../components/CarouselBanner";
import { FiDownload } from "react-icons/fi";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="h-full">
          <div className="container">
            <div
              className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
            >
              {/* bagian teks */}
              <div className="text-left  xl:order-none">
                <span className="xl:text-[12px] text-[8px] text-black text-center">
                  Your IT Solutions | Support UMKM to go digita |let's grow
                  together with this digitalization
                </span>
                <h1 className=" text-4xl xl:text-[80px] leading-none  text-black font-semibold ">
                  Welcome to
                  <br /> <span className="text-green-800 ">Griya</span>{" "}
                  <span className="text-blue-500 ">Digital</span>{" "}
                  <span className="text-accent">Kreasi</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-gray-500 text-xs xl:text-sm ">
                  Kami adalah penyedia solusi IT terpercaya yang berkomitmen mendukung kebutuhan teknologi dan percepatan digitalisasi, khususnya bagi Usaha Mikro, Kecil, dan Menengah (UMKM). Dengan layanan end-to-end, kami hadir sebagai mitra lengkap untuk bisnis Anda—mulai dari penyediaan perangkat IT, perawatan infrastruktur, hingga pendampingan transformasi digital.
                </p>

                {/* Tombol sosial media */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <a>
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-2"
                    >
                      <span>Download Browsur</span>
                      <FiDownload className="text-xl" />
                    </Button>
                  </a>
                  <div className="mb-8 xl:mb-0">
                    <Social
                      containerStyles="flex gap-6"
                      iconStyles=" w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500 "
                    />
                  </div>
                </div>
              </div>

              {/* bagian photo */}
              <div className="xl:order-none mb-8 xl:mb-0">
                <img
                  src={Logo} // Ganti dengan path gambar Anda
                  alt="Foto Profil"
                  className="w-140 h-140 object-cover hidden xl:block"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <CarouselBanner />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
