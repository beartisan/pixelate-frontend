// import logo from './logo.svg';
import './App.css';

// import {useState, useEffect} from "react";
import Header from "./components/Header";
import Hero from './components/Hero';
import Upload from "./components/Upload";
import Footer from './components/Footer';


function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Upload />
      <Footer />
    </div>
  );
}

export default App;
