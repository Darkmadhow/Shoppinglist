export default function ShopItem({item, setItems}){

    function handleRemove(e){
        setItems(prev => prev.filter(curr => item.itemName !== curr.itemName));
    }
    return(
        <div className="shopItem">
            <li >{item.itemName}</li>
            <button onClick={handleRemove} className="deleteBtn">X</button>
        </div>
    );
}