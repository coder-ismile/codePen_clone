import React from 'react'
import Home from "./componenets/Home"
import './App.css'
import DataProvider from './context/DataProvider';
function App() {
  return (
        <DataProvider>
          <Home/>
        </DataProvider>
  );
}

export default App;
