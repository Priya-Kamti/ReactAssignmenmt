import { useSelector } from "react-redux";

const CardItems =()=>{

    const cart = useSelector((store)=>store.cart.userCart);
    const name = useSelector((store)=>store.loggedInUser.user.name);

    return (
        <div className="cartItems">
            
        {cart.map((item)=>{
        if(name==item.name){
                return(
                    <div className="item">
                        <img src={item.item.img}></img>
                        <div>
                            {item.item.name}
                           <p>
                           Price: {item.item.price}
                           </p>

                        </div>
                </div>
                )
        }
    
        })}
        </div>
    )
}

export default CardItems;