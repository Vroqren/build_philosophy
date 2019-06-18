import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class PageHeader extends React.Component {
  handleReset() {
    document.getElementById('opening7').style.display = "none";
    document.getElementById('opening6').style.display = "none";
    document.getElementById('opening5').style.display = "none";
    document.getElementById('opening4').style.display = "none";
    document.getElementById('opening3').style.display = "none";
    document.getElementById('opening2').style.display = "none";
    document.getElementById('opening1').style.display = "table-row";
  }

  render() {
    return(

    <div className="pageHeader">
    
      <div className="rightAlign" >
        <Link className="decorlessLink"
              style={{visibility: this.props.restartVis}}
              to={{pathname: '/'}}>
            Restart Philosophy
        </Link>
        <br />
        <p className="decorlessLink"
              style={{visibility: this.props.resetVis}}
              onClick={this.handleReset.bind(this)}>
            Reset Page
        </p>
      </div>

      <h1>{this.props.pageTitle}</h1>

    </div>

  )}
}

export default PageHeader;