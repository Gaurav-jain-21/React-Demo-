import Greet from "./component1/Greet.jsx";
import Header from "./component1/Header.jsx";
import Main from "./component1/Main.jsx";
import Footer from "./component1/Footer.jsx";
const App=()=>{
  return <div>
    <Header/>
    <Greet/>
    <Main/>
    <Footer/>
  </div>
}
export default App;