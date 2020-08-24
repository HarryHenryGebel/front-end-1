const hostState = {
    userid: '',
    username: '',
    primaryemail: '',
    imageurl: null,
    potlucks: [
        {
            potluckid:'',
            eventname: '',
            date: '',
            time: '',
            location: '',
            description:'',
            foods: [],
            guests: []
        }
    ]
}

function hostReducer(state = hostState, action){
switch(action){
    default: return state
}

}

export default hostReducer