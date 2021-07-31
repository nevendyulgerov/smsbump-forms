import React, { FC } from 'react';
import { Button, Icon } from '../../Base';
import './index.css';

const NextFormButton: FC = () => (
  <Button
    color="primary"
    className="next-form-button"
    borderless
  >
    <div className="next-form-button__col">
      Next Form
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
