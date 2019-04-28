export default (state=null, action) => {
    if (action.error) return state;
    switch (action.type){
        case 'GET_EVENTS':
            return action.eventbriteData;
        default:
            return state;
    }
}