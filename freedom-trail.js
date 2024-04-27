var findRotateSteps = function (ring, key) {
    let currentPosition = 0;

    let steps = 0;

    for (let i = 0; i < key.length; i++) {
         let difference = (key[i].charCodeAt(0) - ring[currentPosition].charCodeAt(0) + 26) % 26;

         steps += Math.min(difference, 26 - difference);

        steps++;

        currentPosition += difference;
    }

     return steps;
};
