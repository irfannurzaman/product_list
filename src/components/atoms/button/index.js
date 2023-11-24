import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { useWindowSize } from "../../../utils/responsif"
import { LuUpload } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";

const styles = {
    main: {
        border: 'none',
        alignItems: 'center',
        display: 'flex',
        fontWeight: '700',
        fontSize: '100%',
        color: '#fff',
        cursor: 'pointer',
        background: 'none',
        borderRadius: 5,
        width: '100%'
    },
    outlineButton: {
        border: '1px solid #fff',
        // width: 150,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 15px',
    },
    linerGardient: {
        // width: 150,
        display: 'flex',
        justifyContent: 'center',
        padding: '5px 15px',
        background: 'linear-gradient(90deg, #A060FA 22.29%, #C800CC 81.69%)'
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #fff',
        borderRadius: '100%',
        width: 45
        
    },
    label: {
        padding: '5px 0',
        cursor: 'pointer',
        textWrap: 'nowrap'
    }
}


const Button = ({
    background = "none",
    type,
    label,
    icon,
    style = {},
    onClick
}) => {
    const responsif = useWindowSize()

    let icons

    if (icon === "import") {
        icons = <LuUpload />
    }
    if (icon === "pencil") {
        icons = <LuPencil />
    }

    const backButton = () => {
        return (
            <button onClick={onClick} style={{...styles.main, background, ...style}}>
                <IoMdArrowBack size={20} style={{ marginRight: 10 }} />
                {
                    responsif && 'Back'
                }
            </button>
        );
    }

    const buttonOutline = () => {
        return (
            <button onClick={onClick} style={{ ...styles.main, ...styles.outlineButton, ...style}}>
                {icons && icons}
                {icons && <div style={{ width: 10 }}/>}
                <label style={styles.label}>{label}</label>
            </button>
        )
    }
    const buttonLinerGardient = () => {
        return (
            <button onClick={onClick} style={{ ...styles.main, ...styles.linerGardient, ...style}}>
                {icons && icons}
                {icons && <div style={{ width: 10 }}/>}
                <label style={styles.label}>{label}</label>
            </button>
        )
    }


    const buttonIcons = () => {
            return (
                <button onClick={onClick} style={{ ...styles.main, ...styles.icons, ...style}}>
                    {icons}
                </button>
            )
    }

    if (type === "back") {
        return  backButton()
    }
    if (type === "outline" ) {
        return  buttonOutline()
    }
    if (type === "liner-gardient" ) {
        return  buttonLinerGardient()
    }
    if (type === "icon" ) {
        return  buttonIcons()
    }
    
    return <button>
        {icons}
        {label}
    </button>
    
}

export default Button;
