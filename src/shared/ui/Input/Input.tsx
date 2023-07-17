import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        onChange,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart);
    };
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    onChange={onChangeHandle}
                    {...{
                        onBlur, onFocus, onSelect, value, type,
                    }}
                    {...otherProps}
                    ref={ref}
                />
                {isFocused
                    && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )}
            </div>
        </div>
    );
});
