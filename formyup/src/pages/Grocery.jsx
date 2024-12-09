import GroceryCard from "../component/GroceryCard";
import Grocerycover from "../component/Grocerycover";
import "./Grocery.css"
function Grocery({products}){
    
    return(
        <>
           <Grocerycover/> 
           <GroceryCard products={products}/>
        </>
    )
}
export default Grocery