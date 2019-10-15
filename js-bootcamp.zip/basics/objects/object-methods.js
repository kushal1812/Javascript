/*A Method is a function property in object*/

let restaurant = {
    name:'paradise',
    guestCapacity:75,
    guestCount:0,
    checkAvailability:function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize<=seatsLeft;
    },
    seatParty:function(guestcount){
        this.guestCount=this.guestCount + guestcount;
    },
    removeParty:function(removeguests){
            this.guestCount = this.guestCount - removeguests;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));

