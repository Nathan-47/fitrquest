import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import About from "./pages/about";
import QuestFinder from './pages/questFinder';
import Login from './pages/login';
import Signup from './pages/signup';
import Comp from './pages/Comp'
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';


function App() {

  const {user} = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  
      <Route index element={<Landing/>} />

      <Route path="about" element={<QuestFinder/>} />


      <Route path="/comp" element={
      <ProtectedRoute>
      <Comp/>
      </ProtectedRoute>
      } />

      {/* 404 page link */}
      {/* <Route path="*" element={<NotExist />} /> */}

      {/* // if no user then login if user is found then go to competition page */}
      <Route path='/login' element={!user ? <Login /> : <Navigate to="/comp" />} />
      <Route path='/Signup' element={<Signup />} />
      </Route>
    )
  );


  return (
    <RouterProvider router={router} />
  );
}

export default App;
