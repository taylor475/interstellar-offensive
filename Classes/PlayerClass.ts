import Ship from "./ShipClass"

class Player {
    private name: string
    private id: number
    private fleet: Ship[]
    private energy: number

    constructor(name: string, id: number, ships: Ship[], num_actions: number) {
        this.name = name
        this.id = id
        this.fleet = ships
        this.energy = num_actions
    }

    // Getter method for name attribute
    getName() {
        return this.name
    }

    // Setter method for name attribute
    setName(name: string) {
        this.name = name
    }

    // Getter method for id attribute
    getId() {
        return this.id
    }

    // Getter method for fleet attribute
    getFleet() {
        return this.fleet
    }

    // Setter method for fleet attribute
    setFleet(ships: Ship[]) {
        this.fleet = ships
    }

    // Getter method for energy attribute
    getEnergy() {
        return this.energy
    }

    // Setter method for energy attribute
    setEnergy(num_actions: number) {
        this.energy = num_actions
    }
}

export default Player