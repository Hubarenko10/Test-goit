import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("../components/pages/Home/Home"))
const Tweets = lazy(() => import("../components/pages/Tweets/Tweets"))


export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
      </Route>
      </Routes>
  );
};
