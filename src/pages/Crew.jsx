import { AnimatePresence, motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

// Components
import Pagination from '../components/Pagination';

// Helpers
import { getAppData } from '../helpers';
import useSwiper from '../hooks/useSwiper';

// Loader
export const loader = async () => {
  const data = await getAppData('crew');
  return data;
};

const Crew = () => {
  const crews = useLoaderData();
  const [activeSlide, setActiveSlide] = useSwiper(4, 6);
  const dataIndex = activeSlide - 1;

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
                key={crews[dataIndex].role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase mb-6">
                <span className="block heading-s text-ashe mb-2 md:mb-4">
                  {crews[dataIndex].role}
                </span>
                <span className="heading-m">{crews[dataIndex].name}</span>
              </motion.h2>
              <motion.p
                key={crews[dataIndex].bio}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue max-w-[58ch] xl:max-w-[54ch]">
                {crews[dataIndex].bio}
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
            src={crews[dataIndex].images.png}
            alt=""
            key={crews[dataIndex].images.png}
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
