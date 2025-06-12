import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Routes.jsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
