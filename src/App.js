import { useState } from 'react';
import './App.css';
import List from './components/List';
import Sidebar from './components/Sidebar';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Saved from './components/Saved';
import AboutUs from './components/AboutUs';

function App() {
  const [data, setData] = useState([
    {
      id: 0,
      model: "RS6",
      price: 170000,
      make: "Audi",
      new: true,
    },
    {
      id: 1,
      model: "RSQ7",
      price: 150000,
      make: "Audi",
      new: true,
    },
    {
      id: 2,
      model: "320d",
      price: 60000,
      make: "BMW",
      new: false,
    },
    {
      id: 3,
      model: "A8",
      price: 90000,
      make: "Audi",
      new: false,
    },
  ]);

  function search(model){
    let temp = data.filter((watch) => (watch.model===model));
    setWatches(temp)
  }

  const [saved, setSaved] = useState([]);

  function save(watch){
    if(!saved.includes(watch)){
      saved.push(watch);
    }
  }

  const [watch, setWatches] = useState(data);

  function sort(){
    const temp = [...data].sort((a, b) => a.price - b.price)
    setWatches(temp)
    console.log(watch)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar sort={sort} save={save} search={search}/>
      <div className='body'>
        <div>
          <Routes>
            <Route path='/' element={<List watches={watch} save={save}/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/saved' element={<Saved saved={saved}/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
