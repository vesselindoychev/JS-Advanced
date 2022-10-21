class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.listOfArticles = [];
        this.guests = [];
        this.articleNames = [];
        this.guestNames = [];
    }
    addArticle(articleModel, articleName, quantity) {
        let lowerCaseModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(lowerCaseModel)) {
            throw new Error("This article model is not included in this gallery!");
        }
        if (!this.articleNames.includes(articleName)) {
            this.articleNames.push(articleName);
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            })
        } else {
            for (let obj of this.listOfArticles) {
                if (obj.articleName === articleName && obj.articleModel === articleModel) {
                    obj.quantity += quantity;
                    break;
                }
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }
    inviteGuest(guestName, personality) {
        let typesOfPersonality = {
            Vip: 500,
            Middle: 250
        };

        if (this.guestNames.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        this.guests.push({
            guestName,
            points: typesOfPersonality.hasOwnProperty(personality) ? typesOfPersonality[personality] : 50,
            purchaseArticle: 0
        })
        this.guestNames.push(guestName);

        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        if (!this.articleNames.includes(articleName)) {
            throw new Error("This article is not found.");
        }

        for (let obj of this.listOfArticles) {
            if (obj.articleName === articleName && obj.articleModel.toLowerCase() !== articleModel) {
                throw new Error("This article is not found.");
            }
            if (obj.quantity === 0) {
                return `The ${articleName} is not available.`
            }
        }

        if (!this.guestNames.includes(guestName)) {
            return "This guest is not invited.";
        }

        let itemValue = this.possibleArticles[articleModel];
        for (let g of this.guests) {
            if (g.guestName === guestName && g.points < itemValue) {
                return "You need to more points to purchase the article."
            }
            else if (g.guestName === guestName && g.points >= itemValue) {
                g.points -= itemValue;
                g.purchaseArticle += 1;
                break;
            }
            // break;
        }

        for (let obj of this.listOfArticles) {
            if (obj.articleName === articleName && obj.articleModel === articleModel) {
                obj.quantity -= 1;
                break;
            }
        }
        return `${guestName} successfully purchased the article worth ${itemValue} points.`


    }
    showGalleryInfo(criteria) {
        let output = [];
        if (criteria === 'article') {
            output.push("Articles information:");
            for (let article of this.listOfArticles) {
                output.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
            return output.join('\n')
        }
        output.push("Guests information:");
        for (let guest of this.guests) {
            output.push(`${guest.guestName} - ${guest.purchaseArticle}`)
        }
        return output.join('\n')
    }

}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
