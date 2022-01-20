let restaurentData = {
    name: 'The Night Jar',
    totalCapacity: 75,
    onBoardedGuests: 0,
    checkSeatAvailability: function(numberOfMembers) {
        let seatsAvailable = this.totalCapacity - this.onBoardedGuests;
        return  numberOfMembers <= seatsAvailable; 
    } 
}

let addGuests = function(numberOfMembers) {
    restaurentData.onBoardedGuests += numberOfMembers;
}

let removeGuests = function(numberOfMembers) {
    restaurentData.onBoardedGuests -= numberOfMembers;
}

let getRestaurentSummary = function(restaurentName) {
    return restaurentData;
} 

let checkAvailability = function(enterSeats) {
    if(restaurentData.checkSeatAvailability(enterSeats) == true) {
        console.log('Yes you can book for seats');
    } else {
        console.log('There is no seat vacant');
    }
}

console.log(getRestaurentSummary());
addGuests(45);
console.log(getRestaurentSummary());
addGuests(5);
console.log(getRestaurentSummary());
removeGuests(10);
console.log(getRestaurentSummary());
// addGuests(54);
console.log(getRestaurentSummary());

checkAvailability(5);