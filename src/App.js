import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes as Switch } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Search from './pages/Search'
import Inbox from './pages/Inbox'

function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Switch>
         <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/search' element={<Search/>}/>
         <Route path='/inbox' element={<Inbox/>}/>
       </Switch>
     </Router>
    </>
  );
}

export default App;