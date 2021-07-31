import { defineMessages } from 'react-intl';

export const scope = 'components.Layout.ThemeMenu';

export default defineMessages({
  selected: {
    id: `${scope}.selected`,
    defaultMessage: 'Selected'
  },
  thisFormHasAttribute: {
    id: `${scope}.thisFormHasAttribute`,
    defaultMessage: 'This form has {attribute}'
  },
  countSteps: {
    id: `${scope}.countSteps`,
    defaultMessage: '{count, plural, one {# step} other {# steps}}'
  }
});
