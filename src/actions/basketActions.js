export const addItemToBasket = (mains, additionals)=>{
    return {
        type: 'ADD_ITEM',
        mains,
        additionals
    }
}
export const clearBasket = ()=>(
    {
        type: 'CLEAR_BASKET'
    }
)

export const startSubmitOrder = (order)=>{
    return (dispatch)=>{
        let fakePostToServer = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve({success: true})
            },1000)
        })
        fakePostToServer
        .then((res)=>{
            alert("send order to server");
            //update store
        })
        .catch(()=>{
            console.log("handle error");
        })
    }

}