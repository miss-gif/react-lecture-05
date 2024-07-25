import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

// Index 라는 이름 충돌로 변경함
import { useState } from "react";
import router from "./router/root";

function App() {
  // 복잡한 데이터
  const arr = [
    { name: "삼성전자", link: "http://" },
    { name: "LG전자", link: "http://" },
    { name: "그린컴퓨터", link: "http://" },
  ];
  // 로그인 안된 경우
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* 공통레이아웃 적용 */}
      <div className="wrap">
        <RouterProvider router={router} />

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
