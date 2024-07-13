import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col xl:flex-row items-center md:gap-y-[66px] bg-home p-6 pt-28 md:px-10 md:pt-56 md:pb-32 xl:px-[165px] xl:pt-[360px]">
      <div className="body text-center xl:text-left text-blue w-full">
        <h1 className="uppercase mb-6">
          <span className="heading-xs">So, you want to travel to</span>
          <span className="block heading-xl text-white mt-6">Space</span>
        </h1>
        <p className="text-blue max-w-[58ch] xl:max-w-[53ch] mx-auto xl:mx-0">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="grid place-content-center xl:place-content-end w-full h-96 md:w-[512px] md:h-fit xl:w-[540px]">
        <Button clickHandler={() => navigate('destination')}>Explore</Button>
      </div>
    </main>
  );
};

export default Home;
