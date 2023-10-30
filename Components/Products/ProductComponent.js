import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../StoreSlices/cartSlice";



const ProductComponent=({name,price,img})=>{


    const dispatch = useDispatch();

    const user = useSelector((store)=>store.loggedInUser.user);

    const addProduct =()=>{
        console.log(user);
        if(user.loggedIn==true){
            dispatch(addItem( {name:user.name,item:{img:img,name:name,price:price}}))
        }else{
            alert("Log iN please !!!")
        }
    }



    return (
        <div className="product">
            <img src={img}></img>
            <div>{name}</div>
            <p>Price :{price} /-</p>
            <button onClick={addProduct}>Add To Cart</button>     
        </div>
    )
}

export default ProductComponent;