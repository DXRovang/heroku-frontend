import React from "react";

export default class Button extends React.Component {
  state = {
    liked: 0,
  };

  handleLike = () => {
    let newCount = this.state.liked + 1;
    this.setState({ liked: newCount });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLike}>Likes: {this.state.liked}</button>
      </div>
    );
  }
}
