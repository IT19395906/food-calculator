import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [value, setValue] = useState({
    people: '',
    pieces: ''
  });

  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/calculate-cost', value)
    .then(res => setResult(res.data))
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div className='d-flex justify-content-center align-items-center bg-light ' >
        <div className='border shadow bg-white pb-3 pt-3 px-5 w-75 '>
          <h1>Pizza Ltd</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-5'>
              <div className='mb-2'>
                <label htmlFor='people' >Number of people in group</label>
                <input className='form-control' id='people' type='number' value={value.people}
                  onChange={(e) => setValue({ ...value, people: e.target.value })} placeholder='enter no of people in the group' />
              </div>
              <div className='mb-2'>
                <label htmlFor='pieces' >Number of pieces</label>
                <input className='form-control' id='pieces' type='number' value={value.pieces}
                  onChange={(e) => setValue({ ...value, pieces: e.target.value })} placeholder='enter no of pieces each person eat' />
              </div>
            </div>
            <button className='btn btn-success btn-lg' type='submit'>Submit</button>
          </form>
          {result && (
          <div className='mt-4'>
            <h4>Cost for each size:</h4>
            <ul>
              {result.sizes.map((pizzaSize) => (
                <li key={pizzaSize.size}>
                  {pizzaSize.size}: ${pizzaSize.cost.toFixed(2)}
                </li>
              ))}
            </ul>
            <h4>Best Size: {result.bestSize}</h4>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
