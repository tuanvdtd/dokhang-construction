import Image from "next/image";
import Link from "next/link";
import { TextAlignJustify, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function Header() {
  return (
    <div className='w-full h-18 bg-[#F8FAFC] flex items-center border-b border-[#E2E8F0] fixed top-0 z-50'>
      <Link href="/" className="flex mx-3 md:basis-1/6 md:justify-center">
        <Image src="/logo1.png" alt="logo" width={70} height={70} />
      </Link>
      <nav className="basis-4/6 hidden justify-center space-x-5 lg:space-x- text-xl font-bold md:flex whitespace-nowrap">
        <Link href="/" className="text-gray-700 hover:text-blue-600 transition relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2.2px] after:w-0 after:bg-[#24507A] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full after:origin-center">Trang chủ</Link>
        <Link href="/gioi-thieu" className="text-gray-700 hover:text-blue-600 transition relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2.2px] after:w-0 after:bg-[#24507A] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full after:origin-center">Giới thiệu</Link>
         <Link href="/dich-vu" className="text-gray-700 hover:text-blue-600 transition relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2.2px] after:w-0 after:bg-[#24507A] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full after:origin-center">Dự án</Link>
        <Link href="/dich-vu" className="text-gray-700 hover:text-blue-600 transition relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2.2px] after:w-0 after:bg-[#24507A] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full after:origin-center">Dịch vụ</Link>
        <Link href="/lien-he" className="text-gray-700 hover:text-blue-600 transition relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2.2px] after:w-0 after:bg-[#24507A] after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full after:origin-center">Liên hệ</Link>
      </nav>
      <div className="flex-1 flex justify-end items-center space-x-10 mx-3 md:basis-1/6 md:justify-center">
        {/* <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button> */}
        <a
          href="tel:0123456789"
          className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors animate-pulse-call"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75C2.25 4.955 3.705 3.5 5.5 3.5h.38c.872 0 1.684.387 2.22 1.06l1.26 1.54a2.25 2.25 0 01.37 2.31l-.52 1.17a.75.75 0 00.18.82l3.82 3.82a.75.75 0 00.82.18l1.17-.52a2.25 2.25 0 012.31.37l1.54 1.26a2.78 2.78 0 011.06 2.22v.38c0 1.795-1.455 3.25-3.25 3.25-8.284 0-15-6.716-15-15z"
            />
          </svg>
          <span className="text-lg font-semibold">0123.456.789</span>
      </a>
        <Drawer direction="left">
          <DrawerTrigger className="md:hidden">
            <TextAlignJustify />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex-row items-center justify-between">
              <div>
                <DrawerTitle><Image src="/logo1.png" alt="logo" width={70} height={70} /></DrawerTitle>
              </div>
              <DrawerClose asChild>
                <button className="rounded-full p-2 hover:bg-gray-200 transition">
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>
            <nav className="flex flex-col space-y-4 px-4 py-2">
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold">Trang chủ</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold">Giới thiệu</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold">Dịch vụ</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold">Liên hệ</Link>
            </nav>
            <DrawerFooter>
              <DrawerClose asChild>
                <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">Đóng</button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Header;