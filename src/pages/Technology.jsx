import { AnimatePresence, motion } from 'framer-motion';
import { useLoaderData } from 'react-router-dom';

// Components
import Pagination from '../components/Pagination';

// Helpers
import { getAppData } from '../helpers';
import useSwiper from '../hooks/useSwiper';

// Loader
export const loader = async () => {
  const data = await getAppData('technology');
  return data;
};

const Technology = () => {
  const technologies = useLoaderData();
  const [activeSlide, setActiveSlide] = useSwiper(3);
  const dataIndex = activeSlide - 1;

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
              srcSet={technologies[dataIndex].images.portrait}
            />
            <motion.img
              key={technologies[dataIndex].images.landscape}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={technologies[dataIndex].images.landscape}
              alt=""
              className="w-full max-w-screen-md xl:max-w-auto h-[258px] xl:h-[600px] object-cover object-center mx-auto xl:mx-0"
            />
          </picture>
          <section className="flex flex-col-reverse xl:flex-row-reverse gap-10 xl:gap-16 items-center px-6 md:px-10 xl:px-0">
            <div className="text-center xl:text-left">
              <h1 className="uppercase mb-4 xl:mb-6">
                <span className="block heading-s text-ashe mb-4 md:mb-4">
                  The terminology...
                </span>
                <motion.span
                  key={technologies[dataIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="heading-m">
                  {technologies[dataIndex].name}
                </motion.span>
              </h1>
              <motion.p
                key={technologies[dataIndex].description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue max-w-[56ch] xl:w-[48.5ch] xl:max-w-auto">
                {technologies[dataIndex].description}
              </motion.p>
            </div>
            <Pagination
              type="numbers"
              orientationStyles="flex-row xl:flex-col"
              numOfSlides={3}
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
