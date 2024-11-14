import Object from "./ObjectClass"

class Ship extends Object {
    #atk
    #def
    #range
    #cost
    #play
    
    constructor(length, width, attack, defense, range, movement, health, direction, x_coord, y_coord, cost, player) {
        super(length, width, movement, health, direction, x_coord, y_coord)
        this.#atk = attack
        this.#def = defense
        this.#range = range
        this.#cost = cost
        this.#play = player
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

    getPlayer() {
        return this.#play
    }

    setPlayer(player) {
        this.#play = player
    }
}

export default Ship