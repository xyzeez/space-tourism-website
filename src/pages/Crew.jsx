import Pagination from '../components/Pagination';

const Crew = () => {
  return (
    <main className="flex flex-col items-center md:items-start gap-y-16 xl:gap-y-[53px] bg-crew p-6 pt-28 md:p-10 md:pt-[136px] xl:py-12 xl:pt-[184px] xl:px-[165px]">
      <h1 className="heading-xs uppercase">
        <span className="text-ashe mr-6">02</span>
        <span>Meet your crew</span>
      </h1>
      <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-y-[37px] md:gap-y-8 xl:gap-x-8 w-full">
        <section className="flex flex-col items-center xl:items-start xl:self-end gap-y-20 md:gap-y-[54px] xl:gap-y-[237px] xl:mb-12">
          <div className="text-center xl:text-left">
            <h2 className="uppercase mb-6">
              <span className="block heading-s text-ashe mb-2 md:mb-4">
                Commander
              </span>
              <span className="heading-m">Douglas Hurley</span>
            </h2>
            <p className="body text-blue max-w-[58ch] xl:max-w-[54ch]">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <Pagination />
        </section>
        <img
          src="/assets/crew/image-douglas-hurley.webp"
          alt=""
          className="w-full max-w-[271.27px] md:max-w-[446.74px] xl:md:max-w-[539.28px] h-auto mask md:-mb-[27px] xl:mb-0"
        />
      </div>
    </main>
  );
};

export default Crew;
