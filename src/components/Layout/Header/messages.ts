import { defineMessages } from 'react-intl';

export const scope = 'components.Layout.Header';

export default defineMessages({
  formCount: {
    id: `${scope}.formCount`,
    defaultMessage: 'Form {count}'
  },
  draft: {
    id: `${scope}.draft`,
    defaultMessage: 'Draft'
  },
  exit: {
    id: `${scope}.exit`,
    defaultMessage: 'Exit'
  },
  editForm: {
    id: `${scope}.editForm`,
    defaultMessage: 'Edit {form}'
  }
});
