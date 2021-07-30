import React, { FC } from 'react';
import rightArrowIcon from '../../../assets/icons/right-arrow.svg';
import { Button } from '../../Base';
import './index.css';

const NextFormButton: FC = () => (
  <Button
    color="primary"
    className="next-form-button"
    borderless
  >
    <div className="next-form-button__col">
      Next Form 1/4
    </div>

    <div className="next-form-button__col">
      <img
        src={rightArrowIcon}
        alt="right-arrow"
      />
    </div>
  </Button>
);

export default NextFormButton;
