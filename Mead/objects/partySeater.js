let restaurant = {
    name: "G Club",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    addGuest: function(partySize) {
        this.guestCount += partySize;
    },
    removeGuest: function(partySize) {
        this.guestCount -= partySize;
    }
}

console.log(restaurant.checkAvailability(34));
restaurant.addGuest(23);
console.log(restaurant.checkAvailability(34));
restaurant.addGuest(23);
console.log(restaurant.checkAvailability(34));