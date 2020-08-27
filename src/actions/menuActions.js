import {setFetchStatus} from './fetchStatusActions';

export const setMenu = (data)=>({
    type: 'SET_MENU',
    data
})

export const startGetMenu = ()=>{
    return (dispatch)=>{
        dispatch(setFetchStatus("fetching"));
        fetch('https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json')
        .then(r=> r.json())
        .then(r=>{
            dispatch(setMenu(r));
            dispatch(setFetchStatus("success"));
        })
        .catch(e=>{
            dispatch(setFetchStatus("error"));
        })
    }
}