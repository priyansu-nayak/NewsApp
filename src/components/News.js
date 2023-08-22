import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    /*
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Can cricketers play dodgeball?",
            "description": "Watch as London Spirit and Oval Invincibles go head-to-head in an inaugural dodgeball match.",
            "url": "http://www.bbc.co.uk/sport/av/cricket/66444760",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/1049F/production/_130691766_p0g5jzy2.jpg",
            "publishedAt": "2023-08-09T10:52:19.2374777Z",
            "content": "Who will win the duel in the inaugural Hundred dodgeball match? Watch as London Spirit and Oval Invincibles take each other on to become dodgeball champion.\r\nREAD MORE: How are the men's and women's … [+71 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        }
    ];
    */


    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("Constructor from News component");
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews(pageNo) {
        
        this.props.setProgress(0);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({
            loading: true
        })

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,

        })

        this.props.setProgress(100);
    }



    async componentDidMount() {

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b10258dc32624b63b34b96b5e083de1f&page=1&pageSize=${this.props.pageSize}`;

        // this.setState({
        //     loading:true
        // })

        // let data = await fetch(url);

        // let parsedData = await data.json()

        // this.setState({
        //      articles: parsedData.articles,
        //      totalResults: parsedData.totalResults,
        //      loading:false
        //     })
        this.updateNews()
    }

    /*
        handlePrevClick = async () => {
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
    
            // let data = await fetch(url);
            // let parsedData = await data.json()
    
            // this.setState({
            //     articles: parsedData.articles,
            //     page: this.state.page - 1,
            //     loading:false
            // })
    
            this.setState({ page: this.state.page - 1 })
            this.updateNews()
        }
    
        handleNextClick = async () => {
            // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    
            //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            //     this.setState({ loading: true });
            //     let data = await fetch(url);
            //     let parsedData = await data.json()
    
            //     this.setState({
            //         articles: parsedData.articles,
            //         page: this.state.page + 1,
            //         loading: false
            //     });
            // }
            this.setState({ page: this.state.page + 1 })
            this.updateNews()
        }
    */


    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,

        })

    };

    render() {

        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px' }} >NewsMonkey- Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.totalResults}
                    loader={this.state.loading && <Spinner />}
                >

                    <div className="container">

                        <div className="row" >
                            {!this.state.loading && this.state.articles.map((element,index) => {
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


                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next  &rarr;</button>
                </div> */}

            </>
        )
    }
}

export default News
