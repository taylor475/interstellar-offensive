import Ship from "../ShipClass"

class Defender extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Defender', 1, 1, 0, 1, 0, 2, [0, 0, 0, 0], 1, 1, direction, x_coord, y_coord, 1, player)
    }

    defendShip(ship: Ship) {
        if (ship.getPlayer() == this.getPlayer()) {
            const current_bonus: number[] = ship.getBonus()
            let new_bonus: number[] = current_bonus
            new_bonus[1] += 1

            ship.setBonus(new_bonus)
        }
    }
}

export default Defender