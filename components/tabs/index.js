import { themr } from 'react-css-themr';
import { TABS } from '../identifiers.js';
import { tabsFactory } from './Tabs.js';
import { TabContent } from './TabContent.js';
import { tabFactory } from './Tab.js';
import themedRippleFactory from '../ripple';
import FontIcon from '../font_icon/FontIcon.js';
import theme from './theme.css';

const applyTheme = (Component) => themr(TABS, theme)(Component);
const ThemedTabContent = applyTheme(TabContent);
const ThemedTab = applyTheme(tabFactory(themedRippleFactory({ centered: false })));
const ThemedTabs = applyTheme(tabsFactory(ThemedTab, ThemedTabContent, FontIcon));

export { ThemedTab as Tab };
export { ThemedTabs as Tabs };
