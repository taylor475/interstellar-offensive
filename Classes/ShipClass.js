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

    // Moves the ship to a given location
    moveShip(point_x, point_y) {
        // Find distance between ship and destination
        let dist = this.findDistance(point_x, point_y)

        // Move ship if the ship has adequate speed
        // TODO Figure out how speed is determined (ship-by-ship basis or number of player actions)
        if (dist <= speed) {
            let x_diff = this.getX() - point_x
            let y_diff = this.getY() - point_y

            if (abs(x_diff) >= abs(y_diff)) {
                if (x_diff > 0) {
                    this.setDirection('W')
                }
                else {
                    this.setDirection('E')
                }
            }
            else {
                if (y_diff > 0) {
                    this.setDirection('N')
                }
                else {
                    this.setDirection('S')
                }
            }

            this.setX(point_x)
            this.setY(point_y)
        }
    }

    // Attacks enemy ship
    attackShip(enemy) {
        if (enemy.getPlayer() != this.#play) {
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