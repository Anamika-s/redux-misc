const initialState = 100;

const amountReducer = (state = initialState, action)=>
{
    console.log(state)
    switch(action.type)
    {
        
        case 'deposit':
            { 
                return state + action.payload;
             }
           case 'withdraw':
            {
                return state - action.payload;
            }
            default :
             return 100;

    }
}
export default amountReducer;
