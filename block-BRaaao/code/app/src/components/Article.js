function Article(props) {
    console.log(props.ref);
    return (
    <article className="news-article">
        <img src = {props.dataObj.urlToImage} width= "100%"/>
        <h4>{props.dataObj.title}</h4>
    </article>
    )
};

export default Article;