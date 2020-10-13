import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../ui/misc";
import Reveal from "react-reveal/Reveal";
import HomeCards from "../../home/meetPlayers/cards";

class MeetPlayers extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag bck="#013220" size="100px" color="#ffffff">
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag bck="#013220" size="100px" color="#ffffff">
                    The
                  </Tag>
                </div>
                <div>
                  <Tag bck="#013220" size="100px" color="#ffffff">
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#013220"
                    Link={true}
                    linkto="/the_team"
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
