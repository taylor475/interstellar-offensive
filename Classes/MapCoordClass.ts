import Object from "./ObjectClass"

class MapCoord {
    private contents: Object[]
    private x: number
    private y: number

    constructor(contents: Object[], x_coord: number, y_coord: number) {
        this.contents = contents
        this.x = x_coord
        this.y = y_coord
    }

    // Checks if anything exists at this point that fills the point
    isEmpty() {
        if (this.contents.length === 0) {
            return true
        } else {
            return false
        }
    }

    // Getter method for contents attribute
    getContents() {
        return this.contents
    }

    // Setter method for contents attribute
    setContents(contents: Object[]) {
        this.contents = contents
    }

    // Getter method for x attribute
    getX() {
        return this.x
    }

    // Getter method for y attribute
    getY() {
        return this.y
    }
}

export default MapCoord