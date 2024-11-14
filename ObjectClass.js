class Object {
    #len
    #wid
    #mvmt
    #hp
    #dir

    constructor(length, width, movement, health, direction) {
        this.#len = length
        this.#wid = width
        this.#mvmt = movement
        this.#hp = health
        this.#dir = direction
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
}

export default Object