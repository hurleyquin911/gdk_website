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
        },
        {
            company: "GDK - Source",
            position: "Optimasi Google Maps",
            duration: "2022 - Present",
        },
        {
            company: "GDK - Source",
            position: "Pembuatan Barcode Lokasi",
            duration: "2023 - Present",
        },
        {
            company: "GDK - Source",
            position: "Manajemen Data Lokasi",
            duration: "2023 - Present",
        },
        {
            company: "GDK - Source",
            position: "Konsultan SEO Maps",
            duration: "2023 - Present",
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
        },
        {
            company: "GDK - Source",
            position: "UI/UX Designer",
            duration: "2022 - Present",
        },
        {
            company: "GDK - Source",
            position: "Konsultan Strategi Brand",
            duration: "2023 - Present",
        },
        {
            company: "GDK - Source",
            position: "Pengembangan Identitas Visual",
            duration: "2023 - Present",
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
        },
        {
            company: "GDK - Source",
            position: "Manajemen Konten TikTok",
            duration: "2022 - Present",
        },
        {
            company: "GDK - Source",
            position: "Content Strategy & Analytics",
            duration: "2023 - Present",
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
        },
        {
            company: "GDK - Source",
            position: "Frontend Developer",
            duration: "2022 - Present",
        },
        {
            company: "GDK - Source",
            position: "SEO Specialist",
            duration: "2023 - Present",
        },
        {
            company: "GDK - Source",
            position: "Web Designer",
            duration: "2023 - Present",
        },
        {
            company: "GDK - Source",
            position: "SEO Consultant",
            duration: "2023 - Present",
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
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {pingmaps.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-500 h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-black">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
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
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {branding.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-500 h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-black">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
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
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {kelolakonten.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-500 h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-black">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
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
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {webdevelop.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-500 h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-black">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                            {item.position}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.company}</p>
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
