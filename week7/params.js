let person = {name:'jim'};

function rename(per){
    let newPerson = per;

    let new2Person = newPerson;

    new2Person.name = 'naylor';

    console.log(newPerson);
    console.log(new2Person);
}


rename(person);
console.log(person)


function rename2(){
    let newPerson = {name:'jim'};

    let new2Person = newPerson;

    new2Person.name = 'naylor';

    console.log(newPerson);
    console.log(new2Person);
}

rename2();
