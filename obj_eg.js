/*
//exercise-1
address={
    street:'rlycolony',
    city:'vizag',
    zipcode:530016
};
showAddress(address);
function showAddress(address){
    for(let i in address)
         console.log(i,address[i]);
}
exercise-2
//factory notation

function createAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    };
}
d=createAddress('railwaynewcolony','visakhapatnam',53005);
console.log(d);

//constructor noation

function CreateAddress(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}
d=new CreateAddress('railwaynewcolony','visakhapatnam',53005);
console.log(d['street']);
*/