import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  console.log("i run!");
 return <RouterProvider router={router} />; 
}

export default App;
