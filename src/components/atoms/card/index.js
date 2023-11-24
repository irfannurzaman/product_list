import React from "react";
import { IoMdAdd } from "react-icons/io";
import { useWindowSize } from "../../../utils/responsif"


const styles = {
    card: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        overflow: 'hidden',
        // maxWidth: '200px',
        minWidth: '80px',
        maxHeight: 450,
        width: '20%',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        padding: '0 20px'
    },
    cardisEmpty: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        overflow: 'hidden',
        minWidth: '110px',
        width: '20%',
        height: 200,
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        padding: '0 20px',
        border: 'dashed',
        borderColor: '#ada9a8',
        borderWeight: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    cardImage: {
        width: '100%',
        height: 'auto',
        borderRadius: 5
    },
    cardContent : {
        padding: '16px',
    },
    cardTitle: {
        // fontSize: '1.5rem',
        marginBottom: '8px',
        'background': '-webkit-linear-gradient(90deg, #A060FA 22.29%, #C800CC 81.69%)',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    },
    cardText: {
        fontSize: '1rem',
        color: 'rgba(159, 158, 159, 1)'
    }

}

function Card(props) {
    const {
    label,
    img,
    desc,
    price,
    total,
    onClick,
    card
    } = props

    const responsif = useWindowSize()

    let style = {}

    if (!responsif) {
        style = {
            width: 500
        }
    } else {
        style = {
            maxWidth: '200px',
        }
    }

    if (card?.length !== 0) {
        style = {
            ...style,
            maxHeight: 450,
            height: 450,
            border: 'none'
        }
    }
    if (!label) {
        return (
            <div onClick={onClick} style={{...styles.cardisEmpty, ...style }}>
                <IoMdAdd />
                <h5>Add Product</h5>
            </div>
        )
    }  

    return (
        <div style={{ ...styles.card, ...style }}>
            <h3>{price}</h3>
            <img
                src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1594099343/attached_image/ini-manfaat-konsumsi-kopi-hitam-dan-efek-sampingnya-untuk-kesehatan-0-alodokter.jpg"
                alt="Card Image"
                style={styles.cardImage}
            />
            <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{label}</h3>
                <p style={styles.cardText}>
                    {desc}
                </p>
                <h4>{total}</h4>
            </div>
        </div>
    )
}

export default Card