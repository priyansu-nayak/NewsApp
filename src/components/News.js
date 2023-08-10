import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

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
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
            "source": {
              "id": "talksport",
              "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Bayern to submit £94m Kane bid, Man City offer £70m for Paqueta, Raya to join Arsenal",
            "description": "talkSPORT.com brings you all the latest football news, insight and transfer gossip. Check out the headline stories and follow our live blog below for regular updates throughout the day. Headlines: …",
            "url": "https://talksport.com/football/1486182/football-news-live-harry-kane-tottenham-chelsea-liverpool/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/08/OQ-TALKSPORT-BLOG-9TH-AUG.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-08-09T07:15:04Z",
            "content": "Brighton CEO Paul Barber admits Moises Caicedo has been ‘unsettled’ by the Chelsea transfer saga.\r\nHe insists the Seagulls are still hoping to keep the player at the club this summer, although admits… [+1326 chars]"
          }
    ];

    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false

        }
    }

    render() {
        return (
            <div className='container my-3 '>
                <h2>NewsMonkey- Top Headlines</h2>

                <div className="row" >
                    { this.state.articles.map((element) => {
                        return <div className="col-md-3">
                            <NewsItem title={element.title} description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>



            </div>
        )
    }
}

export default News
