import React, { useState, useEffect } from "react";
import MenuSection from './MenuSection';
import { connect } from 'react-redux';
import {startGetMenu} from '../actions/menuActions';
import Loader from 'react-loader-spinner';

function MenuSections({menu, fetchStatus, startGetMenu}) {
    const [menuSections, setMenuSections] = useState([])

    useEffect(()=>{
        setMenuSections(menu.MenuSections)
    },[menu])

    if(!fetchStatus) {
        startGetMenu();
    }
    if(fetchStatus === 'fetching') {
        return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    }
    return( 
        <>
    {menuSections.length > 0 ? <div className="menu_sections_cont">
       {menuSections.map(({MenuSectionId})=>(
           <MenuSection id={MenuSectionId} key={MenuSectionId}/>
       ))} 
    </div>: ''}
    </>
    )
   
}

const mapStateToProps = (state)=>(
    {
        menu: state.menu,
        fetchStatus: state.fetchStatus.status
    }
)
const mapDispatchToProps = (dispatch)=>(
    {
        startGetMenu: ()=>(dispatch(startGetMenu()))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(MenuSections);