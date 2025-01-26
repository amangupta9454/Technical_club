import 'animate.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.jsx';
import Review from './components/Review.jsx';
import Contact from './components/Contact.jsx';
import Gallery from './components/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
<NavBar></NavBar>
<Home></Home>
    </div>,
  },
  {
    path: "/about",
    element: <div>
    <NavBar></NavBar>
    <About></About>
        </div>,
  },
  {
    path: "/review",
    element: <div>
    <NavBar></NavBar>
    <Review></Review>
        </div>,
  },
  {
    path: "/gallery",
    element: <div>
    <NavBar></NavBar>
    <Gallery></Gallery>
        </div>,
  },
  {
    path: "/contact",
    element: <div>
    <NavBar></NavBar>
    <Contact></Contact>
        </div>,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
