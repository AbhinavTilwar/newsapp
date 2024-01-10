import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title,description,url,newsurl}=this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!url?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTupqAUxi8QzUCecy6cEYKlxiYuXN62BVQ8OQ&usqp=CAUv":url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">Go To Website &#8599;</a>
  </div>
</div>
      </div>
    )   
  }
}

export default NewItem
