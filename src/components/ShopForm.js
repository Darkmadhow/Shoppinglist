import {useState} from "react";

export default function ShopForm({addItem}){
    const [shoppingItem, setShoppingItem] = useState({
        itemName: ""
    });

    function handleInput(e){
        setShoppingItem({itemName: e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(shoppingItem.itemName){
            addItem({...shoppingItem});
            //Reset Form
            setShoppingItem({itemName:""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={shoppingItem.itemName} onChange={handleInput}/>
            <button type="submit" className="addBtn">Add Item</button>
        </form>
    );
}