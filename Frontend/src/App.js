import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./route/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
