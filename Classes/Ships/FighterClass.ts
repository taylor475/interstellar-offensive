import Ship from "../ShipClass"

class Fighter extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Fighter', '../../Assets/Fighter1.svg', 1, 1, 1, 0, 1, 4, [0, 0, 0, 0], 1, 1, direction, x_coord, y_coord, 1, player)
    }
}

export default Fighter