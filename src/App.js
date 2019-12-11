import React, { Component } from "react";
import "./App.css";

class App extends Component {
  nodeUrl = "https://nodes.wavesnodes.com";
  wvs = 100000000;
  chainId = "W";
  constructor(props) {
    super(props);
    this.state = {
      voteHash: "8QvaEQyhN1mpeWzNr5CddRmfc6hueVih9xwrC1LLjgwM",
      rpdAddress: "3PNikM6yp4NqcSU8guxQtmR5onr2D4e8yTJ",
      exipreHeight: 1838812
    };
  }

  vote = async () => {
    await window.WavesKeeper.initialPromise;
    await window.WavesKeeper.signAndPublishTransaction({
      type: 16,
      data: {
        fee: {
          tokens: "0.05",
          assetId: "WAVES"
        },
        dApp: this.state.rpdAddress,
        call: {
          function: "vote",
          args: [
            {
              type: "string",
              value: this.state.voteHash
            },
            {
              type: "integer",
              value: this.state.selectedOption
            }
          ]
        },
        payment: []
      }
    })
      .then(tx => {
        alert("Success!");
      })
      .catch(error => {
        console.error("Что-то пошло не так", error);
      });
  };

  render() {
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <p>
          Voting: determining the reward for a new block's generation. The
          voting will be concluded at the {this.state.exipreHeight} block. Next,
          a snapshot of balances will be made, after which the result will be
          counted and announced.
        </p>
        <form className='form'>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="0"
                checked={this.state.selectedOption === "0"}
                onChange={changeEvent =>
                  this.setState({ selectedOption: changeEvent.target.value })
                }
              />
              Decrease
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="1"
                checked={this.state.selectedOption === "1"}
                onChange={changeEvent =>
                  this.setState({ selectedOption: changeEvent.target.value })
                }
              />
              Leave unchanged (6 WAVES at the moment)
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="2"
                checked={this.state.selectedOption === "2"}
                onChange={changeEvent =>
                  this.setState({ selectedOption: changeEvent.target.value })
                }
              />
              Increase
            </label>
          </div>
        </form>
        <button
          className="btn btn-default button"
          type="submit"
          onClick={this.vote}
        >
          Vote
        </button>
      </div>
    );
  }
}

export default App;
