class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals.hasOwnProperty(peak) && this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let currentResources = time * 10
        let difference = this.resources - currentResources;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources -= currentResources;
        this.listOfHikes.push({peak, time, difficultyLevel});
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        let bestTimeHike = 0;
        let bestObj = 0;
        let output = [];
        if (criteria === 'all') {
            output.push("All hiking records:");
            this.listOfHikes.forEach(obj => output.push(`${this.username} hiked ${obj.peak} for ${obj.time} hours`))
            return output.join('\n')
        }
        this.listOfHikes.forEach(obj => {
            if(obj.difficultyLevel === criteria) {
                bestTimeHike = obj.time
                bestObj = obj;
            }
        })
        // for (let obj of this.listOfHikes) {
        //     if (obj.difficultyLevel === criteria) {
        //         bestTimeHike = obj.time;
        //         break
        //     }
        // }

        for (let hikeObj of this.listOfHikes) {
            if (hikeObj.difficultyLevel === criteria) {
                if (bestTimeHike > hikeObj.time) {
                    bestTimeHike = hikeObj.time;
                    bestObj = hikeObj;
                }
            }
        }

        if (!bestObj) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }
        return `${this.username}'s best ${criteria} hike is ${bestObj.peak} peak, for ${bestObj.time} hours`
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



