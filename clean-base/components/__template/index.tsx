import { useTypedTranslation } from '@hooks/useTypedTranslation';
import React from 'react';

import styles from './index.module.scss';

/**
 * Init your props interface first
 */
export interface ITemplateProps {
  /**
   * Color of text
   */
  color?: string;
  title?: string;
}

/**
 * Then build your component
 */
export const Template: IComponent<ITemplateProps> = ({ color, title }) => {
  const { t } = useTypedTranslation();
  return (
    <h1 style={{ color }} className={styles.color}>
      {t('hello')} {title}
    </h1>
  );
};
