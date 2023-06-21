class Contact{
    id;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...parms){
        this.id = parms[0];
        this.firstName = parms[1];
        this.lastName = parms[2];
        this.address = parms[3];
        this.city = parms[4];
        this.state = parms[5];
        this.zip = parms[6];
        this.phoneNumber = parms[7];
        this.email = parms[8];
    }

    get id() { return this._id; }
    set id(value){
        this._id = value;
    }
    get firstName() { return this._firstName; }
    set firstName(firstName){
        //let first = RegExp('^[A-Z][a-z]{2,}$');
        //if (first.test(firstName))
        this._firstName = firstName;
        //else throw "First name is not vaild";
    }
    get lastName() { return this._lastName; }
    set lastName(lastName){
        //let first = RegExp('^[A-Z][a-z]{2,}$');
        //if (first.test(firstName))
        this._lastName = lastName;
        //else throw "First name is not vaild";
    }
    get address() { return this._address; }
    set address(address){
        this._address = address;
    }
    get city() { return this._city; }
    set city(city){
        this._city = city;
    }
    get state() { return this._state; }
    set state(state){
        this._state = state;
    }
    get zip() { return this._zip; }
    set zip(zip){
        this._zip = zip;
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }
    get email() { return this._email; }
    set email(email){
        this._email = email;
    }

    toString(){
        return "Id: "+this.id+", FirstName: "+this.firstName+", LastName: "+this.lastName+", Address: "+this.address
        +", City: "+this.city+", State: "+this.state+", ZIP: "+this.zip+", PhoneNumber: "+this.phoneNumber
        +",Email: "+this.email;
    }
}
let contact = new Contact(1,"Soma","Shekar","Mittur","Kolar","Karnataka","563123","9087123456","soma@email.com");
console.log(contact.toString());