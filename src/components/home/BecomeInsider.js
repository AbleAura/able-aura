import React, { Component } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import axios from "axios";

export class BecomeInsider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
      },
      isSubmitting: false,
      isError: false,
      isSubmited: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    //Preparing for sending
    const qs = require("querystring");

    const postData = qs.stringify({
      email: this.state.values.email,
    });

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      // "Access-Control-Allow-Origin": "*",
      "Content-Length": postData.length,
    };

    this.setState({ isSubmitting: true });
    /** Envío a Hubspot */
    axios
      .post("https://api.ableaura.com/api/prelaunch/subscribe", postData, {
        headers: headers,
      })
      .then((res) => {
        console.log("--- desde forma de De DateForm Áxio---");

        console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    this.setState({ isSubmitting: false });
    this.setState({ isSubmited: true });
  };

  handleChange = (e) => {
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <h2 className="desktop">JOIN US, IN CHANGING THE FUTURE</h2>
          <h2 className="mobile">
            JOIN US
            <br />
            <span className="in-change">IN CHANGE THE FUTURE</span>
          </h2>
          <p className="text">
            Become an insider, win trips & access exclusive early
            memberdiscounts.
          </p>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="input-group">
              <input
                onChange={this.handleChange}
                defaultValue={this.state.values.email}
                id="email"
                name="email"
                className="form-control"
                placeholder="example@ableaura.com"
                required
              />
              <div className="container-join-btn">
                <button
                  type="submit"
                  disabled={this.state.isSubmited || this.state.isSubmitting}
                  id="btn-join"
                  className="btn btn-join"
                  style={{
                    backgroundColor: this.state.isSubmited ? "green" : "black",
                  }}
                >
                  <StaticImage
                    src="../../assets/images/hand-white-01.png"
                    alt="hand"
                    layout="fixed"
                    width={20}
                    height={20}
                  />
                  <span className="text">
                    {this.state.isSubmited
                      ? "Thank you"
                      : this.state.isSubmitting
                      ? "Sending....."
                      : "Join"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </Wrapper>
    );
  }
}

export default BecomeInsider;

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;

  .desktop {
    display: none;
  }

  .in-change {
    font-size: 19px;
  }
  .form {
    padding: 0 2rem;
  }
  .input-group {
    align-items: center;
    width: 350px;
    margin: auto;
  }

  .form-control {
    height: calc(2.25em + 1.75rem + 0.0625rem);
    padding: 0.875rem 1rem;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .container-join-btn {
    width: 221px;
    height: 68px;
    background: ${(props) => props.theme.colors.background1};
    box-shadow: ${(props) => props.theme.shadows.inset};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.background1};
    padding: 10px;
    transition: all 0.2s ease;
    :hover {
      border: 1px solid ${(props) => props.theme.colors.black};
      box-shadow: ${(props) => props.theme.shadows.inset2};
    }
  }

  .btn-join {
    display: flex;
    justify-content: center;

    width: 200px;
    height: 48px;
    background: ${(props) => props.theme.colors.black};
    box-shadow: ${(props) => props.theme.shadows.button};
    border-radius: 7px;
    font-family: "sf-pro-text-bold";
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.background1};
    text-transform: uppercase;
    padding: 12px 0;

    position: relative;
  }

  .text {
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
    .input-group {
      widht: 450px;
    }
  }
`;
