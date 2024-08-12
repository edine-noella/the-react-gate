import  { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
   const [newNames , setNewNames] = useState([])   

   useEffect(() => {
    if (names.length > 0) {
      const timer = setTimeout(() => {      
        const [firstName, ...remainingNames] = names;    
        setNames(remainingNames);   
        setNewNames((prevNewNames) => [...prevNewNames, firstName]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [names]);

  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {newNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;