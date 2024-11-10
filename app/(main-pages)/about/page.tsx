import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <div className="min-h-screen bg-black p-20 pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 max-w-6xl mx-auto text-white pl-10">
        {/* Left Section - Profile */}
        <div className="lg:col-span-3 flex flex-col   ">
          <Image
            src="/images/background/gili-about-image.jpg"
            alt="Gili Lipschitz"
            width={200}
            height={250}
            className="rounded-lg mb-6"
          />
          <h1 className="text-[#b0b0b0] text-2xl  font-['Helvetica'] mb-1 ml-2">
            GILI GIAMMONA
          </h1>
          <p className="text-[#38bdda] font-light mb-1 ml-2 flex">
            <FaLocationDot className="mr-1 mt-1" size={15} /> Israel
          </p>
          <p className="text-[#b0b0b0] ml-2 flex">
            <MdEmail className="mt-[3px] mr-1" size={18} /> bolt68@walla.com
          </p>
        </div>

        {/* Right Section - Content */}

        <div className="lg:col-span-6 space-y-8 bg-black">
          {/* Description */}
          <p className="text-[#b0b0b0] font-thin pb-4 w-[70%]">
            3D Character/Storyboard Artist. My skill set is mainly focused on
            character modelling, sculpting, and texturing, both hard-surface and
            organic as well as storyboarding.
          </p>

          {/* Resume */}
          <div className="pb-4">
            <h2 className="text-[#b0b0b0] text-2xl mb-1 font-bold">
              Resume PDF
            </h2>
            <Link
              href="https://gili-resume.netlify.app/"
              className="text-[#38bdda] text-lg hover:opacity-70 ml-5 underline font-thin "
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </Link>
          </div>

          {/* Skills */}
          <div className="pb-4 w-[80%]">
            <h2 className="text-[#b0b0b0] text-2xl mb-4 font-bold">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "3D Modeling",
                "Digital Sculpting",
                "Character Modeling",
                "Hard Surface Modeling",
                "Environment Modeling",
                "Texturing",
                "Shading",
                "Lighting",
                "Storyboarding",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[rgba(56,189,218,0.1)] text-[#38bdda] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software Proficiency */}
          <div className="pb-4 w-[80%]">
            <h2 className="text-[#b0b0b0] text-2xl mb-4 font-bold">
              Software Proficiency
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Maya", img: "/images/icon/artstation/Maya.png" },
                { name: "Blender", img: "/images/icon/artstation/Blender.png" },
                {
                  name: "Lightwave",
                  img: "/images/icon/artstation/Lightwave.png",
                },
                { name: "Zbrush", img: "/images/icon/artstation/Zbrush.png" },
                {
                  name: "Toon Boom",
                  img: "/images/icon/artstation/ToonBoom.png",
                },
                { name: "3D Max", img: "/images/icon/artstation/3DMax.png" },
                {
                  name: "Substance 3D Painter",
                  img: "/images/icon/artstation/Substance3DPainter.png",
                },
                { name: "Vray", img: "/images/icon/artstation/Vray.png" },
                {
                  name: "Photoshop",
                  img: "/images/icon/artstation/Photoshop.png",
                },
                {
                  name: "Premiere",
                  img: "/images/icon/artstation/Premiere.png",
                },
                {
                  name: "After Effects",
                  img: "/images/icon/artstation/AfterEffects.png",
                },
              ].map((software) => (
                <span
                  key={software.name}
                  className="px-4 py-2 bg-black text-[#38bdda] rounded-lg flex items-center gap-2"
                >
                  <Image
                    src={software.img}
                    alt={software.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  {software.name}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="pb-4">
            <h2 className="text-[#b0b0b0] text-2xl mb-4 font-bold">
              Education
            </h2>
            <div className="space-y-8">
              <div className="max-w-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#b0b0b0] text-xl">
                    Israel Animation College
                  </h3>
                  <span className="text-[#38bdda] italic">
                    October 2020 - May 2022
                  </span>
                </div>
              </div>
              <div className="w-[90%] h-[1px] bg-[#38bdda] mx-auto"></div>
              {/* Moved line between the schools */}
              <div className="max-w-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#b0b0b0] text-xl">
                    CGMA Storyboard for Animation
                  </h3>
                  <span className="text-[#38bdda] italic">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
