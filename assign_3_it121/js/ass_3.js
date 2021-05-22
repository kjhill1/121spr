function Item(blend, inventory, ordered) {
    this.blend = blend;
    this.inventory = inventory;
    this.ordered = ordered; 


    // property of item object above 
    this.remaining = function() {
        return this.inventory - this.ordered;
    };
}

var soap1 = new Item("Lemongrass", 25, 14);
var soap2 = new Item("Aloe Vera", 20, 4);

var el_1 = document.getElementById("soap1");
el_1.textContent = soap1.blend + " " + soap1.remaining();

var el_2 = document.getElementById("soap2")
el_2.textContent = soap2.blend + " " + soap2.remaining();



