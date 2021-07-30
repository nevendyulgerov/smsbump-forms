import { MainMenuItem as MainMenuItemInterface } from '../interfaces/menu';
import themeIcon from '../assets/icons/theme.svg';
import formIcon from '../assets/icons/form.svg';
import textIcon from '../assets/icons/text.svg';
import phoneFieldIcon from '../assets/icons/phone-field.svg';
import emailFieldIcon from '../assets/icons/email-field.svg';
import nameFieldIcon from '../assets/icons/name-field.svg';
import buttonFieldIcon from '../assets/icons/button-field.svg';
import checkboxIcon from '../assets/icons/checkbox.svg';
import closeButtonIcon from '../assets/icons/close-button.svg';
import complianceIcon from '../assets/icons/compliance.svg';

const mainMenuItems: MainMenuItemInterface[] = [{
  name: 'theme',
  label: 'Theme',
  icon: themeIcon
}, {
  name: 'form',
  label: 'Form',
  icon: formIcon
}, {
  name: 'text',
  label: 'Text',
  icon: textIcon
}, {
  name: 'phone-field',
  label: 'Phone Field',
  icon: phoneFieldIcon
}, {
  name: 'email-field',
  label: 'Email Field',
  icon: emailFieldIcon
}, {
  name: 'name-field',
  label: 'Name Field',
  icon: nameFieldIcon,
}, {
  name: 'button-field',
  label: 'Button Field',
  icon: buttonFieldIcon,
}, {
  name: 'checkbox',
  label: 'Checkbox',
  icon: checkboxIcon,
}, {
  name: 'close-button',
  label: 'Close Button',
  icon: closeButtonIcon,
}, {
  name: 'compliance',
  label: 'Compliance',
  icon: complianceIcon
}];

export default mainMenuItems;
