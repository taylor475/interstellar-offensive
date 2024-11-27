import Ship from "../ShipClass"

class SiegeBreaker extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('SiegeBreaker', '../../Assets/SiegeBreaker1.svg', 2, 2, 5, 0, 4, 1, [0, 0, 0, 0], 1, 1, direction, x_coord, y_coord, 6, player)
    }
}

export default SiegeBreaker