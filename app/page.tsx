"use client";

import Image from "next/image";
import ProfilePhoto from "@/public/image.png";
import Link from "next/link";
import X from "@/public/x.png"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <>
        <div className="fixed inset-0 flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="w-1/2 h-full bg-black/90 border-r"
          />

          <div className="fixed inset-0 flex items-center justify-center z-[100]">
            <div className="relative h-18 w-18">
              <div className="absolute inset-0 border z-100"></div>
              <div className="absolute inset-0 border animate-spin z-100"></div>
            </div>
          </div>


          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            className="w-1/2 h-full bg-black/90 border-l"
          />
        </div>

      </>
    );
  }
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="https://shared.fastly.steamstatic.com/community_assets/images/items/1263950/4d466f77edf3265a253fba79d47bc91a37e34920.webm"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        ></video>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="
              relative
              flex flex-col lg:flex-row items-center justify-center
              h-auto w-[95%] sm:w-[70vh] lg:w-[100vh]
              bg-black/20 rounded-lg backdrop-blur-md text-white py-10
            ">

            <div className="absolute top-0 left-0 w-[40px] h-[0.9px] bg-gradient-to-r from-white to-transparent after:content-[''] after:absolute after:top-0 after:left-0 after:w-[0.9px] after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent"></div> <div className="absolute bottom-[18px] right-[-20px] w-[40px] h-[0.9px] rotate-[270deg] bg-gradient-to-r from-white to-transparent after:content-[''] after:absolute after:bottom-0 after:right-full after:w-[0.9px] after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent after:rotate-180"></div> <div className="absolute bottom-0 left-0 w-[40px] h-[0.9px] bg-gradient-to-r from-white to-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[0.9px] after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent after:rotate-180"></div> <div className="absolute top-0 right-0 w-[40px] h-[0.9px] rotate-180 bg-gradient-to-r from-white to-transparent after:content-[''] after:absolute after:bottom-0 after:right-full after:w-[0.9px] after:h-[40px] after:bg-gradient-to-b after:from-white after:to-transparent after:rotate-180"></div> <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[2.5px] bg-gray-300 rounded-b-[5px]"></div> <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[2.5px] bg-gray-300 rounded-t-[5px]"></div>

            <div className="flex lg:w-80 md:w-80 sm:w-20 flex-col items-center justify-center space-y-[5px]">
              <div className="relative rounded-[10%] border-2 border-transparent animated-border p-[2px]
                [background:linear-gradient(45deg,black,theme(colors.black)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.800)_80%,_theme(colors.gray.500)_86%,_theme(colors.white)_90%,_theme(colors.gray.500)_94%,_theme(colors.zinc.600/.48))_border-box]">
                <Image
                  src={ProfilePhoto}
                  height={150}
                  width={150}
                  alt="Profile photo"
                  className="rounded-[8%] select-none"
                />
              </div>

            </div>
            <div className="w-full">
              <div className="w-full flex justify-center lg:justify-start lg:ml-10 mt-0">
                <p className="text-white text-lg font-semibold sm:text-[24px] sm:mb-10 tracking-wide h-1 md:h-[0.1px]">
                  Javohir
                </p>
              </div>

              <div className="w-full flex justify-center lg:justify-start lg:ml-10 mt-6">
                <div>
                  <span className="fi fi-uz"></span>
                  <span className="ml-2 rounded-[10%]">Uzbekistan</span>
                </div>
              </div>

              <div className="flex w-full items-conter justify-around">
                <Link href="https://t.me/python_dev_junior" target="_blank">
                  <div className="mt-6 group w-12 h-12 shadow-[0_0_15px_2px] shadow-white rounded-full flex items-center justify-center backdrop-blur-sm hover:w-44 hover:h-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10">
                    <span className="group-hover:ml-[-10px] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                      </svg>
                    </span>
                    <span className="opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[120px] group-hover:translate-x-2 transition-all duration-300 text-white text-sm font-medium">
                      Telegram
                    </span>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/python_dev_junior/" target="_blank">
                  <div className="mt-6 group w-12 h-12 shadow-[0_0_15px_2px] shadow-white rounded-full flex items-center justify-center backdrop-blur-sm hover:w-44 hover:h-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10">
                    <span className="group-hover:ml-[-10px] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </span>
                    <span className="opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[120px] group-hover:translate-x-2 transition-all duration-300 text-white text-sm font-medium">
                      Instagram
                    </span>
                  </div>
                </Link>
                <Link href="https://uzbekdevs.uz/@python_dev_junior" target="_blank">
                  <div className="mt-6 group w-12 h-12 shadow-[0_0_15px_2px] shadow-white rounded-full flex items-center justify-center backdrop-blur-sm hover:w-44 hover:h-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10">
                    <span className="group-hover:ml-[-10px] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </span>
                    <span className="opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[120px] group-hover:translate-x-2 transition-all duration-300 text-white text-sm font-medium">
                      GitHub
                    </span>
                  </div>
                </Link>
                <Link href="https://x.com/py_dev_junior" target="_blank">
                  <div className="mt-6 group w-12 h-12 shadow-[0_0_15px_2px] shadow-white rounded-full flex items-center justify-center backdrop-blur-sm hover:w-44 hover:h-12 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10">
                    <span className="group-hover:ml-[-10px] transition-all duration-300">
                      <Image src={X} width={32} height={32} alt="uz devs" />
                    </span>
                    <span className="opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[120px] group-hover:translate-x-2 transition-all duration-300 text-white text-sm font-medium">
                      x com
                    </span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
