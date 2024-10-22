import Item from "antd/es/list/Item";
import { createContext, useState } from "react";


export const cardContext = createContext()

function CardContextProvider( { children } ){

    const [CardItem , setCardItem] = useState([])

    // Add to Card function
    function addItemToCard(item){
        const arr = CardItem
        const itemIndex = CardItem.findIndex((data)=> data.id == item.id)
        if(itemIndex == -1){
            arr.push({...item , quantity:1})
        }else{
            arr[itemIndex].quantity++
        }
        setCardItem([...arr])
    }


    // Rempve Item to Card function
    function removeItemtoCard(id){
        const arr = CardItem
        const itemIndex = CardItem.findIndex((data)=> data.id == id)
        arr.splice(itemIndex, 1)
        setCardItem([...arr])
    }

    // isItem added to Card function
    function isItemAdded(id){
        const arr = CardItem
        const itemIndex = CardItem.findIndex((data)=> data.id == id)
        
        if(itemIndex == -1){
            return null
        }else{
            return arr[itemIndex]
        }
    }


    function addquntity(item , type){
        const arr = CardItem
        const itemIndex = CardItem.findIndex((data)=> data.id == item.id)
               
        if(type == 'plus'){
            arr[itemIndex].quantity++;
        }else{
            arr[itemIndex].quantity--;
        }
        setCardItem([...arr])
    }

    return <cardContext.Provider value={{CardItem , addItemToCard , removeItemtoCard , isItemAdded , addquntity }}>{children}</cardContext.Provider>
}

export default CardContextProvider;