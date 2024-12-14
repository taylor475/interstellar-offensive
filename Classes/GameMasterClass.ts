import Object from "./ObjectClass"
import Ship from "./ShipClass"
import Player from "./PlayerClass"
import MapCoord from "./MapCoordClass"

class GameMaster {
    private current_turn: number
    private round: number
    private players: Player[]
    private ships: Ship[]
    private objects: Object[]
    private map: MapCoord[]
    private max_energy: number

    constructor(turn: number, round: number, player_list: Player[], ship_list: Ship[], object_list: Object[], coord_list: MapCoord[], max_energy: number) {
        this.current_turn = turn
        this.round = round
        this.players = player_list
        this.ships = ship_list
        this.objects = object_list
        this.map = coord_list
        this.max_energy = max_energy
    }

    // Handles actions to advance to the next round
    advanceRound() {
        // Refresh each player's energy
        for (let p = 0; p < this.players.length; p++) {
            const player = this.players[p];
            player.setEnergy(this.max_energy)
        }

        // Remove bonuses from all ships
        for (let s = 0; s < this.ships.length; s++) {
            const ship = this.ships[s];
            ship.setBonus([0, 0, 0, 0])
        }

        // TODO: Add movement of non-player controlled objects

        this.round++
    }

    // Getter method for current_turn attribute
    getCurrentTurn() {
        return this.current_turn
    }

    // Setter method for current_turn attribute
    setCurrentTurn(turn: number) {
        this.current_turn = turn
    }

    // Getter method for round attribute
    getRound() {
        return this.round
    }

    // Setter method for round attribute
    setRound(round: number) {
        this.round = round
    }

    // Getter method for players attribute
    getPlayers() {
        return this.players
    }

    // Setter method for players attribute
    setPlayers(player_list: Player[]) {
        this.players = player_list
    }

    // Getter method for ships attribute
    getShips() {
        return this.ships
    }

    // Setter method for ships attribute
    setShips(ship_list: Ship[]) {
        this.ships = ship_list
    }

    // Getter method for objects attribute
    getObjects() {
        return this.objects
    }

    // Setter method for objects attribute
    setObjects(object_list: Object[]) {
        this.objects = object_list
    }

    // Getter method for map attribute
    getMap() {
        return this.map
    }

    // Getter method for max_energy attribute
    getMaxEnergy() {
        return this.max_energy
    }
}

export default GameMaster