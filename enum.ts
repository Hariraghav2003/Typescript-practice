/* enum type is used to store the universal value unchangeable ones to the computer once enum values are declared it can't be changed and we can access those values*/
enum direction{
    North="North 130",
    South="South 130",
    East="East 130",
    West="West 130"
}

function getdirection(d){
    console.log(`Moving${d}`);
}

getdirection(direction.East);