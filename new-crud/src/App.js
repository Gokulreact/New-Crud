import React from 'react';
import Header from './components/Header/Header';
import AddCategory from './components/Add/AddCategory';
import AddSubCategory from './components/AddSubCategory.jsx';
import DataList from './components/Data View/DataList';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      
      <AddCategory/>
     {/*<AddSubCategory/>*/} 
      <DataList/>
     
      </div>
  );
}

export default App;
