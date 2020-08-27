import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const MenuItemOptionSet = ({optSet, handleAddedOption, index})=>{
    const [optionSelected, setOptionSelected] = useState(null);
    const [IsMasterOptionSet] = useState(optSet.IsMasterOptionSet)

    useEffect(()=>{
        if(!optionSelected) return;
        handleAddedOption(optionSelected, index, IsMasterOptionSet)

    },[optionSelected])

    return(
<div className="optionSet_cont"> 
     <h6>{optSet.Name === null ? 'ADDTIONALS': ''} {optSet.IsMasterOptionSet ? '(Required)': '(Optional)'}</h6>
    <form action="">
     {optSet.MenuItemOptionSetItems.map((item)=>{
         return <div key={item.PublicId} className="optionSetItem_cont">
            <label htmlFor={item.Name} name="gender" value={item.Name}>{item.Name} </label> 
            <input type="radio" name="gender"  value={item.Name} onChange={()=>{setOptionSelected(item)}}/>
            <div style={{marginLeft: 'auto'}}>{numeral(item.Price).format('$0.00')}</div>
         </div> 
     })}
    </form>

</div>)
}
export default connect()(MenuItemOptionSet);
