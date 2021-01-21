import Article from './Article';
import Data from '../Data';
function Articles() {
    return (
    <section className="news-articles">
        <Article dataObj={Data[0]}/>
        <Article dataObj={Data[1]}/>
        <Article dataObj={Data[2]}/>
        <Article dataObj={Data[3]}/>
        <Article dataObj={Data[4]}/>
        <Article dataObj={Data[5]}/>
    </section>

    )
};

export default Articles;