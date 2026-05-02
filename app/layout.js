import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import CustomCursor from "../components/CustomCursor";
import ParticleBurst from "../components/ParticleBurst";

export const metadata = {
  title: "MD. Ashikur Rahman Ashik | Portfolio",
  description: "Freelance Front-end Web Developer with 3+ years of experience.",
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
