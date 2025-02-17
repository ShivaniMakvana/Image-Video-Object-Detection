"use client";

import { usePathname, useRouter } from "next/navigation";

export default function NavigationButton() {
  const router = useRouter();
  const pathname = usePathname();

  const imageVideoDetection = () => {
    if (pathname === "/image") {
      router.push("/"); // Navigate to the home route
    } else {
      router.push("/image"); // Navigate to the image route
    }
  };

  return (
    <button
      onClick={imageVideoDetection}
      className="px-4 py-2 absolute border-2 border-dotted border-black top-0 right-0 text-black rounded-lg mt-4 mr-2 hover:text-white hover:border-white"
    >
      {pathname === "/image" ? "Video Detection" : "Image Detection"}
    </button>
  );
}
