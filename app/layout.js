import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import ParticleBurst from "../components/ParticleBurst";

export const metadata = {
  title: "Ashikur Rahman | MERN Stack Developer",
  description: "MERN Stack Developer building full-stack web apps with React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-darker text-white font-sans selection:bg-brand-teal selection:text-brand-darker antialiased">
        <CustomCursor />
        <ParticleBurst />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
