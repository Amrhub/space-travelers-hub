import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
