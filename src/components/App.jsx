import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import("../components/pages/Home/Home"))
const Tweets = lazy(() => import("../components/pages/Tweets/Tweets"))
const NotFound = lazy(() => import("../components/pages/NotFound/NotFound"))

export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
        <Route path="*"  element={<NotFound/>}/>
      </Route>
      </Routes>
  );
};
