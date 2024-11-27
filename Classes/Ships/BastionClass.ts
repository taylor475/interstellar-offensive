import Ship from "../ShipClass"

class Bastion extends Ship {
    constructor(direction: string, x_coord: number, y_coord: number, player: number) {
        super('Bastion', '../../Assets/Bastion1.svg', 2, 2, 1, 3, 1, 1, [0, 0, 0, 0], 2, 2, direction, x_coord, y_coord, 3, player)
    }

    defendShip(ship: Ship) {
        // Check that target ship is friendly
        if (ship.getPlayer() == this.getPlayer()) {
            const current_bonus: number[] = ship.getBonus()
            let new_bonus: number[] = current_bonus
            // Increment the defense portion of the target ship's bonus
            new_bonus[1] += 1

            // Check if the target ship is adjacent
            const dist: number = this.findShipDistance(ship)
            if (dist <= 1) {
                // Increment the defense portion of the target ship's bonus further
                new_bonus[1] += 1
            }

            ship.setBonus(new_bonus)
        }
    }
}

export default Bastion