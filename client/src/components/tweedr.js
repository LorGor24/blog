import React, { Component } from 'react';
import NewTweedForm from './new-tweed-form';
class Tweedr extends Component {
    constructor (props){
        super(props);
    }
this.createNewTweed=this.createNewTweed.bind(this);
  }



                                                  // fetch('/tweeds').then((response) => {
                                                  //   response.json().then((data) => {
                                                  //       this.setState ({
                                                  //             tweeds:data
                                                  //       });
                                                  //   });
                                                  // });
  async getAllTweeds() {
    const response = await fetch('/tweeds');
    const data = await response.json();

    this.setState({
      tweeds: data
    });

  }


  async createNewTweed(tweedBody) {
    await fetch('/tweeds', {
      method: 'PUT',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: json.stringify(tweedBody)

    });

    this.getAllTweeds();
  }

  async deleteTweeed(tweedId){
    await fetch(`/tweeds/${tweedId}`,{

      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    this.getAllTweeds();
  }

  componentDidMount(){
    this.getAllTweeds();
  }

  render() {
      return (
        <div>
            <NewTweedForm
            createNewTweed={this.createNewTweed}
            />
        </div>
      )
  }
}

export default Tweedr
