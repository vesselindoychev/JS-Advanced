class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.userLikes = [];
        
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this.userLikes[0]} likes this story!`
        }
        return `${this.userLikes[0]} and ${this._likes.length - 1} others like this story!` 
    }

    like(username) {
        if (this.userLikes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(1);
        this.userLikes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this.userLikes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        let index = -1;
        for (let user of this.userLikes) {
            index ++;
            if(user === username) {
                this._likes.pop();
                break;
            }
        }
        this.userLikes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }
    comment(username, content, id) {
        let existingComment = this._comments.find(c => c.id === id);
        if (!id || !existingComment) {
            id = this._comments.length === 0 ? 1 : this._comments.length + 1;
            this._comments.push({
                id, 
                username,
                content,
                replies: []
            });
            return `${username} commented on ${this.title}`;
        }

        let commentId = existingComment;
        let replies = existingComment.replies;

        let replyId = replies.length === 0 ? commentId + 0.1 : (replies[replies.length - 1].replyId * 10 + 0.1 * 10) / 10;

        existingComment.replies.push({
            replyId,
            username, 
            content
        });
        return 'You replied successfully'

    }
    toString(sortingType) {
        let output = []
        output.push(`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`)

        if (sortingType === 'asc') {
            this._comments.forEach(c => c.replies.sort((a, b) => a.replyId - b.replyId));
            this._comments.sort((a, b) => a.id - b.id);
        } else if (sortingType === 'desc') {
            this._comments.forEach(c => c.replies.sort((a, b) => b.replyId - a.replyId));
            this._comments.sort((a, b) => b.id - a.id);
        } else if (sortingType === 'username') {
            this._comments.forEach(c => c.replies.sort((a, b) => a.username.localeCompare(b.username)));
            this._comments.sort((a, b) => a.username.localeCompare(b.username))
        }

        this._comments.forEach(c => {
            output.push(`-- ${c.id}. ${c.username}: ${c.content}`)
            c.replies.forEach(r => output.push(`--- ${r.replyId}. ${r.username}: ${r.content}`));
        })

        return output.join('\n')
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);

art.dislike("John");
console.log(art.likes);
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
