class Object {
    private type: string
    private img: string
    private len: number
    private wid: number
    private mvmt: number
    private hp: number
    private max_hp: number
    private dir: string
    private x: number
    private y: number

    constructor(type: string, image: string, length: number, width: number, movement: number, health: number, max_health: number, direction: string, x_coord: number, y_coord: number) {
        this.type = type
        this.img = image
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
    setMovement(movement: number) {
        this.mvmt = movement
    }

    // Getter method for hp attribute
    getHealth() {
        return this.hp
    }

    // Setter method for hp attribute
    setHealth(health: number) {
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
    setDirection(direction: string) {
        this.dir = direction
    }

    // Getter method for x attribute
    getX () {
        return this.x
    }

    // Setter method for x attribute
    setX(x_coord: number) {
        this.x = x_coord
    }

    // Getter method for y attribute
    getY() {
        return this.y
    }

    // Setter method for y attribute
    setY(y_coord: number) {
        this.y = y_coord
    }
}

export default Object