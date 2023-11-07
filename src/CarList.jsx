import React from 'react'

const CarList = ({cars}) => {
  return (
   <ul className="list">
    {cars.map((val,idx)=>(
            <li key={idx} className='list_item'>
                <span>Car Name : {val.Name}</span>
                <span>Car Model : {val.Model}</span>
                <span>Car Qty : {val.Qty} </span>
            </li>
    ))}
    </ul>
  )
}

export default CarList