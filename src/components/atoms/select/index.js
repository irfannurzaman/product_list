import React from "react";


function Select(params) {

    const [selectedOption, setSelectedOption] = React.useState('');

    const handleSelectChange = (event) => { 
        setSelectedOption(event.target.value);
    }
    return (
        <div>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Pilih...</option>
                    <option value="option1">Opsi 1</option>
                    <option value="option2">Opsi 2</option>
                    <option value="option3">Opsi 3</option>
                </select>
        </div>
    )
}

export default Select