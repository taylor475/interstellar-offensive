import Ship from "../ShipClass"

class Cruiser extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Cruiser', '../../Assets/Cruiser1.svg', 1, 2, 1, 1, 1, 3, [0, 0, 0, 0], 2, 3, direction, x_coord, y_coord, 1, player)
    }
}

export default Cruiser