import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;

        return (
            <div className='my-3'>
                <div className="card" style={{ width: 18 + 'rem' }}  >

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0
                    }}>

                        <span className="badge rounded-pill bg-primary" >
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>

                    </div>



                    <img src={imageUrl ? imageUrl : "https://imgs.search.brave.com/GTAN_r4ZPDDE03fFe56AJfzfBd3TgDaPvrqXIOqoaYo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NTA4MjU3My92ZWN0/b3IvbGFwdG9wLWNv/bXB1dGVyLTQwNC1l/cnJvci1tZXNzYWdl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1vc0piMnR2dExo/QXBiUzF3WU1KTDBS/alZoZ2lYVEFDSjgx/Ry1WTkFmRThBPQ"} className="card-img-top" alt="..." height="150px" />
                    <div className="card-body">
                        <h5 className="card-title">{title}

                            <h5><span className="badge bg-danger">New</span>

                            </h5>
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary ">By <span className="text-danger">{author ? author : "Unknown"}</span> on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
