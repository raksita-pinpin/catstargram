// components/Navbar.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React, { useState, ReactNode } from "react";
import { Anuphan } from "next/font/google";

// โหลดฟ้อนมาใส่
const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  {/* // ช่องค้นหา */}
  const [searchTerm, setSearchTerm] = useState("");
  // ฟิลเตอร์ข้อมูลตามคำค้นหา
  

  return (
    <nav className="h-16  bg-gray-300 w-full flex items-center justify-between px-4  text-black">
      {/* ฝั่งซ้าย: โลโก้ */}
      <div className="flex items-center">
        <Image 
          src="/Heading 1.svg" 
          alt="Logo" 
          width={40} 
          height={40}
          className="drop-shadow-md xl:w-[60px] 2xl:w-[100px]" 
        />
      </div>

      {/* ฝั่งขวา: ช่องค้นหา + ปุ่มต่างๆ */}
      <div className="flex items-center gap-4">
        {/* ช่องค้นหา */}
        <div className="relative w-[231px] rounded-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm pl-10 pr-4 h-[40px] p-2 text-[16px] shadow-sm focus:outline-none focus:ring rounded-full w-full"
          />
          <Image
            src="/Symbol.svg"
            alt="Search Icon"
            width={16}
            height={14}
            className="absolute w-4 h-auto left-3 top-1/2 -translate-y-1/2"
          />
        </div>

        {/* ปุ่มไอคอน */}
        <div className="flex items-center gap-3">
          <Image 
            src="/Button+.svg" 
            alt="Add" 
            width={24} 
            height={24}
            className="drop-shadow-md" 
          />
          <Image 
            src="/Buttonheart.svg" 
            alt="Heart" 
            width={24} 
            height={24}
            className="drop-shadow-md" 
          />
          <Image 
            src="/Button.svg" 
            alt="User" 
            width={24} 
            height={24}
            className="drop-shadow-md" 
          />
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
