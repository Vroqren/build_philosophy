import React from 'react';
import './App.css'
import {Button} from 'reactstrap';
import PageHeader from './PageHeader';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(this.props.authorBool) {
      this.loadAuthor();
    } else {
      this.setState({edu: this.props.edu,
        epi: this.props.epi,
        eth: this.props.eth,
        rel: this.props.rel});
    }
  }

  loadAuthor() {
    this.setState({edu: "Garrett believes that man naturally seeks to learn, regardless of their previous education.  Learning is something that we long for ,even if just subconsciously, though Plato is right that it can be very difficult.  The greatest thing (though not the only thing) that education can offer is a knowledge of our own weakness before God.  He is supreme, and the sooner we recognize that we rely wholly on Him, the better.  Education may bring us closer to God, but that’s not its end goal.  Instead, education makes us become more like Him, as we slowly learn more and more to reach eventual perfection.  The little facts that we collect throughout life are of great value, and should not be discounted.  A relationship with the Savior is even more important, but the facts that we have are what allow us to act more Christlike in the first place.",
                   epi: "Confidence can be bad, and causes us to block ourselves from further knowledge.  It should also be noted that that a lack of confidence, perhaps insecurity, can also be bad.  Knowledge is a collection of facts, but perhaps more importantly, an understanding of how to use those facts.  There are certain truths that we can know in this life, and others that we cannot.  We can find greater happiness by seeking knowledge, but accepting that we will not learn everything quite yet.  Personal revelation is a valuable way to learn truth, but not the only way, and certainly not the best in every situation.  Various circumstances require us to 'know' the truth of something based on different methods, and determining which methods is a valuable skill to have.  Garrett believes that there is little point to focusing on ideality, but instead learning to accept reality, and push the bounds outward.  Unlike the improver though, Garrett thinks we should push the bounds outward one step at a time, as far as they can go, regardless of where the line for ideality is.",
                   eth: "Mindfulness may be incredibly beneficial, but it is not the end goal.  There are greater things beyond being aware of our surroundings.  We can use mindfulness to our advantage if we learn to use it to reach something higher, such as making a difference in our lives or the lives of others.  There is no reason to worry about the things beyond our control.  If we have done our best, it is enough.  Nobody can fault us for being imperfect if we can honestly say that we have done what we could.  Self improvement is perhaps the greatest challenge of this life, and as such, it is of great importance.  If we can change ourselves, we are more able to help others.  A real relationship can only be built when we remove distractions and focus on another person face-to-face.  Things such as social media, while perhaps not evil, desensitize our society to real interactions that carry much greater value.  Jesus Christ taught us to love unconditionally, and in order to do so, all judgements of others must be removed from your life.  Unfortunately, this frequently involves making ourselves vulnerable, being willing to be hurt, for the sake of someone else.  A real relationship, however, cannot be built unless both parties are willing to be vulnerable with each other, and develop that complete trust.  The more we can remove ourselves from external contexts, the better our relationships will be.",
                   rel: "Each man has the right to believe what he wishes to believe, and should not face ridicule for it.  Because of this, it is each person's obligation to defend the beliefs of others, regardless of how those beliefs line up with our own.  Some of the greatest conflict in the world is because people fail to recognize this principle.  Just because a God wants to remove evil, and has the power to do so, does not mean that he will do so.  There may be higher reasoning that we do not understand.  To accept 'The Problem of Evil' is to misunderstand the role of God.  Garrett refutes the notion that God is dead, and affirms that He continues to do His work today.  If we look in a slightly less literal sense, however, the idea of God being dead can mirror very well the concept of personal apostasy.  Each person 'kills God' so to speak, every time he intentionally disobeys His word.  To Garrett, work and prayer are different methods of reaching a goal, though the nature of those goals may differ widely.  We work for things that are within our control, we pray for things that are beyond our control, and if it's somewhere in the middle, we do both."},
       () => {
      document.getElementById('authorButton').style.display = "none";
  })}

  render() {
    return(
      <div id="resBackground">
        <PageHeader resetVis="hidden" pageTitle="Results" />

        <div className="dialogue2">
          <h4>Education</h4>
          <p>{this.state.edu}</p>
          <h4>Knowledge</h4>
          <p>{this.state.epi}</p>
          <h4>Ethics</h4>
          <p>{this.state.eth}</p>
          <h4>Religion</h4>
          <p>{this.state.rel}</p>
          <br /><br />
          <Button id="authorButton"
                  color="info" 
                  onClick={this.loadAuthor.bind(this)}
                  style={{"margin-top": "25px"}}>
            View Author's Philosophy
          </Button>
        </div>

      </div>
    )
  }
}

export default Result;