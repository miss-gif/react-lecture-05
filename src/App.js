import { Home } from "./pages/Home";
import "./App.css";
import { WrapStyle, DivStyle } from "./css/AppCss";
const App = () => {
  // js 자리
  return (
    <div className="wrap" style={WrapStyle}>
      <Home />
    </div>
  );
};

export default App;
