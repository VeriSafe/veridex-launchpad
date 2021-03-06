/**
 * @jest-environment jsdom
 */

import { BigNumber } from '0x.js';
import React from 'react';

import { WalletTokenBalances } from '../../../components/account';
import { DefaultTheme } from '../../../themes/default_theme';
import { TokenBalance, Web3State } from '../../../util/types';
import { mountWithTheme, renderWithTheme } from '../../util/test_with_theme';
const noop = () => ({});
const ZERO = new BigNumber(0);
const tokenDefaults = {
    displayDecimals: 2,
    primaryColor: 'white',
    decimals: 18,
};
const wethTokenBalance = {
    balance: ZERO,
    token: {
        ...tokenDefaults,
        address: '0x100',
        symbol: 'WETH',
        name: 'wETH',
    },
    isUnlocked: true,
};

const theme = new DefaultTheme();

describe('WalletTokenBalances', () => {
    it('should show one row for each token plus one for the total eth', () => {
        const account = '0x1';
        const tokenBalances: TokenBalance[] = [
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x1',
                    symbol: 'MOCK1',
                    name: 'MOCK1',
                },
                isUnlocked: true,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x2',
                    symbol: 'MOCK2',
                    name: 'MOCK2',
                },
                isUnlocked: true,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x3',
                    symbol: 'MOCK3',
                    name: 'MOCK3',
                },
                isUnlocked: true,
            },
        ];
        const onSubmitTransferToken = jest.fn();
        // when
        const wrapper = mountWithTheme(
            <WalletTokenBalances
                ethBalance={ZERO}
                wethTokenBalance={wethTokenBalance}
                tokenBalances={tokenBalances}
                onStartToggleTokenLockSteps={noop}
                onSubmitTransferToken={onSubmitTransferToken}
                web3State={Web3State.Done}
                ethAccount={account}
                theme={theme}
            />,
        );

        // then
        expect(wrapper.find('tbody tr')).toHaveLength(4);
    });

    it('should properly show locked and unlocked tokens', () => {
        const account = '0x1';
        const tokenBalances: TokenBalance[] = [
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x1',
                    symbol: 'MOCK1',
                    name: 'MOCK1',
                },
                isUnlocked: true,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x2',
                    symbol: 'MOCK2',
                    name: 'MOCK2',
                },
                isUnlocked: false,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x3',
                    symbol: 'MOCK3',
                    name: 'MOCK3',
                },
                isUnlocked: true,
            },
        ];
        const onSubmitTransferToken = jest.fn();

        const tree = renderWithTheme(
            <WalletTokenBalances
                ethBalance={ZERO}
                wethTokenBalance={wethTokenBalance}
                tokenBalances={tokenBalances}
                onStartToggleTokenLockSteps={noop}
                onSubmitTransferToken={onSubmitTransferToken}
                web3State={Web3State.Done}
                ethAccount={account}
                theme={theme}
            />,
        );

        // when
        expect(tree).toMatchSnapshot();
    });

    it('should call the onToggleTokenLock function when a locked token is clicked', () => {
        const account = '0x1';

        const tokenBalances: TokenBalance[] = [
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x1',
                    symbol: 'MOCK1',
                    name: 'MOCK1',
                },
                isUnlocked: true,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x2',
                    symbol: 'MOCK2',
                    name: 'MOCK2',
                },
                isUnlocked: false,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x3',
                    symbol: 'MOCK3',
                    name: 'MOCK3',
                },
                isUnlocked: true,
            },
        ];
        const onToggleTokenLock = jest.fn();
        const onSubmitTransferToken = jest.fn();
        // when
        const wrapper = mountWithTheme(
            <WalletTokenBalances
                ethBalance={ZERO}
                wethTokenBalance={wethTokenBalance}
                tokenBalances={tokenBalances}
                onStartToggleTokenLockSteps={onToggleTokenLock}
                onSubmitTransferToken={onSubmitTransferToken}
                web3State={Web3State.Done}
                ethAccount={account}
                theme={theme}
            />,
        );

        wrapper
            .find('tbody tr')
            .at(2)
            .find('[data-icon="lock"]')
            .simulate('click');

        // then
        expect(onToggleTokenLock).toHaveBeenCalledWith(tokenBalances[1].token, tokenBalances[1].isUnlocked);
    });

    it('should call the onToggleTokenLock function when a unlocked token is clicked', () => {
        const account = '0x1';
        const tokenBalances: TokenBalance[] = [
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x1',
                    symbol: 'MOCK1',
                    name: 'MOCK1',
                },
                isUnlocked: true,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x2',
                    symbol: 'MOCK2',
                    name: 'MOCK2',
                },
                isUnlocked: false,
            },
            {
                balance: new BigNumber(1),
                token: {
                    ...tokenDefaults,
                    address: '0x3',
                    symbol: 'MOCK3',
                    name: 'MOCK3',
                },
                isUnlocked: true,
            },
        ];
        const onToggleTokenLock = jest.fn();
        const onSubmitTransferToken = jest.fn();

        // when
        const wrapper = mountWithTheme(
            <WalletTokenBalances
                ethBalance={ZERO}
                wethTokenBalance={wethTokenBalance}
                tokenBalances={tokenBalances}
                onStartToggleTokenLockSteps={onToggleTokenLock}
                onSubmitTransferToken={onSubmitTransferToken}
                web3State={Web3State.Done}
                ethAccount={account}
                theme={theme}
            />,
        );
        const rows = wrapper.find('tbody tr');
        rows.at(1)
            .find('[data-icon="lock-open"]')
            .simulate('click');

        // then
        expect(onToggleTokenLock).toHaveBeenCalledWith(tokenBalances[0].token, tokenBalances[0].isUnlocked);
    });
});
