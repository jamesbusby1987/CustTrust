import React, { Component } from "react";

class Pricing extends Component {
  handleClick(e) {
    e.preventDefault();
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("signupSection").style.display = "block";
  }
  render() {
    return (
      <section id="homeSection" className="centreElement">
        <h1>Welcome to CustTrust</h1>
        <br />
        <p>
          Have you ever done a job for a customer and not been paid? Do you
          constantly find yourself chasing up unpaid invoices to the same
          customer? Has your customer ever caused you more hassle than the job
          is worth?
        </p>
        <p>
          If you answered yes to any of these questions, then we can help you!
        </p>
        <p>
          Here at CustTrust, our real-time customer databases feature reviews,
          ratings and feedback from real tradesmen of the customers they have
          worked with. This will allow you to check your next potential customer
          to give the peace of mind that they can be a trusted customer.
        </p>
        <p>
          To join, simply click{" "}
          <a href="Signup" onClick={this.handleClick}>
            here
          </a>{" "}
          to sign up and get instant access to our database.
        </p>
        <hr />
        <br />
        <p>
          Already a customer? - Click{" "}
          <a href="Login" onClick={this.handleClick}>
            here
          </a>{" "}
          to login
        </p>
      </section>
    );
  }
}

export default Pricing;
