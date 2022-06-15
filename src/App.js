import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./components/single/Single";
import Write from "./components/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  const user = false ;
  return (
    <BrowserRouter>
    <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
        <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Register/>}></Route> 
        <Route path="/settings" element={user ? <Setting/> : <Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
