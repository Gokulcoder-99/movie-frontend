import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Celebrity from "./pages/Celebrity";
import Signup from "./pages/signup";
import Login from "./pages/login"
const App = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<Login />}/>
       <Route
      path="/signup"
      element={<Signup />}/>
    <Route
      path="/home"
      element={<Layout />}>
        <Route path="" element={<Home />}/>
        <Route path="movie/:movieId" element={<Movie />}/>
        <Route path="celebrity/:celebrityId" element={<Celebrity />}/>
      </Route>
      </>
  )
);

export default App
