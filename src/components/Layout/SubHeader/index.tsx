import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { IconButton, Button, Icon } from '../../Base';
import messages from './messages';
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
          1.
          <FormattedMessage {...messages.design} />
        </Button>

        <Button
          color="primary"
          className="subheader__tabs-button"
          outlined
          borderless
        >
          2.
          <FormattedMessage {...messages.behavior} />
        </Button>
      </Button.Group>

      <div className="subheader__separator" />
    </div>

    <div className="subheader__col">
      <Button
        color="primary"
        className="subheader__button"
      >
        <FormattedMessage
          {...messages.formCount}
          values={{ count: 1 }}
        />
      </Button>

      <Button
        color="secondary"
        className="subheader__button"
        outlined
      >
        <FormattedMessage {...messages.success} />
      </Button>
    </div>

    <div className="subheader__col">
      <IconButton
        icon={<Icon id="undo" />}
        className="subheader__icon-button"
      >
        <FormattedMessage {...messages.undo} />
      </IconButton>

      <IconButton
        icon={<Icon id="redo" />}
        disabled
        className="subheader__icon-button"
      >
        <FormattedMessage {...messages.redo} />
      </IconButton>

      <div className="subheader__separator" />

      <IconButton
        icon={<Icon id="trash" />}
        className="subheader__icon-button"
      >
        <FormattedMessage {...messages.deleteElement} />
      </IconButton>
    </div>
  </div>
);

export default SubHeader;
