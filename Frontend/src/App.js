import "./app.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./route/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
