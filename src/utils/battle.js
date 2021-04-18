import constants from '../data/constants.json'

export function runBattle(attack, defence) {

    // Attack roll
    const attackRoll = rollDice(attack, 6);

    // Defence roll
    const defenceRoll = rollDice(defence, 6);

    return {attackRoll, defenceRoll};
}

function rollDice(amount, sides) {
    const results = [];
    for (let i = 0; i < amount; i++) {
        results.push(Math.floor(Math.random() * sides) + 1);
    }

    return results;
}

export function findDiceHits(resultDice, hitTargets) {
    let hits = 0;
    resultDice?.forEach(die => {
        if (hitTargets.includes(die)) {
            hits++;
        }
    });

    return hits;
}

export function calcDamage(attackRoll, defenceRoll) {
    const attackHits = findDiceHits(attackRoll, constants.ATTACK_HITS);
    const defenceHits = findDiceHits(defenceRoll, constants.DEFENCE_HITS);
    const damage = attackHits - defenceHits;

    return damage;
}