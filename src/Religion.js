import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css'
import PageHeader from './PageHeader';

class Religion extends React.Component {
  R1N() {
    this.setState({R1: "It is not justified for a person to believe something that is ridiculous, or that can be proven false."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }
  R1Y() {
    this.setState({R1: "Each man has the right to believe what he wishes to believe, and should not face ridicule for it."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }

  R2N() {
    this.setState({R2: "Just because a God wants to remove evil, and has the power to do so, does not mean that he will do so.  There may be higher reasoning that you do not understand."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }
  R2Y() {
    this.setState({R2: "There cannot be a God, because evil exists in our society."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }

  R3N() {
    this.setState({R3: "You believe that God is not dead, but continues to do His work today."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  R3YN() {
    this.setState({R3: "You believe that God is dead, but man cannot have killed him."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  R3YY() {
    this.setState({R3: "You believe that God is dead, and man as killed him, as the madman tells.  This is done by actively ignoring His teachings."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }

  R4Y() {
    let R4 = document.getElementById('R4I').value;
    this.setState({R4: `To you, work and prayer ${R4}.`},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";
    document.getElementById('relReview').value = `${this.state.R1}  ${this.state.R2}  ${this.state.R3}  ${this.state.R4}`;})
  }

  R5() {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
    let rel = document.getElementById('relReview').value;
    this.props.pullRel(rel);
  }



  render() {
    return(
      <div id="relBackground">
        <PageHeader pageTitle="Religion"/>

        <div className="dialogue">

          <div id="opening1">William James, a non-believer, claims that each person has an inborn right, not just from the government, but from all mankind and nature herself to believe in whatever he wishes to believe.  Do you agree?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.R1N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.R1Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening2">“The Problem of Evil” suggests that a loving God would want to remove all evil, and an all powerful God could remove all evil.  Because there is evil, we must conclude that there is no God.  Do you agree?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.R2N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.R2Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening3">Nietzsche tells the story of a madman who raves about how God is dead, and we have killed him.  Do you feel that God is dead, and if so, that we killed him?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.R3N.bind(this)}>No</Button>
            <Button className="center" color="primary" onClick={this.R3YN.bind(this)}>Yes, No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.R3YY.bind(this)}>Yes, Yes</Button>
          </div>

          <div id="opening4">C. S. Lewis discusses some fundamental differences and similarities between work and prayer.  What do you believe their relationship is?  To you work and prayer:
            <br /><br />
            <input className="leftOfCenter" id="R4I" />
            <Button className="rightOfCenter" color="success" onClick={this.R4Y.bind(this)}>Submit</Button>
          </div>

          <div id="opening5">Okay, last time we'll make you review, we promise!  Make sure we correctly understand your view of religion.
            <br /><br />
            <textarea className="largeInput" id="relReview" />
            <br /><br />
            <Button className="rightOfCenter" color="success" onClick={this.R5.bind(this)}>Complete</Button>
          </div>

          <div id="opening6">You're done!  Proceed to the final page to see your results!
            <br /><br />
            <Link to={{pathname: '/Result'}}>
              <Button className="rightOfCenter" color="success" >Results</Button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Religion;