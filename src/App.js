import { useState } from 'react';
import './App.css';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Shopping List</h2>
        <ShopForm setItems={setShoppingList} />
        <ShopList shoppingItems={shoppingList} setItems={setShoppingList} />
      </header>
    </div>
  );
}

export default App;
