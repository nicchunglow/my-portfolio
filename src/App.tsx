import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import { Link } from "react-scroll";

const headersArr: any = [
  { link: "Home", name: "Home" },
  { link: "AboutMe", name: "About" },
  { link: "all-skills", name: "Skills" },
];
const NavLink = (link: string, name: string) => {
  return (
    <Link className="cursor-pointer hover:font-normal" to={link} spy={true} smooth={true}>
      {name}
    </Link>
  );
};
interface IHeader {
  link: string;
  name: string;
}
const App = () => (
  <BrowserRouter>
    <header className="flex flex-row justify-evenly font-extralight sticky top-0 py-4 bg-white border-b-2">
      {headersArr.map((header: IHeader) => {
        return NavLink(header.link, header.name);
      })}
    </header>
    <div className="flex flex-col justify-center items-center font-sans">
      <Home />
      <About />
      <Skills />
    </div>
  </BrowserRouter>
);

export default App;
