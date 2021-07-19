import "./components/style/style.css";
import Header from "./components/main/Header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import ProjectInfo from "./components/main/Projects/ProjectInfo";
import Project from "./components/Pages/Project"
import Footer from "./components/main/Footer/Footer";
import { ProjectData } from "./data/ProjectData";
import Contact from "./components/main/Contact/Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main className="main">
                 <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/project/:title" component={ProjectInfo} data={ProjectData} />
                     <Route path="/project" component={Project} data={ProjectData} />
                     
                 </Switch>
                 <Contact/>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
