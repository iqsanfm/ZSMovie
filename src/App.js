import "./style/landingPage.css";
import NavigationBar from "./component/Navbar/NavigationBar";
import Intro from "./component/Intro/Intro";
import Trending from "./component/Trending/Trending";
import Superhero from "./component/Superhero/Superhero";

function App() {
  return (
    <div>
      <div className="myBackground">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
