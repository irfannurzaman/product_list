import React from "react";

import { useWindowSize } from "../../../utils/responsif"

function Footer() {
    const responsif = useWindowSize()

    if (!responsif) {
        return (
            <div>
                <div style={{
                    display: 'flex',
                    color: '#fff',
                    justifyContent: 'space-between',
                    // flexDirection: responsif ? 'row' : 'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                    height: 50,
                }}>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Nightclub Profile</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Featured</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Bevarages</div>
                </div>
                    <div style={{
                    display: 'flex',
                    color: '#fff',
                    justifyContent: 'space-between',
                    // flexDirection: responsif ? 'row' : 'column',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    width: '100%',
                    height: 50,
                }}>
                      <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
            }}>Table Information</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
            }}>Oprational Hour</div>
            <div style={{
                flex: 1,
                display: 'flex',
                backgroundColor: '#AA5AFA',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>NEXT</div>
                </div>
            </div>
        )
    }
    return (
        <div style={{
            display: 'flex',
            color: '#fff',
            justifyContent: 'space-between',
            // flexDirection: responsif ? 'row' : 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            height: 50,
        }}>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Nightclub Profile</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Featured</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                color: '#EF9533',
                borderTop: '1px solid #EF9533',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>Bevarages</div>
            
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
            }}>Table Information</div>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center'
            }}>Oprational Hour</div>
            <div style={{
                flex: 1,
                display: 'flex',
                backgroundColor: '#AA5AFA',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>NEXT</div>
        </div>
    )
}
export default Footer