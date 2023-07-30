import React from "react";

function Sort({ onSort }){
    return(
        <div className="sort_section">
            <label>SORT BY</label>
            <select className="form-select" onChange={(e) => onSort(e.target.value)}>
                <option value="">Select Option</option>
                <option value="damage">Damage</option>
                <option value="health">Health</option>
                <option value="armor">Armor</option>
            </select>
        </div>
    )
}

export default Sort;