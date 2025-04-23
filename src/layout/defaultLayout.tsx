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
            <main className="bg-gray-100 min-h-screen text-black">
                {children}
            </main>
        </div>
    );
};
export default DefaultLayout;
