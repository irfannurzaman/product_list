import React from "react";
import { Button, Select } from "../../atoms";
import { useWindowSize } from "../../../utils/responsif"
import { initalState } from "../../../utils/data"

const styles = {
    container: {
        padding: "20px 0",
        backgroundColor: '#1E1E1E',
        marginTop: 40,
        borderRadius: 10,
        display: 'flex',
        overflow: 'overlay',
    },
    
}


function reducer(state, action) {
    if (action.type === 'set_category') {
        state.cateogry.forEach(element => {
            if (action.payload.label === element.label ) {
                element['active'] = true
            } else {
                element['active'] = false
            }
        });
        return {
            ...state,
            cateogry: state.cateogry,
        };
    }
    throw Error('Unknown action.');
}

function Category() {
    const [state, dispatch] = React.useReducer(reducer, initalState);


    const onClick = (item) => {
        dispatch({
            type: 'set_category',
            payload: item
        });
    }

    return (
        <div style={styles.container}>
            {
                state.cateogry.map(item => {
                    let style = {
                        borderRadius: 15
                    }
                    if (item.label === "Category") {
                        style = {
                            border: 'none'
                        }
                    }
                    if (item.active) {
                        style = {
                            ...style,
                            backgroundColor: '#AA5AFA',
                            borderColor: '#AA5AFA'
                        }
                    }
                    if (!item.active) {
                        style = {
                            ...style,
                            backgroundColor: '#1E1E1E',
                            borderColor: '#fff'
                        }
                    }
                    
                    return (
                        <div style={{ marginRight: 10 }}>
                            <Button onClick={() => onClick(item)} style={style} label={item.label} type="outline"/>
                        </div>
                    )
                })
            }

            <Button type="icon" icon="pencil" style={{
                border: 'none'
            }}/>
        </div>
    )
}

export default Category