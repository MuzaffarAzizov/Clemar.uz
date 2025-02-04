import "./App.css";
import Guarantee from "./components/Guarantee";
import Brands from "./components/Brands";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Paper from "./components/Paper";
import Machine from "./components/Machine";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Machine />
      <Paper />
      <Guarantee />
      <Brands />
      <Home />
      <Footer />
    </>
  );
}

export default App;
