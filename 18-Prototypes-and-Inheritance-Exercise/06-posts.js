function solution() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}` + '\n' + 
            `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }
        get comments() {
            return this._comments
        }
        addComment(comment) {
            this._comments.push(comment)
        }

        toString() {
            let output = [];
            output.push(super.toString(), `Rating: ${this.likes - this.dislikes}`);

            if (this._comments.length == 0) return output.join('\n');

            output.push('Comments:')
            this._comments.forEach(comment => output.push(` * ${comment}`));
            return output.join('\n');
            // let buff = [];
            // if (!this.comments.length === 0) {
            //     for (let c of this._comments) {
            //         buff.push(` * ${c}`)
            //     }
            //     return super.toString() + '\n' + `Rating: ${this.likes - this.dislikes}` + '\n' +
            //     `Comments:` + '\n' + buff.join('\n')
            // }
            
            // return super.toString() + '\n' + `Rating: ${this.likes - this.dislikes}`
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + '\n' + `Views: ${this.views}`
        }
    }

    return {
        Post, 
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost('BlogPostTitle', 'BlogPostContent', 0);
bp.view();
console.log(bp.toString());