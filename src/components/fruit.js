import React, { useState } from 'react';

const FruitInput = () => {
  const [fruitName, setFruitName] = useState('');
  const [listItems,setListItems]=useState([])
  const [rate, setRate] = useState(0);
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'fruitName') {
      setFruitName(value);
    } else if (name === 'rate') {
   
        setRate(value)
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    setListItems([...listItems,{fruit:fruitName,rate:rate}])
     setFruitName('')
     setRate(0)
     console.log(listItems)
  }
  const handleDelete=(index)=>{
    setListItems(listItems.filter((item,i)=> i!==index))
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <label htmlFor="fruitName" className="text-sm font-medium">
        Fruit Name
      </label>
      <input
        type="text"
        id="fruitName"
        name="fruitName"
        value={fruitName}
        onChange={handleChange}
        className="rounded-md border w-3/12 border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <label htmlFor="rate" className="text-sm font-medium">
        Rate
      </label>
      <input
        type="number"
        id="rate"
        name="rate"
        value={rate}
        onChange={handleChange}
        className="rounded-md border w-3/12 border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <button type='submit' onClick={handleSubmit} className=' border  w-20 rounded-md bg-green-600' >ADD</button>
      {listItems.length>0 && (<div>
        {listItems.map((item,index)=>(
            <div className=' flex p-4' key={index} >
              <p>{item.fruit}:{item.rate}</p>
              <button type='button' onClick={()=>handleDelete(index)} className='mx-2' >✖️</button>
            </div>
        ))}
      
        </div>)}
    </div>
  );
};

export default FruitInput