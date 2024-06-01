class Storage {
    #items;
     constructor (items) {  this.#items = items;}
     get items() { return  this.#items; }
     set items(newItem) { this.#items = newItem}

     getItems() { 
     return  this.items;
    }
     addItem(newItem) {
        this.items.push(newItem);
   }
     removeItem(itemToRemove) {
     this.items = this.items.filter((strin) => {return strin != itemToRemove});
   }
   }
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]