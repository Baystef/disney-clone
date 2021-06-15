import Main from './components/Main';
import About from './components/About';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App flex bg-gray-900 text-white min-h-screen ">
        <SideBar />
        <div className="w-full">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
