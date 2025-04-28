import React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Logo from "../assets/img/Banner.jpg";

import JasaServiceCom from "../assets/product/Poster Jasa Service.png"
import ProductCom from "../assets/product/Poster Jual Produk.png"
import DigitalMarketing from "../assets/product/1.png"
import ServiceCctv from "../assets/product/Paket CCTV & Pemasangan.png"
import { NavLink } from "react-router-dom";
// Data testimoni statis
const testimoni = [
  {
    judul: "Penjualan & Pengadaan Perangkat IT",
    deskripsi:
      "Menyediakan perangkat teknologi berkualitas seperti laptop, komputer, printer, dan scanner dengan harga kompetitif untuk mendukung operasional bisnis yang efisien.",
    image: ProductCom,
    url: "/itshop"
  },
  {
    judul: "Layanan Perawatan & Perbaikan",
    deskripsi:
      "Maintenance komprehensif untuk perangkat komputer, laptop, printer, dan scanner, memastikan perangkat Anda selalu optimal dan bebas gangguan.",
    image: JasaServiceCom,
    url: "/itservice"
  },
  {
    judul: "Instalasi & Maintenance Infrastruktur Jaringan",
    deskripsi:
      "Pemasangan dan perawatan jaringan internet, server, serta CCTV untuk keamanan dan konektivitas bisnis yang stabil.",
    image: ServiceCctv,
    url: "/netservice"
  },
  {
    judul: "Pendampingan UMKM Go Digital",
    deskripsi:
      "Bantu bisnis Anda lebih mudah ditemukan dengan pemasangan PIN Google Maps. Jasa pengelolaan konten media sosial dan strategi branding yang menarik",
    image: DigitalMarketing,
    url: "/digitalmarketing"
  },
];

const CarouselBanner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimoni.slice(0, 10).map((data, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col justify-center items-center">
                      <NavLink to={data.url}>
                        <img
                          src={data.image}
                          alt={`${data.image} `}
                          className=" object-cover rounded-md border-2 mb-3"
                        />
                      </NavLink>
                      <span className="text-xl font-semibold text-black">
                        {data.judul}
                      </span>
                      <p className="text-xs text-black">{data.deskripsi}</p>
                      <div className="pt-2 w-full">
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#ffff] text-black border-2 border-black px-4 py-2 rounded-md transform transition-transform duration-500 hover:scale-105 active:scale-95 w-full block text-center"
                        >
                          Hubungi
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="pt-10 items-center justify-center flex gap-5">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default CarouselBanner;
