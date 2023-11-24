import React from "react";
import { Input, Button, Gap } from "../../atoms"
import { useWindowSize } from "../../../utils/responsif"


const style = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

function Search() {
    const responsif = useWindowSize()
    return (
        <div style={style.container}>
            <Input icon="search" placeholder="Search product" />
            <Gap width={50}/>
            {
                responsif ?
                    <Button label="Import" icon="import" type="outline" style={{ width: 200 }}/>
                    : <Button icon="import" type="icon" style={{ marginLeft: 30 }} />
            }
        </div>
    )
}
export default Search