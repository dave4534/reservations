var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

var name = prompt('Please enter the name for your reservation');

var toTitleCase = function(name){
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
};
name = toTitleCase(name);

var claimReservation = function() {

  if (reservations[name] && reservations[name].claimed === false){
    alert("Welcome " + name);
  } else if (reservations[name] && reservations[name].claimed){
    alert("You are already checked in!");
  } else {
    reservations[name] = name;
    reservations[name].claimed = true;
    alert("There is nothing under that name, but a new reservation has been added!");
  }
};

claimReservation();