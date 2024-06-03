import { collectedFingerprints } from './collected_fingerprints.js';

import {collectedMessages} from './collected_messages.js';

import {matchFingerprint, generateFingerprint, matchTemplate} from './metamask_checker.js';

for (let domain in collectedFingerprints){
    let fp = collectedFingerprints[domain];
    let messages = collectedMessages[domain];
    let results = [];
    for (let message of messages){
        let fp2 = generateFingerprint([message]);
        let match = matchFingerprint(fp2, fp);
        results.push(match);
    }
    console.log(domain, results);
}


for (let domain in collectedFingerprints){
    let fp = collectedFingerprints[domain];
    let messages = collectedMessages[domain];
    let results = [];
    for (let message of messages){
        let match = matchTemplate(message, fp.join('')+'');
        results.push(match);
    }
    console.log(domain, results);
}