class Object {
    private type: String
    private len: Number
    private wid: Number
    private mvmt: Number
    private hp: Number
    private max_hp: Number
    private dir: String
    private x: Number
    private y: Number

    constructor(type: String, length: Number, width: Number, movement: Number, health: Number, max_health: Number, direction: String, x_coord: Number, y_coord: Number) {
        this.type = type
        this.len = length
        this.wid = width
        this.mvmt = movement
        this.hp = health
        this.max_hp = max_health
        this.dir = direction
        this.x = x_coord
        this.y = y_coord
    }

    // Getter method for type attribute
    getType() {
        return this.type
    }

    // Getter method for len attribute
    getLength() {
        return this.len
    }

    // Getter method for wid attribute
    getWidth() {
        return this.wid
    }

    // Getter method for mvmt attribute
    getMovement() {
        return this.mvmt
    }

    // Setter method for mvmt attribute
    setMovement(movement: Number) {
        this.mvmt = movement
    }

    // Getter method for hp attribute
    getHealth() {
        return this.hp
    }

    // Setter method for hp attribute
    setHealth(health: Number) {
        this.hp = health
    }

    // Getter method for max_hp attribute
    getMaxHealth() {
        return this.max_hp
    }

    // Getter method for dir attribute
    getDirection() {
        return this.dir
    }

    // Setter method for dir attribute
    setDirection(direction: String) {
        this.dir = direction
    }

    // Getter method for x attribute
    getX () {
        return this.x
    }

    // Setter method for x attribute
    setX(x_coord: Number) {
        this.x = x_coord
    }

    // Getter method for y attribute
    getY() {
        return this.y
    }

    // Setter method for y attribute
    setY(y_coord: Number) {
        this.y = y_coord
    }
}

export default Object