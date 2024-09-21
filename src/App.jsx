// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
       <Navbar />

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
