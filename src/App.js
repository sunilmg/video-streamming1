import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import AddVideo from "./Components/AddVideo";
import VideoJS from "./Components/videoPlay";
import A from "./Components/videos/A.mp4";
import VideoSection from "./Components/VideoSection";
import HTMLVideoPlayer from "./Components/HTMLVideoPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          <Route path="/" exact component={VideoSection} />
          <Route path="/Add" component={AddVideo} />
          <Route path="/Contact-Us">
            <VideoJS />
          </Route>

          <Route path="/pb">
            <h1>PAYMENT BYTES</h1>
          </Route>

          <Route path="/ti">
            <h1>TECHNICAL INSIGHTS</h1>
          </Route>

          <Route path="/st">
            <h1>SPARK TALK</h1>
          </Route>

          <Route path="/di">
            <h1>DATA IGNITE</h1>
          </Route>
          <Route path="/Home">
            <VideoSection />
          </Route>
          <Route path="/video">
            <VideoJS />
          </Route>

          <Route path="/addVideo">
            <center>
              <HTMLVideoPlayer />
            </center>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
