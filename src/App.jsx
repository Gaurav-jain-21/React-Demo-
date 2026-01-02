import Greet from "./components/Greet";
import Expressions from "./components/Expressions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Arrays from "./components/Arrays";
import ProductInfo from "./components/ProductInfo";
import PropsEx from "./components/PropsEx";
const App = () => {
  return <div>

    
       <Header/>
       <Main/>
       <Expressions/>
        <Greet/>
        <Arrays/>
        <ProductInfo/>
       <Footer/>
       <PropsEx name="John Doe"/>
    </div>;

};
export default App;