import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Pagination from '../components/Pagination';

// Variables
const technologyData = [
  {
    title: 'Launch vehicle',
    body: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
      payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
      WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
      it's quite an awe-inspiring sight on the launch pad!`,
    img: {
      landscape: '/assets/technology/image-launch-vehicle-landscape.jpg',
      portrait: '/assets/technology/image-launch-vehicle-portrait.jpg',
    },
  },
  {
    title: 'Spaceport',
    body: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
      by analogy to the seaport for ships or airport for aircraft. Based in the 
      famous Cape Canaveral, our spaceport is ideally situated to take advantage 
      of the Earth’s rotation for launch.`,
    img: {
      landscape: '/assets/technology/image-spaceport-landscape.jpg',
      portrait: '/assets/technology/image-spaceport-portrait.jpg',
    },
  },
  {
    title: 'Space capsule',
    body: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
      capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
      you'll spend your time during the flight. It includes a space gym, cinema, 
      and plenty of other activities to keep you entertained.`,
    img: {
      landscape: '/assets/technology/image-space-capsule-landscape.jpg',
      portrait: '/assets/technology/image-space-capsule-portrait.jpg',
    },
  },
];

const Technology = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main className="flex flex-col gap-y-[88px] items-center md:items-start pt-28 px-0 pb-12 md:pt-[136px] md:pb-10 xl:pt-[184px] xl:pl-[165px] xl:pb-12 bg-technology overflow-x-hidden">
      <h1 className="heading-xs uppercase px-6 md:px-10">
        <span className="text-ashe mr-6">03</span>
        <span>Space launch 101</span>
      </h1>
      <AnimatePresence mode="wait">
        <div className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between gap-8 w-full">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={technologyData[activeSlide].img.portrait}
            />
            <motion.img
              key={technologyData[activeSlide].img.landscape}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={technologyData[activeSlide].img.landscape}
              alt=""
              className="w-full max-w-screen-md xl:max-w-auto h-[258px] xl:h-[600px] object-cover object-center mx-auto xl:mx-0"
            />
          </picture>
          <section className="flex flex-col-reverse xl:flex-row-reverse gap-10 xl:gap-16 items-center px-6 md:px-10 xl:px-0">
            <div className="text-center xl:text-left">
              <motion.h1
                key={technologyData[activeSlide].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase mb-4 xl:mb-6">
                <span className="block heading-s text-ashe mb-4 md:mb-4">
                  The terminology...
                </span>
                <span className="heading-m">
                  {technologyData[activeSlide].title}
                </span>
              </motion.h1>
              <motion.p
                key={technologyData[activeSlide].body}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue max-w-[56ch] xl:w-[48.5ch] xl:max-w-auto">
                {technologyData[activeSlide].body}
              </motion.p>
            </div>
            <Pagination
              type="numbers"
              orientationStyles="flex-row xl:flex-col"
              activeSlide={activeSlide}
              slideHandler={setActiveSlide}
            />
          </section>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Technology;
