import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // constructor(props) {
    //     super(props);
    //     console.log("Constructor from News component");
    //     this.state = {
    //         // articles: this.articles,
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         totalResults: 0
    //     }

    //     document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
    // }

    const updateNews = async () => {

        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;

        this.setState({
            loading: true
        })

        props.setProgress(30);

        let data = await fetch(url);
        props.setProgress(50);

        let parsedData = await data.json()
        props.setProgress(80)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)


    }

    useEffect(() => {
        this.updateNews() //effect or first 
    }, []) //don't want to listen to any other stuff
    

    const handlePrevClick = async () =>{
        this.setState({ page:this.state.page-1 });
        this.updateNews();
    }

    const handleNextClick = async () => {
        this.setState({page:this.state.page + 1});
        this.updateNews();
    }


    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,

        })

    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px' }} >NewsMonkey- Top Headlines from {this.capitalizeFirstLetter(props.category)}</h1>
            {/* {this.state.loading && <Spinner />} */}

            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.totalResults}
                loader={this.state.loading && <Spinner />}
            >

                <div className="container">

                    <div className="row" >
                        {!this.state.loading && this.state.articles.map((element, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                                        source={element.source.name}
                                    />

                                </div>
                            )
                        })}
                    </div>

                </div>

            </InfiniteScroll>

        </>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
