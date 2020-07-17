class Pancake {
    constructor() {
        this.friedSides = 0;
    }

    fryPancake() {
        this.friedSides++;
    }
}

function pancakeToCook(pancakes) {
    let pancakesToCook = pancakes.filter(pancake => pancake.friedSides === 0);
    if (!pancakesToCook.length)
        pancakesToCook = pancakes.filter(pancake => pancake.friedSides === 1);
    return pancakesToCook[0];
}

(function() {
    const pancakes = [new Pancake(), new Pancake(), new Pancake()];
    let cookedPancakes = 0;
    let iterations = 0;
    let cookingPancake = null;

    while (cookedPancakes !== pancakes.length) {
        cookingPancake = pancakeToCook(pancakes);
        if (cookingPancake) {
            cookingPancake.fryPancake();
            if (cookingPancake.friedSides === 2)
                cookedPancakes++;
        }
        cookingPancake = pancakeToCook(pancakes);
        if (cookingPancake) {
            cookingPancake.fryPancake();
            if (cookingPancake.friedSides === 2)
                cookedPancakes++;
        }
        iterations++;
    }
    console.log('Iterations number: ', iterations);
})();