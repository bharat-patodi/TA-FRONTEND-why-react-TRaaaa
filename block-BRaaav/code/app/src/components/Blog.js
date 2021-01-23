import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faClock} from '@fortawesome/free-solid-svg-icons';
import Article from './Article';
import data from './../data.json';
function Blog() {
    return (

    <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>

        <div className="flex wrap">
          {data.map(article => {
            return (
              <Article title = {article.title} description = {article.description} date={article.date} image = {article.image} altText = {article.altText} linkToArticle = {article.linkToArticle} />
            )
          })}


            {/* <Article title = {data[1].title} description = {data[1].description} date={data[1].date} image = {data[1].image} altText = {data[1].altText} linkToArticle = {data[1].linkToArticle} />

            <Article title = {data[2].title} description = {data[2].description} date={data[2].date} image = {data[2].image} altText = {data[2].altText} linkToArticle = {data[2].linkToArticle} />

            <Article title = {data[3].title} description = {data[3].description} date={data[3].date} image = {data[3].image} altText = {data[3].altText} linkToArticle = {data[3].linkToArticle} /> */}

          </div>
        </div>
      </section>
    )
};

export default Blog;