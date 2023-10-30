import { Link } from "react-router-dom";


 const Category =({img,name})=>{
    return(
        <>
        <div className="category"style={{}}>
             <img src={img}></img>
             <h2 >{name}</h2>
        </div>
    </>
    )
}

const Body =()=>{
    return (
        <div  className='body'>
        <Link to={'/saree'}><Category img="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/p/3/5/free-2626-new-latest-fresh-new-arrival-saree-bollywood-banarasi-original-imagmbdzzybjxtsy.jpeg?q=70" name="SAREE" /></Link>
        <Link to={'/kurti'}><Category img="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/z/t/u/4xl-r1075-ftdiva-original-imagg5ccrmaungr2.jpeg?q=70" name="KURTI" /></Link>
        <Link to={'/suit'}> <Category img="https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/u/p/w/yes-2-2-m-semi-stitched-2-36-m-jewellery-dusty-rma-chku-sa-nd-original-imagjvghepsksdgt.jpeg?q=70" name="SALWAR SUIT"/></Link>
        <Link to={'/lehenga'}> <Category img="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-lehenga-choli/b/f/c/free-sleeveless-semi-stitched-44-ss-priya-lehenga-choli-zinariya-original-imagquttuxprmbj4.jpeg?q=70" name="LEHENGA"/></Link>

        </div>
    )
}

export default Body;