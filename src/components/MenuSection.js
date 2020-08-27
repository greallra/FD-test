import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MenuSection({history, id, MenuSection}) {
    return( 
      <Link to={`/${MenuSection.MenuSectionId}`}>
          <div className="menu_section_display_homepage">
            <h2>{MenuSection.Name}</h2>
            <img src={MenuSection.ImageUrl}/>   
          </div>
       </Link>
    )
}

const mapStateToProps = (state, ownProps)=>({
    MenuSection: state.menu.MenuSections.find((section)=>section.MenuSectionId == ownProps.id)
})

export default connect(mapStateToProps)(MenuSection);
