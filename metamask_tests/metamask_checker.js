function matchFingerprint(words, fp){
    let fp_index = 0
    let ws_index = 0
    while(fp_index < fp.length){
        if (words.length - ws_index < fp.length){
            return false
        }
        for (let i = ws_index; i-ws_index< fp.length; i++){
            let word1 = fp[fp_index].toString()

            if (word1 == '_nonce_' || word1 == '_address_'){
                fp_index++
                continue
            }

            let reg = new RegExp(word1)
            let word2 = words[i].toString()
            if (word2.match(reg) == null){
            //if (fp[fp_index] != words[i]){
                fp_index = 0
                ws_index++
                break
            }else{
                fp_index++
            }
        }
    }
    return true
}


function generateFingerprint (messageList) {
    if (messageList.length == 0) {
        throw new Error('Message list is empty!')
    }
  
    let messages_words = messageList.map(message =>{
        if(typeof message == 'string'){
            // Replace address with '_address_'
            message = message.replace(/0x[a-fA-F0-9]{40}/g, '_address_')
  
            // Split message into words
            let words = message.split(/(\s+)/)
  
            return words
        }else if(Array.isArray(message)){
            return message
        }else{
            throw new Error('Message must be a string or a list of words!')
        }
    })
  
  
    // Split each message into words
    // \s: match any whitespace character (equal to [\r\n\t\f\v ])
    //let messages_words = messageList.map(message => message.split(/(\s+)/)) // retain whitespace
    //let messages_words = messageList.map(message => message.split(/\s+/))
  
    if (messages_words.length == 1) {
        return messages_words[0]
    }
  
    // Check lengths of each message's words
    if (messages_words.some(words => words.length != messages_words[0].length)) {
        throw new Error('Message lengths are not equal!')
    }
  
    // Compare each word in messages, replace different words with placeholders
    let fingerprint = []
    for (let i = 0; i < messages_words[0].length; i++) {
        let word = messages_words[0][i]
        let isSame = messages_words.every(words => words[i] == word)
        if (isSame) {
            fingerprint.push(word)
        } else {
            fingerprint.push('_nonce_')
        }
    }
  
    return fingerprint
  }


function matchTemplate(message, template){
    //template = template.join('')
    template = escapeRegExp(template);
    template = template.replace(/_nonce_/g, '.*')
    template = template.replace(/_address_/g, '0x[a-fA-F0-9]{40}')
    return message.match(new RegExp(template)) != null
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    // $& 表示匹配到的整个字符串
}

export {generateFingerprint, matchFingerprint,matchTemplate}