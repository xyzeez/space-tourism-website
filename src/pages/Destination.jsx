import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Tabs from '../components/Tabs';

// Variables
const destinations = {
  moon: {
    img: '/assets/destination/image-moon.webp',
    title: 'Moon',
    desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avgDist: '384,400 km',
    estTime: '3 days',
  },
  mars: {
    img: '/assets/destination/image-mars.webp',
    title: 'Mars',
    desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avgDist: '225 mil. km',
    estTime: '9 months',
  },
  europa: {
    img: '/assets/destination/image-europa.webp',
    title: 'Europa',
    desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDist: '628 mil. km',
    estTime: '3 years',
  },
  titan: {
    img: '/assets/destination/image-titan.webp',
    title: 'Titan',
    desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDist: '1.6 bil. km',
    estTime: '7 years',
  },
};

const Destination = () => {
  const { tab } = useParams();

  return (
    <main className="flex flex-col items-center md:items-start gap-y-[50.5px] md:gap-y-[66px] xl:gap-y-[151px] bg-destination p-6 md:p-10 pt-28 md:pt-[136px] xl:pt-[184px] xl:px-[165px] xl:pb-12">
      <h1 className="heading-xs uppercase">
        <span className="text-ashe mr-6">01</span>
        <span>Pick your destination</span>
      </h1>
      <AnimatePresence>
        <div className="flex flex-col xl:flex-row items-center 2xl:justify-between gap-y-[58.5px] md:gap-y-[85.5px] xl:gap-x-[108.5px] w-full">
          <motion.img
            src={destinations[tab].img}
            alt=""
            key={destinations[tab].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[150px] md:max-w-[300px] xl:max-w-[480px] aspect-square xl:mx-[29.5px]"
          />
          <section className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-[514px] xl:max-w-[445px]">
            <Tabs />
            <div className="pb-6 xl:pb-10 my-6 xl:my-10 border-b border-b-ashe">
              <motion.h2
                key={destinations[tab].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="heading-l uppercase mb-4">
                {destinations[tab].title}
              </motion.h2>
              <motion.p
                key={destinations[tab].desc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue">
                {destinations[tab].desc}
              </motion.p>
            </div>
            <div className="flex flex-col items-center xl:justify-start justify-center md:flex-row gap-6 md:gap-[117px] xl:gap-[91.5px]">
              <motion.p
                key={destinations[tab].avgDist}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase">
                <span className="block subheading-s text-blue mb-3">
                  <abbr title="Average">Avg.</abbr> Distance
                </span>
                <span className="subheading-l">
                  {destinations[tab].avgDist}
                </span>
              </motion.p>
              <motion.p
                key={destinations[tab].estTime}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase">
                <span className="block subheading-s text-blue mb-3">
                  <abbr title="Estimated">Est.</abbr> Travel Time
                </span>
                <span className="subheading-l">
                  {destinations[tab].estTime}
                </span>
              </motion.p>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Destination;
