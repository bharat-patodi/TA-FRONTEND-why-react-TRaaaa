import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock} from '@fortawesome/free-solid-svg-icons';

function Article(props) {
    return (
            <article className="flex article flex-48">
              <div className="flex-40 font-0">
                <img
                  className="flexible-img"
                  src={props.image}
                  alt={props.altText}
                />
              </div>

              <div className="flex-60 article-content">
                <time datetime="">
                  <FontAwesomeIcon icon={faClock} /> {props.date}
                </time>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a className="btn btn-tertiary" href={props.linkToArticle}>Read More</a>
              </div>
            </article>
    )
};

export default Article;