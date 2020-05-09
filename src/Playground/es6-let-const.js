var nameVar = 'laura';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('name', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping

const fullName = 'Laura Barragan';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
