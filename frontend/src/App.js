import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import Category from "./Components/Category/Category";
import Intro from "./Components/Intro/Intro";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import Signin from "./Components/Register/Signin";
import Signup from "./Components/Register/Signup";
import Searchpage from "./Components/Searchpage/Searchpage";
import Map from "./Components/Map/Map";
import ContactUs from "./Components/ContactUs/ContactUs";
import PrivateComponent from "./Components/PrivateComponent/PrivateComponent";
import MoreInfo from "./Components/MoreInfo/MoreInfo";
import Explore from "./Components/Explore/Explore";
import TopPlaces from "./Components/TopPlaces/TopPlaces";
import Emergency from "./Components/Emergency/Emergency";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ConditionalNav/> */}
        {/* <Main/> */}
        {/* <Category/>  */}
        {/* <Signin/> */}
        {/* <MoreInfo/> */}
        {/* <Searchpage/>  */}
        {/* <Navigation/> */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route element={<PrivateComponent />}>
            {/* <Route path="/search?city=:location" element={<Main />} /> */}
            <Route path="/search/:location" element={<Main />} />
          </Route>

          <Route path="/explore" element={<Explore />} />
          <Route path="/top-places" element={<TopPlaces />} />
          <Route path="/blog" element={<Blog/>} />

          <Route
            path="/explore/moreinfo/:name"
            element={<MoreInfo />}
          />

          <Route path="/emergency-services" element={<Emergency />} />

          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>

        {/* <Searchpage /> */}

        <Footer />
        <ToastContainer position="top-left" autoClose={3000} />
      </BrowserRouter >
      {/* <Map/> */}
    </div>
  );
}

export default App;
