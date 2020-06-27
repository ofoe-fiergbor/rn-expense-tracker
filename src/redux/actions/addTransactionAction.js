export const addExpTransaction=(values)=>{
    console.log(values)
    return{
        type:'GET_ALL_EXP_VALUES',
        payload: values,
        
    }
}
export const addIncTransaction=(values)=>{
    console.log(values)
    return{
        type:'GET_ALL_INC_VALUES',
        payload: values,
        
    }
}