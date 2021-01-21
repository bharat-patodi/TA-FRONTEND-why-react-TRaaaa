import PropTypes from 'prop-types';

function Article({...props}) {
    console.log(props.ref);
    return (
    <article className="news-article">
        <img src = {props.urlToImage} width= "100%"/>
        <h4>{props.title}</h4>
    </article>
    )
};

// Haven't checked this though
Article.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
}

export default Article;