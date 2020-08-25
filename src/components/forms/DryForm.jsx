 import {useState} from 'react'
 
 const locationForm = {
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  };

 const guestForm = {
    guestid: "",
    fname: "",
    lname: "",
    primaryemail: "",
  };

 const foodForm = {
    foodid: "",
    foodname: "",
    description: "",
  };

  export const [food, setFood] = useState(foodForm);
  export const [concatLocation, setConcatLocation] = useState(locationForm);
  export const [guest, setGuests] = useState(guestForm);

  const initialForm = {
    potluckid: "",
    eventname: ``,
    date: "",
    time: "",
    location: ``,
    description: ``,
    foods: [],
    guests: [],
  };
  export const [formValues, setFormValues] = useState(initialForm);

  export const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  export const guestChangeHandler = (e) => {
    setGuests({ ...guest, [e.target.name]: e.target.value });
  };

  export const foodChangeHandler = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  export const changeLocationHandler = (e) => {
    setConcatLocation({ ...concatLocation, [e.target.name]: e.target.value });
    setFormValues({...formValues, location: `${concatLocation.address} ${concatLocation.address2} ${concatLocation.city}, ${concatLocation.state} ${concatLocation.zip}`})
  };

  export const addGuest = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, guests: [...formValues.guests, guest] });
    setGuests(guestForm);
  };

  export const addFood = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, foods: [...formValues.foods, food] });
    setFood(foodForm) 
  };