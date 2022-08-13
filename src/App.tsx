import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import NavLink from "./Components/NavLink";
import './App.css';

const headersArr: any = [
  { link: "home", name: "Home" },
  { link: "about-me", name: "About" },
  { link: "all-skills", name: "Skills" },
];
interface IHeader {
  link: string;
  name: string;
}
const App = () => (
  <BrowserRouter>
    <header className="flex flex-row justify-evenly font-extralight sticky top-0 py-4" app-header-color>
      {headersArr.map((header: IHeader) => {
        return NavLink(header.link, header.name);
      })}
    </header>
    <div className="flex flex-col justify-center items-center font-sans my-10">
      <Home />
      <About />
      <Skills />
      <p className="font-thin mt-20">Copyright © 2021 Nicholas Chung</p>
    </div>
  </BrowserRouter>
);

export default App;
