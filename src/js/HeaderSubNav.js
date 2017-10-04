import React, { Component } from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import Button from 'react-md/lib/Buttons/Button'


export default class HeaderSubNav extends Component {
  render() {

    return (
        <nav>
          <div className='Tabs'>
            <MenuButton flat label="Analytics" id="analytics" />
            <MenuButton flat label="Data" id="data" />
            <MenuButton flat label="Channels" id="channels" />
            <MenuButton flat label="Behaviour" id="behaviour" />
            <MenuButton flat label="Translations" id="translations" />
            <MenuButton flat label="Collaborators" id="collaborators" />
            <MenuButton flat label={<i className='material-icons'>more_vert</i>} id="more" />
          </div>
          <Button
            onClick={this.props.onClick}
            floating
            secondary
            className="md-cell--right md-cell--bottom add-button">
            track_changes
          </Button>
        </nav>
    );
  }
}

