import Home from "./Pages/Home"
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
		</Routes>
    </div>
  </BrowserRouter>
);

export default App;