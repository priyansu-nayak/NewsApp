import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3 '>
                <h2>NewsMonkey- Top Headlines</h2>
                
                <div className="row flex " >
                    <NewsItem title="myTitle " description="Kya baat hai bhai" />
                    <NewsItem title=" " />
                    <NewsItem title=" " />
                </div>
                
                <div className="row flex" >
                    <NewsItem title=" " />
                    <NewsItem title=" " />
                    <NewsItem title=" " />
                </div>
            
            </div>
        )
    }
}

export default News
