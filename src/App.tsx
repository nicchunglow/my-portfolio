import Home from "./Pages/Home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


const AppWrapper = () => (
  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
  </BrowserRouter>
);

export default AppWrapper;