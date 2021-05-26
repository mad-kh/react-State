import React, { Component } from "react";
import pic1 from "./MaxPlanck.jpg";

class PersonProfile extends Component {
  constructor() {
    super();
    this.state = {
      imgSrc: pic1,

      fullName: "Max Planck",
      bio: "Max Planck, né Max Karl Ernst Ludwig Planck le 23 avril 1858 à Kiel, dans le duché de Schleswig et mort le 4 octobre 1947 à Göttingen, en Allemagne, est un physicien allemand. Max Planck fut l'un des fondateurs de la mécanique quantique.",
      profession: "Physicien",
      timer: 0,
      interval: null,
    };
  }

  componentDidMount() {
    console.log(" componentDidMount()");

    this.setState({
      interval: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate() {
    console.log("componentDidMount() ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h1>Full Name : {this.state.fullName}</h1>
        <img src={this.state.imgSrc} alt="Max Planck" />

        <p
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "100px",
            paddingLeft: "100px",
          }}
        >
          Bio : {this.state.bio}
        </p>
        <h2>Profession : {this.state.profession}</h2>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default PersonProfile;
