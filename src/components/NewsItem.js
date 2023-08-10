import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description}=this.props;
        
        return (

            <div>
                <div className="card " style={{width: 10 + 'rem'}}  >
                    <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/1049F/production/_130691766_p0g5jzy2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
