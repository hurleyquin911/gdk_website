import React from 'react'
import Layout from './Layout'
import { motion } from "framer-motion";
import Gambar from "../assets/img/1.jpg"
import { FaPhone } from "react-icons/fa";
import Gambar1 from "../assets/product/test1/cctv.jpeg"
import Gambar2 from "../assets/product/test1/jaringan.jpg"
import Gambar3 from "../assets/product/test1/server.jpg"
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import GambarServices from "../assets/img/CCTV.jpg"
const products = [
    {
        id: 1,
        name: "Instalasi Jaringan Internet & Maintenance",
        image: Gambar2,
        description: "Layanan pemasangan dan perawatan jaringan internet untuk rumah, kantor, dan gedung, termasuk setting router, switch, dan kabel jaringan.",
        layanan1: "Survey Lokasi Gratis",
        layanan2: "Pemasangan di Tempat",
        layanan3: "Konsultasi Jaringan",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
    {
        id: 2,
        name: "Instalasi Server & Maintenance",
        image: Gambar3,
        description: "Layanan instalasi dan perawatan server, termasuk konfigurasi hardware, software, jaringan, serta monitoring performa server secara berkala.",
        layanan1: "Survey Lokasi Gratis",
        layanan2: "Pemasangan di Tempat",
        layanan3: "Konsultasi Server",
        layanan4: "Garansi 1 Bulan",
        layanan5: "Dukungan Pelanggan 24/7",
    },
    {
        id: 3,
        name: "Pemasangan CCTV & Maintenance",
        image: Gambar1,
        description: "Layanan pemasangan dan perawatan CCTV untuk meningkatkan keamanan properti Anda, termasuk setting kamera, perekam, dan pemantauan jarak jauh.",
        layanan1: "Survey Lokasi Gratis",
        layanan2: "Pemasangan di Tempat",
        layanan3: "Pemeliharaan Berkala",
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
                className="min-h-[80vh] flex flex-col justify-center xl:px-0"
            >
                <div className="container mx-auto">

                    <div className="flex flex-col xl:flex-row items-start gap-8">
                        {/* bagian teks */}
                        <div className="text-left xl:order-none">
                            <div>
                                <h1 className="text-[28px] font-bold text-gray-800 group-hover:text-accent transition-all duration-500 capitalize">
                                    Jasa Layanan Network & Security
                                </h1>
                                <p className="max-w-[500px] mb-9 text-gray-500 text-xs xl:text-sm">
                                    Kami menyediakan layanan instalasi, konfigurasi, dan pemeliharaan teknologi untuk mendukung infrastruktur digital bisnis Anda. Dengan fokus pada integrasi sistem yang tepat guna, tim ahli kami siap membantu mulai dari pemasangan jaringan internet, instalasi aplikasi bisnis, hingga perawatan software dan perangkat keamanan seperti CCTV.
                                </p>
                            </div>

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
                            </div>
                        </div>

                        {/* bagian photo */}
                        <div className="xl:order-none mb-8 xl:mb-0">
                            <img
                                src={GambarServices}
                                alt="Foto Profil"
                                className="w-120 h-120 object-cover hidden xl:block"
                            />
                        </div>
                    </div>



                    {/* List Produk */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-black">Daftar Layanan Network & Security</h3>

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
                                                href="https://wa.me/1234567890"
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