export const config = {
    RPC_URL: 'http://localhost:26657',
    REST_URL: 'http://localhost:1317',
    EXPLORER_URL: 'https://explorer.omniflix.network',
    STAKING_URL: 'https://flix.omniflix.co/stake',
    NETWORK_NAME: 'Passage3d',
    NETWORK_TYPE: 'testnet',
    CHAIN_ID: 'test-chain',
    CHAIN_NAME: 'Passage3d testnet-1',
    COIN_DENOM: 'PASG',
    COIN_MINIMAL_DENOM: 'upasg',
    COIN_DECIMALS: 6,
    PREFIX: 'pasg',
    COIN_TYPE: 118,
    COINGECKO_ID: '-',
    GAS_PRICE_STEP_LOW: 0.00,
    GAS_PRICE_STEP_AVERAGE: 0.025,
    GAS_PRICE_STEP_HIGH: 0.04,
    FEATURES: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
};
