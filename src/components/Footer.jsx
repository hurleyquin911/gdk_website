import React from "react";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="bg-accent text-white py-6 mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <span className="font-bold text-lg">Griya Digital Kreasi</span>
                    <p className="text-xs mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                </div>
                <Social
                    containerStyles="flex gap-4 justify-center md:justify-end"
                    iconStyles="w-8 h-8 border border-white rounded-full flex justify-center items-center text-white hover:bg-white hover:text-accent transition-all duration-300"
                />
            </div>
        </footer>
    );
};

export default Footer; 