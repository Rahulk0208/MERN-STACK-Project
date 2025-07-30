import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import Project from './Project';
// import Rewards from './Rewards';
// import Coffee from './Coffee';
// import Tea from './Tea';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Project />
    {/* <Coffee /> */}
    {/* <Tea /> */}
    <Rewards />
  </StrictMode>
);
 