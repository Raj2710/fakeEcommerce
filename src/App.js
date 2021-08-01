import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
       <Header/>
       <Switch>
          <Route path='/' exact component={ProductListing}/>
          <Route path='/product/:productId' exact component={ProductDetails}/>
       </Switch>
    </Router>

  );
}

export default App;
