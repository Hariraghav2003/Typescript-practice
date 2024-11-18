/* enum type is used to store the universal value unchangeable ones to the computer once enum values are declared it can't be changed and we can access those values*/
var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["South"] = 1] = "South";
    direction[direction["East"] = 2] = "East";
    direction[direction["West"] = 3] = "West";
})(direction || (direction = {}));
function getdirection(d) {
    console.log("Moving".concat(d));
}
getdirection(direction.East);
