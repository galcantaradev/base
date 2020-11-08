import * as React from 'react';

import { defaultLocale } from '../../utils';

export type FormattedCurrencyProps = Intl.NumberFormatOptions & {
  value: number;
};

export const FormattedCurrency = (props: FormattedCurrencyProps) => {
  const formattedNumber = new Intl.NumberFormat(defaultLocale, {
    ...props,
    style: 'currency',
    currency: 'BRL'
  }).format(props.value);

  return <>{formattedNumber}</>;
};
