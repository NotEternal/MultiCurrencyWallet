import { constants } from 'swap.app'
import EthLikeSwap from './EthLikeSwap'
import DEFAULT_CURRENCY_PARAMETERS from 'common/helpers/constants/DEFAULT_CURRENCY_PARAMETERS'

class ArbitrumSwap extends EthLikeSwap {
  constructor(options) {
    options = {
      ...options,
      getWeb3Adapter: `getArbitrumWeb3Adapter`,
      getWeb3Utils: `getArbitrumWeb3Utils`,
      getMyAddress: `getMyArbitrumAddress`,
      getParticipantAddress: `getParticipantArbitrumAddress`,
      coinName: constants.COINS.arbeth,
      gasLimit: DEFAULT_CURRENCY_PARAMETERS.arbeth.limit.swap,
      gasPrice: DEFAULT_CURRENCY_PARAMETERS.arbeth.price.fast,
    }
    super(options)
  }
}


export default ArbitrumSwap
