import React from 'react';
import './App.css'
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import PageHeader from './PageHeader';

class Education extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  E1N() {
    this.setState({E1: "You believe that man naturally seeks to learn, regardless of their previous education."},
     () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }
  E1Y() {
    this.setState({E1: "You believe that man is resilient to learning, and must be forced out of the darkness of ignorance."},
      () =>{
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }

  E2N() {
    this.setState({E2: "Knowledge is power, and the more you know that better off you will be in this life."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }
  E2Y() {
    this.setState({E2: "The greatest thing that education can offer you is a knowledge of your own weakness."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }

  E3N() {
    this.setState({E3: "Education may bring you closer to God, but that’s not its primary role."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  E3Y() {
    this.setState({E3: "Education’s highest purpose is to increase your focus and thus improve your relationship with God."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }

  E4N() {
    this.setState({E4: "Like Terry Warner, facts mean nothing to you compared to a relationship with God."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";
    document.getElementById('eduReview').value = `${this.state.E1}  ${this.state.E2}  ${this.state.E3}  ${this.state.E4}`;
  })}
  E4Y() {
    this.setState({E4: "The little facts that you collect throughout life are of great value."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";
    document.getElementById('eduReview').value = `${this.state.E1}  ${this.state.E2}  ${this.state.E3}  ${this.state.E4}`;
  })}

  E5() {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
    let edu = document.getElementById('eduReview').value;
    this.props.pullEdu(edu);
  }



  render() {
    return(
      <div id="eduBackground">
        <PageHeader pageTitle="Education"/>

        <div className="dialogue">

          <div id="opening1">Plato describes education as the forced rescue of a man in a cave.  His claim is that man is naturally resistant to education, and only once he has seen the light, will he understand how enjoyable it is.  Do you agree?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.E1N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.E1Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening2">When Socrates was put on trial he argued that he was the smartest man only because he knew that his wisdom was worth nothing compared to God’s wisdom.  Do you agree that the only real knowledge we can gain is of our own ignorance?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.E2N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.E2Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening3">Simone Weil argues that all education and learning serves only one purpose: to draw us closer to God by increasing our focus.  Do you agree?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.E3N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.E3Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening4">Terry Warner describes information as just a collection of facts, of little to no value or importance.  He also describes truth as a relationship with Jesus Christ, which he suggests is of ultimate value.  Do you think that collected facts hold any value?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.E4N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.E4Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening5">Well done, you've finished the education section of your philosophy!  Below is a input field with your philosphy, please make any changes you feel are necessary, then click complete when you are done.
            <br /><br />
            <textarea className="largeInput" id="eduReview" />
            <br /><br />
            <Button className="rightOfCenter" color="success" onClick={this.E5.bind(this)}>Complete</Button>
          </div>

          <div id="opening6">Education is pretty cool.  Next is knowledge, also known as epistemology.  Click below to continue!
            <br /><br />
            <Link to={{pathname: '/Epistemology'}}>
              <Button className="rightOfCenter" color="success" >Philosophy of Knowledge</Button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Education;