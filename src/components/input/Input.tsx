import React, { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

interface InputProps extends ComponentProps<'input'> {
    styleClasses?: string[];
}

const Input: FC<InputProps> = ({ styleClasses = [], ...props }) => {
    const classNames = [styles.inputModule, ...styleClasses.map((cls) => styles[cls] || cls), props.className].join(
        ' ',
    );

    return (
        <div className={styles.wrapper}>
            <input {...props} className={classNames} />
        </div>
    );
};

Input.displayName = 'Input Field';

export default Input;
