import ShopItem from "./ShopItem";

export default function ShopList({shoppingItems, setItems}){

    function deleteAll(){
        setItems([]);
    }
    return(
        <div className="listBody">
            <ul>
                {shoppingItems.map(item => <ShopItem item={item} setItems={setItems} key={item.itemName}/>)}
            </ul>
            <button onClick={deleteAll}>Delete All</button>
        </div>
    );
}