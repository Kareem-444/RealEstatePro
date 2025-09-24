"use client";
import { useEffect } from "react";
import NProgress from "nprogress";
import { usePathname } from "next/navigation";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 120 });

export default function Loader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: linear-gradient(90deg, #059669, #047857, #10b981);
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
    `}</style>
  );
}
