import React, {useState} from 'react';
import './App.css';
import './components/Cards/Card.css';
import {Card} from './components/Cards/Card';



function App() {

  // Task 1
  const [CardVisible, setCardVisible] = useState ([
    {
      id: 1,
      title: "Asus Laptop E410MA-EB268",
      price: 9999,
      description: "laptop Peacock Blue"
    },
    
    {
      id: 2,
      title: "HP Pavilion Gaming 15-ec1055ur",
      price: 27777,
      description: "laptop Dark Grey"
    },
    
    {
      id: 3,
      title: "Apple MacBook Pro 13",
      price: 70999,
      description: "laptop Space Gray"
    },
    
    {
      id: 4,
      title: "Lenovo V145-15AST",
      price: 10999,
      description: "laptop Black"
    }]

  );


  //Task2
  const [itemsToHide, setItemsToHide] = useState ([]);

  const filteredArr = CardVisible.filter (el => !itemsToHide.includes(el.id));
  
  const handleArrChange = () => {
    const itemToRemove = filteredArr[0];
    if (!itemToRemove) return;

    const clone = [...itemsToHide];
    clone.push(itemToRemove.id)
    setItemsToHide(clone)
  }

  const onRevert = () => {
    setItemsToHide([]); 
  }

  const deleteCard = () => {
    const newArr = [...CardVisible];
    newArr.shift();
    setCardVisible(newArr);    
  }
  
  
  return (
    <div className="App">
      <div className="card-list">

          {
          CardVisible.map(value => <div key={value.id}><Card title={value.title} price={value.price} description={value.description}/></div>)
          }      
          
      </div>
          <button onClick={deleteCard}> Delete </button>


      {/*Task2 &3    */}
      <div className="card-list">
          {
          filteredArr.map(el => 
          <div key={el.id}><Card title={el.title} price={el.price} description={el.description}/> 
          <button onClick={() => handleArrChange (el)}> remove </button>
          </div> )
          }
      
      </div>
        <button onClick={handleArrChange}> Remove</button>
        <button onClick={onRevert}> Revert </button>
 
         
     
    </div>
  );
}


export default App;


