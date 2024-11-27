import Object from "./ObjectClass"

class Ship extends Object {
    private atk: number
    private def: number
    private range: number
    // Bonus refers to additional benefits provided by support ships
    // It will be an array of four numbers refering to attack, defense, range, and movement (in that order)
    private bonus: number[]
    private cost: number
    private play: number
    
    constructor(type: string, image: string, length: number, width: number, attack: number, defense: number, range: number, movement: number, bonus: number[], health: number, max_health: number, direction: string, x_coord: number, y_coord: number, cost: number, player: number) {
        super(type, image, length, width, movement, health, max_health, direction, x_coord, y_coord)
        this.atk = attack
        this.def = defense
        this.range = range
        this.bonus = bonus
        this.cost = cost
        this.play = player
    }

    // Moves the ship to a given location
    moveShip(point_x: number, point_y: number) {
        if (this.getHealth() > 0) {
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
    }

    // Attacks enemy ship
    attackShip(enemy: Ship) {
        if (this.getHealth() > 0) {
            // Check that the enemy ship doesn't belong to the attacking player
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
    }

    takeDamage(damage: number) {
        const current_health: number = this.getHealth()

        this.setHealth(current_health - damage)

        if (this.getHealth() <= 0) {
            this.setX(-20)
            this.setY(-20)
        }
    }

    // Finds the distance between the ship's location and a given point
    findDistance(pt_x: number, pt_y: number) {
        // Get the coordinates of the top-left corner of the ship
        const ship_x: number = this.getX()
        const ship_y: number = this.getY()

        // Calculate the coordinates of the bottom-right corner of the ship
        const ship_dir: string = this.getDirection()
        let ship_x2: number = ship_x
        let ship_y2: number = ship_y
        // Orientation of the ship affects how length and width factor into the bottom-right corner coordinates
        switch (ship_dir) {
            case ('N'):
                ship_x2 += this.getLength() - 1
                ship_y2 += this.getWidth() - 1
                break
            case ('E'):
                ship_x2 -= this.getWidth() - 1
                ship_y2 += this.getLength() - 1
                break
            case ('S'):
                ship_x2 -= this.getLength() - 1
                ship_y2 -= this.getWidth() - 1
                break
            case ('W'):
                ship_x2 += this.getWidth() - 1
                ship_y2 -= this.getLength() - 1
                break
        }

        // Find the closest x-coordinate of the ship to the point
        let dist_x: number = -475
        for (let count_x = 0; count_x < Math.abs(ship_x - ship_x2); count_x++) {
            let calc_dist_x: number = Math.abs(ship_x + count_x - pt_x)

            if (calc_dist_x < dist_x || dist_x == -475) {
                dist_x = calc_dist_x
            }
        }

        // Find the closest y-coordinate of the ship to the point
        let dist_y: number = -475
        for (let count_y = 0; count_y < Math.abs(ship_y - ship_y2); count_y++) {
            let calc_dist_y: number = Math.abs(ship_y + count_y - pt_y)

            if (calc_dist_y < dist_y || dist_y == -475) {
                dist_y = calc_dist_y
            }
        }

        // Calculate the total distance using the closest x- and y-values
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

    // Getter method for the bonus attribute
    getBonus() {
        return this.bonus
    }

    // Setter method for the bonus attribute
    setBonus(bonus: number[]) {
        this.bonus = bonus
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