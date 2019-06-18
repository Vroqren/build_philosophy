import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import './App.css';
import PageHeader from './PageHeader';
import Education from './Education';
import Epistemology from './Epistemology';
import Ethics from './Ethics';
import Religion from './Religion';
import Result from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authResult: false};
  }

  handleEdu(eduIn) {
    this.setState({edu: eduIn})
  }
  handleEpi(epiIn) {
    this.setState({epi: epiIn})
  }
  handleEth(ethIn) {
    this.setState({eth: ethIn})
  }
  handleRel(relIn) {
    this.setState({rel: relIn})
  }

  handleAuthClick(bool) {
    this.setState({authResult: bool});
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home authResult={this.handleAuthClick.bind(this)} /> } />
          <Route path="/Education" render={() => <Education pullEdu={this.handleEdu.bind(this)} /> } />
          <Route path="/Epistemology" render={() => <Epistemology pullEpi={this.handleEpi.bind(this)} /> } />
          <Route path="/Ethics" render={() => <Ethics pullEth={this.handleEth.bind(this)} /> } />
          <Route path="/Religion" render={() => <Religion pullRel={this.handleRel.bind(this)} /> } />
          <Route path="/Result" render={() => <Result edu={this.state.edu}
                                                      epi={this.state.edu}
                                                      eth={this.state.eth}
                                                      rel={this.state.rel}
                                                      authorBool={this.state.authResult} /> } />
        </Switch>
      </Router>
  )};
}

export default App;


class Home extends React.Component {
  N1() {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";
  }
  N2() {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";
  }
  Y2() {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";
  }
  N4() {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";
  }
  Y4() {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";
  }
  begin() {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "none";
    document.getElementById('beginButton').style.display = "none";
    document.getElementById('authorButton').style.display = "none";
    document.getElementById('opening7').style.display = "table-row";
    this.props.authResult(false);
  }

  authorResult() {
    this.props.authResult(true);
  }

  render() {
    return (
      <div>
        <PageHeader resetVis="visible" restartVis="hidden" pageTitle="Build-A-Philosophy"/>

      <br />
        <div className="dialogue">

          <div id="opening1">Cool, cool.  You're here to build some philosophies, right?  Go ahead and click the button below to start, anytime that you're ready.
            <br /><br /><Button color="danger" onClick={this.N1}>I don't understand</Button>
          </div>
          <div id="opening2">Are you here to create a philosophy of life?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.N2}>I don't think so</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Y2}>Yes</Button>
          </div>
          <div id="opening3">Well, that's really the only thing to do on this website.  I can't force you to stay here, but as long as you're here, you might as well create a philosophy.
          </div>
          <div id="opening4">Oh good!  Go ahead and begin by pressing the blue button labelled "Begin" just beneath your cursor.
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.N4}>What button?</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Y4}>Got it</Button>
          </div>
          <div id="opening5">You're really making this more difficult than it has to be.  Look really hard for this button, and when you find it, click it.
          </div>
          <div id="opening6">You say that, but I kind of doubt it, because you're still not clicking the right button.  I'll make it easy by getting rid of any other distractions.
          </div>
          <div id="opening7">Philosophy is a kind of broad topic.  There are lots of different ponderings that people call philosophy, and in fact, you can make a whole new category of philosophy just by putting "philosophy of" in front of any noun.  Philosophy is loosely defined as "the use of reason to ask and answer ultimate questions in order to live the good life."  Really though, it's about asking "what is [noun]" and "why is [noun]."  We'll be focusing on just four of these categories, specifically: The philosophy of education, the philosophy of knowledge, the philosophy of ethics, and the philosophy of religion.  Go ahead and click the button below to being making your own philosophy of education!
            <br /><br />
            <Link to={{pathname: './Education'}}>
              <Button className="rightOfCenter" color="success" >Philosophy of Education</Button>
            </Link>
          </div>
        </div>
      <br />

        <center>
            <Button color="primary" id="beginButton" onClick={this.begin.bind(this)}>Begin</Button>
            <Link to={{pathname: '/Result'}}>
              <Button id="authorButton" onClick={this.authorResult.bind(this)}>View Author's Philosophy</Button>
            </Link>
        </center>
      </div>
    );
  }
}