import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Icon } from '../../Base';
import messages from './messages';
import './index.css';

const NextFormButton: FC = () => (
  <Button
    color="primary"
    className="next-form-button"
    borderless
  >
    <div className="next-form-button__col">
      <FormattedMessage {...messages.nextForm} />
    </div>

    <div className="next-form-button__col">
      1/4
    </div>

    <div className="next-form-button__col">
      <Icon id="arrow-right" />
    </div>
  </Button>
);

export default NextFormButton;
