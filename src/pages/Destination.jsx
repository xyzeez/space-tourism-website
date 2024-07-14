import { useLoaderData, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Tabs from '../components/Tabs';

// Helpers
import { getAppData } from '../helpers';

// Loader
export const loader = async () => {
  const data = await getAppData('destinations');
  return data;
};

const Destination = () => {
  const { tab } = useParams();
  const destinations = useLoaderData();
  const currDestination = destinations.find(
    (data) => data.name.toLowerCase() === tab
  );

  return (
    <main className="flex flex-col items-center md:items-start gap-y-[50.5px] md:gap-y-[66px] xl:gap-y-[151px] bg-destination p-6 md:p-10 pt-28 md:pt-[136px] xl:pt-[184px] xl:px-[165px] xl:pb-12">
      <h1 className="heading-xs uppercase">
        <span className="text-ashe mr-6">01</span>
        <span>Pick your destination</span>
      </h1>
      <AnimatePresence>
        <div className="flex flex-col xl:flex-row items-center 2xl:justify-between gap-y-[58.5px] md:gap-y-[85.5px] xl:gap-x-[108.5px] w-full">
          <motion.img
            src={currDestination.images.png}
            alt=""
            key={currDestination.images.png}
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
                key={currDestination.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="heading-l uppercase mb-4">
                {currDestination.name}
              </motion.h2>
              <motion.p
                key={currDestination.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="body text-blue">
                {currDestination.description}
              </motion.p>
            </div>
            <div className="flex flex-col items-center xl:justify-start justify-center md:flex-row gap-6 md:gap-[117px] xl:gap-[91.5px]">
              <motion.p
                key={currDestination.distance}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase">
                <span className="block subheading-s text-blue mb-3">
                  <abbr title="Average">Avg.</abbr> Distance
                </span>
                <span className="subheading-l">{currDestination.distance}</span>
              </motion.p>
              <motion.p
                key={currDestination.travel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase">
                <span className="block subheading-s text-blue mb-3">
                  <abbr title="Estimated">Est.</abbr> Travel Time
                </span>
                <span className="subheading-l">{currDestination.travel}</span>
              </motion.p>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Destination;
