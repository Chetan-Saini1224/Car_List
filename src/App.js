import './App.css';
import CarList from "./CarList";
import { useState } from 'react';

function App() {
  let [cars,setCars] = useState([]);
  let [Name,setName] = useState('');  
  let [Model,setModel] = useState('');
  let [Qty,setQty] = useState();
  
  function handleSubmit(e){
      e.preventDefault()
      let find = false; 
      cars = cars.map( (val,idx) => {
        if(val.Name == Name)
        { 
            val.Model = Model
            val.Qty = parseInt(val.Qty) +  parseInt(Qty); 
            find = true
        }
        return val;
      })
      if(find) setCars([...cars]);
      else setCars([...cars,{Name,Model,Qty}]);
  }

  return ( <>
    <form  className="form">
          <input type="text" value={Name} placeholder='Name of car' onInput={(e) => setName(e.target.value)} />   
          <input type="text" value={Model} placeholder='Model of car' onInput={(e) => setModel(e.target.value)} />   
          <input type="number" value={Qty} placeholder='Qty of car' onInput={(e) => setQty(e.target.value)} />   
          <input type="button" value="Submit" onClick={handleSubmit} />
    </form>
     <CarList cars={cars} />   
  </>)
}

export default App;
