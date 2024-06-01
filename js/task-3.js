class StringBuilder {
    #value;
  constructor (value) {  this.#value = value;}
   get value() { return  this.#value; }
   set value(str) { this.#value = str}

     getValue() {
       return this.value;
     }
     padEnd(str) {
       this.value = `${this.value}${str}` ;
     }
     padStart(str) {
       this.value = `${str}${this.value}` ;
     }
     padBoth(str) {
       this.value = `${str}${this.value}${str}` ;
     }
   }

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="