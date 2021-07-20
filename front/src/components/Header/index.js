import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, withRouter } from 'react-router-dom';

import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: 0,
    };
  }
  
  componentDidMount() {
    // selected menu related to pathname
    const pageList = {
      '/createIncident': 0,
      '/listIncident': 1
    };
    let pathname = this.props.location.pathname;

    if (pathname === '/') {
      this.setState({menuSelected: 1});
      this.props.history.push('/listIncident')
    } else {
      this.setState({menuSelected: pageList[pathname]});
    }
  }
  
  /**
   * Used to change selected menu styles
   */
  handleChange = (event, newMenuSelected) => {
    this.setState({
      menuSelected: newMenuSelected
    });
  };

  render () {
    const { menuSelected } = this.state;

    return (
      <div className="header">
        <Paper>
          <Tabs
            value={menuSelected}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              label="Creer un incident"
              to={'/createIncident'}
              component={Link}
              value={0}
            />
            <Tab
              label="Liste des incidents"
              to={'/listIncident'}
              component={Link}
              value={1}
            />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Header);
