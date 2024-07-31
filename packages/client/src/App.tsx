import { Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from '@views/dashboard/dashboard';
import Enterance from '@views/enterance/enterance';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Enterance />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
