// Code your solution in this file!
const distanceFromHqInBlocks = function (someValue) {
    if (someValue > 42 ){
        return someValue - 42

    } else if (someValue < 42 ){
        return 42 - someValue

    }
}

function distanceFromHqInFeet(x) {
    let difference=distanceFromHqInBlocks(x)
    return difference*264;
}

function distanceTravelledInFeet(x, y) {
    if (y < x) {
        return (x-y)*264
    } else {
        let difference = y - x 
        return difference * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet (start, destination) 
    if (distance <= 400){
        return 0
    } else if (distance >400 && distance < 2000)
        return 0.02*(distance-400)
      else if (distance > 2000 && distance <= 2500)
        return 25
      else if (distance > 2500)
        return "cannot travel that far"
}
