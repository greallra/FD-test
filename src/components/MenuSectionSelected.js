import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

const MenuSectionSelected = ({history, MenuSectionSelected})=>{
    return (
<div className="menu_section_selected_cont">
    <div className="btn-cont">
        <button onClick={history.goBack} className="btn"><span>&lt;</span> <span>Back</span></button>
    </div>
    <h3>{MenuSectionSelected.Name}</h3>
    <div className="menu_section_cont"> 
        {MenuSectionSelected.MenuItems.map((MenuIt)=>{
            return <MenuItem key={MenuIt.MenuItemId} MenuItemId={MenuIt.MenuItemId} MenuSectionId={MenuIt.MenuSectionId}/>
        })}
    </div>
</div>
    )
}
const mapStateToProps = (state, ownProps)=>({
    MenuSectionSelected: state.menu.MenuSections.find((section)=>section.MenuSectionId == ownProps.match.params.MenuSectionId)
})

export default connect(mapStateToProps)(MenuSectionSelected);



 