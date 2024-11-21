import Object from "./ObjectClass"

class Ship extends Object {
    #atk
    #def
    #range
    #cost
    #play
    
    constructor(type, length, width, attack, defense, range, movement, health, max_health, direction, x_coord, y_coord, cost, player) {
        super(type, length, width, movement, health, max_health, direction, x_coord, y_coord)
        this.#atk = attack
        this.#def = defense
        this.#range = range
        this.#cost = cost
        this.#play = player
    }

    // Attacks enemy ship
    attackShip(enemy) {
        // TODO: Add check to make sure the other ship is an enemy ship and not your own
        // Find distance between ship and enemy
        let dist = this.findDistance(enemy.getX(), enemy.getY())

        // Begin attack sequence if enemy is in range
        if (dist <= this.range) {
            if (this.#atk > enemy.getDefense()) {
                let damage = enemy.getDefense() - this.#atk
                enemy.takeDamage(damage)
            }
        }
    }

    takeDamage(damage) {
        let current_health = this.getHealth()

        this.setHealth(current_health - damage)
        // TODO: Add logic for a dead ship
    }

    // Finds the distance between the ship's location and a given point
    findDistance(pt_x, pt_y) {
        let ship_x = this.getX()
        let ship_y = this.getY()

        let dist_x = Math.abs(ship_x - pt_x)
        let dist_y = Math.abs(ship_y - pt_y)

        let tot_dist = Math.sqrt(dist_x ^ 2 + dist_y ^ 2)

        return tot_dist
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
}

export default Ship