import { useState } from "react";

const useFinder = (callback) => {
  let potluck = {}
  let specificId = ''
  let claimedFoods = []
  let unclaimedFoods = []
  let guestList = []
  let unresponsive = []
  let obligation = []

  const potluckFinder = (potlucks, id) => {
    const potlist = potlucks.filter((potluck) => potluck.potluckid === id);
    potluck = potlist[0]
  };

  const guestIdFinder = (guestemail) => {
    const id = potluck.guests.filter(
      (guest) => guest.primaryemail === guestemail
    );
    specificId = id[0].guestid
  };

  const foodSorter = () => {
      for (let i = 0; i<potluck.foods.length; i++){
        if (potluck.foods[i].isclaimed === true){
            claimedFoods.push(potluck.foods[i])
        } else {
            unclaimedFoods.push(potluck.foods[i])
        }
      }
  };

  const guestSorter = () => {
      for (let i = 0; i< potluck.guests.length; i++){
          if(potluck.guests[i].isattending === true){
              guestList.push(potluck.guests[i])
          }else{
              unresponsive.push(potluck.guests[i])
          }
      }
    }
    

  const obligationFinder = (primaryemail) => {
    const myGuestProfile = guestList.filter(
      (guest) => guest.primaryemail === primaryemail
    );

    obligation = myGuestProfile.isbringing

  }

  return {potluck, specificId, claimedFoods, unclaimedFoods, guestList, unresponsive, obligation, potluckFinder, guestIdFinder, foodSorter, guestSorter, obligationFinder};
};

export default useFinder