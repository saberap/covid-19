import { FC } from 'react';
import { IconProps } from 'react-feather';
export default interface ISocial {
   name: string;
   icon: FC<IconProps>;
   url: string;
}
