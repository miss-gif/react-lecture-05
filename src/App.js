import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import EditProfile from "./components/EditProfile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Todo from "./components/Todo";
import useAuth from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { auth } from "./firebaseConfig";

const App = () => {
  const { userCurrent, userData } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // 1. 인증정보 있으면
    if (userCurrent) {
      navigate("/todo");
    }
  }, [userCurrent]);

  useEffect(() => {
    // console.log("App userData ", userData);
  }, [userData]);

  return (
    <>
      {userCurrent && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<h1>경로가 잘못되었습니다.</h1>}></Route>
      </Routes>
    </>
  );
};

export default App;
