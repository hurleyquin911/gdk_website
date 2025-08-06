import React from "react";
import Layout from "./Layout";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { ScrollArea } from "../components/ui/scroll-area";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { FaPhoneAlt } from "react-icons/fa";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";

import { motion } from "framer-motion";

import PinGmaps from "../assets/digitalmarketing/pingmaps.png"
import Branding from "../assets/digitalmarketing/branding.jpg"
import KelolaKonten from "../assets/digitalmarketing/kelolakonten.jpg"
import WebDevelop from "../assets/digitalmarketing/webdevelop.png"

// Gambar gmaps
import Gambar1 from "../assets/product/1pingmaps/pemasangan titik.jpg"
import Gambar2 from "../assets/product/1pingmaps/optimasi.jpg"
import Gambar3 from "../assets/product/1pingmaps/gmaps barcode.png"
import Gambar4 from "../assets/product/1pingmaps/manajemen data.png"
import Gambar5 from "../assets/product/1pingmaps/Konsultan.jpg"

//Gambar Branding
import Gambars1 from "../assets/product/1branding/design brand.jpg"
import Gambars2 from "../assets/product/1branding/ui ux design.jpg"
import Gambars3 from "../assets/product/1branding/konsultan.jpeg"
import Gambars4 from "../assets/product/1branding/visual branding.jpg"

//Gambar Kelola Konten
import Gambarx1 from "../assets/product/1kelolakonten/youtube.jpg"
import Gambarx2 from "../assets/product/1kelolakonten/tiktok.png"
import Gambarx3 from "../assets/product/1kelolakonten/konten strategi analis.jpg"

//Gambar Web Develop
import Gambare1 from "../assets/product/1webdev/full-stack-php-developer.jpg"
import Gambare2 from "../assets/product/1webdev/front end.jpg"
import Gambare3 from "../assets/product/1webdev/SEO.jpg"
import Gambare4 from "../assets/product/1webdev/web design.jpg"
import Gambare5 from "../assets/product/1webdev/SEO consultant.jpg"



// Data Pin Gmaps
const pingmaps = {
    icon: PinGmaps,
    title: "Pin Gmaps",
    description:
        "Kami menyediakan layanan pembuatan, optimasi, dan pemasangan titik lokasi di Google Maps untuk meningkatkan visibilitas bisnis Anda secara online.",
    items: [
        {
            company: "GDK - Source",
            position: "Pemasangan Titik Lokasi",
            duration: "2021 - Present",
            image: Gambar1
        },
        {
            company: "GDK - Source",
            position: "Optimasi Google Maps",
            duration: "2022 - Present",
            image: Gambar2
        },
        {
            company: "GDK - Source",
            position: "Pembuatan Barcode Lokasi",
            duration: "2023 - Present",
            image: Gambar3
        },
        {
            company: "GDK - Source",
            position: "Manajemen Data Lokasi",
            duration: "2023 - Present",
            image: Gambar4
        },
        {
            company: "GDK - Source",
            position: "Konsultan SEO Maps",
            duration: "2023 - Present",
            image: Gambar5
        },
    ],
};

// Data Branding
const branding = {
    icon: Branding,
    title: "Branding",
    description:
        "Kami membantu membangun identitas visual dan strategi merek yang kuat untuk bisnis Anda melalui desain kreatif, branding digital, dan kampanye pemasaran.",
    items: [
        {
            company: "GDK - Source",
            position: "Desainer Branding",
            duration: "2021 - Present",
            image: Gambars1
        },
        {
            company: "GDK - Source",
            position: "UI/UX Designer",
            duration: "2022 - Present",
            image: Gambars2
        },
        {
            company: "GDK - Source",
            position: "Konsultan Strategi Brand",
            duration: "2023 - Present",
            image: Gambars3
        },
        {
            company: "GDK - Source",
            position: "Pengembangan Identitas Visual",
            duration: "2023 - Present",
            image: Gambars4
        },
    ],
};

// Data Jasa Kelola Konten
const kelolakonten = {
    icon: KelolaKonten,
    title: "Jasa Kelola Konten",
    description:
        "Kami menawarkan layanan manajemen konten kreatif untuk platform seperti YouTube dan TikTok, mulai dari pembuatan, pengelolaan, hingga optimasi konten.",
    items: [
        {
            company: "GDK - Source",
            position: "Manajemen Konten YouTube",
            duration: "2021 - Present",
            image: Gambarx1
        },
        {
            company: "GDK - Source",
            position: "Manajemen Konten TikTok",
            duration: "2022 - Present",
            image: Gambarx2
        },
        {
            company: "GDK - Source",
            position: "Content Strategy & Analytics",
            duration: "2023 - Present",
            image: Gambarx3
        },
    ],
};

// Data Web Development
const webdevelop = {
    icon: WebDevelop,
    title: "Web Development",
    description:
        "Kami menyediakan layanan pengembangan website profesional untuk berbagai kebutuhan, mulai dari e-commerce, company profile, hingga landing page.",
    items: [
        {
            company: "GDK - Source",
            position: "Fullstack Web Developer",
            duration: "2021 - Present",
            image: Gambare1
        },
        {
            company: "GDK - Source",
            position: "Frontend Developer",
            duration: "2022 - Present",
            image: Gambare2
        },
        {
            company: "GDK - Source",
            position: "SEO Specialist",
            duration: "2023 - Present",
            image: Gambare3
        },
        {
            company: "GDK - Source",
            position: "Web Designer",
            duration: "2023 - Present",
            image: Gambare4
        },
        {
            company: "GDK - Source",
            position: "SEO Consultant",
            duration: "2023 - Present",
            image: Gambare5
        },
    ],
};


const Resume = () => {
    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2.4,
                        duration: 0.4,
                        ease: "easeIn",
                    },
                }}
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs
                        defaultValue="pingmaps"
                        className="flex flex-col xl:flex-row gap-[60px]"
                    >
                        {/* Bagian Konten */}
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
                            <TabsTrigger value="pingmaps">Pin Gmaps</TabsTrigger>
                            <TabsTrigger value="branding">Branding</TabsTrigger>
                            <TabsTrigger value="kelolakonten">Jasa Kelola Konten</TabsTrigger>
                            <TabsTrigger value="webdevelop">Web Develop</TabsTrigger>
                        </TabsList>
                        <div className="min-h-[70vh] w-full">

                            {/* Bagian Pin Gmaps */}
                            <TabsContent value="pingmaps" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-black">
                                        {pingmaps.title}
                                    </h3>
                                    <div>
                                        <img src={pingmaps.icon} alt="" />
                                    </div>
                                    <p className="max-w-[600px] text-gray-500 mx-auto xl:mx-0">
                                        {pingmaps.description}
                                    </p>
                                    <a href="https://wa.me/6287755480454" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="uppercase flex items-center gap-2"
                                        >
                                            <span>Kontak Kami</span>
                                            <FaPhoneAlt className="text-xl" />
                                        </Button>
                                    </a>
                                    <ScrollArea className="h-[800px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {pingmaps.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
                                                    >
                                                        <div className="m-2">
                                                            {/* Gambar dengan overlay gradient */}
                                                            <div className="relative w-full h-[240px] overflow-hidden">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.position}
                                                                    className="w-full h-full object-contain  group-hover:scale-110 transition-transform duration-500"
                                                                />
                                                                {/* Gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                                {/* Duration badge */}
                                                                <div className="absolute top-4 right-4">
                                                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                                        {item.duration}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Konten dengan spacing yang baik */}
                                                            <div className="p-6 space-y-4">
                                                                {/* Position title */}
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-accent transition-colors duration-200">
                                                                    {item.position}
                                                                </h3>

                                                                {/* Company info dengan icon */}
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                                            {item.company}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                {/* Action button atau additional info */}
                                                                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                            Service
                                                                        </span>
                                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                            <svg
                                                                                className="w-5 h-5 text-accent"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* Bagian Branding */}
                            <TabsContent value="branding" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-black">
                                        {branding.title}
                                    </h3>
                                    <div>
                                        <img src={branding.icon} alt="" />
                                    </div>
                                    <p className="max-w-[600px] text-gray-500 mx-auto xl:mx-0">
                                        {branding.description}
                                    </p>
                                    <a href="https://wa.me/6287755480454" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="uppercase flex items-center gap-2"
                                        >
                                            <span>Kontak Kami</span>
                                            <FaPhoneAlt className="text-xl" />
                                        </Button>
                                    </a>
                                    <ScrollArea className="h-[600px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {branding.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
                                                    >
                                                        <div className="m-2">
                                                            {/* Gambar dengan overlay gradient */}
                                                            <div className="relative w-full h-[240px] overflow-hidden">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.position}
                                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                                />
                                                                {/* Gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                                {/* Duration badge */}
                                                                <div className="absolute top-4 right-4">
                                                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                                        {item.duration}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Konten dengan spacing yang baik */}
                                                            <div className="p-6 space-y-4">
                                                                {/* Position title */}
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-accent transition-colors duration-200">
                                                                    {item.position}
                                                                </h3>

                                                                {/* Company info dengan icon */}
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                                            {item.company}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                {/* Action button atau additional info */}
                                                                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                            Brand Design
                                                                        </span>
                                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                            <svg
                                                                                className="w-5 h-5 text-accent"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* Bagian Jasa Kelola Konten */}
                            <TabsContent value="kelolakonten" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-black">
                                        {kelolakonten.title}
                                    </h3>
                                    <div>
                                        <img src={kelolakonten.icon} alt="" />
                                    </div>
                                    <p className="max-w-[600px] text-gray-500 mx-auto xl:mx-0">
                                        {kelolakonten.description}
                                    </p>
                                    <a href="https://wa.me/6287755480454" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="uppercase flex items-center gap-2"
                                        >
                                            <span>Kontak Kami</span>
                                            <FaPhoneAlt className="text-xl" />
                                        </Button>
                                    </a>
                                    <ScrollArea className="h-[600px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {kelolakonten.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
                                                    >
                                                        <div className="m-2">
                                                            {/* Gambar dengan overlay gradient */}
                                                            <div className="relative w-full h-[240px] overflow-hidden">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.position}
                                                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                                />
                                                                {/* Gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                                {/* Duration badge */}
                                                                <div className="absolute top-4 right-4">
                                                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                                        {item.duration}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Konten dengan spacing yang baik */}
                                                            <div className="p-6 space-y-4">
                                                                {/* Position title */}
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-accent transition-colors duration-200">
                                                                    {item.position}
                                                                </h3>

                                                                {/* Company info dengan icon */}
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                                            {item.company}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                {/* Action button atau additional info */}
                                                                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                            Content Management
                                                                        </span>
                                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                            <svg
                                                                                className="w-5 h-5 text-accent"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            {/* Bagian Jasa Web Develop */}
                            <TabsContent value="webdevelop" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-black">
                                        {webdevelop.title}
                                    </h3>
                                    <div>
                                        <img src={webdevelop.icon} alt="" />
                                    </div>
                                    <p className="max-w-[600px] text-gray-500 mx-auto xl:mx-0">
                                        {webdevelop.description}
                                    </p>
                                    <a href="https://wa.me/6287755480454" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="uppercase flex items-center gap-2"
                                        >
                                            <span>Kontak Kami</span>
                                            <FaPhoneAlt className="text-xl" />
                                        </Button>
                                    </a>
                                    <ScrollArea className="h-[600px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {webdevelop.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
                                                    >
                                                        <div className="m-2">
                                                            {/* Gambar dengan overlay gradient */}
                                                            <div className="relative w-full h-[240px] overflow-hidden">
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.position}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                />
                                                                {/* Gradient overlay */}
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                                {/* Duration badge */}
                                                                <div className="absolute top-4 right-4">
                                                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                                                        {item.duration}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Konten dengan spacing yang baik */}
                                                            <div className="p-6 space-y-4">
                                                                {/* Position title */}
                                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-accent transition-colors duration-200">
                                                                    {item.position}
                                                                </h3>

                                                                {/* Company info dengan icon */}
                                                                <div className="flex items-center gap-3">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                                            {item.company}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                {/* Action button atau additional info */}
                                                                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                                                                    <div className="flex items-center justify-between">
                                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                            Web Development
                                                                        </span>
                                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                            <svg
                                                                                className="w-5 h-5 text-accent"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth={2}
                                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>



                            {/* Bagian Education */}
                            {/* <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold text-accent">
                                        {education.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-[#232329] h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.degree}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">
                                                                {item.institution}
                                                            </p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent> */}

                            {/* Bagian Skills */}
                            {/* <TabsContent value="skills" className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold text-accent ">
                                            {skills.title}
                                        </h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skills.description}
                                        </p>
                                        <ul
                                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]
              gap-4 "
                                        >
                                            {skills.skilllist.map((skill, index) => {
                                                return (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    className="w-full h-[150px] bg-[#232329] rounded-xl flex 
                          justify-center items-center group  "
                                                                >
                                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className="capitalize ">{skill.name}</p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent> */}

                            {/* Bagian About*/}
                            {/* <TabsContent
                                value="about"
                                className="w-full text-center xl:text-left"
                            >
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold text-accent">
                                        {about.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {about.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul
                                            className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto
            xl:mx-0"
                                        >
                                            {about.info.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-center justify-center 
                  xl:justify-start gap-4 bg-slate-500 p-2 rounded-md"
                                                    >
                                                        <span className="text-white/60">
                                                            {item.fieldName}
                                                        </span>
                                                        <span className="text-xl">{item.fieldValue}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent> */}
                        </div>
                    </Tabs>
                </div>
            </motion.div>
        </Layout>
    );
};

export default Resume;
