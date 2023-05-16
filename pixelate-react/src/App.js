// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
// import {useState, useEffect} from "react";
import Header from "./components/Header";
import Upload from "./components/Upload";


function App() {
  return (
    <div className="page">
      <Header />
      <Upload />
      <Footer />
    </div>
  );
}

export default App;
