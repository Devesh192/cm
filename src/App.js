import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/ui/button';
import Home from './pages/home';
import Layout from './layout/layout'
import BirthdayCelebrator from './pages/hbd'
import Login from './pages/login'
import BirthdayCelebration from './pages/hbdcel'


function App() {
  return (
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hbd" element={<BirthdayCelebrator />} />
              <Route path="/login" element={<Login />} />
              <Route path="/hbdcel" element={<BirthdayCelebration />} />
            </Routes>
          </Layout>
        </div>
      </Router>
  );
}

export default App;