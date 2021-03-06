import { NETWORK_ID, UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION } from '../common/constants';
import { TokenMetaData } from '../common/tokens_meta_data';

import { Token } from './types';

export const getWethTokenFromTokensMetaDataByNetworkId = (tokensMetaData: TokenMetaData[]): Token => {
    const tokenMetaData = tokensMetaData.find(t => t.symbol === 'weth');
    if (!tokenMetaData) {
        throw new Error('WETH Token MetaData not found');
    }
    return {
        address: tokenMetaData.addresses[NETWORK_ID],
        symbol: tokenMetaData.symbol,
        decimals: tokenMetaData.decimals,
        name: tokenMetaData.name,
        primaryColor: tokenMetaData.primaryColor,
        icon: tokenMetaData.icon,
        displayDecimals:
            tokenMetaData.displayDecimals !== undefined
                ? tokenMetaData.displayDecimals
                : UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION,
        id: tokenMetaData.id || undefined,
        minAmount: tokenMetaData.minAmount || 0,
        maxAmount: tokenMetaData.maxAmount || undefined,
        precision:
            tokenMetaData.precision !== undefined ? tokenMetaData.precision : UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION,
        website: tokenMetaData.website || undefined,
        description: tokenMetaData.description || undefined,
        verisafe_sticker: undefined,
    };
};

export const mapTokensMetaDataToTokenByNetworkId = (tokensMetaData: TokenMetaData[]): Token[] => {
    return tokensMetaData
        .filter(tokenMetaData => tokenMetaData.addresses[NETWORK_ID])
        .map(
            (tokenMetaData): Token => {
                return {
                    address: tokenMetaData.addresses[NETWORK_ID],
                    symbol: tokenMetaData.symbol,
                    decimals: tokenMetaData.decimals,
                    name: tokenMetaData.name,
                    primaryColor: tokenMetaData.primaryColor,
                    icon: tokenMetaData.icon,
                    displayDecimals:
                        tokenMetaData.displayDecimals !== undefined
                            ? tokenMetaData.displayDecimals
                            : UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION,
                    id: tokenMetaData.id || undefined,
                    minAmount: tokenMetaData.minAmount || 0,
                    maxAmount: tokenMetaData.maxAmount || undefined,
                    precision:
                        tokenMetaData.precision !== undefined
                            ? tokenMetaData.precision
                            : UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION,
                    website: tokenMetaData.website || undefined,
                    description: tokenMetaData.description || undefined,
                    verisafe_sticker: tokenMetaData.verisafe_sticker || undefined,
                };
            },
        );
};
