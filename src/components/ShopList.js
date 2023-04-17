import ShopItem from "./ShopItem";

export default function ShopList({shoppingItems, removeItem}){
    return(
        <ul>
            {shoppingItems.map(item => <ShopItem item={item} removeItem={removeItem}/>)}
        </ul>
    );
}