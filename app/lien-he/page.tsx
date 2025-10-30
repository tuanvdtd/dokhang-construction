"use client";

import { useState, useEffect} from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'sonner';

export default function ContactSection() {
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget; // ✅ tách riêng form
    if (!captcha) {
      toast.warning("Vui lòng xác minh Captcha!");
      return;
    }

    setIsSubmitting(true); 

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      token: captcha,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        toast.success("Gửi liên hệ thành công!");
        setCaptcha(null);
        form.reset(); // Reset form sau khi gửi thành công
        return;
      } else {
        toast.error("Lỗi: " + (result.error || "Không gửi được email!"));
        return;
      }
    } catch (err) {
      console.error(err);
      toast.error("Lỗi hệ thống!");
    } finally {
      setIsSubmitting(false); // Kết thúc gửi
    }
  };
  useEffect(() => {
      const prev = window.history.scrollRestoration;
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return () => {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = prev ?? 'auto';
        }
      };
    }, []);


  return (
    <section className="w-full mt-16 md:mt-20">
      {/* Ảnh đầu trang */}
      <div className="relative w-full h-64 md:h-96 lg:h-128">
        <Image
          src="/anh1.jpg"
          alt="Banner"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Phần bản đồ + form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10 items-stretch">
        {/* Google Map */}
        <div className="w-full h-96 md:h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.911238929126!2d105.84605087464776!3d21.035746887534687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab992b00d66b%3A0xd7c7a8617e8a958f!2s81%20Ph%E1%BB%91%20L%E1%BA%A1c%20Trung%2C%20Hai%20B%C3%A0%20Tr%C6%B0ng%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1698397000000!5m2!1svi!2s"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-2xl border-2 border-gray-200"
            allowFullScreen
          ></iframe>
        </div>

        {/* Form liên hệ */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Liên hệ với chúng tôi
          </h2>

          <input
            name="name"
            type="text"
            placeholder="Họ và tên"
            className="p-3 border rounded-md focus:outline-blue-700"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-blue-700"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            className="p-3 border rounded-md focus:outline-blue-700"
            required
          />
          <textarea
            name="message"
            placeholder="Nội dung"
            rows={4}
            className="p-3 border rounded-md focus:outline-blue-700"
            required
          ></textarea>

          {/* Google reCAPTCHA */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptcha(token)}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
           {isSubmitting ? "ĐANG GỬI..." : "GỬI LIÊN HỆ"}
          </button>
        </form>
      </div>
    </section>
  );
}
