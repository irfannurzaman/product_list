import React from "react";
import Gap from "../gap";
import { BiUpload } from "react-icons/bi";


function Upload({
    label
}) {
    return (
        <div>
            { label && <label style={{
                    fontWeight: '600',
                color: '#fff',
                    fontSize: 13
            }}>{label}</label>}
            {
                label && <Gap height={5}/>
            }
            <button style={{
                width: '100%',
                padding: '7px 10px',
                border: '1px solid #fff',
                // width: 150,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#000',
                cursor: 'pointer',
                
            }}>
                <label style={{
                    fontWeight: '600',
                    color: '#fff',
                    // fontSize: 15
                }}>Select file</label>
                <BiUpload color="#fff" size={20}/>
            </button>
        </div>
    )
}

export default Upload