import { Hero } from "@/components/hero";
import { LatestPost } from "@/components/latestPost";
import { PostCard } from "@/components/postCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Hero >
        <div className="text absolute top-[30%] left-20 flex flex-col gap-2 w-[50%]">
        <div className="text">
        <h1 className="text-5xl font-bold font-sans tracking-tight text-black">Let’s Explore </h1>
        <h1 className="text-5xl font-bold font-sans tracking-tight text-black">New Possibilities...</h1>
        </div>

       <div className="search w-[70%]">
       <input type="text" placeholder="Search for articles" className="w-[70%] max-w-md bg-white text-black p-4 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
       <button className="bg-cyan-800 w-[30%] text-white px-4 py-4 rounded-r-xl">Search</button>
       <div className="hashtags text-cyan-700 flex items-center justify-between gap-2 w-[70%] px-4 py-1">
        <p>#Design</p>
        <p>#Develop</p>
        <p>#Market</p>
       </div>
       </div>
        </div>

        <div className="image absolute top-[20%] right-20 flex items-center justify-center">
          <Image src={'/hero-image.svg'} alt="hero" width={1000} height={1000} className="w-[600px] h-[350px] object-cover" />
        </div>
      </Hero>


      {/* Latest Post */}
      <div className="px-5">
      <LatestPost />
      </div>

      <div className="flex items-center justify-between gap-2 px-5 my-5">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <div className="mb-10">
        <Hero >
        <div className="text absolute top-[30%] left-32 flex flex-col gap-2 w-[50%]">
        <div className="text">
        <p className="text-2xl">Download</p>
        <h1 className="text-5xl font-bold">Otarea Educore App</h1>
        <p className="text-2xl font-semibold">For non stop learning</p>
        </div>

       <div className="download mt-10 w-[70%]">
      <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white px-8 py-1 rounded-full">Download Now</button>
       </div>
        </div>

        <div className="image absolute top-[20%] right-20 flex items-center justify-center">
          <Image src={'/footerImage2.png'} alt="hero" width={1000} height={1000} className="w-[600px] h-[350px] object-cover" />
        </div>
        </Hero>
      </div>
    </div>
  );
}
