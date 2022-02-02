import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useRoutes } from 'react-router';
// import {
//   Home,
//   About,
//   Events,
//   Products,
//   Contact,
//   Whoops404,
//   Services,
//   History,
//   Location,
// } from './pages';

import { ColorDetails } from './ColorDetails';

function App() {
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />}>
  //         <Route path="services" element={<Services />} />
  //         <Route path="history" element={<History />} />
  //         <Route path="location" element={<Location />} />
  //       </Route>
  //       <Route path="/events" element={<Events />} />
  //       <Route path="/products" element={<Products />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="*" element={<Whoops404 />} />
  //     </Routes>
  //   </div>
  // );
  // let element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   {
  //     path: 'about',
  //     element: <About />,
  //     children: [
  //       { path: 'services', element: <Services /> },
  //       { path: 'history', element: <History /> },
  //       { path: 'location', element: <Location /> },
  //     ],
  //   },
  //   { path: 'events', element: <Events /> },
  //   { path: 'products', element: <Products /> },
  //   { path: 'contact', element: <Contact /> },
  //   { path: '*', element: <Whoops404 /> },
  //   {
  //     path: 'services',
  //     element: <Services />,
  //   },
  // ]);
  // return element;

  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}

export default App;
