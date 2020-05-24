import React, { useState } from 'react';

function Counter({initialCount}) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(initialCount);

  const handleChange = event => {
    setCount(event.target.value);
};

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <input type="text" value={initialCount} onChange={handleChange}/>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        -1
      </button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;
