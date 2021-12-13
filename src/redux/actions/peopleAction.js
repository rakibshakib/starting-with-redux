export function addPeople(payload){
    return {
        type: "ADD_PEOPLE_TO_LIST",
        payload
    }
}
export function removePeople(payload){
    return{
        type:"REMOVE_PEOPLE_FROM_LIST",
        payload
    }
}