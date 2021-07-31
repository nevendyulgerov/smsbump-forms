import { defineMessages } from 'react-intl';

export const scope = 'components.Layout.SubHeader';

export default defineMessages({
  design: {
    id: `${scope}.design`,
    defaultMessage: 'Design'
  },
  behavior: {
    id: `${scope}.behavior`,
    defaultMessage: 'Behavior'
  },
  formCount: {
    id: `${scope}.formCount`,
    defaultMessage: 'Form {count}'
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Success'
  },
  undo: {
    id: `${scope}.undo`,
    defaultMessage: 'Undo'
  },
  redo: {
    id: `${scope}.redo`,
    defaultMessage: 'Redo'
  },
  deleteElement: {
    id: `${scope}.deleteElement`,
    defaultMessage: 'Delete Element'
  }
});
