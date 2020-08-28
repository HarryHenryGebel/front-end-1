const useFinder = (callback) => {
  let potluck = {};
  let specificId = "";
  let claimedFoods = [];
  let unclaimedFoods = [];
  let guestList = [];
  let unresponsive = [];
  let obligation = [];

  const potluckFinder = (potlucks, id) => {
    const potlist = potlucks.filter((potluck) => potluck.potluckid === id);
    potluck = potlist[0];
  };

  const guestIdFinder = (guestemail, dinner = potluck) => {
    for (let i = 0; i < dinner.guests.length; i++) {
      if (dinner.guests[i].primaryEmail === guestemail) {
        specificId = dinner.guests[i].guestId;
      }
    }
  };

  const foodSorter = (dinner = potluck) => {
    for (let i = 0; i < dinner.foods.length; i++) {
      if (dinner.foods[i].isclaimed === true) {
        claimedFoods.push(dinner.foods[i]);
      } else {
        unclaimedFoods.push(dinner.foods[i]);
      }
    }
  };

  const guestSorter = (dinner = potluck) => {
    for (let i = 0; i < dinner.guests.length; i++) {
      if (dinner.guests[i].isAttending === true) {
        guestList.push(dinner.guests[i]);
      } else {
        unresponsive.push(dinner.guests[i]);
      }
    }
  };

  const obligationFinder = (primaryEmail) => {
    const myGuestProfile = guestList.filter(
      (guest) => guest.primaryEmail === primaryEmail
    );

    obligation = myGuestProfile.isBringing;
  };

  return {
    potluck,
    specificId,
    claimedFoods,
    unclaimedFoods,
    guestList,
    unresponsive,
    obligation,
    potluckFinder,
    guestIdFinder,
    foodSorter,
    guestSorter,
    obligationFinder,
  };
};

export default useFinder;
