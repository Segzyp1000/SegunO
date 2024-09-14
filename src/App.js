import {
     Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./page/Home";
import Project from "./page/Project";
import Main from "./Layer/Main";
import Showcase from "./components/Showcase";



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/showcase" element={<Showcase />} />
      </Route>
       
      
    )
  );

  const App = () => {
    return <RouterProvider router={router} />;
  };
  
  export default App;



