import React, { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

interface SelectProps extends ComponentProps<'select'> {
    styleClasses?: string[];
}

const Select: FC<SelectProps> = ({ styleClasses = [], ...props }) => {
    const classNames = [styles.selectModule, ...styleClasses.map((cls) => styles[cls] || cls), props.className].join(
        ' ',
    );

    return (
        <div className={styles.wrapper}>
            <select {...props} className={classNames}>
                {props.children}
            </select>
        </div>
    );
};

Select.displayName = 'Select Field';

export default Select;
