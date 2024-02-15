import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState({
    people: '',
    pieces: ''
  });

  const [result, setResult] = useState(null);

  const calculatePizzaCost = () => {
    const { people, pieces } = value;

    if (people > 0 && pieces > 0) {
      const sizes = [
        { size: '5 inch', price: 3, pieces: 4 },
        { size: '7 inch', price: 5, pieces: 6 },
        { size: '10 inch', price: 8, pieces: 10 },
        { size: '15 inch', price: 12, pieces: 15 },
        { size: '24 inch', price: 18, pieces: 24 },
      ];

      let minCost = Number.MAX_VALUE;
      let bestSize = null;

      sizes.forEach((pizzaSize) => {
        const totalPieces = people * pieces;
        const totalCost = (totalPieces / pizzaSize.pieces) * pizzaSize.price;

        if (totalCost < minCost) {
          minCost = totalCost;
          bestSize = pizzaSize.size;
        }
      });

      setResult({
        sizes: sizes.map((pizzaSize) => ({
          ...pizzaSize,
          cost: (people * pieces / pizzaSize.pieces) * pizzaSize.price,
        })),
        bestSize,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePizzaCost();
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
