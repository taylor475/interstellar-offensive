import Ship from "../ShipClass"

class Destroyer extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Destroyer', '../../Assets/Destroyer1.svg', 1, 1, 2, 0, 1, 3, [0, 0, 0, 0], 1, 1, direction, x_coord, y_coord, 1, player)
    }
}

export default Destroyer