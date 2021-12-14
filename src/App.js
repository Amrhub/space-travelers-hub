import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Missions from './components/Missions';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Routes>
      <Route path="/missions" element={<Missions />} />
    </Routes>
  </div>
);

export default App;
