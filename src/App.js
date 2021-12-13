import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
