const hostState = {
    userid: '1',
    username: 'avadinner',
    primaryemail: 'avawingfield@email.com',
    imageurl: 'src/assets/defaultimage.webp',
    potlucks: [
        {
            potluckid:'3',
            eventname: `Dinner at Ava's`,
            date: '22 March 2021',
            time: '12:00PM',
            location: `George's Deli`,
            description:`Turn left at the pointy hats!`,
            foods: [],
            guests: []
        },
        {
            potluckid:'5',
            eventname: `Dinner at Not Ava's`,
            date: '22 March 2021',
            time: '12:00PM',
            location: `George's Deli`,
            description:`Turn left at the pointy hats!`,
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