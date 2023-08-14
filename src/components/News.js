import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

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

    constructor() {
        super();
        console.log("Constructor from News component");
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("componentDidMount")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10258dc32624b63b34b96b5e083de1f&page=1&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);

        let parsedData = await data.json()
        console.log("parsedData", parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }


    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })

    }

    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        // }
        // else {

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b10258dc32624b63b34b96b5e083de1f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()

            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            })

        // }


    }


    render() {
        console.log("render()")
        return (
            <div className='container my-3 '>
                <h1 className='text-center'>NewsMonkey- Top Headlines</h1>

                <div className="row" >
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""}
                                    imageUrl={element.urlToImage} newsUrl={element.url}
                                />
                            </div>
                        )
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next  &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
