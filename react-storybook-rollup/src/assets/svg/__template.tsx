import { ISvgComponent } from '@type';
import React from 'react';

export const __TemplateSVG: ISvgComponent = ({ color = 'green', width = '100%', height = '100%' }) => {
  return <svg height={height} viewBox="0 0 100 100" width={width} xmlns="http://www.w3.org/2000/svg"></svg>;
};
