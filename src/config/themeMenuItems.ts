import { ThemeMenuItem as ThemeMenuItemInterface } from '../interfaces/menu';
import beAnEcommerceExpertPreview from '../assets/previews/be-an-ecommerce-expert.svg';
import uxOfficerPreview from '../assets/previews/ux-officer.svg';
import comboPreview from '../assets/previews/combo.svg';
import stayTunedPreview from '../assets/previews/stay-tuned.svg';
import thankYouPreview from '../assets/previews/thank-you.svg';
import awesomePreview from '../assets/previews/awesome.svg';
import forTheMarketingNerdsPreview from '../assets/previews/for-the-marketing-nerds.svg';

const themeMenuItems: ThemeMenuItemInterface[] = [{
  name: 'be-an-ecommerce-expert',
  steps: 2,
  icon: beAnEcommerceExpertPreview
}, {
  name: 'ux-officer',
  steps: 3,
  icon: uxOfficerPreview
}, {
  name: 'combo',
  steps: 2,
  icon: comboPreview
}, {
  name: 'stay-tuned',
  steps: 4,
  icon: stayTunedPreview
}, {
  name: 'thank-you',
  steps: 2,
  icon: thankYouPreview
}, {
  name: 'awesome',
  steps: 3,
  icon: awesomePreview,
}, {
  name: 'be-an-ecommerce-expert',
  steps: 3,
  icon: beAnEcommerceExpertPreview,
}, {
  name: 'for-the-marketing-nerds',
  steps: 4,
  icon: forTheMarketingNerdsPreview,
}];

export default themeMenuItems;
