import constants from "./constants.json";

export function runBattle(attack, defence) {
    console.log("runBattle:", attack, defence);

    // Attack roll
    const attackResultDice = rollDice(attack, 6);
    const attackResult = examineDice(attackResultDice, constants.ATTACK_HITS);
    console.log("Attack");
    console.log(attackResultDice);
    console.log(attackResult);

    // Defence roll
    const defenceResultDice = rollDice(defence, 6);
    const defenceResult = examineDice(defenceResultDice, constants.DEFENCE_HITS);
    console.log("Defence");
    console.log(defenceResultDice);
    console.log(defenceResult);

    const damage = attackResult - defenceResult;

    console.log("DAMAGE:", damage < 0 ? 0 : damage);

    return damage < 0 ? 0 : damage;
}

function rollDice(amount, sides) {
    const results = [];
    for (let i = 0; i < amount; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }

    return results;
}

function examineDice(resultDice, hitTargets) {
    let hits = 0;
    resultDice.forEach(die => {
        if (hitTargets.includes(die)) {
            hits++;
        }
    })

    return hits;
}