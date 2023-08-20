import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
// import Grocery from "./components/Grocery";
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  const [userName, setUserName] = useState();
  useEffect(() => {
    const userN = "Elon Musk";
    setUserName(userN);
  },[]);

  if (onlineStatus === false)
    return <h1>Hey, your internet broke our conection.😢</h1>;
  return (
    <div className="app w-auto">
      <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
        <Header />
      <Outlet />
      </UserContext.Provider>
  
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
