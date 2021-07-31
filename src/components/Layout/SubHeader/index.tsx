import React, { FC } from 'react';
import { IconButton, Button, Icon } from '../../Base';
import './index.css';

const SubHeader: FC = () => (
  <div className="subheader">
    <div className="subheader__col">
      <Button.Group className="subheader__tabs">
        <Button
          color="primary"
          className="subheader__tabs-button"
          borderless
        >
          1.Design
        </Button>

        <Button
          color="primary"
          className="subheader__tabs-button"
          outlined
          borderless
        >
          2.Behavior
        </Button>
      </Button.Group>

      <div className="subheader__separator" />
    </div>

    <div className="subheader__col">
      <Button
        color="primary"
        className="subheader__button"
      >
        Form 1
      </Button>

      <Button
        color="secondary"
        className="subheader__button"
        outlined
      >
        Success
      </Button>
    </div>

    <div className="subheader__col">
      <IconButton
        icon={<Icon id="undo" />}
        className="subheader__icon-button"
      >
        Undo
      </IconButton>

      <IconButton
        icon={<Icon id="redo" />}
        className="subheader__icon-button"
      >
        Redo
      </IconButton>

      <div className="subheader__separator" />

      <IconButton
        icon={<Icon id="trash" />}
        className="subheader__icon-button"
      >
        Delete Element
      </IconButton>
    </div>
  </div>
);

export default SubHeader;
