import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Skills from "./Pages/Skills";


const App = () => (
  <BrowserRouter>
      <div className="flex justify-center font-sans">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/skills" element={<Skills />} />
		</Routes>
    </div>
  </BrowserRouter>
);

export default App;