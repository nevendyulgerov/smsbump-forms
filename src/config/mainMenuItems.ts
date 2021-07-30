import { MainMenuItem as MainMenuItemInterface } from '../interfaces/menu';
import themeIcon from '../assets/icons/theme.svg';
import themeHighlightedIcon from '../assets/icons/theme-highlighted.svg';
import formIcon from '../assets/icons/form.svg';
import formHighlightedIcon from '../assets/icons/form-highlighted.svg';
import textIcon from '../assets/icons/text.svg';
import textHighlightedIcon from '../assets/icons/text-highlighted.svg';
import phoneFieldIcon from '../assets/icons/phone-field.svg';
import phoneFieldHighlightedIcon from '../assets/icons/phone-field-highlighted.svg';
import emailFieldIcon from '../assets/icons/email-field.svg';
import emailFieldHighlightedIcon from '../assets/icons/email-field-highlighted.svg';
import nameFieldIcon from '../assets/icons/name-field.svg';
import nameFieldHighlightedIcon from '../assets/icons/name-field-highlighted.svg';
import buttonFieldIcon from '../assets/icons/button-field.svg';
import buttonFieldHighlightedIcon from '../assets/icons/button-field-highlighted.svg';
import checkboxIcon from '../assets/icons/checkbox.svg';
import checkboxHighlightedIcon from '../assets/icons/checkbox-highlighted.svg';
import closeButtonIcon from '../assets/icons/close-button.svg';
import closeButtonHighlightedIcon from '../assets/icons/close-button-highlighted.svg';
import complianceIcon from '../assets/icons/compliance.svg';
import complianceHighlightedIcon from '../assets/icons/compliance-highlighted.svg';

const mainMenuItems: MainMenuItemInterface[] = [{
  name: 'theme',
  label: 'Theme',
  icon: themeIcon,
  highlightedIcon: themeHighlightedIcon
}, {
  name: 'form',
  label: 'Form',
  icon: formIcon,
  highlightedIcon: formHighlightedIcon
}, {
  name: 'text',
  label: 'Text',
  icon: textIcon,
  highlightedIcon: textHighlightedIcon
}, {
  name: 'phone-field',
  label: 'Phone Field',
  icon: phoneFieldIcon,
  highlightedIcon: phoneFieldHighlightedIcon
}, {
  name: 'email-field',
  label: 'Email Field',
  icon: emailFieldIcon,
  highlightedIcon: emailFieldHighlightedIcon
}, {
  name: 'name-field',
  label: 'Name Field',
  icon: nameFieldIcon,
  highlightedIcon: nameFieldHighlightedIcon
}, {
  name: 'button-field',
  label: 'Button Field',
  icon: buttonFieldIcon,
  highlightedIcon: buttonFieldHighlightedIcon
}, {
  name: 'checkbox',
  label: 'Checkbox',
  icon: checkboxIcon,
  highlightedIcon: checkboxHighlightedIcon
}, {
  name: 'close-button',
  label: 'Close Button',
  icon: closeButtonIcon,
  highlightedIcon: closeButtonHighlightedIcon
}, {
  name: 'compliance',
  label: 'Compliance',
  icon: complianceIcon,
  highlightedIcon: complianceHighlightedIcon
}];

export default mainMenuItems;
