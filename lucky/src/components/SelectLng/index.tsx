import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import './index.scss';
import classNames from 'classnames';

const options = [
    {
        value: 'en',
        label: 'English',
    },

    {
        value: 'zh_cn',
        label: '简体中文',
    },
];

interface Props {
    customClass?: string;
}

export default function SelectLng(props: Props) {
    const { customClass } = props;
    const { i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(i18n.language);

    useEffect(() => {
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.className = i18n.language;
    }, [i18n.language]);
    return (
        <Select
            disableUnderline
            className={classNames('select', customClass)}
            value={selectedOption}
            IconComponent={KeyboardArrowDownIcon}
            onChange={(e) => {
                const htmlEl = document.getElementsByTagName('html')[0];
                const value = e.target.value as string;
                i18n.changeLanguage(value);
                // if (value === 'ru') {
                //     htmlEl.className = 'ru';
                // } else {
                //     htmlEl.className = '';
                // }
                htmlEl.className = value;
                setSelectedOption(value);
            }}
        >
            {options.map((option) => {
                return (
                    <MenuItem
                        value={option.value}
                        disableGutters
                        key={option.value}
                    >
                        {/* <span className="prefix">{option.prefix}</span> */}
                        {option.label}
                    </MenuItem>
                );
            })}
        </Select>
    );
}
