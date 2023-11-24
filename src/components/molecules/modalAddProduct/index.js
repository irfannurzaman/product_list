import React from "react";
import { Input, Gap, Button, Upload } from "../../atoms";
import { useWindowSize } from "../../../utils/responsif"


function ModalAddProduct({
    setShowModal
}) {
    const responsif = useWindowSize()
    const [formData, setFormData] = React.useState({ 
        product_name: "",
        menu_code: "",
        category: "",
        text_area: "",
        price: "",
        discount: "",
    });
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(false)
    }




    return (
        <div style={{ 
            height: !responsif ? 600 : 700,
            width: !responsif ? 320 : 600,
        }}>
            <form onSubmit={handleSubmit}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#fff'
                }}>
                    <h3>Add Menu</h3>
                </div>
                <div style={{ 
                    display: 'flex'
                }}>
                    <Input id="product_name" name="product_name" onChange={handleChange} label="Your product name"/>
                    <Gap width={50}/>
                    <Input id="menu_code" name="menu_code" onChange={handleChange} label="Menu Code"/>
                </div>
                <Gap height={20}/>
                <Input id="category" name="category" onChange={handleChange} label="Category"/>
                <Gap height={20}/>
                <Input id="text_area" name="text_area" onChange={handleChange} label="Tell me more about your product" type="text-area"/>
                <Gap height={20} />
                <div style={{ 
                    display: 'flex'
                }}>
                    <Input id="price" name="price" onChange={handleChange} label="Price"/>
                    <Gap width={50}/>
                    <Input id="discount" name="discount" onChange={handleChange} label="Discount Price (optional)" />
                </div>
                <Gap height={20}/>
                <Upload onClick label="Image"/>
                <Gap height={40} />
                <Button label="Add Product" type="liner-gardient"/>
            </form>
        </div>
    )
}

export default ModalAddProduct