import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Gap from "../gap";


const styles = {
    icons: {
        margin: '0 5px',
        cursor: 'pointer'
    }
}


function Input({
    icon,
    placeholder,
    type = "default",
    label,
    name,
    onChange
}) {

    const searchInput = useRef(null);
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    let icons 


    if (icon === "search") {
        icons =  <FaSearch size={25} color="#AA5AFA" style={styles.icons}/>
    }
    return (
        <div style={{ width: '100%'}}>
            {
                label && <label style={{
                    fontWeight: '600',
                    color: '#fff',
                    fontSize: 13
                }}>{label}</label>
            }
            {
                label && <Gap height={5}/>
            }
            { type === "default" &&
            <div style={{
                border: '1px solid',
                height: type === "text-area" ? 100 : 35,
                width: '100%',
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                borderColor: focused ? '#AA5AFA' : '#6e7a71',
                padding: '0 5px',
                backgroundColor: '#000'
            }}>
                <input
                ref={searchInput}
                name={name}
                type="text" onFocus={onFocus} 
                onBlur={onBlur}
                placeholder={placeholder}
                onChange={onChange}
                typeof="tex"
                style={{
                    background: 'none',
                    backgroundColor: 'none',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    color: '#fff',
                    outline: 'none',
                    fontSize: 16.
                    }} />
                { icons && icons}
                
            </div>
            }
            {   
                type === "text-area" &&
                <textarea
                    style={{
                        background: 'none',
                        border: 'none',
                        width: '100%',
                        height: 100,
                        color: '#fff',
                        outline: 'none',
                        backgroundColor: '#000',
                    }}
                    onChange={onChange}
                    name={name} />
            }
        </div>

    )
}

export default Input