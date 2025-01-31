import Image from "next/image";
import gmh from "@/public/gmh-avator.jpg";

export default function HomePage() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center text-red-500 p-4">Hello Next JS</h1>
        <Image
          src={gmh}
          alt="gmh"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
        />
      </div>
    </>
  );
}
