import React from 'react';
import  ReactDOM  from 'react-dom/client';

import HomePagromponent from './Components/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import SareeComponent from './Components/Products/SareeComponent';
import KurtiComponent from './Components/Products/KurtiCompoent';
import SuitComponent from './Components/Products/SuitComponent';
import { Provider } from 'react-redux';
import Login from './Components/login';
import ProductDetailsComp from './Components/Products/ProductDetailsComp';
import Registration from './Components/Registration';
import store from './Components/store';
import LehengaComponent from './Components/Products/LehengaComponent';
import CardItems from './Components/CardItems';



const AppLayout = () =>{
  return(
    <Provider store={store}>
    <Header/>
      <Outlet/>
    <Footer/>
  </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/saree',
        element:<SareeComponent/>,
      },
      {
        path:'/kurti',
        element:<KurtiComponent/>
      },
      {
        path:'/suit',
        element:<SuitComponent/>
      },
      {
        path:'/lehenga',
        element:<LehengaComponent/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/registration',
        element:<Registration/>
      },
      {
        path:'/saree/productdetails',
        element:<ProductDetailsComp/>
      },{
        path:'/cart',
        element:<CardItems/>
      },
      
    ]
  }
])



const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>)