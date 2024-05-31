import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title, dis, imgUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..." style={{width:'286px', height:'130px'}}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{dis}</p>
              <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
