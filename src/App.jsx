import 'animate.css';
import  { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Review from "./components/Review.jsx";
import Contact from "./components/Contact.jsx";
import Gallery from "./components/Gallery.jsx";
import Loader from "./components/Loader";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: "/review",
    element: (
      <>
        <NavBar />
        <Review />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <NavBar />
        <Gallery />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
]);
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <div id="loader">
      <Loader />
    </div>
  ) : (
    <RouterProvider router={router} />
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
