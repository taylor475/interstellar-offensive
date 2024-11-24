import Object from "./ObjectClass"

class Ship extends Object {
    #atk
    #def
    #range
    #cost
    #play
    
    constructor(type, length, width, attack, defense, range, movement, health, direction, x_coord, y_coord, cost, player) {
        super(type, length, width, movement, health, direction, x_coord, y_coord)
        this.#atk = attack
        this.#def = defense
        this.#range = range
        this.#cost = cost
        this.#play = player
    }

    // Getter method for the atk attribute
    getAttack() {
        return this.#atk
    }

    // Setter method for the atk attribute
    setAttack(attack) {
        this.#atk = attack
    }

    // Getter method for the def attribute
    getDefense() {
        return this.#def
    }

    // Setter method for the def attribute
    setDefense(defense) {
        this.#def = defense
    }

    // Getter method for the range attribute
    getRange() {
        return this.#range
    }

    // Setter method for the range attribute
    setRange(range) {
        this.#range = range
    }

    // Getter method for the cost attribute
    getCost() {
        return this.#cost
    }

    // Getter method for the play attribute
    getPlayer() {
        return this.#play
    }

    // Setter method for the play attribute
    setPlayer(player) {
        this.#play = player
    }

    // Finds the distance between the ship's location and a given point
    findDistance(ship, pt_x, pt_y) {
        let ship_x = ship.getX()
        let ship_y = ship.getY()

        let dist_x = Math.abs(ship_x - pt_x)
        let dist_y = Math.abs(ship_y - pt_y)

        let tot_dist = Math.sqrt(dist_x ^ 2 + dist_y ^ 2)

        return tot_dist
    }
}

export default Ship