import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3 '>
                <h2>NewsMonkey- Top Headlines</h2>


                <div className="row" >
                    <div className="col-md-3">
                        <NewsItem title="myTitle " description="Kya baat hai bhai" imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/1049F/production/_130691766_p0g5jzy2.jpg" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle " description="Kya baat hai bhai" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle " description="Kya baat hai bhai" />
                    </div>
                </div>



            </div>
        )
    }
}

export default News
