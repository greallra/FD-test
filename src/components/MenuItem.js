import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import { getMenuItem, checkForMasterOption } from '../selectors/menuSelectors';
import { Link } from 'react-router-dom';

const MenuItem = ({location, MenuItem,MenuSectionId, MenuItemId})=>{

    return(
        <div>
    <Link to={`${MenuSectionId}/${MenuItemId}`} >
    <div className="menu_item_cont">
        <div className="left">
            <div className="img-cont">
                <img src={MenuItem.ImageUrl}/>
                <h4>From {numeral(MenuItem.Price).format('$0.00')}</h4>
            </div>      
        </div>
        <div className="right">
            <h4>{MenuItem.Name}</h4>
            <p>{MenuItem.Description}</p>
        </div> 
    </div>
    </Link>   
        </div>
   
    )
}

const mapStateToProps = (state, ownProps)=>({
    MenuItem: getMenuItem(state.menu.MenuSections, ownProps.MenuSectionId, ownProps.MenuItemId)
})

export default connect(mapStateToProps)(MenuItem);

//.find((section)=>section.MenuSectionId == ownProps.MenuSectionId)