import { useState } from "react";

const useFinder = (callback) => {
  const [potluck, setPotluck] = useState();
  const [specificId, setSpecificId] = useState();
  const [claimedFoods, setClaimedFoods] = useState();
  const [unclaimedFoods, setUnclaimedFoods] = useState();
  const [guestList, setGuestList] = useState();
  const [unresponsive, setUnresponsive] = useState();

  const potluckFinder = (potlucks, id) => {
    const potlist = potlucks.filter((potluck) => potluck.potluckid === id);
    setPotluck(potlist);
  };

  const guestIdFinder = (primaryemail) => {
    const id = potluck.guests.filter(
      (guest) => guest.primaryemail === primaryemail
    );
    setSpecificId(id);
  };

  const foodSorter = () => {
    const newClaims = potluck.foods.filter((food) => food.isclaimed === true);
    const oldClaims = potluck.foods.filter((food) => food.isclaimed === false);
    setUnclaimedFoods(oldClaims);
    setClaimedFoods(newClaims);
  };

  return {};
};
