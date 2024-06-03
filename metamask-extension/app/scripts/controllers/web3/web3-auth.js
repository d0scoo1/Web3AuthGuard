import { ObservableStore } from '@metamask/obs-store';
import { collectedFingerprints } from './collected-fingerprints';
/**
 Store:
    web3Storage: {
        globalFingerprints:[
            domain: fingerprint
        ],
        signedMessages: {
            address: {
                localFingerprints: {
                    domain: fingerprint
                },
                localMessages: {
                    createdAt: {
                        address,
                        message,
                        createdAt,
                        domain,
                        web3Name,
                        fingerprint
                    }
                }
            }
        }
    }
 */
//TODO: 内置一些web3的fingerprints，比如 opensea.io, 然后进行防钓鱼提醒，如果发现签名一样，但是域名不一样，就提醒用户
export default class Web3AuthController {

  constructor(opts = {}) {
    const initState = {
      web3Storage: {
        globalFingerprints:{
          ...collectedFingerprints
        },
        signedMessages: {
        }
    },
      ...opts.initState,
    };

    this.store = new ObservableStore(initState);
  }

  setMessageInfo(messageInfo){
    let { web3Storage } = this.store.getState();

    const { address, createdAt, domain, fingerprint } = messageInfo;

    if (web3Storage.signedMessages[address] == undefined){
      web3Storage.signedMessages[address] = {
        localFingerprints:{},
        localMessages:{}
      }
    }
    web3Storage.signedMessages[address].localMessages[createdAt] = messageInfo;
    web3Storage.signedMessages[address].localFingerprints[domain] = fingerprint;
    this.store.updateState({ web3Storage: web3Storage});
  }

  setGlobalFingerprint(messageInfo){
    let { web3Storage } = this.store.getState();

    const { domain, fingerprint } = messageInfo;

    // use the latest fingerprint, update global fingerprint
    web3Storage.globalFingerprints[domain] = fingerprint;

    this.store.updateState({ web3Storage: web3Storage});
  }
}
