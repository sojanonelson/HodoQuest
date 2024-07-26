import React from "react";
import Image from '../../Image/about.png';

function About() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row lg:my-10 h-96">
      <img src={Image} alt="about" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-between p-6 text-white bg-black bg-opacity-50">
        <div className="hidden lg:block ">
        <div className="lg:w-4/5  flex items-center justify-center">
          <h2 className="lg:text-3xl  text-sm font-medium">About Us</h2>
        </div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col justify-center lg:px-4">
        <h2 className="text-3xl py-5 text-left lg:hidden font-medium">About Us</h2>
          <h2 className="lg:text-2xl font-semibold mb-2">THE REFINED EXPERIENCE OF TOURISM</h2>
          <p className="lg:text-lg text-sm">
            HodoQuest Tours International LLP is an emerging tourism managing
            company providing unique tourism experiences to the tourists. Since the
            company collaborates with resorts, travels, hotels, homestays, etc. all
            over India, we can smoothly provide our services to the tourists easily.
            HodoQ always brings new experiences to the world. HodoQ is not just a
            tour agency; rather we also provide services like sight creation &
            tourism development, tourism infrastructure development, etc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
