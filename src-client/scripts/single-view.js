const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
// const AppViewController = require('./component-viewcontroller.js')
const {ItemsModel, ItemsModelCollection} = require("./models.js")
const MultiView = require('./multi-view.js')
const ACTIONS = require('./actions.js')
const STORE = require('./store.js')
import MapPage from './map-api.js'


const SingleView = React.createClass({

  componentWillMount: function(){
    let id = this.props.itemId
    console.log('store data',STORE._data);
    console.log('trying to get the pics', this.props);


    ACTIONS.fetchSingleItemModel(this.props.itemId)

  },

  render:function(){
  console.log(this.props.singleItem);
    // let self = this
    if(!this.props.singleItem.attributes.itemName){
      return(
        <p>loading...</p>

      )

    }
    console.log('!!!!!', this.props)

    let CharlestonMap = {
        center: {lat: 32.784618, lng: -79.940918},
        zoom: 13,
    }


    return(

      <div className="single-item-header text-center">
          <div className="single-home-icon-container">
            <a href=" "><i className="fa fa-home fa-4x single-home-icon" aria-hidden="true"></i></a>
          </div>
          <div className="single-header-container">
           <h2>LOGO</h2>
           <h1 className="single-header">Presta Trading Post</h1>
          </div>

        <div className="thumbnail single-thumbnail-container">
           <img className="single-image" src={"images/" + this.props.singleItem.get("images")[0].imageFileName}/>
          <div className="caption">
            <h3><u>Description:</u></h3><h4>{this.props.singleItem.get('itemDescription')}</h4>
            <h3><u>Item:</u></h3> <h4>{this.props.singleItem.get('itemName')}</h4>
            <h3><u>Price:</u></h3> <h4>{this.props.singleItem.get('askingPrice')}</h4>
            <a href="#"><button type="button" className="btn btn-default btn-large sign-in">Contact renter</button></a>
            <div className="map-container">
              <MapPage center={CharlestonMap.center} zoom={CharlestonMap.zoom}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
})


module.exports = SingleView
// <p><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
//  <span className="sr-only">Loading...</span></p>

// const SingleView = React.createClass({
//    componentDidMount: function(){
//      console.log('fetching....', this.props.pidVal)
//      ACTIONS.itemsModel(this.props.pidVal)
//
//    },
// })
