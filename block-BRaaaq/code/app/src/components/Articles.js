import Article from './Article';
import Data from '../Data';
function Articles() {
    return (
    <section className="news-articles">
        <Article {...Data[0]}/>
        <Article {...Data[1]}/>
        <Article {...Data[2]}/>
        <Article {...Data[3]}/>
        <Article {...Data[4]}/>
        <Article {...Data[5]}/>
    </section>
    )
};

export default Articles;