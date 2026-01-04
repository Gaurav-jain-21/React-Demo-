import Greet from "./components/Old_playlist/Greet";
import Expressions from "./components/Old_playlist/Expressions";
import Footer from "./components/Old_playlist/Footer";
import Header from "./components/Old_playlist/Header";
import Main from "./components/Old_playlist/Main";
import Arrays from "./components/Old_playlist/Arrays";
import ProductInfo from "./components/Old_playlist/ProductInfo";
import PropsEx from "./components/Old_playlist/PropsEx";
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