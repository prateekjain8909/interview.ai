import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/components/header/Header';
import Footer from './common/components/footer/Footer';
import Home from './home/container/Home';
import InterviewPage from './interview-page/container/InterviewPage'; // Import the InterviewPage component
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/interview" Component={InterviewPage} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
