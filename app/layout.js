import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import ParticleBurst from "../components/ParticleBurst";

export const metadata = {
  title: "Ashikur Rahman | MERN Stack Developer",
  description: "MERN Stack Developer building full-stack web apps with React, Next.js, Node.js, and MongoDB.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" }
    ],
    shortcut: "/icon.svg",
    apple: "/logo.png",
  },
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
