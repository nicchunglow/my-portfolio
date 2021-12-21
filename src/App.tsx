import Home from "./Pages/Home"
import About from "./Pages/About"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


const App = () => (
  <BrowserRouter>
      <div className="font-mono text-center">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
    </div>
  </BrowserRouter>
);

export default App;