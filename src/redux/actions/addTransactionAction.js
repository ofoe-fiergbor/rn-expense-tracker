export const addTransaction=(transaction)=>{
    console.log(transaction)
    return{
        type:'ADD_TRANSACTION',
        payload: transaction,
        
    }
}