class Object {
    #len
    #wid
    #mvmt
    #hp
    #dir
    #x
    #y

    constructor(length, width, movement, health, direction, x_coord, y_coord) {
        this.#len = length
        this.#wid = width
        this.#mvmt = movement
        this.#hp = health
        this.#dir = direction
        this.#x = x_coord
        this.#y = y_coord
    }

    getLength() {
        return this.#len
    }

    getWidth() {
        return this.#wid
    }

    getMovement() {
        return this.#mvmt
    }

    setMovement(movement) {
        this.#mvmt = movement
    }

    getHealth() {
        return this.#hp
    }

    setHealth(health) {
        this.#hp = health
    }

    getDirection() {
        return this.#dir
    }

    setDirection(direction) {
        this.#dir = direction
    }

    getX () {
        return this.#x
    }

    getY() {
        return this.#y
    }
}

export default Object