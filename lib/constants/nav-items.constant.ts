import { INav } from 'lib/interfaces';

const navItems: Array<INav> = [
   {
      name: 'OVERVIEW',
      title: 'Overview',
      url: 'Overview',
   },
   {
      name: 'ABOUT',
      title: 'About',
      url: 'About',
   },
   {
      name: 'CONTAGION',
      title: 'Contagion',
      url: 'Contagion',
   },
   {
      name: 'SYMPTOMS',
      title: 'Symptoms',
      url: 'Symptoms',
   },
   {
      name: 'PREVENTION',
      title: 'Prevention',
      url: 'Prevention',
   },
   {
      name: 'LIVEREPORT',
      title: 'Live Report',
      url: 'liveReport',
   },
];

export const navItemsMap: Map<string, INav> = (navItems => {
   const navbarItemsToMap = new Map();
   navItems.forEach(item => {
      navbarItemsToMap.set(item.name, item);
   });
   return navbarItemsToMap;
})(navItems);

export default navItems;
