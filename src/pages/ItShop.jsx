import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import "swiper/css";

import work1 from "../assets/img/Banner.jpg";
import productImg from "../assets/product/Poster Jasa Service.png"; // Gambar default produk

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";

import WorkSliderBtns from "../components/WorksSliderBtns";

import Gambar1 from "../assets/img/bundlekomputer2.png"
import Gambar2 from "../assets/img/laptop.png"
import Gambar3 from "../assets/img/printer1.png"

import PcGaming from "../assets/img/pcgaming.png"
import PcAdmin from "../assets/product/ITShop/Pc admin.jpg"
import PcKasir from "../assets/product/ITShop/Pc Kasir.png"
import PcServer from "../assets/product/ITShop/PC Server.jpg"

import LaptopTuf from "../assets/product/ITShop/Asus TUF.jpg"
import LaptopRog from "../assets/product/ITShop/ROG.jpg"
import LaptopLenovoLoq from "../assets/product/ITShop/Lenovo Loq.png"
import LaptopLenovo from "../assets/product/ITShop/Ideapad Gaming.jpg"
import LaptopAxioPongo from "../assets/product/ITShop/axio pongo.png"
import LaptopLenovoThinkpad from "../assets/product/ITShop/Thinkpad.jpg"
import HpEliteBook from "../assets/product/ITShop/elitebook.jpg"
import DellLatitude from "../assets/product/ITShop/latitude.jpg"

import PrinterHp from "../assets/product/ITShop/HP-LaserJet-108W.png"
import PrinterCannon from "../assets/product/ITShop/canon.jpg"
import PrinterEpson from "../assets/product/ITShop/Printer-Epson-L3210-3.jpg"



const projects = [
    {
        num: "01",
        category: "Komputer",
        title: "Project Name 1",
        description:
            "Kami menyediakan solusi lengkap untuk kebutuhan komputer, mulai dari perakitan PC custom (sesuai kebutuhan gaming, desain, atau bisnis), monitor berkualitas tinggi, komponen PC terbaru (CPU, VGA, RAM, SSD/HDD), hingga aksesoris komputer seperti keyboard, mouse, dan perangkat pendukung lainnya. Kami juga menyediakan komputer siap pakai dari merek ternama untuk memastikan operasional bisnis atau personal berjalan optimal.",
        stack: [{ name: "RakitPc" }, { name: "Monitor" }, { name: "Komponen-PC" }, { name: "Aksesoris Komputer" }],
        image: Gambar1,
        live: "https://www.google.com",
        github: "https://www.google.com",
        products: [
            {
                id: 1,
                name: "Pc Gaming",
                price: "Rp 12.000.000",
                image: PcGaming
            },
            {
                id: 2,
                name: "Komputer Admin",
                price: "Rp 12.000.000",
                image: PcAdmin
            },
            {
                id: 3,
                name: "PC Server",
                price: "Rp 3.500.000",
                image: PcServer
            },
            {
                id: 4,
                name: "PC Kasir",
                price: "Rp 1.200.000",
                image: PcKasir
            },
        ]
    },
    {
        num: "02",
        category: "Laptop",
        title: "project 2",
        description:
            "Tersedia laptop baru original dengan garansi resmi dari brand terpercaya untuk performa maksimal, serta laptop build-up (rekondisi berkualitas) yang terjangkau namun tetap andal. Kami juga melengkapi kebutuhan pengguna dengan aksesoris pendukung seperti tas laptop, cooling pad, dan docking station untuk kenyamanan penggunaan sehari-hari.",
        stack: [{ name: "ReactJS" }, { name: "C++" }, { name: "Python" }],
        image: Gambar2,
        live: "",
        github: "",
        products: [
            {
                id: 1,
                name: "Asus TUF",
                price: "Rp 15.000.000",
                image: LaptopTuf
            },
            {
                id: 2,
                name: "ROG",
                price: "Rp 10.000.000",
                image: LaptopRog
            },
            {
                id: 3,
                name: "Lenovo LOQ",
                price: "Rp 20.000.000",
                image: LaptopLenovoLoq
            },
            {
                id: 4,
                name: "Lenovo Ideapad Gaming",
                price: "Rp 12.000.000",
                image: LaptopLenovo
            },
            {
                id: 5,
                name: "Axio Pongo",
                price: "Rp 12.000.000",
                image: LaptopAxioPongo
            },
            {
                id: 6,
                name: "Lenovo Thinkpad",
                price: "Rp 12.000.000",
                image: LaptopLenovoThinkpad
            },
            {
                id: 7,
                name: "Hp Elitebook",
                price: "Rp 12.000.000",
                image: HpEliteBook
            },
            {
                id: 8,
                name: "Dell latitude",
                price: "Rp 12.000.000",
                image: DellLatitude
            },

        ]
    },
    {
        num: "03",
        category: "Printer & Scanner",
        title: "project 3",
        description:
            "Lengkapi bisnis Anda dengan printer multifungsi (print, scan, copy), printer laserjet untuk hasil cetak cepat, printer dot matrix untuk kebutuhan faktur, hingga scanner dokumen berkecepatan tinggi. Kami juga menyediakan proyektor HD untuk presentasi profesional, serta suku cadang printer/scanner asli seperti tinta, toner, dan drum untuk perawatan jangka panjang.",
        stack: [{ name: "R programing" }, { name: "Python" }, { name: "Pycharm" }],
        image: Gambar3,
        live: "",
        github: "",
        products: [
            {
                id: 1,
                name: "Epson",
                price: "Rp 3.000.000",
                image: PrinterEpson
            },
            {
                id: 2,
                name: "Canon",
                price: "Rp 2.500.000",
                image: PrinterCannon
            },
            {
                id: 3,
                name: "Hp",
                price: "Rp 4.000.000",
                image: PrinterHp
            }
        ]
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <Layout>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-[50%] text-black">
                                <div className="text-8xl font-extrabold text-outline text-black">
                                    {project.num}
                                </div>
                                <h2 className="text-[42px] font-bold text-gray-800 group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.category}
                                </h2>
                                <p className="text-gray-800">{project.description}</p>
                                <div className="border border-white/20 "></div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px]"
                                onSlideChange={handleSlideChange}
                            >
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[350px] relative group flex justify-center items-center">
                                            <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={project.image}
                                                    className="object-cover w-full h-full"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <WorkSliderBtns
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[32px] w-[54px] flex justify-center items-center transition-all"
                                />
                            </Swiper>
                        </div>
                    </div>

                    {/* List Produk */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-black">Daftar Produk {project.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {project.products.map((product) => (
                                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-40 object-contain rounded-md mb-3"
                                    />
                                    <h4 className="text-xs font-semibold mb-1 text-gray-800">{product.name}</h4>
                                    <div className="pt-2 w-full">
                                        <a
                                            href="https://wa.me/1234567890"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#ffff] text-black border-2 border-black px-4 py-2 rounded-md transform transition-transform duration-500 hover:scale-105 active:scale-95 w-full block text-center"
                                        >
                                            Pesan Sekarang
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default Work;
