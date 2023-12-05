import { Outlet } from 'react-router-dom';
import {Navigation} from './AppNav';

export const App = () => {
  return (
    <div className="container">
      <Navigation/>
      <Outlet></Outlet>
      
    </div>
   );
};
