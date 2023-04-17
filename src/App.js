import { useState } from 'react';
import './App.css';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function addItem(item){
    setShoppingList([item,...shoppingList]);
  }

  function removeItem(itemName){
    setShoppingList(shoppingList.filter(item => item.itemName !== itemName));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Shopping List</h2>
        <ShopForm addItem={addItem} />
        <ShopList shoppingItems={shoppingList} removeItem={removeItem} />
      </header>
    </div>
  );
}

export default App;
