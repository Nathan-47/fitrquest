import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import About from "./pages/about";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  
      <Route index element={<Landing/>} />

      <Route path="about" element={<About/>} />

      {/* 404 page link */}
      {/* <Route path="*" element={<NotExist />} /> */}
      </Route>
    )
  );


  return (
    <RouterProvider router={router} />
  );
}

export default App;
