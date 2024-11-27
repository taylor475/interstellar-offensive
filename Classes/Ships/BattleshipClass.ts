import Ship from "../ShipClass"

class Battleship extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Battleship', '../../Assets/Battleship1.svg', 1, 3, 3, 1, 2, 2, [0, 0, 0, 0], 2, 2, direction, x_coord, y_coord, 5, player)
    }
}

export default Battleship