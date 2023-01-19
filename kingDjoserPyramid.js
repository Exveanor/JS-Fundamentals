function pyramid (base, increment) {
    let currentBase = base;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 0;

    for (currentBase; currentBase > 0; currentBase -= 2) {
        steps++;
        let volume = currentBase * currentBase;
        let bulk = (currentBase - 2) * (currentBase - 2);
        let outerlayer = volume - bulk;

        if(currentBase <=2) {
            gold = volume * increment;
            break;
        } else if (steps % 5 === 0) {
            lapisLazuli += outerlayer * increment;
            stone += bulk * increment;
        } else {
            marble += outerlayer * increment;
            stone += bulk * increment;
        }
    }
    let height = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
pyramid(23, 0.5)