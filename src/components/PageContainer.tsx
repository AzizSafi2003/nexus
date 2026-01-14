"use client";
import { useEffect, useState } from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optionally render differently or add mobile-specific styles
  return (
    <div className={isMobile ? "mobile-container" : "desktop-container"}>
      {children}
    </div>
  );
}
