import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import cssStyle from './index.module.scss';
import Tooltip from '@material-ui/core/Tooltip';
interface Props {
    style?: React.CSSProperties;
    tips?: string;
}

export default function TipsIcon({ style, tips }: Props) {
    return (
        <Tooltip title={tips || ''} aria-label="add">
            <ErrorIcon className={cssStyle.icon} style={style} />
        </Tooltip>
    );
}
