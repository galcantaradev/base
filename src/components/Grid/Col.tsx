import classnames from 'classnames';
import React, { ReactNode } from 'react';

export type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColSizes = {
  xs: ColSize;
  sm: ColSize;
  md: ColSize;
  lg: ColSize;
};

type PartialColProps = Partial<ColSizes> & {
  className?: string;
  children: ReactNode;
};

type RequiredColProps = ColSizes & {
  className?: string;
  children: ReactNode;
};

export type ColProps = PartialColProps | RequiredColProps;

const hasColSize = (props: ColProps): props is RequiredColProps => {
  return !!(props.xs || props.sm || props.md || props.lg);
};

export const Col = (props: ColProps) => {
  if (hasColSize(props)) {
    const {
      xs = 0,
      sm = 0,
      md = 0,
      lg = 0,
      className = '',
      children,
      ...rest
    } = props;

    const classes = classnames(className, {
      [`col-xs-${xs}`]: !!xs,
      [`col-sm-${sm}`]: !!sm,
      [`col-md-${md}`]: !!md,
      [`col-lg-${lg}`]: !!sm
    });

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }

  return null;
};
