import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Details from './components/Details/Details';
import Footer from './components/Shared/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import MyDetails from './components/MyDetails/MyDetails';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/details/:detailsId">
          <Details></Details>
        </Route>
        <Route path="/mydetails/:mydetailsId">
          <MyDetails></MyDetails>
        </Route>
        <Route path="/projects">
          <MyProjects></MyProjects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
