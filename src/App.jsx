import './App.css';
import About from './assets/components/About/About';
import Home from './assets/components/Home/Home';
// import SideBar from './assets/components/SideBar/SideBar';
import Experience from './assets/components/Experience/Experience';
import NotFound from './assets/components/NotFound/NotFound';
import Skills from './assets/components/Skills/Skills';
import Work from './assets/components/Work/Work';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MasterLayout from './assets/components/MasterLayout/MasterLayout';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'experience', element: <Experience /> },
        { path: 'work', element: <Work /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
