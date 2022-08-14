import { Link } from "react-scroll";

const NavLink = (link: string, name: string) => {
  return (
    <Link className="cursor-pointer hover:font-normal" to={link} spy={true} smooth={true}>
      {name}
    </Link>
  );
};


export default NavLink