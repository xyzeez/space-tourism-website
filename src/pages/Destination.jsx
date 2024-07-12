import Tabs from '../components/Tabs';

const Destination = () => {
  return (
    <main className="flex flex-col items-center md:items-start gap-y-[50.5px] md:gap-y-[66px] xl:gap-y-[151px] bg-destination p-6 md:p-10 pt-28 md:pt-[136px] xl:pt-[184px] xl:px-[165px] xl:pb-12">
      <h1 className="heading-xs uppercase">
        <span className="text-ashe mr-6">01</span>
        <span>Pick your destination</span>
      </h1>
      <div className="flex flex-col xl:flex-row items-center 2xl:justify-between gap-y-[58.5px] md:gap-y-[85.5px] xl:gap-x-[108.5px] w-full">
        <img
          src="/public/assets/destination/image-moon.webp"
          alt=""
          className="w-full max-w-[150px] md:max-w-[300px] xl:max-w-[480px] aspect-square xl:mx-[29.5px]"
        />
        <section className="flex flex-col items-center xl:items-start text-center xl:text-left max-w-[514px] xl:max-w-[445px]">
          <Tabs />
          <div className="pb-6 xl:pb-10 my-6 xl:my-10 border-b border-b-ashe">
            <h2 className="heading-l uppercase mb-4">Moon</h2>
            <p className="body text-blue">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
          <div className="flex flex-col items-center xl:justify-start justify-center md:flex-row gap-6 md:gap-[117px] xl:gap-[91.5px]">
            <p className="uppercase">
              <span className="block subheading-s text-blue mb-3">
                <abbr title="Average">Avg.</abbr> Distance
              </span>
              <span className="subheading-l">384,400 km</span>
            </p>
            <p className="uppercase">
              <span className="block subheading-s text-blue mb-3">
                <abbr title="Estimated">Est.</abbr> Travel Time
              </span>
              <span className="subheading-l">3 days</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Destination;
