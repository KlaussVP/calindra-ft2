import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <SearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </SearchProvider>
    </Router>
  );
}