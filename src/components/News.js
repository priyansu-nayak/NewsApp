import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3 '>
                <h2>NewsMonkey- Top Headlines</h2>

                <div className="row" >
                    <div className="col-md-3">
                        <NewsItem title="myTitle " description="Kya baat hai bhai" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title=" " />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title=" " />
                    </div>

                </div>

                <div className="row" >
                    <NewsItem title=" " />
                    <NewsItem title=" " />
                    <NewsItem title=" " />
                </div>

            </div>
        )
    }
}

export default News
