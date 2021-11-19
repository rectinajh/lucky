import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import style from './index.module.scss';

interface Props {
    dataSource?: any[];
    getOptionLabel?(option: any): string;
    customInputClass?: string;
    customSelectWrapper?: string;
    onInputChange?(value: string): void;
    noOptionsText?: string;
    value?: string;
}

export default function ComboBox({
    dataSource = [{ title: '123' }],
    getOptionLabel = (option: string) => option,
    onInputChange,
    customInputClass,
    customSelectWrapper,
    noOptionsText,
    value,
}: Props) {
    return (
        <Autocomplete
            id="custom-input-demo"
            options={dataSource}
            getOptionLabel={getOptionLabel}
            noOptionsText="No"
            inputValue={value}
            value={value}
            onInputChange={(e, value) => {
                if (onInputChange) {
                    onInputChange(value);
                }
            }}
            classes={{
                input: customInputClass,
                inputFocused: customInputClass,
                popper: customSelectWrapper,
                paper: customSelectWrapper,
                noOptions: !noOptionsText ? style.hideNoOptions : '',
            }}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps} />
                </div>
            )}
        />
    );
}
