import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
// import SideBar from './assets/components/SideBar/SideBar';
import Experience from './components/Experience/Experience';
import NotFound from './components/NotFound/NotFound';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MasterLayout from './components/MasterLayout/MasterLayout';

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
