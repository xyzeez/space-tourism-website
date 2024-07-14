import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Pagination from '../components/Pagination';

// Variables
const crewData = [
  {
    post: 'Commander',
    name: 'Douglas Hurley',
    brief:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: '/assets/crew/image-douglas-hurley.webp',
  },
  {
    post: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    brief:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    img: '/assets/crew/image-mark-shuttleworth.webp', // Replace with appropriate image path for Mark Shuttleworth
  },
  {
    post: 'Pilot',
    name: 'Victor Glover',
    brief:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    img: '/assets/crew/image-victor-glover.webp', // Replace with appropriate image path for Victor Glover
  },
  {
    post: 'Flight Engineer',
    name: 'Anousheh Ansari',
    brief:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    img: '/assets/crew/image-anousheh-ansari.webp', // Replace with appropriate image path for Anousheh Ansari
  },
];

const Crew = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main className="flex flex-col items-center md:items-start gap-y-16 xl:gap-y-[53px] bg-crew p-6 pt-28 md:p-10 md:pt-[136px] xl:py-12 xl:pt-[184px] xl:px-[165px]">
      <h1 className="heading-xs uppercase">
        <span className="text-ashe mr-6">02</span>
        <span>Meet your crew</span>
      </h1>
      <AnimatePresence mode="wait">
        <div className="grid grid-cols-1 grid-rows-[auto_auto] xl:grid-cols-2 xl:grid-rows-1 items-center xl:items-end xl:justify-between gap-y-[37px] md:gap-y-8 xl:gap-y-0 xl:gap-x-8 w-full xl:h-[734px]">
          <section className="flex flex-col items-center xl:items-start gap-y-6 md:gap-y-10 xl:self-start h-full xl:h-[calc(100%-48px)]">
            <div className="flex flex-col xl:justify-center text-center xl:text-left h-56 md:h-[231px] xl:h-full">
              <motion.h2
                key={crewData[activeSlide].post}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase mb-6">
                <span className="block heading-s text-ashe mb-2 md:mb-4">
                  {crewData[activeSlide].post}
                </span>
                <span className="heading-m">{crewData[activeSlide].name}</span>
              </motion.h2>
              <motion.p
                key={crewData[activeSlide].brief}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue max-w-[58ch] xl:max-w-[54ch]">
                {crewData[activeSlide].brief}
              </motion.p>
            </div>
            <Pagination
              type="dots"
              orientationStyles="flex-row"
              activeSlide={activeSlide}
              slideHandler={setActiveSlide}
            />
          </section>
          <motion.img
            src={crewData[activeSlide].img}
            alt=""
            key={crewData[activeSlide].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[271.27px] md:max-w-[446.74px] xl:md:max-w-[539.28px] h-auto mask mx-auto md:-mb-[27px] xl:my-[27px]"
          />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Crew;
