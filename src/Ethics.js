import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css'
import PageHeader from './PageHeader';

class Ethics extends React.Component {
  Et1N() {
    this.setState({Et1: "Mindfulness may be beneficial, but there are greater things beyond being aware of your surroundings."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }
  Et1Y() {
    this.setState({Et1: "Being present is the ultimate joy that this life offers.  You experience this as you are more aware of the needs and emotions of others."},
      () => {
    document.getElementById('opening1').style.display = "none";
    document.getElementById('opening2').style.display = "table-row";})
  }

  Et2N() {
    this.setState({Et2: "You should work hard to improve yourself, but if you ‘leave the rest up to God’, you will fail to accomplish what you need to."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }
  Et2Y() {
    this.setState({Et2: "There is no reason to worry about the things beyond your control.  If you have done your best, it is enough."},
      () => {
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening3').style.display = "table-row";})
  }

  Et3NN() {
    this.setState({Et3: "Self improvement is easy, and relatively unimportant.  Your time is better spent serving others."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  Et3NY() {
    this.setState({Et3: "Self improvement is easy, and very important.  If you help yourself, you can help others better."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  Et3YN() {
    this.setState({Et3: "Self improvement is very difficult, and not of great importance.  Your time is better spent serving others."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }
  Et3YY() {
    this.setState({Et3: "Self improvement is very difficult, but of great importance.  If you help yourself, you can help others better."},
      () => {
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening4').style.display = "table-row";})
  }

  Et4N() {
    this.setState({Et4: "Building real relationships is important, and social media provides a great way for you to do that."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";})
  }
  Et4Y() {
    this.setState({Et4: "A real relationship can only be built when you remove distractions and focus on another person face-to-face."},
      () => {
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening5').style.display = "table-row";})
  }

  Et5N() {
    this.setState({Et5: "Judgements play an important role in building a relationship with someone, as well as protecting yourself.  Making judgements is not an evil thing."},
      () => {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";})
  }
  Et5Y() {
    this.setState({Et5: "Jesus Christ taught you to love unconditionally, and in order to do so, all judgements of others must be removed from your life."},
      () => {
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening6').style.display = "table-row";})
  }

  Et6N() {
    this.setState({Et6: "Vulnerability may help to develop relationships for some, but it is not a requirement in the recipe for a ‘real’ relationship."},
      () => {
    document.getElementById('opening6').style.display = "none";
    document.getElementById('opening7').style.display = "table-row";
    document.getElementById('ethReview').value = `${this.state.Et1}  ${this.state.Et2}  ${this.state.Et3}  ${this.state.Et4}  ${this.state.Et5}  ${this.state.Et6}`;})
  }
  Et6Y() {
    this.setState({Et6: "A relationship cannot be built unless both parties are willing to be vulnerable to each other, and develop that complete trust."},
      () => {
    document.getElementById('opening6').style.display = "none";
    document.getElementById('opening7').style.display = "table-row";
    document.getElementById('ethReview').value = `${this.state.Et1}  ${this.state.Et2}  ${this.state.Et3}  ${this.state.Et4}  ${this.state.Et5}  ${this.state.Et6}`;})
  }

  Et7() {
    document.getElementById('opening7').style.display = "none";
    document.getElementById('opening8').style.display = "table-row";
    let eth = document.getElementById('ethReview').value;
    this.props.pullEth(eth);
  }



  render() {
    return(
      <div id="ethBackground">
        <PageHeader pageTitle="Ethics"/>

        <div className="dialogue">

          <div id="opening1">Mindfulness is the practice of being aware of one’s surroundings and present moment, in order to connect more fully with the things (and people) around us.  It is commonly associated with Buddhism, but actually exists outside the realm of any one religion.  Jon Kabat-Zinn suggests that such an awareness and concentration provide the best way to live.  Do you agree?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et1N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et1Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening2">Stoicism is an ethical system in which people work hard to improve the things they can change, and trust that God will take care of the rest.  Do you think this is a good way to live?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et2N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et2Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening3">Gandhi advocated and lived a life of non-violent minimalism, including self-improvement with faith that others will follow.  He claims that it is much more difficult to conquer our own subtle passions than it is to take the world through physical conquest.  Do you agree that self improvement is more difficult and more important than directly affecting the world or community?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et3NN.bind(this)}>No, No</Button>
            <Button className="rightOfCenter" color="warning" onClick={this.Et3NY.bind(this)}>No, Yes</Button>
            <br /><br />
            <Button className="leftOfCenter" color="primary" onClick={this.Et3YN.bind(this)}>Yes, No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et3YY.bind(this)}>Yes, Yes</Button>
          </div>

          <div id="opening4">In her book titles “Gift from the Sea” Anne Lindbergh suggests that we build real relationships by focusing on others instead of on distractions.  Do you believe that social media use should be discouraged or even prevented?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et4N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et4Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening5">Dietrich Bonhoeffer suggests that a real Christian must learn to avoid all judgements of others, and replace it with love.  Do you agree that all judgements are bad?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et5N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et5Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening6">Emmanuel Levinas and Holly Robinson suggest that in order to build a real relationship, we must first make ourselves completely vulnerable.  Until we can take ourselves out of our own problems we do not connect with others on the level that we were meant to.  Do you think that building a true relationship involves complete vulnerability?
            <br /><br />
            <Button className="leftOfCenter" color="danger" onClick={this.Et6N.bind(this)}>No</Button>
            <Button className="rightOfCenter" color="success" onClick={this.Et6Y.bind(this)}>Yes</Button>
          </div>

          <div id="opening7">That's it for ethics - double check to make sure that we accurately recorded your opinions.
            <br /><br />
            <textarea className="largeInput" id="ethReview" />
            <br /><br />
            <Button className="rightOfCenter" color="success" onClick={this.Et7.bind(this)}>Complete</Button>
          </div>

          <div id="opening8">Three down, one to go.  Coming up next is the philosophy of Religion!
            <br /><br />
            <Link to={{pathname: '/Religion'}}>
              <Button className="rightOfCenter" color="success" >Philosophy of Religion</Button>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Ethics;