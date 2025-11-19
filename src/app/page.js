import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Home from "@/views/home/Home";
import "./../assets/css/layout.css";
import "./../assets/css/style.css";

export default function Page() {
  return (
    <div id="page">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
