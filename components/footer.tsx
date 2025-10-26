'use client'
import { Facebook, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const TikTokIcon = ({ size = 18, color = "#ff6600" }: { size?: number; color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill={color}
    width={size}
    height={size}
  >
    <path d="M448,209.2a210,210,0,0,1-122.77-39.26V349.43A162.57,162.57,0,1,1,162.56,186.86a164.41,164.41,0,0,1,18.14,1v89.53a72.13,72.13,0,1,0,51.44,69V0H325.23A122.23,122.23,0,0,0,448,122.23Z" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight /2 ;
      setShowScrollTop(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-[#222f3e] text-white px-6 py-12 md:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* --- Left Column --- */}
        <div>
          <div className="flex items-center justify-center md:justify-start  gap-2 mb-6">
            <Logo  />
            <h2 className="text-lg tracking-wide font-semibold">
              Do Khang Construction
            </h2>
          </div>

          <Link href="/lien-he" className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-black transition">
              Liên hệ
            </button>
          </Link>

          <div className="flex justify-center md:justify-start items-center gap-10 mb-4 text-sm">
            <Link href="https://www.facebook.com/DOKHANGCONSTRUCTION" target="_blank" className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
              <Facebook size={18} className="text-orange-500" />
              
              <span>Facebook</span>
            </Link>
            <Link href="https://www.tiktok.com/@dokhangconstruction" target="_blank" className="flex items-center gap-1 hover:text-orange-400 cursor-pointer">
               <TikTokIcon size={18} color="#ff6600" />
              <span>TikTok</span>
            </Link>
          </div>

          <p className="text-xs text-gray-400">
            © All right reserved 2025 Do Khang Contruction
          </p>
        </div>

        {/* --- Middle Column --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Office</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            <strong>Hanoi office:</strong> Đ. Trần Khát Chân, Thanh Nhàn, Hai Bà Trưng, Hà Nội
          </p>
        </div>

        {/* --- Right Column --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:example@gmail.com"
              className="text-orange-400 hover:underline"
            >
              example@gmail.com
            </a>
            <br />
            <strong>Phone:</strong>{" "}
            <a
              href="tel:0123456789"
              className="text-orange-400 hover:underline"
            >
              (0123) 456 789
            </a>
          </p>
          <p className="text-sm mt-2">
            <a href="#" className="hover:text-orange-400">
              Terms of use
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-orange-400">
              Privacy policy
            </a>
          </p>
        </div>
      </div>

      {/* --- Scroll to top --- */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed cursor-pointer bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 animate-fadeIn"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5940692420645!2d105.85618007503096!3d21.00890298063544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf79b855b2f%3A0x216bb58cfc7fed34!2zxJAuIFRy4bqnbiBLaMOhdCBDaMOibiwgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1761404066735!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
