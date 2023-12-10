import React, { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

interface Textarea extends ComponentProps<'textarea'> {
    styleClasses?: string[];
}

const Textarea: FC<Textarea> = ({ styleClasses = [], ...props }) => {
    const classNames = [styles.textareaModule, ...styleClasses.map((cls) => styles[cls] || cls), props.className].join(
        ' ',
    );

    return (
        <div className={styles.wrapper}>
            <textarea {...props} className={classNames}>
                {props.children}
            </textarea>
        </div>
    );
};

Textarea.displayName = 'Textarea Field';

export default Textarea;
