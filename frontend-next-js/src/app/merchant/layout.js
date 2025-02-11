import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import DashNavBar from "@/components/DashNavBar";
import MerchantOperationButton from "@/components/MerchantOperationButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Merchat @ Print Manjil",
  description:
    "Developed by Afreed Bin Haque. Email: afreed46@gmail.com. Phone: 01839194860",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <DashNavBar />
      <div className="w-[90%] mx-auto">
        <MerchantOperationButton />
        <div className="mt-4"> {children}</div>
      </div>
    </div>
  );
}
