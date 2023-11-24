import React from "react";
import Button from "../../atoms/button";
import { BsBoxSeam } from "react-icons/bs";


const style = {
    header: {
        display: 'flex'
    },
    label: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontWeight: '700',
        color: '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '20%',
        position: 'absolute',
        height: 50,
    }
}



function Header(params) {
    return (
        <div style={style.header}>
            <div style={style.button}>
                <Button type="back" />
            </div>
            <div style={style.label}>
                <BsBoxSeam size={25} style={{ marginRight: 10 }}/>
                Product List
            </div>
        </div>
    )
}

export default Header