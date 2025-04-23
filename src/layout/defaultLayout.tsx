import React, { useState } from "react";
import Navbar from "@/components/navbar";

interface DefaultLayoutProps {
    children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-white min-h-screen">
            <Navbar/>
            <main className="bg-white min-h-screen text-black w-full">
                {children}
            </main>
        </div>
    );
};
export default DefaultLayout;
