// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<Events />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
