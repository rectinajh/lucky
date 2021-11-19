import React from 'react';
import Layout from '@/components/LayoutWithNavSide';
import Banner from '@/pages/components/Banner';
import style from './index.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomTabRow from './Row';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/state/hooks';
import { Tokens } from '@/constants';

export default function Hedge() {
    const { t } = useTranslation();
    const { chainId } = useAppSelector((state) => state.user);

    return (
        <Layout>
            <div className={style.wrapper}>
                <Banner />
                <div className={style.table}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        {t('pool')}
                                    </TableCell>
                                    <TableCell align="center">
                                        {t('apy')}
                                    </TableCell>
                                    <TableCell align="center">
                                        {t('poolTotalStaked')}
                                    </TableCell>
                                    <TableCell align="center">
                                        {t('yourStaked')}
                                    </TableCell>
                                    <TableCell align="center">
                                        {t('netProfile')}
                                    </TableCell>
                                    <TableCell align="center">
                                        {t('operation')}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <CustomTabRow
                                    token={Tokens[chainId]['eth']}
                                    apy={31}
                                    tvl={346}
                                    yourTvl={2}
                                    profit={0.1}
                                />
                                <CustomTabRow
                                    token={Tokens[chainId]['btc']}
                                    apy={36}
                                    tvl={31}
                                    yourTvl={0.5}
                                    profit={0.09}
                                />
                                <CustomTabRow
                                    token={Tokens[chainId]['busd']}
                                    apy={17}
                                    tvl={89709}
                                    yourTvl={2000}
                                    profit={189}
                                />
                                <CustomTabRow
                                    token={Tokens[chainId]['cake']}
                                    apy={35}
                                    tvl={3468}
                                    yourTvl={200}
                                    profit={31}
                                />
                                <CustomTabRow
                                    token={Tokens[chainId]['bnb']}
                                    apy={25}
                                    tvl={4699}
                                    yourTvl={99}
                                    profit={10}
                                />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Layout>
    );
}
