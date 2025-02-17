import NavigationButton from "@/components/Button";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Image & Video Object Detection",
  description:
    "An advanced app for detecting objects in images and videos with tensorflow-models. Create, analyze, and explore real-time object detection.",
  author: "Created by Shivani",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ` + poppins.className}>
        {children}
        <NavigationButton />
      </body>
    </html>
  );
}
