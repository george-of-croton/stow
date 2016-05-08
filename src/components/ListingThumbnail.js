import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class ListingThumbnail extends Component {

  render() {
    const id = this.props.listing.get('listings_ID')
    return (
        <div className="col-sm-3 listingThumbnail">
      <Link to={`listing/${id}`}>
          <img className="img" src={this.props.listing.get('url')} alt="this is the image" width="200" height="140"/>
          <h2>${this.props.listing.get('price')}</h2>
          <p>{this.props.listing.get('description')}</p>
              <button type='button' className='btn btn-default thumbnailbtn'>View Stow &raquo;</button>
      </Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default ListingThumbnail