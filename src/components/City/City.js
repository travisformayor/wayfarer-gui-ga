import React, { Component } from 'react';
import CreatePost from '../Modals/CreatePost';
import PostModal from '../Modals/PostModal';

class City extends Component {
  // Version 1
  // state = {
  //   show: false,
  // };

  // version 1 - not working yet
  // showModal = () => {
  //   this.setState({show: true});
  // }
  // hideModal = () => {
  //   this.setState({show: false});
  // }

  // Version 2
  state = {
    creating: false
  };

  createNewPostHandler = () => {
    this.setState({creating: true})
  }

  render () {
    let { cities } = this.props;
    let { currentCity } = this.props;
    let city = '';

    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      });
    }

      return (
        <div className="col s9">
          <h3>{city.cityName}</h3>
          <h4>{city.country}</h4>

          {/* <span className="span-button">

          </span> */}

          {/* <button data-target="modal1" className="btn modal-trigger">Modal</button> */}
          {/* <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div> */}

          {this.state.creating && (
            <PostModal title="Create a new post" canCancel canConfirm>
            <p>Modal Content</p>
            </PostModal>
          )}

          <button data-target="modal1" onClick={this.createNewPostHandler}>
            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></a>
          </button>


        </div>
      )
  }
}

export default City;