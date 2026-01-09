import Greet from "./component1/Greet.jsx";
import Header from "./component1/Header.jsx";
import Main from "./component1/Main.jsx";
import Footer from "./component1/Footer.jsx";
import List1 from "./component1/List1.jsx";
import Expression from "./component1/Expression.jsx";
import ImageProps from "./component1/ImageProps.jsx";
import Password from "./component1/Password.jsx";
import Cart from "./component1/Cart.jsx";
const App=()=>{
  return <div>
    <Header/>
    <Greet/>
    <Main/>
    <Footer/>
    <Expression/>
    <List1/>
    <ImageProps name="Gaurav Jain" age="44" year="2024"/>
    <Password isValid={true}/>
    <Cart/>
  </div>
}
export default App;