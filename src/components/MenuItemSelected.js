import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenuItem } from '../selectors/menuSelectors';
import MenuItemOptionSet from './MenuItemOptionSet';
import { Redirect } from 'react-router-dom';
import { addItemToBasket } from '../actions/basketActions';
import numeral from 'numeral';

const MenuItemSelected = ({history, MenuItem, addItemToBasket})=>{
    const [mains, setMains] = useState([{...MenuItem, Quantity: 1}])
    const [additionals, setAdditionals] = useState({});
    const [total, setTotal] = useState(0);
    const [isValidOrder, setValidOrder] = useState(false);
    const [error, setError] = useState(false);
    
    var mapAdditionals = Object.keys(additionals).map(function(key,i) {
        return <div className="price-cont" key={i}>
            <div value={key}>{additionals[key].Name}</div>
            {/* <div>{numeral(additionals[key].Price).format('$0.00')}</div> */}
            <div>{numeral(additionals[key].Price).format('$0.00')}</div>
        </div>
    });

    function handleAddedOption(item, index, IsMasterOptionSet){ 
        setAdditionals({
            ...additionals,
            [index]: item
        })
    }
    function handleAddToBasket(){ 
        if(mains.length === 0) {
            setError(true)
            setTimeout(()=>{setError(false)},1000)
        }
        let newAdditionals = [];
        for(var key in additionals) { 
            newAdditionals.push(additionals[key])
        }  
        addItemToBasket(mains, newAdditionals);
        history.push("/");
    }

    useEffect(()=>{
        let total = 0;
        for(var key in additionals) {
            total+= additionals[key].Price
        }
        setTotal(total);
        //validation
    },[additionals])

    useEffect(()=>{
        if(total == 0){return setValidOrder(false)}
        setValidOrder(true)
    },[total])

    if(MenuItem.MenuItemOptionSets.length === 0){
        let itemNoOptionSets = {
            ...MenuItem,
            Quantity: 1
        }
        addItemToBasket([itemNoOptionSets]);
        // return <div onClick={history.goBack}>Straight to basket: back</div>
        return <Redirect to="/"/>
    }
    else {
        return(
            <div>     
            <div className="btn-cont">
                <button onClick={history.goBack} className="btn"><span>&lt;</span> <span>Back</span></button>
            </div>
            <div className="main-cont">
                <div className="img-cont">
                    <img src={MenuItem.ImageUrl} alt=""/>
                    <div className="desc">
                        <h3>{MenuItem.Name}</h3>
                        <div>{MenuItem.Description}</div>
                    </div>
                </div>         
            </div>
            <div className="total-cont">
                <div className="total-sec">
                    <div>Total</div>
                    <div>{numeral(total).format('$0.00')}</div>
                </div>
                {mapAdditionals}
            </div>
            <div className="btns-cont">
                {error && <h1 style={{background: 'red'}}>Invalid</h1>}
                <button type="submit" className="btn" disabled={!isValidOrder} onClick={handleAddToBasket}>Add to Basket</button>   
            </div>

                {MenuItem.MenuItemOptionSets.map((optSet,i)=>{
                        return <MenuItemOptionSet optSet={optSet} handleAddedOption={handleAddedOption} index={i} key={i}/>
                })} 
           
            </div>
                )
        }
}

const mapStateToProps = (state, ownProps)=>({
    MenuItem: getMenuItem(state.menu.MenuSections, ownProps.match.params.MenuSectionId, ownProps.match.params.MenuItemId)
})

const mapDispatchToProps = (dispatch)=>({
    addItemToBasket: (mains, additionals)=>(dispatch(addItemToBasket(mains, additionals)))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemSelected);

