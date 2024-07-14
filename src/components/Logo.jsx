import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="w-fit">
      <Link to="/">
        <img
          src="/assets/shared/logo.svg"
          alt=""
          className="size-10 md:size-12 max-w-10 md:max-w-12"
        />
      </Link>
    </div>
  );
};

export default Logo;
