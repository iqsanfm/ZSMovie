import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/landingPage.css";
import NavigationBar from "./component/Navbar/NavigationBar";
import Trending from "./component/Trending/Trending";
import Widget from "./component/widget/Widget";

function App() {
  return (
    //intro
    <div className="myBackground">
      <NavigationBar />
      <Widget />
      <Trending />
    </div>
    // end intro
  );
}

export default App;
