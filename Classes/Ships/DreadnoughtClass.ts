import Ship from "../ShipClass"

class Dreadnought extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Dreadnought', '../../Assets/Dreadnought1.svg', 2, 3, 4, 2, 3, 1, [0, 0, 0, 0], 3, 3, direction, x_coord, y_coord, 9, player)
    }
}

export default Dreadnought