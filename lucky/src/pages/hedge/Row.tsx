import TableCell from '@material-ui/core/TableCell/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { Small, Info } from '@/components/Text';
import Row from '@/components/Row';
import Button from '@/components/Button';
import TipIcon from '@/components/TipsIcon';
import style from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { Token } from '@/constants';

interface Props {
    token: Token;
    apy: number;
    tvl: number;
    yourTvl: number;
    profit: number;
}

export default function TabRow({ token, apy, tvl, yourTvl, profit }: Props) {
    const { t } = useTranslation();

    return (
        <TableRow>
            <TableCell component="th" scope="row" align="center">
                <div className={style.pool}>
                    <img className={style.tokenIcon} src={token.img} alt="" />
                    <Small color="#fff">{token.name}</Small>
                </div>
            </TableCell>
            <TableCell align="center">
                <div className={style.apy}>
                    <Info color="#14B67B">{apy}%</Info>
                    <TipIcon style={{ marginLeft: '4px' }} tips="apy" />
                </div>
            </TableCell>
            <TableCell align="center">
                <Small color="#fff">
                    {tvl}
                    <br />
                    <Small color="#66757F" fontSize={12}>
                        {token.name}
                    </Small>
                </Small>
            </TableCell>
            <TableCell align="center">
                <Small color="#fff">
                    {yourTvl} <br />
                    <Small color="#66757F" fontSize={12}>
                        {token.name}
                    </Small>
                </Small>
            </TableCell>
            <TableCell align="center">
                <Small color="#fff">
                    {profit} <br />
                    <Small color="#66757F" fontSize={12}>
                        {token.name}
                    </Small>
                </Small>
            </TableCell>
            <TableCell align="center">
                <Row
                    align="between"
                    lineHeight="none"
                    customClass={style.buttons}
                >
                    <Button type="transparent" className={style.button}>
                        {t('deposit')}
                    </Button>
                    <Button type="transparent" className={style.button}>
                        {t('withdraw')}
                    </Button>
                </Row>
                <Row align="center">
                    <Button className={style.earn} type="transparent">
                        {t('harvestNetProfit')}
                    </Button>
                </Row>
            </TableCell>
        </TableRow>
    );
}
