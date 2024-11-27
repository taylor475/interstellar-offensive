class Object {
    #type
    #len
    #wid
    #mvmt
    #hp
    #max_hp
    #dir
    #x
    #y

    constructor(type, length, width, movement, health, max_health, direction, x_coord, y_coord) {
        this.#type = type
        this.#len = length
        this.#wid = width
        this.#mvmt = movement
        this.#hp = health
        this.#max_hp = max_health
        this.#dir = direction
        this.#x = x_coord
        this.#y = y_coord
    }

    // Getter method for type attribute
    getType() {
        return this.#type
    }

    // Getter method for len attribute
    getLength() {
        return this.#len
    }

    // Getter method for wid attribute
    getWidth() {
        return this.#wid
    }

    // Getter method for mvmt attribute
    getMovement() {
        return this.#mvmt
    }

    // Setter method for mvmt attribute
    setMovement(movement) {
        this.#mvmt = movement
    }

    // Getter method for hp attribute
    getHealth() {
        return this.#hp
    }

    // Setter method for hp attribute
    setHealth(health) {
        this.#hp = health
    }

    // Getter method for max_hp attribute
    getMaxHealth() {
        return this.#max_hp
    }

    // Getter method for dir attribute
    getDirection() {
        return this.#dir
    }

    // Setter method for dir attribute
    setDirection(direction) {
        this.#dir = direction
    }

    // Getter method for x attribute
    getX () {
        return this.#x
    }

    // Getter method for y attribute
    getY() {
        return this.#y
    }
}

export default Object