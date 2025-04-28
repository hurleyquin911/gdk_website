import React from "react";
import Layout from "./Layout";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const services = [
  {
    num: "01",
    title: "Product Name 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet, sed do eiusmod tempor incididunt ut labore et dolore",
    href: "",
  },
  {
    num: "02",
    title: "Service Produk IT",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
  {
    num: "03",
    title: "Instalasi & Maintenance jaringan internet & CCTV",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
  {
    num: "04",
    title: "Kelas Private Komputer dasar untuk anak",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
  {
    num: "05",
    title: "Digital Marketing Sosial media",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad assumenda maiores ab cumque minus esse nulla. Sunt.",
    href: "",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
          >
            {services.map((services, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group bg-gray-300  p-4 rounded-md"
                >
                  {/*Top Bar*/}
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="text-5xl font-extrabold text-outline 
              group-hover:text-outline-hover transition-all duration-500 text-black"
                    >
                      {services.num}
                    </div>
                    <NavLink
                      href={services.href}
                      className="w-[70px] h-[70px] rounded-full bg-gray-500 
                group-hover:bg-accent transition-all duration-500 
                flex justify-center items-center hover:-rotate-45"
                    >
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <BsArrowDownRight className="text-primary text-3xl" />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              <div className="text-accent">
                                {services.title}
                              </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              {services.description}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Kembali</AlertDialogCancel>
                            <AlertDialogAction>
                              <NavLink href="/contact">Kontak Kami</NavLink>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </NavLink>
                  </div>
                  {/*Title*/}
                  <h2
                    className="text-[42px] font-bold leading-none text-black 
            group-hover:text-accent transition-all duration-500"
                  >
                    {services.title}
                  </h2>
                  {/*Description*/}
                  <p className="text-black">{services.description}</p>
                  {/*Border*/}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
