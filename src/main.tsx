import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import About from './AboutPage/About.tsx';
import Menu from './MenuPage/Menu.tsx';
import Home from './HomePage/Home.tsx';
import Root from './Root.tsx';
import Error from './Error.tsx';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/menu',
          element: <Menu />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ],
  {
    basename: '/poke-bay',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
