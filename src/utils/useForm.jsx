import { useState } from "react";

const useForm = (callback) => {
  const locationForm = {
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  };

  const guestForm = {
    guestId: "",
    firstName: "",
    lastName: "",
    primaryEmail: "",
  };

  const foodForm = {
    foodId: "",
    foodName: "",
    description: "",
  };

  const [food, setFood] = useState(foodForm);
  const [concatLocation, setConcatLocation] = useState(locationForm);
  const [guest, setGuests] = useState(guestForm);

  const initialForm = {
    isHost: true,
    potluckId: "",
    eventName: "",
    date: "",
    time: "",
    location: "",
    description: "",
    foods: [],
    guests: [],
  };
  const [formValues, setFormValues] = useState(initialForm);

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const guestChangeHandler = (e) => {
    setGuests({ ...guest, [e.target.name]: e.target.value });
  };

  const foodChangeHandler = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const changeLocationHandler = (e) => {
    setConcatLocation({ ...concatLocation, [e.target.name]: e.target.value });
    setFormValues({
      ...formValues,
      location: `${concatLocation.address} ${concatLocation.address2} ${concatLocation.city}, ${concatLocation.state} ${concatLocation.zip}`,
    });
  };

  const addGuest = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, guests: [...formValues.guests, guest] });
    setGuests(guestForm);
  };

  const addFood = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, foods: [...formValues.foods, food] });
    setFood(foodForm);
  };

  const foodRemover = (food) => {
    const newFoods = formValues.foods.filter((item) => item.foodName !== food);
    setFormValues({ ...formValues, foods: newFoods });
  };

  const guestRemover = (guest) => {
    const newGuests = formValues.guests.filter(
      (item) => item.firstName !== guest
    );
    setFormValues({ ...formValues, guests: newGuests });
  };

  return {
    food,
    concatLocation,
    guest,
    formValues,
    changeHandler,
    changeLocationHandler,
    guestChangeHandler,
    foodChangeHandler,
    addGuest,
    addFood,
    foodRemover,
    guestRemover,
  };
};

export default useForm;
