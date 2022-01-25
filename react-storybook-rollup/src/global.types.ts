export interface ISvgComponentProps {
  // Width of svg
  width?: string | number;
  // Height of svg
  height?: string | number;
  // Color of svg
  color?: string;
  viewBox?: string;
  opacity?: string | number;
  className?: string;
}

export type IComponent<T = {}> = React.FC<React.PropsWithChildren<T>>;
export type ISvgComponent<T = {}> = IComponent<ISvgComponentProps & T>;
export type TSize2Tier = 'small' | 'large';
export type TSize3Tier = 'small' | 'medium' | 'large';
export type TSize4Tier = 'xsmall' | 'small' | 'medium' | 'large';
export type TMarginSize = TSize3Tier | 'none';

export type TUserStatus = 'away' | 'online' | 'offline';
export type TComponentAlertColor = 'info' | 'danger' | 'success' | 'warning';
export type TComponentColor = TComponentAlertColor | 'blue' | 'red' | 'green' | 'orange' | 'gray' | 'black';
export type TComponentColorAddon = TComponentColor | 'teal' | 'gray' | 'purple' | TUserStatus;

export type TDefaultPlacement = 'top' | 'left' | 'bottom' | 'right';
export type TComponentPlacement = 'default' | TDefaultPlacement | 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';

export type TComponentAnimateSpeed = 'normal' | 'fast' | 'faster' | 'fastest';

export type TComponentDropdownPlacement =
  | TDefaultPlacement
  | 'top-left'
  | 'top-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom-left';
