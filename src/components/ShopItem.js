export default function ShopItem({item, removeItem}){

    function handleRemove(e){
        removeItem(item.itemName);
    }
    return(
        <div className="shopItem">
            <li>{item.itemName}</li>
            <button onClick={handleRemove} className="deleteBtn">X</button>
        </div>
    );
}