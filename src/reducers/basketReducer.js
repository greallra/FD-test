
const defState = [
        {
        mains: [],
        additionals: []
        }
]

const realState = [
        {
        mains: [{
            MenuItemId : '123',
            Name: "Salad",
            Price: '4.50',
            Quantity: 2
            }],
        additionals: [{
            MenuItemOptionSetItemId: 15749311,
            Name: "Small",
            Price: 3,
            }]
        }
]

const basketReducer = (state = defState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            let newState;
            if(!action.additionals) {
                newState = [
                    {...state[0],
                    mains: [...state[0].mains, ...action.mains]
                    }
                ]
            }else {
                console.log("adds");
                newState = [
                    {...state[0],
                    mains: [...state[0].mains, ...action.mains],
                    additionals: [...state[0].additionals, ...action.additionals]
                    }
                ]
            }
        
        return newState;
        case 'CLEAR_BASKET':
        return defState;
        default:
          return state
    }
}
  
export default basketReducer;
