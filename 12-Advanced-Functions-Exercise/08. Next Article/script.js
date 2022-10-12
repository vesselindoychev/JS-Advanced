function getArticleGenerator(articles) {
    let divItem = document.getElementById('content');
    let copyArr = JSON.parse(JSON.stringify(articles))
    return () => {
        for (let text of copyArr) {
            let articleItem = document.createElement('article');
            articleItem.textContent = text;
            divItem.appendChild(articleItem);
            articles.shift();
            copyArr = articles;
            return articleItem
        }
            
    }
    
}
