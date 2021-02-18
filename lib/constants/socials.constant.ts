import { ISocial } from 'lib/interfaces';
import { Facebook, Youtube, Twitter, Instagram } from 'react-feather';
const socialMedia: Array<ISocial> = [
   {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
   },
   {
      name: 'Youtube',
      icon: Youtube,
      url: 'https://youtube.com',
   },
   {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://Instagram.com',
   },
   {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
   },
];
export default socialMedia;
