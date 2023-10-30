import { Link } from "react-router-dom";

import ProductComponent from "./ProductComponent";

const SareeComponent =()=>{
    return (
        <div className="sareeComp">
            <ProductComponent name='Siphoon Silk Saree' price="700" img='https://rukminim2.flixcart.com/image/832/832/l02r1jk0/sari/0/1/p/free-2329sj781-siril-unstitched-original-imagbxxwcjqgyvzu.jpeg?q=70'/>
            <ProductComponent name='Bhagalpuri Silk ' price='1200' img='https://rukminim2.flixcart.com/image/832/832/l4ln8nk0/sari/p/2/u/free-2535s934-samah-unstitched-original-imagfgq7pc2mc4vz.jpeg?q=70'/>  
            <ProductComponent name='Cotton Silk Saree' price='850' img='https://rukminim2.flixcart.com/image/832/832/krdtlzk0/sari/m/z/s/free-33-purple-priheta-creation-unstitched-original-imag56refnvhwahw.jpeg?q=70'/>  

            <ProductComponent name='Geometric Print' price='900' img='https://rukminim2.flixcart.com/image/832/832/xif0q/sari/q/v/s/free-2952s2077-samah-unstitched-original-imagzmqthfk4rhyy.jpeg?q=70'/>  
            <ProductComponent name='Embroidered Silk Saree' price='1400' img='https://rukminim2.flixcart.com/image/832/832/xif0q/sari/m/o/q/free-33-gold-purple-vf-vbhp-fashion-unstitched-original-imagu2nbhrk4j7pw.jpeg?q=70'/>  

        </div>
    )
}

export default SareeComponent;