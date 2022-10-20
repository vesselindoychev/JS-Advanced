class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
        this.registeredPeople = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.registeredPeople.includes(name)) {
            return `The ${name} is already registered at the camp.`
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })
        this.registeredPeople.push(name);
        return `The ${name} was successfully registered.`

    }
    unregisterParticipant(name) {
        if (!this.registeredPeople.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        let currentIndex = 0;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name === name) {
                currentIndex = i;
                break;
            }
        }
        this.listOfParticipants.splice(currentIndex, 1);
        this.registeredPeople.splice(currentIndex, 1);
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let player1Condition = '';
        let player2Condition = '';
        let player1Power = 0;
        let player2Power = 0;

        if (!this.registeredPeople.includes(participant1)) {
            throw new Error(`Invalid entered name/s.`)
        }

        if (typeOfGame === 'WaterBalloonFights') {
            if (participant2) {
                if (!this.registeredPeople.includes(participant2)) {
                    throw new Error(`Invalid entered name/s.`)
                }
                this.listOfParticipants.forEach(person => {
                    if (person.name === participant2) {
                        player2Condition = person.condition;
                        player2Power = person.power;
                    }
                })
                this.listOfParticipants.forEach(person => {
                    if (person.name === participant1) {
                        player1Condition = person.condition;
                        player1Power = person.power;
                    }
                })
                if (player1Condition !== player2Condition) {
                    throw new Error(`Choose players with equal condition.`)
                    // return `Choose players with equal condition.`
                }
                if (player1Power > player2Power) {
                    this.listOfParticipants.forEach(player => {
                        if(player.name === participant1) {
                            player.wins += 1;
                        }
                    })
                    return `The ${participant1} is winner in the game ${typeOfGame}.`
                } else if (player1Power < player2Power) {
                    this.listOfParticipants.forEach(player => {
                        if(player.name === participant2) {
                            player.wins += 1;
                        }
                    })
                    return `The ${participant2} is winner in the game ${typeOfGame}.`
                }
                return `There is no winner.`

            }
        }

        for (let person of this.listOfParticipants) {
            if (person.name === participant1) {
                person.power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }
        }
    }
    toString() {
        let output = [];
        let sortedParticipants = this.listOfParticipants.sort((a, b) => (a.wins < b.wins) ? 1 : ((a.wins > b.wins) ? -1 : 0))
        output.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        sortedParticipants.forEach(person => {
            output.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`)
        })
        return output.join('\n');
    } 

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
