import Image from "next/image";
import HeroImage from "@/assets/hero-image.jpeg";
import AboutImage from "@/assets/about-image.jpg";
import Service1Image from "@/assets/ad.jpg";
import Service2Image from "@/assets/art.jpg";
import Service3Image from "@/assets/it.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="hero min-h-screen relative">
        <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
        <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Tendo Studio </h1>
            <p className="mb-5">A hub where aspiring and professional artist connect, collaborate, and sell their talent.</p>
            <a href="/shop" className="btn btn-primary">Shop Art</a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 lg:py-24 container mx-auto" id="features">
        <h2 className="text-4xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Image src={Service1Image} alt="Service 1" width={300} height={200} className="h-48 object-cover w-full" />
            <h3 className="text-xl font-bold mb-2">Art Shop</h3>
            <p className="text-lg mb-4">Shop Art from some of our prolific artists for your family, friends, for your house, there is so much you could explore.</p>
            <a href="/shop" className="btn btn-primary">Shop Now</a>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Image src={Service2Image} alt="Service 2" width={300} height={200} className="h-48 object-cover w-full" />
            <h3 className="text-xl font-bold mb-2">Forum</h3>
            <p className="text-lg mb-4">Share a community with some of the best artists and get a chance to network collaborate and share ideas.</p>
            <a href="/forum" className="btn btn-primary">Learn More</a>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Image src={Service3Image} alt="Service 3" width={300} height={200} className="h-48 object-cover w-full" />
            <h3 className="text-xl font-bold mb-2">Authentication</h3>
            <p className="text-lg mb-4">Our platform enhances a personalized experience in the forum like reddit and a premium buyer experience like Amazon.</p>
            <a href="/auth/register" className="btn btn-primary">Sign Up</a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="hero min-h-screen bg-base-200" id="about">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={AboutImage} alt="About Image" width={600} height={200} className="max-w-sm rounded-lg shadow-2xl h-80" />
          <div>
            <h1 className="text-5xl font-bold">About </h1>
            <p className="py-6">
              This project was born from a place of frustration and a deep appreciation for the artistic community. For years, I've navigated the world as an aspiring artist, constantly bouncing between different platforms to showcase my work, connect with other creatives, and even find collaborators for projects. It felt disjointed and inefficient. The dream was to have a one-stop shop for artists of all levels, a space where inspiration could spark, connections could flourish, and artistic careers could take flight. 

              This project started in January 2024 as a portfolio project for  (<a href="https://www.alxafrica.com/"><b>ALX Africa Software Engineering Programme</b></a>). It's been an incredible journey to develop a platform that addresses the challenges I, and countless other artists, face on a daily basis.
            </p>
            <p>Feel free to contact me through my email <a href="mailto:kariukiallan850@gmail.com"><b>kariukiallan850@gmail.com</b></a> Or reach out to me on LinkedIn and Discord</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/allan-kariuki" className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg></a>
              <a href="https://discord.com/users/devops254" className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#5865f2" rx="60"/><g clip-path="url(#skillIconsDiscord0)"><path fill="#fff" d="M197.308 64.797a164.918 164.918 0 0 0-40.709-12.627a.618.618 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.643.643 0 0 0-.655-.31a164.472 164.472 0 0 0-40.709 12.627a.583.583 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.685.685 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.648.648 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86.364 86.364 0 0 0 3.098-2.428a.618.618 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.617.617 0 0 1 .655.08a79.613 79.613 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.622 102.622 0 0 1-15.609 7.428a.638.638 0 0 0-.339.889a133.075 133.075 0 0 0 10.208 16.61a.636.636 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.646.646 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.506.506 0 0 0-.26-.238M94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.973 20.158m66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158"/></g><defs><clipPath id="skillIconsDiscord0"><path fill="#fff" d="M28 51h200v154.93H28z"/></clipPath></defs></g></svg></a>
            </div>
            
            </div>
          </div>
        </div>
      </div>
  )
}
