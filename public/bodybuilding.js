'use strict';

const First = document.getElementById("First");
const BodyBuildingDiv = document.getElementById("Bodybuilding");
const suggestionDiv = document.getElementById("WorkoutSpecification");
const card = document.getElementById("CardioSpecification");
var status = "PPL";
BodyBuildingDiv.style.display = "none";
suggestionDiv.style.display = "none";
card.style.display = "none";

document.getElementById("bodyBtn").addEventListener("click", () => {

    var fadeOut = First.animate({
        opacity: [1, 0]
    }, 1000);

    fadeOut.onfinish = function () {
        First.style.display = "none";
        BodyBuildingDiv.style.display = "block";

        BodyBuildingDiv.animate({
            opacity: [0, 1]
        }, 1000);
        BodyBuildingDiv.style.opacity = 1;
    }

});
document.getElementById("pplExercise").addEventListener("click", () => {
    var fadeOut = BodyBuildingDiv.animate({
        opacity: [1, 0]
    }, 1000);

    status = "PPL";
    fadeOut.onfinish = function () {
        BodyBuildingDiv.style.display = "none";
        suggestionDiv.style.display = "block";

        suggestionDiv.animate({
            opacity: [0, 1]
        }, 1000);
        suggestionDiv.style.opacity = 1;
    }

});

document.getElementById("generate").addEventListener("click", () => {
    sortPPL();
    document.getElementById("generate").style.display = "none";
    var rButtons = document.getElementsByClassName("rbutton");
    for (var index = 0; index < 7; index++) {
        console.log(index);

        rButtons[index].style.display = "none";
    }

});

document.getElementById("Anterior").addEventListener("click", () => {
    var fadeOut = BodyBuildingDiv.animate({
        opacity: [1, 0]
    }, 1000);

    status = "anterior";
    fadeOut.onfinish = function () {
        BodyBuildingDiv.style.display = "none";
        suggestionDiv.style.display = "block";

        suggestionDiv.animate({
            opacity: [0, 1]
        }, 1000);
        suggestionDiv.style.opacity = 1;
    }
    sortAnterior();
});

document.getElementById("RoadHeavy").addEventListener("click", () => {
    c = 1;
    init();
    card.style.display = "block";
    card.animate({
        opacity: [0, 1]
    }, 1000);

    card.style.opacity = 1;
});

class chest {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class back {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class shoulder {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class bicep {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class tricep {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class quadricep {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
class hamstring {
    constructor(name, variation) {
        this.name = name;
        this.variation = variation;
    }
}
var chest1 = new chest(" Bench Press", ["Flat", "Incline", "Decline"]);
var chest2 = new chest(" Dumbell Press", ["Flat", "Incline", "Decline"]);
var chest3 = new chest(" Chest Flyes", ["Standard", "Incline", "Decline"]);

var ChestArr = ["Flat Bench Press", "Incline Dumbell Press", "Decline Chest Flyes"];

var back1 = new back(" Pullup", ["Narrow", "Standard", "Wide"]);
var back2 = new back("Lat Pulldown", []);
var back3 = new back(" Row", ["Bent-Over Barbell", "Seated Cable", "Machine"]);
var back4 = new back("Deadlift", []);

var BackArr = ["Standard Pullup", "Seated Cable Row", "Lat Pulldown"];

var shoulder1 = new shoulder(" Overhead Press", ["Standing", "Seated"]);
var shoulder2 = new shoulder(" Dumbell Raises", ["Lateral", "Front"]);
var shoulder3 = new shoulder(" Seated Rear Delt Raise", ["Bent-Over", "Incline"]);

var ShoulderArr = ["Standing Overhead Press", "Lateral Dumbell Raises", "Bent-Over Seated Rear Delt Raises"]

var bicep1 = new bicep(" Seated Curls", ["Incline", "Machine", "Barebell"]);
var bicep2 = new bicep(" Standing Curls", ["Hammer", "EZ-Bar", "Barebell"]);

var BicepArr = ["Incline Seated Curls", "Hammer Standing Curls"];

var tricep1 = new tricep("Dips", []);
var tricep2 = new tricep(" Skull Crashers", ["Dumbell", "Barbell"]);
var tricep3 = new tricep(" Tricep Cable Pulldown", ["Single Arm", "Both Arms"]);

var TricepArr = ["Dips", "Dumbell Skull Crushers"]

var quadricep1 = new quadricep(" Squat", ["Back", "Front", "Dumbell"]);
var quadricep2 = new quadricep(" Leg Press", ["Single Leg", "Both Legs"]);
var quadricep3 = new quadricep("Leg Extension", []);

var QuadricepArr = ["Back Squat", "Single Leg Leg Press", "Leg Extension"];

var hamstring1 = new hamstring("Romanian Deadlift", []);
var hamstring2 = new hamstring(" Hamstring Curls", ["Seated", "Lying"]);

var HamstringArr = ["Romanian Deadlift", "Lying Hamstring Curls"];

var MachCardio = ["Treadmill", "Stairmaster", "Elyptical"];
var RoadCardio = ["Track Jogging", "Jump Rope", "Elyptical"];
var c = 0;
function init() {
    var index = 0;
    var chest = document.getElementById("chest").childNodes;
    var back = document.getElementById("back").childNodes;
    var bicep = document.getElementById("bicep").childNodes;
    var tricep = document.getElementById("tricep").childNodes;
    var shoulder = document.getElementById("shoulder").childNodes;
    var quadricep = document.getElementById("quadricep").childNodes;
    var hamstring = document.getElementById("hamstring").childNodes;
    var cardio = document.getElementById("Cardio").childNodes;
    var j = 3;
    for (var i = 0; i < 3; i++) {
        chest[j].textContent = ChestArr[i];
        back[j].textContent = BackArr[i];
        shoulder[j].textContent = ShoulderArr[i];
        quadricep[j].textContent = QuadricepArr[i];
        if (c == 0) {
            cardio[j].textContent = MachCardio[i];
        } else {
            cardio[j].textContent = RoadCardio[i];
        }
        if (i != 2) {
            bicep[j].textContent = BicepArr[i];
            tricep[j].textContent = TricepArr[i];
            hamstring[j].textContent = HamstringArr[i];
        }
        j += 2;
    }
}


function sortPPL() {
    day1.appendChild(document.getElementById("chestWrapper"));
    day1.appendChild(document.getElementById("tricepWrapper"));
    day1.appendChild(document.getElementById("shoulderWrapper"));

    day2.appendChild(document.getElementById("backWrapper"));
    day2.appendChild(document.getElementById("bicepWrapper"));

    day3.appendChild(document.getElementById("quadricepWrapper"));
    day3.appendChild(document.getElementById("hamstringWrapper"));
}

function sortAnterior() {
    day1.appendChild(document.getElementById("chestWrapper"));
    day1.appendChild(document.getElementById("bicepWrapper"));

    day2.appendChild(document.getElementById("tricepWrapper"));
    day2.appendChild(document.getElementById("backWrapper"));

    day3.appendChild(document.getElementById("shoulderWrapper"));
    day3.appendChild(document.getElementById("quadricepWrapper"));
    day3.appendChild(document.getElementById("hamstringWrapper"));
}



document.getElementById("chest1").addEventListener("click", () => {
    ChestArr.splice(0, 1);
    init();
});
document.getElementById("chest2").addEventListener("click", () => {
    ChestArr.splice(1, 1);
    init();
});
document.getElementById("chest3").addEventListener("click", () => {
    ChestArr.splice(2, 1);
    init();
});
document.getElementById("back1").addEventListener("click", () => {
    BackArr.splice(0, 1);
    init();
});

document.getElementById("back2").addEventListener("click", () => {
    BackArr.splice(1, 1);
    init();
});
document.getElementById("back3").addEventListener("click", () => {
    BackArr.splice(2, 1);
    init();
});
document.getElementById("shoulder1").addEventListener("click", () => {
    ShoulderArr.splice(0, 1);
    init();
});
document.getElementById("shoulder2").addEventListener("click", () => {
    ShoulderArr.splice(1, 1);
    init();
});
document.getElementById("shoulder3").addEventListener("click", () => {
    ShoulderArr.splice(2, 1);
    init();
});
document.getElementById("quad1").addEventListener("click", () => {
    QuadricepArr.splice(0, 1);
    init();
});
document.getElementById("quad2").addEventListener("click", () => {
    QuadricepArr.splice(1, 1);
    init();
});
document.getElementById("quad3").addEventListener("click", () => {
    QuadricepArr.splice(2, 1);
    init();
});
document.getElementById("bicep1").addEventListener("click", () => {
    BicepArr.splice(0, 1);
    init();
});
document.getElementById("bicep2").addEventListener("click", () => {
    BicepArr.splice(1, 1);
    init();
});
document.getElementById("tricep1").addEventListener("click", () => {
    TricepArr.splice(0, 1);
    init();
});
document.getElementById("tricep2").addEventListener("click", () => {
    TricepArr.splice(1, 1);
    init();
});
document.getElementById("ham1").addEventListener("click", () => {
    HamstringArr.splice(0, 1);
    init();
});
document.getElementById("ham2").addEventListener("click", () => {
    HamstringArr.splice(1, 1);
    init();
});







