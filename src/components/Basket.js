import React, { useState, useEffect } from 'react';
import {FiShoppingCart} from 'react-icons/fi';
import {MdAddCircleOutline, MdRemoveCircleOutline} from 'react-icons/md';
import { connect } from 'react-redux';
import {getBasketTotal} from '../selectors/basketSelectors';
import {itemIncrement, clearBasket, startSubmitOrder} from '../actions/basketActions';
import numeral from 'numeral';
import numeralConfig from '../utils/numeralConfig';
numeral.register('locale', 'fr', numeralConfig);
numeral.locale('fr');

const Basket = ({basketItems, total, startSubmitOrder, clearBasket})=>{
    const [isValidOrder, setIsValidOrder] = useState(false)
    
    useEffect(()=>{
        if(basketItems[0].mains.length > 0){setIsValidOrder(true)}
        else{
            setIsValidOrder(false)
        }
    },[basketItems])

    function handleSubmitOrder() {
        if(isValidOrder) {
            startSubmitOrder()
        }
    }

    return (
    <div className="basket-cont">
        <div className="total-section">
            <div><FiShoppingCart /></div>
            {/* <div>Total: {numeral(total || 22).format('$0.00')}</div> */}
            <div>Total: {numeral(total).format('$0.00')}</div>
        </div>
        {/* If Basket is Empty */}
        {!basketItems[0].mains.length > 0 ? <div className="basket-empty-cont" style={{padding: '40px'}}>
             <FiShoppingCart  style={{marginRight: '5px', fontSize: '35px'}}/>
            <div>Basket Empty <span style={{fontSize:'20px'}}>&#128532;</span></div>
            
        </div>:
        basketItems.map((basketItem, i)=>{
            return(
            <div className="orders-section" key={i}>
                <div className="basket_header1">Main's</div>
                {/* map mains */}
                {basketItem.mains.map((main)=>{
                    return <div className="mains-section" key={main.MenuItemId}>
                        <div className="orders-name">  
                            <div>{main.Quantity}x {main.Name}</div>
                        </div>
                        <div className="orders-quantity-price">
                            <div>{numeral(main.Price).format('$0.00')}</div> 
                            <div>
                                <MdRemoveCircleOutline /><span>{main.Quantity}</span><MdAddCircleOutline/>
                            </div>
                        </div>
                </div>
                })}
                <div className="basket_header1">Additional's</div>
                {/* map addtionals */}
                {basketItem.additionals.map((addit)=>{
                    return (
                    <div className="additionals-section" key={addit.MenuItemOptionSetItemId}> 
                        <div className="orders-name">  
                            <div>{addit.Name}</div>
                        </div>
                        <div className="orders-quantity-price">
                            <div>{numeral(addit.Price).format('$0.00')}</div>
                            <div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>)
        })  
        }
        <div className={!isValidOrder ? 'hide' : 'submit-order-section'}>
            <button className='btn third' onClick={handleSubmitOrder}>Submit Order</button>
            <button type="button" onClick={clearBasket} className='btn third'>Clear Basket</button>
        </div>
    </div>
    )
}

const mapStateToProps = (state)=>({
    basketItems: state.basket,
    total: getBasketTotal(state.basket)
})
const mapDispatchToProps = (dispatch)=>({
    itemIncrement: (item)=>(dispatch(itemIncrement(item))),
    clearBasket: ()=>{dispatch(clearBasket())},
    startSubmitOrder: (order)=>{dispatch(startSubmitOrder(order))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
