import React from 'react'
import Layout from './Layout'
import { motion } from "framer-motion";
import Gambar from "../assets/img/1.jpg"
import { FaPhone } from "react-icons/fa";
import Gambar2 from "../assets/product/Poster Jasa Service.png"
import Gambar3 from "../assets/img/Banner.jpg"
import ItServices from "../assets/img/Foto samping Service & Maintenance.jpg"

import Social from "../components/Social";
import Logo from "../assets/img/1.jpg";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import PerbaikanPc from "../assets/product/service/Service Pc.png"
import PerbaikanLaptop from "../assets/product/service/Service Laptop.jpg"
import PerbaikanPrinter from "../assets/product/service/Service Printer.jpg"
import PerbaikanProyektor from "../assets/product/service/Service Proyektor.jpeg"

const products = [
    {
        id: 1,
        name: "Jasa Perbaikan Komputer",
        image: PerbaikanPc,
        description: "Layanan perbaikan hardware dan software komputer, termasuk upgrade dan penggantian komponen untuk memastikan performa optimal.",
        layanan1: "Free Pengecekan",
        layanan2: "Layanan On Site",
        layanan3: "Layanan Ambil Antar",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
    {
        id: 2,
        name: "Jasa Perbaikan Laptop",
        image: PerbaikanLaptop,
        description: "Perbaikan berbagai masalah laptop seperti penggantian layar, keyboard, baterai, serta peningkatan performa.",
        layanan1: "Free Pengecekan",
        layanan2: "Layanan On Site",
        layanan3: "Layanan Ambil Antar",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
    {
        id: 3,
        name: "Jasa Pemeliharaan Printer & Scanner",
        image: PerbaikanPrinter,
        description: "Perawatan berkala dan perbaikan printer serta scanner untuk menjaga kualitas cetak dan kelancaran penggunaan.",
        layanan1: "Free Pengecekan",
        layanan2: "Layanan On Site",
        layanan3: "Layanan Ambil Antar",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
    {
        id: 4,
        name: "Jasa Perbaikan Proyektor",
        image: PerbaikanProyektor,
        description: "Layanan perbaikan dan perawatan proyektor, termasuk pembersihan lensa, penggantian lampu, dan perbaikan sistem optik.",
        layanan1: "Free Pengecekan",
        layanan2: "Layanan On Site",
        layanan3: "Layanan Ambil Antar",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
];


const ItService = () => {
    return (
        <Layout>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                className="min-h-[80vh] flex flex-col justify-center  xl:px-0"
            >
                <div className="container">
                    <div
                        className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 "
                    >
                        {/* bagian teks */}
                        <div className="text-left  xl:order-none">
                            <h1 className="text-[28px] p-2 font-bold text-gray-800 group-hover:text-accent transition-all duration-500 capitalize">
                                Jasa Layanan Maintenance & Perbaikan
                            </h1>
                            <p className="max-w-[500px] mb-9 text-gray-500 text-xs xl:text-sm ">
                                Kami memberikan solusi perawatan dan perbaikan komprehensif untuk berbagai perangkat hardware seperti laptop, komputer, printer, dan scanner. Layanan kami mencakup pemeliharaan rutin (preventive maintenance), perbaikan kerusakan (troubleshooting), hingga penggantian komponen yang bermasalah (misal: motherboard, harddisk, layar laptop, kepala printer, atau sensor scanner)
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
                                src={ItServices} // Ganti dengan path gambar Anda
                                alt="Foto Profil"
                                className="w-140 h-140 object-cover hidden xl:block"
                            />
                        </div>
                    </div>

                    {/* List Produk */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-black">Daftar Layanan IT Service</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-40 object-cover rounded-md mb-3"
                                        />
                                        <h4 className="text-sm font-semibold mb-1 text-gray-800">{product.name}</h4>
                                        <p className="text-gray-600 text-xs mb-2">{product.description}</p>

                                        {/* List layanan, hanya muncul jika ada */}
                                        <ul className="list-disc list-inside text-black">
                                            {[product.layanan1, product.layanan2, product.layanan3, product.layanan4, product.layanan5]
                                                .filter((layanan) => layanan) // hanya ambil yang tidak kosong/undefined
                                                .map((layanan, index) => (
                                                    <li key={index} className="text-xs rounded-xl">{layanan}</li>
                                                ))}
                                        </ul>

                                        <div className="pt-2 w-full">
                                            <a
                                                href="https://wa.me/6287755480454"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#ffff] text-black border-2 border-black px-4 py-2 rounded-md transform transition-transform duration-500 hover:scale-105 active:scale-95 w-full block text-center"
                                            >
                                                Hubungi Sekarang
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">Tidak ada layanan yang tersedia.</p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.section>
        </Layout>
    )
}

export default ItService
