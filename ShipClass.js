import Object from "./ObjectClass"

class Ship extends Object {
    #atk
    #def
    #range
    #cost
    
    constructor(length, width, attack, defense, range, movement, health, direction, cost) {
        super(length, width, movement, health, direction)
        this.#atk = attack
        this.#def = defense
        this.#range = range
        this.#cost = cost
    }

    getAttack() {
        return this.#atk
    }

    setAttack(attack) {
        this.#atk = attack
    }

    getDefense() {
        return this.#def
    }

    setDefense(defense) {
        this.#def = defense
    }

    getRange() {
        return this.#range
    }

    setRange(range) {
        this.#range = range
    }

    getCost() {
        return this.#cost
    }
}

export default Ship