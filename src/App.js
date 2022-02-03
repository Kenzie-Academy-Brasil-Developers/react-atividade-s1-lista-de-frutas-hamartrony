import './App.css';
import {useState} from 'react'
import ExibirFrutas from './components/card/Card';
import FruitList from './components/card/Card';




function App() {

  const lista = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
    { name: "melancia", color: "red", price: 4 },
    { name: "laranja", color: "orange", price: 4 },
    { name: "mixirica", color: "orange", price: 4 }
  ]

  const [fruits, setFruits] = useState(lista);
  
  function reset(){
    setFruits(lista)
  }
  
  function redFruits(color){ 
    reset()

    setFruits(fruits.filter(item => item.color === color))

  }

  const totalPrice = fruits.reduce((acum, atual) => acum + atual.price, 0)


  return (
    <div className="App">
      <header className="App-header">
        <span>Total: R$ {totalPrice.toFixed(2)}</span>
      <FruitList lista  ={fruits}/>
      <button className ='red'    onClick={() => redFruits('red')}>Vermelhas</button>
      <button className ='orange' onClick={() => redFruits("orange")}>Laranjas</button>
      <button className ='yellow' onClick={() => redFruits("yellow")}>Amarelas</button>
      <button className = 'reset' onClick={reset}>reset</button>
    
    
      </header>
    </div>
  );
}

export default App;
