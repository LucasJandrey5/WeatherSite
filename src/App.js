import Header from "./Components/Header/Header";
import Home from "./pages/Home/home";
import Footer from "./Components/Footer/Footer";
import { Flowbite } from "flowbite-react";

function App() {
  return (
    <Flowbite className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900">
      <div className="min-h-screen dark:bg-slate-900">
        <Header />
        <Home />
        <Footer />
      </div>
    </Flowbite>
  );
}

export default App;
