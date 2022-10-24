class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.addedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let output = new Set();
        
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            
            if (!this.addedPlayers.includes(name)) {
                this.invitedPlayers.push({
                    name, age, playerValue
                })
                this.addedPlayers.push(name);
                output.add(name)
            } else {
                for (let invitedPlayer of this.invitedPlayers) {
                    if (invitedPlayer.name === name && invitedPlayer.playerValue < playerValue) {
                        invitedPlayer.playerValue = playerValue;
                    } 
                    output.add(name)
                    break;
                }
            }
        }
        return 'You successfully invite ' + [...output].join(', ') + '.';
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/')
        playerOffer = Number(playerOffer);
        let currentPlayer = 0;

        if (!this.addedPlayers.includes(name)) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                currentPlayer = player; 
                break;
            }
        }
        let priceDifference = currentPlayer.playerValue - playerOffer
        if (currentPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${currentPlayer.name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${currentPlayer.name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        if (!this.addedPlayers.includes(name)) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let currentPlayer = 0;
        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                currentPlayer = player;
                break;
            }
        }

        let ageDifference = 0;
        if (currentPlayer.age  < age) {
            ageDifference = age - currentPlayer.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
            
             return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
        return `${name} is above age limit!`
    }
    transferWindowResult() {
        let sortedPlayers = this.invitedPlayers.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        let output = [];
        output.push("Players list:");

        for (let player of sortedPlayers) {
            output.push(`Player ${player.name}-${player.playerValue}`)
        }
        return output.join('\n')
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

