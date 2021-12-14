import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Missions from './components/Missions/Missions';
import './App.scss';
import Rockets from './components/Rockets/Rockets';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
