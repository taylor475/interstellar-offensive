import Object from "./ObjectClass"

class Ship extends Object {
    private atk: number
    private def: number
    private range: number
    private cost: number
    private play: number
    
    constructor(type: string, length: number, width: number, attack: number, defense: number, range: number, movement: number, health: number, max_health: number, direction: string, x_coord: number, y_coord: number, cost: number, player: number) {
        super(type, length, width, movement, health, max_health, direction, x_coord, y_coord)
        this.atk = attack
        this.def = defense
        this.range = range
        this.cost = cost
        this.play = player
    }

    // Moves the ship to a given location
    moveShip(point_x: number, point_y: number) {
        // Find distance between ship and destination
        const dist: number = this.findDistance(point_x, point_y)

        // Move ship if the ship has adequate speed
        if (dist <= this.getMovement()) {
            const x_diff: number = this.getX() - point_x
            const y_diff: number = this.getY() - point_y

            if (Math.abs(x_diff) >= Math.abs(y_diff)) {
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
    attackShip(enemy: Ship) {
        if (enemy.getPlayer() != this.play) {
            // Find distance between ship and enemy
            const dist: number = this.findDistance(enemy.getX(), enemy.getY())

            // Begin attack sequence if enemy is in range
            if (dist <= this.range) {
                if (this.atk > enemy.getDefense()) {
                    const damage: number = enemy.getDefense() - this.atk
                    enemy.takeDamage(damage)
                }
            }
        }
    }

    takeDamage(damage: number) {
        const current_health: number = this.getHealth()

        this.setHealth(current_health - damage)
        // TODO: Add logic for a dead ship
    }

    // Finds the distance between the ship's location and a given point
    findDistance(pt_x: number, pt_y: number) {
        const ship_x: number = this.getX()
        const ship_y: number = this.getY()

        const dist_x: number = Math.abs(ship_x - pt_x)
        const dist_y: number = Math.abs(ship_y - pt_y)

        const tot_dist: number = Math.sqrt(dist_x ^ 2 + dist_y ^ 2)

        return tot_dist
    }

    // Getter method for the atk attribute
    getAttack() {
        return this.atk
    }

    // Setter method for the atk attribute
    setAttack(attack: number) {
        this.atk = attack
    }

    // Getter method for the def attribute
    getDefense() {
        return this.def
    }

    // Setter method for the def attribute
    setDefense(defense: number) {
        this.def = defense
    }

    // Getter method for the range attribute
    getRange() {
        return this.range
    }

    // Setter method for the range attribute
    setRange(range: number) {
        this.range = range
    }

    // Getter method for the cost attribute
    getCost() {
        return this.cost
    }

    // Getter method for the play attribute
    getPlayer() {
        return this.play
    }

    // Setter method for the play attribute
    setPlayer(player: number) {
        this.play = player
    }
}

export default Ship