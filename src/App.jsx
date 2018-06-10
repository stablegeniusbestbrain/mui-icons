import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconList from './IconList';

class App extends Component {
  state = {
    anchorEl: null,
    library: 'mdi',
  };

  setLibrary = (library) => {
    this.setState({
      anchorEl: null,
      library,
    });
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl, library } = this.state;

    return (
      <div style={{ height: '100%' }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              Mui Icons
            </Typography>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              variant="contained"
              onClick={this.handleClick}
            >
              {library}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem
                onClick={() => this.setLibrary('cmdi')}
                disabled={library === 'cmdi'}
              >
                Community M. D. Icons
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('evilicons')}
                disabled={library === 'evilicons'}
              >
                EvilIcons
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('fontawesome')}
                disabled={library === 'fontawesome'}
              >
                FontAwesome
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('ionicons')}
                disabled={library === 'ionicons'}
              >
                IonIcons
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('mdi')}
                disabled={library === 'mdi'}
              >
                Material Design Icons
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('octicons')}
                disabled={library === 'octicons'}
              >
                Github Octicons
              </MenuItem>
              <MenuItem
                onClick={() => this.setLibrary('typicons')}
                disabled={library === 'octtypiconsicons'}
              >
                Typicons
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <IconList library={library} />
      </div>
    );
  }
}

export default App;
