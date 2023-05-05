import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
