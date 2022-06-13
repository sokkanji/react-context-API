import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import UserStore from './store/users'

function App() {
  return (
    <UserStore>
      <Router>
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Switch>
      </Router>
    </UserStore>
  );
}

export default App;
