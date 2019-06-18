import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css'
import PageHeader from './PageHeader';

class Epistemology extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  K1N() {
    this.setState({K1: "Confidence is good, and allows you to increase you knowledge."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }
  K1Y() {
    this.setState({K1: "Confidence is bad, and causes you to block yourself from further knowledge."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }

  K2Y() {
    let K2 = document.getElementById('K2I').value;
    this.setState({K2: `To you, knowledge is ${K2}.`},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }

  K3N() {
    this.setState({K3: "Ultimately, you cannot know anything because every input device you have is fallible."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  K3Y() {
    this.setState({K3: "There are certain truths that you can know in this life, and others that you cannot."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }

  K4N() {
    this.setState({K4: "Personal revelation is a valuable way to learn truth, but not the only way."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";})
  }
  K4Y() {
    this.setState({K4: "Personal revelation is the ultimate source of all truth, and no other epistemologies can make up for its absence."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";})
  }

  K5P() {
    this.setState({K5: "You believe that there is no point to focusing on ideality, but instead you accept reality."},
      () => {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
    document.getElementById('epiReview').value = `${this.state.K1}  ${this.state.K2}  ${this.state.K3}  ${this.state.K4}  ${this.state.K5}`;
  })}
  K5I() {
    this.setState({K5: "You see both reality and ideality, but you’re willing to work to close the gap between the two."},
      () => {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
    document.getElementById('epiReview').value = `${this.state.K1}  ${this.state.K2}  ${this.state.K3}  ${this.state.K4}  ${this.state.K5}`;
  })}
  K5O() {
    this.setState({K5: "You see life as the ideal - when a problem arises you can shrug it off as unimportant."},
      () => {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
    document.getElementById('epiReview').value = `${this.state.K1}  ${this.state.K2}  ${this.state.K3}  ${this.state.K4}  ${this.state.K5}`;
  })}

  K6() {
    document.getElementById('opening6').style.display = "none";
    document.getElementById('opening7').style.display = "table-row";
    let epi = document.getElementById('epiReview').value;
    this.props.pullEpi(epi);
  }



  render() {
    return(
      <div id="epiBackground">
        <PageHeader pageTitle="Epistemology"/>

        <div className="dialogue">

          <div id="opening1">Max Shulman proposes that sometimes our confidence is itself a logical fallacy.  Do you feel that it is wrong to be confident?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.K1N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.K1Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening2">Plato wrote a dialogue between Theaetetus and Socrates who discuss the definition of knowledge.  Although Plato leaves the question intentionally un-answered to prompt our thought, the argument is that knowledge is a true belief of something, followed by an account or witness to support the belief.  How would you define knowledge?
            <br /><br />
            <input className="leftOfCenter" id="K2I" />
            <Button className="rightOfCenter" color="success" onClick={this.K2Y.bind(this)}>Submit</Button>
          </div>

          <div id="opening3">Rene Descartes is famous for the line “I think, therefore I am.”  His main argument is that we cannot really know anything at all.  Our senses can fail, people can lie, and ultimately, because all of our knowledge is built on some other knowledge, we must tear everything down right at the foundation.  He states that the only think he is confident of is that every time he wonders if he exists, he proves that he does, because he is capable of thought.  Do you believe we can really know anything?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.K3N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.K3Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening4">Chauncey Riddle discusses several different ‘epistemologies,’ which are ways that we can know things.  He says that all or most have at least some value, but none compare to the value of personal revelation.  Do you believe that personal revelation is the best way to receive information?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.K4N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.K4Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening5">Bruce Hafen describes three groups of people, pessimists, optimists, and improvers.  Pessimists are those who can see only reality, and have no vision of ideality.  They question everything.  Optimists either believe that reality is ideality, or refuse to acknowledge the difference.  They have an answer for everything.  Finally, improvers are those who work to bring reality outward to ideality.  Which of these three categories do you see yourself in?
            <br /><br />
            <Button className="leftOfCenter" color="primary" onClick={this.K5P.bind(this)}>Pessemist</Button>
            <Button className="center" color="primary" onClick={this.K5I.bind(this)}>Improver</Button>
            <Button className="rightOfCenter" color="primary" onClick={this.K5O.bind(this)}>Optimist</Button>
          </div>

          <div id="opening6">That's the whole epistemology section! Once again, we've compiled your answers for you to review.
            <br /><br />
            <textarea className="largeInput" id="epiReview" />
            <br /><br />
            <Button className="rightOfCenter" color="success" onClick={this.K6.bind(this)}>Complete</Button>
          </div>

          <div id="opening7">What is knowledge truly?  Well, according to Descartes, we'll never know, simply because we can't know anything.  Either way, I'm pretty sure that the next section is Ethics.
            <br /><br />
            <Link to={{pathname: '/Ethics'}}>
              <Button className="rightOfCenter" color="success" >Philosophy of Ethics</Button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Epistemology;