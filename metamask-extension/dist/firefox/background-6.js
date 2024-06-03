LavaPack.loadBundle([
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\pipeline.js", {"../../../errors":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\errors-browser.js","./end-of-stream":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\end-of-stream.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cstream-http%5Cnode_modules%5Creadable-stream%5Clib%5Cinternal%5Cstreams%5Cpipeline.js
      return function (require, module, exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
'use strict';

var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = require('../../../errors').codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = require('./end-of-stream');
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;
      };
    };
  }
  }
}, {package:"browserify>stream-http>readable-stream",file:"node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\pipeline.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\state.js", {"../../../errors":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\errors-browser.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cstream-http%5Cnode_modules%5Creadable-stream%5Clib%5Cinternal%5Cstreams%5Cstate.js
      return function (require, module, exports) {
'use strict';

var ERR_INVALID_OPT_VALUE = require('../../../errors').codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};
      };
    };
  }
  }
}, {package:"browserify>stream-http>readable-stream",file:"node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\state.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\stream-browser.js", {"events":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cstream-http%5Cnode_modules%5Creadable-stream%5Clib%5Cinternal%5Cstreams%5Cstream-browser.js
      return function (require, module, exports) {
module.exports = require('events').EventEmitter;

      };
    };
  }
  }
}, {package:"browserify>stream-http>readable-stream",file:"node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\stream-browser.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\readable-browser.js", {"./lib/_stream_duplex.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\_stream_duplex.js","./lib/_stream_passthrough.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\_stream_passthrough.js","./lib/_stream_readable.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\_stream_readable.js","./lib/_stream_transform.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\_stream_transform.js","./lib/_stream_writable.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\_stream_writable.js","./lib/internal/streams/end-of-stream.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\end-of-stream.js","./lib/internal/streams/pipeline.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\stream-http\\node_modules\\readable-stream\\lib\\internal\\streams\\pipeline.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cstream-http%5Cnode_modules%5Creadable-stream%5Creadable-browser.js
      return function (require, module, exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
exports.finished = require('./lib/internal/streams/end-of-stream.js');
exports.pipeline = require('./lib/internal/streams/pipeline.js');

      };
    };
  }
  }
}, {package:"browserify>stream-http>readable-stream",file:"node_modules\\stream-http\\node_modules\\readable-stream\\readable-browser.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\through\\index.js", {"_process":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\process\\browser.js","stream":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\stream-browserify\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cthrough%5Cindex.js
      return function (require, module, exports) {
(function (process){(function (){
var Stream = require('stream')

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}


}).call(this)}).call(this,require('_process'))

      };
    };
  }
  }
}, {package:"debounce-stream>through",file:"node_modules\\through\\index.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\tiny-secp256k1\\js.js", {"./rfc6979":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\tiny-secp256k1\\rfc6979.js","bn.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\bn.js\\lib\\bn.js","buffer":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","elliptic":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\elliptic\\lib\\elliptic.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctiny-secp256k1%5Cjs.js
      return function (require, module, exports) {
(function (Buffer){(function (){
const BN = require('bn.js')
const EC = require('elliptic').ec
const secp256k1 = new EC('secp256k1')
const deterministicGenerateK = require('./rfc6979')

const ZERO32 = Buffer.alloc(32, 0)
const EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex')
const EC_P = Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex')

const n = secp256k1.curve.n
const nDiv2 = n.shrn(1)
const G = secp256k1.curve.g

const THROW_BAD_PRIVATE = 'Expected Private'
const THROW_BAD_POINT = 'Expected Point'
const THROW_BAD_TWEAK = 'Expected Tweak'
const THROW_BAD_HASH = 'Expected Hash'
const THROW_BAD_SIGNATURE = 'Expected Signature'
const THROW_BAD_EXTRA_DATA = 'Expected Extra Data (32 bytes)'

function isScalar (x) {
  return Buffer.isBuffer(x) && x.length === 32
}

function isOrderScalar (x) {
  if (!isScalar(x)) return false
  return x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isPoint (p) {
  if (!Buffer.isBuffer(p)) return false
  if (p.length < 33) return false

  const t = p[0]
  const x = p.slice(1, 33)
  if (x.compare(ZERO32) === 0) return false
  if (x.compare(EC_P) >= 0) return false
  if ((t === 0x02 || t === 0x03) && p.length === 33) {
    try { decodeFrom(p) } catch (e) { return false } // TODO: temporary
    return true
  }

  const y = p.slice(33)
  if (y.compare(ZERO32) === 0) return false
  if (y.compare(EC_P) >= 0) return false
  if (t === 0x04 && p.length === 65) return true
  return false
}

function __isPointCompressed (p) {
  return p[0] !== 0x04
}

function isPointCompressed (p) {
  if (!isPoint(p)) return false
  return __isPointCompressed(p)
}

function isPrivate (x) {
  if (!isScalar(x)) return false
  return x.compare(ZERO32) > 0 && // > 0
    x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isSignature (value) {
  const r = value.slice(0, 32)
  const s = value.slice(32, 64)
  return Buffer.isBuffer(value) && value.length === 64 &&
    r.compare(EC_GROUP_ORDER) < 0 &&
    s.compare(EC_GROUP_ORDER) < 0
}

function assumeCompression (value, pubkey) {
  if (value === undefined && pubkey !== undefined) return __isPointCompressed(pubkey)
  if (value === undefined) return true
  return value
}

function fromBuffer (d) { return new BN(d) }
function toBuffer (d) { return d.toArrayLike(Buffer, 'be', 32) }
function decodeFrom (P) { return secp256k1.curve.decodePoint(P) }
function getEncoded (P, compressed) { return Buffer.from(P._encode(compressed)) }

function pointAdd (pA, pB, __compressed) {
  if (!isPoint(pA)) throw new TypeError(THROW_BAD_POINT)
  if (!isPoint(pB)) throw new TypeError(THROW_BAD_POINT)

  const a = decodeFrom(pA)
  const b = decodeFrom(pB)
  const pp = a.add(b)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed, pA)
  return getEncoded(pp, compressed)
}

function pointAddScalar (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  if (tweak.compare(ZERO32) === 0) return getEncoded(pp, compressed)

  const tt = fromBuffer(tweak)
  const qq = G.mul(tt)
  const uu = pp.add(qq)
  if (uu.isInfinity()) return null

  return getEncoded(uu, compressed)
}

function pointCompress (p, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)

  const pp = decodeFrom(p)
  if (pp.isInfinity()) throw new TypeError(THROW_BAD_POINT)

  const compressed = assumeCompression(__compressed, p)

  return getEncoded(pp, compressed)
}

function pointFromScalar (d, __compressed) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)

  const dd = fromBuffer(d)
  const pp = G.mul(dd)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed)
  return getEncoded(pp, compressed)
}

function pointMultiply (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  const tt = fromBuffer(tweak)
  const qq = pp.mul(tt)
  if (qq.isInfinity()) return null

  return getEncoded(qq, compressed)
}

function privateAdd (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.add(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function privateSub (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.sub(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function sign (hash, x) {
  return __sign(hash, x)
}

function signWithEntropy (hash, x, addData) {
  return __sign(hash, x, addData)
}

function __sign (hash, x, addData) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPrivate(x)) throw new TypeError(THROW_BAD_PRIVATE)
  if (addData !== undefined && !isScalar(addData)) throw new TypeError(THROW_BAD_EXTRA_DATA)

  const d = fromBuffer(x)
  const e = fromBuffer(hash)

  let r, s
  const checkSig = function (k) {
    const kI = fromBuffer(k)
    const Q = G.mul(kI)

    if (Q.isInfinity()) return false

    r = Q.x.umod(n)
    if (r.isZero() === 0) return false

    s = kI
      .invm(n)
      .mul(e.add(d.mul(r)))
      .umod(n)
    if (s.isZero() === 0) return false

    return true
  }

  deterministicGenerateK(hash, x, checkSig, isPrivate, addData)

  // enforce low S values, see bip62: 'low s values in signatures'
  if (s.cmp(nDiv2) > 0) {
    s = n.sub(s)
  }

  const buffer = Buffer.allocUnsafe(64)
  toBuffer(r).copy(buffer, 0)
  toBuffer(s).copy(buffer, 32)
  return buffer
}

function verify (hash, q, signature, strict) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPoint(q)) throw new TypeError(THROW_BAD_POINT)

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (1, isSignature enforces '< n - 1')
  if (!isSignature(signature)) throw new TypeError(THROW_BAD_SIGNATURE)

  const Q = decodeFrom(q)
  const r = fromBuffer(signature.slice(0, 32))
  const s = fromBuffer(signature.slice(32, 64))

  if (strict && s.cmp(nDiv2) > 0) {
    return false
  }

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (2, enforces '> 0')
  if (r.gtn(0) <= 0 /* || r.compareTo(n) >= 0 */) return false
  if (s.gtn(0) <= 0 /* || s.compareTo(n) >= 0 */) return false

  // 1.4.2 H = Hash(M), already done by the user
  // 1.4.3 e = H
  const e = fromBuffer(hash)

  // Compute s^-1
  const sInv = s.invm(n)

  // 1.4.4 Compute u1 = es^−1 mod n
  //               u2 = rs^−1 mod n
  const u1 = e.mul(sInv).umod(n)
  const u2 = r.mul(sInv).umod(n)

  // 1.4.5 Compute R = (xR, yR)
  //               R = u1G + u2Q
  const R = G.mulAdd(u1, Q, u2)

  // 1.4.5 (cont.) Enforce R is not at infinity
  if (R.isInfinity()) return false

  // 1.4.6 Convert the field element R.x to an integer
  const xR = R.x

  // 1.4.7 Set v = xR mod n
  const v = xR.umod(n)

  // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
  return v.eq(r)
}

module.exports = {
  isPoint,
  isPointCompressed,
  isPrivate,
  pointAdd,
  pointAddScalar,
  pointCompress,
  pointFromScalar,
  pointMultiply,
  privateAdd,
  privateSub,
  sign,
  signWithEntropy,
  verify
}

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>tiny-secp256k1",file:"node_modules\\tiny-secp256k1\\js.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\tiny-secp256k1\\rfc6979.js", {"buffer":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js","create-hmac":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\create-hmac\\browser.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctiny-secp256k1%5Crfc6979.js
      return function (require, module, exports) {
(function (Buffer){(function (){
const createHmac = require('create-hmac')

const ONE1 = Buffer.alloc(1, 1)
const ZERO1 = Buffer.alloc(1, 0)

// https://tools.ietf.org/html/rfc6979#section-3.2
function deterministicGenerateK (hash, x, checkSig, isPrivate, extraEntropy) {
  // Step A, ignored as hash already provided
  // Step B
  // Step C
  let k = Buffer.alloc(32, 0)
  let v = Buffer.alloc(32, 1)

  // Step D
  k = createHmac('sha256', k)
    .update(v)
    .update(ZERO1)
    .update(x)
    .update(hash)
    .update(extraEntropy || '')
    .digest()

  // Step E
  v = createHmac('sha256', k).update(v).digest()

  // Step F
  k = createHmac('sha256', k)
    .update(v)
    .update(ONE1)
    .update(x)
    .update(hash)
    .update(extraEntropy || '')
    .digest()

  // Step G
  v = createHmac('sha256', k).update(v).digest()

  // Step H1/H2a, ignored as tlen === qlen (256 bit)
  // Step H2b
  v = createHmac('sha256', k).update(v).digest()

  let T = v

  // Step H3, repeat until T is within the interval [1, n - 1] and is suitable for ECDSA
  while (!isPrivate(T) || !checkSig(T)) {
    k = createHmac('sha256', k)
      .update(v)
      .update(ZERO1)
      .digest()

    v = createHmac('sha256', k).update(v).digest()

    // Step H1/H2a, again, ignored as tlen === qlen (256 bit)
    // Step H2b again
    v = createHmac('sha256', k).update(v).digest()
    T = v
  }

  return T
}

module.exports = deterministicGenerateK

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>tiny-secp256k1",file:"node_modules\\tiny-secp256k1\\rfc6979.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\to-data-view\\index.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cto-data-view%5Cindex.js
      return function (require, module, exports) {
module.exports = function toDataView (data) {
  if (data instanceof Int8Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
    return new DataView(data.buffer, data.byteOffset, data.byteLength)
  }

  if (data instanceof ArrayBuffer) {
    return new DataView(data)
  }

  throw new TypeError('Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray')
}

      };
    };
  }
  }
}, {package:"base32-encode>to-data-view",file:"node_modules\\to-data-view\\index.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\tweetnacl-util\\nacl-util.js", {"buffer":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\browser-resolve\\empty.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctweetnacl-util%5Cnacl-util.js
      return function (require, module, exports) {
(function (Buffer){(function (){
// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
(function(root, f) {
  'use strict';
  if (typeof module !== 'undefined' && module.exports) module.exports = f();
  else if (root.nacl) root.nacl.util = f();
  else {
    root.nacl = {};
    root.nacl.util = f();
  }
}(this, function() {
  'use strict';

  var util = {};

  function validateBase64(s) {
    if (!(/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(s))) {
      throw new TypeError('invalid encoding');
    }
  }

  util.decodeUTF8 = function(s) {
    if (typeof s !== 'string') throw new TypeError('expected string');
    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
    return b;
  };

  util.encodeUTF8 = function(arr) {
    var i, s = [];
    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
    return decodeURIComponent(escape(s.join('')));
  };

  if (typeof atob === 'undefined') {
    // Node.js

    if (typeof Buffer.from !== 'undefined') {
       // Node v6 and later
      util.encodeBase64 = function (arr) { // v6 and later
          return Buffer.from(arr).toString('base64');
      };

      util.decodeBase64 = function (s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
      };

    } else {
      // Node earlier than v6
      util.encodeBase64 = function (arr) { // v6 and later
        return (new Buffer(arr)).toString('base64');
      };

      util.decodeBase64 = function(s) {
        validateBase64(s);
        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
      };
    }

  } else {
    // Browsers

    util.encodeBase64 = function(arr) {
      var i, s = [], len = arr.length;
      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
      return btoa(s.join(''));
    };

    util.decodeBase64 = function(s) {
      validateBase64(s);
      var i, d = atob(s), b = new Uint8Array(d.length);
      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
      return b;
    };

  }

  return util;

}));

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"eth-sig-util>tweetnacl-util",file:"node_modules\\tweetnacl-util\\nacl-util.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\tweetnacl\\nacl-fast.js", {"crypto":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\browser-resolve\\empty.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctweetnacl%5Cnacl-fast.js
      return function (require, module, exports) {
(function(nacl) {
'use strict';

// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/

var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};

//  Pluggable, initialized in high-level API below.
var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            // "expand 32-byte k"

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}

/*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/

var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  // t15 left as is

  // first car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  // second car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      // add
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma1
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Ch
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // K
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // w
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      // add
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma0
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Maj
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      // add
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          // add
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma0
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma1
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    // add
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = Math.floor((x[j] + 128) / 256);
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}

// Note: difference from C - smlen returned, not passed as argument.
function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  return n;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES,

  gf: gf,
  D: D,
  L: L,
  pack25519: pack25519,
  unpack25519: unpack25519,
  M: M,
  A: A,
  S: S,
  Z: Z,
  pow2523: pow2523,
  add: add,
  set25519: set25519,
  modL: modL,
  scalarmult: scalarmult,
  scalarbase: scalarbase,
};

/* High-level API */

function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  for (var i = 0; i < arguments.length; i++) {
    if (!(arguments[i] instanceof Uint8Array))
      throw new TypeError('unexpected type, use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return null;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  // Zero length arguments are considered not equal.
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  // Initialize PRNG if environment provides CSPRNG.
  // If not, methods calling randombytes will throw.
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    // Browsers.
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (typeof require !== 'undefined') {
    // Node.js.
    crypto = require('crypto');
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));

      };
    };
  }
  }
}, {package:"eth-sig-util>tweetnacl",file:"node_modules\\tweetnacl\\nacl-fast.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\errors.js", {"./native":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\native.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctypeforce%5Cerrors.js
      return function (require, module, exports) {
var native = require('./native')

function getTypeName (fn) {
  return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1]
}

function getValueTypeName (value) {
  return native.Nil(value) ? '' : getTypeName(value.constructor)
}

function getValue (value) {
  if (native.Function(value)) return ''
  if (native.String(value)) return JSON.stringify(value)
  if (value && native.Object(value)) return ''
  return value
}

function captureStackTrace (e, t) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(e, t)
  }
}

function tfJSON (type) {
  if (native.Function(type)) return type.toJSON ? type.toJSON() : getTypeName(type)
  if (native.Array(type)) return 'Array'
  if (type && native.Object(type)) return 'Object'

  return type !== undefined ? type : ''
}

function tfErrorString (type, value, valueTypeName) {
  var valueJson = getValue(value)

  return 'Expected ' + tfJSON(type) + ', got' +
    (valueTypeName !== '' ? ' ' + valueTypeName : '') +
    (valueJson !== '' ? ' ' + valueJson : '')
}

function TfTypeError (type, value, valueTypeName) {
  valueTypeName = valueTypeName || getValueTypeName(value)
  this.message = tfErrorString(type, value, valueTypeName)

  captureStackTrace(this, TfTypeError)
  this.__type = type
  this.__value = value
  this.__valueTypeName = valueTypeName
}

TfTypeError.prototype = Object.create(Error.prototype)
TfTypeError.prototype.constructor = TfTypeError

function tfPropertyErrorString (type, label, name, value, valueTypeName) {
  var description = '" of type '
  if (label === 'key') description = '" with key type '

  return tfErrorString('property "' + tfJSON(name) + description + tfJSON(type), value, valueTypeName)
}

function TfPropertyTypeError (type, property, label, value, valueTypeName) {
  if (type) {
    valueTypeName = valueTypeName || getValueTypeName(value)
    this.message = tfPropertyErrorString(type, label, property, value, valueTypeName)
  } else {
    this.message = 'Unexpected property "' + property + '"'
  }

  captureStackTrace(this, TfTypeError)
  this.__label = label
  this.__property = property
  this.__type = type
  this.__value = value
  this.__valueTypeName = valueTypeName
}

TfPropertyTypeError.prototype = Object.create(Error.prototype)
TfPropertyTypeError.prototype.constructor = TfTypeError

function tfCustomError (expected, actual) {
  return new TfTypeError(expected, {}, actual)
}

function tfSubError (e, property, label) {
  // sub child?
  if (e instanceof TfPropertyTypeError) {
    property = property + '.' + e.__property

    e = new TfPropertyTypeError(
      e.__type, property, e.__label, e.__value, e.__valueTypeName
    )

  // child?
  } else if (e instanceof TfTypeError) {
    e = new TfPropertyTypeError(
      e.__type, property, label, e.__value, e.__valueTypeName
    )
  }

  captureStackTrace(e)
  return e
}

module.exports = {
  TfTypeError: TfTypeError,
  TfPropertyTypeError: TfPropertyTypeError,
  tfCustomError: tfCustomError,
  tfSubError: tfSubError,
  tfJSON: tfJSON,
  getValueTypeName: getValueTypeName
}

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>typeforce",file:"node_modules\\typeforce\\errors.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\extra.js", {"../is-buffer/index.js":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\is-buffer\\index.js","./errors":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\errors.js","./native":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\native.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctypeforce%5Cextra.js
      return function (require, module, exports) {
(function (Buffer){(function (){
var NATIVE = require('./native')
var ERRORS = require('./errors')

function _Buffer (value) {
  return Buffer.isBuffer(value)
}

function Hex (value) {
  return typeof value === 'string' && /^([0-9a-f]{2})+$/i.test(value)
}

function _LengthN (type, length) {
  var name = type.toJSON()

  function Length (value) {
    if (!type(value)) return false
    if (value.length === length) return true

    throw ERRORS.tfCustomError(name + '(Length: ' + length + ')', name + '(Length: ' + value.length + ')')
  }
  Length.toJSON = function () { return name }

  return Length
}

var _ArrayN = _LengthN.bind(null, NATIVE.Array)
var _BufferN = _LengthN.bind(null, _Buffer)
var _HexN = _LengthN.bind(null, Hex)
var _StringN = _LengthN.bind(null, NATIVE.String)

function Range (a, b, f) {
  f = f || NATIVE.Number
  function _range (value, strict) {
    return f(value, strict) && (value > a) && (value < b)
  }
  _range.toJSON = function () {
    return `${f.toJSON()} between [${a}, ${b}]`
  }
  return _range
}

var INT53_MAX = Math.pow(2, 53) - 1

function Finite (value) {
  return typeof value === 'number' && isFinite(value)
}
function Int8 (value) { return ((value << 24) >> 24) === value }
function Int16 (value) { return ((value << 16) >> 16) === value }
function Int32 (value) { return (value | 0) === value }
function Int53 (value) {
  return typeof value === 'number' &&
    value >= -INT53_MAX &&
    value <= INT53_MAX &&
    Math.floor(value) === value
}
function UInt8 (value) { return (value & 0xff) === value }
function UInt16 (value) { return (value & 0xffff) === value }
function UInt32 (value) { return (value >>> 0) === value }
function UInt53 (value) {
  return typeof value === 'number' &&
    value >= 0 &&
    value <= INT53_MAX &&
    Math.floor(value) === value
}

var types = {
  ArrayN: _ArrayN,
  Buffer: _Buffer,
  BufferN: _BufferN,
  Finite: Finite,
  Hex: Hex,
  HexN: _HexN,
  Int8: Int8,
  Int16: Int16,
  Int32: Int32,
  Int53: Int53,
  Range: Range,
  StringN: _StringN,
  UInt8: UInt8,
  UInt16: UInt16,
  UInt32: UInt32,
  UInt53: UInt53
}

for (var typeName in types) {
  types[typeName].toJSON = function (t) {
    return t
  }.bind(null, typeName)
}

module.exports = types

}).call(this)}).call(this,{"isBuffer":require("../is-buffer/index.js")})

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>typeforce",file:"node_modules\\typeforce\\extra.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\index.js", {"./errors":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\errors.js","./extra":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\extra.js","./native":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\native.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctypeforce%5Cindex.js
      return function (require, module, exports) {
var ERRORS = require('./errors')
var NATIVE = require('./native')

// short-hand
var tfJSON = ERRORS.tfJSON
var TfTypeError = ERRORS.TfTypeError
var TfPropertyTypeError = ERRORS.TfPropertyTypeError
var tfSubError = ERRORS.tfSubError
var getValueTypeName = ERRORS.getValueTypeName

var TYPES = {
  arrayOf: function arrayOf (type, options) {
    type = compile(type)
    options = options || {}

    function _arrayOf (array, strict) {
      if (!NATIVE.Array(array)) return false
      if (NATIVE.Nil(array)) return false
      if (options.minLength !== undefined && array.length < options.minLength) return false
      if (options.maxLength !== undefined && array.length > options.maxLength) return false
      if (options.length !== undefined && array.length !== options.length) return false

      return array.every(function (value, i) {
        try {
          return typeforce(type, value, strict)
        } catch (e) {
          throw tfSubError(e, i)
        }
      })
    }
    _arrayOf.toJSON = function () {
      var str = '[' + tfJSON(type) + ']'
      if (options.length !== undefined) {
        str += '{' + options.length + '}'
      } else if (options.minLength !== undefined || options.maxLength !== undefined) {
        str += '{' +
          (options.minLength === undefined ? 0 : options.minLength) + ',' +
          (options.maxLength === undefined ? Infinity : options.maxLength) + '}'
      }
      return str
    }

    return _arrayOf
  },

  maybe: function maybe (type) {
    type = compile(type)

    function _maybe (value, strict) {
      return NATIVE.Nil(value) || type(value, strict, maybe)
    }
    _maybe.toJSON = function () { return '?' + tfJSON(type) }

    return _maybe
  },

  map: function map (propertyType, propertyKeyType) {
    propertyType = compile(propertyType)
    if (propertyKeyType) propertyKeyType = compile(propertyKeyType)

    function _map (value, strict) {
      if (!NATIVE.Object(value)) return false
      if (NATIVE.Nil(value)) return false

      for (var propertyName in value) {
        try {
          if (propertyKeyType) {
            typeforce(propertyKeyType, propertyName, strict)
          }
        } catch (e) {
          throw tfSubError(e, propertyName, 'key')
        }

        try {
          var propertyValue = value[propertyName]
          typeforce(propertyType, propertyValue, strict)
        } catch (e) {
          throw tfSubError(e, propertyName)
        }
      }

      return true
    }

    if (propertyKeyType) {
      _map.toJSON = function () {
        return '{' + tfJSON(propertyKeyType) + ': ' + tfJSON(propertyType) + '}'
      }
    } else {
      _map.toJSON = function () { return '{' + tfJSON(propertyType) + '}' }
    }

    return _map
  },

  object: function object (uncompiled) {
    var type = {}

    for (var typePropertyName in uncompiled) {
      type[typePropertyName] = compile(uncompiled[typePropertyName])
    }

    function _object (value, strict) {
      if (!NATIVE.Object(value)) return false
      if (NATIVE.Nil(value)) return false

      var propertyName

      try {
        for (propertyName in type) {
          var propertyType = type[propertyName]
          var propertyValue = value[propertyName]

          typeforce(propertyType, propertyValue, strict)
        }
      } catch (e) {
        throw tfSubError(e, propertyName)
      }

      if (strict) {
        for (propertyName in value) {
          if (type[propertyName]) continue

          throw new TfPropertyTypeError(undefined, propertyName)
        }
      }

      return true
    }
    _object.toJSON = function () { return tfJSON(type) }

    return _object
  },

  anyOf: function anyOf () {
    var types = [].slice.call(arguments).map(compile)

    function _anyOf (value, strict) {
      return types.some(function (type) {
        try {
          return typeforce(type, value, strict)
        } catch (e) {
          return false
        }
      })
    }
    _anyOf.toJSON = function () { return types.map(tfJSON).join('|') }

    return _anyOf
  },

  allOf: function allOf () {
    var types = [].slice.call(arguments).map(compile)

    function _allOf (value, strict) {
      return types.every(function (type) {
        try {
          return typeforce(type, value, strict)
        } catch (e) {
          return false
        }
      })
    }
    _allOf.toJSON = function () { return types.map(tfJSON).join(' & ') }

    return _allOf
  },

  quacksLike: function quacksLike (type) {
    function _quacksLike (value) {
      return type === getValueTypeName(value)
    }
    _quacksLike.toJSON = function () { return type }

    return _quacksLike
  },

  tuple: function tuple () {
    var types = [].slice.call(arguments).map(compile)

    function _tuple (values, strict) {
      if (NATIVE.Nil(values)) return false
      if (NATIVE.Nil(values.length)) return false
      if (strict && (values.length !== types.length)) return false

      return types.every(function (type, i) {
        try {
          return typeforce(type, values[i], strict)
        } catch (e) {
          throw tfSubError(e, i)
        }
      })
    }
    _tuple.toJSON = function () { return '(' + types.map(tfJSON).join(', ') + ')' }

    return _tuple
  },

  value: function value (expected) {
    function _value (actual) {
      return actual === expected
    }
    _value.toJSON = function () { return expected }

    return _value
  }
}

// TODO: deprecate
TYPES.oneOf = TYPES.anyOf

function compile (type) {
  if (NATIVE.String(type)) {
    if (type[0] === '?') return TYPES.maybe(type.slice(1))

    return NATIVE[type] || TYPES.quacksLike(type)
  } else if (type && NATIVE.Object(type)) {
    if (NATIVE.Array(type)) {
      if (type.length !== 1) throw new TypeError('Expected compile() parameter of type Array of length 1')
      return TYPES.arrayOf(type[0])
    }

    return TYPES.object(type)
  } else if (NATIVE.Function(type)) {
    return type
  }

  return TYPES.value(type)
}

function typeforce (type, value, strict, surrogate) {
  if (NATIVE.Function(type)) {
    if (type(value, strict)) return true

    throw new TfTypeError(surrogate || type, value)
  }

  // JIT
  return typeforce(compile(type), value, strict)
}

// assign types to typeforce function
for (var typeName in NATIVE) {
  typeforce[typeName] = NATIVE[typeName]
}

for (typeName in TYPES) {
  typeforce[typeName] = TYPES[typeName]
}

var EXTRA = require('./extra')
for (typeName in EXTRA) {
  typeforce[typeName] = EXTRA[typeName]
}

typeforce.compile = compile
typeforce.TfTypeError = TfTypeError
typeforce.TfPropertyTypeError = TfPropertyTypeError

module.exports = typeforce

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>typeforce",file:"node_modules\\typeforce\\index.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\typeforce\\native.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Ctypeforce%5Cnative.js
      return function (require, module, exports) {
var types = {
  Array: function (value) { return value !== null && value !== undefined && value.constructor === Array },
  Boolean: function (value) { return typeof value === 'boolean' },
  Function: function (value) { return typeof value === 'function' },
  Nil: function (value) { return value === undefined || value === null },
  Number: function (value) { return typeof value === 'number' },
  Object: function (value) { return typeof value === 'object' },
  String: function (value) { return typeof value === 'string' },
  '': function () { return true }
}

// TODO: deprecate
types.Null = types.Nil

for (var typeName in types) {
  types[typeName].toJSON = function (t) {
    return t
  }.bind(null, typeName)
}

module.exports = types

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>typeforce",file:"node_modules\\typeforce\\native.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\uint8arrays\\concat.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cuint8arrays%5Cconcat.js
      return function (require, module, exports) {
'use strict'

/**
 * Returns a new Uint8Array created by concatenating the passed ArrayLikes
 *
 * @param {Array<ArrayLike<number>>} arrays
 * @param {number} [length]
 */
function concat (arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0)
  }

  const output = new Uint8Array(length)
  let offset = 0

  for (const arr of arrays) {
    output.set(arr, offset)
    offset += arr.length
  }

  return output
}

module.exports = concat

      };
    };
  }
  }
}, {package:"@ensdomains/content-hash>cids>uint8arrays",file:"node_modules\\uint8arrays\\concat.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\uint8arrays\\equals.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cuint8arrays%5Cequals.js
      return function (require, module, exports) {
'use strict'

/**
 * Returns true if the two passed Uint8Arrays have the same content
 *
 * @param {Uint8Array} a
 * @param {Uint8Array} b
 */
function equals (a, b) {
  if (a === b) {
    return true
  }

  if (a.byteLength !== b.byteLength) {
    return false
  }

  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }

  return true
}

module.exports = equals

      };
    };
  }
  }
}, {package:"@ensdomains/content-hash>cids>uint8arrays",file:"node_modules\\uint8arrays\\equals.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\uint8arrays\\from-string.js", {"multibase":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\multibase\\src\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cuint8arrays%5Cfrom-string.js
      return function (require, module, exports) {
'use strict'

const { encoding: getCodec } = require('multibase')
const utf8Encoder = new TextEncoder()

/**
 * @typedef {__import__('multibase/src/types').BaseName | 'utf8' | 'utf-8' | 'ascii' | undefined} SupportedEncodings
 */

/**
 * Interprets each character in a string as a byte and
 * returns a Uint8Array of those bytes.
 *
 * @param {string} string - The string to turn into an array
 */
function asciiStringToUint8Array (string) {
  const array = new Uint8Array(string.length)

  for (let i = 0; i < string.length; i++) {
    array[i] = string.charCodeAt(i)
  }

  return array
}

/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {string} string
 * @param {SupportedEncodings} [encoding=utf8] - utf8, base16, base64, base64urlpad, etc
 * @returns {Uint8Array}
 */
function fromString (string, encoding = 'utf8') {
  if (encoding === 'utf8' || encoding === 'utf-8') {
    return utf8Encoder.encode(string)
  }

  if (encoding === 'ascii') {
    return asciiStringToUint8Array(string)
  }

  return getCodec(encoding).decode(string)
}

module.exports = fromString

      };
    };
  }
  }
}, {package:"@ensdomains/content-hash>cids>uint8arrays",file:"node_modules\\uint8arrays\\from-string.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\uint8arrays\\to-string.js", {"multibase":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\multibase\\src\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cuint8arrays%5Cto-string.js
      return function (require, module, exports) {
'use strict'

const { encoding: getCodec } = require('multibase')
const utf8Decoder = new TextDecoder('utf8')

/**
 * @typedef {__import__('multibase/src/types').BaseName | 'utf8' | 'utf-8' | 'ascii' | undefined} SupportedEncodings
 */

/**
 * Turns a Uint8Array of bytes into a string with each
 * character being the char code of the corresponding byte
 *
 * @param {Uint8Array} array - The array to turn into a string
 */
function uint8ArrayToAsciiString (array) {
  let string = ''

  for (let i = 0; i < array.length; i++) {
    string += String.fromCharCode(array[i])
  }
  return string
}

/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array - The array to turn into a string
 * @param {SupportedEncodings} [encoding=utf8] - The encoding to use
 * @returns {string}
 */
function toString (array, encoding = 'utf8') {
  if (encoding === 'utf8' || encoding === 'utf-8') {
    return utf8Decoder.decode(array)
  }

  if (encoding === 'ascii') {
    return uint8ArrayToAsciiString(array)
  }

  return getCodec(encoding).encode(array)
}

module.exports = toString

      };
    };
  }
  }
}, {package:"@ensdomains/content-hash>cids>uint8arrays",file:"node_modules\\uint8arrays\\to-string.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\varuint-bitcoin\\index.js", {"safe-buffer":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\safe-buffer\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cvaruint-bitcoin%5Cindex.js
      return function (require, module, exports) {
'use strict'
var Buffer = require('safe-buffer').Buffer

// Number.MAX_SAFE_INTEGER
var MAX_SAFE_INTEGER = 9007199254740991

function checkUInt53 (n) {
  if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError('value out of range')
}

function encode (number, buffer, offset) {
  checkUInt53(number)

  if (!buffer) buffer = Buffer.allocUnsafe(encodingLength(number))
  if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance')
  if (!offset) offset = 0

  // 8 bit
  if (number < 0xfd) {
    buffer.writeUInt8(number, offset)
    encode.bytes = 1

  // 16 bit
  } else if (number <= 0xffff) {
    buffer.writeUInt8(0xfd, offset)
    buffer.writeUInt16LE(number, offset + 1)
    encode.bytes = 3

  // 32 bit
  } else if (number <= 0xffffffff) {
    buffer.writeUInt8(0xfe, offset)
    buffer.writeUInt32LE(number, offset + 1)
    encode.bytes = 5

  // 64 bit
  } else {
    buffer.writeUInt8(0xff, offset)
    buffer.writeUInt32LE(number >>> 0, offset + 1)
    buffer.writeUInt32LE((number / 0x100000000) | 0, offset + 5)
    encode.bytes = 9
  }

  return buffer
}

function decode (buffer, offset) {
  if (!Buffer.isBuffer(buffer)) throw new TypeError('buffer must be a Buffer instance')
  if (!offset) offset = 0

  var first = buffer.readUInt8(offset)

  // 8 bit
  if (first < 0xfd) {
    decode.bytes = 1
    return first

  // 16 bit
  } else if (first === 0xfd) {
    decode.bytes = 3
    return buffer.readUInt16LE(offset + 1)

  // 32 bit
  } else if (first === 0xfe) {
    decode.bytes = 5
    return buffer.readUInt32LE(offset + 1)

  // 64 bit
  } else {
    decode.bytes = 9
    var lo = buffer.readUInt32LE(offset + 1)
    var hi = buffer.readUInt32LE(offset + 5)
    var number = hi * 0x0100000000 + lo
    checkUInt53(number)

    return number
  }
}

function encodingLength (number) {
  checkUInt53(number)

  return (
    number < 0xfd ? 1
      : number <= 0xffff ? 3
        : number <= 0xffffffff ? 5
          : 9
  )
}

module.exports = { encode: encode, decode: decode, encodingLength: encodingLength }

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>varuint-bitcoin",file:"node_modules\\varuint-bitcoin\\index.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\web-encoding\\src\\lib.js", {"util":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\util\\util.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cweb-encoding%5Csrc%5Clib.js
      return function (require, module, exports) {
"use strict"

exports.TextEncoder =
  typeof TextEncoder !== "undefined" ? TextEncoder : require("util").TextEncoder

exports.TextDecoder =
  typeof TextDecoder !== "undefined" ? TextDecoder : require("util").TextDecoder

      };
    };
  }
  }
}, {package:"@ensdomains/content-hash>multihashes>web-encoding",file:"node_modules\\web-encoding\\src\\lib.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\whatwg-fetch\\dist\\fetch.umd.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cwhatwg-fetch%5Cdist%5Cfetch.umd.js
      return function (require, module, exports) {
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.WHATWGFetch = {})));
}(this, (function (exports) { 'use strict';

  var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    (typeof global !== 'undefined' && global);

  var support = {
    searchParams: 'URLSearchParams' in global,
    iterable: 'Symbol' in global && 'iterator' in Symbol,
    blob:
      'FileReader' in global &&
      'Blob' in global &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in global,
    arrayBuffer: 'ArrayBuffer' in global
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          var isConsumed = consumed(this);
          if (isConsumed) {
            return isConsumed
          }
          if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
            return Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            )
          } else {
            return Promise.resolve(this._bodyArrayBuffer)
          }
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = global.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && global.location.href ? global.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer &&
          request.headers.get('Content-Type') &&
          request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!global.fetch) {
    global.fetch = fetch;
    global.Headers = Headers;
    global.Request = Request;
    global.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

      };
    };
  }
  }
}, {package:"@metamask/smart-transactions-controller>isomorphic-fetch>whatwg-fetch",file:"node_modules\\whatwg-fetch\\dist\\fetch.umd.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\wif\\index.js", {"bs58check":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\bs58check\\index.js","buffer":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\buffer\\index.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cnode_modules%5Cwif%5Cindex.js
      return function (require, module, exports) {
(function (Buffer){(function (){
var bs58check = require('bs58check')

function decodeRaw (buffer, version) {
  // check version only if defined
  if (version !== undefined && buffer[0] !== version) throw new Error('Invalid network version')

  // uncompressed
  if (buffer.length === 33) {
    return {
      version: buffer[0],
      privateKey: buffer.slice(1, 33),
      compressed: false
    }
  }

  // invalid length
  if (buffer.length !== 34) throw new Error('Invalid WIF length')

  // invalid compression flag
  if (buffer[33] !== 0x01) throw new Error('Invalid compression flag')

  return {
    version: buffer[0],
    privateKey: buffer.slice(1, 33),
    compressed: true
  }
}

function encodeRaw (version, privateKey, compressed) {
  var result = new Buffer(compressed ? 34 : 33)

  result.writeUInt8(version, 0)
  privateKey.copy(result, 1)

  if (compressed) {
    result[33] = 0x01
  }

  return result
}

function decode (string, version) {
  return decodeRaw(bs58check.decode(string), version)
}

function encode (version, privateKey, compressed) {
  if (typeof version === 'number') return bs58check.encode(encodeRaw(version, privateKey, compressed))

  return bs58check.encode(
    encodeRaw(
      version.version,
      version.privateKey,
      version.compressed
    )
  )
}

module.exports = {
  decode: decode,
  decodeRaw: decodeRaw,
  encode: encode,
  encodeRaw: encodeRaw
}

}).call(this)}).call(this,require("buffer").Buffer)

      };
    };
  }
  }
}, {package:"@metamask/eth-trezor-keyring>@trezor/connect-web>@trezor/connect>@trezor/utxo-lib>wif",file:"node_modules\\wif\\index.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\alarms.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cshared%5Cconstants%5Calarms.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM = exports.AUTO_LOCK_TIMEOUT_ALARM = void 0;
const AUTO_LOCK_TIMEOUT_ALARM = 'AUTO_LOCK_TIMEOUT_ALARM';
exports.AUTO_LOCK_TIMEOUT_ALARM = AUTO_LOCK_TIMEOUT_ALARM;
const METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM = 'METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM';
exports.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM = METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM;

      };
    };
  }
  }
}, {package:"$root$",file:"shared\\constants\\alarms.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\smartTransactions.js", {"./time":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\time.ts"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cshared%5Cconstants%5CsmartTransactions.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME = exports.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER = exports.FALLBACK_SMART_TRANSACTIONS_DEADLINE = void 0;
var _time = require("./time");
const FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME = _time.SECOND * 10;
exports.FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME = FALLBACK_SMART_TRANSACTIONS_REFRESH_TIME;
const FALLBACK_SMART_TRANSACTIONS_DEADLINE = 180;
exports.FALLBACK_SMART_TRANSACTIONS_DEADLINE = FALLBACK_SMART_TRANSACTIONS_DEADLINE;
const FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER = 2;
exports.FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER = FALLBACK_SMART_TRANSACTIONS_MAX_FEE_MULTIPLIER;

      };
    };
  }
  }
}, {package:"$root$",file:"shared\\constants\\smartTransactions.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\test-flags.js", {}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Cshared%5Cconstants%5Ctest-flags.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTION_QUEUE_METRICS_E2E_TEST = void 0;
const ACTION_QUEUE_METRICS_E2E_TEST = 'action_queue_metrics_e2e_test';
exports.ACTION_QUEUE_METRICS_E2E_TEST = ACTION_QUEUE_METRICS_E2E_TEST;

      };
    };
  }
  }
}, {package:"$root$",file:"shared\\constants\\test-flags.js",}],
["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\background.js", {"../../shared/constants/app":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\app.ts","../../shared/constants/metametrics":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\constants\\metametrics.ts","../../shared/modules/browser-runtime.utils":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\modules\\browser-runtime.utils.js","../../shared/modules/mv3.utils":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\modules\\mv3.utils.js","../../shared/modules/object.utils":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\shared\\modules\\object.utils.js","./first-time-state":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\first-time-state.js","./lib/createStreamSink":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\createStreamSink.js","./lib/ens-ipfs/setup":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\ens-ipfs\\setup.js","./lib/get-first-preferred-lang-code":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\get-first-preferred-lang-code.js","./lib/getObjStructure":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\getObjStructure.js","./lib/local-store":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\local-store.js","./lib/migrator":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\migrator\\index.js","./lib/network-store":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\network-store.js","./lib/notification-manager":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\notification-manager.js","./lib/setupSentry":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\setupSentry.js","./lib/util":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\lib\\util.ts","./metamask-controller":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\metamask-controller.js","./migrations":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\migrations\\index.js","./platforms/extension":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\platforms\\extension.js","@metamask/obs-store":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\@metamask\\obs-store\\dist\\index.js","debounce-stream":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\debounce-stream\\index.js","end-of-stream":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\end-of-stream\\index.js","eth-rpc-errors":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\eth-rpc-errors\\dist\\index.js","events":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\browserify\\node_modules\\events\\events.js","extension-port-stream":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\extension-port-stream\\dist\\index.js","loglevel":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\loglevel\\lib\\loglevel.js","pump":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\pump\\index.js","webextension-polyfill":"D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\node_modules\\webextension-polyfill\\dist\\browser-polyfill.js"}, function(){
  with (this.scopeTerminator) {
  with (this.globalThis) {
    return function() {
      'use strict';
      // source: D:%5Conedrive%5Csdu%5CResearch%5CWeb3%20Signature%20Authentication%5Cdemo%5Cmetamask-extension%5Capp%5Cscripts%5Cbackground.js
      return function (require, module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStateFromPersistence = loadStateFromPersistence;
exports.setupController = setupController;
exports.statePersistenceEvents = void 0;
var _events = _interopRequireDefault(require("events"));
var _endOfStream = _interopRequireDefault(require("end-of-stream"));
var _pump = _interopRequireDefault(require("pump"));
var _debounceStream = _interopRequireDefault(require("debounce-stream"));
var _loglevel = _interopRequireDefault(require("loglevel"));
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _obsStore = require("@metamask/obs-store");
var _extensionPortStream = _interopRequireDefault(require("extension-port-stream"));
var _ethRpcErrors = require("eth-rpc-errors");
var _app = require("../../shared/constants/app");
var _metametrics = require("../../shared/constants/metametrics");
var _browserRuntime = require("../../shared/modules/browser-runtime.utils");
var _mv = require("../../shared/modules/mv3.utils");
var _object = require("../../shared/modules/object.utils");
var _util = require("./lib/util");
var _migrations = _interopRequireDefault(require("./migrations"));
var _migrator = _interopRequireDefault(require("./lib/migrator"));
var _extension = _interopRequireDefault(require("./platforms/extension"));
var _localStore = _interopRequireDefault(require("./lib/local-store"));
var _networkStore = _interopRequireDefault(require("./lib/network-store"));
var _setupSentry = require("./lib/setupSentry");
var _createStreamSink = _interopRequireDefault(require("./lib/createStreamSink"));
var _notificationManager = _interopRequireWildcard(require("./lib/notification-manager"));
var _metamaskController = _interopRequireWildcard(require("./metamask-controller"));
var _firstTimeState = _interopRequireDefault(require("./first-time-state"));
var _getFirstPreferredLangCode = _interopRequireDefault(require("./lib/get-first-preferred-lang-code"));
var _getObjStructure = _interopRequireDefault(require("./lib/getObjStructure"));
var _setup = _interopRequireDefault(require("./lib/ens-ipfs/setup"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file The entry point for the web extension singleton process.
 */

/* eslint-enable import/first */

/* eslint-disable import/order */
/* eslint-enable import/order */
const {
  sentry
} = global;
const firstTimeState = {
  ..._firstTimeState.default
};
const metamaskInternalProcessHash = {
  [_app.ENVIRONMENT_TYPE_POPUP]: true,
  [_app.ENVIRONMENT_TYPE_NOTIFICATION]: true,
  [_app.ENVIRONMENT_TYPE_FULLSCREEN]: true
};
const metamaskBlockedPorts = ['trezor-connect'];
_loglevel.default.setDefaultLevel(true ? 'debug' : 'info');
const platform = new _extension.default();
const notificationManager = new _notificationManager.default();
let popupIsOpen = false;
let notificationIsOpen = false;
let uiIsTriggering = false;
const openMetamaskTabsIDs = {};
const openMetamaskConnections = new Map();
const requestAccountTabIds = {};
let controller;

// state persistence
const inTest = false;
const localStore = inTest ? new _networkStore.default() : new _localStore.default();
let versionedData;
if (inTest || true) {
  global.stateHooks.metamaskGetState = localStore.get.bind(localStore);
}
const phishingPageUrl = new URL("https://metamask.github.io/phishing-warning/v2.1.0/");
const ONE_SECOND_IN_MILLISECONDS = 1_000;
// Timeout for initializing phishing warning page.
const PHISHING_WARNING_PAGE_TIMEOUT = ONE_SECOND_IN_MILLISECONDS;
const ACK_KEEP_ALIVE_MESSAGE = 'ACK_KEEP_ALIVE_MESSAGE';
const WORKER_KEEP_ALIVE_MESSAGE = 'WORKER_KEEP_ALIVE_MESSAGE';

// Event emitter for state persistence
const statePersistenceEvents = new _events.default();

/**
 * This deferred Promise is used to track whether initialization has finished.
 *
 * It is very important to ensure that `resolveInitialization` is *always*
 * called once initialization has completed, and that `rejectInitialization` is
 * called if initialization fails in an unrecoverable way.
 */
exports.statePersistenceEvents = statePersistenceEvents;
const {
  promise: isInitialized,
  resolve: resolveInitialization,
  reject: rejectInitialization
} = (0, _util.deferredPromise)();

/**
 * Sends a message to the dapp(s) content script to signal it can connect to MetaMask background as
 * the backend is not active. It is required to re-connect dapps after service worker re-activates.
 * For non-dapp pages, the message will be sent and ignored.
 */
const sendReadyMessageToTabs = async () => {
  const tabs = await _webextensionPolyfill.default.tabs.query({
    /**
     * Only query tabs that our extension can run in. To do this, we query for all URLs that our
     * extension can inject scripts in, which is by using the "<all_urls>" value and __without__
     * the "tabs" manifest permission. If we included the "tabs" permission, this would also fetch
     * URLs that we'd not be able to inject in, e.g. chrome://pages, chrome://extension, which
     * is not what we'd want.
     *
     * You might be wondering, how does the "url" param work without the "tabs" permission?
     *
     * @see {@link https://bugs.chromium.org/p/chromium/issues/detail?id=661311#c1}
     *  "If the extension has access to inject scripts into Tab, then we can return the url
     *   of Tab (because the extension could just inject a script to message the location.href)."
     */
    url: '<all_urls>',
    windowType: 'normal'
  }).then(result => {
    (0, _browserRuntime.checkForLastErrorAndLog)();
    return result;
  }).catch(() => {
    (0, _browserRuntime.checkForLastErrorAndLog)();
  });

  /** @todo we should only sendMessage to dapp tabs, not all tabs. */
  for (const tab of tabs) {
    _webextensionPolyfill.default.tabs.sendMessage(tab.id, {
      name: _app.EXTENSION_MESSAGES.READY
    }).then(() => {
      (0, _browserRuntime.checkForLastErrorAndLog)();
    }).catch(() => {
      // An error may happen if the contentscript is blocked from loading,
      // and thus there is no runtime.onMessage handler to listen to the message.
      (0, _browserRuntime.checkForLastErrorAndLog)();
    });
  }
};

// These are set after initialization
let connectRemote;
let connectExternal;
_webextensionPolyfill.default.runtime.onConnect.addListener(async (...args) => {
  // Queue up connection attempts here, waiting until after initialization
  await isInitialized;
  const remotePort = args[0];
  const {
    sender
  } = remotePort;
  const url = sender === null || sender === void 0 ? void 0 : sender.url;
  const detectedProcessName = url ? (0, _util.getEnvironmentType)(url) : '';
  const connectionId = generateConnectionId(remotePort, detectedProcessName);
  const openConnections = openMetamaskConnections.get(connectionId) || 0;
  if (openConnections === 0 || detectedProcessName === 'background' && openConnections < 2
  // 2 background connections are allowed, one for phishing warning page and one for the ledger bridge keyring
  ) {
    // This is set in `setupController`, which is called as part of initialization
    connectRemote(...args);
    openMetamaskConnections.set(connectionId, openConnections + 1);
  } else {
    throw new Error('CONNECTION_ALREADY_EXISTS');
  }
});
_webextensionPolyfill.default.runtime.onConnectExternal.addListener(async (...args) => {
  // Queue up connection attempts here, waiting until after initialization
  await isInitialized;

  // This is set in `setupController`, which is called as part of initialization
  connectExternal(...args);
});

/**
 * @typedef {__import__('../../shared/constants/transaction').TransactionMeta} TransactionMeta
 */

/**
 * The data emitted from the MetaMaskController.store EventEmitter, also used to initialize the MetaMaskController. Available in UI on React state as state.metamask.
 *
 * @typedef MetaMaskState
 * @property {boolean} isInitialized - Whether the first vault has been created.
 * @property {boolean} isUnlocked - Whether the vault is currently decrypted and accounts are available for selection.
 * @property {boolean} isAccountMenuOpen - Represents whether the main account selection UI is currently displayed.
 * @property {boolean} isNetworkMenuOpen - Represents whether the main network selection UI is currently displayed.
 * @property {object} identities - An object matching lower-case hex addresses to Identity objects with "address" and "name" (nickname) keys.
 * @property {object} unapprovedTxs - An object mapping transaction hashes to unapproved transactions.
 * @property {object} networkConfigurations - A list of network configurations, containing RPC provider details (eg chainId, rpcUrl, rpcPreferences).
 * @property {Array} addressBook - A list of previously sent to addresses.
 * @property {object} contractExchangeRates - Info about current token prices.
 * @property {Array} tokens - Tokens held by the current user, including their balances.
 * @property {object} send - TODO: Document
 * @property {boolean} useBlockie - Indicates preferred user identicon format. True for blockie, false for Jazzicon.
 * @property {object} featureFlags - An object for optional feature flags.
 * @property {boolean} welcomeScreen - True if welcome screen should be shown.
 * @property {string} currentLocale - A locale string matching the user's preferred display language.
 * @property {object} providerConfig - The current selected network provider.
 * @property {string} providerConfig.rpcUrl - The address for the RPC API, if using an RPC API.
 * @property {string} providerConfig.type - An identifier for the type of network selected, allows MetaMask to use custom provider strategies for known networks.
 * @property {string} networkId - The stringified number of the current network ID.
 * @property {string} networkStatus - Either "unknown", "available", "unavailable", or "blocked", depending on the status of the currently selected network.
 * @property {object} accounts - An object mapping lower-case hex addresses to objects with "balance" and "address" keys, both storing hex string values.
 * @property {hex} currentBlockGasLimit - The most recently seen block gas limit, in a lower case hex prefixed string.
 * @property {TransactionMeta[]} currentNetworkTxList - An array of transactions associated with the currently selected network.
 * @property {object} unapprovedMsgs - An object of messages pending approval, mapping a unique ID to the options.
 * @property {number} unapprovedMsgCount - The number of messages in unapprovedMsgs.
 * @property {object} unapprovedPersonalMsgs - An object of messages pending approval, mapping a unique ID to the options.
 * @property {number} unapprovedPersonalMsgCount - The number of messages in unapprovedPersonalMsgs.
 * @property {object} unapprovedEncryptionPublicKeyMsgs - An object of messages pending approval, mapping a unique ID to the options.
 * @property {number} unapprovedEncryptionPublicKeyMsgCount - The number of messages in EncryptionPublicKeyMsgs.
 * @property {object} unapprovedDecryptMsgs - An object of messages pending approval, mapping a unique ID to the options.
 * @property {number} unapprovedDecryptMsgCount - The number of messages in unapprovedDecryptMsgs.
 * @property {object} unapprovedTypedMsgs - An object of messages pending approval, mapping a unique ID to the options.
 * @property {number} unapprovedTypedMsgCount - The number of messages in unapprovedTypedMsgs.
 * @property {number} pendingApprovalCount - The number of pending request in the approval controller.
 * @property {string[]} keyringTypes - An array of unique keyring identifying strings, representing available strategies for creating accounts.
 * @property {Keyring[]} keyrings - An array of keyring descriptions, summarizing the accounts that are available for use, and what keyrings they belong to.
 * @property {string} selectedAddress - A lower case hex string of the currently selected address.
 * @property {string} currentCurrency - A string identifying the user's preferred display currency, for use in showing conversion rates.
 * @property {number} conversionRate - A number representing the current exchange rate from the user's preferred currency to Ether.
 * @property {number} conversionDate - A unix epoch date (ms) for the time the current conversion rate was last retrieved.
 * @property {boolean} forgottenPassword - Returns true if the user has initiated the password recovery screen, is recovering from seed phrase.
 */

/**
 * @typedef VersionedData
 * @property {MetaMaskState} data - The data emitted from MetaMask controller, or used to initialize it.
 * @property {number} version - The latest migration version that has been run.
 */

/**
 * Initializes the MetaMask controller, and sets up all platform configuration.
 *
 * @returns {Promise} Setup complete.
 */
async function initialize() {
  try {
    const initState = await loadStateFromPersistence();
    const initLangCode = await (0, _getFirstPreferredLangCode.default)();
    let isFirstMetaMaskControllerSetup;
    if (_mv.isManifestV3) {
      const sessionData = await _webextensionPolyfill.default.storage.session.get(['isFirstMetaMaskControllerSetup']);
      isFirstMetaMaskControllerSetup = (sessionData === null || sessionData === void 0 ? void 0 : sessionData.isFirstMetaMaskControllerSetup) === undefined;
      await _webextensionPolyfill.default.storage.session.set({
        isFirstMetaMaskControllerSetup
      });
    }
    setupController(initState, initLangCode, {}, isFirstMetaMaskControllerSetup);
    if (!_mv.isManifestV3) {
      await loadPhishingWarningPage();
    }
    await sendReadyMessageToTabs();
    _loglevel.default.info('MetaMask initialization complete.');
    resolveInitialization();
  } catch (error) {
    rejectInitialization(error);
  }
}

/**
 * An error thrown if the phishing warning page takes too long to load.
 */
class PhishingWarningPageTimeoutError extends Error {
  constructor() {
    super('Timeout failed');
  }
}

/**
 * Load the phishing warning page temporarily to ensure the service
 * worker has been registered, so that the warning page works offline.
 */
async function loadPhishingWarningPage() {
  let iframe;
  try {
    const extensionStartupPhishingPageUrl = new URL("https://metamask.github.io/phishing-warning/v2.1.0/");
    // The `extensionStartup` hash signals to the phishing warning page that it should not bother
    // setting up streams for user interaction. Otherwise this page load would cause a console
    // error.
    extensionStartupPhishingPageUrl.hash = '#extensionStartup';
    iframe = window.document.createElement('iframe');
    iframe.setAttribute('src', extensionStartupPhishingPageUrl.href);
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');

    // Create "deferred Promise" to allow passing resolve/reject to event handlers
    let deferredResolve;
    let deferredReject;
    const loadComplete = new Promise((resolve, reject) => {
      deferredResolve = resolve;
      deferredReject = reject;
    });

    // The load event is emitted once loading has completed, even if the loading failed.
    // If loading failed we can't do anything about it, so we don't need to check.
    iframe.addEventListener('load', deferredResolve);

    // This step initiates the page loading.
    window.document.body.appendChild(iframe);

    // This timeout ensures that this iframe gets cleaned up in a reasonable
    // timeframe, and ensures that the "initialization complete" message
    // doesn't get delayed too long.
    setTimeout(() => deferredReject(new PhishingWarningPageTimeoutError()), PHISHING_WARNING_PAGE_TIMEOUT);
    await loadComplete;
  } catch (error) {
    if (error instanceof PhishingWarningPageTimeoutError) {
      console.warn('Phishing warning page timeout; page not guaraneteed to work offline.');
    } else {
      console.error('Failed to initialize phishing warning page', error);
    }
  } finally {
    if (iframe) {
      iframe.remove();
    }
  }
}

//
// State and Persistence
//

/**
 * Loads any stored data, prioritizing the latest storage strategy.
 * Migrates that data schema in case it was last loaded on an older version.
 *
 * @returns {Promise<MetaMaskState>} Last data emitted from previous instance of MetaMask.
 */
async function loadStateFromPersistence() {
  // migrations
  const migrator = new _migrator.default({
    migrations: _migrations.default
  });
  migrator.on('error', console.warn);

  // read from disk
  // first from preferred, async API:
  versionedData = (await localStore.get()) || migrator.generateInitialState(firstTimeState);

  // check if somehow state is empty
  // this should never happen but new error reporting suggests that it has
  // for a small number of users
  // https://github.com/metamask/metamask-extension/issues/3919
  if (versionedData && !versionedData.data) {
    // unable to recover, clear state
    versionedData = migrator.generateInitialState(firstTimeState);
    sentry.captureMessage('MetaMask - Empty vault found - unable to recover');
  }

  // report migration errors to sentry
  migrator.on('error', err => {
    // get vault structure without secrets
    const vaultStructure = (0, _getObjStructure.default)(versionedData);
    sentry.captureException(err, {
      // "extra" key is required by Sentry
      extra: {
        vaultStructure
      }
    });
  });

  // migrate data
  versionedData = await migrator.migrateData(versionedData);
  if (!versionedData) {
    throw new Error('MetaMask - migrator returned undefined');
  }
  // this initializes the meta/version data as a class variable to be used for future writes
  localStore.setMetadata(versionedData.meta);

  // write to disk
  localStore.set(versionedData.data);

  // return just the data
  return versionedData.data;
}
function generateConnectionId(remotePort, detectedProcessName) {
  const {
    sender
  } = remotePort;
  const id = sender !== null && sender !== void 0 && sender.tab ? sender.tab.id : sender === null || sender === void 0 ? void 0 : sender.id;
  if (!id || !detectedProcessName) {
    console.error('Must provide id and detectedProcessName to generate connection id.', id, detectedProcessName); // eslint-disable-line no-console
    throw new Error('Must provide id and detectedProcessName to generate connection id.');
  }
  return `${id}-${detectedProcessName}`;
}
/**
 * Initializes the MetaMask Controller with any initial state and default language.
 * Configures platform-specific error reporting strategy.
 * Streams emitted state updates to platform-specific storage strategy.
 * Creates platform listeners for new Dapps/Contexts, and sets up their data connections to the controller.
 *
 * @param {object} initState - The initial state to start the controller with, matches the state that is emitted from the controller.
 * @param {string} initLangCode - The region code for the language preferred by the current user.
 * @param {object} overrides - object with callbacks that are allowed to override the setup controller logic (usefull for desktop app)
 * @param isFirstMetaMaskControllerSetup
 */
function setupController(initState, initLangCode, overrides, isFirstMetaMaskControllerSetup) {
  //
  // MetaMask Controller
  //

  controller = new _metamaskController.default({
    infuraProjectId: "8065dfb8bdac45eb91bb7e12ccd58f1c",
    // User confirmation callbacks:
    showUserConfirmation: triggerUi,
    // initial state
    initState,
    // initial locale code
    initLangCode,
    // platform specific api
    platform,
    notificationManager,
    browser: _webextensionPolyfill.default,
    getRequestAccountTabIds: () => {
      return requestAccountTabIds;
    },
    getOpenMetamaskTabsIds: () => {
      return openMetamaskTabsIDs;
    },
    localStore,
    overrides,
    isFirstMetaMaskControllerSetup
  });
  (0, _setup.default)({
    getCurrentChainId: () => controller.networkController.store.getState().providerConfig.chainId,
    getIpfsGateway: controller.preferencesController.getIpfsGateway.bind(controller.preferencesController),
    provider: controller.provider
  });

  // setup state persistence
  (0, _pump.default)((0, _obsStore.storeAsStream)(controller.store), (0, _debounceStream.default)(1000), (0, _createStreamSink.default)(async state => {
    await localStore.set(state);
    statePersistenceEvents.emit('state-persisted', state);
  }), error => {
    _loglevel.default.error('MetaMask - Persistence pipeline failed', error);
  });
  setupSentryGetStateGlobal(controller);
  const isClientOpenStatus = () => {
    return popupIsOpen || Boolean(Object.keys(openMetamaskTabsIDs).length) || notificationIsOpen;
  };
  const onCloseEnvironmentInstances = (isClientOpen, environmentType) => {
    // if all instances of metamask are closed we call a method on the controller to stop gasFeeController polling
    if (isClientOpen === false) {
      controller.onClientClosed();
      // otherwise we want to only remove the polling tokens for the environment type that has closed
    } else {
      // in the case of fullscreen environment a user might have multiple tabs open so we don't want to disconnect all of
      // its corresponding polling tokens unless all tabs are closed.
      if (environmentType === _app.ENVIRONMENT_TYPE_FULLSCREEN && Boolean(Object.keys(openMetamaskTabsIDs).length)) {
        return;
      }
      controller.onEnvironmentTypeClosed(environmentType);
    }
  };

  /**
   * A runtime.Port object, as provided by the browser:
   *
   * @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/Port
   * @typedef Port
   * @type Object
   */

  /**
   * Connects a Port to the MetaMask controller via a multiplexed duplex stream.
   * This method identifies trusted (MetaMask) interfaces, and connects them differently from untrusted (web pages).
   *
   * @param {Port} remotePort - The port provided by a new context.
   */
  connectRemote = async remotePort => {
    var _remotePort$sender;
    const processName = remotePort.name;
    if (metamaskBlockedPorts.includes(remotePort.name)) {
      return;
    }
    let isMetaMaskInternalProcess = false;
    const sourcePlatform = (0, _util.getPlatform)();
    const senderUrl = (_remotePort$sender = remotePort.sender) !== null && _remotePort$sender !== void 0 && _remotePort$sender.url ? new URL(remotePort.sender.url) : null;
    if (sourcePlatform === _app.PLATFORM_FIREFOX) {
      isMetaMaskInternalProcess = metamaskInternalProcessHash[processName];
    } else {
      isMetaMaskInternalProcess = (senderUrl === null || senderUrl === void 0 ? void 0 : senderUrl.origin) === `chrome-extension://${_webextensionPolyfill.default.runtime.id}`;
    }
    if (isMetaMaskInternalProcess) {
      var _overrides$getPortStr;
      const portStream = (overrides === null || overrides === void 0 ? void 0 : (_overrides$getPortStr = overrides.getPortStream) === null || _overrides$getPortStr === void 0 ? void 0 : _overrides$getPortStr.call(overrides, remotePort)) || new _extensionPortStream.default(remotePort);
      // communication with popup
      controller.isClientOpen = true;
      controller.setupTrustedCommunication(portStream, remotePort.sender);
      if (_mv.isManifestV3) {
        // If we get a WORKER_KEEP_ALIVE message, we respond with an ACK
        remotePort.onMessage.addListener(message => {
          if (message.name === WORKER_KEEP_ALIVE_MESSAGE) {
            // To test un-comment this line and wait for 1 minute. An error should be shown on MetaMask UI.
            remotePort.postMessage({
              name: ACK_KEEP_ALIVE_MESSAGE
            });
            controller.appStateController.setServiceWorkerLastActiveTime(Date.now());
          }
        });
      }
      const connectionId = generateConnectionId(remotePort, processName);
      if (processName === _app.ENVIRONMENT_TYPE_POPUP) {
        popupIsOpen = true;
        (0, _endOfStream.default)(portStream, () => {
          openMetamaskConnections.set(connectionId, 0);
          popupIsOpen = false;
          const isClientOpen = isClientOpenStatus();
          controller.isClientOpen = isClientOpen;
          onCloseEnvironmentInstances(isClientOpen, _app.ENVIRONMENT_TYPE_POPUP);
        });
      }
      if (processName === _app.ENVIRONMENT_TYPE_NOTIFICATION) {
        notificationIsOpen = true;
        (0, _endOfStream.default)(portStream, () => {
          openMetamaskConnections.set(connectionId, 0);
          notificationIsOpen = false;
          const isClientOpen = isClientOpenStatus();
          controller.isClientOpen = isClientOpen;
          onCloseEnvironmentInstances(isClientOpen, _app.ENVIRONMENT_TYPE_NOTIFICATION);
        });
      }
      if (processName === _app.ENVIRONMENT_TYPE_FULLSCREEN) {
        const tabId = remotePort.sender.tab.id;
        openMetamaskTabsIDs[tabId] = true;
        (0, _endOfStream.default)(portStream, () => {
          openMetamaskConnections.set(connectionId, 0);
          delete openMetamaskTabsIDs[tabId];
          const isClientOpen = isClientOpenStatus();
          controller.isClientOpen = isClientOpen;
          onCloseEnvironmentInstances(isClientOpen, _app.ENVIRONMENT_TYPE_FULLSCREEN);
        });
      }
    } else if (senderUrl && senderUrl.origin === phishingPageUrl.origin && senderUrl.pathname === phishingPageUrl.pathname) {
      var _overrides$getPortStr2;
      const portStream = (overrides === null || overrides === void 0 ? void 0 : (_overrides$getPortStr2 = overrides.getPortStream) === null || _overrides$getPortStr2 === void 0 ? void 0 : _overrides$getPortStr2.call(overrides, remotePort)) || new _extensionPortStream.default(remotePort);
      controller.setupPhishingCommunication({
        connectionStream: portStream
      });
    } else {
      if (remotePort.sender && remotePort.sender.tab && remotePort.sender.url) {
        const tabId = remotePort.sender.tab.id;
        const url = new URL(remotePort.sender.url);
        const {
          origin
        } = url;
        remotePort.onMessage.addListener(msg => {
          if (msg.data && msg.data.method === 'eth_requestAccounts') {
            requestAccountTabIds[origin] = tabId;
          }
        });
      }
      connectExternal(remotePort);
    }
  };

  // communication with page or other extension
  connectExternal = remotePort => {
    var _overrides$getPortStr3;
    const portStream = (overrides === null || overrides === void 0 ? void 0 : (_overrides$getPortStr3 = overrides.getPortStream) === null || _overrides$getPortStr3 === void 0 ? void 0 : _overrides$getPortStr3.call(overrides, remotePort)) || new _extensionPortStream.default(remotePort);
    controller.setupUntrustedCommunication({
      connectionStream: portStream,
      sender: remotePort.sender
    });
  };
  if (overrides !== null && overrides !== void 0 && overrides.registerConnectListeners) {
    overrides.registerConnectListeners(connectRemote, connectExternal);
  }

  //
  // User Interface setup
  //

  controller.txController.initApprovals().then(() => {
    updateBadge();
  });
  controller.txController.on(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, updateBadge);
  controller.decryptMessageController.hub.on(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, updateBadge);
  controller.encryptionPublicKeyController.hub.on(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, updateBadge);
  controller.signatureController.hub.on(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, updateBadge);
  controller.appStateController.on(_metamaskController.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE, updateBadge);
  controller.controllerMessenger.subscribe(_metamaskController.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE, updateBadge);

  /**
   * Updates the Web Extension's "badge" number, on the little fox in the toolbar.
   * The number reflects the current number of pending transactions or message signatures needing user approval.
   */
  function updateBadge() {
    let label = '';
    const count = getUnapprovedTransactionCount();
    if (count) {
      label = String(count);
    }
    // browserAction has been replaced by action in MV3
    if (_mv.isManifestV3) {
      _webextensionPolyfill.default.action.setBadgeText({
        text: label
      });
      _webextensionPolyfill.default.action.setBadgeBackgroundColor({
        color: '#037DD6'
      });
    } else {
      _webextensionPolyfill.default.browserAction.setBadgeText({
        text: label
      });
      _webextensionPolyfill.default.browserAction.setBadgeBackgroundColor({
        color: '#037DD6'
      });
    }
  }
  function getUnapprovedTransactionCount() {
    const pendingApprovalCount = controller.approvalController.getTotalApprovalCount();
    const waitingForUnlockCount = controller.appStateController.waitingForUnlock.length;
    return pendingApprovalCount + waitingForUnlockCount;
  }
  notificationManager.on(_notificationManager.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED, ({
    automaticallyClosed
  }) => {
    if (!automaticallyClosed) {
      rejectUnapprovedNotifications();
    } else if (getUnapprovedTransactionCount() > 0) {
      triggerUi();
    }
  });
  function rejectUnapprovedNotifications() {
    Object.keys(controller.txController.txStateManager.getUnapprovedTxList()).forEach(txId => controller.txController.txStateManager.setTxStatusRejected(txId));
    controller.signatureController.rejectUnapproved(_metametrics.REJECT_NOTIFICATION_CLOSE_SIG);
    controller.decryptMessageController.rejectUnapproved(_metametrics.REJECT_NOTIFICATION_CLOSE);
    controller.encryptionPublicKeyController.rejectUnapproved(_metametrics.REJECT_NOTIFICATION_CLOSE);

    // Finally, resolve snap dialog approvals on Flask and reject all the others managed by the ApprovalController.
    Object.values(controller.approvalController.state.pendingApprovals).forEach(({
      id,
      type
    }) => {
      switch (type) {
        default:
          controller.approvalController.reject(id, _ethRpcErrors.ethErrors.provider.userRejectedRequest());
          break;
      }
    });
    updateBadge();
  }
}

//
// Etc...
//

/**
 * Opens the browser popup for user confirmation
 */
async function triggerUi() {
  const tabs = await platform.getActiveTabs();
  const currentlyActiveMetamaskTab = Boolean(tabs.find(tab => openMetamaskTabsIDs[tab.id]));
  // Vivaldi is not closing port connection on popup close, so popupIsOpen does not work correctly
  // To be reviewed in the future if this behaviour is fixed - also the way we determine isVivaldi variable might change at some point
  const isVivaldi = tabs.length > 0 && tabs[0].extData && tabs[0].extData.indexOf('vivaldi_tab') > -1;
  if (!uiIsTriggering && (isVivaldi || !popupIsOpen) && !currentlyActiveMetamaskTab) {
    uiIsTriggering = true;
    try {
      const currentPopupId = controller.appStateController.getCurrentPopupId();
      await notificationManager.showPopup(newPopupId => controller.appStateController.setCurrentPopupId(newPopupId), currentPopupId);
    } finally {
      uiIsTriggering = false;
    }
  }
}

// It adds the "App Installed" event into a queue of events, which will be tracked only after a user opts into metrics.
const addAppInstalledEvent = () => {
  if (controller) {
    controller.metaMetricsController.updateTraits({
      [_metametrics.MetaMetricsUserTrait.InstallDateExt]: new Date().toISOString().split('T')[0] // yyyy-mm-dd
    });

    controller.metaMetricsController.addEventBeforeMetricsOptIn({
      category: _metametrics.MetaMetricsEventCategory.App,
      event: _metametrics.MetaMetricsEventName.AppInstalled,
      properties: {}
    });
    return;
  }
  setTimeout(() => {
    // If the controller is not set yet, we wait and try to add the "App Installed" event again.
    addAppInstalledEvent();
  }, 1000);
};

// On first install, open a new tab with MetaMask
_webextensionPolyfill.default.runtime.onInstalled.addListener(({
  reason
}) => {
  if (reason === 'install' && !(true || false)) {
    addAppInstalledEvent();
    platform.openExtensionInBrowser();
  }
});
function setupSentryGetStateGlobal(store) {
  global.stateHooks.getSentryState = function () {
    const fullState = store.getState();
    const debugState = (0, _object.maskObject)({
      metamask: fullState
    }, _setupSentry.SENTRY_STATE);
    return {
      browser: window.navigator.userAgent,
      store: debugState,
      version: platform.getVersion()
    };
  };
}
function initBackground() {
  initialize().catch(_loglevel.default.error);
}
if (!false) {
  initBackground();
}


      };
    };
  }
  }
}, {package:"$root$",file:"app\\scripts\\background.js",}]],["D:\\onedrive\\sdu\\Research\\Web3 Signature Authentication\\demo\\metamask-extension\\app\\scripts\\background.js"],{})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zdHJlYW0taHR0cC9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL3BpcGVsaW5lLmpzIiwibm9kZV9tb2R1bGVzL3N0cmVhbS1odHRwL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvc3RhdGUuanMiLCJub2RlX21vZHVsZXMvc3RyZWFtLWh0dHAvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0tYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9zdHJlYW0taHR0cC9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL3JlYWRhYmxlLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdGhyb3VnaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aW55LXNlY3AyNTZrMS9qcy5qcyIsIm5vZGVfbW9kdWxlcy90aW55LXNlY3AyNTZrMS9yZmM2OTc5LmpzIiwibm9kZV9tb2R1bGVzL3RvLWRhdGEtdmlldy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90d2VldG5hY2wtdXRpbC9uYWNsLXV0aWwuanMiLCJub2RlX21vZHVsZXMvdHdlZXRuYWNsL25hY2wtZmFzdC5qcyIsIm5vZGVfbW9kdWxlcy90eXBlZm9yY2UvZXJyb3JzLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVmb3JjZS9leHRyYS5qcyIsIm5vZGVfbW9kdWxlcy90eXBlZm9yY2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdHlwZWZvcmNlL25hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy91aW50OGFycmF5cy9jb25jYXQuanMiLCJub2RlX21vZHVsZXMvdWludDhhcnJheXMvZXF1YWxzLmpzIiwibm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL2Zyb20tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3VpbnQ4YXJyYXlzL3RvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy92YXJ1aW50LWJpdGNvaW4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvd2ViLWVuY29kaW5nL3NyYy9saWIuanMiLCJub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2Rpc3QvZmV0Y2gudW1kLmpzIiwibm9kZV9tb2R1bGVzL3dpZi9pbmRleC5qcyIsInNoYXJlZC9jb25zdGFudHMvYWxhcm1zLmpzIiwic2hhcmVkL2NvbnN0YW50cy9zbWFydFRyYW5zYWN0aW9ucy5qcyIsInNoYXJlZC9jb25zdGFudHMvdGVzdC1mbGFncy5qcyIsImFwcC9zY3JpcHRzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdjFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RPLE1BQU0sdUJBQXVCLEdBQUcseUJBQXlCO0FBQUMsT0FBQSxDQUFBLHVCQUFBLEdBQUEsdUJBQUE7QUFDMUQsTUFBTSx5Q0FBeUMsR0FDcEQsMkNBQTJDO0FBQUMsT0FBQSxDQUFBLHlDQUFBLEdBQUEseUNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjlDLElBQUEsS0FBQSxHQUFBLE9BQUE7QUFFTyxNQUFNLHdDQUF3QyxHQUFHLFlBQU0sR0FBRyxFQUFFO0FBQUMsT0FBQSxDQUFBLHdDQUFBLEdBQUEsd0NBQUE7QUFDN0QsTUFBTSxvQ0FBb0MsR0FBRyxHQUFHO0FBQUMsT0FBQSxDQUFBLG9DQUFBLEdBQUEsb0NBQUE7QUFDakQsTUFBTSw4Q0FBOEMsR0FBRyxDQUFDO0FBQUMsT0FBQSxDQUFBLDhDQUFBLEdBQUEsOENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnpELE1BQU0sNkJBQTZCLEdBQUcsK0JBQStCO0FBQUMsT0FBQSxDQUFBLDZCQUFBLEdBQUEsNkJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJN0UsSUFBQSxVQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxJQUFBLGVBQUEsc0JBQUEsQ0FBQSxPQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsUUFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxrQkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsWUFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSx3QkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsWUFBQSxPQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBO0FBRUEsSUFBQSx1QkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsQ0FBQTtBQUVBLElBQUEsZ0JBQUEsT0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsT0FBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBO0FBT0EsSUFBQSxlQUFBLE9BQUEsQ0FBQSxvQ0FBQSxDQUFBLENBQUE7QUFPQSxJQUFBLGtCQUFBLE9BQUEsQ0FBQSw0Q0FBQSxDQUFBLENBQUE7QUFDQSxJQUFBLE1BQUEsT0FBQSxDQUFBLGdDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsVUFBQSxPQUFBLENBQUEsbUNBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxRQUFBLE9BQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsY0FBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxZQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxhQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxjQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxnQkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsZUFBQSxPQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBO0FBRUEsSUFBQSxvQkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsdUJBQUEsdUJBQUEsQ0FBQSxPQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBLENBQUE7QUFHQSxJQUFBLHNCQUFBLHVCQUFBLENBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxDQUFBO0FBR0EsSUFBQSxrQkFBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLElBQUEsNkJBQUEsc0JBQUEsQ0FBQSxPQUFBLENBQUEscUNBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxJQUFBLG1CQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsSUFBQSxTQUFBLHNCQUFBLENBQUEsT0FBQSxDQUFBLHNCQUFBLENBQUEsQ0FBQSxDQUFBO0FBQXdELCtDQUFBLEVBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxVQUFBLEVBQUEsT0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLG9CQUFBLElBQUEsT0FBQSxFQUFBLENBQUEsQ0FBQSxJQUFBLG1CQUFBLElBQUEsT0FBQSxFQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsMkJBQUEsdUJBQUEsRUFBQSxPQUFBLFdBQUEsR0FBQSxnQkFBQSxHQUFBLGlCQUFBLENBQUEsRUFBQSxFQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUE7QUFBQSxtREFBQSxFQUFBLElBQUEsQ0FBQSxXQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsV0FBQSxFQUFBLEVBQUEsT0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsR0FBQSxLQUFBLElBQUEsSUFBQSxPQUFBLEdBQUEsS0FBQSxRQUFBLElBQUEsT0FBQSxHQUFBLEtBQUEsVUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLFNBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsUUFBQSx3QkFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsRUFBQSxPQUFBLEtBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLFNBQUEsRUFBQSxDQUFBLENBQUEsSUFBQSx3QkFBQSxNQUFBLGVBQUEsSUFBQSxNQUFBLHlCQUFBLENBQUEsQ0FBQSxLQUFBLElBQUEsR0FBQSxJQUFBLEdBQUEsRUFBQSxFQUFBLElBQUEsR0FBQSxLQUFBLFNBQUEsSUFBQSxNQUFBLFVBQUEsZUFBQSxLQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsSUFBQSxPQUFBLHFCQUFBLEdBQUEsTUFBQSx5QkFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsS0FBQSxJQUFBLElBQUEsSUFBQSxJQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsTUFBQSxlQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsTUFBQSxRQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxLQUFBLEVBQUEsRUFBQSxLQUFBLElBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsTUFBQSxDQUFBLEVBQUE7QUFBQSxxQ0FBQSxFQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsV0FBQSxHQUFBLEdBQUEsR0FBQSxFQUFBLFNBQUEsR0FBQSxFQUFBLENBQUEsRUFBQTs7Ozs7Ozs7O0FBUXhELE1BQU07O0NBQVUsR0FBRyxNQUFNLENBQUE7QUFDekIsTUFBTSxpQkFBaUI7RUFBRSxHQUFHLGVBQUEsUUFBQTtDQUFtQixDQUFBO0FBRS9DLE1BQU0sOEJBQThCO0VBQ2xDLENBQUMsSUFBQSx1QkFBc0IsR0FBRyxJQUFJO0VBQzlCLENBQUMsSUFBQSw4QkFBNkIsR0FBRyxJQUFJO0VBQ3JDLENBQUMsSUFBQSw0QkFBMkIsR0FBRyxJQUFBO0NBQ2hDLENBQUE7QUFFRCxNQUFNLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFFL0MsU0FBQSxRQUFHLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxlQUFlLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFBO0FBRWxFLE1BQU0sV0FBVyxJQUFJLFVBQUEsUUFBaUIsRUFBRSxDQUFBO0FBQ3hDLE1BQU0sc0JBQXNCLElBQUksb0JBQUEsUUFBbUIsRUFBRSxDQUFBO0FBRXJELElBQUksY0FBYyxLQUFLLENBQUE7QUFDdkIsSUFBSSxxQkFBcUIsS0FBSyxDQUFBO0FBQzlCLElBQUksaUJBQWlCLEtBQUssQ0FBQTtBQUMxQixNQUFNLHNCQUFzQixFQUFFLENBQUE7QUFDOUIsTUFBTSwwQkFBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUN6QyxNQUFNLHVCQUF1QixFQUFFLENBQUE7QUFDL0IsSUFBSSxVQUFVLENBQUE7OztBQUdkLE1BQU0sU0FBUyxPQUFPLElBQUksUUFBUSxDQUFBO0FBQ2xDLE1BQU0sYUFBYSxNQUFNLEdBQUcsSUFBSSxhQUFBLFFBQW9CLEVBQUUsR0FBRyxJQUFJLFdBQUEsUUFBVSxFQUFFLENBQUE7QUFDekUsSUFBSSxhQUFhLENBQUE7QUFFakIsSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLGVBQWUsRUFBRTtFQUN4QyxNQUFNLFdBQVcsaUJBQWlCLEdBQUcsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtDQUN0RTtBQUVBLE1BQU0sa0JBQWtCLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxDQUFBO0FBRXRFLE1BQU0sNkJBQTZCLEtBQUssQ0FBQTs7QUFFeEMsTUFBTSxnQ0FBZ0MsMEJBQTBCLENBQUE7QUFFaEUsTUFBTSx5QkFBeUIsd0JBQXdCLENBQUE7QUFDdkQsTUFBTSw0QkFBNEIsMkJBQTJCLENBQUE7OztBQUt0RCxNQUFNLHlCQUF5QixJQUFJLE9BQUEsUUFBWSxFQUFFLENBQUE7Ozs7Ozs7OztBQUV4RCxPQUFBLHVCQUFBLEdBQUEsc0JBQUEsQ0FBQTtBQU9BLE1BQU07Ozs7Q0FJTCxHQUFHLENBQUEsQ0FBQSxFQUFBLEtBQUEsZ0JBQWUsR0FBRSxDQUFBOzs7Ozs7O0FBT3JCLE1BQU0seUJBQXlCLFlBQVk7RUFDekMsTUFBTSxPQUFPLE1BQU0scUJBQUEsUUFBTyxLQUFLLE1BQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBY0wsS0FBSyxZQUFZO0lBQ2pCLFlBQVksUUFBQTtHQUNiLENBQUMsS0FDRyxDQUFFLFVBQVc7SUFDaEIsQ0FBQSxDQUFBLEVBQUEsZUFBQSx3QkFBdUIsR0FBRSxDQUFBO0lBQ3pCLE9BQU8sTUFBTSxDQUFBO0dBQ2QsQ0FBQyxNQUNJLENBQUMsTUFBTTtJQUNYLENBQUEsQ0FBQSxFQUFBLGVBQUEsd0JBQXVCLEdBQUUsQ0FBQTtHQUMxQixDQUFDLENBQUE7OztFQUdKLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO0lBQ3RCLHFCQUFBLFFBQU8sS0FBSyxZQUNFLENBQUMsR0FBRyxHQUFHLEVBQUU7TUFDbkIsTUFBTSxJQUFBLG1CQUFrQixNQUFDO0tBQzFCLENBQUMsS0FDRyxDQUFDLE1BQU07TUFDVixDQUFBLENBQUEsRUFBQSxlQUFBLHdCQUF1QixHQUFFLENBQUE7S0FDMUIsQ0FBQyxNQUNJLENBQUMsTUFBTTs7O01BR1gsQ0FBQSxDQUFBLEVBQUEsZUFBQSx3QkFBdUIsR0FBRSxDQUFBO0tBQzFCLENBQUMsQ0FBQTtHQUNOO0NBQ0QsQ0FBQTs7O0FBR0QsSUFBSSxhQUFhLENBQUE7QUFDakIsSUFBSSxlQUFlLENBQUE7QUFFbkIscUJBQUEsUUFBTyxRQUFRLFVBQVUsWUFBWSxDQUFDLE9BQU8sT0FBTyxLQUFLOztFQUV2RCxNQUFNLGFBQWEsQ0FBQTtFQUNuQixNQUFNLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQzFCLE1BQU07O0dBQVUsR0FBRyxVQUFVLENBQUE7RUFFN0IsTUFBTSxNQUFNLE1BQU0sS0FBQSxJQUFBLElBQU4sTUFBTSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFOLE1BQU0sSUFBSyxDQUFBO0VBQ3ZCLE1BQU0sc0JBQXNCLEdBQUcsR0FBRyxDQUFBLENBQUEsRUFBQSxLQUFBLG1CQUFrQixFQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUU5RCxNQUFNLGVBQWUsb0JBQW9CLENBQUMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUE7RUFDMUUsTUFBTSxrQkFBa0IsdUJBQXVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7RUFFdEUsSUFDRSxlQUFlLEtBQUssQ0FBQyxJQUNwQixtQkFBbUIsS0FBSyxZQUFZLElBQUksZUFBZSxHQUFHLENBQUE7O0lBRTNEOztJQUVBLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQ3RCLHVCQUF1QixJQUFJLENBQUMsWUFBWSxFQUFFLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQTtHQUMvRCxNQUFNO0lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0dBQzlDO0NBQ0QsQ0FBQyxDQUFBO0FBRUYscUJBQUEsUUFBTyxRQUFRLGtCQUFrQixZQUFZLENBQUMsT0FBTyxPQUFPLEtBQUs7O0VBRS9ELE1BQU0sYUFBYSxDQUFBOzs7RUFHbkIsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7Q0FDekIsQ0FBQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VGLDRCQUE0QjtFQUMxQixJQUFJO0lBQ0YsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLEVBQUUsQ0FBQTtJQUNsRCxNQUFNLGVBQWUsTUFBTSxDQUFBLENBQUEsRUFBQSwwQkFBQSxRQUF5QixHQUFFLENBQUE7SUFJdEQsSUFBSSw4QkFBOEIsQ0FBQTtJQUNsQyxJQUFJLEdBQUEsYUFBWSxFQUFFO01BQ2hCLE1BQU0sY0FBYyxNQUFNLHFCQUFBLFFBQU8sUUFBUSxRQUFRLElBQUksQ0FBQyxDQUNwRCxnQ0FBZ0MsQ0FDakMsQ0FBQyxDQUFBO01BRUYsaUNBQ0UsQ0FBQSxXQUFXLEtBQUEsSUFBQSxJQUFYLFdBQVcsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBWCxXQUFXLCtCQUFnQyxNQUFLLFNBQVMsQ0FBQTtNQUMzRCxNQUFNLHFCQUFBLFFBQU8sUUFBUSxRQUFRLElBQUksQ0FBQztRQUFFLDhCQUFBO09BQWdDLENBQUMsQ0FBQTtLQUN2RTtJQUVBLGVBQWUsQ0FDYixTQUFTLEVBQ1QsWUFBWSxFQUNaLEVBQUUsRUFDRiw4QkFDRixDQUFDLENBQUE7SUFDRCxJQUFJLENBQUMsR0FBQSxhQUFZLEVBQUU7TUFDakIsTUFBTSx1QkFBdUIsRUFBRSxDQUFBO0tBQ2pDO0lBQ0EsTUFBTSxzQkFBc0IsRUFBRSxDQUFBO0lBQzlCLFNBQUEsUUFBRyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtJQUM3QyxxQkFBcUIsRUFBRSxDQUFBO0dBQ3hCLENBQUMsY0FBYztJQUNkLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFBO0dBQzdCO0NBQ0Y7Ozs7O0FBS0EsOENBQThDLEtBQUssQ0FBQztFQUNsRCxXQUFXLEdBQUc7SUFDWixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtHQUN6QjtDQUNGOzs7Ozs7QUFNQSx5Q0FBeUM7RUFDdkMsSUFBSSxNQUFNLENBQUE7RUFDVixJQUFJO0lBQ0YsTUFBTSxrQ0FBa0MsSUFBSSxHQUFHLENBQzdDLE9BQU8sSUFBSSwwQkFDYixDQUFDLENBQUE7Ozs7SUFJRCwrQkFBK0IsS0FBSyxHQUFHLG1CQUFtQixDQUFBO0lBRTFELFNBQVMsTUFBTSxTQUFTLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoRCxNQUFNLGFBQWEsQ0FBQyxLQUFLLEVBQUUsK0JBQStCLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLE1BQU0sYUFBYSxDQUFDLFNBQVMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBOzs7SUFHakUsSUFBSSxlQUFlLENBQUE7SUFDbkIsSUFBSSxjQUFjLENBQUE7SUFDbEIsTUFBTSxlQUFlLElBQUksT0FBTyxDQUFDLHFCQUFxQjtNQUNwRCxrQkFBa0IsT0FBTyxDQUFBO01BQ3pCLGlCQUFpQixNQUFNLENBQUE7S0FDeEIsQ0FBQyxDQUFBOzs7O0lBSUYsTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUE7OztJQUdoRCxNQUFNLFNBQVMsS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7O0lBS3hDLFVBQVUsQ0FDUixNQUFNLGNBQWMsQ0FBQyxJQUFJLCtCQUErQixFQUFFLENBQUMsRUFDM0QsNkJBQ0YsQ0FBQyxDQUFBO0lBQ0QsTUFBTSxZQUFZLENBQUE7R0FDbkIsQ0FBQyxjQUFjO0lBQ2QsSUFBSSxLQUFLLFlBQVksK0JBQStCLEVBQUU7TUFDcEQsT0FBTyxLQUFLLENBQ1Ysc0VBQ0YsQ0FBQyxDQUFBO0tBQ0YsTUFBTTtNQUNMLE9BQU8sTUFBTSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ3BFO0dBQ0QsU0FBUztJQUNSLElBQUksTUFBTSxFQUFFO01BQ1YsTUFBTSxPQUFPLEVBQUUsQ0FBQTtLQUNqQjtHQUNGO0NBQ0Y7Ozs7Ozs7Ozs7OztBQVlPLDBDQUEwQzs7RUFFL0MsTUFBTSxXQUFXLElBQUksU0FBQSxRQUFRLENBQUM7SUFBRSxZQUFBLFdBQUEsUUFBQTtHQUFZLENBQUMsQ0FBQTtFQUM3QyxRQUFRLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQTs7OztFQUlsQyxnQkFDRSxDQUFDLE1BQU0sVUFBVSxJQUFJLEVBQUUsS0FBSyxRQUFRLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxDQUFBOzs7Ozs7RUFNM0UsSUFBSSxhQUFhLElBQUksQ0FBQyxhQUFhLEtBQUssRUFBRTs7SUFFeEMsZ0JBQWdCLFFBQVEscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDN0QsTUFBTSxlQUFlLENBQUMsa0RBQWtELENBQUMsQ0FBQTtHQUMzRTs7O0VBR0EsUUFBUSxHQUFHLENBQUMsT0FBTyxFQUFHLE9BQVE7O0lBRTVCLE1BQU0saUJBQWlCLENBQUEsQ0FBQSxFQUFBLGdCQUFBLFFBQWUsRUFBQyxhQUFhLENBQUMsQ0FBQTtJQUNyRCxNQUFNLGlCQUFpQixDQUFDLEdBQUcsRUFBRTs7TUFFM0IsT0FBTztRQUFFLGNBQUE7T0FBZTtLQUN6QixDQUFDLENBQUE7R0FDSCxDQUFDLENBQUE7OztFQUdGLGdCQUFnQixNQUFNLFFBQVEsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0VBQ3pELElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFBO0dBQzNEOztFQUVBLFVBQVUsWUFBWSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUE7OztFQUcxQyxVQUFVLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFBOzs7RUFHbEMsT0FBTyxhQUFhLEtBQUssQ0FBQTtDQUMzQjtBQUVBLCtEQUErRDtFQUM3RCxNQUFNOztHQUFVLEdBQUcsVUFBVSxDQUFBO0VBQzdCLE1BQU0sS0FBSyxNQUFNLEtBQUEsSUFBQSxJQUFOLE1BQU0sS0FBQSxLQUFBLENBQUEsSUFBTixNQUFNLElBQUssR0FBRyxNQUFNLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBQSxJQUFBLElBQU4sTUFBTSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFOLE1BQU0sR0FBSSxDQUFBO0VBQ25ELElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtJQUMvQixPQUFPLE1BQU0sQ0FDWCxvRUFBb0UsRUFDcEUsRUFBRSxFQUNGLG1CQUNGLENBQUMsQ0FBQztJQUNGLE1BQU0sSUFBSSxLQUFLLENBQ2Isb0VBQ0YsQ0FBQyxDQUFBO0dBQ0g7RUFDQSxPQUFRLENBQUEsRUFBRSxFQUFHLENBQUEsQ0FBQSxFQUFHLG1CQUFvQixDQUFBLENBQUMsQ0FBQTtDQUN2Qzs7Ozs7Ozs7Ozs7O0FBWU8sNkZBS0w7Ozs7O0VBS0EsYUFBYSxJQUFJLG1CQUFBLFFBQWtCLENBQUM7SUFDbEMsaUJBQWlCLE9BQU8sSUFBSSxrQkFBa0I7O0lBRTlDLHNCQUFzQixTQUFTOztJQUUvQixTQUFTOztJQUVULFlBQVk7O0lBRVosUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixTQUFBLHFCQUFBLFFBQU87SUFDUCx5QkFBeUIsTUFBTTtNQUM3QixPQUFPLG9CQUFvQixDQUFBO0tBQzVCO0lBQ0Qsd0JBQXdCLE1BQU07TUFDNUIsT0FBTyxtQkFBbUIsQ0FBQTtLQUMzQjtJQUNELFVBQVU7SUFDVixTQUFTO0lBQ1QsOEJBQUE7R0FDRCxDQUFDLENBQUE7RUFFRixDQUFBLENBQUEsRUFBQSxNQUFBLFFBQW9CLEVBQUM7SUFDbkIsbUJBQW1CLE1BQ2pCLFVBQVUsa0JBQWtCLE1BQU0sU0FBUyxFQUFFLGVBQWUsUUFBUTtJQUN0RSxnQkFBZ0IsVUFBVSxzQkFBc0IsZUFBZSxLQUFLLENBQ2xFLFVBQVUsc0JBQ1osQ0FBQztJQUNELFVBQVUsVUFBVSxTQUFDO0dBQ3RCLENBQUMsQ0FBQTs7O0VBR0YsQ0FBQSxDQUFBLEVBQUEsS0FBQSxRQUFJLEVBQ0YsQ0FBQSxDQUFBLEVBQUEsU0FBQSxjQUFhLEVBQUMsVUFBVSxNQUFNLENBQUMsRUFDL0IsQ0FBQSxDQUFBLEVBQUEsZUFBQSxRQUFRLEVBQUMsSUFBSSxDQUFDLEVBQ2QsQ0FBQSxDQUFBLEVBQUEsaUJBQUEsUUFBZ0IsRUFBQyxlQUFpQjtJQUNoQyxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLHNCQUFzQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUE7R0FDdEQsQ0FBQyxFQUNELFNBQVU7SUFDVCxTQUFBLFFBQUcsTUFBTSxDQUFDLHdDQUF3QyxFQUFFLEtBQUssQ0FBQyxDQUFBO0dBRTlELENBQUMsQ0FBQTtFQUVELHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFBO0VBRXJDLE1BQU0scUJBQXFCLE1BQU07SUFDL0IsT0FDRSxXQUFXLElBQ1gsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUNoRCxrQkFBa0IsQ0FBQTtHQUVyQixDQUFBO0VBRUQsTUFBTSw4QkFBOEIsbUNBQW1DOztJQUVyRSxJQUFJLFlBQVksS0FBSyxLQUFLLEVBQUU7TUFDMUIsVUFBVSxlQUFlLEVBQUUsQ0FBQTs7S0FFNUIsTUFBTTs7O01BR0wsSUFDRSxlQUFlLEtBQUssSUFBQSw0QkFBMkIsSUFDL0MsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxFQUNoRDtRQUNBLE9BQUE7T0FDRjtNQUNBLFVBQVUsd0JBQXdCLENBQUMsZUFBZSxDQUFDLENBQUE7S0FDckQ7R0FDRCxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JELGdCQUFnQixvQkFBc0I7SUFBQSxJQUFBLGtCQUFBLENBQUE7SUFHcEMsTUFBTSxjQUFjLFVBQVUsS0FBSyxDQUFBO0lBRW5DLElBQUksb0JBQW9CLFNBQVMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO01BQ2xELE9BQUE7S0FDRjtJQUVBLElBQUksNEJBQTRCLEtBQUssQ0FBQTtJQUNyQyxNQUFNLGlCQUFpQixDQUFBLENBQUEsRUFBQSxLQUFBLFlBQVcsR0FBRSxDQUFBO0lBQ3BDLE1BQU0sWUFBWSxDQUFBLHFCQUFBLFVBQVUsT0FBTyxNQUFBLElBQUEsSUFBQSxrQkFBQSxLQUFBLEtBQUEsQ0FBQSxJQUFqQixrQkFBQSxJQUFzQixHQUNwQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLE9BQU8sSUFBSSxDQUFDLEdBQzlCLElBQUksQ0FBQTtJQUVSLElBQUksY0FBYyxLQUFLLElBQUEsaUJBQWdCLEVBQUU7TUFDdkMsNEJBQTRCLDJCQUEyQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ3JFLE1BQU07TUFDTCw0QkFDRSxDQUFBLFNBQVMsS0FBQSxJQUFBLElBQVQsU0FBUyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFULFNBQVMsT0FBUSxNQUFNLENBQUEsbUJBQUEsRUFBcUIscUJBQUEsUUFBTyxRQUFRLEdBQUksQ0FBQSxDQUFDLENBQUE7S0FDcEU7SUFFQSxJQUFJLHlCQUF5QixFQUFFO01BQUEsSUFBQSxxQkFBQSxDQUFBO01BQzdCLE1BQU0sYUFDSixDQUFBLFNBQVMsS0FBQSxJQUFBLElBQVQsU0FBUyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsd0JBQVQsU0FBUyxjQUFlLE1BQUEsSUFBQSxJQUFBLHFCQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLEdBQXhCLHFCQUFBLEtBQUEsQ0FBQSxTQUFTLEVBQWtCLFVBQVUsQ0FBQyxLQUFJLElBQUksb0JBQUEsUUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztNQUV0RSxVQUFVLGFBQWEsR0FBRyxJQUFJLENBQUE7TUFDOUIsVUFBVSwwQkFBMEIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxPQUFPLENBQUMsQ0FBQTtNQUNuRSxJQUFJLEdBQUEsYUFBWSxFQUFFOztRQUVoQixVQUFVLFVBQVUsWUFBWSxDQUFFLFdBQVk7VUFDNUMsSUFBSSxPQUFPLEtBQUssS0FBSyx5QkFBeUIsRUFBRTs7WUFFOUMsVUFBVSxZQUFZLENBQUM7Y0FBRSxNQUFNLHNCQUFBO2FBQXdCLENBQUMsQ0FBQTtZQUV4RCxVQUFVLG1CQUFtQiwrQkFBK0IsQ0FDMUQsSUFBSSxJQUFJLEVBQ1YsQ0FBQyxDQUFBO1dBQ0g7U0FDRCxDQUFDLENBQUE7T0FDSjtNQUVBLE1BQU0sZUFBZSxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7TUFDbEUsSUFBSSxXQUFXLEtBQUssSUFBQSx1QkFBc0IsRUFBRTtRQUMxQyxjQUFjLElBQUksQ0FBQTtRQUNsQixDQUFBLENBQUEsRUFBQSxZQUFBLFFBQVcsRUFBQyxVQUFVLEVBQUUsTUFBTTtVQUM1Qix1QkFBdUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQTtVQUM1QyxjQUFjLEtBQUssQ0FBQTtVQUNuQixNQUFNLGVBQWUsa0JBQWtCLEVBQUUsQ0FBQTtVQUN6QyxVQUFVLGFBQWEsR0FBRyxZQUFZLENBQUE7VUFDdEMsMkJBQTJCLENBQUMsWUFBWSxFQUFFLElBQUEsdUJBQXNCLENBQUMsQ0FBQTtTQUNsRSxDQUFDLENBQUE7T0FDSjtNQUVBLElBQUksV0FBVyxLQUFLLElBQUEsOEJBQTZCLEVBQUU7UUFDakQscUJBQXFCLElBQUksQ0FBQTtRQUN6QixDQUFBLENBQUEsRUFBQSxZQUFBLFFBQVcsRUFBQyxVQUFVLEVBQUUsTUFBTTtVQUM1Qix1QkFBdUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQTtVQUM1QyxxQkFBcUIsS0FBSyxDQUFBO1VBQzFCLE1BQU0sZUFBZSxrQkFBa0IsRUFBRSxDQUFBO1VBQ3pDLFVBQVUsYUFBYSxHQUFHLFlBQVksQ0FBQTtVQUN0QywyQkFBMkIsQ0FDekIsWUFBWSxFQUNaLElBQUEsOEJBQ0YsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFBO09BQ0o7TUFFQSxJQUFJLFdBQVcsS0FBSyxJQUFBLDRCQUEyQixFQUFFO1FBQy9DLE1BQU0sUUFBUSxVQUFVLE9BQU8sSUFBSSxHQUFHLENBQUE7UUFDdEMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBRWpDLENBQUEsQ0FBQSxFQUFBLFlBQUEsUUFBVyxFQUFDLFVBQVUsRUFBRSxNQUFNO1VBQzVCLHVCQUF1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO1VBQzVDLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUE7VUFDakMsTUFBTSxlQUFlLGtCQUFrQixFQUFFLENBQUE7VUFDekMsVUFBVSxhQUFhLEdBQUcsWUFBWSxDQUFBO1VBQ3RDLDJCQUEyQixDQUN6QixZQUFZLEVBQ1osSUFBQSw0QkFDRixDQUFDLENBQUE7U0FDRixDQUFDLENBQUE7T0FDSjtLQUNELE1BQU0sSUFDTCxTQUFTLElBQ1QsU0FBUyxPQUFPLEtBQUssZUFBZSxPQUFPLElBQzNDLFNBQVMsU0FBUyxLQUFLLGVBQWUsU0FBUyxFQUMvQztNQUFBLElBQUEsc0JBQUEsQ0FBQTtNQUNBLE1BQU0sYUFDSixDQUFBLFNBQVMsS0FBQSxJQUFBLElBQVQsU0FBUyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEseUJBQVQsU0FBUyxjQUFlLE1BQUEsSUFBQSxJQUFBLHNCQUFBLEtBQUEsS0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLEdBQXhCLHNCQUFBLEtBQUEsQ0FBQSxTQUFTLEVBQWtCLFVBQVUsQ0FBQyxLQUFJLElBQUksb0JBQUEsUUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO01BQ3RFLFVBQVUsMkJBQTJCLENBQUM7UUFDcEMsa0JBQWtCLFVBQUE7T0FDbkIsQ0FBQyxDQUFBO0tBQ0gsTUFBTTtNQUNMLElBQUksVUFBVSxPQUFPLElBQUksVUFBVSxPQUFPLElBQUksSUFBSSxVQUFVLE9BQU8sSUFBSSxFQUFFO1FBQ3ZFLE1BQU0sUUFBUSxVQUFVLE9BQU8sSUFBSSxHQUFHLENBQUE7UUFDdEMsTUFBTSxNQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsT0FBTyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxNQUFNOztTQUFVLEdBQUcsR0FBRyxDQUFBO1FBRXRCLFVBQVUsVUFBVSxZQUFZLENBQUUsT0FBUTtVQUN4QyxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxPQUFPLEtBQUsscUJBQXFCLEVBQUU7WUFDekQsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFBO1dBQ3RDO1NBQ0QsQ0FBQyxDQUFBO09BQ0o7TUFDQSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDN0I7R0FDRCxDQUFBOzs7RUFHRCxrQkFBbUIsY0FBZTtJQUFBLElBQUEsc0JBQUEsQ0FBQTtJQUdoQyxNQUFNLGFBQ0osQ0FBQSxTQUFTLEtBQUEsSUFBQSxJQUFULFNBQVMsS0FBQSxLQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLHlCQUFULFNBQVMsY0FBZSxNQUFBLElBQUEsSUFBQSxzQkFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUF4QixzQkFBQSxLQUFBLENBQUEsU0FBUyxFQUFrQixVQUFVLENBQUMsS0FBSSxJQUFJLG9CQUFBLFFBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN0RSxVQUFVLDRCQUE0QixDQUFDO01BQ3JDLGtCQUFrQixVQUFVO01BQzVCLFFBQVEsVUFBVSxPQUFDO0tBQ3BCLENBQUMsQ0FBQTtHQUNILENBQUE7RUFFRCxJQUFJLFNBQVMsS0FBQSxJQUFBLElBQVQsU0FBUyxLQUFBLEtBQUEsQ0FBQSxJQUFULFNBQVMseUJBQTBCLEVBQUU7SUFDdkMsU0FBUyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUE7R0FDcEU7Ozs7OztFQU1BLFVBQVUsYUFBYSxjQUFjLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDakQsV0FBVyxFQUFFLENBQUE7R0FDZCxDQUFDLENBQUE7RUFDRixVQUFVLGFBQWEsR0FBRyxDQUN4QixtQkFBQSwyQkFBMEIsYUFBYSxFQUN2QyxXQUNGLENBQUMsQ0FBQTtFQUNELFVBQVUseUJBQXlCLElBQUksR0FBRyxDQUN4QyxtQkFBQSwyQkFBMEIsYUFBYSxFQUN2QyxXQUNGLENBQUMsQ0FBQTtFQUNELFVBQVUsOEJBQThCLElBQUksR0FBRyxDQUM3QyxtQkFBQSwyQkFBMEIsYUFBYSxFQUN2QyxXQUNGLENBQUMsQ0FBQTtFQUNELFVBQVUsb0JBQW9CLElBQUksR0FBRyxDQUNuQyxtQkFBQSwyQkFBMEIsYUFBYSxFQUN2QyxXQUNGLENBQUMsQ0FBQTtFQUNELFVBQVUsbUJBQW1CLEdBQUcsQ0FDOUIsbUJBQUEsMkJBQTBCLGFBQWEsRUFDdkMsV0FDRixDQUFDLENBQUE7RUFFRCxVQUFVLG9CQUFvQixVQUFVLENBQ3RDLG1CQUFBLDJCQUEwQixzQkFBc0IsRUFDaEQsV0FDRixDQUFDLENBQUE7Ozs7OztFQU1ELHVCQUF1QjtJQUNyQixJQUFJLFFBQVEsRUFBRSxDQUFBO0lBQ2QsTUFBTSxRQUFRLDZCQUE2QixFQUFFLENBQUE7SUFDN0MsSUFBSSxLQUFLLEVBQUU7TUFDVCxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUN2Qjs7SUFFQSxJQUFJLEdBQUEsYUFBWSxFQUFFO01BQ2hCLHFCQUFBLFFBQU8sT0FBTyxhQUFhLENBQUM7UUFBRSxNQUFNLEtBQUE7T0FBTyxDQUFDLENBQUE7TUFDNUMscUJBQUEsUUFBTyxPQUFPLHdCQUF3QixDQUFDO1FBQUUsT0FBTyxTQUFBO09BQVcsQ0FBQyxDQUFBO0tBQzdELE1BQU07TUFDTCxxQkFBQSxRQUFPLGNBQWMsYUFBYSxDQUFDO1FBQUUsTUFBTSxLQUFBO09BQU8sQ0FBQyxDQUFBO01BQ25ELHFCQUFBLFFBQU8sY0FBYyx3QkFBd0IsQ0FBQztRQUFFLE9BQU8sU0FBQTtPQUFXLENBQUMsQ0FBQTtLQUNyRTtHQUNGO0VBRUEseUNBQXlDO0lBQ3ZDLE1BQU0sdUJBQ0osVUFBVSxtQkFBbUIsc0JBQXNCLEVBQUUsQ0FBQTtJQUN2RCxNQUFNLHdCQUNKLFVBQVUsbUJBQW1CLGlCQUFpQixPQUFPLENBQUE7SUFDdkQsT0FBTyxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQTtHQUNyRDtFQUVBLG1CQUFtQixHQUFHLENBQ3BCLG9CQUFBLDRCQUEyQixhQUFhLEVBQ3hDLENBQUM7O0dBQXVCLEtBQUs7SUFDM0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFO01BQ3hCLDZCQUE2QixFQUFFLENBQUE7S0FDaEMsTUFBTSxJQUFJLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxFQUFFO01BQzlDLFNBQVMsRUFBRSxDQUFBO0tBQ2I7R0FFSixDQUFDLENBQUE7RUFFRCx5Q0FBeUM7SUFDdkMsTUFBTSxLQUFLLENBQ1QsVUFBVSxhQUFhLGVBQWUsb0JBQW9CLEVBQzVELENBQUMsUUFBUSxDQUFFLFFBQ1QsVUFBVSxhQUFhLGVBQWUsb0JBQW9CLENBQUMsSUFBSSxDQUNqRSxDQUFDLENBQUE7SUFDRCxVQUFVLG9CQUFvQixpQkFBaUIsQ0FDN0MsWUFBQSw4QkFDRixDQUFDLENBQUE7SUFDRCxVQUFVLHlCQUF5QixpQkFBaUIsQ0FDbEQsWUFBQSwwQkFDRixDQUFDLENBQUE7SUFDRCxVQUFVLDhCQUE4QixpQkFBaUIsQ0FDdkQsWUFBQSwwQkFDRixDQUFDLENBQUE7OztJQUdELE1BQU0sT0FBTyxDQUFDLFVBQVUsbUJBQW1CLE1BQU0saUJBQWlCLENBQUMsUUFBUSxDQUN6RSxDQUFDOzs7S0FBWSxLQUFLO01BQ2hCLFFBQVEsSUFBSTs7VUFHUixVQUFVLG1CQUFtQixPQUFPLENBQ2xDLEVBQUUsRUFDRixhQUFBLFVBQVMsU0FBUyxvQkFBb0IsRUFDeEMsQ0FBQyxDQUFBO1VBQ0QsTUFBQTtPQUNKO0tBRUosQ0FBQyxDQUFBO0lBRUQsV0FBVyxFQUFFLENBQUE7R0FDZjtDQUdGOzs7Ozs7Ozs7QUFTQSwyQkFBMkI7RUFDekIsTUFBTSxPQUFPLE1BQU0sUUFBUSxjQUFjLEVBQUUsQ0FBQTtFQUMzQyxNQUFNLDZCQUE2QixPQUFPLENBQ3hDLElBQUksS0FBSyxDQUFFLE9BQVEsbUJBQW1CLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FDaEQsQ0FBQyxDQUFBOzs7RUFHRCxNQUFNLFlBQ0osSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7RUFDN0MsSUFDRSxDQUFDLGNBQWMsS0FDZCxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsSUFDM0IsQ0FBQywwQkFBMEIsRUFDM0I7SUFDQSxpQkFBaUIsSUFBSSxDQUFBO0lBQ3JCLElBQUk7TUFDRixNQUFNLGlCQUFpQixVQUFVLG1CQUFtQixrQkFBa0IsRUFBRSxDQUFBO01BQ3hFLE1BQU0sbUJBQW1CLFVBQVUsQ0FDaEMsY0FDQyxVQUFVLG1CQUFtQixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFDN0QsY0FDRixDQUFDLENBQUE7S0FDRixTQUFTO01BQ1IsaUJBQWlCLEtBQUssQ0FBQTtLQUN4QjtHQUNGO0NBQ0Y7OztBQUdBLE1BQU0sdUJBQXVCLE1BQU07RUFDakMsSUFBSSxVQUFVLEVBQUU7SUFDZCxVQUFVLHNCQUFzQixhQUFhLENBQUM7TUFDNUMsQ0FBQyxZQUFBLHFCQUFvQixlQUFlLEdBQUcsSUFBSSxJQUFJLEVBQUUsWUFDbkMsRUFBRSxNQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCLENBQUMsQ0FBQTs7SUFDRixVQUFVLHNCQUFzQiwyQkFBMkIsQ0FBQztNQUMxRCxVQUFVLFlBQUEseUJBQXdCLElBQUk7TUFDdEMsT0FBTyxZQUFBLHFCQUFvQixhQUFhO01BQ3hDLFlBQVksRUFBQztLQUNkLENBQUMsQ0FBQTtJQUNGLE9BQUE7R0FDRjtFQUNBLFVBQVUsQ0FBQyxNQUFNOztJQUVmLG9CQUFvQixFQUFFLENBQUE7R0FDdkIsRUFBRSxJQUFJLENBQUMsQ0FBQTtDQUNULENBQUE7OztBQUdELHFCQUFBLFFBQU8sUUFBUSxZQUFZLFlBQVksQ0FBQyxDQUFDOztDQUFVLEtBQUs7RUFDdEQsSUFDRSxNQUFNLEtBQUssU0FBUyxJQUNwQixFQUFFLE9BQU8sSUFBSSxlQUFlLElBQUksT0FBTyxJQUFJLFFBQVEsQ0FBQyxFQUNwRDtJQUNBLG9CQUFvQixFQUFFLENBQUE7SUFDdEIsUUFBUSx1QkFBdUIsRUFBRSxDQUFBO0dBQ25DO0NBQ0QsQ0FBQyxDQUFBO0FBRUYsMENBQTBDO0VBQ3hDLE1BQU0sV0FBVyxlQUFlLEdBQUcsWUFBWTtJQUM3QyxNQUFNLFlBQVksS0FBSyxTQUFTLEVBQUUsQ0FBQTtJQUNsQyxNQUFNLGFBQWEsQ0FBQSxDQUFBLEVBQUEsT0FBQSxXQUFVLEVBQUM7TUFBRSxVQUFVLFNBQUE7S0FBVyxFQUFFLFlBQUEsYUFBWSxDQUFDLENBQUE7SUFDcEUsT0FBTztNQUNMLFNBQVMsTUFBTSxVQUFVLFVBQVU7TUFDbkMsT0FBTyxVQUFVO01BQ2pCLFNBQVMsUUFBUSxXQUFXLEVBQUM7S0FDOUIsQ0FBQTtHQUNGLENBQUE7Q0FDSDtBQUVBLDBCQUEwQjtFQUN4QixVQUFVLEVBQUUsTUFBTSxDQUFDLFNBQUEsUUFBRyxNQUFNLENBQUMsQ0FBQTtDQUMvQjtBQUVBLElBQUksQ0FBQyxPQUFPLElBQUksK0JBQStCLEVBQUU7RUFDL0MsY0FBYyxFQUFFLENBQUE7Q0FDbEIiLCJmaWxlIjoiYmFja2dyb3VuZC02LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hZmludG9zaC9wdW1wIHdpdGhcbi8vIHBlcm1pc3Npb24gZnJvbSB0aGUgYXV0aG9yLCBNYXRoaWFzIEJ1dXMgKEBtYWZpbnRvc2gpLlxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW9zO1xuXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBfcmVxdWlyZSRjb2RlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL2Vycm9ycycpLmNvZGVzLFxuICAgIEVSUl9NSVNTSU5HX0FSR1MgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfTUlTU0lOR19BUkdTLFxuICAgIEVSUl9TVFJFQU1fREVTVFJPWUVEID0gX3JlcXVpcmUkY29kZXMuRVJSX1NUUkVBTV9ERVNUUk9ZRUQ7XG5cbmZ1bmN0aW9uIG5vb3AoZXJyKSB7XG4gIC8vIFJldGhyb3cgdGhlIGVycm9yIGlmIGl0IGV4aXN0cyB0byBhdm9pZCBzd2FsbG93aW5nIGl0XG4gIGlmIChlcnIpIHRocm93IGVycjtcbn1cblxuZnVuY3Rpb24gaXNSZXF1ZXN0KHN0cmVhbSkge1xuICByZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiB0eXBlb2Ygc3RyZWFtLmFib3J0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ZXIoc3RyZWFtLCByZWFkaW5nLCB3cml0aW5nLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2spO1xuICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gIHN0cmVhbS5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VkID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChlb3MgPT09IHVuZGVmaW5lZCkgZW9zID0gcmVxdWlyZSgnLi9lbmQtb2Ytc3RyZWFtJyk7XG4gIGVvcyhzdHJlYW0sIHtcbiAgICByZWFkYWJsZTogcmVhZGluZyxcbiAgICB3cml0YWJsZTogd3JpdGluZ1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgY2xvc2VkID0gdHJ1ZTtcbiAgICBjYWxsYmFjaygpO1xuICB9KTtcbiAgdmFyIGRlc3Ryb3llZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChjbG9zZWQpIHJldHVybjtcbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm47XG4gICAgZGVzdHJveWVkID0gdHJ1ZTsgLy8gcmVxdWVzdC5kZXN0cm95IGp1c3QgZG8gLmVuZCAtIC5hYm9ydCBpcyB3aGF0IHdlIHdhbnRcblxuICAgIGlmIChpc1JlcXVlc3Qoc3RyZWFtKSkgcmV0dXJuIHN0cmVhbS5hYm9ydCgpO1xuICAgIGlmICh0eXBlb2Ygc3RyZWFtLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHJldHVybiBzdHJlYW0uZGVzdHJveSgpO1xuICAgIGNhbGxiYWNrKGVyciB8fCBuZXcgRVJSX1NUUkVBTV9ERVNUUk9ZRUQoJ3BpcGUnKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGwoZm4pIHtcbiAgZm4oKTtcbn1cblxuZnVuY3Rpb24gcGlwZShmcm9tLCB0bykge1xuICByZXR1cm4gZnJvbS5waXBlKHRvKTtcbn1cblxuZnVuY3Rpb24gcG9wQ2FsbGJhY2soc3RyZWFtcykge1xuICBpZiAoIXN0cmVhbXMubGVuZ3RoKSByZXR1cm4gbm9vcDtcbiAgaWYgKHR5cGVvZiBzdHJlYW1zW3N0cmVhbXMubGVuZ3RoIC0gMV0gIT09ICdmdW5jdGlvbicpIHJldHVybiBub29wO1xuICByZXR1cm4gc3RyZWFtcy5wb3AoKTtcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdHJlYW1zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0cmVhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2FsbGJhY2sgPSBwb3BDYWxsYmFjayhzdHJlYW1zKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RyZWFtc1swXSkpIHN0cmVhbXMgPSBzdHJlYW1zWzBdO1xuXG4gIGlmIChzdHJlYW1zLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRVJSX01JU1NJTkdfQVJHUygnc3RyZWFtcycpO1xuICB9XG5cbiAgdmFyIGVycm9yO1xuICB2YXIgZGVzdHJveXMgPSBzdHJlYW1zLm1hcChmdW5jdGlvbiAoc3RyZWFtLCBpKSB7XG4gICAgdmFyIHJlYWRpbmcgPSBpIDwgc3RyZWFtcy5sZW5ndGggLSAxO1xuICAgIHZhciB3cml0aW5nID0gaSA+IDA7XG4gICAgcmV0dXJuIGRlc3Ryb3llcihzdHJlYW0sIHJlYWRpbmcsIHdyaXRpbmcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuICAgICAgaWYgKGVycikgZGVzdHJveXMuZm9yRWFjaChjYWxsKTtcbiAgICAgIGlmIChyZWFkaW5nKSByZXR1cm47XG4gICAgICBkZXN0cm95cy5mb3JFYWNoKGNhbGwpO1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHN0cmVhbXMucmVkdWNlKHBpcGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBpcGVsaW5lOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVSUl9JTlZBTElEX09QVF9WQUxVRSA9IHJlcXVpcmUoJy4uLy4uLy4uL2Vycm9ycycpLmNvZGVzLkVSUl9JTlZBTElEX09QVF9WQUxVRTtcblxuZnVuY3Rpb24gaGlnaFdhdGVyTWFya0Zyb20ob3B0aW9ucywgaXNEdXBsZXgsIGR1cGxleEtleSkge1xuICByZXR1cm4gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrICE9IG51bGwgPyBvcHRpb25zLmhpZ2hXYXRlck1hcmsgOiBpc0R1cGxleCA/IG9wdGlvbnNbZHVwbGV4S2V5XSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEhpZ2hXYXRlck1hcmsoc3RhdGUsIG9wdGlvbnMsIGR1cGxleEtleSwgaXNEdXBsZXgpIHtcbiAgdmFyIGh3bSA9IGhpZ2hXYXRlck1hcmtGcm9tKG9wdGlvbnMsIGlzRHVwbGV4LCBkdXBsZXhLZXkpO1xuXG4gIGlmIChod20gIT0gbnVsbCkge1xuICAgIGlmICghKGlzRmluaXRlKGh3bSkgJiYgTWF0aC5mbG9vcihod20pID09PSBod20pIHx8IGh3bSA8IDApIHtcbiAgICAgIHZhciBuYW1lID0gaXNEdXBsZXggPyBkdXBsZXhLZXkgOiAnaGlnaFdhdGVyTWFyayc7XG4gICAgICB0aHJvdyBuZXcgRVJSX0lOVkFMSURfT1BUX1ZBTFVFKG5hbWUsIGh3bSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaHdtKTtcbiAgfSAvLyBEZWZhdWx0IHZhbHVlXG5cblxuICByZXR1cm4gc3RhdGUub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0SGlnaFdhdGVyTWFyazogZ2V0SGlnaFdhdGVyTWFya1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcmVhZGFibGUuanMnKTtcbmV4cG9ydHMuU3RyZWFtID0gZXhwb3J0cztcbmV4cG9ydHMuUmVhZGFibGUgPSBleHBvcnRzO1xuZXhwb3J0cy5Xcml0YWJsZSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fd3JpdGFibGUuanMnKTtcbmV4cG9ydHMuRHVwbGV4ID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9kdXBsZXguanMnKTtcbmV4cG9ydHMuVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMnKTtcbmV4cG9ydHMuUGFzc1Rocm91Z2ggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3Bhc3N0aHJvdWdoLmpzJyk7XG5leHBvcnRzLmZpbmlzaGVkID0gcmVxdWlyZSgnLi9saWIvaW50ZXJuYWwvc3RyZWFtcy9lbmQtb2Ytc3RyZWFtLmpzJyk7XG5leHBvcnRzLnBpcGVsaW5lID0gcmVxdWlyZSgnLi9saWIvaW50ZXJuYWwvc3RyZWFtcy9waXBlbGluZS5qcycpO1xuIiwidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cbi8vIHRocm91Z2hcbi8vXG4vLyBhIHN0cmVhbSB0aGF0IGRvZXMgbm90aGluZyBidXQgcmUtZW1pdCB0aGUgaW5wdXQuXG4vLyB1c2VmdWwgZm9yIGFnZ3JlZ2F0aW5nIGEgc2VyaWVzIG9mIGNoYW5naW5nIGJ1dCBub3QgZW5kaW5nIHN0cmVhbXMgaW50byBvbmUgc3RyZWFtKVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0aHJvdWdoXG50aHJvdWdoLnRocm91Z2ggPSB0aHJvdWdoXG5cbi8vY3JlYXRlIGEgcmVhZGFibGUgd3JpdGFibGUgc3RyZWFtLlxuXG5mdW5jdGlvbiB0aHJvdWdoICh3cml0ZSwgZW5kLCBvcHRzKSB7XG4gIHdyaXRlID0gd3JpdGUgfHwgZnVuY3Rpb24gKGRhdGEpIHsgdGhpcy5xdWV1ZShkYXRhKSB9XG4gIGVuZCA9IGVuZCB8fCBmdW5jdGlvbiAoKSB7IHRoaXMucXVldWUobnVsbCkgfVxuXG4gIHZhciBlbmRlZCA9IGZhbHNlLCBkZXN0cm95ZWQgPSBmYWxzZSwgYnVmZmVyID0gW10sIF9lbmRlZCA9IGZhbHNlXG4gIHZhciBzdHJlYW0gPSBuZXcgU3RyZWFtKClcbiAgc3RyZWFtLnJlYWRhYmxlID0gc3RyZWFtLndyaXRhYmxlID0gdHJ1ZVxuICBzdHJlYW0ucGF1c2VkID0gZmFsc2VcblxuLy8gIHN0cmVhbS5hdXRvUGF1c2UgICA9ICEob3B0cyAmJiBvcHRzLmF1dG9QYXVzZSAgID09PSBmYWxzZSlcbiAgc3RyZWFtLmF1dG9EZXN0cm95ID0gIShvcHRzICYmIG9wdHMuYXV0b0Rlc3Ryb3kgPT09IGZhbHNlKVxuXG4gIHN0cmVhbS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgd3JpdGUuY2FsbCh0aGlzLCBkYXRhKVxuICAgIHJldHVybiAhc3RyZWFtLnBhdXNlZFxuICB9XG5cbiAgZnVuY3Rpb24gZHJhaW4oKSB7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCAmJiAhc3RyZWFtLnBhdXNlZCkge1xuICAgICAgdmFyIGRhdGEgPSBidWZmZXIuc2hpZnQoKVxuICAgICAgaWYobnVsbCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5lbWl0KCdlbmQnKVxuICAgICAgZWxzZVxuICAgICAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgc3RyZWFtLnF1ZXVlID0gc3RyZWFtLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgY29uc29sZS5lcnJvcihlbmRlZClcbiAgICBpZihfZW5kZWQpIHJldHVybiBzdHJlYW1cbiAgICBpZihkYXRhID09PSBudWxsKSBfZW5kZWQgPSB0cnVlXG4gICAgYnVmZmVyLnB1c2goZGF0YSlcbiAgICBkcmFpbigpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG5cbiAgLy90aGlzIHdpbGwgYmUgcmVnaXN0ZXJlZCBhcyB0aGUgZmlyc3QgJ2VuZCcgbGlzdGVuZXJcbiAgLy9tdXN0IGNhbGwgZGVzdHJveSBuZXh0IHRpY2ssIHRvIG1ha2Ugc3VyZSB3ZSdyZSBhZnRlciBhbnlcbiAgLy9zdHJlYW0gcGlwZWQgZnJvbSBoZXJlLlxuICAvL3RoaXMgaXMgb25seSBhIHByb2JsZW0gaWYgZW5kIGlzIG5vdCBlbWl0dGVkIHN5bmNocm9ub3VzbHkuXG4gIC8vYSBuaWNlciB3YXkgdG8gZG8gdGhpcyBpcyB0byBtYWtlIHN1cmUgdGhpcyBpcyB0aGUgbGFzdCBsaXN0ZW5lciBmb3IgJ2VuZCdcblxuICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZVxuICAgIGlmKCFzdHJlYW0ud3JpdGFibGUgJiYgc3RyZWFtLmF1dG9EZXN0cm95KVxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0cmVhbS5kZXN0cm95KClcbiAgICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gX2VuZCAoKSB7XG4gICAgc3RyZWFtLndyaXRhYmxlID0gZmFsc2VcbiAgICBlbmQuY2FsbChzdHJlYW0pXG4gICAgaWYoIXN0cmVhbS5yZWFkYWJsZSAmJiBzdHJlYW0uYXV0b0Rlc3Ryb3kpXG4gICAgICBzdHJlYW0uZGVzdHJveSgpXG4gIH1cblxuICBzdHJlYW0uZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZihlbmRlZCkgcmV0dXJuXG4gICAgZW5kZWQgPSB0cnVlXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCkgc3RyZWFtLndyaXRlKGRhdGEpXG4gICAgX2VuZCgpIC8vIHdpbGwgZW1pdCBvciBxdWV1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGRlc3Ryb3llZCkgcmV0dXJuXG4gICAgZGVzdHJveWVkID0gdHJ1ZVxuICAgIGVuZGVkID0gdHJ1ZVxuICAgIGJ1ZmZlci5sZW5ndGggPSAwXG4gICAgc3RyZWFtLndyaXRhYmxlID0gc3RyZWFtLnJlYWRhYmxlID0gZmFsc2VcbiAgICBzdHJlYW0uZW1pdCgnY2xvc2UnKVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihzdHJlYW0ucGF1c2VkKSByZXR1cm5cbiAgICBzdHJlYW0ucGF1c2VkID0gdHJ1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoc3RyZWFtLnBhdXNlZCkge1xuICAgICAgc3RyZWFtLnBhdXNlZCA9IGZhbHNlXG4gICAgICBzdHJlYW0uZW1pdCgncmVzdW1lJylcbiAgICB9XG4gICAgZHJhaW4oKVxuICAgIC8vbWF5IGhhdmUgYmVjb21lIHBhdXNlZCBhZ2FpbixcbiAgICAvL2FzIGRyYWluIGVtaXRzICdkYXRhJy5cbiAgICBpZighc3RyZWFtLnBhdXNlZClcbiAgICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG4gIHJldHVybiBzdHJlYW1cbn1cblxuIiwiY29uc3QgQk4gPSByZXF1aXJlKCdibi5qcycpXG5jb25zdCBFQyA9IHJlcXVpcmUoJ2VsbGlwdGljJykuZWNcbmNvbnN0IHNlY3AyNTZrMSA9IG5ldyBFQygnc2VjcDI1NmsxJylcbmNvbnN0IGRldGVybWluaXN0aWNHZW5lcmF0ZUsgPSByZXF1aXJlKCcuL3JmYzY5NzknKVxuXG5jb25zdCBaRVJPMzIgPSBCdWZmZXIuYWxsb2MoMzIsIDApXG5jb25zdCBFQ19HUk9VUF9PUkRFUiA9IEJ1ZmZlci5mcm9tKCdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZWJhYWVkY2U2YWY0OGEwM2JiZmQyNWU4Y2QwMzY0MTQxJywgJ2hleCcpXG5jb25zdCBFQ19QID0gQnVmZmVyLmZyb20oJ2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlZmZmZmZjMmYnLCAnaGV4JylcblxuY29uc3QgbiA9IHNlY3AyNTZrMS5jdXJ2ZS5uXG5jb25zdCBuRGl2MiA9IG4uc2hybigxKVxuY29uc3QgRyA9IHNlY3AyNTZrMS5jdXJ2ZS5nXG5cbmNvbnN0IFRIUk9XX0JBRF9QUklWQVRFID0gJ0V4cGVjdGVkIFByaXZhdGUnXG5jb25zdCBUSFJPV19CQURfUE9JTlQgPSAnRXhwZWN0ZWQgUG9pbnQnXG5jb25zdCBUSFJPV19CQURfVFdFQUsgPSAnRXhwZWN0ZWQgVHdlYWsnXG5jb25zdCBUSFJPV19CQURfSEFTSCA9ICdFeHBlY3RlZCBIYXNoJ1xuY29uc3QgVEhST1dfQkFEX1NJR05BVFVSRSA9ICdFeHBlY3RlZCBTaWduYXR1cmUnXG5jb25zdCBUSFJPV19CQURfRVhUUkFfREFUQSA9ICdFeHBlY3RlZCBFeHRyYSBEYXRhICgzMiBieXRlcyknXG5cbmZ1bmN0aW9uIGlzU2NhbGFyICh4KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoeCkgJiYgeC5sZW5ndGggPT09IDMyXG59XG5cbmZ1bmN0aW9uIGlzT3JkZXJTY2FsYXIgKHgpIHtcbiAgaWYgKCFpc1NjYWxhcih4KSkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiB4LmNvbXBhcmUoRUNfR1JPVVBfT1JERVIpIDwgMCAvLyA8IEdcbn1cblxuZnVuY3Rpb24gaXNQb2ludCAocCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihwKSkgcmV0dXJuIGZhbHNlXG4gIGlmIChwLmxlbmd0aCA8IDMzKSByZXR1cm4gZmFsc2VcblxuICBjb25zdCB0ID0gcFswXVxuICBjb25zdCB4ID0gcC5zbGljZSgxLCAzMylcbiAgaWYgKHguY29tcGFyZShaRVJPMzIpID09PSAwKSByZXR1cm4gZmFsc2VcbiAgaWYgKHguY29tcGFyZShFQ19QKSA+PSAwKSByZXR1cm4gZmFsc2VcbiAgaWYgKCh0ID09PSAweDAyIHx8IHQgPT09IDB4MDMpICYmIHAubGVuZ3RoID09PSAzMykge1xuICAgIHRyeSB7IGRlY29kZUZyb20ocCkgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2UgfSAvLyBUT0RPOiB0ZW1wb3JhcnlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgeSA9IHAuc2xpY2UoMzMpXG4gIGlmICh5LmNvbXBhcmUoWkVSTzMyKSA9PT0gMCkgcmV0dXJuIGZhbHNlXG4gIGlmICh5LmNvbXBhcmUoRUNfUCkgPj0gMCkgcmV0dXJuIGZhbHNlXG4gIGlmICh0ID09PSAweDA0ICYmIHAubGVuZ3RoID09PSA2NSkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIF9faXNQb2ludENvbXByZXNzZWQgKHApIHtcbiAgcmV0dXJuIHBbMF0gIT09IDB4MDRcbn1cblxuZnVuY3Rpb24gaXNQb2ludENvbXByZXNzZWQgKHApIHtcbiAgaWYgKCFpc1BvaW50KHApKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIF9faXNQb2ludENvbXByZXNzZWQocClcbn1cblxuZnVuY3Rpb24gaXNQcml2YXRlICh4KSB7XG4gIGlmICghaXNTY2FsYXIoeCkpIHJldHVybiBmYWxzZVxuICByZXR1cm4geC5jb21wYXJlKFpFUk8zMikgPiAwICYmIC8vID4gMFxuICAgIHguY29tcGFyZShFQ19HUk9VUF9PUkRFUikgPCAwIC8vIDwgR1xufVxuXG5mdW5jdGlvbiBpc1NpZ25hdHVyZSAodmFsdWUpIHtcbiAgY29uc3QgciA9IHZhbHVlLnNsaWNlKDAsIDMyKVxuICBjb25zdCBzID0gdmFsdWUuc2xpY2UoMzIsIDY0KVxuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDY0ICYmXG4gICAgci5jb21wYXJlKEVDX0dST1VQX09SREVSKSA8IDAgJiZcbiAgICBzLmNvbXBhcmUoRUNfR1JPVVBfT1JERVIpIDwgMFxufVxuXG5mdW5jdGlvbiBhc3N1bWVDb21wcmVzc2lvbiAodmFsdWUsIHB1YmtleSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwdWJrZXkgIT09IHVuZGVmaW5lZCkgcmV0dXJuIF9faXNQb2ludENvbXByZXNzZWQocHVia2V5KVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWVcbiAgcmV0dXJuIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGZyb21CdWZmZXIgKGQpIHsgcmV0dXJuIG5ldyBCTihkKSB9XG5mdW5jdGlvbiB0b0J1ZmZlciAoZCkgeyByZXR1cm4gZC50b0FycmF5TGlrZShCdWZmZXIsICdiZScsIDMyKSB9XG5mdW5jdGlvbiBkZWNvZGVGcm9tIChQKSB7IHJldHVybiBzZWNwMjU2azEuY3VydmUuZGVjb2RlUG9pbnQoUCkgfVxuZnVuY3Rpb24gZ2V0RW5jb2RlZCAoUCwgY29tcHJlc3NlZCkgeyByZXR1cm4gQnVmZmVyLmZyb20oUC5fZW5jb2RlKGNvbXByZXNzZWQpKSB9XG5cbmZ1bmN0aW9uIHBvaW50QWRkIChwQSwgcEIsIF9fY29tcHJlc3NlZCkge1xuICBpZiAoIWlzUG9pbnQocEEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFRIUk9XX0JBRF9QT0lOVClcbiAgaWYgKCFpc1BvaW50KHBCKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfUE9JTlQpXG5cbiAgY29uc3QgYSA9IGRlY29kZUZyb20ocEEpXG4gIGNvbnN0IGIgPSBkZWNvZGVGcm9tKHBCKVxuICBjb25zdCBwcCA9IGEuYWRkKGIpXG4gIGlmIChwcC5pc0luZmluaXR5KCkpIHJldHVybiBudWxsXG5cbiAgY29uc3QgY29tcHJlc3NlZCA9IGFzc3VtZUNvbXByZXNzaW9uKF9fY29tcHJlc3NlZCwgcEEpXG4gIHJldHVybiBnZXRFbmNvZGVkKHBwLCBjb21wcmVzc2VkKVxufVxuXG5mdW5jdGlvbiBwb2ludEFkZFNjYWxhciAocCwgdHdlYWssIF9fY29tcHJlc3NlZCkge1xuICBpZiAoIWlzUG9pbnQocCkpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1BPSU5UKVxuICBpZiAoIWlzT3JkZXJTY2FsYXIodHdlYWspKSB0aHJvdyBuZXcgVHlwZUVycm9yKFRIUk9XX0JBRF9UV0VBSylcblxuICBjb25zdCBjb21wcmVzc2VkID0gYXNzdW1lQ29tcHJlc3Npb24oX19jb21wcmVzc2VkLCBwKVxuICBjb25zdCBwcCA9IGRlY29kZUZyb20ocClcbiAgaWYgKHR3ZWFrLmNvbXBhcmUoWkVSTzMyKSA9PT0gMCkgcmV0dXJuIGdldEVuY29kZWQocHAsIGNvbXByZXNzZWQpXG5cbiAgY29uc3QgdHQgPSBmcm9tQnVmZmVyKHR3ZWFrKVxuICBjb25zdCBxcSA9IEcubXVsKHR0KVxuICBjb25zdCB1dSA9IHBwLmFkZChxcSlcbiAgaWYgKHV1LmlzSW5maW5pdHkoKSkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gZ2V0RW5jb2RlZCh1dSwgY29tcHJlc3NlZClcbn1cblxuZnVuY3Rpb24gcG9pbnRDb21wcmVzcyAocCwgX19jb21wcmVzc2VkKSB7XG4gIGlmICghaXNQb2ludChwKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfUE9JTlQpXG5cbiAgY29uc3QgcHAgPSBkZWNvZGVGcm9tKHApXG4gIGlmIChwcC5pc0luZmluaXR5KCkpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1BPSU5UKVxuXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBhc3N1bWVDb21wcmVzc2lvbihfX2NvbXByZXNzZWQsIHApXG5cbiAgcmV0dXJuIGdldEVuY29kZWQocHAsIGNvbXByZXNzZWQpXG59XG5cbmZ1bmN0aW9uIHBvaW50RnJvbVNjYWxhciAoZCwgX19jb21wcmVzc2VkKSB7XG4gIGlmICghaXNQcml2YXRlKGQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFRIUk9XX0JBRF9QUklWQVRFKVxuXG4gIGNvbnN0IGRkID0gZnJvbUJ1ZmZlcihkKVxuICBjb25zdCBwcCA9IEcubXVsKGRkKVxuICBpZiAocHAuaXNJbmZpbml0eSgpKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBhc3N1bWVDb21wcmVzc2lvbihfX2NvbXByZXNzZWQpXG4gIHJldHVybiBnZXRFbmNvZGVkKHBwLCBjb21wcmVzc2VkKVxufVxuXG5mdW5jdGlvbiBwb2ludE11bHRpcGx5IChwLCB0d2VhaywgX19jb21wcmVzc2VkKSB7XG4gIGlmICghaXNQb2ludChwKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfUE9JTlQpXG4gIGlmICghaXNPcmRlclNjYWxhcih0d2VhaykpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1RXRUFLKVxuXG4gIGNvbnN0IGNvbXByZXNzZWQgPSBhc3N1bWVDb21wcmVzc2lvbihfX2NvbXByZXNzZWQsIHApXG4gIGNvbnN0IHBwID0gZGVjb2RlRnJvbShwKVxuICBjb25zdCB0dCA9IGZyb21CdWZmZXIodHdlYWspXG4gIGNvbnN0IHFxID0gcHAubXVsKHR0KVxuICBpZiAocXEuaXNJbmZpbml0eSgpKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBnZXRFbmNvZGVkKHFxLCBjb21wcmVzc2VkKVxufVxuXG5mdW5jdGlvbiBwcml2YXRlQWRkIChkLCB0d2Vhaykge1xuICBpZiAoIWlzUHJpdmF0ZShkKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfUFJJVkFURSlcbiAgaWYgKCFpc09yZGVyU2NhbGFyKHR3ZWFrKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfVFdFQUspXG5cbiAgY29uc3QgZGQgPSBmcm9tQnVmZmVyKGQpXG4gIGNvbnN0IHR0ID0gZnJvbUJ1ZmZlcih0d2VhaylcbiAgY29uc3QgZHQgPSB0b0J1ZmZlcihkZC5hZGQodHQpLnVtb2QobikpXG4gIGlmICghaXNQcml2YXRlKGR0KSkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gZHRcbn1cblxuZnVuY3Rpb24gcHJpdmF0ZVN1YiAoZCwgdHdlYWspIHtcbiAgaWYgKCFpc1ByaXZhdGUoZCkpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1BSSVZBVEUpXG4gIGlmICghaXNPcmRlclNjYWxhcih0d2VhaykpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1RXRUFLKVxuXG4gIGNvbnN0IGRkID0gZnJvbUJ1ZmZlcihkKVxuICBjb25zdCB0dCA9IGZyb21CdWZmZXIodHdlYWspXG4gIGNvbnN0IGR0ID0gdG9CdWZmZXIoZGQuc3ViKHR0KS51bW9kKG4pKVxuICBpZiAoIWlzUHJpdmF0ZShkdCkpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGR0XG59XG5cbmZ1bmN0aW9uIHNpZ24gKGhhc2gsIHgpIHtcbiAgcmV0dXJuIF9fc2lnbihoYXNoLCB4KVxufVxuXG5mdW5jdGlvbiBzaWduV2l0aEVudHJvcHkgKGhhc2gsIHgsIGFkZERhdGEpIHtcbiAgcmV0dXJuIF9fc2lnbihoYXNoLCB4LCBhZGREYXRhKVxufVxuXG5mdW5jdGlvbiBfX3NpZ24gKGhhc2gsIHgsIGFkZERhdGEpIHtcbiAgaWYgKCFpc1NjYWxhcihoYXNoKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfSEFTSClcbiAgaWYgKCFpc1ByaXZhdGUoeCkpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1BSSVZBVEUpXG4gIGlmIChhZGREYXRhICE9PSB1bmRlZmluZWQgJiYgIWlzU2NhbGFyKGFkZERhdGEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFRIUk9XX0JBRF9FWFRSQV9EQVRBKVxuXG4gIGNvbnN0IGQgPSBmcm9tQnVmZmVyKHgpXG4gIGNvbnN0IGUgPSBmcm9tQnVmZmVyKGhhc2gpXG5cbiAgbGV0IHIsIHNcbiAgY29uc3QgY2hlY2tTaWcgPSBmdW5jdGlvbiAoaykge1xuICAgIGNvbnN0IGtJID0gZnJvbUJ1ZmZlcihrKVxuICAgIGNvbnN0IFEgPSBHLm11bChrSSlcblxuICAgIGlmIChRLmlzSW5maW5pdHkoKSkgcmV0dXJuIGZhbHNlXG5cbiAgICByID0gUS54LnVtb2QobilcbiAgICBpZiAoci5pc1plcm8oKSA9PT0gMCkgcmV0dXJuIGZhbHNlXG5cbiAgICBzID0ga0lcbiAgICAgIC5pbnZtKG4pXG4gICAgICAubXVsKGUuYWRkKGQubXVsKHIpKSlcbiAgICAgIC51bW9kKG4pXG4gICAgaWYgKHMuaXNaZXJvKCkgPT09IDApIHJldHVybiBmYWxzZVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGRldGVybWluaXN0aWNHZW5lcmF0ZUsoaGFzaCwgeCwgY2hlY2tTaWcsIGlzUHJpdmF0ZSwgYWRkRGF0YSlcblxuICAvLyBlbmZvcmNlIGxvdyBTIHZhbHVlcywgc2VlIGJpcDYyOiAnbG93IHMgdmFsdWVzIGluIHNpZ25hdHVyZXMnXG4gIGlmIChzLmNtcChuRGl2MikgPiAwKSB7XG4gICAgcyA9IG4uc3ViKHMpXG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUoNjQpXG4gIHRvQnVmZmVyKHIpLmNvcHkoYnVmZmVyLCAwKVxuICB0b0J1ZmZlcihzKS5jb3B5KGJ1ZmZlciwgMzIpXG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gdmVyaWZ5IChoYXNoLCBxLCBzaWduYXR1cmUsIHN0cmljdCkge1xuICBpZiAoIWlzU2NhbGFyKGhhc2gpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFRIUk9XX0JBRF9IQVNIKVxuICBpZiAoIWlzUG9pbnQocSkpIHRocm93IG5ldyBUeXBlRXJyb3IoVEhST1dfQkFEX1BPSU5UKVxuXG4gIC8vIDEuNC4xIEVuZm9yY2UgciBhbmQgcyBhcmUgYm90aCBpbnRlZ2VycyBpbiB0aGUgaW50ZXJ2YWwgWzEsIG4g4oiSIDFdICgxLCBpc1NpZ25hdHVyZSBlbmZvcmNlcyAnPCBuIC0gMScpXG4gIGlmICghaXNTaWduYXR1cmUoc2lnbmF0dXJlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihUSFJPV19CQURfU0lHTkFUVVJFKVxuXG4gIGNvbnN0IFEgPSBkZWNvZGVGcm9tKHEpXG4gIGNvbnN0IHIgPSBmcm9tQnVmZmVyKHNpZ25hdHVyZS5zbGljZSgwLCAzMikpXG4gIGNvbnN0IHMgPSBmcm9tQnVmZmVyKHNpZ25hdHVyZS5zbGljZSgzMiwgNjQpKVxuXG4gIGlmIChzdHJpY3QgJiYgcy5jbXAobkRpdjIpID4gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gMS40LjEgRW5mb3JjZSByIGFuZCBzIGFyZSBib3RoIGludGVnZXJzIGluIHRoZSBpbnRlcnZhbCBbMSwgbiDiiJIgMV0gKDIsIGVuZm9yY2VzICc+IDAnKVxuICBpZiAoci5ndG4oMCkgPD0gMCAvKiB8fCByLmNvbXBhcmVUbyhuKSA+PSAwICovKSByZXR1cm4gZmFsc2VcbiAgaWYgKHMuZ3RuKDApIDw9IDAgLyogfHwgcy5jb21wYXJlVG8obikgPj0gMCAqLykgcmV0dXJuIGZhbHNlXG5cbiAgLy8gMS40LjIgSCA9IEhhc2goTSksIGFscmVhZHkgZG9uZSBieSB0aGUgdXNlclxuICAvLyAxLjQuMyBlID0gSFxuICBjb25zdCBlID0gZnJvbUJ1ZmZlcihoYXNoKVxuXG4gIC8vIENvbXB1dGUgc14tMVxuICBjb25zdCBzSW52ID0gcy5pbnZtKG4pXG5cbiAgLy8gMS40LjQgQ29tcHV0ZSB1MSA9IGVzXuKIkjEgbW9kIG5cbiAgLy8gICAgICAgICAgICAgICB1MiA9IHJzXuKIkjEgbW9kIG5cbiAgY29uc3QgdTEgPSBlLm11bChzSW52KS51bW9kKG4pXG4gIGNvbnN0IHUyID0gci5tdWwoc0ludikudW1vZChuKVxuXG4gIC8vIDEuNC41IENvbXB1dGUgUiA9ICh4UiwgeVIpXG4gIC8vICAgICAgICAgICAgICAgUiA9IHUxRyArIHUyUVxuICBjb25zdCBSID0gRy5tdWxBZGQodTEsIFEsIHUyKVxuXG4gIC8vIDEuNC41IChjb250LikgRW5mb3JjZSBSIGlzIG5vdCBhdCBpbmZpbml0eVxuICBpZiAoUi5pc0luZmluaXR5KCkpIHJldHVybiBmYWxzZVxuXG4gIC8vIDEuNC42IENvbnZlcnQgdGhlIGZpZWxkIGVsZW1lbnQgUi54IHRvIGFuIGludGVnZXJcbiAgY29uc3QgeFIgPSBSLnhcblxuICAvLyAxLjQuNyBTZXQgdiA9IHhSIG1vZCBuXG4gIGNvbnN0IHYgPSB4Ui51bW9kKG4pXG5cbiAgLy8gMS40LjggSWYgdiA9IHIsIG91dHB1dCBcInZhbGlkXCIsIGFuZCBpZiB2ICE9IHIsIG91dHB1dCBcImludmFsaWRcIlxuICByZXR1cm4gdi5lcShyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNQb2ludCxcbiAgaXNQb2ludENvbXByZXNzZWQsXG4gIGlzUHJpdmF0ZSxcbiAgcG9pbnRBZGQsXG4gIHBvaW50QWRkU2NhbGFyLFxuICBwb2ludENvbXByZXNzLFxuICBwb2ludEZyb21TY2FsYXIsXG4gIHBvaW50TXVsdGlwbHksXG4gIHByaXZhdGVBZGQsXG4gIHByaXZhdGVTdWIsXG4gIHNpZ24sXG4gIHNpZ25XaXRoRW50cm9weSxcbiAgdmVyaWZ5XG59XG4iLCJjb25zdCBjcmVhdGVIbWFjID0gcmVxdWlyZSgnY3JlYXRlLWhtYWMnKVxuXG5jb25zdCBPTkUxID0gQnVmZmVyLmFsbG9jKDEsIDEpXG5jb25zdCBaRVJPMSA9IEJ1ZmZlci5hbGxvYygxLCAwKVxuXG4vLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjk3OSNzZWN0aW9uLTMuMlxuZnVuY3Rpb24gZGV0ZXJtaW5pc3RpY0dlbmVyYXRlSyAoaGFzaCwgeCwgY2hlY2tTaWcsIGlzUHJpdmF0ZSwgZXh0cmFFbnRyb3B5KSB7XG4gIC8vIFN0ZXAgQSwgaWdub3JlZCBhcyBoYXNoIGFscmVhZHkgcHJvdmlkZWRcbiAgLy8gU3RlcCBCXG4gIC8vIFN0ZXAgQ1xuICBsZXQgayA9IEJ1ZmZlci5hbGxvYygzMiwgMClcbiAgbGV0IHYgPSBCdWZmZXIuYWxsb2MoMzIsIDEpXG5cbiAgLy8gU3RlcCBEXG4gIGsgPSBjcmVhdGVIbWFjKCdzaGEyNTYnLCBrKVxuICAgIC51cGRhdGUodilcbiAgICAudXBkYXRlKFpFUk8xKVxuICAgIC51cGRhdGUoeClcbiAgICAudXBkYXRlKGhhc2gpXG4gICAgLnVwZGF0ZShleHRyYUVudHJvcHkgfHwgJycpXG4gICAgLmRpZ2VzdCgpXG5cbiAgLy8gU3RlcCBFXG4gIHYgPSBjcmVhdGVIbWFjKCdzaGEyNTYnLCBrKS51cGRhdGUodikuZGlnZXN0KClcblxuICAvLyBTdGVwIEZcbiAgayA9IGNyZWF0ZUhtYWMoJ3NoYTI1NicsIGspXG4gICAgLnVwZGF0ZSh2KVxuICAgIC51cGRhdGUoT05FMSlcbiAgICAudXBkYXRlKHgpXG4gICAgLnVwZGF0ZShoYXNoKVxuICAgIC51cGRhdGUoZXh0cmFFbnRyb3B5IHx8ICcnKVxuICAgIC5kaWdlc3QoKVxuXG4gIC8vIFN0ZXAgR1xuICB2ID0gY3JlYXRlSG1hYygnc2hhMjU2JywgaykudXBkYXRlKHYpLmRpZ2VzdCgpXG5cbiAgLy8gU3RlcCBIMS9IMmEsIGlnbm9yZWQgYXMgdGxlbiA9PT0gcWxlbiAoMjU2IGJpdClcbiAgLy8gU3RlcCBIMmJcbiAgdiA9IGNyZWF0ZUhtYWMoJ3NoYTI1NicsIGspLnVwZGF0ZSh2KS5kaWdlc3QoKVxuXG4gIGxldCBUID0gdlxuXG4gIC8vIFN0ZXAgSDMsIHJlcGVhdCB1bnRpbCBUIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWwgWzEsIG4gLSAxXSBhbmQgaXMgc3VpdGFibGUgZm9yIEVDRFNBXG4gIHdoaWxlICghaXNQcml2YXRlKFQpIHx8ICFjaGVja1NpZyhUKSkge1xuICAgIGsgPSBjcmVhdGVIbWFjKCdzaGEyNTYnLCBrKVxuICAgICAgLnVwZGF0ZSh2KVxuICAgICAgLnVwZGF0ZShaRVJPMSlcbiAgICAgIC5kaWdlc3QoKVxuXG4gICAgdiA9IGNyZWF0ZUhtYWMoJ3NoYTI1NicsIGspLnVwZGF0ZSh2KS5kaWdlc3QoKVxuXG4gICAgLy8gU3RlcCBIMS9IMmEsIGFnYWluLCBpZ25vcmVkIGFzIHRsZW4gPT09IHFsZW4gKDI1NiBiaXQpXG4gICAgLy8gU3RlcCBIMmIgYWdhaW5cbiAgICB2ID0gY3JlYXRlSG1hYygnc2hhMjU2JywgaykudXBkYXRlKHYpLmRpZ2VzdCgpXG4gICAgVCA9IHZcbiAgfVxuXG4gIHJldHVybiBUXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGV0ZXJtaW5pc3RpY0dlbmVyYXRlS1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0b0RhdGFWaWV3IChkYXRhKSB7XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IGRhdGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoKVxuICB9XG5cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoZGF0YSlcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBkYXRhYCB0byBiZSBhbiBBcnJheUJ1ZmZlciwgQnVmZmVyLCBJbnQ4QXJyYXksIFVpbnQ4QXJyYXkgb3IgVWludDhDbGFtcGVkQXJyYXknKVxufVxuIiwiLy8gV3JpdHRlbiBpbiAyMDE0LTIwMTYgYnkgRG1pdHJ5IENoZXN0bnlraCBhbmQgRGV2aSBNYW5kaXJpLlxuLy8gUHVibGljIGRvbWFpbi5cbihmdW5jdGlvbihyb290LCBmKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGYoKTtcbiAgZWxzZSBpZiAocm9vdC5uYWNsKSByb290Lm5hY2wudXRpbCA9IGYoKTtcbiAgZWxzZSB7XG4gICAgcm9vdC5uYWNsID0ge307XG4gICAgcm9vdC5uYWNsLnV0aWwgPSBmKCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgdXRpbCA9IHt9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQmFzZTY0KHMpIHtcbiAgICBpZiAoISgvXig/OltBLVphLXowLTkrXFwvXXsyfVtBLVphLXowLTkrXFwvXXsyfSkqKD86W0EtWmEtejAtOStcXC9dezJ9PT18W0EtWmEtejAtOStcXC9dezN9PSk/JC8udGVzdChzKSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgZW5jb2RpbmcnKTtcbiAgICB9XG4gIH1cblxuICB1dGlsLmRlY29kZVVURjggPSBmdW5jdGlvbihzKSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgc3RyaW5nJyk7XG4gICAgdmFyIGksIGQgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQocykpLCBiID0gbmV3IFVpbnQ4QXJyYXkoZC5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSBiW2ldID0gZC5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBiO1xuICB9O1xuXG4gIHV0aWwuZW5jb2RlVVRGOCA9IGZ1bmN0aW9uKGFycikge1xuICAgIHZhciBpLCBzID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyW2ldKSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUocy5qb2luKCcnKSkpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgYXRvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBOb2RlLmpzXG5cbiAgICBpZiAodHlwZW9mIEJ1ZmZlci5mcm9tICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgIC8vIE5vZGUgdjYgYW5kIGxhdGVyXG4gICAgICB1dGlsLmVuY29kZUJhc2U2NCA9IGZ1bmN0aW9uIChhcnIpIHsgLy8gdjYgYW5kIGxhdGVyXG4gICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFycikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgfTtcblxuICAgICAgdXRpbC5kZWNvZGVCYXNlNjQgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB2YWxpZGF0ZUJhc2U2NChzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKEJ1ZmZlci5mcm9tKHMsICdiYXNlNjQnKSwgMCkpO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb2RlIGVhcmxpZXIgdGhhbiB2NlxuICAgICAgdXRpbC5lbmNvZGVCYXNlNjQgPSBmdW5jdGlvbiAoYXJyKSB7IC8vIHY2IGFuZCBsYXRlclxuICAgICAgICByZXR1cm4gKG5ldyBCdWZmZXIoYXJyKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgfTtcblxuICAgICAgdXRpbC5kZWNvZGVCYXNlNjQgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhbGlkYXRlQmFzZTY0KHMpO1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobmV3IEJ1ZmZlcihzLCAnYmFzZTY0JyksIDApKTtcbiAgICAgIH07XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlcnNcblxuICAgIHV0aWwuZW5jb2RlQmFzZTY0ID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgICB2YXIgaSwgcyA9IFtdLCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSBzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShhcnJbaV0pKTtcbiAgICAgIHJldHVybiBidG9hKHMuam9pbignJykpO1xuICAgIH07XG5cbiAgICB1dGlsLmRlY29kZUJhc2U2NCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhbGlkYXRlQmFzZTY0KHMpO1xuICAgICAgdmFyIGksIGQgPSBhdG9iKHMpLCBiID0gbmV3IFVpbnQ4QXJyYXkoZC5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGQubGVuZ3RoOyBpKyspIGJbaV0gPSBkLmNoYXJDb2RlQXQoaSk7XG4gICAgICByZXR1cm4gYjtcbiAgICB9O1xuXG4gIH1cblxuICByZXR1cm4gdXRpbDtcblxufSkpO1xuIiwiKGZ1bmN0aW9uKG5hY2wpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gUG9ydGVkIGluIDIwMTQgYnkgRG1pdHJ5IENoZXN0bnlraCBhbmQgRGV2aSBNYW5kaXJpLlxuLy8gUHVibGljIGRvbWFpbi5cbi8vXG4vLyBJbXBsZW1lbnRhdGlvbiBkZXJpdmVkIGZyb20gVHdlZXROYUNsIHZlcnNpb24gMjAxNDA0MjcuXG4vLyBTZWUgZm9yIGRldGFpbHM6IGh0dHA6Ly90d2VldG5hY2wuY3IueXAudG8vXG5cbnZhciBnZiA9IGZ1bmN0aW9uKGluaXQpIHtcbiAgdmFyIGksIHIgPSBuZXcgRmxvYXQ2NEFycmF5KDE2KTtcbiAgaWYgKGluaXQpIGZvciAoaSA9IDA7IGkgPCBpbml0Lmxlbmd0aDsgaSsrKSByW2ldID0gaW5pdFtpXTtcbiAgcmV0dXJuIHI7XG59O1xuXG4vLyAgUGx1Z2dhYmxlLCBpbml0aWFsaXplZCBpbiBoaWdoLWxldmVsIEFQSSBiZWxvdy5cbnZhciByYW5kb21ieXRlcyA9IGZ1bmN0aW9uKC8qIHgsIG4gKi8pIHsgdGhyb3cgbmV3IEVycm9yKCdubyBQUk5HJyk7IH07XG5cbnZhciBfMCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbnZhciBfOSA9IG5ldyBVaW50OEFycmF5KDMyKTsgXzlbMF0gPSA5O1xuXG52YXIgZ2YwID0gZ2YoKSxcbiAgICBnZjEgPSBnZihbMV0pLFxuICAgIF8xMjE2NjUgPSBnZihbMHhkYjQxLCAxXSksXG4gICAgRCA9IGdmKFsweDc4YTMsIDB4MTM1OSwgMHg0ZGNhLCAweDc1ZWIsIDB4ZDhhYiwgMHg0MTQxLCAweDBhNGQsIDB4MDA3MCwgMHhlODk4LCAweDc3NzksIDB4NDA3OSwgMHg4Y2M3LCAweGZlNzMsIDB4MmI2ZiwgMHg2Y2VlLCAweDUyMDNdKSxcbiAgICBEMiA9IGdmKFsweGYxNTksIDB4MjZiMiwgMHg5Yjk0LCAweGViZDYsIDB4YjE1NiwgMHg4MjgzLCAweDE0OWEsIDB4MDBlMCwgMHhkMTMwLCAweGVlZjMsIDB4ODBmMiwgMHgxOThlLCAweGZjZTcsIDB4NTZkZiwgMHhkOWRjLCAweDI0MDZdKSxcbiAgICBYID0gZ2YoWzB4ZDUxYSwgMHg4ZjI1LCAweDJkNjAsIDB4Yzk1NiwgMHhhN2IyLCAweDk1MjUsIDB4Yzc2MCwgMHg2OTJjLCAweGRjNWMsIDB4ZmRkNiwgMHhlMjMxLCAweGMwYTQsIDB4NTNmZSwgMHhjZDZlLCAweDM2ZDMsIDB4MjE2OV0pLFxuICAgIFkgPSBnZihbMHg2NjU4LCAweDY2NjYsIDB4NjY2NiwgMHg2NjY2LCAweDY2NjYsIDB4NjY2NiwgMHg2NjY2LCAweDY2NjYsIDB4NjY2NiwgMHg2NjY2LCAweDY2NjYsIDB4NjY2NiwgMHg2NjY2LCAweDY2NjYsIDB4NjY2NiwgMHg2NjY2XSksXG4gICAgSSA9IGdmKFsweGEwYjAsIDB4NGEwZSwgMHgxYjI3LCAweGM0ZWUsIDB4ZTQ3OCwgMHhhZDJmLCAweDE4MDYsIDB4MmY0MywgMHhkN2E3LCAweDNkZmIsIDB4MDA5OSwgMHgyYjRkLCAweGRmMGIsIDB4NGZjMSwgMHgyNDgwLCAweDJiODNdKTtcblxuZnVuY3Rpb24gdHM2NCh4LCBpLCBoLCBsKSB7XG4gIHhbaV0gICA9IChoID4+IDI0KSAmIDB4ZmY7XG4gIHhbaSsxXSA9IChoID4+IDE2KSAmIDB4ZmY7XG4gIHhbaSsyXSA9IChoID4+ICA4KSAmIDB4ZmY7XG4gIHhbaSszXSA9IGggJiAweGZmO1xuICB4W2krNF0gPSAobCA+PiAyNCkgICYgMHhmZjtcbiAgeFtpKzVdID0gKGwgPj4gMTYpICAmIDB4ZmY7XG4gIHhbaSs2XSA9IChsID4+ICA4KSAgJiAweGZmO1xuICB4W2krN10gPSBsICYgMHhmZjtcbn1cblxuZnVuY3Rpb24gdm4oeCwgeGksIHksIHlpLCBuKSB7XG4gIHZhciBpLGQgPSAwO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSBkIHw9IHhbeGkraV1eeVt5aStpXTtcbiAgcmV0dXJuICgxICYgKChkIC0gMSkgPj4+IDgpKSAtIDE7XG59XG5cbmZ1bmN0aW9uIGNyeXB0b192ZXJpZnlfMTYoeCwgeGksIHksIHlpKSB7XG4gIHJldHVybiB2bih4LHhpLHkseWksMTYpO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fdmVyaWZ5XzMyKHgsIHhpLCB5LCB5aSkge1xuICByZXR1cm4gdm4oeCx4aSx5LHlpLDMyKTtcbn1cblxuZnVuY3Rpb24gY29yZV9zYWxzYTIwKG8sIHAsIGssIGMpIHtcbiAgdmFyIGowICA9IGNbIDBdICYgMHhmZiB8IChjWyAxXSAmIDB4ZmYpPDw4IHwgKGNbIDJdICYgMHhmZik8PDE2IHwgKGNbIDNdICYgMHhmZik8PDI0LFxuICAgICAgajEgID0ga1sgMF0gJiAweGZmIHwgKGtbIDFdICYgMHhmZik8PDggfCAoa1sgMl0gJiAweGZmKTw8MTYgfCAoa1sgM10gJiAweGZmKTw8MjQsXG4gICAgICBqMiAgPSBrWyA0XSAmIDB4ZmYgfCAoa1sgNV0gJiAweGZmKTw8OCB8IChrWyA2XSAmIDB4ZmYpPDwxNiB8IChrWyA3XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGozICA9IGtbIDhdICYgMHhmZiB8IChrWyA5XSAmIDB4ZmYpPDw4IHwgKGtbMTBdICYgMHhmZik8PDE2IHwgKGtbMTFdICYgMHhmZik8PDI0LFxuICAgICAgajQgID0ga1sxMl0gJiAweGZmIHwgKGtbMTNdICYgMHhmZik8PDggfCAoa1sxNF0gJiAweGZmKTw8MTYgfCAoa1sxNV0gJiAweGZmKTw8MjQsXG4gICAgICBqNSAgPSBjWyA0XSAmIDB4ZmYgfCAoY1sgNV0gJiAweGZmKTw8OCB8IChjWyA2XSAmIDB4ZmYpPDwxNiB8IChjWyA3XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGo2ICA9IHBbIDBdICYgMHhmZiB8IChwWyAxXSAmIDB4ZmYpPDw4IHwgKHBbIDJdICYgMHhmZik8PDE2IHwgKHBbIDNdICYgMHhmZik8PDI0LFxuICAgICAgajcgID0gcFsgNF0gJiAweGZmIHwgKHBbIDVdICYgMHhmZik8PDggfCAocFsgNl0gJiAweGZmKTw8MTYgfCAocFsgN10gJiAweGZmKTw8MjQsXG4gICAgICBqOCAgPSBwWyA4XSAmIDB4ZmYgfCAocFsgOV0gJiAweGZmKTw8OCB8IChwWzEwXSAmIDB4ZmYpPDwxNiB8IChwWzExXSAmIDB4ZmYpPDwyNCxcbiAgICAgIGo5ICA9IHBbMTJdICYgMHhmZiB8IChwWzEzXSAmIDB4ZmYpPDw4IHwgKHBbMTRdICYgMHhmZik8PDE2IHwgKHBbMTVdICYgMHhmZik8PDI0LFxuICAgICAgajEwID0gY1sgOF0gJiAweGZmIHwgKGNbIDldICYgMHhmZik8PDggfCAoY1sxMF0gJiAweGZmKTw8MTYgfCAoY1sxMV0gJiAweGZmKTw8MjQsXG4gICAgICBqMTEgPSBrWzE2XSAmIDB4ZmYgfCAoa1sxN10gJiAweGZmKTw8OCB8IChrWzE4XSAmIDB4ZmYpPDwxNiB8IChrWzE5XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGoxMiA9IGtbMjBdICYgMHhmZiB8IChrWzIxXSAmIDB4ZmYpPDw4IHwgKGtbMjJdICYgMHhmZik8PDE2IHwgKGtbMjNdICYgMHhmZik8PDI0LFxuICAgICAgajEzID0ga1syNF0gJiAweGZmIHwgKGtbMjVdICYgMHhmZik8PDggfCAoa1syNl0gJiAweGZmKTw8MTYgfCAoa1syN10gJiAweGZmKTw8MjQsXG4gICAgICBqMTQgPSBrWzI4XSAmIDB4ZmYgfCAoa1syOV0gJiAweGZmKTw8OCB8IChrWzMwXSAmIDB4ZmYpPDwxNiB8IChrWzMxXSAmIDB4ZmYpPDwyNCxcbiAgICAgIGoxNSA9IGNbMTJdICYgMHhmZiB8IChjWzEzXSAmIDB4ZmYpPDw4IHwgKGNbMTRdICYgMHhmZik8PDE2IHwgKGNbMTVdICYgMHhmZik8PDI0O1xuXG4gIHZhciB4MCA9IGowLCB4MSA9IGoxLCB4MiA9IGoyLCB4MyA9IGozLCB4NCA9IGo0LCB4NSA9IGo1LCB4NiA9IGo2LCB4NyA9IGo3LFxuICAgICAgeDggPSBqOCwgeDkgPSBqOSwgeDEwID0gajEwLCB4MTEgPSBqMTEsIHgxMiA9IGoxMiwgeDEzID0gajEzLCB4MTQgPSBqMTQsXG4gICAgICB4MTUgPSBqMTUsIHU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSArPSAyKSB7XG4gICAgdSA9IHgwICsgeDEyIHwgMDtcbiAgICB4NCBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDQgKyB4MCB8IDA7XG4gICAgeDggXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHg4ICsgeDQgfCAwO1xuICAgIHgxMiBePSB1PDwxMyB8IHU+Pj4oMzItMTMpO1xuICAgIHUgPSB4MTIgKyB4OCB8IDA7XG4gICAgeDAgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcblxuICAgIHUgPSB4NSArIHgxIHwgMDtcbiAgICB4OSBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDkgKyB4NSB8IDA7XG4gICAgeDEzIF49IHU8PDkgfCB1Pj4+KDMyLTkpO1xuICAgIHUgPSB4MTMgKyB4OSB8IDA7XG4gICAgeDEgXj0gdTw8MTMgfCB1Pj4+KDMyLTEzKTtcbiAgICB1ID0geDEgKyB4MTMgfCAwO1xuICAgIHg1IF49IHU8PDE4IHwgdT4+PigzMi0xOCk7XG5cbiAgICB1ID0geDEwICsgeDYgfCAwO1xuICAgIHgxNCBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDE0ICsgeDEwIHwgMDtcbiAgICB4MiBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDIgKyB4MTQgfCAwO1xuICAgIHg2IF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHg2ICsgeDIgfCAwO1xuICAgIHgxMCBePSB1PDwxOCB8IHU+Pj4oMzItMTgpO1xuXG4gICAgdSA9IHgxNSArIHgxMSB8IDA7XG4gICAgeDMgXj0gdTw8NyB8IHU+Pj4oMzItNyk7XG4gICAgdSA9IHgzICsgeDE1IHwgMDtcbiAgICB4NyBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDcgKyB4MyB8IDA7XG4gICAgeDExIF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHgxMSArIHg3IHwgMDtcbiAgICB4MTUgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcblxuICAgIHUgPSB4MCArIHgzIHwgMDtcbiAgICB4MSBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDEgKyB4MCB8IDA7XG4gICAgeDIgXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHgyICsgeDEgfCAwO1xuICAgIHgzIF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHgzICsgeDIgfCAwO1xuICAgIHgwIF49IHU8PDE4IHwgdT4+PigzMi0xOCk7XG5cbiAgICB1ID0geDUgKyB4NCB8IDA7XG4gICAgeDYgXj0gdTw8NyB8IHU+Pj4oMzItNyk7XG4gICAgdSA9IHg2ICsgeDUgfCAwO1xuICAgIHg3IF49IHU8PDkgfCB1Pj4+KDMyLTkpO1xuICAgIHUgPSB4NyArIHg2IHwgMDtcbiAgICB4NCBePSB1PDwxMyB8IHU+Pj4oMzItMTMpO1xuICAgIHUgPSB4NCArIHg3IHwgMDtcbiAgICB4NSBePSB1PDwxOCB8IHU+Pj4oMzItMTgpO1xuXG4gICAgdSA9IHgxMCArIHg5IHwgMDtcbiAgICB4MTEgXj0gdTw8NyB8IHU+Pj4oMzItNyk7XG4gICAgdSA9IHgxMSArIHgxMCB8IDA7XG4gICAgeDggXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHg4ICsgeDExIHwgMDtcbiAgICB4OSBePSB1PDwxMyB8IHU+Pj4oMzItMTMpO1xuICAgIHUgPSB4OSArIHg4IHwgMDtcbiAgICB4MTAgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcblxuICAgIHUgPSB4MTUgKyB4MTQgfCAwO1xuICAgIHgxMiBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDEyICsgeDE1IHwgMDtcbiAgICB4MTMgXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHgxMyArIHgxMiB8IDA7XG4gICAgeDE0IF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHgxNCArIHgxMyB8IDA7XG4gICAgeDE1IF49IHU8PDE4IHwgdT4+PigzMi0xOCk7XG4gIH1cbiAgIHgwID0gIHgwICsgIGowIHwgMDtcbiAgIHgxID0gIHgxICsgIGoxIHwgMDtcbiAgIHgyID0gIHgyICsgIGoyIHwgMDtcbiAgIHgzID0gIHgzICsgIGozIHwgMDtcbiAgIHg0ID0gIHg0ICsgIGo0IHwgMDtcbiAgIHg1ID0gIHg1ICsgIGo1IHwgMDtcbiAgIHg2ID0gIHg2ICsgIGo2IHwgMDtcbiAgIHg3ID0gIHg3ICsgIGo3IHwgMDtcbiAgIHg4ID0gIHg4ICsgIGo4IHwgMDtcbiAgIHg5ID0gIHg5ICsgIGo5IHwgMDtcbiAgeDEwID0geDEwICsgajEwIHwgMDtcbiAgeDExID0geDExICsgajExIHwgMDtcbiAgeDEyID0geDEyICsgajEyIHwgMDtcbiAgeDEzID0geDEzICsgajEzIHwgMDtcbiAgeDE0ID0geDE0ICsgajE0IHwgMDtcbiAgeDE1ID0geDE1ICsgajE1IHwgMDtcblxuICBvWyAwXSA9IHgwID4+PiAgMCAmIDB4ZmY7XG4gIG9bIDFdID0geDAgPj4+ICA4ICYgMHhmZjtcbiAgb1sgMl0gPSB4MCA+Pj4gMTYgJiAweGZmO1xuICBvWyAzXSA9IHgwID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1sgNF0gPSB4MSA+Pj4gIDAgJiAweGZmO1xuICBvWyA1XSA9IHgxID4+PiAgOCAmIDB4ZmY7XG4gIG9bIDZdID0geDEgPj4+IDE2ICYgMHhmZjtcbiAgb1sgN10gPSB4MSA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bIDhdID0geDIgPj4+ICAwICYgMHhmZjtcbiAgb1sgOV0gPSB4MiA+Pj4gIDggJiAweGZmO1xuICBvWzEwXSA9IHgyID4+PiAxNiAmIDB4ZmY7XG4gIG9bMTFdID0geDIgPj4+IDI0ICYgMHhmZjtcblxuICBvWzEyXSA9IHgzID4+PiAgMCAmIDB4ZmY7XG4gIG9bMTNdID0geDMgPj4+ICA4ICYgMHhmZjtcbiAgb1sxNF0gPSB4MyA+Pj4gMTYgJiAweGZmO1xuICBvWzE1XSA9IHgzID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1sxNl0gPSB4NCA+Pj4gIDAgJiAweGZmO1xuICBvWzE3XSA9IHg0ID4+PiAgOCAmIDB4ZmY7XG4gIG9bMThdID0geDQgPj4+IDE2ICYgMHhmZjtcbiAgb1sxOV0gPSB4NCA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bMjBdID0geDUgPj4+ICAwICYgMHhmZjtcbiAgb1syMV0gPSB4NSA+Pj4gIDggJiAweGZmO1xuICBvWzIyXSA9IHg1ID4+PiAxNiAmIDB4ZmY7XG4gIG9bMjNdID0geDUgPj4+IDI0ICYgMHhmZjtcblxuICBvWzI0XSA9IHg2ID4+PiAgMCAmIDB4ZmY7XG4gIG9bMjVdID0geDYgPj4+ICA4ICYgMHhmZjtcbiAgb1syNl0gPSB4NiA+Pj4gMTYgJiAweGZmO1xuICBvWzI3XSA9IHg2ID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1syOF0gPSB4NyA+Pj4gIDAgJiAweGZmO1xuICBvWzI5XSA9IHg3ID4+PiAgOCAmIDB4ZmY7XG4gIG9bMzBdID0geDcgPj4+IDE2ICYgMHhmZjtcbiAgb1szMV0gPSB4NyA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bMzJdID0geDggPj4+ICAwICYgMHhmZjtcbiAgb1szM10gPSB4OCA+Pj4gIDggJiAweGZmO1xuICBvWzM0XSA9IHg4ID4+PiAxNiAmIDB4ZmY7XG4gIG9bMzVdID0geDggPj4+IDI0ICYgMHhmZjtcblxuICBvWzM2XSA9IHg5ID4+PiAgMCAmIDB4ZmY7XG4gIG9bMzddID0geDkgPj4+ICA4ICYgMHhmZjtcbiAgb1szOF0gPSB4OSA+Pj4gMTYgJiAweGZmO1xuICBvWzM5XSA9IHg5ID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1s0MF0gPSB4MTAgPj4+ICAwICYgMHhmZjtcbiAgb1s0MV0gPSB4MTAgPj4+ICA4ICYgMHhmZjtcbiAgb1s0Ml0gPSB4MTAgPj4+IDE2ICYgMHhmZjtcbiAgb1s0M10gPSB4MTAgPj4+IDI0ICYgMHhmZjtcblxuICBvWzQ0XSA9IHgxMSA+Pj4gIDAgJiAweGZmO1xuICBvWzQ1XSA9IHgxMSA+Pj4gIDggJiAweGZmO1xuICBvWzQ2XSA9IHgxMSA+Pj4gMTYgJiAweGZmO1xuICBvWzQ3XSA9IHgxMSA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bNDhdID0geDEyID4+PiAgMCAmIDB4ZmY7XG4gIG9bNDldID0geDEyID4+PiAgOCAmIDB4ZmY7XG4gIG9bNTBdID0geDEyID4+PiAxNiAmIDB4ZmY7XG4gIG9bNTFdID0geDEyID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1s1Ml0gPSB4MTMgPj4+ICAwICYgMHhmZjtcbiAgb1s1M10gPSB4MTMgPj4+ICA4ICYgMHhmZjtcbiAgb1s1NF0gPSB4MTMgPj4+IDE2ICYgMHhmZjtcbiAgb1s1NV0gPSB4MTMgPj4+IDI0ICYgMHhmZjtcblxuICBvWzU2XSA9IHgxNCA+Pj4gIDAgJiAweGZmO1xuICBvWzU3XSA9IHgxNCA+Pj4gIDggJiAweGZmO1xuICBvWzU4XSA9IHgxNCA+Pj4gMTYgJiAweGZmO1xuICBvWzU5XSA9IHgxNCA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bNjBdID0geDE1ID4+PiAgMCAmIDB4ZmY7XG4gIG9bNjFdID0geDE1ID4+PiAgOCAmIDB4ZmY7XG4gIG9bNjJdID0geDE1ID4+PiAxNiAmIDB4ZmY7XG4gIG9bNjNdID0geDE1ID4+PiAyNCAmIDB4ZmY7XG59XG5cbmZ1bmN0aW9uIGNvcmVfaHNhbHNhMjAobyxwLGssYykge1xuICB2YXIgajAgID0gY1sgMF0gJiAweGZmIHwgKGNbIDFdICYgMHhmZik8PDggfCAoY1sgMl0gJiAweGZmKTw8MTYgfCAoY1sgM10gJiAweGZmKTw8MjQsXG4gICAgICBqMSAgPSBrWyAwXSAmIDB4ZmYgfCAoa1sgMV0gJiAweGZmKTw8OCB8IChrWyAyXSAmIDB4ZmYpPDwxNiB8IChrWyAzXSAmIDB4ZmYpPDwyNCxcbiAgICAgIGoyICA9IGtbIDRdICYgMHhmZiB8IChrWyA1XSAmIDB4ZmYpPDw4IHwgKGtbIDZdICYgMHhmZik8PDE2IHwgKGtbIDddICYgMHhmZik8PDI0LFxuICAgICAgajMgID0ga1sgOF0gJiAweGZmIHwgKGtbIDldICYgMHhmZik8PDggfCAoa1sxMF0gJiAweGZmKTw8MTYgfCAoa1sxMV0gJiAweGZmKTw8MjQsXG4gICAgICBqNCAgPSBrWzEyXSAmIDB4ZmYgfCAoa1sxM10gJiAweGZmKTw8OCB8IChrWzE0XSAmIDB4ZmYpPDwxNiB8IChrWzE1XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGo1ICA9IGNbIDRdICYgMHhmZiB8IChjWyA1XSAmIDB4ZmYpPDw4IHwgKGNbIDZdICYgMHhmZik8PDE2IHwgKGNbIDddICYgMHhmZik8PDI0LFxuICAgICAgajYgID0gcFsgMF0gJiAweGZmIHwgKHBbIDFdICYgMHhmZik8PDggfCAocFsgMl0gJiAweGZmKTw8MTYgfCAocFsgM10gJiAweGZmKTw8MjQsXG4gICAgICBqNyAgPSBwWyA0XSAmIDB4ZmYgfCAocFsgNV0gJiAweGZmKTw8OCB8IChwWyA2XSAmIDB4ZmYpPDwxNiB8IChwWyA3XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGo4ICA9IHBbIDhdICYgMHhmZiB8IChwWyA5XSAmIDB4ZmYpPDw4IHwgKHBbMTBdICYgMHhmZik8PDE2IHwgKHBbMTFdICYgMHhmZik8PDI0LFxuICAgICAgajkgID0gcFsxMl0gJiAweGZmIHwgKHBbMTNdICYgMHhmZik8PDggfCAocFsxNF0gJiAweGZmKTw8MTYgfCAocFsxNV0gJiAweGZmKTw8MjQsXG4gICAgICBqMTAgPSBjWyA4XSAmIDB4ZmYgfCAoY1sgOV0gJiAweGZmKTw8OCB8IChjWzEwXSAmIDB4ZmYpPDwxNiB8IChjWzExXSAmIDB4ZmYpPDwyNCxcbiAgICAgIGoxMSA9IGtbMTZdICYgMHhmZiB8IChrWzE3XSAmIDB4ZmYpPDw4IHwgKGtbMThdICYgMHhmZik8PDE2IHwgKGtbMTldICYgMHhmZik8PDI0LFxuICAgICAgajEyID0ga1syMF0gJiAweGZmIHwgKGtbMjFdICYgMHhmZik8PDggfCAoa1syMl0gJiAweGZmKTw8MTYgfCAoa1syM10gJiAweGZmKTw8MjQsXG4gICAgICBqMTMgPSBrWzI0XSAmIDB4ZmYgfCAoa1syNV0gJiAweGZmKTw8OCB8IChrWzI2XSAmIDB4ZmYpPDwxNiB8IChrWzI3XSAmIDB4ZmYpPDwyNCxcbiAgICAgIGoxNCA9IGtbMjhdICYgMHhmZiB8IChrWzI5XSAmIDB4ZmYpPDw4IHwgKGtbMzBdICYgMHhmZik8PDE2IHwgKGtbMzFdICYgMHhmZik8PDI0LFxuICAgICAgajE1ID0gY1sxMl0gJiAweGZmIHwgKGNbMTNdICYgMHhmZik8PDggfCAoY1sxNF0gJiAweGZmKTw8MTYgfCAoY1sxNV0gJiAweGZmKTw8MjQ7XG5cbiAgdmFyIHgwID0gajAsIHgxID0gajEsIHgyID0gajIsIHgzID0gajMsIHg0ID0gajQsIHg1ID0gajUsIHg2ID0gajYsIHg3ID0gajcsXG4gICAgICB4OCA9IGo4LCB4OSA9IGo5LCB4MTAgPSBqMTAsIHgxMSA9IGoxMSwgeDEyID0gajEyLCB4MTMgPSBqMTMsIHgxNCA9IGoxNCxcbiAgICAgIHgxNSA9IGoxNSwgdTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpICs9IDIpIHtcbiAgICB1ID0geDAgKyB4MTIgfCAwO1xuICAgIHg0IF49IHU8PDcgfCB1Pj4+KDMyLTcpO1xuICAgIHUgPSB4NCArIHgwIHwgMDtcbiAgICB4OCBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDggKyB4NCB8IDA7XG4gICAgeDEyIF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHgxMiArIHg4IHwgMDtcbiAgICB4MCBePSB1PDwxOCB8IHU+Pj4oMzItMTgpO1xuXG4gICAgdSA9IHg1ICsgeDEgfCAwO1xuICAgIHg5IF49IHU8PDcgfCB1Pj4+KDMyLTcpO1xuICAgIHUgPSB4OSArIHg1IHwgMDtcbiAgICB4MTMgXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHgxMyArIHg5IHwgMDtcbiAgICB4MSBePSB1PDwxMyB8IHU+Pj4oMzItMTMpO1xuICAgIHUgPSB4MSArIHgxMyB8IDA7XG4gICAgeDUgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcblxuICAgIHUgPSB4MTAgKyB4NiB8IDA7XG4gICAgeDE0IF49IHU8PDcgfCB1Pj4+KDMyLTcpO1xuICAgIHUgPSB4MTQgKyB4MTAgfCAwO1xuICAgIHgyIF49IHU8PDkgfCB1Pj4+KDMyLTkpO1xuICAgIHUgPSB4MiArIHgxNCB8IDA7XG4gICAgeDYgXj0gdTw8MTMgfCB1Pj4+KDMyLTEzKTtcbiAgICB1ID0geDYgKyB4MiB8IDA7XG4gICAgeDEwIF49IHU8PDE4IHwgdT4+PigzMi0xOCk7XG5cbiAgICB1ID0geDE1ICsgeDExIHwgMDtcbiAgICB4MyBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDMgKyB4MTUgfCAwO1xuICAgIHg3IF49IHU8PDkgfCB1Pj4+KDMyLTkpO1xuICAgIHUgPSB4NyArIHgzIHwgMDtcbiAgICB4MTEgXj0gdTw8MTMgfCB1Pj4+KDMyLTEzKTtcbiAgICB1ID0geDExICsgeDcgfCAwO1xuICAgIHgxNSBePSB1PDwxOCB8IHU+Pj4oMzItMTgpO1xuXG4gICAgdSA9IHgwICsgeDMgfCAwO1xuICAgIHgxIF49IHU8PDcgfCB1Pj4+KDMyLTcpO1xuICAgIHUgPSB4MSArIHgwIHwgMDtcbiAgICB4MiBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDIgKyB4MSB8IDA7XG4gICAgeDMgXj0gdTw8MTMgfCB1Pj4+KDMyLTEzKTtcbiAgICB1ID0geDMgKyB4MiB8IDA7XG4gICAgeDAgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcblxuICAgIHUgPSB4NSArIHg0IHwgMDtcbiAgICB4NiBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDYgKyB4NSB8IDA7XG4gICAgeDcgXj0gdTw8OSB8IHU+Pj4oMzItOSk7XG4gICAgdSA9IHg3ICsgeDYgfCAwO1xuICAgIHg0IF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHg0ICsgeDcgfCAwO1xuICAgIHg1IF49IHU8PDE4IHwgdT4+PigzMi0xOCk7XG5cbiAgICB1ID0geDEwICsgeDkgfCAwO1xuICAgIHgxMSBePSB1PDw3IHwgdT4+PigzMi03KTtcbiAgICB1ID0geDExICsgeDEwIHwgMDtcbiAgICB4OCBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDggKyB4MTEgfCAwO1xuICAgIHg5IF49IHU8PDEzIHwgdT4+PigzMi0xMyk7XG4gICAgdSA9IHg5ICsgeDggfCAwO1xuICAgIHgxMCBePSB1PDwxOCB8IHU+Pj4oMzItMTgpO1xuXG4gICAgdSA9IHgxNSArIHgxNCB8IDA7XG4gICAgeDEyIF49IHU8PDcgfCB1Pj4+KDMyLTcpO1xuICAgIHUgPSB4MTIgKyB4MTUgfCAwO1xuICAgIHgxMyBePSB1PDw5IHwgdT4+PigzMi05KTtcbiAgICB1ID0geDEzICsgeDEyIHwgMDtcbiAgICB4MTQgXj0gdTw8MTMgfCB1Pj4+KDMyLTEzKTtcbiAgICB1ID0geDE0ICsgeDEzIHwgMDtcbiAgICB4MTUgXj0gdTw8MTggfCB1Pj4+KDMyLTE4KTtcbiAgfVxuXG4gIG9bIDBdID0geDAgPj4+ICAwICYgMHhmZjtcbiAgb1sgMV0gPSB4MCA+Pj4gIDggJiAweGZmO1xuICBvWyAyXSA9IHgwID4+PiAxNiAmIDB4ZmY7XG4gIG9bIDNdID0geDAgPj4+IDI0ICYgMHhmZjtcblxuICBvWyA0XSA9IHg1ID4+PiAgMCAmIDB4ZmY7XG4gIG9bIDVdID0geDUgPj4+ICA4ICYgMHhmZjtcbiAgb1sgNl0gPSB4NSA+Pj4gMTYgJiAweGZmO1xuICBvWyA3XSA9IHg1ID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1sgOF0gPSB4MTAgPj4+ICAwICYgMHhmZjtcbiAgb1sgOV0gPSB4MTAgPj4+ICA4ICYgMHhmZjtcbiAgb1sxMF0gPSB4MTAgPj4+IDE2ICYgMHhmZjtcbiAgb1sxMV0gPSB4MTAgPj4+IDI0ICYgMHhmZjtcblxuICBvWzEyXSA9IHgxNSA+Pj4gIDAgJiAweGZmO1xuICBvWzEzXSA9IHgxNSA+Pj4gIDggJiAweGZmO1xuICBvWzE0XSA9IHgxNSA+Pj4gMTYgJiAweGZmO1xuICBvWzE1XSA9IHgxNSA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bMTZdID0geDYgPj4+ICAwICYgMHhmZjtcbiAgb1sxN10gPSB4NiA+Pj4gIDggJiAweGZmO1xuICBvWzE4XSA9IHg2ID4+PiAxNiAmIDB4ZmY7XG4gIG9bMTldID0geDYgPj4+IDI0ICYgMHhmZjtcblxuICBvWzIwXSA9IHg3ID4+PiAgMCAmIDB4ZmY7XG4gIG9bMjFdID0geDcgPj4+ICA4ICYgMHhmZjtcbiAgb1syMl0gPSB4NyA+Pj4gMTYgJiAweGZmO1xuICBvWzIzXSA9IHg3ID4+PiAyNCAmIDB4ZmY7XG5cbiAgb1syNF0gPSB4OCA+Pj4gIDAgJiAweGZmO1xuICBvWzI1XSA9IHg4ID4+PiAgOCAmIDB4ZmY7XG4gIG9bMjZdID0geDggPj4+IDE2ICYgMHhmZjtcbiAgb1syN10gPSB4OCA+Pj4gMjQgJiAweGZmO1xuXG4gIG9bMjhdID0geDkgPj4+ICAwICYgMHhmZjtcbiAgb1syOV0gPSB4OSA+Pj4gIDggJiAweGZmO1xuICBvWzMwXSA9IHg5ID4+PiAxNiAmIDB4ZmY7XG4gIG9bMzFdID0geDkgPj4+IDI0ICYgMHhmZjtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX2NvcmVfc2Fsc2EyMChvdXQsaW5wLGssYykge1xuICBjb3JlX3NhbHNhMjAob3V0LGlucCxrLGMpO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fY29yZV9oc2Fsc2EyMChvdXQsaW5wLGssYykge1xuICBjb3JlX2hzYWxzYTIwKG91dCxpbnAsayxjKTtcbn1cblxudmFyIHNpZ21hID0gbmV3IFVpbnQ4QXJyYXkoWzEwMSwgMTIwLCAxMTIsIDk3LCAxMTAsIDEwMCwgMzIsIDUxLCA1MCwgNDUsIDk4LCAxMjEsIDExNiwgMTAxLCAzMiwgMTA3XSk7XG4gICAgICAgICAgICAvLyBcImV4cGFuZCAzMi1ieXRlIGtcIlxuXG5mdW5jdGlvbiBjcnlwdG9fc3RyZWFtX3NhbHNhMjBfeG9yKGMsY3BvcyxtLG1wb3MsYixuLGspIHtcbiAgdmFyIHogPSBuZXcgVWludDhBcnJheSgxNiksIHggPSBuZXcgVWludDhBcnJheSg2NCk7XG4gIHZhciB1LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykgeltpXSA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCA4OyBpKyspIHpbaV0gPSBuW2ldO1xuICB3aGlsZSAoYiA+PSA2NCkge1xuICAgIGNyeXB0b19jb3JlX3NhbHNhMjAoeCx6LGssc2lnbWEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2NDsgaSsrKSBjW2Nwb3MraV0gPSBtW21wb3MraV0gXiB4W2ldO1xuICAgIHUgPSAxO1xuICAgIGZvciAoaSA9IDg7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB1ID0gdSArICh6W2ldICYgMHhmZikgfCAwO1xuICAgICAgeltpXSA9IHUgJiAweGZmO1xuICAgICAgdSA+Pj49IDg7XG4gICAgfVxuICAgIGIgLT0gNjQ7XG4gICAgY3BvcyArPSA2NDtcbiAgICBtcG9zICs9IDY0O1xuICB9XG4gIGlmIChiID4gMCkge1xuICAgIGNyeXB0b19jb3JlX3NhbHNhMjAoeCx6LGssc2lnbWEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBiOyBpKyspIGNbY3BvcytpXSA9IG1bbXBvcytpXSBeIHhbaV07XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGNyeXB0b19zdHJlYW1fc2Fsc2EyMChjLGNwb3MsYixuLGspIHtcbiAgdmFyIHogPSBuZXcgVWludDhBcnJheSgxNiksIHggPSBuZXcgVWludDhBcnJheSg2NCk7XG4gIHZhciB1LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykgeltpXSA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCA4OyBpKyspIHpbaV0gPSBuW2ldO1xuICB3aGlsZSAoYiA+PSA2NCkge1xuICAgIGNyeXB0b19jb3JlX3NhbHNhMjAoeCx6LGssc2lnbWEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2NDsgaSsrKSBjW2Nwb3MraV0gPSB4W2ldO1xuICAgIHUgPSAxO1xuICAgIGZvciAoaSA9IDg7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB1ID0gdSArICh6W2ldICYgMHhmZikgfCAwO1xuICAgICAgeltpXSA9IHUgJiAweGZmO1xuICAgICAgdSA+Pj49IDg7XG4gICAgfVxuICAgIGIgLT0gNjQ7XG4gICAgY3BvcyArPSA2NDtcbiAgfVxuICBpZiAoYiA+IDApIHtcbiAgICBjcnlwdG9fY29yZV9zYWxzYTIwKHgseixrLHNpZ21hKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYjsgaSsrKSBjW2Nwb3MraV0gPSB4W2ldO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fc3RyZWFtKGMsY3BvcyxkLG4saykge1xuICB2YXIgcyA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgY3J5cHRvX2NvcmVfaHNhbHNhMjAocyxuLGssc2lnbWEpO1xuICB2YXIgc24gPSBuZXcgVWludDhBcnJheSg4KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHNuW2ldID0gbltpKzE2XTtcbiAgcmV0dXJuIGNyeXB0b19zdHJlYW1fc2Fsc2EyMChjLGNwb3MsZCxzbixzKTtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX3N0cmVhbV94b3IoYyxjcG9zLG0sbXBvcyxkLG4saykge1xuICB2YXIgcyA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgY3J5cHRvX2NvcmVfaHNhbHNhMjAocyxuLGssc2lnbWEpO1xuICB2YXIgc24gPSBuZXcgVWludDhBcnJheSg4KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHNuW2ldID0gbltpKzE2XTtcbiAgcmV0dXJuIGNyeXB0b19zdHJlYW1fc2Fsc2EyMF94b3IoYyxjcG9zLG0sbXBvcyxkLHNuLHMpO1xufVxuXG4vKlxuKiBQb3J0IG9mIEFuZHJldyBNb29uJ3MgUG9seTEzMDUtZG9ubmEtMTYuIFB1YmxpYyBkb21haW4uXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9mbG9vZHliZXJyeS9wb2x5MTMwNS1kb25uYVxuKi9cblxudmFyIHBvbHkxMzA1ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHRoaXMuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICB0aGlzLnIgPSBuZXcgVWludDE2QXJyYXkoMTApO1xuICB0aGlzLmggPSBuZXcgVWludDE2QXJyYXkoMTApO1xuICB0aGlzLnBhZCA9IG5ldyBVaW50MTZBcnJheSg4KTtcbiAgdGhpcy5sZWZ0b3ZlciA9IDA7XG4gIHRoaXMuZmluID0gMDtcblxuICB2YXIgdDAsIHQxLCB0MiwgdDMsIHQ0LCB0NSwgdDYsIHQ3O1xuXG4gIHQwID0ga2V5WyAwXSAmIDB4ZmYgfCAoa2V5WyAxXSAmIDB4ZmYpIDw8IDg7IHRoaXMuclswXSA9ICggdDAgICAgICAgICAgICAgICAgICAgICApICYgMHgxZmZmO1xuICB0MSA9IGtleVsgMl0gJiAweGZmIHwgKGtleVsgM10gJiAweGZmKSA8PCA4OyB0aGlzLnJbMV0gPSAoKHQwID4+PiAxMykgfCAodDEgPDwgIDMpKSAmIDB4MWZmZjtcbiAgdDIgPSBrZXlbIDRdICYgMHhmZiB8IChrZXlbIDVdICYgMHhmZikgPDwgODsgdGhpcy5yWzJdID0gKCh0MSA+Pj4gMTApIHwgKHQyIDw8ICA2KSkgJiAweDFmMDM7XG4gIHQzID0ga2V5WyA2XSAmIDB4ZmYgfCAoa2V5WyA3XSAmIDB4ZmYpIDw8IDg7IHRoaXMuclszXSA9ICgodDIgPj4+ICA3KSB8ICh0MyA8PCAgOSkpICYgMHgxZmZmO1xuICB0NCA9IGtleVsgOF0gJiAweGZmIHwgKGtleVsgOV0gJiAweGZmKSA8PCA4OyB0aGlzLnJbNF0gPSAoKHQzID4+PiAgNCkgfCAodDQgPDwgMTIpKSAmIDB4MDBmZjtcbiAgdGhpcy5yWzVdID0gKCh0NCA+Pj4gIDEpKSAmIDB4MWZmZTtcbiAgdDUgPSBrZXlbMTBdICYgMHhmZiB8IChrZXlbMTFdICYgMHhmZikgPDwgODsgdGhpcy5yWzZdID0gKCh0NCA+Pj4gMTQpIHwgKHQ1IDw8ICAyKSkgJiAweDFmZmY7XG4gIHQ2ID0ga2V5WzEyXSAmIDB4ZmYgfCAoa2V5WzEzXSAmIDB4ZmYpIDw8IDg7IHRoaXMucls3XSA9ICgodDUgPj4+IDExKSB8ICh0NiA8PCAgNSkpICYgMHgxZjgxO1xuICB0NyA9IGtleVsxNF0gJiAweGZmIHwgKGtleVsxNV0gJiAweGZmKSA8PCA4OyB0aGlzLnJbOF0gPSAoKHQ2ID4+PiAgOCkgfCAodDcgPDwgIDgpKSAmIDB4MWZmZjtcbiAgdGhpcy5yWzldID0gKCh0NyA+Pj4gIDUpKSAmIDB4MDA3ZjtcblxuICB0aGlzLnBhZFswXSA9IGtleVsxNl0gJiAweGZmIHwgKGtleVsxN10gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFsxXSA9IGtleVsxOF0gJiAweGZmIHwgKGtleVsxOV0gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFsyXSA9IGtleVsyMF0gJiAweGZmIHwgKGtleVsyMV0gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFszXSA9IGtleVsyMl0gJiAweGZmIHwgKGtleVsyM10gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFs0XSA9IGtleVsyNF0gJiAweGZmIHwgKGtleVsyNV0gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFs1XSA9IGtleVsyNl0gJiAweGZmIHwgKGtleVsyN10gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFs2XSA9IGtleVsyOF0gJiAweGZmIHwgKGtleVsyOV0gJiAweGZmKSA8PCA4O1xuICB0aGlzLnBhZFs3XSA9IGtleVszMF0gJiAweGZmIHwgKGtleVszMV0gJiAweGZmKSA8PCA4O1xufTtcblxucG9seTEzMDUucHJvdG90eXBlLmJsb2NrcyA9IGZ1bmN0aW9uKG0sIG1wb3MsIGJ5dGVzKSB7XG4gIHZhciBoaWJpdCA9IHRoaXMuZmluID8gMCA6ICgxIDw8IDExKTtcbiAgdmFyIHQwLCB0MSwgdDIsIHQzLCB0NCwgdDUsIHQ2LCB0NywgYztcbiAgdmFyIGQwLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgsIGQ5O1xuXG4gIHZhciBoMCA9IHRoaXMuaFswXSxcbiAgICAgIGgxID0gdGhpcy5oWzFdLFxuICAgICAgaDIgPSB0aGlzLmhbMl0sXG4gICAgICBoMyA9IHRoaXMuaFszXSxcbiAgICAgIGg0ID0gdGhpcy5oWzRdLFxuICAgICAgaDUgPSB0aGlzLmhbNV0sXG4gICAgICBoNiA9IHRoaXMuaFs2XSxcbiAgICAgIGg3ID0gdGhpcy5oWzddLFxuICAgICAgaDggPSB0aGlzLmhbOF0sXG4gICAgICBoOSA9IHRoaXMuaFs5XTtcblxuICB2YXIgcjAgPSB0aGlzLnJbMF0sXG4gICAgICByMSA9IHRoaXMuclsxXSxcbiAgICAgIHIyID0gdGhpcy5yWzJdLFxuICAgICAgcjMgPSB0aGlzLnJbM10sXG4gICAgICByNCA9IHRoaXMucls0XSxcbiAgICAgIHI1ID0gdGhpcy5yWzVdLFxuICAgICAgcjYgPSB0aGlzLnJbNl0sXG4gICAgICByNyA9IHRoaXMucls3XSxcbiAgICAgIHI4ID0gdGhpcy5yWzhdLFxuICAgICAgcjkgPSB0aGlzLnJbOV07XG5cbiAgd2hpbGUgKGJ5dGVzID49IDE2KSB7XG4gICAgdDAgPSBtW21wb3MrIDBdICYgMHhmZiB8IChtW21wb3MrIDFdICYgMHhmZikgPDwgODsgaDAgKz0gKCB0MCAgICAgICAgICAgICAgICAgICAgICkgJiAweDFmZmY7XG4gICAgdDEgPSBtW21wb3MrIDJdICYgMHhmZiB8IChtW21wb3MrIDNdICYgMHhmZikgPDwgODsgaDEgKz0gKCh0MCA+Pj4gMTMpIHwgKHQxIDw8ICAzKSkgJiAweDFmZmY7XG4gICAgdDIgPSBtW21wb3MrIDRdICYgMHhmZiB8IChtW21wb3MrIDVdICYgMHhmZikgPDwgODsgaDIgKz0gKCh0MSA+Pj4gMTApIHwgKHQyIDw8ICA2KSkgJiAweDFmZmY7XG4gICAgdDMgPSBtW21wb3MrIDZdICYgMHhmZiB8IChtW21wb3MrIDddICYgMHhmZikgPDwgODsgaDMgKz0gKCh0MiA+Pj4gIDcpIHwgKHQzIDw8ICA5KSkgJiAweDFmZmY7XG4gICAgdDQgPSBtW21wb3MrIDhdICYgMHhmZiB8IChtW21wb3MrIDldICYgMHhmZikgPDwgODsgaDQgKz0gKCh0MyA+Pj4gIDQpIHwgKHQ0IDw8IDEyKSkgJiAweDFmZmY7XG4gICAgaDUgKz0gKCh0NCA+Pj4gIDEpKSAmIDB4MWZmZjtcbiAgICB0NSA9IG1bbXBvcysxMF0gJiAweGZmIHwgKG1bbXBvcysxMV0gJiAweGZmKSA8PCA4OyBoNiArPSAoKHQ0ID4+PiAxNCkgfCAodDUgPDwgIDIpKSAmIDB4MWZmZjtcbiAgICB0NiA9IG1bbXBvcysxMl0gJiAweGZmIHwgKG1bbXBvcysxM10gJiAweGZmKSA8PCA4OyBoNyArPSAoKHQ1ID4+PiAxMSkgfCAodDYgPDwgIDUpKSAmIDB4MWZmZjtcbiAgICB0NyA9IG1bbXBvcysxNF0gJiAweGZmIHwgKG1bbXBvcysxNV0gJiAweGZmKSA8PCA4OyBoOCArPSAoKHQ2ID4+PiAgOCkgfCAodDcgPDwgIDgpKSAmIDB4MWZmZjtcbiAgICBoOSArPSAoKHQ3ID4+PiA1KSkgfCBoaWJpdDtcblxuICAgIGMgPSAwO1xuXG4gICAgZDAgPSBjO1xuICAgIGQwICs9IGgwICogcjA7XG4gICAgZDAgKz0gaDEgKiAoNSAqIHI5KTtcbiAgICBkMCArPSBoMiAqICg1ICogcjgpO1xuICAgIGQwICs9IGgzICogKDUgKiByNyk7XG4gICAgZDAgKz0gaDQgKiAoNSAqIHI2KTtcbiAgICBjID0gKGQwID4+PiAxMyk7IGQwICY9IDB4MWZmZjtcbiAgICBkMCArPSBoNSAqICg1ICogcjUpO1xuICAgIGQwICs9IGg2ICogKDUgKiByNCk7XG4gICAgZDAgKz0gaDcgKiAoNSAqIHIzKTtcbiAgICBkMCArPSBoOCAqICg1ICogcjIpO1xuICAgIGQwICs9IGg5ICogKDUgKiByMSk7XG4gICAgYyArPSAoZDAgPj4+IDEzKTsgZDAgJj0gMHgxZmZmO1xuXG4gICAgZDEgPSBjO1xuICAgIGQxICs9IGgwICogcjE7XG4gICAgZDEgKz0gaDEgKiByMDtcbiAgICBkMSArPSBoMiAqICg1ICogcjkpO1xuICAgIGQxICs9IGgzICogKDUgKiByOCk7XG4gICAgZDEgKz0gaDQgKiAoNSAqIHI3KTtcbiAgICBjID0gKGQxID4+PiAxMyk7IGQxICY9IDB4MWZmZjtcbiAgICBkMSArPSBoNSAqICg1ICogcjYpO1xuICAgIGQxICs9IGg2ICogKDUgKiByNSk7XG4gICAgZDEgKz0gaDcgKiAoNSAqIHI0KTtcbiAgICBkMSArPSBoOCAqICg1ICogcjMpO1xuICAgIGQxICs9IGg5ICogKDUgKiByMik7XG4gICAgYyArPSAoZDEgPj4+IDEzKTsgZDEgJj0gMHgxZmZmO1xuXG4gICAgZDIgPSBjO1xuICAgIGQyICs9IGgwICogcjI7XG4gICAgZDIgKz0gaDEgKiByMTtcbiAgICBkMiArPSBoMiAqIHIwO1xuICAgIGQyICs9IGgzICogKDUgKiByOSk7XG4gICAgZDIgKz0gaDQgKiAoNSAqIHI4KTtcbiAgICBjID0gKGQyID4+PiAxMyk7IGQyICY9IDB4MWZmZjtcbiAgICBkMiArPSBoNSAqICg1ICogcjcpO1xuICAgIGQyICs9IGg2ICogKDUgKiByNik7XG4gICAgZDIgKz0gaDcgKiAoNSAqIHI1KTtcbiAgICBkMiArPSBoOCAqICg1ICogcjQpO1xuICAgIGQyICs9IGg5ICogKDUgKiByMyk7XG4gICAgYyArPSAoZDIgPj4+IDEzKTsgZDIgJj0gMHgxZmZmO1xuXG4gICAgZDMgPSBjO1xuICAgIGQzICs9IGgwICogcjM7XG4gICAgZDMgKz0gaDEgKiByMjtcbiAgICBkMyArPSBoMiAqIHIxO1xuICAgIGQzICs9IGgzICogcjA7XG4gICAgZDMgKz0gaDQgKiAoNSAqIHI5KTtcbiAgICBjID0gKGQzID4+PiAxMyk7IGQzICY9IDB4MWZmZjtcbiAgICBkMyArPSBoNSAqICg1ICogcjgpO1xuICAgIGQzICs9IGg2ICogKDUgKiByNyk7XG4gICAgZDMgKz0gaDcgKiAoNSAqIHI2KTtcbiAgICBkMyArPSBoOCAqICg1ICogcjUpO1xuICAgIGQzICs9IGg5ICogKDUgKiByNCk7XG4gICAgYyArPSAoZDMgPj4+IDEzKTsgZDMgJj0gMHgxZmZmO1xuXG4gICAgZDQgPSBjO1xuICAgIGQ0ICs9IGgwICogcjQ7XG4gICAgZDQgKz0gaDEgKiByMztcbiAgICBkNCArPSBoMiAqIHIyO1xuICAgIGQ0ICs9IGgzICogcjE7XG4gICAgZDQgKz0gaDQgKiByMDtcbiAgICBjID0gKGQ0ID4+PiAxMyk7IGQ0ICY9IDB4MWZmZjtcbiAgICBkNCArPSBoNSAqICg1ICogcjkpO1xuICAgIGQ0ICs9IGg2ICogKDUgKiByOCk7XG4gICAgZDQgKz0gaDcgKiAoNSAqIHI3KTtcbiAgICBkNCArPSBoOCAqICg1ICogcjYpO1xuICAgIGQ0ICs9IGg5ICogKDUgKiByNSk7XG4gICAgYyArPSAoZDQgPj4+IDEzKTsgZDQgJj0gMHgxZmZmO1xuXG4gICAgZDUgPSBjO1xuICAgIGQ1ICs9IGgwICogcjU7XG4gICAgZDUgKz0gaDEgKiByNDtcbiAgICBkNSArPSBoMiAqIHIzO1xuICAgIGQ1ICs9IGgzICogcjI7XG4gICAgZDUgKz0gaDQgKiByMTtcbiAgICBjID0gKGQ1ID4+PiAxMyk7IGQ1ICY9IDB4MWZmZjtcbiAgICBkNSArPSBoNSAqIHIwO1xuICAgIGQ1ICs9IGg2ICogKDUgKiByOSk7XG4gICAgZDUgKz0gaDcgKiAoNSAqIHI4KTtcbiAgICBkNSArPSBoOCAqICg1ICogcjcpO1xuICAgIGQ1ICs9IGg5ICogKDUgKiByNik7XG4gICAgYyArPSAoZDUgPj4+IDEzKTsgZDUgJj0gMHgxZmZmO1xuXG4gICAgZDYgPSBjO1xuICAgIGQ2ICs9IGgwICogcjY7XG4gICAgZDYgKz0gaDEgKiByNTtcbiAgICBkNiArPSBoMiAqIHI0O1xuICAgIGQ2ICs9IGgzICogcjM7XG4gICAgZDYgKz0gaDQgKiByMjtcbiAgICBjID0gKGQ2ID4+PiAxMyk7IGQ2ICY9IDB4MWZmZjtcbiAgICBkNiArPSBoNSAqIHIxO1xuICAgIGQ2ICs9IGg2ICogcjA7XG4gICAgZDYgKz0gaDcgKiAoNSAqIHI5KTtcbiAgICBkNiArPSBoOCAqICg1ICogcjgpO1xuICAgIGQ2ICs9IGg5ICogKDUgKiByNyk7XG4gICAgYyArPSAoZDYgPj4+IDEzKTsgZDYgJj0gMHgxZmZmO1xuXG4gICAgZDcgPSBjO1xuICAgIGQ3ICs9IGgwICogcjc7XG4gICAgZDcgKz0gaDEgKiByNjtcbiAgICBkNyArPSBoMiAqIHI1O1xuICAgIGQ3ICs9IGgzICogcjQ7XG4gICAgZDcgKz0gaDQgKiByMztcbiAgICBjID0gKGQ3ID4+PiAxMyk7IGQ3ICY9IDB4MWZmZjtcbiAgICBkNyArPSBoNSAqIHIyO1xuICAgIGQ3ICs9IGg2ICogcjE7XG4gICAgZDcgKz0gaDcgKiByMDtcbiAgICBkNyArPSBoOCAqICg1ICogcjkpO1xuICAgIGQ3ICs9IGg5ICogKDUgKiByOCk7XG4gICAgYyArPSAoZDcgPj4+IDEzKTsgZDcgJj0gMHgxZmZmO1xuXG4gICAgZDggPSBjO1xuICAgIGQ4ICs9IGgwICogcjg7XG4gICAgZDggKz0gaDEgKiByNztcbiAgICBkOCArPSBoMiAqIHI2O1xuICAgIGQ4ICs9IGgzICogcjU7XG4gICAgZDggKz0gaDQgKiByNDtcbiAgICBjID0gKGQ4ID4+PiAxMyk7IGQ4ICY9IDB4MWZmZjtcbiAgICBkOCArPSBoNSAqIHIzO1xuICAgIGQ4ICs9IGg2ICogcjI7XG4gICAgZDggKz0gaDcgKiByMTtcbiAgICBkOCArPSBoOCAqIHIwO1xuICAgIGQ4ICs9IGg5ICogKDUgKiByOSk7XG4gICAgYyArPSAoZDggPj4+IDEzKTsgZDggJj0gMHgxZmZmO1xuXG4gICAgZDkgPSBjO1xuICAgIGQ5ICs9IGgwICogcjk7XG4gICAgZDkgKz0gaDEgKiByODtcbiAgICBkOSArPSBoMiAqIHI3O1xuICAgIGQ5ICs9IGgzICogcjY7XG4gICAgZDkgKz0gaDQgKiByNTtcbiAgICBjID0gKGQ5ID4+PiAxMyk7IGQ5ICY9IDB4MWZmZjtcbiAgICBkOSArPSBoNSAqIHI0O1xuICAgIGQ5ICs9IGg2ICogcjM7XG4gICAgZDkgKz0gaDcgKiByMjtcbiAgICBkOSArPSBoOCAqIHIxO1xuICAgIGQ5ICs9IGg5ICogcjA7XG4gICAgYyArPSAoZDkgPj4+IDEzKTsgZDkgJj0gMHgxZmZmO1xuXG4gICAgYyA9ICgoKGMgPDwgMikgKyBjKSkgfCAwO1xuICAgIGMgPSAoYyArIGQwKSB8IDA7XG4gICAgZDAgPSBjICYgMHgxZmZmO1xuICAgIGMgPSAoYyA+Pj4gMTMpO1xuICAgIGQxICs9IGM7XG5cbiAgICBoMCA9IGQwO1xuICAgIGgxID0gZDE7XG4gICAgaDIgPSBkMjtcbiAgICBoMyA9IGQzO1xuICAgIGg0ID0gZDQ7XG4gICAgaDUgPSBkNTtcbiAgICBoNiA9IGQ2O1xuICAgIGg3ID0gZDc7XG4gICAgaDggPSBkODtcbiAgICBoOSA9IGQ5O1xuXG4gICAgbXBvcyArPSAxNjtcbiAgICBieXRlcyAtPSAxNjtcbiAgfVxuICB0aGlzLmhbMF0gPSBoMDtcbiAgdGhpcy5oWzFdID0gaDE7XG4gIHRoaXMuaFsyXSA9IGgyO1xuICB0aGlzLmhbM10gPSBoMztcbiAgdGhpcy5oWzRdID0gaDQ7XG4gIHRoaXMuaFs1XSA9IGg1O1xuICB0aGlzLmhbNl0gPSBoNjtcbiAgdGhpcy5oWzddID0gaDc7XG4gIHRoaXMuaFs4XSA9IGg4O1xuICB0aGlzLmhbOV0gPSBoOTtcbn07XG5cbnBvbHkxMzA1LnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbihtYWMsIG1hY3Bvcykge1xuICB2YXIgZyA9IG5ldyBVaW50MTZBcnJheSgxMCk7XG4gIHZhciBjLCBtYXNrLCBmLCBpO1xuXG4gIGlmICh0aGlzLmxlZnRvdmVyKSB7XG4gICAgaSA9IHRoaXMubGVmdG92ZXI7XG4gICAgdGhpcy5idWZmZXJbaSsrXSA9IDE7XG4gICAgZm9yICg7IGkgPCAxNjsgaSsrKSB0aGlzLmJ1ZmZlcltpXSA9IDA7XG4gICAgdGhpcy5maW4gPSAxO1xuICAgIHRoaXMuYmxvY2tzKHRoaXMuYnVmZmVyLCAwLCAxNik7XG4gIH1cblxuICBjID0gdGhpcy5oWzFdID4+PiAxMztcbiAgdGhpcy5oWzFdICY9IDB4MWZmZjtcbiAgZm9yIChpID0gMjsgaSA8IDEwOyBpKyspIHtcbiAgICB0aGlzLmhbaV0gKz0gYztcbiAgICBjID0gdGhpcy5oW2ldID4+PiAxMztcbiAgICB0aGlzLmhbaV0gJj0gMHgxZmZmO1xuICB9XG4gIHRoaXMuaFswXSArPSAoYyAqIDUpO1xuICBjID0gdGhpcy5oWzBdID4+PiAxMztcbiAgdGhpcy5oWzBdICY9IDB4MWZmZjtcbiAgdGhpcy5oWzFdICs9IGM7XG4gIGMgPSB0aGlzLmhbMV0gPj4+IDEzO1xuICB0aGlzLmhbMV0gJj0gMHgxZmZmO1xuICB0aGlzLmhbMl0gKz0gYztcblxuICBnWzBdID0gdGhpcy5oWzBdICsgNTtcbiAgYyA9IGdbMF0gPj4+IDEzO1xuICBnWzBdICY9IDB4MWZmZjtcbiAgZm9yIChpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICBnW2ldID0gdGhpcy5oW2ldICsgYztcbiAgICBjID0gZ1tpXSA+Pj4gMTM7XG4gICAgZ1tpXSAmPSAweDFmZmY7XG4gIH1cbiAgZ1s5XSAtPSAoMSA8PCAxMyk7XG5cbiAgbWFzayA9IChjIF4gMSkgLSAxO1xuICBmb3IgKGkgPSAwOyBpIDwgMTA7IGkrKykgZ1tpXSAmPSBtYXNrO1xuICBtYXNrID0gfm1hc2s7XG4gIGZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSB0aGlzLmhbaV0gPSAodGhpcy5oW2ldICYgbWFzaykgfCBnW2ldO1xuXG4gIHRoaXMuaFswXSA9ICgodGhpcy5oWzBdICAgICAgICkgfCAodGhpcy5oWzFdIDw8IDEzKSAgICAgICAgICAgICAgICAgICAgKSAmIDB4ZmZmZjtcbiAgdGhpcy5oWzFdID0gKCh0aGlzLmhbMV0gPj4+ICAzKSB8ICh0aGlzLmhbMl0gPDwgMTApICAgICAgICAgICAgICAgICAgICApICYgMHhmZmZmO1xuICB0aGlzLmhbMl0gPSAoKHRoaXMuaFsyXSA+Pj4gIDYpIHwgKHRoaXMuaFszXSA8PCAgNykgICAgICAgICAgICAgICAgICAgICkgJiAweGZmZmY7XG4gIHRoaXMuaFszXSA9ICgodGhpcy5oWzNdID4+PiAgOSkgfCAodGhpcy5oWzRdIDw8ICA0KSAgICAgICAgICAgICAgICAgICAgKSAmIDB4ZmZmZjtcbiAgdGhpcy5oWzRdID0gKCh0aGlzLmhbNF0gPj4+IDEyKSB8ICh0aGlzLmhbNV0gPDwgIDEpIHwgKHRoaXMuaFs2XSA8PCAxNCkpICYgMHhmZmZmO1xuICB0aGlzLmhbNV0gPSAoKHRoaXMuaFs2XSA+Pj4gIDIpIHwgKHRoaXMuaFs3XSA8PCAxMSkgICAgICAgICAgICAgICAgICAgICkgJiAweGZmZmY7XG4gIHRoaXMuaFs2XSA9ICgodGhpcy5oWzddID4+PiAgNSkgfCAodGhpcy5oWzhdIDw8ICA4KSAgICAgICAgICAgICAgICAgICAgKSAmIDB4ZmZmZjtcbiAgdGhpcy5oWzddID0gKCh0aGlzLmhbOF0gPj4+ICA4KSB8ICh0aGlzLmhbOV0gPDwgIDUpICAgICAgICAgICAgICAgICAgICApICYgMHhmZmZmO1xuXG4gIGYgPSB0aGlzLmhbMF0gKyB0aGlzLnBhZFswXTtcbiAgdGhpcy5oWzBdID0gZiAmIDB4ZmZmZjtcbiAgZm9yIChpID0gMTsgaSA8IDg7IGkrKykge1xuICAgIGYgPSAoKCh0aGlzLmhbaV0gKyB0aGlzLnBhZFtpXSkgfCAwKSArIChmID4+PiAxNikpIHwgMDtcbiAgICB0aGlzLmhbaV0gPSBmICYgMHhmZmZmO1xuICB9XG5cbiAgbWFjW21hY3BvcysgMF0gPSAodGhpcy5oWzBdID4+PiAwKSAmIDB4ZmY7XG4gIG1hY1ttYWNwb3MrIDFdID0gKHRoaXMuaFswXSA+Pj4gOCkgJiAweGZmO1xuICBtYWNbbWFjcG9zKyAyXSA9ICh0aGlzLmhbMV0gPj4+IDApICYgMHhmZjtcbiAgbWFjW21hY3BvcysgM10gPSAodGhpcy5oWzFdID4+PiA4KSAmIDB4ZmY7XG4gIG1hY1ttYWNwb3MrIDRdID0gKHRoaXMuaFsyXSA+Pj4gMCkgJiAweGZmO1xuICBtYWNbbWFjcG9zKyA1XSA9ICh0aGlzLmhbMl0gPj4+IDgpICYgMHhmZjtcbiAgbWFjW21hY3BvcysgNl0gPSAodGhpcy5oWzNdID4+PiAwKSAmIDB4ZmY7XG4gIG1hY1ttYWNwb3MrIDddID0gKHRoaXMuaFszXSA+Pj4gOCkgJiAweGZmO1xuICBtYWNbbWFjcG9zKyA4XSA9ICh0aGlzLmhbNF0gPj4+IDApICYgMHhmZjtcbiAgbWFjW21hY3BvcysgOV0gPSAodGhpcy5oWzRdID4+PiA4KSAmIDB4ZmY7XG4gIG1hY1ttYWNwb3MrMTBdID0gKHRoaXMuaFs1XSA+Pj4gMCkgJiAweGZmO1xuICBtYWNbbWFjcG9zKzExXSA9ICh0aGlzLmhbNV0gPj4+IDgpICYgMHhmZjtcbiAgbWFjW21hY3BvcysxMl0gPSAodGhpcy5oWzZdID4+PiAwKSAmIDB4ZmY7XG4gIG1hY1ttYWNwb3MrMTNdID0gKHRoaXMuaFs2XSA+Pj4gOCkgJiAweGZmO1xuICBtYWNbbWFjcG9zKzE0XSA9ICh0aGlzLmhbN10gPj4+IDApICYgMHhmZjtcbiAgbWFjW21hY3BvcysxNV0gPSAodGhpcy5oWzddID4+PiA4KSAmIDB4ZmY7XG59O1xuXG5wb2x5MTMwNS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24obSwgbXBvcywgYnl0ZXMpIHtcbiAgdmFyIGksIHdhbnQ7XG5cbiAgaWYgKHRoaXMubGVmdG92ZXIpIHtcbiAgICB3YW50ID0gKDE2IC0gdGhpcy5sZWZ0b3Zlcik7XG4gICAgaWYgKHdhbnQgPiBieXRlcylcbiAgICAgIHdhbnQgPSBieXRlcztcbiAgICBmb3IgKGkgPSAwOyBpIDwgd2FudDsgaSsrKVxuICAgICAgdGhpcy5idWZmZXJbdGhpcy5sZWZ0b3ZlciArIGldID0gbVttcG9zK2ldO1xuICAgIGJ5dGVzIC09IHdhbnQ7XG4gICAgbXBvcyArPSB3YW50O1xuICAgIHRoaXMubGVmdG92ZXIgKz0gd2FudDtcbiAgICBpZiAodGhpcy5sZWZ0b3ZlciA8IDE2KVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuYmxvY2tzKHRoaXMuYnVmZmVyLCAwLCAxNik7XG4gICAgdGhpcy5sZWZ0b3ZlciA9IDA7XG4gIH1cblxuICBpZiAoYnl0ZXMgPj0gMTYpIHtcbiAgICB3YW50ID0gYnl0ZXMgLSAoYnl0ZXMgJSAxNik7XG4gICAgdGhpcy5ibG9ja3MobSwgbXBvcywgd2FudCk7XG4gICAgbXBvcyArPSB3YW50O1xuICAgIGJ5dGVzIC09IHdhbnQ7XG4gIH1cblxuICBpZiAoYnl0ZXMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZXM7IGkrKylcbiAgICAgIHRoaXMuYnVmZmVyW3RoaXMubGVmdG92ZXIgKyBpXSA9IG1bbXBvcytpXTtcbiAgICB0aGlzLmxlZnRvdmVyICs9IGJ5dGVzO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcnlwdG9fb25ldGltZWF1dGgob3V0LCBvdXRwb3MsIG0sIG1wb3MsIG4sIGspIHtcbiAgdmFyIHMgPSBuZXcgcG9seTEzMDUoayk7XG4gIHMudXBkYXRlKG0sIG1wb3MsIG4pO1xuICBzLmZpbmlzaChvdXQsIG91dHBvcyk7XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fb25ldGltZWF1dGhfdmVyaWZ5KGgsIGhwb3MsIG0sIG1wb3MsIG4sIGspIHtcbiAgdmFyIHggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIGNyeXB0b19vbmV0aW1lYXV0aCh4LDAsbSxtcG9zLG4sayk7XG4gIHJldHVybiBjcnlwdG9fdmVyaWZ5XzE2KGgsaHBvcyx4LDApO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fc2VjcmV0Ym94KGMsbSxkLG4saykge1xuICB2YXIgaTtcbiAgaWYgKGQgPCAzMikgcmV0dXJuIC0xO1xuICBjcnlwdG9fc3RyZWFtX3hvcihjLDAsbSwwLGQsbixrKTtcbiAgY3J5cHRvX29uZXRpbWVhdXRoKGMsIDE2LCBjLCAzMiwgZCAtIDMyLCBjKTtcbiAgZm9yIChpID0gMDsgaSA8IDE2OyBpKyspIGNbaV0gPSAwO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX3NlY3JldGJveF9vcGVuKG0sYyxkLG4saykge1xuICB2YXIgaTtcbiAgdmFyIHggPSBuZXcgVWludDhBcnJheSgzMik7XG4gIGlmIChkIDwgMzIpIHJldHVybiAtMTtcbiAgY3J5cHRvX3N0cmVhbSh4LDAsMzIsbixrKTtcbiAgaWYgKGNyeXB0b19vbmV0aW1lYXV0aF92ZXJpZnkoYywgMTYsYywgMzIsZCAtIDMyLHgpICE9PSAwKSByZXR1cm4gLTE7XG4gIGNyeXB0b19zdHJlYW1feG9yKG0sMCxjLDAsZCxuLGspO1xuICBmb3IgKGkgPSAwOyBpIDwgMzI7IGkrKykgbVtpXSA9IDA7XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBzZXQyNTUxOShyLCBhKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykgcltpXSA9IGFbaV18MDtcbn1cblxuZnVuY3Rpb24gY2FyMjU1MTkobykge1xuICB2YXIgaSwgdiwgYyA9IDE7XG4gIGZvciAoaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgdiA9IG9baV0gKyBjICsgNjU1MzU7XG4gICAgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTtcbiAgICBvW2ldID0gdiAtIGMgKiA2NTUzNjtcbiAgfVxuICBvWzBdICs9IGMtMSArIDM3ICogKGMtMSk7XG59XG5cbmZ1bmN0aW9uIHNlbDI1NTE5KHAsIHEsIGIpIHtcbiAgdmFyIHQsIGMgPSB+KGItMSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgIHQgPSBjICYgKHBbaV0gXiBxW2ldKTtcbiAgICBwW2ldIF49IHQ7XG4gICAgcVtpXSBePSB0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhY2syNTUxOShvLCBuKSB7XG4gIHZhciBpLCBqLCBiO1xuICB2YXIgbSA9IGdmKCksIHQgPSBnZigpO1xuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykgdFtpXSA9IG5baV07XG4gIGNhcjI1NTE5KHQpO1xuICBjYXIyNTUxOSh0KTtcbiAgY2FyMjU1MTkodCk7XG4gIGZvciAoaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICBtWzBdID0gdFswXSAtIDB4ZmZlZDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgMTU7IGkrKykge1xuICAgICAgbVtpXSA9IHRbaV0gLSAweGZmZmYgLSAoKG1baS0xXT4+MTYpICYgMSk7XG4gICAgICBtW2ktMV0gJj0gMHhmZmZmO1xuICAgIH1cbiAgICBtWzE1XSA9IHRbMTVdIC0gMHg3ZmZmIC0gKChtWzE0XT4+MTYpICYgMSk7XG4gICAgYiA9IChtWzE1XT4+MTYpICYgMTtcbiAgICBtWzE0XSAmPSAweGZmZmY7XG4gICAgc2VsMjU1MTkodCwgbSwgMS1iKTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgIG9bMippXSA9IHRbaV0gJiAweGZmO1xuICAgIG9bMippKzFdID0gdFtpXT4+ODtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXEyNTUxOShhLCBiKSB7XG4gIHZhciBjID0gbmV3IFVpbnQ4QXJyYXkoMzIpLCBkID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICBwYWNrMjU1MTkoYywgYSk7XG4gIHBhY2syNTUxOShkLCBiKTtcbiAgcmV0dXJuIGNyeXB0b192ZXJpZnlfMzIoYywgMCwgZCwgMCk7XG59XG5cbmZ1bmN0aW9uIHBhcjI1NTE5KGEpIHtcbiAgdmFyIGQgPSBuZXcgVWludDhBcnJheSgzMik7XG4gIHBhY2syNTUxOShkLCBhKTtcbiAgcmV0dXJuIGRbMF0gJiAxO1xufVxuXG5mdW5jdGlvbiB1bnBhY2syNTUxOShvLCBuKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykgb1tpXSA9IG5bMippXSArIChuWzIqaSsxXSA8PCA4KTtcbiAgb1sxNV0gJj0gMHg3ZmZmO1xufVxuXG5mdW5jdGlvbiBBKG8sIGEsIGIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSBvW2ldID0gYVtpXSArIGJbaV07XG59XG5cbmZ1bmN0aW9uIFoobywgYSwgYikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIG9baV0gPSBhW2ldIC0gYltpXTtcbn1cblxuZnVuY3Rpb24gTShvLCBhLCBiKSB7XG4gIHZhciB2LCBjLFxuICAgICB0MCA9IDAsICB0MSA9IDAsICB0MiA9IDAsICB0MyA9IDAsICB0NCA9IDAsICB0NSA9IDAsICB0NiA9IDAsICB0NyA9IDAsXG4gICAgIHQ4ID0gMCwgIHQ5ID0gMCwgdDEwID0gMCwgdDExID0gMCwgdDEyID0gMCwgdDEzID0gMCwgdDE0ID0gMCwgdDE1ID0gMCxcbiAgICB0MTYgPSAwLCB0MTcgPSAwLCB0MTggPSAwLCB0MTkgPSAwLCB0MjAgPSAwLCB0MjEgPSAwLCB0MjIgPSAwLCB0MjMgPSAwLFxuICAgIHQyNCA9IDAsIHQyNSA9IDAsIHQyNiA9IDAsIHQyNyA9IDAsIHQyOCA9IDAsIHQyOSA9IDAsIHQzMCA9IDAsXG4gICAgYjAgPSBiWzBdLFxuICAgIGIxID0gYlsxXSxcbiAgICBiMiA9IGJbMl0sXG4gICAgYjMgPSBiWzNdLFxuICAgIGI0ID0gYls0XSxcbiAgICBiNSA9IGJbNV0sXG4gICAgYjYgPSBiWzZdLFxuICAgIGI3ID0gYls3XSxcbiAgICBiOCA9IGJbOF0sXG4gICAgYjkgPSBiWzldLFxuICAgIGIxMCA9IGJbMTBdLFxuICAgIGIxMSA9IGJbMTFdLFxuICAgIGIxMiA9IGJbMTJdLFxuICAgIGIxMyA9IGJbMTNdLFxuICAgIGIxNCA9IGJbMTRdLFxuICAgIGIxNSA9IGJbMTVdO1xuXG4gIHYgPSBhWzBdO1xuICB0MCArPSB2ICogYjA7XG4gIHQxICs9IHYgKiBiMTtcbiAgdDIgKz0gdiAqIGIyO1xuICB0MyArPSB2ICogYjM7XG4gIHQ0ICs9IHYgKiBiNDtcbiAgdDUgKz0gdiAqIGI1O1xuICB0NiArPSB2ICogYjY7XG4gIHQ3ICs9IHYgKiBiNztcbiAgdDggKz0gdiAqIGI4O1xuICB0OSArPSB2ICogYjk7XG4gIHQxMCArPSB2ICogYjEwO1xuICB0MTEgKz0gdiAqIGIxMTtcbiAgdDEyICs9IHYgKiBiMTI7XG4gIHQxMyArPSB2ICogYjEzO1xuICB0MTQgKz0gdiAqIGIxNDtcbiAgdDE1ICs9IHYgKiBiMTU7XG4gIHYgPSBhWzFdO1xuICB0MSArPSB2ICogYjA7XG4gIHQyICs9IHYgKiBiMTtcbiAgdDMgKz0gdiAqIGIyO1xuICB0NCArPSB2ICogYjM7XG4gIHQ1ICs9IHYgKiBiNDtcbiAgdDYgKz0gdiAqIGI1O1xuICB0NyArPSB2ICogYjY7XG4gIHQ4ICs9IHYgKiBiNztcbiAgdDkgKz0gdiAqIGI4O1xuICB0MTAgKz0gdiAqIGI5O1xuICB0MTEgKz0gdiAqIGIxMDtcbiAgdDEyICs9IHYgKiBiMTE7XG4gIHQxMyArPSB2ICogYjEyO1xuICB0MTQgKz0gdiAqIGIxMztcbiAgdDE1ICs9IHYgKiBiMTQ7XG4gIHQxNiArPSB2ICogYjE1O1xuICB2ID0gYVsyXTtcbiAgdDIgKz0gdiAqIGIwO1xuICB0MyArPSB2ICogYjE7XG4gIHQ0ICs9IHYgKiBiMjtcbiAgdDUgKz0gdiAqIGIzO1xuICB0NiArPSB2ICogYjQ7XG4gIHQ3ICs9IHYgKiBiNTtcbiAgdDggKz0gdiAqIGI2O1xuICB0OSArPSB2ICogYjc7XG4gIHQxMCArPSB2ICogYjg7XG4gIHQxMSArPSB2ICogYjk7XG4gIHQxMiArPSB2ICogYjEwO1xuICB0MTMgKz0gdiAqIGIxMTtcbiAgdDE0ICs9IHYgKiBiMTI7XG4gIHQxNSArPSB2ICogYjEzO1xuICB0MTYgKz0gdiAqIGIxNDtcbiAgdDE3ICs9IHYgKiBiMTU7XG4gIHYgPSBhWzNdO1xuICB0MyArPSB2ICogYjA7XG4gIHQ0ICs9IHYgKiBiMTtcbiAgdDUgKz0gdiAqIGIyO1xuICB0NiArPSB2ICogYjM7XG4gIHQ3ICs9IHYgKiBiNDtcbiAgdDggKz0gdiAqIGI1O1xuICB0OSArPSB2ICogYjY7XG4gIHQxMCArPSB2ICogYjc7XG4gIHQxMSArPSB2ICogYjg7XG4gIHQxMiArPSB2ICogYjk7XG4gIHQxMyArPSB2ICogYjEwO1xuICB0MTQgKz0gdiAqIGIxMTtcbiAgdDE1ICs9IHYgKiBiMTI7XG4gIHQxNiArPSB2ICogYjEzO1xuICB0MTcgKz0gdiAqIGIxNDtcbiAgdDE4ICs9IHYgKiBiMTU7XG4gIHYgPSBhWzRdO1xuICB0NCArPSB2ICogYjA7XG4gIHQ1ICs9IHYgKiBiMTtcbiAgdDYgKz0gdiAqIGIyO1xuICB0NyArPSB2ICogYjM7XG4gIHQ4ICs9IHYgKiBiNDtcbiAgdDkgKz0gdiAqIGI1O1xuICB0MTAgKz0gdiAqIGI2O1xuICB0MTEgKz0gdiAqIGI3O1xuICB0MTIgKz0gdiAqIGI4O1xuICB0MTMgKz0gdiAqIGI5O1xuICB0MTQgKz0gdiAqIGIxMDtcbiAgdDE1ICs9IHYgKiBiMTE7XG4gIHQxNiArPSB2ICogYjEyO1xuICB0MTcgKz0gdiAqIGIxMztcbiAgdDE4ICs9IHYgKiBiMTQ7XG4gIHQxOSArPSB2ICogYjE1O1xuICB2ID0gYVs1XTtcbiAgdDUgKz0gdiAqIGIwO1xuICB0NiArPSB2ICogYjE7XG4gIHQ3ICs9IHYgKiBiMjtcbiAgdDggKz0gdiAqIGIzO1xuICB0OSArPSB2ICogYjQ7XG4gIHQxMCArPSB2ICogYjU7XG4gIHQxMSArPSB2ICogYjY7XG4gIHQxMiArPSB2ICogYjc7XG4gIHQxMyArPSB2ICogYjg7XG4gIHQxNCArPSB2ICogYjk7XG4gIHQxNSArPSB2ICogYjEwO1xuICB0MTYgKz0gdiAqIGIxMTtcbiAgdDE3ICs9IHYgKiBiMTI7XG4gIHQxOCArPSB2ICogYjEzO1xuICB0MTkgKz0gdiAqIGIxNDtcbiAgdDIwICs9IHYgKiBiMTU7XG4gIHYgPSBhWzZdO1xuICB0NiArPSB2ICogYjA7XG4gIHQ3ICs9IHYgKiBiMTtcbiAgdDggKz0gdiAqIGIyO1xuICB0OSArPSB2ICogYjM7XG4gIHQxMCArPSB2ICogYjQ7XG4gIHQxMSArPSB2ICogYjU7XG4gIHQxMiArPSB2ICogYjY7XG4gIHQxMyArPSB2ICogYjc7XG4gIHQxNCArPSB2ICogYjg7XG4gIHQxNSArPSB2ICogYjk7XG4gIHQxNiArPSB2ICogYjEwO1xuICB0MTcgKz0gdiAqIGIxMTtcbiAgdDE4ICs9IHYgKiBiMTI7XG4gIHQxOSArPSB2ICogYjEzO1xuICB0MjAgKz0gdiAqIGIxNDtcbiAgdDIxICs9IHYgKiBiMTU7XG4gIHYgPSBhWzddO1xuICB0NyArPSB2ICogYjA7XG4gIHQ4ICs9IHYgKiBiMTtcbiAgdDkgKz0gdiAqIGIyO1xuICB0MTAgKz0gdiAqIGIzO1xuICB0MTEgKz0gdiAqIGI0O1xuICB0MTIgKz0gdiAqIGI1O1xuICB0MTMgKz0gdiAqIGI2O1xuICB0MTQgKz0gdiAqIGI3O1xuICB0MTUgKz0gdiAqIGI4O1xuICB0MTYgKz0gdiAqIGI5O1xuICB0MTcgKz0gdiAqIGIxMDtcbiAgdDE4ICs9IHYgKiBiMTE7XG4gIHQxOSArPSB2ICogYjEyO1xuICB0MjAgKz0gdiAqIGIxMztcbiAgdDIxICs9IHYgKiBiMTQ7XG4gIHQyMiArPSB2ICogYjE1O1xuICB2ID0gYVs4XTtcbiAgdDggKz0gdiAqIGIwO1xuICB0OSArPSB2ICogYjE7XG4gIHQxMCArPSB2ICogYjI7XG4gIHQxMSArPSB2ICogYjM7XG4gIHQxMiArPSB2ICogYjQ7XG4gIHQxMyArPSB2ICogYjU7XG4gIHQxNCArPSB2ICogYjY7XG4gIHQxNSArPSB2ICogYjc7XG4gIHQxNiArPSB2ICogYjg7XG4gIHQxNyArPSB2ICogYjk7XG4gIHQxOCArPSB2ICogYjEwO1xuICB0MTkgKz0gdiAqIGIxMTtcbiAgdDIwICs9IHYgKiBiMTI7XG4gIHQyMSArPSB2ICogYjEzO1xuICB0MjIgKz0gdiAqIGIxNDtcbiAgdDIzICs9IHYgKiBiMTU7XG4gIHYgPSBhWzldO1xuICB0OSArPSB2ICogYjA7XG4gIHQxMCArPSB2ICogYjE7XG4gIHQxMSArPSB2ICogYjI7XG4gIHQxMiArPSB2ICogYjM7XG4gIHQxMyArPSB2ICogYjQ7XG4gIHQxNCArPSB2ICogYjU7XG4gIHQxNSArPSB2ICogYjY7XG4gIHQxNiArPSB2ICogYjc7XG4gIHQxNyArPSB2ICogYjg7XG4gIHQxOCArPSB2ICogYjk7XG4gIHQxOSArPSB2ICogYjEwO1xuICB0MjAgKz0gdiAqIGIxMTtcbiAgdDIxICs9IHYgKiBiMTI7XG4gIHQyMiArPSB2ICogYjEzO1xuICB0MjMgKz0gdiAqIGIxNDtcbiAgdDI0ICs9IHYgKiBiMTU7XG4gIHYgPSBhWzEwXTtcbiAgdDEwICs9IHYgKiBiMDtcbiAgdDExICs9IHYgKiBiMTtcbiAgdDEyICs9IHYgKiBiMjtcbiAgdDEzICs9IHYgKiBiMztcbiAgdDE0ICs9IHYgKiBiNDtcbiAgdDE1ICs9IHYgKiBiNTtcbiAgdDE2ICs9IHYgKiBiNjtcbiAgdDE3ICs9IHYgKiBiNztcbiAgdDE4ICs9IHYgKiBiODtcbiAgdDE5ICs9IHYgKiBiOTtcbiAgdDIwICs9IHYgKiBiMTA7XG4gIHQyMSArPSB2ICogYjExO1xuICB0MjIgKz0gdiAqIGIxMjtcbiAgdDIzICs9IHYgKiBiMTM7XG4gIHQyNCArPSB2ICogYjE0O1xuICB0MjUgKz0gdiAqIGIxNTtcbiAgdiA9IGFbMTFdO1xuICB0MTEgKz0gdiAqIGIwO1xuICB0MTIgKz0gdiAqIGIxO1xuICB0MTMgKz0gdiAqIGIyO1xuICB0MTQgKz0gdiAqIGIzO1xuICB0MTUgKz0gdiAqIGI0O1xuICB0MTYgKz0gdiAqIGI1O1xuICB0MTcgKz0gdiAqIGI2O1xuICB0MTggKz0gdiAqIGI3O1xuICB0MTkgKz0gdiAqIGI4O1xuICB0MjAgKz0gdiAqIGI5O1xuICB0MjEgKz0gdiAqIGIxMDtcbiAgdDIyICs9IHYgKiBiMTE7XG4gIHQyMyArPSB2ICogYjEyO1xuICB0MjQgKz0gdiAqIGIxMztcbiAgdDI1ICs9IHYgKiBiMTQ7XG4gIHQyNiArPSB2ICogYjE1O1xuICB2ID0gYVsxMl07XG4gIHQxMiArPSB2ICogYjA7XG4gIHQxMyArPSB2ICogYjE7XG4gIHQxNCArPSB2ICogYjI7XG4gIHQxNSArPSB2ICogYjM7XG4gIHQxNiArPSB2ICogYjQ7XG4gIHQxNyArPSB2ICogYjU7XG4gIHQxOCArPSB2ICogYjY7XG4gIHQxOSArPSB2ICogYjc7XG4gIHQyMCArPSB2ICogYjg7XG4gIHQyMSArPSB2ICogYjk7XG4gIHQyMiArPSB2ICogYjEwO1xuICB0MjMgKz0gdiAqIGIxMTtcbiAgdDI0ICs9IHYgKiBiMTI7XG4gIHQyNSArPSB2ICogYjEzO1xuICB0MjYgKz0gdiAqIGIxNDtcbiAgdDI3ICs9IHYgKiBiMTU7XG4gIHYgPSBhWzEzXTtcbiAgdDEzICs9IHYgKiBiMDtcbiAgdDE0ICs9IHYgKiBiMTtcbiAgdDE1ICs9IHYgKiBiMjtcbiAgdDE2ICs9IHYgKiBiMztcbiAgdDE3ICs9IHYgKiBiNDtcbiAgdDE4ICs9IHYgKiBiNTtcbiAgdDE5ICs9IHYgKiBiNjtcbiAgdDIwICs9IHYgKiBiNztcbiAgdDIxICs9IHYgKiBiODtcbiAgdDIyICs9IHYgKiBiOTtcbiAgdDIzICs9IHYgKiBiMTA7XG4gIHQyNCArPSB2ICogYjExO1xuICB0MjUgKz0gdiAqIGIxMjtcbiAgdDI2ICs9IHYgKiBiMTM7XG4gIHQyNyArPSB2ICogYjE0O1xuICB0MjggKz0gdiAqIGIxNTtcbiAgdiA9IGFbMTRdO1xuICB0MTQgKz0gdiAqIGIwO1xuICB0MTUgKz0gdiAqIGIxO1xuICB0MTYgKz0gdiAqIGIyO1xuICB0MTcgKz0gdiAqIGIzO1xuICB0MTggKz0gdiAqIGI0O1xuICB0MTkgKz0gdiAqIGI1O1xuICB0MjAgKz0gdiAqIGI2O1xuICB0MjEgKz0gdiAqIGI3O1xuICB0MjIgKz0gdiAqIGI4O1xuICB0MjMgKz0gdiAqIGI5O1xuICB0MjQgKz0gdiAqIGIxMDtcbiAgdDI1ICs9IHYgKiBiMTE7XG4gIHQyNiArPSB2ICogYjEyO1xuICB0MjcgKz0gdiAqIGIxMztcbiAgdDI4ICs9IHYgKiBiMTQ7XG4gIHQyOSArPSB2ICogYjE1O1xuICB2ID0gYVsxNV07XG4gIHQxNSArPSB2ICogYjA7XG4gIHQxNiArPSB2ICogYjE7XG4gIHQxNyArPSB2ICogYjI7XG4gIHQxOCArPSB2ICogYjM7XG4gIHQxOSArPSB2ICogYjQ7XG4gIHQyMCArPSB2ICogYjU7XG4gIHQyMSArPSB2ICogYjY7XG4gIHQyMiArPSB2ICogYjc7XG4gIHQyMyArPSB2ICogYjg7XG4gIHQyNCArPSB2ICogYjk7XG4gIHQyNSArPSB2ICogYjEwO1xuICB0MjYgKz0gdiAqIGIxMTtcbiAgdDI3ICs9IHYgKiBiMTI7XG4gIHQyOCArPSB2ICogYjEzO1xuICB0MjkgKz0gdiAqIGIxNDtcbiAgdDMwICs9IHYgKiBiMTU7XG5cbiAgdDAgICs9IDM4ICogdDE2O1xuICB0MSAgKz0gMzggKiB0MTc7XG4gIHQyICArPSAzOCAqIHQxODtcbiAgdDMgICs9IDM4ICogdDE5O1xuICB0NCAgKz0gMzggKiB0MjA7XG4gIHQ1ICArPSAzOCAqIHQyMTtcbiAgdDYgICs9IDM4ICogdDIyO1xuICB0NyAgKz0gMzggKiB0MjM7XG4gIHQ4ICArPSAzOCAqIHQyNDtcbiAgdDkgICs9IDM4ICogdDI1O1xuICB0MTAgKz0gMzggKiB0MjY7XG4gIHQxMSArPSAzOCAqIHQyNztcbiAgdDEyICs9IDM4ICogdDI4O1xuICB0MTMgKz0gMzggKiB0Mjk7XG4gIHQxNCArPSAzOCAqIHQzMDtcbiAgLy8gdDE1IGxlZnQgYXMgaXNcblxuICAvLyBmaXJzdCBjYXJcbiAgYyA9IDE7XG4gIHYgPSAgdDAgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0MCA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDEgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0MSA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDIgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0MiA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDMgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0MyA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDQgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0NCA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDUgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0NSA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDYgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0NiA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDcgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0NyA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDggKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0OCA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSAgdDkgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7ICB0OSA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTAgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxMCA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTEgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxMSA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTIgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxMiA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTMgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxMyA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTQgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxNCA9IHYgLSBjICogNjU1MzY7XG4gIHYgPSB0MTUgKyBjICsgNjU1MzU7IGMgPSBNYXRoLmZsb29yKHYgLyA2NTUzNik7IHQxNSA9IHYgLSBjICogNjU1MzY7XG4gIHQwICs9IGMtMSArIDM3ICogKGMtMSk7XG5cbiAgLy8gc2Vjb25kIGNhclxuICBjID0gMTtcbiAgdiA9ICB0MCArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQwID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0MSArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQxID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0MiArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQyID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0MyArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQzID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0NCArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ0ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0NSArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ1ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0NiArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ2ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0NyArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ3ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0OCArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ4ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9ICB0OSArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgIHQ5ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxMCArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDEwID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxMSArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDExID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxMiArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDEyID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxMyArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDEzID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxNCArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDE0ID0gdiAtIGMgKiA2NTUzNjtcbiAgdiA9IHQxNSArIGMgKyA2NTUzNTsgYyA9IE1hdGguZmxvb3IodiAvIDY1NTM2KTsgdDE1ID0gdiAtIGMgKiA2NTUzNjtcbiAgdDAgKz0gYy0xICsgMzcgKiAoYy0xKTtcblxuICBvWyAwXSA9IHQwO1xuICBvWyAxXSA9IHQxO1xuICBvWyAyXSA9IHQyO1xuICBvWyAzXSA9IHQzO1xuICBvWyA0XSA9IHQ0O1xuICBvWyA1XSA9IHQ1O1xuICBvWyA2XSA9IHQ2O1xuICBvWyA3XSA9IHQ3O1xuICBvWyA4XSA9IHQ4O1xuICBvWyA5XSA9IHQ5O1xuICBvWzEwXSA9IHQxMDtcbiAgb1sxMV0gPSB0MTE7XG4gIG9bMTJdID0gdDEyO1xuICBvWzEzXSA9IHQxMztcbiAgb1sxNF0gPSB0MTQ7XG4gIG9bMTVdID0gdDE1O1xufVxuXG5mdW5jdGlvbiBTKG8sIGEpIHtcbiAgTShvLCBhLCBhKTtcbn1cblxuZnVuY3Rpb24gaW52MjU1MTkobywgaSkge1xuICB2YXIgYyA9IGdmKCk7XG4gIHZhciBhO1xuICBmb3IgKGEgPSAwOyBhIDwgMTY7IGErKykgY1thXSA9IGlbYV07XG4gIGZvciAoYSA9IDI1MzsgYSA+PSAwOyBhLS0pIHtcbiAgICBTKGMsIGMpO1xuICAgIGlmKGEgIT09IDIgJiYgYSAhPT0gNCkgTShjLCBjLCBpKTtcbiAgfVxuICBmb3IgKGEgPSAwOyBhIDwgMTY7IGErKykgb1thXSA9IGNbYV07XG59XG5cbmZ1bmN0aW9uIHBvdzI1MjMobywgaSkge1xuICB2YXIgYyA9IGdmKCk7XG4gIHZhciBhO1xuICBmb3IgKGEgPSAwOyBhIDwgMTY7IGErKykgY1thXSA9IGlbYV07XG4gIGZvciAoYSA9IDI1MDsgYSA+PSAwOyBhLS0pIHtcbiAgICAgIFMoYywgYyk7XG4gICAgICBpZihhICE9PSAxKSBNKGMsIGMsIGkpO1xuICB9XG4gIGZvciAoYSA9IDA7IGEgPCAxNjsgYSsrKSBvW2FdID0gY1thXTtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX3NjYWxhcm11bHQocSwgbiwgcCkge1xuICB2YXIgeiA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgdmFyIHggPSBuZXcgRmxvYXQ2NEFycmF5KDgwKSwgciwgaTtcbiAgdmFyIGEgPSBnZigpLCBiID0gZ2YoKSwgYyA9IGdmKCksXG4gICAgICBkID0gZ2YoKSwgZSA9IGdmKCksIGYgPSBnZigpO1xuICBmb3IgKGkgPSAwOyBpIDwgMzE7IGkrKykgeltpXSA9IG5baV07XG4gIHpbMzFdPShuWzMxXSYxMjcpfDY0O1xuICB6WzBdJj0yNDg7XG4gIHVucGFjazI1NTE5KHgscCk7XG4gIGZvciAoaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgYltpXT14W2ldO1xuICAgIGRbaV09YVtpXT1jW2ldPTA7XG4gIH1cbiAgYVswXT1kWzBdPTE7XG4gIGZvciAoaT0yNTQ7IGk+PTA7IC0taSkge1xuICAgIHI9KHpbaT4+PjNdPj4+KGkmNykpJjE7XG4gICAgc2VsMjU1MTkoYSxiLHIpO1xuICAgIHNlbDI1NTE5KGMsZCxyKTtcbiAgICBBKGUsYSxjKTtcbiAgICBaKGEsYSxjKTtcbiAgICBBKGMsYixkKTtcbiAgICBaKGIsYixkKTtcbiAgICBTKGQsZSk7XG4gICAgUyhmLGEpO1xuICAgIE0oYSxjLGEpO1xuICAgIE0oYyxiLGUpO1xuICAgIEEoZSxhLGMpO1xuICAgIFooYSxhLGMpO1xuICAgIFMoYixhKTtcbiAgICBaKGMsZCxmKTtcbiAgICBNKGEsYyxfMTIxNjY1KTtcbiAgICBBKGEsYSxkKTtcbiAgICBNKGMsYyxhKTtcbiAgICBNKGEsZCxmKTtcbiAgICBNKGQsYix4KTtcbiAgICBTKGIsZSk7XG4gICAgc2VsMjU1MTkoYSxiLHIpO1xuICAgIHNlbDI1NTE5KGMsZCxyKTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgIHhbaSsxNl09YVtpXTtcbiAgICB4W2krMzJdPWNbaV07XG4gICAgeFtpKzQ4XT1iW2ldO1xuICAgIHhbaSs2NF09ZFtpXTtcbiAgfVxuICB2YXIgeDMyID0geC5zdWJhcnJheSgzMik7XG4gIHZhciB4MTYgPSB4LnN1YmFycmF5KDE2KTtcbiAgaW52MjU1MTkoeDMyLHgzMik7XG4gIE0oeDE2LHgxNix4MzIpO1xuICBwYWNrMjU1MTkocSx4MTYpO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX3NjYWxhcm11bHRfYmFzZShxLCBuKSB7XG4gIHJldHVybiBjcnlwdG9fc2NhbGFybXVsdChxLCBuLCBfOSk7XG59XG5cbmZ1bmN0aW9uIGNyeXB0b19ib3hfa2V5cGFpcih5LCB4KSB7XG4gIHJhbmRvbWJ5dGVzKHgsIDMyKTtcbiAgcmV0dXJuIGNyeXB0b19zY2FsYXJtdWx0X2Jhc2UoeSwgeCk7XG59XG5cbmZ1bmN0aW9uIGNyeXB0b19ib3hfYmVmb3Jlbm0oaywgeSwgeCkge1xuICB2YXIgcyA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgY3J5cHRvX3NjYWxhcm11bHQocywgeCwgeSk7XG4gIHJldHVybiBjcnlwdG9fY29yZV9oc2Fsc2EyMChrLCBfMCwgcywgc2lnbWEpO1xufVxuXG52YXIgY3J5cHRvX2JveF9hZnRlcm5tID0gY3J5cHRvX3NlY3JldGJveDtcbnZhciBjcnlwdG9fYm94X29wZW5fYWZ0ZXJubSA9IGNyeXB0b19zZWNyZXRib3hfb3BlbjtcblxuZnVuY3Rpb24gY3J5cHRvX2JveChjLCBtLCBkLCBuLCB5LCB4KSB7XG4gIHZhciBrID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICBjcnlwdG9fYm94X2JlZm9yZW5tKGssIHksIHgpO1xuICByZXR1cm4gY3J5cHRvX2JveF9hZnRlcm5tKGMsIG0sIGQsIG4sIGspO1xufVxuXG5mdW5jdGlvbiBjcnlwdG9fYm94X29wZW4obSwgYywgZCwgbiwgeSwgeCkge1xuICB2YXIgayA9IG5ldyBVaW50OEFycmF5KDMyKTtcbiAgY3J5cHRvX2JveF9iZWZvcmVubShrLCB5LCB4KTtcbiAgcmV0dXJuIGNyeXB0b19ib3hfb3Blbl9hZnRlcm5tKG0sIGMsIGQsIG4sIGspO1xufVxuXG52YXIgSyA9IFtcbiAgMHg0MjhhMmY5OCwgMHhkNzI4YWUyMiwgMHg3MTM3NDQ5MSwgMHgyM2VmNjVjZCxcbiAgMHhiNWMwZmJjZiwgMHhlYzRkM2IyZiwgMHhlOWI1ZGJhNSwgMHg4MTg5ZGJiYyxcbiAgMHgzOTU2YzI1YiwgMHhmMzQ4YjUzOCwgMHg1OWYxMTFmMSwgMHhiNjA1ZDAxOSxcbiAgMHg5MjNmODJhNCwgMHhhZjE5NGY5YiwgMHhhYjFjNWVkNSwgMHhkYTZkODExOCxcbiAgMHhkODA3YWE5OCwgMHhhMzAzMDI0MiwgMHgxMjgzNWIwMSwgMHg0NTcwNmZiZSxcbiAgMHgyNDMxODViZSwgMHg0ZWU0YjI4YywgMHg1NTBjN2RjMywgMHhkNWZmYjRlMixcbiAgMHg3MmJlNWQ3NCwgMHhmMjdiODk2ZiwgMHg4MGRlYjFmZSwgMHgzYjE2OTZiMSxcbiAgMHg5YmRjMDZhNywgMHgyNWM3MTIzNSwgMHhjMTliZjE3NCwgMHhjZjY5MjY5NCxcbiAgMHhlNDliNjljMSwgMHg5ZWYxNGFkMiwgMHhlZmJlNDc4NiwgMHgzODRmMjVlMyxcbiAgMHgwZmMxOWRjNiwgMHg4YjhjZDViNSwgMHgyNDBjYTFjYywgMHg3N2FjOWM2NSxcbiAgMHgyZGU5MmM2ZiwgMHg1OTJiMDI3NSwgMHg0YTc0ODRhYSwgMHg2ZWE2ZTQ4MyxcbiAgMHg1Y2IwYTlkYywgMHhiZDQxZmJkNCwgMHg3NmY5ODhkYSwgMHg4MzExNTNiNSxcbiAgMHg5ODNlNTE1MiwgMHhlZTY2ZGZhYiwgMHhhODMxYzY2ZCwgMHgyZGI0MzIxMCxcbiAgMHhiMDAzMjdjOCwgMHg5OGZiMjEzZiwgMHhiZjU5N2ZjNywgMHhiZWVmMGVlNCxcbiAgMHhjNmUwMGJmMywgMHgzZGE4OGZjMiwgMHhkNWE3OTE0NywgMHg5MzBhYTcyNSxcbiAgMHgwNmNhNjM1MSwgMHhlMDAzODI2ZiwgMHgxNDI5Mjk2NywgMHgwYTBlNmU3MCxcbiAgMHgyN2I3MGE4NSwgMHg0NmQyMmZmYywgMHgyZTFiMjEzOCwgMHg1YzI2YzkyNixcbiAgMHg0ZDJjNmRmYywgMHg1YWM0MmFlZCwgMHg1MzM4MGQxMywgMHg5ZDk1YjNkZixcbiAgMHg2NTBhNzM1NCwgMHg4YmFmNjNkZSwgMHg3NjZhMGFiYiwgMHgzYzc3YjJhOCxcbiAgMHg4MWMyYzkyZSwgMHg0N2VkYWVlNiwgMHg5MjcyMmM4NSwgMHgxNDgyMzUzYixcbiAgMHhhMmJmZThhMSwgMHg0Y2YxMDM2NCwgMHhhODFhNjY0YiwgMHhiYzQyMzAwMSxcbiAgMHhjMjRiOGI3MCwgMHhkMGY4OTc5MSwgMHhjNzZjNTFhMywgMHgwNjU0YmUzMCxcbiAgMHhkMTkyZTgxOSwgMHhkNmVmNTIxOCwgMHhkNjk5MDYyNCwgMHg1NTY1YTkxMCxcbiAgMHhmNDBlMzU4NSwgMHg1NzcxMjAyYSwgMHgxMDZhYTA3MCwgMHgzMmJiZDFiOCxcbiAgMHgxOWE0YzExNiwgMHhiOGQyZDBjOCwgMHgxZTM3NmMwOCwgMHg1MTQxYWI1MyxcbiAgMHgyNzQ4Nzc0YywgMHhkZjhlZWI5OSwgMHgzNGIwYmNiNSwgMHhlMTliNDhhOCxcbiAgMHgzOTFjMGNiMywgMHhjNWM5NWE2MywgMHg0ZWQ4YWE0YSwgMHhlMzQxOGFjYixcbiAgMHg1YjljY2E0ZiwgMHg3NzYzZTM3MywgMHg2ODJlNmZmMywgMHhkNmIyYjhhMyxcbiAgMHg3NDhmODJlZSwgMHg1ZGVmYjJmYywgMHg3OGE1NjM2ZiwgMHg0MzE3MmY2MCxcbiAgMHg4NGM4NzgxNCwgMHhhMWYwYWI3MiwgMHg4Y2M3MDIwOCwgMHgxYTY0MzllYyxcbiAgMHg5MGJlZmZmYSwgMHgyMzYzMWUyOCwgMHhhNDUwNmNlYiwgMHhkZTgyYmRlOSxcbiAgMHhiZWY5YTNmNywgMHhiMmM2NzkxNSwgMHhjNjcxNzhmMiwgMHhlMzcyNTMyYixcbiAgMHhjYTI3M2VjZSwgMHhlYTI2NjE5YywgMHhkMTg2YjhjNywgMHgyMWMwYzIwNyxcbiAgMHhlYWRhN2RkNiwgMHhjZGUwZWIxZSwgMHhmNTdkNGY3ZiwgMHhlZTZlZDE3OCxcbiAgMHgwNmYwNjdhYSwgMHg3MjE3NmZiYSwgMHgwYTYzN2RjNSwgMHhhMmM4OThhNixcbiAgMHgxMTNmOTgwNCwgMHhiZWY5MGRhZSwgMHgxYjcxMGIzNSwgMHgxMzFjNDcxYixcbiAgMHgyOGRiNzdmNSwgMHgyMzA0N2Q4NCwgMHgzMmNhYWI3YiwgMHg0MGM3MjQ5MyxcbiAgMHgzYzllYmUwYSwgMHgxNWM5YmViYywgMHg0MzFkNjdjNCwgMHg5YzEwMGQ0YyxcbiAgMHg0Y2M1ZDRiZSwgMHhjYjNlNDJiNiwgMHg1OTdmMjk5YywgMHhmYzY1N2UyYSxcbiAgMHg1ZmNiNmZhYiwgMHgzYWQ2ZmFlYywgMHg2YzQ0MTk4YywgMHg0YTQ3NTgxN1xuXTtcblxuZnVuY3Rpb24gY3J5cHRvX2hhc2hibG9ja3NfaGwoaGgsIGhsLCBtLCBuKSB7XG4gIHZhciB3aCA9IG5ldyBJbnQzMkFycmF5KDE2KSwgd2wgPSBuZXcgSW50MzJBcnJheSgxNiksXG4gICAgICBiaDAsIGJoMSwgYmgyLCBiaDMsIGJoNCwgYmg1LCBiaDYsIGJoNyxcbiAgICAgIGJsMCwgYmwxLCBibDIsIGJsMywgYmw0LCBibDUsIGJsNiwgYmw3LFxuICAgICAgdGgsIHRsLCBpLCBqLCBoLCBsLCBhLCBiLCBjLCBkO1xuXG4gIHZhciBhaDAgPSBoaFswXSxcbiAgICAgIGFoMSA9IGhoWzFdLFxuICAgICAgYWgyID0gaGhbMl0sXG4gICAgICBhaDMgPSBoaFszXSxcbiAgICAgIGFoNCA9IGhoWzRdLFxuICAgICAgYWg1ID0gaGhbNV0sXG4gICAgICBhaDYgPSBoaFs2XSxcbiAgICAgIGFoNyA9IGhoWzddLFxuXG4gICAgICBhbDAgPSBobFswXSxcbiAgICAgIGFsMSA9IGhsWzFdLFxuICAgICAgYWwyID0gaGxbMl0sXG4gICAgICBhbDMgPSBobFszXSxcbiAgICAgIGFsNCA9IGhsWzRdLFxuICAgICAgYWw1ID0gaGxbNV0sXG4gICAgICBhbDYgPSBobFs2XSxcbiAgICAgIGFsNyA9IGhsWzddO1xuXG4gIHZhciBwb3MgPSAwO1xuICB3aGlsZSAobiA+PSAxMjgpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgaiA9IDggKiBpICsgcG9zO1xuICAgICAgd2hbaV0gPSAobVtqKzBdIDw8IDI0KSB8IChtW2orMV0gPDwgMTYpIHwgKG1baisyXSA8PCA4KSB8IG1baiszXTtcbiAgICAgIHdsW2ldID0gKG1bais0XSA8PCAyNCkgfCAobVtqKzVdIDw8IDE2KSB8IChtW2orNl0gPDwgOCkgfCBtW2orN107XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBiaDAgPSBhaDA7XG4gICAgICBiaDEgPSBhaDE7XG4gICAgICBiaDIgPSBhaDI7XG4gICAgICBiaDMgPSBhaDM7XG4gICAgICBiaDQgPSBhaDQ7XG4gICAgICBiaDUgPSBhaDU7XG4gICAgICBiaDYgPSBhaDY7XG4gICAgICBiaDcgPSBhaDc7XG5cbiAgICAgIGJsMCA9IGFsMDtcbiAgICAgIGJsMSA9IGFsMTtcbiAgICAgIGJsMiA9IGFsMjtcbiAgICAgIGJsMyA9IGFsMztcbiAgICAgIGJsNCA9IGFsNDtcbiAgICAgIGJsNSA9IGFsNTtcbiAgICAgIGJsNiA9IGFsNjtcbiAgICAgIGJsNyA9IGFsNztcblxuICAgICAgLy8gYWRkXG4gICAgICBoID0gYWg3O1xuICAgICAgbCA9IGFsNztcblxuICAgICAgYSA9IGwgJiAweGZmZmY7IGIgPSBsID4+PiAxNjtcbiAgICAgIGMgPSBoICYgMHhmZmZmOyBkID0gaCA+Pj4gMTY7XG5cbiAgICAgIC8vIFNpZ21hMVxuICAgICAgaCA9ICgoYWg0ID4+PiAxNCkgfCAoYWw0IDw8ICgzMi0xNCkpKSBeICgoYWg0ID4+PiAxOCkgfCAoYWw0IDw8ICgzMi0xOCkpKSBeICgoYWw0ID4+PiAoNDEtMzIpKSB8IChhaDQgPDwgKDMyLSg0MS0zMikpKSk7XG4gICAgICBsID0gKChhbDQgPj4+IDE0KSB8IChhaDQgPDwgKDMyLTE0KSkpIF4gKChhbDQgPj4+IDE4KSB8IChhaDQgPDwgKDMyLTE4KSkpIF4gKChhaDQgPj4+ICg0MS0zMikpIHwgKGFsNCA8PCAoMzItKDQxLTMyKSkpKTtcblxuICAgICAgYSArPSBsICYgMHhmZmZmOyBiICs9IGwgPj4+IDE2O1xuICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICAvLyBDaFxuICAgICAgaCA9IChhaDQgJiBhaDUpIF4gKH5haDQgJiBhaDYpO1xuICAgICAgbCA9IChhbDQgJiBhbDUpIF4gKH5hbDQgJiBhbDYpO1xuXG4gICAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgICBjICs9IGggJiAweGZmZmY7IGQgKz0gaCA+Pj4gMTY7XG5cbiAgICAgIC8vIEtcbiAgICAgIGggPSBLW2kqMl07XG4gICAgICBsID0gS1tpKjIrMV07XG5cbiAgICAgIGEgKz0gbCAmIDB4ZmZmZjsgYiArPSBsID4+PiAxNjtcbiAgICAgIGMgKz0gaCAmIDB4ZmZmZjsgZCArPSBoID4+PiAxNjtcblxuICAgICAgLy8gd1xuICAgICAgaCA9IHdoW2klMTZdO1xuICAgICAgbCA9IHdsW2klMTZdO1xuXG4gICAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgICBjICs9IGggJiAweGZmZmY7IGQgKz0gaCA+Pj4gMTY7XG5cbiAgICAgIGIgKz0gYSA+Pj4gMTY7XG4gICAgICBjICs9IGIgPj4+IDE2O1xuICAgICAgZCArPSBjID4+PiAxNjtcblxuICAgICAgdGggPSBjICYgMHhmZmZmIHwgZCA8PCAxNjtcbiAgICAgIHRsID0gYSAmIDB4ZmZmZiB8IGIgPDwgMTY7XG5cbiAgICAgIC8vIGFkZFxuICAgICAgaCA9IHRoO1xuICAgICAgbCA9IHRsO1xuXG4gICAgICBhID0gbCAmIDB4ZmZmZjsgYiA9IGwgPj4+IDE2O1xuICAgICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgICAgLy8gU2lnbWEwXG4gICAgICBoID0gKChhaDAgPj4+IDI4KSB8IChhbDAgPDwgKDMyLTI4KSkpIF4gKChhbDAgPj4+ICgzNC0zMikpIHwgKGFoMCA8PCAoMzItKDM0LTMyKSkpKSBeICgoYWwwID4+PiAoMzktMzIpKSB8IChhaDAgPDwgKDMyLSgzOS0zMikpKSk7XG4gICAgICBsID0gKChhbDAgPj4+IDI4KSB8IChhaDAgPDwgKDMyLTI4KSkpIF4gKChhaDAgPj4+ICgzNC0zMikpIHwgKGFsMCA8PCAoMzItKDM0LTMyKSkpKSBeICgoYWgwID4+PiAoMzktMzIpKSB8IChhbDAgPDwgKDMyLSgzOS0zMikpKSk7XG5cbiAgICAgIGEgKz0gbCAmIDB4ZmZmZjsgYiArPSBsID4+PiAxNjtcbiAgICAgIGMgKz0gaCAmIDB4ZmZmZjsgZCArPSBoID4+PiAxNjtcblxuICAgICAgLy8gTWFqXG4gICAgICBoID0gKGFoMCAmIGFoMSkgXiAoYWgwICYgYWgyKSBeIChhaDEgJiBhaDIpO1xuICAgICAgbCA9IChhbDAgJiBhbDEpIF4gKGFsMCAmIGFsMikgXiAoYWwxICYgYWwyKTtcblxuICAgICAgYSArPSBsICYgMHhmZmZmOyBiICs9IGwgPj4+IDE2O1xuICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICBiICs9IGEgPj4+IDE2O1xuICAgICAgYyArPSBiID4+PiAxNjtcbiAgICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICAgIGJoNyA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICAgIGJsNyA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgICAgLy8gYWRkXG4gICAgICBoID0gYmgzO1xuICAgICAgbCA9IGJsMztcblxuICAgICAgYSA9IGwgJiAweGZmZmY7IGIgPSBsID4+PiAxNjtcbiAgICAgIGMgPSBoICYgMHhmZmZmOyBkID0gaCA+Pj4gMTY7XG5cbiAgICAgIGggPSB0aDtcbiAgICAgIGwgPSB0bDtcblxuICAgICAgYSArPSBsICYgMHhmZmZmOyBiICs9IGwgPj4+IDE2O1xuICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICBiICs9IGEgPj4+IDE2O1xuICAgICAgYyArPSBiID4+PiAxNjtcbiAgICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICAgIGJoMyA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICAgIGJsMyA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgICAgYWgxID0gYmgwO1xuICAgICAgYWgyID0gYmgxO1xuICAgICAgYWgzID0gYmgyO1xuICAgICAgYWg0ID0gYmgzO1xuICAgICAgYWg1ID0gYmg0O1xuICAgICAgYWg2ID0gYmg1O1xuICAgICAgYWg3ID0gYmg2O1xuICAgICAgYWgwID0gYmg3O1xuXG4gICAgICBhbDEgPSBibDA7XG4gICAgICBhbDIgPSBibDE7XG4gICAgICBhbDMgPSBibDI7XG4gICAgICBhbDQgPSBibDM7XG4gICAgICBhbDUgPSBibDQ7XG4gICAgICBhbDYgPSBibDU7XG4gICAgICBhbDcgPSBibDY7XG4gICAgICBhbDAgPSBibDc7XG5cbiAgICAgIGlmIChpJTE2ID09PSAxNSkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgMTY7IGorKykge1xuICAgICAgICAgIC8vIGFkZFxuICAgICAgICAgIGggPSB3aFtqXTtcbiAgICAgICAgICBsID0gd2xbal07XG5cbiAgICAgICAgICBhID0gbCAmIDB4ZmZmZjsgYiA9IGwgPj4+IDE2O1xuICAgICAgICAgIGMgPSBoICYgMHhmZmZmOyBkID0gaCA+Pj4gMTY7XG5cbiAgICAgICAgICBoID0gd2hbKGorOSklMTZdO1xuICAgICAgICAgIGwgPSB3bFsoais5KSUxNl07XG5cbiAgICAgICAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICAgICAgLy8gc2lnbWEwXG4gICAgICAgICAgdGggPSB3aFsoaisxKSUxNl07XG4gICAgICAgICAgdGwgPSB3bFsoaisxKSUxNl07XG4gICAgICAgICAgaCA9ICgodGggPj4+IDEpIHwgKHRsIDw8ICgzMi0xKSkpIF4gKCh0aCA+Pj4gOCkgfCAodGwgPDwgKDMyLTgpKSkgXiAodGggPj4+IDcpO1xuICAgICAgICAgIGwgPSAoKHRsID4+PiAxKSB8ICh0aCA8PCAoMzItMSkpKSBeICgodGwgPj4+IDgpIHwgKHRoIDw8ICgzMi04KSkpIF4gKCh0bCA+Pj4gNykgfCAodGggPDwgKDMyLTcpKSk7XG5cbiAgICAgICAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICAgICAgLy8gc2lnbWExXG4gICAgICAgICAgdGggPSB3aFsoaisxNCklMTZdO1xuICAgICAgICAgIHRsID0gd2xbKGorMTQpJTE2XTtcbiAgICAgICAgICBoID0gKCh0aCA+Pj4gMTkpIHwgKHRsIDw8ICgzMi0xOSkpKSBeICgodGwgPj4+ICg2MS0zMikpIHwgKHRoIDw8ICgzMi0oNjEtMzIpKSkpIF4gKHRoID4+PiA2KTtcbiAgICAgICAgICBsID0gKCh0bCA+Pj4gMTkpIHwgKHRoIDw8ICgzMi0xOSkpKSBeICgodGggPj4+ICg2MS0zMikpIHwgKHRsIDw8ICgzMi0oNjEtMzIpKSkpIF4gKCh0bCA+Pj4gNikgfCAodGggPDwgKDMyLTYpKSk7XG5cbiAgICAgICAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgICAgICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgICAgICAgYiArPSBhID4+PiAxNjtcbiAgICAgICAgICBjICs9IGIgPj4+IDE2O1xuICAgICAgICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICAgICAgICB3aFtqXSA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICAgICAgICB3bFtqXSA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZFxuICAgIGggPSBhaDA7XG4gICAgbCA9IGFsMDtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFswXTtcbiAgICBsID0gaGxbMF07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFswXSA9IGFoMCA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFswXSA9IGFsMCA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDE7XG4gICAgbCA9IGFsMTtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFsxXTtcbiAgICBsID0gaGxbMV07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFsxXSA9IGFoMSA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFsxXSA9IGFsMSA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDI7XG4gICAgbCA9IGFsMjtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFsyXTtcbiAgICBsID0gaGxbMl07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFsyXSA9IGFoMiA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFsyXSA9IGFsMiA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDM7XG4gICAgbCA9IGFsMztcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFszXTtcbiAgICBsID0gaGxbM107XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFszXSA9IGFoMyA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFszXSA9IGFsMyA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDQ7XG4gICAgbCA9IGFsNDtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFs0XTtcbiAgICBsID0gaGxbNF07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFs0XSA9IGFoNCA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFs0XSA9IGFsNCA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDU7XG4gICAgbCA9IGFsNTtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFs1XTtcbiAgICBsID0gaGxbNV07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFs1XSA9IGFoNSA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFs1XSA9IGFsNSA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDY7XG4gICAgbCA9IGFsNjtcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFs2XTtcbiAgICBsID0gaGxbNl07XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFs2XSA9IGFoNiA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFs2XSA9IGFsNiA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIGggPSBhaDc7XG4gICAgbCA9IGFsNztcblxuICAgIGEgPSBsICYgMHhmZmZmOyBiID0gbCA+Pj4gMTY7XG4gICAgYyA9IGggJiAweGZmZmY7IGQgPSBoID4+PiAxNjtcblxuICAgIGggPSBoaFs3XTtcbiAgICBsID0gaGxbN107XG5cbiAgICBhICs9IGwgJiAweGZmZmY7IGIgKz0gbCA+Pj4gMTY7XG4gICAgYyArPSBoICYgMHhmZmZmOyBkICs9IGggPj4+IDE2O1xuXG4gICAgYiArPSBhID4+PiAxNjtcbiAgICBjICs9IGIgPj4+IDE2O1xuICAgIGQgKz0gYyA+Pj4gMTY7XG5cbiAgICBoaFs3XSA9IGFoNyA9IChjICYgMHhmZmZmKSB8IChkIDw8IDE2KTtcbiAgICBobFs3XSA9IGFsNyA9IChhICYgMHhmZmZmKSB8IChiIDw8IDE2KTtcblxuICAgIHBvcyArPSAxMjg7XG4gICAgbiAtPSAxMjg7XG4gIH1cblxuICByZXR1cm4gbjtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX2hhc2gob3V0LCBtLCBuKSB7XG4gIHZhciBoaCA9IG5ldyBJbnQzMkFycmF5KDgpLFxuICAgICAgaGwgPSBuZXcgSW50MzJBcnJheSg4KSxcbiAgICAgIHggPSBuZXcgVWludDhBcnJheSgyNTYpLFxuICAgICAgaSwgYiA9IG47XG5cbiAgaGhbMF0gPSAweDZhMDllNjY3O1xuICBoaFsxXSA9IDB4YmI2N2FlODU7XG4gIGhoWzJdID0gMHgzYzZlZjM3MjtcbiAgaGhbM10gPSAweGE1NGZmNTNhO1xuICBoaFs0XSA9IDB4NTEwZTUyN2Y7XG4gIGhoWzVdID0gMHg5YjA1Njg4YztcbiAgaGhbNl0gPSAweDFmODNkOWFiO1xuICBoaFs3XSA9IDB4NWJlMGNkMTk7XG5cbiAgaGxbMF0gPSAweGYzYmNjOTA4O1xuICBobFsxXSA9IDB4ODRjYWE3M2I7XG4gIGhsWzJdID0gMHhmZTk0ZjgyYjtcbiAgaGxbM10gPSAweDVmMWQzNmYxO1xuICBobFs0XSA9IDB4YWRlNjgyZDE7XG4gIGhsWzVdID0gMHgyYjNlNmMxZjtcbiAgaGxbNl0gPSAweGZiNDFiZDZiO1xuICBobFs3XSA9IDB4MTM3ZTIxNzk7XG5cbiAgY3J5cHRvX2hhc2hibG9ja3NfaGwoaGgsIGhsLCBtLCBuKTtcbiAgbiAlPSAxMjg7XG5cbiAgZm9yIChpID0gMDsgaSA8IG47IGkrKykgeFtpXSA9IG1bYi1uK2ldO1xuICB4W25dID0gMTI4O1xuXG4gIG4gPSAyNTYtMTI4KihuPDExMj8xOjApO1xuICB4W24tOV0gPSAwO1xuICB0czY0KHgsIG4tOCwgIChiIC8gMHgyMDAwMDAwMCkgfCAwLCBiIDw8IDMpO1xuICBjcnlwdG9faGFzaGJsb2Nrc19obChoaCwgaGwsIHgsIG4pO1xuXG4gIGZvciAoaSA9IDA7IGkgPCA4OyBpKyspIHRzNjQob3V0LCA4KmksIGhoW2ldLCBobFtpXSk7XG5cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGFkZChwLCBxKSB7XG4gIHZhciBhID0gZ2YoKSwgYiA9IGdmKCksIGMgPSBnZigpLFxuICAgICAgZCA9IGdmKCksIGUgPSBnZigpLCBmID0gZ2YoKSxcbiAgICAgIGcgPSBnZigpLCBoID0gZ2YoKSwgdCA9IGdmKCk7XG5cbiAgWihhLCBwWzFdLCBwWzBdKTtcbiAgWih0LCBxWzFdLCBxWzBdKTtcbiAgTShhLCBhLCB0KTtcbiAgQShiLCBwWzBdLCBwWzFdKTtcbiAgQSh0LCBxWzBdLCBxWzFdKTtcbiAgTShiLCBiLCB0KTtcbiAgTShjLCBwWzNdLCBxWzNdKTtcbiAgTShjLCBjLCBEMik7XG4gIE0oZCwgcFsyXSwgcVsyXSk7XG4gIEEoZCwgZCwgZCk7XG4gIFooZSwgYiwgYSk7XG4gIFooZiwgZCwgYyk7XG4gIEEoZywgZCwgYyk7XG4gIEEoaCwgYiwgYSk7XG5cbiAgTShwWzBdLCBlLCBmKTtcbiAgTShwWzFdLCBoLCBnKTtcbiAgTShwWzJdLCBnLCBmKTtcbiAgTShwWzNdLCBlLCBoKTtcbn1cblxuZnVuY3Rpb24gY3N3YXAocCwgcSwgYikge1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIHNlbDI1NTE5KHBbaV0sIHFbaV0sIGIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhY2sociwgcCkge1xuICB2YXIgdHggPSBnZigpLCB0eSA9IGdmKCksIHppID0gZ2YoKTtcbiAgaW52MjU1MTkoemksIHBbMl0pO1xuICBNKHR4LCBwWzBdLCB6aSk7XG4gIE0odHksIHBbMV0sIHppKTtcbiAgcGFjazI1NTE5KHIsIHR5KTtcbiAgclszMV0gXj0gcGFyMjU1MTkodHgpIDw8IDc7XG59XG5cbmZ1bmN0aW9uIHNjYWxhcm11bHQocCwgcSwgcykge1xuICB2YXIgYiwgaTtcbiAgc2V0MjU1MTkocFswXSwgZ2YwKTtcbiAgc2V0MjU1MTkocFsxXSwgZ2YxKTtcbiAgc2V0MjU1MTkocFsyXSwgZ2YxKTtcbiAgc2V0MjU1MTkocFszXSwgZ2YwKTtcbiAgZm9yIChpID0gMjU1OyBpID49IDA7IC0taSkge1xuICAgIGIgPSAoc1soaS84KXwwXSA+PiAoaSY3KSkgJiAxO1xuICAgIGNzd2FwKHAsIHEsIGIpO1xuICAgIGFkZChxLCBwKTtcbiAgICBhZGQocCwgcCk7XG4gICAgY3N3YXAocCwgcSwgYik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2NhbGFyYmFzZShwLCBzKSB7XG4gIHZhciBxID0gW2dmKCksIGdmKCksIGdmKCksIGdmKCldO1xuICBzZXQyNTUxOShxWzBdLCBYKTtcbiAgc2V0MjU1MTkocVsxXSwgWSk7XG4gIHNldDI1NTE5KHFbMl0sIGdmMSk7XG4gIE0ocVszXSwgWCwgWSk7XG4gIHNjYWxhcm11bHQocCwgcSwgcyk7XG59XG5cbmZ1bmN0aW9uIGNyeXB0b19zaWduX2tleXBhaXIocGssIHNrLCBzZWVkZWQpIHtcbiAgdmFyIGQgPSBuZXcgVWludDhBcnJheSg2NCk7XG4gIHZhciBwID0gW2dmKCksIGdmKCksIGdmKCksIGdmKCldO1xuICB2YXIgaTtcblxuICBpZiAoIXNlZWRlZCkgcmFuZG9tYnl0ZXMoc2ssIDMyKTtcbiAgY3J5cHRvX2hhc2goZCwgc2ssIDMyKTtcbiAgZFswXSAmPSAyNDg7XG4gIGRbMzFdICY9IDEyNztcbiAgZFszMV0gfD0gNjQ7XG5cbiAgc2NhbGFyYmFzZShwLCBkKTtcbiAgcGFjayhwaywgcCk7XG5cbiAgZm9yIChpID0gMDsgaSA8IDMyOyBpKyspIHNrW2krMzJdID0gcGtbaV07XG4gIHJldHVybiAwO1xufVxuXG52YXIgTCA9IG5ldyBGbG9hdDY0QXJyYXkoWzB4ZWQsIDB4ZDMsIDB4ZjUsIDB4NWMsIDB4MWEsIDB4NjMsIDB4MTIsIDB4NTgsIDB4ZDYsIDB4OWMsIDB4ZjcsIDB4YTIsIDB4ZGUsIDB4ZjksIDB4ZGUsIDB4MTQsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDB4MTBdKTtcblxuZnVuY3Rpb24gbW9kTChyLCB4KSB7XG4gIHZhciBjYXJyeSwgaSwgaiwgaztcbiAgZm9yIChpID0gNjM7IGkgPj0gMzI7IC0taSkge1xuICAgIGNhcnJ5ID0gMDtcbiAgICBmb3IgKGogPSBpIC0gMzIsIGsgPSBpIC0gMTI7IGogPCBrOyArK2opIHtcbiAgICAgIHhbal0gKz0gY2FycnkgLSAxNiAqIHhbaV0gKiBMW2ogLSAoaSAtIDMyKV07XG4gICAgICBjYXJyeSA9IE1hdGguZmxvb3IoKHhbal0gKyAxMjgpIC8gMjU2KTtcbiAgICAgIHhbal0gLT0gY2FycnkgKiAyNTY7XG4gICAgfVxuICAgIHhbal0gKz0gY2Fycnk7XG4gICAgeFtpXSA9IDA7XG4gIH1cbiAgY2FycnkgPSAwO1xuICBmb3IgKGogPSAwOyBqIDwgMzI7IGorKykge1xuICAgIHhbal0gKz0gY2FycnkgLSAoeFszMV0gPj4gNCkgKiBMW2pdO1xuICAgIGNhcnJ5ID0geFtqXSA+PiA4O1xuICAgIHhbal0gJj0gMjU1O1xuICB9XG4gIGZvciAoaiA9IDA7IGogPCAzMjsgaisrKSB4W2pdIC09IGNhcnJ5ICogTFtqXTtcbiAgZm9yIChpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICB4W2krMV0gKz0geFtpXSA+PiA4O1xuICAgIHJbaV0gPSB4W2ldICYgMjU1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShyKSB7XG4gIHZhciB4ID0gbmV3IEZsb2F0NjRBcnJheSg2NCksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCA2NDsgaSsrKSB4W2ldID0gcltpXTtcbiAgZm9yIChpID0gMDsgaSA8IDY0OyBpKyspIHJbaV0gPSAwO1xuICBtb2RMKHIsIHgpO1xufVxuXG4vLyBOb3RlOiBkaWZmZXJlbmNlIGZyb20gQyAtIHNtbGVuIHJldHVybmVkLCBub3QgcGFzc2VkIGFzIGFyZ3VtZW50LlxuZnVuY3Rpb24gY3J5cHRvX3NpZ24oc20sIG0sIG4sIHNrKSB7XG4gIHZhciBkID0gbmV3IFVpbnQ4QXJyYXkoNjQpLCBoID0gbmV3IFVpbnQ4QXJyYXkoNjQpLCByID0gbmV3IFVpbnQ4QXJyYXkoNjQpO1xuICB2YXIgaSwgaiwgeCA9IG5ldyBGbG9hdDY0QXJyYXkoNjQpO1xuICB2YXIgcCA9IFtnZigpLCBnZigpLCBnZigpLCBnZigpXTtcblxuICBjcnlwdG9faGFzaChkLCBzaywgMzIpO1xuICBkWzBdICY9IDI0ODtcbiAgZFszMV0gJj0gMTI3O1xuICBkWzMxXSB8PSA2NDtcblxuICB2YXIgc21sZW4gPSBuICsgNjQ7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHNtWzY0ICsgaV0gPSBtW2ldO1xuICBmb3IgKGkgPSAwOyBpIDwgMzI7IGkrKykgc21bMzIgKyBpXSA9IGRbMzIgKyBpXTtcblxuICBjcnlwdG9faGFzaChyLCBzbS5zdWJhcnJheSgzMiksIG4rMzIpO1xuICByZWR1Y2Uocik7XG4gIHNjYWxhcmJhc2UocCwgcik7XG4gIHBhY2soc20sIHApO1xuXG4gIGZvciAoaSA9IDMyOyBpIDwgNjQ7IGkrKykgc21baV0gPSBza1tpXTtcbiAgY3J5cHRvX2hhc2goaCwgc20sIG4gKyA2NCk7XG4gIHJlZHVjZShoKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgNjQ7IGkrKykgeFtpXSA9IDA7XG4gIGZvciAoaSA9IDA7IGkgPCAzMjsgaSsrKSB4W2ldID0gcltpXTtcbiAgZm9yIChpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICBmb3IgKGogPSAwOyBqIDwgMzI7IGorKykge1xuICAgICAgeFtpK2pdICs9IGhbaV0gKiBkW2pdO1xuICAgIH1cbiAgfVxuXG4gIG1vZEwoc20uc3ViYXJyYXkoMzIpLCB4KTtcbiAgcmV0dXJuIHNtbGVuO1xufVxuXG5mdW5jdGlvbiB1bnBhY2tuZWcociwgcCkge1xuICB2YXIgdCA9IGdmKCksIGNoayA9IGdmKCksIG51bSA9IGdmKCksXG4gICAgICBkZW4gPSBnZigpLCBkZW4yID0gZ2YoKSwgZGVuNCA9IGdmKCksXG4gICAgICBkZW42ID0gZ2YoKTtcblxuICBzZXQyNTUxOShyWzJdLCBnZjEpO1xuICB1bnBhY2syNTUxOShyWzFdLCBwKTtcbiAgUyhudW0sIHJbMV0pO1xuICBNKGRlbiwgbnVtLCBEKTtcbiAgWihudW0sIG51bSwgclsyXSk7XG4gIEEoZGVuLCByWzJdLCBkZW4pO1xuXG4gIFMoZGVuMiwgZGVuKTtcbiAgUyhkZW40LCBkZW4yKTtcbiAgTShkZW42LCBkZW40LCBkZW4yKTtcbiAgTSh0LCBkZW42LCBudW0pO1xuICBNKHQsIHQsIGRlbik7XG5cbiAgcG93MjUyMyh0LCB0KTtcbiAgTSh0LCB0LCBudW0pO1xuICBNKHQsIHQsIGRlbik7XG4gIE0odCwgdCwgZGVuKTtcbiAgTShyWzBdLCB0LCBkZW4pO1xuXG4gIFMoY2hrLCByWzBdKTtcbiAgTShjaGssIGNoaywgZGVuKTtcbiAgaWYgKG5lcTI1NTE5KGNoaywgbnVtKSkgTShyWzBdLCByWzBdLCBJKTtcblxuICBTKGNoaywgclswXSk7XG4gIE0oY2hrLCBjaGssIGRlbik7XG4gIGlmIChuZXEyNTUxOShjaGssIG51bSkpIHJldHVybiAtMTtcblxuICBpZiAocGFyMjU1MTkoclswXSkgPT09IChwWzMxXT4+NykpIFooclswXSwgZ2YwLCByWzBdKTtcblxuICBNKHJbM10sIHJbMF0sIHJbMV0pO1xuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gY3J5cHRvX3NpZ25fb3BlbihtLCBzbSwgbiwgcGspIHtcbiAgdmFyIGk7XG4gIHZhciB0ID0gbmV3IFVpbnQ4QXJyYXkoMzIpLCBoID0gbmV3IFVpbnQ4QXJyYXkoNjQpO1xuICB2YXIgcCA9IFtnZigpLCBnZigpLCBnZigpLCBnZigpXSxcbiAgICAgIHEgPSBbZ2YoKSwgZ2YoKSwgZ2YoKSwgZ2YoKV07XG5cbiAgaWYgKG4gPCA2NCkgcmV0dXJuIC0xO1xuXG4gIGlmICh1bnBhY2tuZWcocSwgcGspKSByZXR1cm4gLTE7XG5cbiAgZm9yIChpID0gMDsgaSA8IG47IGkrKykgbVtpXSA9IHNtW2ldO1xuICBmb3IgKGkgPSAwOyBpIDwgMzI7IGkrKykgbVtpKzMyXSA9IHBrW2ldO1xuICBjcnlwdG9faGFzaChoLCBtLCBuKTtcbiAgcmVkdWNlKGgpO1xuICBzY2FsYXJtdWx0KHAsIHEsIGgpO1xuXG4gIHNjYWxhcmJhc2UocSwgc20uc3ViYXJyYXkoMzIpKTtcbiAgYWRkKHAsIHEpO1xuICBwYWNrKHQsIHApO1xuXG4gIG4gLT0gNjQ7XG4gIGlmIChjcnlwdG9fdmVyaWZ5XzMyKHNtLCAwLCB0LCAwKSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIG1baV0gPSAwO1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIG1baV0gPSBzbVtpICsgNjRdO1xuICByZXR1cm4gbjtcbn1cblxudmFyIGNyeXB0b19zZWNyZXRib3hfS0VZQllURVMgPSAzMixcbiAgICBjcnlwdG9fc2VjcmV0Ym94X05PTkNFQllURVMgPSAyNCxcbiAgICBjcnlwdG9fc2VjcmV0Ym94X1pFUk9CWVRFUyA9IDMyLFxuICAgIGNyeXB0b19zZWNyZXRib3hfQk9YWkVST0JZVEVTID0gMTYsXG4gICAgY3J5cHRvX3NjYWxhcm11bHRfQllURVMgPSAzMixcbiAgICBjcnlwdG9fc2NhbGFybXVsdF9TQ0FMQVJCWVRFUyA9IDMyLFxuICAgIGNyeXB0b19ib3hfUFVCTElDS0VZQllURVMgPSAzMixcbiAgICBjcnlwdG9fYm94X1NFQ1JFVEtFWUJZVEVTID0gMzIsXG4gICAgY3J5cHRvX2JveF9CRUZPUkVOTUJZVEVTID0gMzIsXG4gICAgY3J5cHRvX2JveF9OT05DRUJZVEVTID0gY3J5cHRvX3NlY3JldGJveF9OT05DRUJZVEVTLFxuICAgIGNyeXB0b19ib3hfWkVST0JZVEVTID0gY3J5cHRvX3NlY3JldGJveF9aRVJPQllURVMsXG4gICAgY3J5cHRvX2JveF9CT1haRVJPQllURVMgPSBjcnlwdG9fc2VjcmV0Ym94X0JPWFpFUk9CWVRFUyxcbiAgICBjcnlwdG9fc2lnbl9CWVRFUyA9IDY0LFxuICAgIGNyeXB0b19zaWduX1BVQkxJQ0tFWUJZVEVTID0gMzIsXG4gICAgY3J5cHRvX3NpZ25fU0VDUkVUS0VZQllURVMgPSA2NCxcbiAgICBjcnlwdG9fc2lnbl9TRUVEQllURVMgPSAzMixcbiAgICBjcnlwdG9faGFzaF9CWVRFUyA9IDY0O1xuXG5uYWNsLmxvd2xldmVsID0ge1xuICBjcnlwdG9fY29yZV9oc2Fsc2EyMDogY3J5cHRvX2NvcmVfaHNhbHNhMjAsXG4gIGNyeXB0b19zdHJlYW1feG9yOiBjcnlwdG9fc3RyZWFtX3hvcixcbiAgY3J5cHRvX3N0cmVhbTogY3J5cHRvX3N0cmVhbSxcbiAgY3J5cHRvX3N0cmVhbV9zYWxzYTIwX3hvcjogY3J5cHRvX3N0cmVhbV9zYWxzYTIwX3hvcixcbiAgY3J5cHRvX3N0cmVhbV9zYWxzYTIwOiBjcnlwdG9fc3RyZWFtX3NhbHNhMjAsXG4gIGNyeXB0b19vbmV0aW1lYXV0aDogY3J5cHRvX29uZXRpbWVhdXRoLFxuICBjcnlwdG9fb25ldGltZWF1dGhfdmVyaWZ5OiBjcnlwdG9fb25ldGltZWF1dGhfdmVyaWZ5LFxuICBjcnlwdG9fdmVyaWZ5XzE2OiBjcnlwdG9fdmVyaWZ5XzE2LFxuICBjcnlwdG9fdmVyaWZ5XzMyOiBjcnlwdG9fdmVyaWZ5XzMyLFxuICBjcnlwdG9fc2VjcmV0Ym94OiBjcnlwdG9fc2VjcmV0Ym94LFxuICBjcnlwdG9fc2VjcmV0Ym94X29wZW46IGNyeXB0b19zZWNyZXRib3hfb3BlbixcbiAgY3J5cHRvX3NjYWxhcm11bHQ6IGNyeXB0b19zY2FsYXJtdWx0LFxuICBjcnlwdG9fc2NhbGFybXVsdF9iYXNlOiBjcnlwdG9fc2NhbGFybXVsdF9iYXNlLFxuICBjcnlwdG9fYm94X2JlZm9yZW5tOiBjcnlwdG9fYm94X2JlZm9yZW5tLFxuICBjcnlwdG9fYm94X2FmdGVybm06IGNyeXB0b19ib3hfYWZ0ZXJubSxcbiAgY3J5cHRvX2JveDogY3J5cHRvX2JveCxcbiAgY3J5cHRvX2JveF9vcGVuOiBjcnlwdG9fYm94X29wZW4sXG4gIGNyeXB0b19ib3hfa2V5cGFpcjogY3J5cHRvX2JveF9rZXlwYWlyLFxuICBjcnlwdG9faGFzaDogY3J5cHRvX2hhc2gsXG4gIGNyeXB0b19zaWduOiBjcnlwdG9fc2lnbixcbiAgY3J5cHRvX3NpZ25fa2V5cGFpcjogY3J5cHRvX3NpZ25fa2V5cGFpcixcbiAgY3J5cHRvX3NpZ25fb3BlbjogY3J5cHRvX3NpZ25fb3BlbixcblxuICBjcnlwdG9fc2VjcmV0Ym94X0tFWUJZVEVTOiBjcnlwdG9fc2VjcmV0Ym94X0tFWUJZVEVTLFxuICBjcnlwdG9fc2VjcmV0Ym94X05PTkNFQllURVM6IGNyeXB0b19zZWNyZXRib3hfTk9OQ0VCWVRFUyxcbiAgY3J5cHRvX3NlY3JldGJveF9aRVJPQllURVM6IGNyeXB0b19zZWNyZXRib3hfWkVST0JZVEVTLFxuICBjcnlwdG9fc2VjcmV0Ym94X0JPWFpFUk9CWVRFUzogY3J5cHRvX3NlY3JldGJveF9CT1haRVJPQllURVMsXG4gIGNyeXB0b19zY2FsYXJtdWx0X0JZVEVTOiBjcnlwdG9fc2NhbGFybXVsdF9CWVRFUyxcbiAgY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVM6IGNyeXB0b19zY2FsYXJtdWx0X1NDQUxBUkJZVEVTLFxuICBjcnlwdG9fYm94X1BVQkxJQ0tFWUJZVEVTOiBjcnlwdG9fYm94X1BVQkxJQ0tFWUJZVEVTLFxuICBjcnlwdG9fYm94X1NFQ1JFVEtFWUJZVEVTOiBjcnlwdG9fYm94X1NFQ1JFVEtFWUJZVEVTLFxuICBjcnlwdG9fYm94X0JFRk9SRU5NQllURVM6IGNyeXB0b19ib3hfQkVGT1JFTk1CWVRFUyxcbiAgY3J5cHRvX2JveF9OT05DRUJZVEVTOiBjcnlwdG9fYm94X05PTkNFQllURVMsXG4gIGNyeXB0b19ib3hfWkVST0JZVEVTOiBjcnlwdG9fYm94X1pFUk9CWVRFUyxcbiAgY3J5cHRvX2JveF9CT1haRVJPQllURVM6IGNyeXB0b19ib3hfQk9YWkVST0JZVEVTLFxuICBjcnlwdG9fc2lnbl9CWVRFUzogY3J5cHRvX3NpZ25fQllURVMsXG4gIGNyeXB0b19zaWduX1BVQkxJQ0tFWUJZVEVTOiBjcnlwdG9fc2lnbl9QVUJMSUNLRVlCWVRFUyxcbiAgY3J5cHRvX3NpZ25fU0VDUkVUS0VZQllURVM6IGNyeXB0b19zaWduX1NFQ1JFVEtFWUJZVEVTLFxuICBjcnlwdG9fc2lnbl9TRUVEQllURVM6IGNyeXB0b19zaWduX1NFRURCWVRFUyxcbiAgY3J5cHRvX2hhc2hfQllURVM6IGNyeXB0b19oYXNoX0JZVEVTLFxuXG4gIGdmOiBnZixcbiAgRDogRCxcbiAgTDogTCxcbiAgcGFjazI1NTE5OiBwYWNrMjU1MTksXG4gIHVucGFjazI1NTE5OiB1bnBhY2syNTUxOSxcbiAgTTogTSxcbiAgQTogQSxcbiAgUzogUyxcbiAgWjogWixcbiAgcG93MjUyMzogcG93MjUyMyxcbiAgYWRkOiBhZGQsXG4gIHNldDI1NTE5OiBzZXQyNTUxOSxcbiAgbW9kTDogbW9kTCxcbiAgc2NhbGFybXVsdDogc2NhbGFybXVsdCxcbiAgc2NhbGFyYmFzZTogc2NhbGFyYmFzZSxcbn07XG5cbi8qIEhpZ2gtbGV2ZWwgQVBJICovXG5cbmZ1bmN0aW9uIGNoZWNrTGVuZ3RocyhrLCBuKSB7XG4gIGlmIChrLmxlbmd0aCAhPT0gY3J5cHRvX3NlY3JldGJveF9LRVlCWVRFUykgdGhyb3cgbmV3IEVycm9yKCdiYWQga2V5IHNpemUnKTtcbiAgaWYgKG4ubGVuZ3RoICE9PSBjcnlwdG9fc2VjcmV0Ym94X05PTkNFQllURVMpIHRocm93IG5ldyBFcnJvcignYmFkIG5vbmNlIHNpemUnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tCb3hMZW5ndGhzKHBrLCBzaykge1xuICBpZiAocGsubGVuZ3RoICE9PSBjcnlwdG9fYm94X1BVQkxJQ0tFWUJZVEVTKSB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBwdWJsaWMga2V5IHNpemUnKTtcbiAgaWYgKHNrLmxlbmd0aCAhPT0gY3J5cHRvX2JveF9TRUNSRVRLRVlCWVRFUykgdGhyb3cgbmV3IEVycm9yKCdiYWQgc2VjcmV0IGtleSBzaXplJyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQXJyYXlUeXBlcygpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIShhcmd1bWVudHNbaV0gaW5zdGFuY2VvZiBVaW50OEFycmF5KSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuZXhwZWN0ZWQgdHlwZSwgdXNlIFVpbnQ4QXJyYXknKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbnVwKGFycikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyW2ldID0gMDtcbn1cblxubmFjbC5yYW5kb21CeXRlcyA9IGZ1bmN0aW9uKG4pIHtcbiAgdmFyIGIgPSBuZXcgVWludDhBcnJheShuKTtcbiAgcmFuZG9tYnl0ZXMoYiwgbik7XG4gIHJldHVybiBiO1xufTtcblxubmFjbC5zZWNyZXRib3ggPSBmdW5jdGlvbihtc2csIG5vbmNlLCBrZXkpIHtcbiAgY2hlY2tBcnJheVR5cGVzKG1zZywgbm9uY2UsIGtleSk7XG4gIGNoZWNrTGVuZ3RocyhrZXksIG5vbmNlKTtcbiAgdmFyIG0gPSBuZXcgVWludDhBcnJheShjcnlwdG9fc2VjcmV0Ym94X1pFUk9CWVRFUyArIG1zZy5sZW5ndGgpO1xuICB2YXIgYyA9IG5ldyBVaW50OEFycmF5KG0ubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyBpKyspIG1baStjcnlwdG9fc2VjcmV0Ym94X1pFUk9CWVRFU10gPSBtc2dbaV07XG4gIGNyeXB0b19zZWNyZXRib3goYywgbSwgbS5sZW5ndGgsIG5vbmNlLCBrZXkpO1xuICByZXR1cm4gYy5zdWJhcnJheShjcnlwdG9fc2VjcmV0Ym94X0JPWFpFUk9CWVRFUyk7XG59O1xuXG5uYWNsLnNlY3JldGJveC5vcGVuID0gZnVuY3Rpb24oYm94LCBub25jZSwga2V5KSB7XG4gIGNoZWNrQXJyYXlUeXBlcyhib3gsIG5vbmNlLCBrZXkpO1xuICBjaGVja0xlbmd0aHMoa2V5LCBub25jZSk7XG4gIHZhciBjID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NlY3JldGJveF9CT1haRVJPQllURVMgKyBib3gubGVuZ3RoKTtcbiAgdmFyIG0gPSBuZXcgVWludDhBcnJheShjLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYm94Lmxlbmd0aDsgaSsrKSBjW2krY3J5cHRvX3NlY3JldGJveF9CT1haRVJPQllURVNdID0gYm94W2ldO1xuICBpZiAoYy5sZW5ndGggPCAzMikgcmV0dXJuIG51bGw7XG4gIGlmIChjcnlwdG9fc2VjcmV0Ym94X29wZW4obSwgYywgYy5sZW5ndGgsIG5vbmNlLCBrZXkpICE9PSAwKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIG0uc3ViYXJyYXkoY3J5cHRvX3NlY3JldGJveF9aRVJPQllURVMpO1xufTtcblxubmFjbC5zZWNyZXRib3gua2V5TGVuZ3RoID0gY3J5cHRvX3NlY3JldGJveF9LRVlCWVRFUztcbm5hY2wuc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoID0gY3J5cHRvX3NlY3JldGJveF9OT05DRUJZVEVTO1xubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGggPSBjcnlwdG9fc2VjcmV0Ym94X0JPWFpFUk9CWVRFUztcblxubmFjbC5zY2FsYXJNdWx0ID0gZnVuY3Rpb24obiwgcCkge1xuICBjaGVja0FycmF5VHlwZXMobiwgcCk7XG4gIGlmIChuLmxlbmd0aCAhPT0gY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVMpIHRocm93IG5ldyBFcnJvcignYmFkIG4gc2l6ZScpO1xuICBpZiAocC5sZW5ndGggIT09IGNyeXB0b19zY2FsYXJtdWx0X0JZVEVTKSB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBwIHNpemUnKTtcbiAgdmFyIHEgPSBuZXcgVWludDhBcnJheShjcnlwdG9fc2NhbGFybXVsdF9CWVRFUyk7XG4gIGNyeXB0b19zY2FsYXJtdWx0KHEsIG4sIHApO1xuICByZXR1cm4gcTtcbn07XG5cbm5hY2wuc2NhbGFyTXVsdC5iYXNlID0gZnVuY3Rpb24obikge1xuICBjaGVja0FycmF5VHlwZXMobik7XG4gIGlmIChuLmxlbmd0aCAhPT0gY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVMpIHRocm93IG5ldyBFcnJvcignYmFkIG4gc2l6ZScpO1xuICB2YXIgcSA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19zY2FsYXJtdWx0X0JZVEVTKTtcbiAgY3J5cHRvX3NjYWxhcm11bHRfYmFzZShxLCBuKTtcbiAgcmV0dXJuIHE7XG59O1xuXG5uYWNsLnNjYWxhck11bHQuc2NhbGFyTGVuZ3RoID0gY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVM7XG5uYWNsLnNjYWxhck11bHQuZ3JvdXBFbGVtZW50TGVuZ3RoID0gY3J5cHRvX3NjYWxhcm11bHRfQllURVM7XG5cbm5hY2wuYm94ID0gZnVuY3Rpb24obXNnLCBub25jZSwgcHVibGljS2V5LCBzZWNyZXRLZXkpIHtcbiAgdmFyIGsgPSBuYWNsLmJveC5iZWZvcmUocHVibGljS2V5LCBzZWNyZXRLZXkpO1xuICByZXR1cm4gbmFjbC5zZWNyZXRib3gobXNnLCBub25jZSwgayk7XG59O1xuXG5uYWNsLmJveC5iZWZvcmUgPSBmdW5jdGlvbihwdWJsaWNLZXksIHNlY3JldEtleSkge1xuICBjaGVja0FycmF5VHlwZXMocHVibGljS2V5LCBzZWNyZXRLZXkpO1xuICBjaGVja0JveExlbmd0aHMocHVibGljS2V5LCBzZWNyZXRLZXkpO1xuICB2YXIgayA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19ib3hfQkVGT1JFTk1CWVRFUyk7XG4gIGNyeXB0b19ib3hfYmVmb3Jlbm0oaywgcHVibGljS2V5LCBzZWNyZXRLZXkpO1xuICByZXR1cm4gaztcbn07XG5cbm5hY2wuYm94LmFmdGVyID0gbmFjbC5zZWNyZXRib3g7XG5cbm5hY2wuYm94Lm9wZW4gPSBmdW5jdGlvbihtc2csIG5vbmNlLCBwdWJsaWNLZXksIHNlY3JldEtleSkge1xuICB2YXIgayA9IG5hY2wuYm94LmJlZm9yZShwdWJsaWNLZXksIHNlY3JldEtleSk7XG4gIHJldHVybiBuYWNsLnNlY3JldGJveC5vcGVuKG1zZywgbm9uY2UsIGspO1xufTtcblxubmFjbC5ib3gub3Blbi5hZnRlciA9IG5hY2wuc2VjcmV0Ym94Lm9wZW47XG5cbm5hY2wuYm94LmtleVBhaXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBrID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX2JveF9QVUJMSUNLRVlCWVRFUyk7XG4gIHZhciBzayA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19ib3hfU0VDUkVUS0VZQllURVMpO1xuICBjcnlwdG9fYm94X2tleXBhaXIocGssIHNrKTtcbiAgcmV0dXJuIHtwdWJsaWNLZXk6IHBrLCBzZWNyZXRLZXk6IHNrfTtcbn07XG5cbm5hY2wuYm94LmtleVBhaXIuZnJvbVNlY3JldEtleSA9IGZ1bmN0aW9uKHNlY3JldEtleSkge1xuICBjaGVja0FycmF5VHlwZXMoc2VjcmV0S2V5KTtcbiAgaWYgKHNlY3JldEtleS5sZW5ndGggIT09IGNyeXB0b19ib3hfU0VDUkVUS0VZQllURVMpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgc2VjcmV0IGtleSBzaXplJyk7XG4gIHZhciBwayA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19ib3hfUFVCTElDS0VZQllURVMpO1xuICBjcnlwdG9fc2NhbGFybXVsdF9iYXNlKHBrLCBzZWNyZXRLZXkpO1xuICByZXR1cm4ge3B1YmxpY0tleTogcGssIHNlY3JldEtleTogbmV3IFVpbnQ4QXJyYXkoc2VjcmV0S2V5KX07XG59O1xuXG5uYWNsLmJveC5wdWJsaWNLZXlMZW5ndGggPSBjcnlwdG9fYm94X1BVQkxJQ0tFWUJZVEVTO1xubmFjbC5ib3guc2VjcmV0S2V5TGVuZ3RoID0gY3J5cHRvX2JveF9TRUNSRVRLRVlCWVRFUztcbm5hY2wuYm94LnNoYXJlZEtleUxlbmd0aCA9IGNyeXB0b19ib3hfQkVGT1JFTk1CWVRFUztcbm5hY2wuYm94Lm5vbmNlTGVuZ3RoID0gY3J5cHRvX2JveF9OT05DRUJZVEVTO1xubmFjbC5ib3gub3ZlcmhlYWRMZW5ndGggPSBuYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aDtcblxubmFjbC5zaWduID0gZnVuY3Rpb24obXNnLCBzZWNyZXRLZXkpIHtcbiAgY2hlY2tBcnJheVR5cGVzKG1zZywgc2VjcmV0S2V5KTtcbiAgaWYgKHNlY3JldEtleS5sZW5ndGggIT09IGNyeXB0b19zaWduX1NFQ1JFVEtFWUJZVEVTKVxuICAgIHRocm93IG5ldyBFcnJvcignYmFkIHNlY3JldCBrZXkgc2l6ZScpO1xuICB2YXIgc2lnbmVkTXNnID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NpZ25fQllURVMrbXNnLmxlbmd0aCk7XG4gIGNyeXB0b19zaWduKHNpZ25lZE1zZywgbXNnLCBtc2cubGVuZ3RoLCBzZWNyZXRLZXkpO1xuICByZXR1cm4gc2lnbmVkTXNnO1xufTtcblxubmFjbC5zaWduLm9wZW4gPSBmdW5jdGlvbihzaWduZWRNc2csIHB1YmxpY0tleSkge1xuICBjaGVja0FycmF5VHlwZXMoc2lnbmVkTXNnLCBwdWJsaWNLZXkpO1xuICBpZiAocHVibGljS2V5Lmxlbmd0aCAhPT0gY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVMpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgcHVibGljIGtleSBzaXplJyk7XG4gIHZhciB0bXAgPSBuZXcgVWludDhBcnJheShzaWduZWRNc2cubGVuZ3RoKTtcbiAgdmFyIG1sZW4gPSBjcnlwdG9fc2lnbl9vcGVuKHRtcCwgc2lnbmVkTXNnLCBzaWduZWRNc2cubGVuZ3RoLCBwdWJsaWNLZXkpO1xuICBpZiAobWxlbiA8IDApIHJldHVybiBudWxsO1xuICB2YXIgbSA9IG5ldyBVaW50OEFycmF5KG1sZW4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIG1baV0gPSB0bXBbaV07XG4gIHJldHVybiBtO1xufTtcblxubmFjbC5zaWduLmRldGFjaGVkID0gZnVuY3Rpb24obXNnLCBzZWNyZXRLZXkpIHtcbiAgdmFyIHNpZ25lZE1zZyA9IG5hY2wuc2lnbihtc2csIHNlY3JldEtleSk7XG4gIHZhciBzaWcgPSBuZXcgVWludDhBcnJheShjcnlwdG9fc2lnbl9CWVRFUyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnLmxlbmd0aDsgaSsrKSBzaWdbaV0gPSBzaWduZWRNc2dbaV07XG4gIHJldHVybiBzaWc7XG59O1xuXG5uYWNsLnNpZ24uZGV0YWNoZWQudmVyaWZ5ID0gZnVuY3Rpb24obXNnLCBzaWcsIHB1YmxpY0tleSkge1xuICBjaGVja0FycmF5VHlwZXMobXNnLCBzaWcsIHB1YmxpY0tleSk7XG4gIGlmIChzaWcubGVuZ3RoICE9PSBjcnlwdG9fc2lnbl9CWVRFUylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBzaWduYXR1cmUgc2l6ZScpO1xuICBpZiAocHVibGljS2V5Lmxlbmd0aCAhPT0gY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVMpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgcHVibGljIGtleSBzaXplJyk7XG4gIHZhciBzbSA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19zaWduX0JZVEVTICsgbXNnLmxlbmd0aCk7XG4gIHZhciBtID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NpZ25fQllURVMgKyBtc2cubGVuZ3RoKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjcnlwdG9fc2lnbl9CWVRFUzsgaSsrKSBzbVtpXSA9IHNpZ1tpXTtcbiAgZm9yIChpID0gMDsgaSA8IG1zZy5sZW5ndGg7IGkrKykgc21baStjcnlwdG9fc2lnbl9CWVRFU10gPSBtc2dbaV07XG4gIHJldHVybiAoY3J5cHRvX3NpZ25fb3BlbihtLCBzbSwgc20ubGVuZ3RoLCBwdWJsaWNLZXkpID49IDApO1xufTtcblxubmFjbC5zaWduLmtleVBhaXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBrID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVMpO1xuICB2YXIgc2sgPSBuZXcgVWludDhBcnJheShjcnlwdG9fc2lnbl9TRUNSRVRLRVlCWVRFUyk7XG4gIGNyeXB0b19zaWduX2tleXBhaXIocGssIHNrKTtcbiAgcmV0dXJuIHtwdWJsaWNLZXk6IHBrLCBzZWNyZXRLZXk6IHNrfTtcbn07XG5cbm5hY2wuc2lnbi5rZXlQYWlyLmZyb21TZWNyZXRLZXkgPSBmdW5jdGlvbihzZWNyZXRLZXkpIHtcbiAgY2hlY2tBcnJheVR5cGVzKHNlY3JldEtleSk7XG4gIGlmIChzZWNyZXRLZXkubGVuZ3RoICE9PSBjcnlwdG9fc2lnbl9TRUNSRVRLRVlCWVRFUylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBzZWNyZXQga2V5IHNpemUnKTtcbiAgdmFyIHBrID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBrLmxlbmd0aDsgaSsrKSBwa1tpXSA9IHNlY3JldEtleVszMitpXTtcbiAgcmV0dXJuIHtwdWJsaWNLZXk6IHBrLCBzZWNyZXRLZXk6IG5ldyBVaW50OEFycmF5KHNlY3JldEtleSl9O1xufTtcblxubmFjbC5zaWduLmtleVBhaXIuZnJvbVNlZWQgPSBmdW5jdGlvbihzZWVkKSB7XG4gIGNoZWNrQXJyYXlUeXBlcyhzZWVkKTtcbiAgaWYgKHNlZWQubGVuZ3RoICE9PSBjcnlwdG9fc2lnbl9TRUVEQllURVMpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdiYWQgc2VlZCBzaXplJyk7XG4gIHZhciBwayA9IG5ldyBVaW50OEFycmF5KGNyeXB0b19zaWduX1BVQkxJQ0tFWUJZVEVTKTtcbiAgdmFyIHNrID0gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvX3NpZ25fU0VDUkVUS0VZQllURVMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDMyOyBpKyspIHNrW2ldID0gc2VlZFtpXTtcbiAgY3J5cHRvX3NpZ25fa2V5cGFpcihwaywgc2ssIHRydWUpO1xuICByZXR1cm4ge3B1YmxpY0tleTogcGssIHNlY3JldEtleTogc2t9O1xufTtcblxubmFjbC5zaWduLnB1YmxpY0tleUxlbmd0aCA9IGNyeXB0b19zaWduX1BVQkxJQ0tFWUJZVEVTO1xubmFjbC5zaWduLnNlY3JldEtleUxlbmd0aCA9IGNyeXB0b19zaWduX1NFQ1JFVEtFWUJZVEVTO1xubmFjbC5zaWduLnNlZWRMZW5ndGggPSBjcnlwdG9fc2lnbl9TRUVEQllURVM7XG5uYWNsLnNpZ24uc2lnbmF0dXJlTGVuZ3RoID0gY3J5cHRvX3NpZ25fQllURVM7XG5cbm5hY2wuaGFzaCA9IGZ1bmN0aW9uKG1zZykge1xuICBjaGVja0FycmF5VHlwZXMobXNnKTtcbiAgdmFyIGggPSBuZXcgVWludDhBcnJheShjcnlwdG9faGFzaF9CWVRFUyk7XG4gIGNyeXB0b19oYXNoKGgsIG1zZywgbXNnLmxlbmd0aCk7XG4gIHJldHVybiBoO1xufTtcblxubmFjbC5oYXNoLmhhc2hMZW5ndGggPSBjcnlwdG9faGFzaF9CWVRFUztcblxubmFjbC52ZXJpZnkgPSBmdW5jdGlvbih4LCB5KSB7XG4gIGNoZWNrQXJyYXlUeXBlcyh4LCB5KTtcbiAgLy8gWmVybyBsZW5ndGggYXJndW1lbnRzIGFyZSBjb25zaWRlcmVkIG5vdCBlcXVhbC5cbiAgaWYgKHgubGVuZ3RoID09PSAwIHx8IHkubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XG4gIGlmICh4Lmxlbmd0aCAhPT0geS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICh2bih4LCAwLCB5LCAwLCB4Lmxlbmd0aCkgPT09IDApID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxubmFjbC5zZXRQUk5HID0gZnVuY3Rpb24oZm4pIHtcbiAgcmFuZG9tYnl0ZXMgPSBmbjtcbn07XG5cbihmdW5jdGlvbigpIHtcbiAgLy8gSW5pdGlhbGl6ZSBQUk5HIGlmIGVudmlyb25tZW50IHByb3ZpZGVzIENTUFJORy5cbiAgLy8gSWYgbm90LCBtZXRob2RzIGNhbGxpbmcgcmFuZG9tYnl0ZXMgd2lsbCB0aHJvdy5cbiAgdmFyIGNyeXB0byA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IChzZWxmLmNyeXB0byB8fCBzZWxmLm1zQ3J5cHRvKSA6IG51bGw7XG4gIGlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIEJyb3dzZXJzLlxuICAgIHZhciBRVU9UQSA9IDY1NTM2O1xuICAgIG5hY2wuc2V0UFJORyhmdW5jdGlvbih4LCBuKSB7XG4gICAgICB2YXIgaSwgdiA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47IGkgKz0gUVVPVEEpIHtcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh2LnN1YmFycmF5KGksIGkgKyBNYXRoLm1pbihuIC0gaSwgUVVPVEEpKSk7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB4W2ldID0gdltpXTtcbiAgICAgIGNsZWFudXAodik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gTm9kZS5qcy5cbiAgICBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbiAgICBpZiAoY3J5cHRvICYmIGNyeXB0by5yYW5kb21CeXRlcykge1xuICAgICAgbmFjbC5zZXRQUk5HKGZ1bmN0aW9uKHgsIG4pIHtcbiAgICAgICAgdmFyIGksIHYgPSBjcnlwdG8ucmFuZG9tQnl0ZXMobik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHhbaV0gPSB2W2ldO1xuICAgICAgICBjbGVhbnVwKHYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KSgpO1xuXG59KSh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzIDogKHNlbGYubmFjbCA9IHNlbGYubmFjbCB8fCB7fSkpO1xuIiwidmFyIG5hdGl2ZSA9IHJlcXVpcmUoJy4vbmF0aXZlJylcblxuZnVuY3Rpb24gZ2V0VHlwZU5hbWUgKGZuKSB7XG4gIHJldHVybiBmbi5uYW1lIHx8IGZuLnRvU3RyaW5nKCkubWF0Y2goL2Z1bmN0aW9uICguKj8pXFxzKlxcKC8pWzFdXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlVHlwZU5hbWUgKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmUuTmlsKHZhbHVlKSA/ICcnIDogZ2V0VHlwZU5hbWUodmFsdWUuY29uc3RydWN0b3IpXG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlICh2YWx1ZSkge1xuICBpZiAobmF0aXZlLkZ1bmN0aW9uKHZhbHVlKSkgcmV0dXJuICcnXG4gIGlmIChuYXRpdmUuU3RyaW5nKHZhbHVlKSkgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICBpZiAodmFsdWUgJiYgbmF0aXZlLk9iamVjdCh2YWx1ZSkpIHJldHVybiAnJ1xuICByZXR1cm4gdmFsdWVcbn1cblxuZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2UgKGUsIHQpIHtcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZSwgdClcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZkpTT04gKHR5cGUpIHtcbiAgaWYgKG5hdGl2ZS5GdW5jdGlvbih0eXBlKSkgcmV0dXJuIHR5cGUudG9KU09OID8gdHlwZS50b0pTT04oKSA6IGdldFR5cGVOYW1lKHR5cGUpXG4gIGlmIChuYXRpdmUuQXJyYXkodHlwZSkpIHJldHVybiAnQXJyYXknXG4gIGlmICh0eXBlICYmIG5hdGl2ZS5PYmplY3QodHlwZSkpIHJldHVybiAnT2JqZWN0J1xuXG4gIHJldHVybiB0eXBlICE9PSB1bmRlZmluZWQgPyB0eXBlIDogJydcbn1cblxuZnVuY3Rpb24gdGZFcnJvclN0cmluZyAodHlwZSwgdmFsdWUsIHZhbHVlVHlwZU5hbWUpIHtcbiAgdmFyIHZhbHVlSnNvbiA9IGdldFZhbHVlKHZhbHVlKVxuXG4gIHJldHVybiAnRXhwZWN0ZWQgJyArIHRmSlNPTih0eXBlKSArICcsIGdvdCcgK1xuICAgICh2YWx1ZVR5cGVOYW1lICE9PSAnJyA/ICcgJyArIHZhbHVlVHlwZU5hbWUgOiAnJykgK1xuICAgICh2YWx1ZUpzb24gIT09ICcnID8gJyAnICsgdmFsdWVKc29uIDogJycpXG59XG5cbmZ1bmN0aW9uIFRmVHlwZUVycm9yICh0eXBlLCB2YWx1ZSwgdmFsdWVUeXBlTmFtZSkge1xuICB2YWx1ZVR5cGVOYW1lID0gdmFsdWVUeXBlTmFtZSB8fCBnZXRWYWx1ZVR5cGVOYW1lKHZhbHVlKVxuICB0aGlzLm1lc3NhZ2UgPSB0ZkVycm9yU3RyaW5nKHR5cGUsIHZhbHVlLCB2YWx1ZVR5cGVOYW1lKVxuXG4gIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFRmVHlwZUVycm9yKVxuICB0aGlzLl9fdHlwZSA9IHR5cGVcbiAgdGhpcy5fX3ZhbHVlID0gdmFsdWVcbiAgdGhpcy5fX3ZhbHVlVHlwZU5hbWUgPSB2YWx1ZVR5cGVOYW1lXG59XG5cblRmVHlwZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuVGZUeXBlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVGZUeXBlRXJyb3JcblxuZnVuY3Rpb24gdGZQcm9wZXJ0eUVycm9yU3RyaW5nICh0eXBlLCBsYWJlbCwgbmFtZSwgdmFsdWUsIHZhbHVlVHlwZU5hbWUpIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0gJ1wiIG9mIHR5cGUgJ1xuICBpZiAobGFiZWwgPT09ICdrZXknKSBkZXNjcmlwdGlvbiA9ICdcIiB3aXRoIGtleSB0eXBlICdcblxuICByZXR1cm4gdGZFcnJvclN0cmluZygncHJvcGVydHkgXCInICsgdGZKU09OKG5hbWUpICsgZGVzY3JpcHRpb24gKyB0ZkpTT04odHlwZSksIHZhbHVlLCB2YWx1ZVR5cGVOYW1lKVxufVxuXG5mdW5jdGlvbiBUZlByb3BlcnR5VHlwZUVycm9yICh0eXBlLCBwcm9wZXJ0eSwgbGFiZWwsIHZhbHVlLCB2YWx1ZVR5cGVOYW1lKSB7XG4gIGlmICh0eXBlKSB7XG4gICAgdmFsdWVUeXBlTmFtZSA9IHZhbHVlVHlwZU5hbWUgfHwgZ2V0VmFsdWVUeXBlTmFtZSh2YWx1ZSlcbiAgICB0aGlzLm1lc3NhZ2UgPSB0ZlByb3BlcnR5RXJyb3JTdHJpbmcodHlwZSwgbGFiZWwsIHByb3BlcnR5LCB2YWx1ZSwgdmFsdWVUeXBlTmFtZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnVW5leHBlY3RlZCBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIidcbiAgfVxuXG4gIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFRmVHlwZUVycm9yKVxuICB0aGlzLl9fbGFiZWwgPSBsYWJlbFxuICB0aGlzLl9fcHJvcGVydHkgPSBwcm9wZXJ0eVxuICB0aGlzLl9fdHlwZSA9IHR5cGVcbiAgdGhpcy5fX3ZhbHVlID0gdmFsdWVcbiAgdGhpcy5fX3ZhbHVlVHlwZU5hbWUgPSB2YWx1ZVR5cGVOYW1lXG59XG5cblRmUHJvcGVydHlUeXBlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpXG5UZlByb3BlcnR5VHlwZUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRmVHlwZUVycm9yXG5cbmZ1bmN0aW9uIHRmQ3VzdG9tRXJyb3IgKGV4cGVjdGVkLCBhY3R1YWwpIHtcbiAgcmV0dXJuIG5ldyBUZlR5cGVFcnJvcihleHBlY3RlZCwge30sIGFjdHVhbClcbn1cblxuZnVuY3Rpb24gdGZTdWJFcnJvciAoZSwgcHJvcGVydHksIGxhYmVsKSB7XG4gIC8vIHN1YiBjaGlsZD9cbiAgaWYgKGUgaW5zdGFuY2VvZiBUZlByb3BlcnR5VHlwZUVycm9yKSB7XG4gICAgcHJvcGVydHkgPSBwcm9wZXJ0eSArICcuJyArIGUuX19wcm9wZXJ0eVxuXG4gICAgZSA9IG5ldyBUZlByb3BlcnR5VHlwZUVycm9yKFxuICAgICAgZS5fX3R5cGUsIHByb3BlcnR5LCBlLl9fbGFiZWwsIGUuX192YWx1ZSwgZS5fX3ZhbHVlVHlwZU5hbWVcbiAgICApXG5cbiAgLy8gY2hpbGQ/XG4gIH0gZWxzZSBpZiAoZSBpbnN0YW5jZW9mIFRmVHlwZUVycm9yKSB7XG4gICAgZSA9IG5ldyBUZlByb3BlcnR5VHlwZUVycm9yKFxuICAgICAgZS5fX3R5cGUsIHByb3BlcnR5LCBsYWJlbCwgZS5fX3ZhbHVlLCBlLl9fdmFsdWVUeXBlTmFtZVxuICAgIClcbiAgfVxuXG4gIGNhcHR1cmVTdGFja1RyYWNlKGUpXG4gIHJldHVybiBlXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBUZlR5cGVFcnJvcjogVGZUeXBlRXJyb3IsXG4gIFRmUHJvcGVydHlUeXBlRXJyb3I6IFRmUHJvcGVydHlUeXBlRXJyb3IsXG4gIHRmQ3VzdG9tRXJyb3I6IHRmQ3VzdG9tRXJyb3IsXG4gIHRmU3ViRXJyb3I6IHRmU3ViRXJyb3IsXG4gIHRmSlNPTjogdGZKU09OLFxuICBnZXRWYWx1ZVR5cGVOYW1lOiBnZXRWYWx1ZVR5cGVOYW1lXG59XG4iLCJ2YXIgTkFUSVZFID0gcmVxdWlyZSgnLi9uYXRpdmUnKVxudmFyIEVSUk9SUyA9IHJlcXVpcmUoJy4vZXJyb3JzJylcblxuZnVuY3Rpb24gX0J1ZmZlciAodmFsdWUpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSlcbn1cblxuZnVuY3Rpb24gSGV4ICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvXihbMC05YS1mXXsyfSkrJC9pLnRlc3QodmFsdWUpXG59XG5cbmZ1bmN0aW9uIF9MZW5ndGhOICh0eXBlLCBsZW5ndGgpIHtcbiAgdmFyIG5hbWUgPSB0eXBlLnRvSlNPTigpXG5cbiAgZnVuY3Rpb24gTGVuZ3RoICh2YWx1ZSkge1xuICAgIGlmICghdHlwZSh2YWx1ZSkpIHJldHVybiBmYWxzZVxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IGxlbmd0aCkgcmV0dXJuIHRydWVcblxuICAgIHRocm93IEVSUk9SUy50ZkN1c3RvbUVycm9yKG5hbWUgKyAnKExlbmd0aDogJyArIGxlbmd0aCArICcpJywgbmFtZSArICcoTGVuZ3RoOiAnICsgdmFsdWUubGVuZ3RoICsgJyknKVxuICB9XG4gIExlbmd0aC50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuYW1lIH1cblxuICByZXR1cm4gTGVuZ3RoXG59XG5cbnZhciBfQXJyYXlOID0gX0xlbmd0aE4uYmluZChudWxsLCBOQVRJVkUuQXJyYXkpXG52YXIgX0J1ZmZlck4gPSBfTGVuZ3RoTi5iaW5kKG51bGwsIF9CdWZmZXIpXG52YXIgX0hleE4gPSBfTGVuZ3RoTi5iaW5kKG51bGwsIEhleClcbnZhciBfU3RyaW5nTiA9IF9MZW5ndGhOLmJpbmQobnVsbCwgTkFUSVZFLlN0cmluZylcblxuZnVuY3Rpb24gUmFuZ2UgKGEsIGIsIGYpIHtcbiAgZiA9IGYgfHwgTkFUSVZFLk51bWJlclxuICBmdW5jdGlvbiBfcmFuZ2UgKHZhbHVlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gZih2YWx1ZSwgc3RyaWN0KSAmJiAodmFsdWUgPiBhKSAmJiAodmFsdWUgPCBiKVxuICB9XG4gIF9yYW5nZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGAke2YudG9KU09OKCl9IGJldHdlZW4gWyR7YX0sICR7Yn1dYFxuICB9XG4gIHJldHVybiBfcmFuZ2Vcbn1cblxudmFyIElOVDUzX01BWCA9IE1hdGgucG93KDIsIDUzKSAtIDFcblxuZnVuY3Rpb24gRmluaXRlICh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSlcbn1cbmZ1bmN0aW9uIEludDggKHZhbHVlKSB7IHJldHVybiAoKHZhbHVlIDw8IDI0KSA+PiAyNCkgPT09IHZhbHVlIH1cbmZ1bmN0aW9uIEludDE2ICh2YWx1ZSkgeyByZXR1cm4gKCh2YWx1ZSA8PCAxNikgPj4gMTYpID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBJbnQzMiAodmFsdWUpIHsgcmV0dXJuICh2YWx1ZSB8IDApID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBJbnQ1MyAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+PSAtSU5UNTNfTUFYICYmXG4gICAgdmFsdWUgPD0gSU5UNTNfTUFYICYmXG4gICAgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlXG59XG5mdW5jdGlvbiBVSW50OCAodmFsdWUpIHsgcmV0dXJuICh2YWx1ZSAmIDB4ZmYpID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBVSW50MTYgKHZhbHVlKSB7IHJldHVybiAodmFsdWUgJiAweGZmZmYpID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBVSW50MzIgKHZhbHVlKSB7IHJldHVybiAodmFsdWUgPj4+IDApID09PSB2YWx1ZSB9XG5mdW5jdGlvbiBVSW50NTMgKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPj0gMCAmJlxuICAgIHZhbHVlIDw9IElOVDUzX01BWCAmJlxuICAgIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZVxufVxuXG52YXIgdHlwZXMgPSB7XG4gIEFycmF5TjogX0FycmF5TixcbiAgQnVmZmVyOiBfQnVmZmVyLFxuICBCdWZmZXJOOiBfQnVmZmVyTixcbiAgRmluaXRlOiBGaW5pdGUsXG4gIEhleDogSGV4LFxuICBIZXhOOiBfSGV4TixcbiAgSW50ODogSW50OCxcbiAgSW50MTY6IEludDE2LFxuICBJbnQzMjogSW50MzIsXG4gIEludDUzOiBJbnQ1MyxcbiAgUmFuZ2U6IFJhbmdlLFxuICBTdHJpbmdOOiBfU3RyaW5nTixcbiAgVUludDg6IFVJbnQ4LFxuICBVSW50MTY6IFVJbnQxNixcbiAgVUludDMyOiBVSW50MzIsXG4gIFVJbnQ1MzogVUludDUzXG59XG5cbmZvciAodmFyIHR5cGVOYW1lIGluIHR5cGVzKSB7XG4gIHR5cGVzW3R5cGVOYW1lXS50b0pTT04gPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0XG4gIH0uYmluZChudWxsLCB0eXBlTmFtZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlc1xuIiwidmFyIEVSUk9SUyA9IHJlcXVpcmUoJy4vZXJyb3JzJylcbnZhciBOQVRJVkUgPSByZXF1aXJlKCcuL25hdGl2ZScpXG5cbi8vIHNob3J0LWhhbmRcbnZhciB0ZkpTT04gPSBFUlJPUlMudGZKU09OXG52YXIgVGZUeXBlRXJyb3IgPSBFUlJPUlMuVGZUeXBlRXJyb3JcbnZhciBUZlByb3BlcnR5VHlwZUVycm9yID0gRVJST1JTLlRmUHJvcGVydHlUeXBlRXJyb3JcbnZhciB0ZlN1YkVycm9yID0gRVJST1JTLnRmU3ViRXJyb3JcbnZhciBnZXRWYWx1ZVR5cGVOYW1lID0gRVJST1JTLmdldFZhbHVlVHlwZU5hbWVcblxudmFyIFRZUEVTID0ge1xuICBhcnJheU9mOiBmdW5jdGlvbiBhcnJheU9mICh0eXBlLCBvcHRpb25zKSB7XG4gICAgdHlwZSA9IGNvbXBpbGUodHlwZSlcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gICAgZnVuY3Rpb24gX2FycmF5T2YgKGFycmF5LCBzdHJpY3QpIHtcbiAgICAgIGlmICghTkFUSVZFLkFycmF5KGFycmF5KSkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoTkFUSVZFLk5pbChhcnJheSkpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKG9wdGlvbnMubWluTGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgYXJyYXkubGVuZ3RoIDwgb3B0aW9ucy5taW5MZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKG9wdGlvbnMubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgYXJyYXkubGVuZ3RoID4gb3B0aW9ucy5tYXhMZW5ndGgpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgYXJyYXkubGVuZ3RoICE9PSBvcHRpb25zLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiBhcnJheS5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdHlwZWZvcmNlKHR5cGUsIHZhbHVlLCBzdHJpY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyB0ZlN1YkVycm9yKGUsIGkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIF9hcnJheU9mLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHIgPSAnWycgKyB0ZkpTT04odHlwZSkgKyAnXSdcbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0ciArPSAneycgKyBvcHRpb25zLmxlbmd0aCArICd9J1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RyICs9ICd7JyArXG4gICAgICAgICAgKG9wdGlvbnMubWluTGVuZ3RoID09PSB1bmRlZmluZWQgPyAwIDogb3B0aW9ucy5taW5MZW5ndGgpICsgJywnICtcbiAgICAgICAgICAob3B0aW9ucy5tYXhMZW5ndGggPT09IHVuZGVmaW5lZCA/IEluZmluaXR5IDogb3B0aW9ucy5tYXhMZW5ndGgpICsgJ30nXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyXG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnJheU9mXG4gIH0sXG5cbiAgbWF5YmU6IGZ1bmN0aW9uIG1heWJlICh0eXBlKSB7XG4gICAgdHlwZSA9IGNvbXBpbGUodHlwZSlcblxuICAgIGZ1bmN0aW9uIF9tYXliZSAodmFsdWUsIHN0cmljdCkge1xuICAgICAgcmV0dXJuIE5BVElWRS5OaWwodmFsdWUpIHx8IHR5cGUodmFsdWUsIHN0cmljdCwgbWF5YmUpXG4gICAgfVxuICAgIF9tYXliZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnPycgKyB0ZkpTT04odHlwZSkgfVxuXG4gICAgcmV0dXJuIF9tYXliZVxuICB9LFxuXG4gIG1hcDogZnVuY3Rpb24gbWFwIChwcm9wZXJ0eVR5cGUsIHByb3BlcnR5S2V5VHlwZSkge1xuICAgIHByb3BlcnR5VHlwZSA9IGNvbXBpbGUocHJvcGVydHlUeXBlKVxuICAgIGlmIChwcm9wZXJ0eUtleVR5cGUpIHByb3BlcnR5S2V5VHlwZSA9IGNvbXBpbGUocHJvcGVydHlLZXlUeXBlKVxuXG4gICAgZnVuY3Rpb24gX21hcCAodmFsdWUsIHN0cmljdCkge1xuICAgICAgaWYgKCFOQVRJVkUuT2JqZWN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoTkFUSVZFLk5pbCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuXG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAocHJvcGVydHlLZXlUeXBlKSB7XG4gICAgICAgICAgICB0eXBlZm9yY2UocHJvcGVydHlLZXlUeXBlLCBwcm9wZXJ0eU5hbWUsIHN0cmljdClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyB0ZlN1YkVycm9yKGUsIHByb3BlcnR5TmFtZSwgJ2tleScpXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gdmFsdWVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIHR5cGVmb3JjZShwcm9wZXJ0eVR5cGUsIHByb3BlcnR5VmFsdWUsIHN0cmljdClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRocm93IHRmU3ViRXJyb3IoZSwgcHJvcGVydHlOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5S2V5VHlwZSkge1xuICAgICAgX21hcC50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAneycgKyB0ZkpTT04ocHJvcGVydHlLZXlUeXBlKSArICc6ICcgKyB0ZkpTT04ocHJvcGVydHlUeXBlKSArICd9J1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfbWFwLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICd7JyArIHRmSlNPTihwcm9wZXJ0eVR5cGUpICsgJ30nIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX21hcFxuICB9LFxuXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0ICh1bmNvbXBpbGVkKSB7XG4gICAgdmFyIHR5cGUgPSB7fVxuXG4gICAgZm9yICh2YXIgdHlwZVByb3BlcnR5TmFtZSBpbiB1bmNvbXBpbGVkKSB7XG4gICAgICB0eXBlW3R5cGVQcm9wZXJ0eU5hbWVdID0gY29tcGlsZSh1bmNvbXBpbGVkW3R5cGVQcm9wZXJ0eU5hbWVdKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9vYmplY3QgKHZhbHVlLCBzdHJpY3QpIHtcbiAgICAgIGlmICghTkFUSVZFLk9iamVjdCh2YWx1ZSkpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKE5BVElWRS5OaWwodmFsdWUpKSByZXR1cm4gZmFsc2VcblxuICAgICAgdmFyIHByb3BlcnR5TmFtZVxuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHByb3BlcnR5TmFtZSBpbiB0eXBlKSB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5VHlwZSA9IHR5cGVbcHJvcGVydHlOYW1lXVxuICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gdmFsdWVbcHJvcGVydHlOYW1lXVxuXG4gICAgICAgICAgdHlwZWZvcmNlKHByb3BlcnR5VHlwZSwgcHJvcGVydHlWYWx1ZSwgc3RyaWN0KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IHRmU3ViRXJyb3IoZSwgcHJvcGVydHlOYW1lKVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGZvciAocHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHR5cGVbcHJvcGVydHlOYW1lXSkgY29udGludWVcblxuICAgICAgICAgIHRocm93IG5ldyBUZlByb3BlcnR5VHlwZUVycm9yKHVuZGVmaW5lZCwgcHJvcGVydHlOYW1lKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIF9vYmplY3QudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGZKU09OKHR5cGUpIH1cblxuICAgIHJldHVybiBfb2JqZWN0XG4gIH0sXG5cbiAgYW55T2Y6IGZ1bmN0aW9uIGFueU9mICgpIHtcbiAgICB2YXIgdHlwZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykubWFwKGNvbXBpbGUpXG5cbiAgICBmdW5jdGlvbiBfYW55T2YgKHZhbHVlLCBzdHJpY3QpIHtcbiAgICAgIHJldHVybiB0eXBlcy5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHR5cGVmb3JjZSh0eXBlLCB2YWx1ZSwgc3RyaWN0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIF9hbnlPZi50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0eXBlcy5tYXAodGZKU09OKS5qb2luKCd8JykgfVxuXG4gICAgcmV0dXJuIF9hbnlPZlxuICB9LFxuXG4gIGFsbE9mOiBmdW5jdGlvbiBhbGxPZiAoKSB7XG4gICAgdmFyIHR5cGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLm1hcChjb21waWxlKVxuXG4gICAgZnVuY3Rpb24gX2FsbE9mICh2YWx1ZSwgc3RyaWN0KSB7XG4gICAgICByZXR1cm4gdHlwZXMuZXZlcnkoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdHlwZWZvcmNlKHR5cGUsIHZhbHVlLCBzdHJpY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgX2FsbE9mLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVzLm1hcCh0ZkpTT04pLmpvaW4oJyAmICcpIH1cblxuICAgIHJldHVybiBfYWxsT2ZcbiAgfSxcblxuICBxdWFja3NMaWtlOiBmdW5jdGlvbiBxdWFja3NMaWtlICh0eXBlKSB7XG4gICAgZnVuY3Rpb24gX3F1YWNrc0xpa2UgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZSA9PT0gZ2V0VmFsdWVUeXBlTmFtZSh2YWx1ZSlcbiAgICB9XG4gICAgX3F1YWNrc0xpa2UudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZSB9XG5cbiAgICByZXR1cm4gX3F1YWNrc0xpa2VcbiAgfSxcblxuICB0dXBsZTogZnVuY3Rpb24gdHVwbGUgKCkge1xuICAgIHZhciB0eXBlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5tYXAoY29tcGlsZSlcblxuICAgIGZ1bmN0aW9uIF90dXBsZSAodmFsdWVzLCBzdHJpY3QpIHtcbiAgICAgIGlmIChOQVRJVkUuTmlsKHZhbHVlcykpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKE5BVElWRS5OaWwodmFsdWVzLmxlbmd0aCkpIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHN0cmljdCAmJiAodmFsdWVzLmxlbmd0aCAhPT0gdHlwZXMubGVuZ3RoKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVybiB0eXBlcy5ldmVyeShmdW5jdGlvbiAodHlwZSwgaSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0eXBlZm9yY2UodHlwZSwgdmFsdWVzW2ldLCBzdHJpY3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aHJvdyB0ZlN1YkVycm9yKGUsIGkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIF90dXBsZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnKCcgKyB0eXBlcy5tYXAodGZKU09OKS5qb2luKCcsICcpICsgJyknIH1cblxuICAgIHJldHVybiBfdHVwbGVcbiAgfSxcblxuICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUgKGV4cGVjdGVkKSB7XG4gICAgZnVuY3Rpb24gX3ZhbHVlIChhY3R1YWwpIHtcbiAgICAgIHJldHVybiBhY3R1YWwgPT09IGV4cGVjdGVkXG4gICAgfVxuICAgIF92YWx1ZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBleHBlY3RlZCB9XG5cbiAgICByZXR1cm4gX3ZhbHVlXG4gIH1cbn1cblxuLy8gVE9ETzogZGVwcmVjYXRlXG5UWVBFUy5vbmVPZiA9IFRZUEVTLmFueU9mXG5cbmZ1bmN0aW9uIGNvbXBpbGUgKHR5cGUpIHtcbiAgaWYgKE5BVElWRS5TdHJpbmcodHlwZSkpIHtcbiAgICBpZiAodHlwZVswXSA9PT0gJz8nKSByZXR1cm4gVFlQRVMubWF5YmUodHlwZS5zbGljZSgxKSlcblxuICAgIHJldHVybiBOQVRJVkVbdHlwZV0gfHwgVFlQRVMucXVhY2tzTGlrZSh0eXBlKVxuICB9IGVsc2UgaWYgKHR5cGUgJiYgTkFUSVZFLk9iamVjdCh0eXBlKSkge1xuICAgIGlmIChOQVRJVkUuQXJyYXkodHlwZSkpIHtcbiAgICAgIGlmICh0eXBlLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgY29tcGlsZSgpIHBhcmFtZXRlciBvZiB0eXBlIEFycmF5IG9mIGxlbmd0aCAxJylcbiAgICAgIHJldHVybiBUWVBFUy5hcnJheU9mKHR5cGVbMF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIFRZUEVTLm9iamVjdCh0eXBlKVxuICB9IGVsc2UgaWYgKE5BVElWRS5GdW5jdGlvbih0eXBlKSkge1xuICAgIHJldHVybiB0eXBlXG4gIH1cblxuICByZXR1cm4gVFlQRVMudmFsdWUodHlwZSlcbn1cblxuZnVuY3Rpb24gdHlwZWZvcmNlICh0eXBlLCB2YWx1ZSwgc3RyaWN0LCBzdXJyb2dhdGUpIHtcbiAgaWYgKE5BVElWRS5GdW5jdGlvbih0eXBlKSkge1xuICAgIGlmICh0eXBlKHZhbHVlLCBzdHJpY3QpKSByZXR1cm4gdHJ1ZVxuXG4gICAgdGhyb3cgbmV3IFRmVHlwZUVycm9yKHN1cnJvZ2F0ZSB8fCB0eXBlLCB2YWx1ZSlcbiAgfVxuXG4gIC8vIEpJVFxuICByZXR1cm4gdHlwZWZvcmNlKGNvbXBpbGUodHlwZSksIHZhbHVlLCBzdHJpY3QpXG59XG5cbi8vIGFzc2lnbiB0eXBlcyB0byB0eXBlZm9yY2UgZnVuY3Rpb25cbmZvciAodmFyIHR5cGVOYW1lIGluIE5BVElWRSkge1xuICB0eXBlZm9yY2VbdHlwZU5hbWVdID0gTkFUSVZFW3R5cGVOYW1lXVxufVxuXG5mb3IgKHR5cGVOYW1lIGluIFRZUEVTKSB7XG4gIHR5cGVmb3JjZVt0eXBlTmFtZV0gPSBUWVBFU1t0eXBlTmFtZV1cbn1cblxudmFyIEVYVFJBID0gcmVxdWlyZSgnLi9leHRyYScpXG5mb3IgKHR5cGVOYW1lIGluIEVYVFJBKSB7XG4gIHR5cGVmb3JjZVt0eXBlTmFtZV0gPSBFWFRSQVt0eXBlTmFtZV1cbn1cblxudHlwZWZvcmNlLmNvbXBpbGUgPSBjb21waWxlXG50eXBlZm9yY2UuVGZUeXBlRXJyb3IgPSBUZlR5cGVFcnJvclxudHlwZWZvcmNlLlRmUHJvcGVydHlUeXBlRXJyb3IgPSBUZlByb3BlcnR5VHlwZUVycm9yXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZWZvcmNlXG4iLCJ2YXIgdHlwZXMgPSB7XG4gIEFycmF5OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5IH0sXG4gIEJvb2xlYW46IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfSxcbiAgRnVuY3Rpb246IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIH0sXG4gIE5pbDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIH0sXG4gIE51bWJlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIH0sXG4gIE9iamVjdDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIH0sXG4gIFN0cmluZzogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIH0sXG4gICcnOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH1cbn1cblxuLy8gVE9ETzogZGVwcmVjYXRlXG50eXBlcy5OdWxsID0gdHlwZXMuTmlsXG5cbmZvciAodmFyIHR5cGVOYW1lIGluIHR5cGVzKSB7XG4gIHR5cGVzW3R5cGVOYW1lXS50b0pTT04gPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0XG4gIH0uYmluZChudWxsLCB0eXBlTmFtZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlc1xuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBVaW50OEFycmF5IGNyZWF0ZWQgYnkgY29uY2F0ZW5hdGluZyB0aGUgcGFzc2VkIEFycmF5TGlrZXNcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5TGlrZTxudW1iZXI+Pn0gYXJyYXlzXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aF1cbiAqL1xuZnVuY3Rpb24gY29uY2F0IChhcnJheXMsIGxlbmd0aCkge1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5sZW5ndGgsIDApXG4gIH1cblxuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gIGxldCBvZmZzZXQgPSAwXG5cbiAgZm9yIChjb25zdCBhcnIgb2YgYXJyYXlzKSB7XG4gICAgb3V0cHV0LnNldChhcnIsIG9mZnNldClcbiAgICBvZmZzZXQgKz0gYXJyLmxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmNhdFxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gcGFzc2VkIFVpbnQ4QXJyYXlzIGhhdmUgdGhlIHNhbWUgY29udGVudFxuICpcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYVxuICogQHBhcmFtIHtVaW50OEFycmF5fSBiXG4gKi9cbmZ1bmN0aW9uIGVxdWFscyAoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoYS5ieXRlTGVuZ3RoICE9PSBiLmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbHNcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IGVuY29kaW5nOiBnZXRDb2RlYyB9ID0gcmVxdWlyZSgnbXVsdGliYXNlJylcbmNvbnN0IHV0ZjhFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBAdHlwZWRlZiB7X19pbXBvcnRfXygnbXVsdGliYXNlL3NyYy90eXBlcycpLkJhc2VOYW1lIHwgJ3V0ZjgnIHwgJ3V0Zi04JyB8ICdhc2NpaScgfCB1bmRlZmluZWR9IFN1cHBvcnRlZEVuY29kaW5nc1xuICovXG5cbi8qKlxuICogSW50ZXJwcmV0cyBlYWNoIGNoYXJhY3RlciBpbiBhIHN0cmluZyBhcyBhIGJ5dGUgYW5kXG4gKiByZXR1cm5zIGEgVWludDhBcnJheSBvZiB0aG9zZSBieXRlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIHN0cmluZyB0byB0dXJuIGludG8gYW4gYXJyYXlcbiAqL1xuZnVuY3Rpb24gYXNjaWlTdHJpbmdUb1VpbnQ4QXJyYXkgKHN0cmluZykge1xuICBjb25zdCBhcnJheSA9IG5ldyBVaW50OEFycmF5KHN0cmluZy5sZW5ndGgpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gIH1cblxuICByZXR1cm4gYXJyYXlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgVWludDhBcnJheWAgZnJvbSB0aGUgcGFzc2VkIHN0cmluZ1xuICpcbiAqIFN1cHBvcnRzIGB1dGY4YCwgYHV0Zi04YCBhbmQgYW55IGVuY29kaW5nIHN1cHBvcnRlZCBieSB0aGUgbXVsdGliYXNlIG1vZHVsZS5cbiAqXG4gKiBBbHNvIGBhc2NpaWAgd2hpY2ggaXMgc2ltaWxhciB0byBub2RlJ3MgJ2JpbmFyeScgZW5jb2RpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtTdXBwb3J0ZWRFbmNvZGluZ3N9IFtlbmNvZGluZz11dGY4XSAtIHV0ZjgsIGJhc2UxNiwgYmFzZTY0LCBiYXNlNjR1cmxwYWQsIGV0Y1xuICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gKi9cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHN0cmluZywgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgaWYgKGVuY29kaW5nID09PSAndXRmOCcgfHwgZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICByZXR1cm4gdXRmOEVuY29kZXIuZW5jb2RlKHN0cmluZylcbiAgfVxuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2FzY2lpJykge1xuICAgIHJldHVybiBhc2NpaVN0cmluZ1RvVWludDhBcnJheShzdHJpbmcpXG4gIH1cblxuICByZXR1cm4gZ2V0Q29kZWMoZW5jb2RpbmcpLmRlY29kZShzdHJpbmcpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbVN0cmluZ1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgZW5jb2Rpbmc6IGdldENvZGVjIH0gPSByZXF1aXJlKCdtdWx0aWJhc2UnKVxuY29uc3QgdXRmOERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0ZjgnKVxuXG4vKipcbiAqIEB0eXBlZGVmIHtfX2ltcG9ydF9fKCdtdWx0aWJhc2Uvc3JjL3R5cGVzJykuQmFzZU5hbWUgfCAndXRmOCcgfCAndXRmLTgnIHwgJ2FzY2lpJyB8IHVuZGVmaW5lZH0gU3VwcG9ydGVkRW5jb2RpbmdzXG4gKi9cblxuLyoqXG4gKiBUdXJucyBhIFVpbnQ4QXJyYXkgb2YgYnl0ZXMgaW50byBhIHN0cmluZyB3aXRoIGVhY2hcbiAqIGNoYXJhY3RlciBiZWluZyB0aGUgY2hhciBjb2RlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGJ5dGVcbiAqXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGFycmF5IC0gVGhlIGFycmF5IHRvIHR1cm4gaW50byBhIHN0cmluZ1xuICovXG5mdW5jdGlvbiB1aW50OEFycmF5VG9Bc2NpaVN0cmluZyAoYXJyYXkpIHtcbiAgbGV0IHN0cmluZyA9ICcnXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFycmF5W2ldKVxuICB9XG4gIHJldHVybiBzdHJpbmdcbn1cblxuLyoqXG4gKiBUdXJucyBhIGBVaW50OEFycmF5YCBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIFN1cHBvcnRzIGB1dGY4YCwgYHV0Zi04YCBhbmQgYW55IGVuY29kaW5nIHN1cHBvcnRlZCBieSB0aGUgbXVsdGliYXNlIG1vZHVsZS5cbiAqXG4gKiBBbHNvIGBhc2NpaWAgd2hpY2ggaXMgc2ltaWxhciB0byBub2RlJ3MgJ2JpbmFyeScgZW5jb2RpbmcuXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSBhcnJheSAtIFRoZSBhcnJheSB0byB0dXJuIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7U3VwcG9ydGVkRW5jb2RpbmdzfSBbZW5jb2Rpbmc9dXRmOF0gLSBUaGUgZW5jb2RpbmcgdG8gdXNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAoYXJyYXksIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGlmIChlbmNvZGluZyA9PT0gJ3V0ZjgnIHx8IGVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgcmV0dXJuIHV0ZjhEZWNvZGVyLmRlY29kZShhcnJheSlcbiAgfVxuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2FzY2lpJykge1xuICAgIHJldHVybiB1aW50OEFycmF5VG9Bc2NpaVN0cmluZyhhcnJheSlcbiAgfVxuXG4gIHJldHVybiBnZXRDb2RlYyhlbmNvZGluZykuZW5jb2RlKGFycmF5KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nXG4iLCIndXNlIHN0cmljdCdcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG4vLyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxXG5cbmZ1bmN0aW9uIGNoZWNrVUludDUzIChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTUFYX1NBRkVfSU5URUdFUiB8fCBuICUgMSAhPT0gMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZhbHVlIG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIGVuY29kZSAobnVtYmVyLCBidWZmZXIsIG9mZnNldCkge1xuICBjaGVja1VJbnQ1MyhudW1iZXIpXG5cbiAgaWYgKCFidWZmZXIpIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShlbmNvZGluZ0xlbmd0aChudW1iZXIpKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWZmZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICghb2Zmc2V0KSBvZmZzZXQgPSAwXG5cbiAgLy8gOCBiaXRcbiAgaWYgKG51bWJlciA8IDB4ZmQpIHtcbiAgICBidWZmZXIud3JpdGVVSW50OChudW1iZXIsIG9mZnNldClcbiAgICBlbmNvZGUuYnl0ZXMgPSAxXG5cbiAgLy8gMTYgYml0XG4gIH0gZWxzZSBpZiAobnVtYmVyIDw9IDB4ZmZmZikge1xuICAgIGJ1ZmZlci53cml0ZVVJbnQ4KDB4ZmQsIG9mZnNldClcbiAgICBidWZmZXIud3JpdGVVSW50MTZMRShudW1iZXIsIG9mZnNldCArIDEpXG4gICAgZW5jb2RlLmJ5dGVzID0gM1xuXG4gIC8vIDMyIGJpdFxuICB9IGVsc2UgaWYgKG51bWJlciA8PSAweGZmZmZmZmZmKSB7XG4gICAgYnVmZmVyLndyaXRlVUludDgoMHhmZSwgb2Zmc2V0KVxuICAgIGJ1ZmZlci53cml0ZVVJbnQzMkxFKG51bWJlciwgb2Zmc2V0ICsgMSlcbiAgICBlbmNvZGUuYnl0ZXMgPSA1XG5cbiAgLy8gNjQgYml0XG4gIH0gZWxzZSB7XG4gICAgYnVmZmVyLndyaXRlVUludDgoMHhmZiwgb2Zmc2V0KVxuICAgIGJ1ZmZlci53cml0ZVVJbnQzMkxFKG51bWJlciA+Pj4gMCwgb2Zmc2V0ICsgMSlcbiAgICBidWZmZXIud3JpdGVVSW50MzJMRSgobnVtYmVyIC8gMHgxMDAwMDAwMDApIHwgMCwgb2Zmc2V0ICsgNSlcbiAgICBlbmNvZGUuYnl0ZXMgPSA5XG4gIH1cblxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGRlY29kZSAoYnVmZmVyLCBvZmZzZXQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmZmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAoIW9mZnNldCkgb2Zmc2V0ID0gMFxuXG4gIHZhciBmaXJzdCA9IGJ1ZmZlci5yZWFkVUludDgob2Zmc2V0KVxuXG4gIC8vIDggYml0XG4gIGlmIChmaXJzdCA8IDB4ZmQpIHtcbiAgICBkZWNvZGUuYnl0ZXMgPSAxXG4gICAgcmV0dXJuIGZpcnN0XG5cbiAgLy8gMTYgYml0XG4gIH0gZWxzZSBpZiAoZmlyc3QgPT09IDB4ZmQpIHtcbiAgICBkZWNvZGUuYnl0ZXMgPSAzXG4gICAgcmV0dXJuIGJ1ZmZlci5yZWFkVUludDE2TEUob2Zmc2V0ICsgMSlcblxuICAvLyAzMiBiaXRcbiAgfSBlbHNlIGlmIChmaXJzdCA9PT0gMHhmZSkge1xuICAgIGRlY29kZS5ieXRlcyA9IDVcbiAgICByZXR1cm4gYnVmZmVyLnJlYWRVSW50MzJMRShvZmZzZXQgKyAxKVxuXG4gIC8vIDY0IGJpdFxuICB9IGVsc2Uge1xuICAgIGRlY29kZS5ieXRlcyA9IDlcbiAgICB2YXIgbG8gPSBidWZmZXIucmVhZFVJbnQzMkxFKG9mZnNldCArIDEpXG4gICAgdmFyIGhpID0gYnVmZmVyLnJlYWRVSW50MzJMRShvZmZzZXQgKyA1KVxuICAgIHZhciBudW1iZXIgPSBoaSAqIDB4MDEwMDAwMDAwMCArIGxvXG4gICAgY2hlY2tVSW50NTMobnVtYmVyKVxuXG4gICAgcmV0dXJuIG51bWJlclxuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kaW5nTGVuZ3RoIChudW1iZXIpIHtcbiAgY2hlY2tVSW50NTMobnVtYmVyKVxuXG4gIHJldHVybiAoXG4gICAgbnVtYmVyIDwgMHhmZCA/IDFcbiAgICAgIDogbnVtYmVyIDw9IDB4ZmZmZiA/IDNcbiAgICAgICAgOiBudW1iZXIgPD0gMHhmZmZmZmZmZiA/IDVcbiAgICAgICAgICA6IDlcbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZW5jb2RlOiBlbmNvZGUsIGRlY29kZTogZGVjb2RlLCBlbmNvZGluZ0xlbmd0aDogZW5jb2RpbmdMZW5ndGggfVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0cy5UZXh0RW5jb2RlciA9XG4gIHR5cGVvZiBUZXh0RW5jb2RlciAhPT0gXCJ1bmRlZmluZWRcIiA/IFRleHRFbmNvZGVyIDogcmVxdWlyZShcInV0aWxcIikuVGV4dEVuY29kZXJcblxuZXhwb3J0cy5UZXh0RGVjb2RlciA9XG4gIHR5cGVvZiBUZXh0RGVjb2RlciAhPT0gXCJ1bmRlZmluZWRcIiA/IFRleHREZWNvZGVyIDogcmVxdWlyZShcInV0aWxcIikuVGV4dERlY29kZXJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKGdsb2JhbC5XSEFUV0dGZXRjaCA9IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBnbG9iYWwgPVxuICAgICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCk7XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBnbG9iYWwsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIGdsb2JhbCAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOlxuICAgICAgJ0ZpbGVSZWFkZXInIGluIGdsb2JhbCAmJlxuICAgICAgJ0Jsb2InIGluIGdsb2JhbCAmJlxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5ldyBCbG9iKCk7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIGdsb2JhbCxcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBnbG9iYWxcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+IV0vaS50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZTogXCInICsgbmFtZSArICdcIicpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV07XG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlICsgJywgJyArIHZhbHVlIDogdmFsdWU7XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpdGVtcy5wdXNoKG5hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGl0ZW1zLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfTtcblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgIH07XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpO1xuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpO1xuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSk7XG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgLypcbiAgICAgICAgZmV0Y2gtbW9jayB3cmFwcyB0aGUgUmVzcG9uc2Ugb2JqZWN0IGluIGFuIEVTNiBQcm94eSB0b1xuICAgICAgICBwcm92aWRlIHVzZWZ1bCB0ZXN0IGhhcm5lc3MgZmVhdHVyZXMgc3VjaCBhcyBmbHVzaC4gSG93ZXZlciwgb25cbiAgICAgICAgRVM1IGJyb3dzZXJzIHdpdGhvdXQgZmV0Y2ggb3IgUHJveHkgc3VwcG9ydCBwb2xseWZpbGxzIG11c3QgYmUgdXNlZDtcbiAgICAgICAgdGhlIHByb3h5LXBvbGx5ZmlsbCBpcyB1bmFibGUgdG8gcHJveHkgYW4gYXR0cmlidXRlIHVubGVzcyBpdCBleGlzdHNcbiAgICAgICAgb24gdGhlIG9iamVjdCBiZWZvcmUgdGhlIFByb3h5IGlzIGNyZWF0ZWQuIFRoaXMgY2hhbmdlIGVuc3VyZXNcbiAgICAgICAgUmVzcG9uc2UuYm9keVVzZWQgZXhpc3RzIG9uIHRoZSBpbnN0YW5jZSwgd2hpbGUgbWFpbnRhaW5pbmcgdGhlXG4gICAgICAgIHNlbWFudGljIG9mIHNldHRpbmcgUmVxdWVzdC5ib2R5VXNlZCBpbiB0aGUgY29uc3RydWN0b3IgYmVmb3JlXG4gICAgICAgIF9pbml0Qm9keSBpcyBjYWxsZWQuXG4gICAgICAqL1xuICAgICAgdGhpcy5ib2R5VXNlZCA9IHRoaXMuYm9keVVzZWQ7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHZhciBpc0NvbnN1bWVkID0gY29uc3VtZWQodGhpcyk7XG4gICAgICAgICAgaWYgKGlzQ29uc3VtZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0NvbnN1bWVkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpcy5fYm9keUFycmF5QnVmZmVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCxcbiAgICAgICAgICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIuYnl0ZU9mZnNldCArIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlTGVuZ3RoXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVxdWVzdCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG5cbiAgICBpZiAodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICAgIGlmIChvcHRpb25zLmNhY2hlID09PSAnbm8tc3RvcmUnIHx8IG9wdGlvbnMuY2FjaGUgPT09ICduby1jYWNoZScpIHtcbiAgICAgICAgLy8gU2VhcmNoIGZvciBhICdfJyBwYXJhbWV0ZXIgaW4gdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgICB2YXIgcmVQYXJhbVNlYXJjaCA9IC8oWz8mXSlfPVteJl0qLztcbiAgICAgICAgaWYgKHJlUGFyYW1TZWFyY2gudGVzdCh0aGlzLnVybCkpIHtcbiAgICAgICAgICAvLyBJZiBpdCBhbHJlYWR5IGV4aXN0cyB0aGVuIHNldCB0aGUgdmFsdWUgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5yZXBsYWNlKHJlUGFyYW1TZWFyY2gsICckMV89JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGEgbmV3ICdfJyBwYXJhbWV0ZXIgdG8gdGhlIGVuZCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgICB2YXIgcmVRdWVyeVN0cmluZyA9IC9cXD8vO1xuICAgICAgICAgIHRoaXMudXJsICs9IChyZVF1ZXJ5U3RyaW5nLnRlc3QodGhpcy51cmwpID8gJyYnIDogJz8nKSArICdfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG4gIH07XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGJvZHlcbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdCgnJicpXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpO1xuICAgICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIFJlcGxhY2UgaW5zdGFuY2VzIG9mIFxcclxcbiBhbmQgXFxuIGZvbGxvd2VkIGJ5IGF0IGxlYXN0IG9uZSBzcGFjZSBvciBob3Jpem9udGFsIHRhYiB3aXRoIGEgc3BhY2VcbiAgICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICAgIHZhciBwcmVQcm9jZXNzZWRIZWFkZXJzID0gcmF3SGVhZGVycy5yZXBsYWNlKC9cXHI/XFxuW1xcdCBdKy9nLCAnICcpO1xuICAgIC8vIEF2b2lkaW5nIHNwbGl0IHZpYSByZWdleCB0byB3b3JrIGFyb3VuZCBhIGNvbW1vbiBJRTExIGJ1ZyB3aXRoIHRoZSBjb3JlLWpzIDMuNi4wIHJlZ2V4IHBvbHlmaWxsXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaC9pc3N1ZXMvNzQ4XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzc1MVxuICAgIHByZVByb2Nlc3NlZEhlYWRlcnNcbiAgICAgIC5zcGxpdCgnXFxyJylcbiAgICAgIC5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIuaW5kZXhPZignXFxuJykgPT09IDAgPyBoZWFkZXIuc3Vic3RyKDEsIGhlYWRlci5sZW5ndGgpIDogaGVhZGVyXG4gICAgICB9KVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCc7XG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQgPT09IHVuZGVmaW5lZCA/ICcnIDogJycgKyBvcHRpb25zLnN0YXR1c1RleHQ7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnO1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KTtcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpO1xuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH07XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJztcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfTtcblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF07XG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfTtcblxuICBleHBvcnRzLkRPTUV4Y2VwdGlvbiA9IGdsb2JhbC5ET01FeGNlcHRpb247XG4gIHRyeSB7XG4gICAgbmV3IGV4cG9ydHMuRE9NRXhjZXB0aW9uKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gZnVuY3Rpb24obWVzc2FnZSwgbmFtZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKTtcbiAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICB9O1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgICBleHBvcnRzLkRPTUV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBleHBvcnRzLkRPTUV4Y2VwdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IGV4cG9ydHMuRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICAgIH1cblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICBmdW5jdGlvbiBhYm9ydFhocigpIHtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJyk7XG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBmaXhVcmwodXJsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHVybCA9PT0gJycgJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYgPyBnbG9iYWwubG9jYXRpb24uaHJlZiA6IHVybFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHVybFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCBmaXhVcmwocmVxdWVzdC51cmwpLCB0cnVlKTtcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ29taXQnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhocikge1xuICAgICAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBzdXBwb3J0LmFycmF5QnVmZmVyICYmXG4gICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgJiZcbiAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmRleE9mKCdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKSAhPT0gLTFcbiAgICAgICAgKSB7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluaXQgJiYgdHlwZW9mIGluaXQuaGVhZGVycyA9PT0gJ29iamVjdCcgJiYgIShpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSkge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpbml0LmhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG5vcm1hbGl6ZVZhbHVlKGluaXQuaGVhZGVyc1tuYW1lXSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsKSB7XG4gICAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBET05FIChzdWNjZXNzIG9yIGZhaWx1cmUpXG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpO1xuICAgIH0pXG4gIH1cblxuICBmZXRjaC5wb2x5ZmlsbCA9IHRydWU7XG5cbiAgaWYgKCFnbG9iYWwuZmV0Y2gpIHtcbiAgICBnbG9iYWwuZmV0Y2ggPSBmZXRjaDtcbiAgICBnbG9iYWwuSGVhZGVycyA9IEhlYWRlcnM7XG4gICAgZ2xvYmFsLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIGdsb2JhbC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICB9XG5cbiAgZXhwb3J0cy5IZWFkZXJzID0gSGVhZGVycztcbiAgZXhwb3J0cy5SZXF1ZXN0ID0gUmVxdWVzdDtcbiAgZXhwb3J0cy5SZXNwb25zZSA9IFJlc3BvbnNlO1xuICBleHBvcnRzLmZldGNoID0gZmV0Y2g7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiIsInZhciBiczU4Y2hlY2sgPSByZXF1aXJlKCdiczU4Y2hlY2snKVxuXG5mdW5jdGlvbiBkZWNvZGVSYXcgKGJ1ZmZlciwgdmVyc2lvbikge1xuICAvLyBjaGVjayB2ZXJzaW9uIG9ubHkgaWYgZGVmaW5lZFxuICBpZiAodmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIGJ1ZmZlclswXSAhPT0gdmVyc2lvbikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG5ldHdvcmsgdmVyc2lvbicpXG5cbiAgLy8gdW5jb21wcmVzc2VkXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAzMykge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiBidWZmZXJbMF0sXG4gICAgICBwcml2YXRlS2V5OiBidWZmZXIuc2xpY2UoMSwgMzMpLFxuICAgICAgY29tcHJlc3NlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBpbnZhbGlkIGxlbmd0aFxuICBpZiAoYnVmZmVyLmxlbmd0aCAhPT0gMzQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBXSUYgbGVuZ3RoJylcblxuICAvLyBpbnZhbGlkIGNvbXByZXNzaW9uIGZsYWdcbiAgaWYgKGJ1ZmZlclszM10gIT09IDB4MDEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb21wcmVzc2lvbiBmbGFnJylcblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246IGJ1ZmZlclswXSxcbiAgICBwcml2YXRlS2V5OiBidWZmZXIuc2xpY2UoMSwgMzMpLFxuICAgIGNvbXByZXNzZWQ6IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVSYXcgKHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBCdWZmZXIoY29tcHJlc3NlZCA/IDM0IDogMzMpXG5cbiAgcmVzdWx0LndyaXRlVUludDgodmVyc2lvbiwgMClcbiAgcHJpdmF0ZUtleS5jb3B5KHJlc3VsdCwgMSlcblxuICBpZiAoY29tcHJlc3NlZCkge1xuICAgIHJlc3VsdFszM10gPSAweDAxXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nLCB2ZXJzaW9uKSB7XG4gIHJldHVybiBkZWNvZGVSYXcoYnM1OGNoZWNrLmRlY29kZShzdHJpbmcpLCB2ZXJzaW9uKVxufVxuXG5mdW5jdGlvbiBlbmNvZGUgKHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpIHtcbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnbnVtYmVyJykgcmV0dXJuIGJzNThjaGVjay5lbmNvZGUoZW5jb2RlUmF3KHZlcnNpb24sIHByaXZhdGVLZXksIGNvbXByZXNzZWQpKVxuXG4gIHJldHVybiBiczU4Y2hlY2suZW5jb2RlKFxuICAgIGVuY29kZVJhdyhcbiAgICAgIHZlcnNpb24udmVyc2lvbixcbiAgICAgIHZlcnNpb24ucHJpdmF0ZUtleSxcbiAgICAgIHZlcnNpb24uY29tcHJlc3NlZFxuICAgIClcbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVjb2RlOiBkZWNvZGUsXG4gIGRlY29kZVJhdzogZGVjb2RlUmF3LFxuICBlbmNvZGU6IGVuY29kZSxcbiAgZW5jb2RlUmF3OiBlbmNvZGVSYXdcbn1cbiIsImV4cG9ydCBjb25zdCBBVVRPX0xPQ0tfVElNRU9VVF9BTEFSTSA9ICdBVVRPX0xPQ0tfVElNRU9VVF9BTEFSTSc7XHJcbmV4cG9ydCBjb25zdCBNRVRBTUVUUklDU19GSU5BTElaRV9FVkVOVF9GUkFHTUVOVF9BTEFSTSA9XHJcbiAgJ01FVEFNRVRSSUNTX0ZJTkFMSVpFX0VWRU5UX0ZSQUdNRU5UX0FMQVJNJztcclxuIiwiaW1wb3J0IHsgU0VDT05EIH0gZnJvbSAnLi90aW1lJztcclxuXHJcbmV4cG9ydCBjb25zdCBGQUxMQkFDS19TTUFSVF9UUkFOU0FDVElPTlNfUkVGUkVTSF9USU1FID0gU0VDT05EICogMTA7XHJcbmV4cG9ydCBjb25zdCBGQUxMQkFDS19TTUFSVF9UUkFOU0FDVElPTlNfREVBRExJTkUgPSAxODA7XHJcbmV4cG9ydCBjb25zdCBGQUxMQkFDS19TTUFSVF9UUkFOU0FDVElPTlNfTUFYX0ZFRV9NVUxUSVBMSUVSID0gMjtcclxuIiwiZXhwb3J0IGNvbnN0IEFDVElPTl9RVUVVRV9NRVRSSUNTX0UyRV9URVNUID0gJ2FjdGlvbl9xdWV1ZV9tZXRyaWNzX2UyZV90ZXN0JztcclxuIiwiLyoqXHJcbiAqIEBmaWxlIFRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIHdlYiBleHRlbnNpb24gc2luZ2xldG9uIHByb2Nlc3MuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xyXG5pbXBvcnQgZW5kT2ZTdHJlYW0gZnJvbSAnZW5kLW9mLXN0cmVhbSc7XHJcbmltcG9ydCBwdW1wIGZyb20gJ3B1bXAnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2Utc3RyZWFtJztcclxuaW1wb3J0IGxvZyBmcm9tICdsb2dsZXZlbCc7XHJcbmltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IHN0b3JlQXNTdHJlYW0gfSBmcm9tICdAbWV0YW1hc2svb2JzLXN0b3JlJztcclxuXG5pbXBvcnQgUG9ydFN0cmVhbSBmcm9tICdleHRlbnNpb24tcG9ydC1zdHJlYW0nO1xyXG5cclxuaW1wb3J0IHsgZXRoRXJyb3JzIH0gZnJvbSAnZXRoLXJwYy1lcnJvcnMnO1xyXG5pbXBvcnQge1xyXG4gIEVOVklST05NRU5UX1RZUEVfUE9QVVAsXHJcbiAgRU5WSVJPTk1FTlRfVFlQRV9OT1RJRklDQVRJT04sXHJcbiAgRU5WSVJPTk1FTlRfVFlQRV9GVUxMU0NSRUVOLFxyXG4gIEVYVEVOU0lPTl9NRVNTQUdFUyxcclxuICBQTEFURk9STV9GSVJFRk9YLFxyXG59IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwJztcclxuaW1wb3J0IHtcclxuICBSRUpFQ1RfTk9USUZJQ0FUSU9OX0NMT1NFLFxyXG4gIFJFSkVDVF9OT1RJRklDQVRJT05fQ0xPU0VfU0lHLFxyXG4gIE1ldGFNZXRyaWNzRXZlbnRDYXRlZ29yeSxcclxuICBNZXRhTWV0cmljc0V2ZW50TmFtZSxcclxuICBNZXRhTWV0cmljc1VzZXJUcmFpdCxcclxufSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL21ldGFtZXRyaWNzJztcclxuaW1wb3J0IHsgY2hlY2tGb3JMYXN0RXJyb3JBbmRMb2cgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kdWxlcy9icm93c2VyLXJ1bnRpbWUudXRpbHMnO1xyXG5pbXBvcnQgeyBpc01hbmlmZXN0VjMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kdWxlcy9tdjMudXRpbHMnO1xyXG5pbXBvcnQgeyBtYXNrT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZHVsZXMvb2JqZWN0LnV0aWxzJztcclxuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnRUeXBlLCBkZWZlcnJlZFByb21pc2UsIGdldFBsYXRmb3JtIH0gZnJvbSAnLi9saWIvdXRpbCc7XHJcbmltcG9ydCBtaWdyYXRpb25zIGZyb20gJy4vbWlncmF0aW9ucyc7XHJcbmltcG9ydCBNaWdyYXRvciBmcm9tICcuL2xpYi9taWdyYXRvcic7XHJcbmltcG9ydCBFeHRlbnNpb25QbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3Jtcy9leHRlbnNpb24nO1xyXG5pbXBvcnQgTG9jYWxTdG9yZSBmcm9tICcuL2xpYi9sb2NhbC1zdG9yZSc7XHJcbmltcG9ydCBSZWFkT25seU5ldHdvcmtTdG9yZSBmcm9tICcuL2xpYi9uZXR3b3JrLXN0b3JlJztcclxuaW1wb3J0IHsgU0VOVFJZX1NUQVRFIH0gZnJvbSAnLi9saWIvc2V0dXBTZW50cnknO1xyXG5cclxuaW1wb3J0IGNyZWF0ZVN0cmVhbVNpbmsgZnJvbSAnLi9saWIvY3JlYXRlU3RyZWFtU2luayc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25NYW5hZ2VyLCB7XHJcbiAgTk9USUZJQ0FUSU9OX01BTkFHRVJfRVZFTlRTLFxyXG59IGZyb20gJy4vbGliL25vdGlmaWNhdGlvbi1tYW5hZ2VyJztcclxuaW1wb3J0IE1ldGFtYXNrQ29udHJvbGxlciwge1xyXG4gIE1FVEFNQVNLX0NPTlRST0xMRVJfRVZFTlRTLFxyXG59IGZyb20gJy4vbWV0YW1hc2stY29udHJvbGxlcic7XHJcbmltcG9ydCByYXdGaXJzdFRpbWVTdGF0ZSBmcm9tICcuL2ZpcnN0LXRpbWUtc3RhdGUnO1xyXG5pbXBvcnQgZ2V0Rmlyc3RQcmVmZXJyZWRMYW5nQ29kZSBmcm9tICcuL2xpYi9nZXQtZmlyc3QtcHJlZmVycmVkLWxhbmctY29kZSc7XHJcbmltcG9ydCBnZXRPYmpTdHJ1Y3R1cmUgZnJvbSAnLi9saWIvZ2V0T2JqU3RydWN0dXJlJztcclxuaW1wb3J0IHNldHVwRW5zSXBmc1Jlc29sdmVyIGZyb20gJy4vbGliL2Vucy1pcGZzL3NldHVwJztcclxuXHJcbi8qIGVzbGludC1lbmFibGUgaW1wb3J0L2ZpcnN0ICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvb3JkZXIgKi9cclxuXG4vKiBlc2xpbnQtZW5hYmxlIGltcG9ydC9vcmRlciAqL1xyXG5cclxuY29uc3QgeyBzZW50cnkgfSA9IGdsb2JhbDtcclxuY29uc3QgZmlyc3RUaW1lU3RhdGUgPSB7IC4uLnJhd0ZpcnN0VGltZVN0YXRlIH07XHJcblxyXG5jb25zdCBtZXRhbWFza0ludGVybmFsUHJvY2Vzc0hhc2ggPSB7XHJcbiAgW0VOVklST05NRU5UX1RZUEVfUE9QVVBdOiB0cnVlLFxyXG4gIFtFTlZJUk9OTUVOVF9UWVBFX05PVElGSUNBVElPTl06IHRydWUsXHJcbiAgW0VOVklST05NRU5UX1RZUEVfRlVMTFNDUkVFTl06IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBtZXRhbWFza0Jsb2NrZWRQb3J0cyA9IFsndHJlem9yLWNvbm5lY3QnXTtcclxuXHJcbmxvZy5zZXREZWZhdWx0TGV2ZWwocHJvY2Vzcy5lbnYuTUVUQU1BU0tfREVCVUcgPyAnZGVidWcnIDogJ2luZm8nKTtcclxuXHJcbmNvbnN0IHBsYXRmb3JtID0gbmV3IEV4dGVuc2lvblBsYXRmb3JtKCk7XHJcbmNvbnN0IG5vdGlmaWNhdGlvbk1hbmFnZXIgPSBuZXcgTm90aWZpY2F0aW9uTWFuYWdlcigpO1xyXG5cclxubGV0IHBvcHVwSXNPcGVuID0gZmFsc2U7XHJcbmxldCBub3RpZmljYXRpb25Jc09wZW4gPSBmYWxzZTtcclxubGV0IHVpSXNUcmlnZ2VyaW5nID0gZmFsc2U7XHJcbmNvbnN0IG9wZW5NZXRhbWFza1RhYnNJRHMgPSB7fTtcclxuY29uc3Qgb3Blbk1ldGFtYXNrQ29ubmVjdGlvbnMgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IHJlcXVlc3RBY2NvdW50VGFiSWRzID0ge307XHJcbmxldCBjb250cm9sbGVyO1xyXG5cclxuLy8gc3RhdGUgcGVyc2lzdGVuY2VcclxuY29uc3QgaW5UZXN0ID0gcHJvY2Vzcy5lbnYuSU5fVEVTVDtcclxuY29uc3QgbG9jYWxTdG9yZSA9IGluVGVzdCA/IG5ldyBSZWFkT25seU5ldHdvcmtTdG9yZSgpIDogbmV3IExvY2FsU3RvcmUoKTtcclxubGV0IHZlcnNpb25lZERhdGE7XHJcblxyXG5pZiAoaW5UZXN0IHx8IHByb2Nlc3MuZW52Lk1FVEFNQVNLX0RFQlVHKSB7XHJcbiAgZ2xvYmFsLnN0YXRlSG9va3MubWV0YW1hc2tHZXRTdGF0ZSA9IGxvY2FsU3RvcmUuZ2V0LmJpbmQobG9jYWxTdG9yZSk7XHJcbn1cclxuXHJcbmNvbnN0IHBoaXNoaW5nUGFnZVVybCA9IG5ldyBVUkwocHJvY2Vzcy5lbnYuUEhJU0hJTkdfV0FSTklOR19QQUdFX1VSTCk7XHJcblxyXG5jb25zdCBPTkVfU0VDT05EX0lOX01JTExJU0VDT05EUyA9IDFfMDAwO1xyXG4vLyBUaW1lb3V0IGZvciBpbml0aWFsaXppbmcgcGhpc2hpbmcgd2FybmluZyBwYWdlLlxyXG5jb25zdCBQSElTSElOR19XQVJOSU5HX1BBR0VfVElNRU9VVCA9IE9ORV9TRUNPTkRfSU5fTUlMTElTRUNPTkRTO1xyXG5cclxuY29uc3QgQUNLX0tFRVBfQUxJVkVfTUVTU0FHRSA9ICdBQ0tfS0VFUF9BTElWRV9NRVNTQUdFJztcclxuY29uc3QgV09SS0VSX0tFRVBfQUxJVkVfTUVTU0FHRSA9ICdXT1JLRVJfS0VFUF9BTElWRV9NRVNTQUdFJztcclxuXHJcblxuXHJcbi8vIEV2ZW50IGVtaXR0ZXIgZm9yIHN0YXRlIHBlcnNpc3RlbmNlXHJcbmV4cG9ydCBjb25zdCBzdGF0ZVBlcnNpc3RlbmNlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGVmZXJyZWQgUHJvbWlzZSBpcyB1c2VkIHRvIHRyYWNrIHdoZXRoZXIgaW5pdGlhbGl6YXRpb24gaGFzIGZpbmlzaGVkLlxyXG4gKlxyXG4gKiBJdCBpcyB2ZXJ5IGltcG9ydGFudCB0byBlbnN1cmUgdGhhdCBgcmVzb2x2ZUluaXRpYWxpemF0aW9uYCBpcyAqYWx3YXlzKlxyXG4gKiBjYWxsZWQgb25jZSBpbml0aWFsaXphdGlvbiBoYXMgY29tcGxldGVkLCBhbmQgdGhhdCBgcmVqZWN0SW5pdGlhbGl6YXRpb25gIGlzXHJcbiAqIGNhbGxlZCBpZiBpbml0aWFsaXphdGlvbiBmYWlscyBpbiBhbiB1bnJlY292ZXJhYmxlIHdheS5cclxuICovXHJcbmNvbnN0IHtcclxuICBwcm9taXNlOiBpc0luaXRpYWxpemVkLFxyXG4gIHJlc29sdmU6IHJlc29sdmVJbml0aWFsaXphdGlvbixcclxuICByZWplY3Q6IHJlamVjdEluaXRpYWxpemF0aW9uLFxyXG59ID0gZGVmZXJyZWRQcm9taXNlKCk7XHJcblxyXG4vKipcclxuICogU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBkYXBwKHMpIGNvbnRlbnQgc2NyaXB0IHRvIHNpZ25hbCBpdCBjYW4gY29ubmVjdCB0byBNZXRhTWFzayBiYWNrZ3JvdW5kIGFzXHJcbiAqIHRoZSBiYWNrZW5kIGlzIG5vdCBhY3RpdmUuIEl0IGlzIHJlcXVpcmVkIHRvIHJlLWNvbm5lY3QgZGFwcHMgYWZ0ZXIgc2VydmljZSB3b3JrZXIgcmUtYWN0aXZhdGVzLlxyXG4gKiBGb3Igbm9uLWRhcHAgcGFnZXMsIHRoZSBtZXNzYWdlIHdpbGwgYmUgc2VudCBhbmQgaWdub3JlZC5cclxuICovXHJcbmNvbnN0IHNlbmRSZWFkeU1lc3NhZ2VUb1RhYnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFic1xyXG4gICAgLnF1ZXJ5KHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIE9ubHkgcXVlcnkgdGFicyB0aGF0IG91ciBleHRlbnNpb24gY2FuIHJ1biBpbi4gVG8gZG8gdGhpcywgd2UgcXVlcnkgZm9yIGFsbCBVUkxzIHRoYXQgb3VyXHJcbiAgICAgICAqIGV4dGVuc2lvbiBjYW4gaW5qZWN0IHNjcmlwdHMgaW4sIHdoaWNoIGlzIGJ5IHVzaW5nIHRoZSBcIjxhbGxfdXJscz5cIiB2YWx1ZSBhbmQgX193aXRob3V0X19cclxuICAgICAgICogdGhlIFwidGFic1wiIG1hbmlmZXN0IHBlcm1pc3Npb24uIElmIHdlIGluY2x1ZGVkIHRoZSBcInRhYnNcIiBwZXJtaXNzaW9uLCB0aGlzIHdvdWxkIGFsc28gZmV0Y2hcclxuICAgICAgICogVVJMcyB0aGF0IHdlJ2Qgbm90IGJlIGFibGUgdG8gaW5qZWN0IGluLCBlLmcuIGNocm9tZTovL3BhZ2VzLCBjaHJvbWU6Ly9leHRlbnNpb24sIHdoaWNoXHJcbiAgICAgICAqIGlzIG5vdCB3aGF0IHdlJ2Qgd2FudC5cclxuICAgICAgICpcclxuICAgICAgICogWW91IG1pZ2h0IGJlIHdvbmRlcmluZywgaG93IGRvZXMgdGhlIFwidXJsXCIgcGFyYW0gd29yayB3aXRob3V0IHRoZSBcInRhYnNcIiBwZXJtaXNzaW9uP1xyXG4gICAgICAgKlxyXG4gICAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02NjEzMTEjYzF9XHJcbiAgICAgICAqICBcIklmIHRoZSBleHRlbnNpb24gaGFzIGFjY2VzcyB0byBpbmplY3Qgc2NyaXB0cyBpbnRvIFRhYiwgdGhlbiB3ZSBjYW4gcmV0dXJuIHRoZSB1cmxcclxuICAgICAgICogICBvZiBUYWIgKGJlY2F1c2UgdGhlIGV4dGVuc2lvbiBjb3VsZCBqdXN0IGluamVjdCBhIHNjcmlwdCB0byBtZXNzYWdlIHRoZSBsb2NhdGlvbi5ocmVmKS5cIlxyXG4gICAgICAgKi9cclxuICAgICAgdXJsOiAnPGFsbF91cmxzPicsXHJcbiAgICAgIHdpbmRvd1R5cGU6ICdub3JtYWwnLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgY2hlY2tGb3JMYXN0RXJyb3JBbmRMb2coKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBjaGVja0Zvckxhc3RFcnJvckFuZExvZygpO1xyXG4gICAgfSk7XHJcblxyXG4gIC8qKiBAdG9kbyB3ZSBzaG91bGQgb25seSBzZW5kTWVzc2FnZSB0byBkYXBwIHRhYnMsIG5vdCBhbGwgdGFicy4gKi9cclxuICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcbiAgICBicm93c2VyLnRhYnNcclxuICAgICAgLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xyXG4gICAgICAgIG5hbWU6IEVYVEVOU0lPTl9NRVNTQUdFUy5SRUFEWSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrRm9yTGFzdEVycm9yQW5kTG9nKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgbWF5IGhhcHBlbiBpZiB0aGUgY29udGVudHNjcmlwdCBpcyBibG9ja2VkIGZyb20gbG9hZGluZyxcclxuICAgICAgICAvLyBhbmQgdGh1cyB0aGVyZSBpcyBubyBydW50aW1lLm9uTWVzc2FnZSBoYW5kbGVyIHRvIGxpc3RlbiB0byB0aGUgbWVzc2FnZS5cclxuICAgICAgICBjaGVja0Zvckxhc3RFcnJvckFuZExvZygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBUaGVzZSBhcmUgc2V0IGFmdGVyIGluaXRpYWxpemF0aW9uXHJcbmxldCBjb25uZWN0UmVtb3RlO1xyXG5sZXQgY29ubmVjdEV4dGVybmFsO1xyXG5cclxuYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihhc3luYyAoLi4uYXJncykgPT4ge1xyXG4gIC8vIFF1ZXVlIHVwIGNvbm5lY3Rpb24gYXR0ZW1wdHMgaGVyZSwgd2FpdGluZyB1bnRpbCBhZnRlciBpbml0aWFsaXphdGlvblxyXG4gIGF3YWl0IGlzSW5pdGlhbGl6ZWQ7XHJcbiAgY29uc3QgcmVtb3RlUG9ydCA9IGFyZ3NbMF07XHJcbiAgY29uc3QgeyBzZW5kZXIgfSA9IHJlbW90ZVBvcnQ7XHJcblxyXG4gIGNvbnN0IHVybCA9IHNlbmRlcj8udXJsO1xyXG4gIGNvbnN0IGRldGVjdGVkUHJvY2Vzc05hbWUgPSB1cmwgPyBnZXRFbnZpcm9ubWVudFR5cGUodXJsKSA6ICcnO1xyXG5cclxuICBjb25zdCBjb25uZWN0aW9uSWQgPSBnZW5lcmF0ZUNvbm5lY3Rpb25JZChyZW1vdGVQb3J0LCBkZXRlY3RlZFByb2Nlc3NOYW1lKTtcclxuICBjb25zdCBvcGVuQ29ubmVjdGlvbnMgPSBvcGVuTWV0YW1hc2tDb25uZWN0aW9ucy5nZXQoY29ubmVjdGlvbklkKSB8fCAwO1xyXG5cclxuICBpZiAoXHJcbiAgICBvcGVuQ29ubmVjdGlvbnMgPT09IDAgfHxcclxuICAgIChkZXRlY3RlZFByb2Nlc3NOYW1lID09PSAnYmFja2dyb3VuZCcgJiYgb3BlbkNvbm5lY3Rpb25zIDwgMilcclxuICAgIC8vIDIgYmFja2dyb3VuZCBjb25uZWN0aW9ucyBhcmUgYWxsb3dlZCwgb25lIGZvciBwaGlzaGluZyB3YXJuaW5nIHBhZ2UgYW5kIG9uZSBmb3IgdGhlIGxlZGdlciBicmlkZ2Uga2V5cmluZ1xyXG4gICkge1xyXG4gICAgLy8gVGhpcyBpcyBzZXQgaW4gYHNldHVwQ29udHJvbGxlcmAsIHdoaWNoIGlzIGNhbGxlZCBhcyBwYXJ0IG9mIGluaXRpYWxpemF0aW9uXHJcbiAgICBjb25uZWN0UmVtb3RlKC4uLmFyZ3MpO1xyXG4gICAgb3Blbk1ldGFtYXNrQ29ubmVjdGlvbnMuc2V0KGNvbm5lY3Rpb25JZCwgb3BlbkNvbm5lY3Rpb25zICsgMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ09OTkVDVElPTl9BTFJFQURZX0VYSVNUUycpO1xyXG4gIH1cclxufSk7XHJcblxyXG5icm93c2VyLnJ1bnRpbWUub25Db25uZWN0RXh0ZXJuYWwuYWRkTGlzdGVuZXIoYXN5bmMgKC4uLmFyZ3MpID0+IHtcclxuICAvLyBRdWV1ZSB1cCBjb25uZWN0aW9uIGF0dGVtcHRzIGhlcmUsIHdhaXRpbmcgdW50aWwgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICBhd2FpdCBpc0luaXRpYWxpemVkO1xyXG5cclxuICAvLyBUaGlzIGlzIHNldCBpbiBgc2V0dXBDb250cm9sbGVyYCwgd2hpY2ggaXMgY2FsbGVkIGFzIHBhcnQgb2YgaW5pdGlhbGl6YXRpb25cclxuICBjb25uZWN0RXh0ZXJuYWwoLi4uYXJncyk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvdHJhbnNhY3Rpb24nKS5UcmFuc2FjdGlvbk1ldGF9IFRyYW5zYWN0aW9uTWV0YVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGF0YSBlbWl0dGVkIGZyb20gdGhlIE1ldGFNYXNrQ29udHJvbGxlci5zdG9yZSBFdmVudEVtaXR0ZXIsIGFsc28gdXNlZCB0byBpbml0aWFsaXplIHRoZSBNZXRhTWFza0NvbnRyb2xsZXIuIEF2YWlsYWJsZSBpbiBVSSBvbiBSZWFjdCBzdGF0ZSBhcyBzdGF0ZS5tZXRhbWFzay5cclxuICpcclxuICogQHR5cGVkZWYgTWV0YU1hc2tTdGF0ZVxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzSW5pdGlhbGl6ZWQgLSBXaGV0aGVyIHRoZSBmaXJzdCB2YXVsdCBoYXMgYmVlbiBjcmVhdGVkLlxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzVW5sb2NrZWQgLSBXaGV0aGVyIHRoZSB2YXVsdCBpcyBjdXJyZW50bHkgZGVjcnlwdGVkIGFuZCBhY2NvdW50cyBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNBY2NvdW50TWVudU9wZW4gLSBSZXByZXNlbnRzIHdoZXRoZXIgdGhlIG1haW4gYWNjb3VudCBzZWxlY3Rpb24gVUkgaXMgY3VycmVudGx5IGRpc3BsYXllZC5cclxuICogQHByb3BlcnR5IHtib29sZWFufSBpc05ldHdvcmtNZW51T3BlbiAtIFJlcHJlc2VudHMgd2hldGhlciB0aGUgbWFpbiBuZXR3b3JrIHNlbGVjdGlvbiBVSSBpcyBjdXJyZW50bHkgZGlzcGxheWVkLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gaWRlbnRpdGllcyAtIEFuIG9iamVjdCBtYXRjaGluZyBsb3dlci1jYXNlIGhleCBhZGRyZXNzZXMgdG8gSWRlbnRpdHkgb2JqZWN0cyB3aXRoIFwiYWRkcmVzc1wiIGFuZCBcIm5hbWVcIiAobmlja25hbWUpIGtleXMuXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmFwcHJvdmVkVHhzIC0gQW4gb2JqZWN0IG1hcHBpbmcgdHJhbnNhY3Rpb24gaGFzaGVzIHRvIHVuYXBwcm92ZWQgdHJhbnNhY3Rpb25zLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gbmV0d29ya0NvbmZpZ3VyYXRpb25zIC0gQSBsaXN0IG9mIG5ldHdvcmsgY29uZmlndXJhdGlvbnMsIGNvbnRhaW5pbmcgUlBDIHByb3ZpZGVyIGRldGFpbHMgKGVnIGNoYWluSWQsIHJwY1VybCwgcnBjUHJlZmVyZW5jZXMpLlxyXG4gKiBAcHJvcGVydHkge0FycmF5fSBhZGRyZXNzQm9vayAtIEEgbGlzdCBvZiBwcmV2aW91c2x5IHNlbnQgdG8gYWRkcmVzc2VzLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gY29udHJhY3RFeGNoYW5nZVJhdGVzIC0gSW5mbyBhYm91dCBjdXJyZW50IHRva2VuIHByaWNlcy5cclxuICogQHByb3BlcnR5IHtBcnJheX0gdG9rZW5zIC0gVG9rZW5zIGhlbGQgYnkgdGhlIGN1cnJlbnQgdXNlciwgaW5jbHVkaW5nIHRoZWlyIGJhbGFuY2VzLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gc2VuZCAtIFRPRE86IERvY3VtZW50XHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdXNlQmxvY2tpZSAtIEluZGljYXRlcyBwcmVmZXJyZWQgdXNlciBpZGVudGljb24gZm9ybWF0LiBUcnVlIGZvciBibG9ja2llLCBmYWxzZSBmb3IgSmF6emljb24uXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBmZWF0dXJlRmxhZ3MgLSBBbiBvYmplY3QgZm9yIG9wdGlvbmFsIGZlYXR1cmUgZmxhZ3MuXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gd2VsY29tZVNjcmVlbiAtIFRydWUgaWYgd2VsY29tZSBzY3JlZW4gc2hvdWxkIGJlIHNob3duLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudExvY2FsZSAtIEEgbG9jYWxlIHN0cmluZyBtYXRjaGluZyB0aGUgdXNlcidzIHByZWZlcnJlZCBkaXNwbGF5IGxhbmd1YWdlLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gcHJvdmlkZXJDb25maWcgLSBUaGUgY3VycmVudCBzZWxlY3RlZCBuZXR3b3JrIHByb3ZpZGVyLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcHJvdmlkZXJDb25maWcucnBjVXJsIC0gVGhlIGFkZHJlc3MgZm9yIHRoZSBSUEMgQVBJLCBpZiB1c2luZyBhbiBSUEMgQVBJLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcHJvdmlkZXJDb25maWcudHlwZSAtIEFuIGlkZW50aWZpZXIgZm9yIHRoZSB0eXBlIG9mIG5ldHdvcmsgc2VsZWN0ZWQsIGFsbG93cyBNZXRhTWFzayB0byB1c2UgY3VzdG9tIHByb3ZpZGVyIHN0cmF0ZWdpZXMgZm9yIGtub3duIG5ldHdvcmtzLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV0d29ya0lkIC0gVGhlIHN0cmluZ2lmaWVkIG51bWJlciBvZiB0aGUgY3VycmVudCBuZXR3b3JrIElELlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV0d29ya1N0YXR1cyAtIEVpdGhlciBcInVua25vd25cIiwgXCJhdmFpbGFibGVcIiwgXCJ1bmF2YWlsYWJsZVwiLCBvciBcImJsb2NrZWRcIiwgZGVwZW5kaW5nIG9uIHRoZSBzdGF0dXMgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBuZXR3b3JrLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gYWNjb3VudHMgLSBBbiBvYmplY3QgbWFwcGluZyBsb3dlci1jYXNlIGhleCBhZGRyZXNzZXMgdG8gb2JqZWN0cyB3aXRoIFwiYmFsYW5jZVwiIGFuZCBcImFkZHJlc3NcIiBrZXlzLCBib3RoIHN0b3JpbmcgaGV4IHN0cmluZyB2YWx1ZXMuXHJcbiAqIEBwcm9wZXJ0eSB7aGV4fSBjdXJyZW50QmxvY2tHYXNMaW1pdCAtIFRoZSBtb3N0IHJlY2VudGx5IHNlZW4gYmxvY2sgZ2FzIGxpbWl0LCBpbiBhIGxvd2VyIGNhc2UgaGV4IHByZWZpeGVkIHN0cmluZy5cclxuICogQHByb3BlcnR5IHtUcmFuc2FjdGlvbk1ldGFbXX0gY3VycmVudE5ldHdvcmtUeExpc3QgLSBBbiBhcnJheSBvZiB0cmFuc2FjdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgbmV0d29yay5cclxuICogQHByb3BlcnR5IHtvYmplY3R9IHVuYXBwcm92ZWRNc2dzIC0gQW4gb2JqZWN0IG9mIG1lc3NhZ2VzIHBlbmRpbmcgYXBwcm92YWwsIG1hcHBpbmcgYSB1bmlxdWUgSUQgdG8gdGhlIG9wdGlvbnMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmFwcHJvdmVkTXNnQ291bnQgLSBUaGUgbnVtYmVyIG9mIG1lc3NhZ2VzIGluIHVuYXBwcm92ZWRNc2dzLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gdW5hcHByb3ZlZFBlcnNvbmFsTXNncyAtIEFuIG9iamVjdCBvZiBtZXNzYWdlcyBwZW5kaW5nIGFwcHJvdmFsLCBtYXBwaW5nIGEgdW5pcXVlIElEIHRvIHRoZSBvcHRpb25zLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5hcHByb3ZlZFBlcnNvbmFsTXNnQ291bnQgLSBUaGUgbnVtYmVyIG9mIG1lc3NhZ2VzIGluIHVuYXBwcm92ZWRQZXJzb25hbE1zZ3MuXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmFwcHJvdmVkRW5jcnlwdGlvblB1YmxpY0tleU1zZ3MgLSBBbiBvYmplY3Qgb2YgbWVzc2FnZXMgcGVuZGluZyBhcHByb3ZhbCwgbWFwcGluZyBhIHVuaXF1ZSBJRCB0byB0aGUgb3B0aW9ucy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuYXBwcm92ZWRFbmNyeXB0aW9uUHVibGljS2V5TXNnQ291bnQgLSBUaGUgbnVtYmVyIG9mIG1lc3NhZ2VzIGluIEVuY3J5cHRpb25QdWJsaWNLZXlNc2dzLlxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gdW5hcHByb3ZlZERlY3J5cHRNc2dzIC0gQW4gb2JqZWN0IG9mIG1lc3NhZ2VzIHBlbmRpbmcgYXBwcm92YWwsIG1hcHBpbmcgYSB1bmlxdWUgSUQgdG8gdGhlIG9wdGlvbnMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmFwcHJvdmVkRGVjcnlwdE1zZ0NvdW50IC0gVGhlIG51bWJlciBvZiBtZXNzYWdlcyBpbiB1bmFwcHJvdmVkRGVjcnlwdE1zZ3MuXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmFwcHJvdmVkVHlwZWRNc2dzIC0gQW4gb2JqZWN0IG9mIG1lc3NhZ2VzIHBlbmRpbmcgYXBwcm92YWwsIG1hcHBpbmcgYSB1bmlxdWUgSUQgdG8gdGhlIG9wdGlvbnMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmFwcHJvdmVkVHlwZWRNc2dDb3VudCAtIFRoZSBudW1iZXIgb2YgbWVzc2FnZXMgaW4gdW5hcHByb3ZlZFR5cGVkTXNncy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHBlbmRpbmdBcHByb3ZhbENvdW50IC0gVGhlIG51bWJlciBvZiBwZW5kaW5nIHJlcXVlc3QgaW4gdGhlIGFwcHJvdmFsIGNvbnRyb2xsZXIuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGtleXJpbmdUeXBlcyAtIEFuIGFycmF5IG9mIHVuaXF1ZSBrZXlyaW5nIGlkZW50aWZ5aW5nIHN0cmluZ3MsIHJlcHJlc2VudGluZyBhdmFpbGFibGUgc3RyYXRlZ2llcyBmb3IgY3JlYXRpbmcgYWNjb3VudHMuXHJcbiAqIEBwcm9wZXJ0eSB7S2V5cmluZ1tdfSBrZXlyaW5ncyAtIEFuIGFycmF5IG9mIGtleXJpbmcgZGVzY3JpcHRpb25zLCBzdW1tYXJpemluZyB0aGUgYWNjb3VudHMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciB1c2UsIGFuZCB3aGF0IGtleXJpbmdzIHRoZXkgYmVsb25nIHRvLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2VsZWN0ZWRBZGRyZXNzIC0gQSBsb3dlciBjYXNlIGhleCBzdHJpbmcgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBhZGRyZXNzLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudEN1cnJlbmN5IC0gQSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIHVzZXIncyBwcmVmZXJyZWQgZGlzcGxheSBjdXJyZW5jeSwgZm9yIHVzZSBpbiBzaG93aW5nIGNvbnZlcnNpb24gcmF0ZXMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb252ZXJzaW9uUmF0ZSAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBleGNoYW5nZSByYXRlIGZyb20gdGhlIHVzZXIncyBwcmVmZXJyZWQgY3VycmVuY3kgdG8gRXRoZXIuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb252ZXJzaW9uRGF0ZSAtIEEgdW5peCBlcG9jaCBkYXRlIChtcykgZm9yIHRoZSB0aW1lIHRoZSBjdXJyZW50IGNvbnZlcnNpb24gcmF0ZSB3YXMgbGFzdCByZXRyaWV2ZWQuXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZm9yZ290dGVuUGFzc3dvcmQgLSBSZXR1cm5zIHRydWUgaWYgdGhlIHVzZXIgaGFzIGluaXRpYXRlZCB0aGUgcGFzc3dvcmQgcmVjb3Zlcnkgc2NyZWVuLCBpcyByZWNvdmVyaW5nIGZyb20gc2VlZCBwaHJhc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIFZlcnNpb25lZERhdGFcclxuICogQHByb3BlcnR5IHtNZXRhTWFza1N0YXRlfSBkYXRhIC0gVGhlIGRhdGEgZW1pdHRlZCBmcm9tIE1ldGFNYXNrIGNvbnRyb2xsZXIsIG9yIHVzZWQgdG8gaW5pdGlhbGl6ZSBpdC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb24gLSBUaGUgbGF0ZXN0IG1pZ3JhdGlvbiB2ZXJzaW9uIHRoYXQgaGFzIGJlZW4gcnVuLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyB0aGUgTWV0YU1hc2sgY29udHJvbGxlciwgYW5kIHNldHMgdXAgYWxsIHBsYXRmb3JtIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBTZXR1cCBjb21wbGV0ZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGluaXRTdGF0ZSA9IGF3YWl0IGxvYWRTdGF0ZUZyb21QZXJzaXN0ZW5jZSgpO1xyXG4gICAgY29uc3QgaW5pdExhbmdDb2RlID0gYXdhaXQgZ2V0Rmlyc3RQcmVmZXJyZWRMYW5nQ29kZSgpO1xyXG5cclxuXG5cclxuICAgIGxldCBpc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXA7XHJcbiAgICBpZiAoaXNNYW5pZmVzdFYzKSB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnNlc3Npb24uZ2V0KFtcclxuICAgICAgICAnaXNGaXJzdE1ldGFNYXNrQ29udHJvbGxlclNldHVwJyxcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBpc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXAgPVxyXG4gICAgICAgIHNlc3Npb25EYXRhPy5pc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXAgPT09IHVuZGVmaW5lZDtcclxuICAgICAgYXdhaXQgYnJvd3Nlci5zdG9yYWdlLnNlc3Npb24uc2V0KHsgaXNGaXJzdE1ldGFNYXNrQ29udHJvbGxlclNldHVwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwQ29udHJvbGxlcihcclxuICAgICAgaW5pdFN0YXRlLFxyXG4gICAgICBpbml0TGFuZ0NvZGUsXHJcbiAgICAgIHt9LFxyXG4gICAgICBpc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXAsXHJcbiAgICApO1xyXG4gICAgaWYgKCFpc01hbmlmZXN0VjMpIHtcclxuICAgICAgYXdhaXQgbG9hZFBoaXNoaW5nV2FybmluZ1BhZ2UoKTtcclxuICAgIH1cclxuICAgIGF3YWl0IHNlbmRSZWFkeU1lc3NhZ2VUb1RhYnMoKTtcclxuICAgIGxvZy5pbmZvKCdNZXRhTWFzayBpbml0aWFsaXphdGlvbiBjb21wbGV0ZS4nKTtcclxuICAgIHJlc29sdmVJbml0aWFsaXphdGlvbigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZWplY3RJbml0aWFsaXphdGlvbihlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQW4gZXJyb3IgdGhyb3duIGlmIHRoZSBwaGlzaGluZyB3YXJuaW5nIHBhZ2UgdGFrZXMgdG9vIGxvbmcgdG8gbG9hZC5cclxuICovXHJcbmNsYXNzIFBoaXNoaW5nV2FybmluZ1BhZ2VUaW1lb3V0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignVGltZW91dCBmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2FkIHRoZSBwaGlzaGluZyB3YXJuaW5nIHBhZ2UgdGVtcG9yYXJpbHkgdG8gZW5zdXJlIHRoZSBzZXJ2aWNlXHJcbiAqIHdvcmtlciBoYXMgYmVlbiByZWdpc3RlcmVkLCBzbyB0aGF0IHRoZSB3YXJuaW5nIHBhZ2Ugd29ya3Mgb2ZmbGluZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRQaGlzaGluZ1dhcm5pbmdQYWdlKCkge1xyXG4gIGxldCBpZnJhbWU7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGV4dGVuc2lvblN0YXJ0dXBQaGlzaGluZ1BhZ2VVcmwgPSBuZXcgVVJMKFxyXG4gICAgICBwcm9jZXNzLmVudi5QSElTSElOR19XQVJOSU5HX1BBR0VfVVJMLFxyXG4gICAgKTtcclxuICAgIC8vIFRoZSBgZXh0ZW5zaW9uU3RhcnR1cGAgaGFzaCBzaWduYWxzIHRvIHRoZSBwaGlzaGluZyB3YXJuaW5nIHBhZ2UgdGhhdCBpdCBzaG91bGQgbm90IGJvdGhlclxyXG4gICAgLy8gc2V0dGluZyB1cCBzdHJlYW1zIGZvciB1c2VyIGludGVyYWN0aW9uLiBPdGhlcndpc2UgdGhpcyBwYWdlIGxvYWQgd291bGQgY2F1c2UgYSBjb25zb2xlXHJcbiAgICAvLyBlcnJvci5cclxuICAgIGV4dGVuc2lvblN0YXJ0dXBQaGlzaGluZ1BhZ2VVcmwuaGFzaCA9ICcjZXh0ZW5zaW9uU3RhcnR1cCc7XHJcblxyXG4gICAgaWZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgZXh0ZW5zaW9uU3RhcnR1cFBoaXNoaW5nUGFnZVVybC5ocmVmKTtcclxuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NhbmRib3gnLCAnYWxsb3ctc2NyaXB0cyBhbGxvdy1zYW1lLW9yaWdpbicpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBcImRlZmVycmVkIFByb21pc2VcIiB0byBhbGxvdyBwYXNzaW5nIHJlc29sdmUvcmVqZWN0IHRvIGV2ZW50IGhhbmRsZXJzXHJcbiAgICBsZXQgZGVmZXJyZWRSZXNvbHZlO1xyXG4gICAgbGV0IGRlZmVycmVkUmVqZWN0O1xyXG4gICAgY29uc3QgbG9hZENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBkZWZlcnJlZFJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICBkZWZlcnJlZFJlamVjdCA9IHJlamVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRoZSBsb2FkIGV2ZW50IGlzIGVtaXR0ZWQgb25jZSBsb2FkaW5nIGhhcyBjb21wbGV0ZWQsIGV2ZW4gaWYgdGhlIGxvYWRpbmcgZmFpbGVkLlxyXG4gICAgLy8gSWYgbG9hZGluZyBmYWlsZWQgd2UgY2FuJ3QgZG8gYW55dGhpbmcgYWJvdXQgaXQsIHNvIHdlIGRvbid0IG5lZWQgdG8gY2hlY2suXHJcbiAgICBpZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRlZmVycmVkUmVzb2x2ZSk7XHJcblxyXG4gICAgLy8gVGhpcyBzdGVwIGluaXRpYXRlcyB0aGUgcGFnZSBsb2FkaW5nLlxyXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHJcbiAgICAvLyBUaGlzIHRpbWVvdXQgZW5zdXJlcyB0aGF0IHRoaXMgaWZyYW1lIGdldHMgY2xlYW5lZCB1cCBpbiBhIHJlYXNvbmFibGVcclxuICAgIC8vIHRpbWVmcmFtZSwgYW5kIGVuc3VyZXMgdGhhdCB0aGUgXCJpbml0aWFsaXphdGlvbiBjb21wbGV0ZVwiIG1lc3NhZ2VcclxuICAgIC8vIGRvZXNuJ3QgZ2V0IGRlbGF5ZWQgdG9vIGxvbmcuXHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PiBkZWZlcnJlZFJlamVjdChuZXcgUGhpc2hpbmdXYXJuaW5nUGFnZVRpbWVvdXRFcnJvcigpKSxcclxuICAgICAgUEhJU0hJTkdfV0FSTklOR19QQUdFX1RJTUVPVVQsXHJcbiAgICApO1xyXG4gICAgYXdhaXQgbG9hZENvbXBsZXRlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBQaGlzaGluZ1dhcm5pbmdQYWdlVGltZW91dEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnUGhpc2hpbmcgd2FybmluZyBwYWdlIHRpbWVvdXQ7IHBhZ2Ugbm90IGd1YXJhbmV0ZWVkIHRvIHdvcmsgb2ZmbGluZS4nLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgcGhpc2hpbmcgd2FybmluZyBwYWdlJywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0gZmluYWxseSB7XHJcbiAgICBpZiAoaWZyYW1lKSB7XHJcbiAgICAgIGlmcmFtZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vIFN0YXRlIGFuZCBQZXJzaXN0ZW5jZVxyXG4vL1xyXG5cclxuLyoqXHJcbiAqIExvYWRzIGFueSBzdG9yZWQgZGF0YSwgcHJpb3JpdGl6aW5nIHRoZSBsYXRlc3Qgc3RvcmFnZSBzdHJhdGVneS5cclxuICogTWlncmF0ZXMgdGhhdCBkYXRhIHNjaGVtYSBpbiBjYXNlIGl0IHdhcyBsYXN0IGxvYWRlZCBvbiBhbiBvbGRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxNZXRhTWFza1N0YXRlPn0gTGFzdCBkYXRhIGVtaXR0ZWQgZnJvbSBwcmV2aW91cyBpbnN0YW5jZSBvZiBNZXRhTWFzay5cclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3RhdGVGcm9tUGVyc2lzdGVuY2UoKSB7XHJcbiAgLy8gbWlncmF0aW9uc1xyXG4gIGNvbnN0IG1pZ3JhdG9yID0gbmV3IE1pZ3JhdG9yKHsgbWlncmF0aW9ucyB9KTtcclxuICBtaWdyYXRvci5vbignZXJyb3InLCBjb25zb2xlLndhcm4pO1xyXG5cclxuICAvLyByZWFkIGZyb20gZGlza1xyXG4gIC8vIGZpcnN0IGZyb20gcHJlZmVycmVkLCBhc3luYyBBUEk6XHJcbiAgdmVyc2lvbmVkRGF0YSA9XHJcbiAgICAoYXdhaXQgbG9jYWxTdG9yZS5nZXQoKSkgfHwgbWlncmF0b3IuZ2VuZXJhdGVJbml0aWFsU3RhdGUoZmlyc3RUaW1lU3RhdGUpO1xyXG5cclxuICAvLyBjaGVjayBpZiBzb21laG93IHN0YXRlIGlzIGVtcHR5XHJcbiAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIGJ1dCBuZXcgZXJyb3IgcmVwb3J0aW5nIHN1Z2dlc3RzIHRoYXQgaXQgaGFzXHJcbiAgLy8gZm9yIGEgc21hbGwgbnVtYmVyIG9mIHVzZXJzXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21ldGFtYXNrL21ldGFtYXNrLWV4dGVuc2lvbi9pc3N1ZXMvMzkxOVxyXG4gIGlmICh2ZXJzaW9uZWREYXRhICYmICF2ZXJzaW9uZWREYXRhLmRhdGEpIHtcclxuICAgIC8vIHVuYWJsZSB0byByZWNvdmVyLCBjbGVhciBzdGF0ZVxyXG4gICAgdmVyc2lvbmVkRGF0YSA9IG1pZ3JhdG9yLmdlbmVyYXRlSW5pdGlhbFN0YXRlKGZpcnN0VGltZVN0YXRlKTtcclxuICAgIHNlbnRyeS5jYXB0dXJlTWVzc2FnZSgnTWV0YU1hc2sgLSBFbXB0eSB2YXVsdCBmb3VuZCAtIHVuYWJsZSB0byByZWNvdmVyJyk7XHJcbiAgfVxyXG5cclxuICAvLyByZXBvcnQgbWlncmF0aW9uIGVycm9ycyB0byBzZW50cnlcclxuICBtaWdyYXRvci5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAvLyBnZXQgdmF1bHQgc3RydWN0dXJlIHdpdGhvdXQgc2VjcmV0c1xyXG4gICAgY29uc3QgdmF1bHRTdHJ1Y3R1cmUgPSBnZXRPYmpTdHJ1Y3R1cmUodmVyc2lvbmVkRGF0YSk7XHJcbiAgICBzZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihlcnIsIHtcclxuICAgICAgLy8gXCJleHRyYVwiIGtleSBpcyByZXF1aXJlZCBieSBTZW50cnlcclxuICAgICAgZXh0cmE6IHsgdmF1bHRTdHJ1Y3R1cmUgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtaWdyYXRlIGRhdGFcclxuICB2ZXJzaW9uZWREYXRhID0gYXdhaXQgbWlncmF0b3IubWlncmF0ZURhdGEodmVyc2lvbmVkRGF0YSk7XHJcbiAgaWYgKCF2ZXJzaW9uZWREYXRhKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGFNYXNrIC0gbWlncmF0b3IgcmV0dXJuZWQgdW5kZWZpbmVkJyk7XHJcbiAgfVxyXG4gIC8vIHRoaXMgaW5pdGlhbGl6ZXMgdGhlIG1ldGEvdmVyc2lvbiBkYXRhIGFzIGEgY2xhc3MgdmFyaWFibGUgdG8gYmUgdXNlZCBmb3IgZnV0dXJlIHdyaXRlc1xyXG4gIGxvY2FsU3RvcmUuc2V0TWV0YWRhdGEodmVyc2lvbmVkRGF0YS5tZXRhKTtcclxuXHJcbiAgLy8gd3JpdGUgdG8gZGlza1xyXG4gIGxvY2FsU3RvcmUuc2V0KHZlcnNpb25lZERhdGEuZGF0YSk7XHJcblxyXG4gIC8vIHJldHVybiBqdXN0IHRoZSBkYXRhXHJcbiAgcmV0dXJuIHZlcnNpb25lZERhdGEuZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVDb25uZWN0aW9uSWQocmVtb3RlUG9ydCwgZGV0ZWN0ZWRQcm9jZXNzTmFtZSkge1xyXG4gIGNvbnN0IHsgc2VuZGVyIH0gPSByZW1vdGVQb3J0O1xyXG4gIGNvbnN0IGlkID0gc2VuZGVyPy50YWIgPyBzZW5kZXIudGFiLmlkIDogc2VuZGVyPy5pZDtcclxuICBpZiAoIWlkIHx8ICFkZXRlY3RlZFByb2Nlc3NOYW1lKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAnTXVzdCBwcm92aWRlIGlkIGFuZCBkZXRlY3RlZFByb2Nlc3NOYW1lIHRvIGdlbmVyYXRlIGNvbm5lY3Rpb24gaWQuJyxcclxuICAgICAgaWQsXHJcbiAgICAgIGRldGVjdGVkUHJvY2Vzc05hbWUsXHJcbiAgICApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgJ011c3QgcHJvdmlkZSBpZCBhbmQgZGV0ZWN0ZWRQcm9jZXNzTmFtZSB0byBnZW5lcmF0ZSBjb25uZWN0aW9uIGlkLicsXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gYCR7aWR9LSR7ZGV0ZWN0ZWRQcm9jZXNzTmFtZX1gO1xyXG59XHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyB0aGUgTWV0YU1hc2sgQ29udHJvbGxlciB3aXRoIGFueSBpbml0aWFsIHN0YXRlIGFuZCBkZWZhdWx0IGxhbmd1YWdlLlxyXG4gKiBDb25maWd1cmVzIHBsYXRmb3JtLXNwZWNpZmljIGVycm9yIHJlcG9ydGluZyBzdHJhdGVneS5cclxuICogU3RyZWFtcyBlbWl0dGVkIHN0YXRlIHVwZGF0ZXMgdG8gcGxhdGZvcm0tc3BlY2lmaWMgc3RvcmFnZSBzdHJhdGVneS5cclxuICogQ3JlYXRlcyBwbGF0Zm9ybSBsaXN0ZW5lcnMgZm9yIG5ldyBEYXBwcy9Db250ZXh0cywgYW5kIHNldHMgdXAgdGhlaXIgZGF0YSBjb25uZWN0aW9ucyB0byB0aGUgY29udHJvbGxlci5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGluaXRTdGF0ZSAtIFRoZSBpbml0aWFsIHN0YXRlIHRvIHN0YXJ0IHRoZSBjb250cm9sbGVyIHdpdGgsIG1hdGNoZXMgdGhlIHN0YXRlIHRoYXQgaXMgZW1pdHRlZCBmcm9tIHRoZSBjb250cm9sbGVyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5pdExhbmdDb2RlIC0gVGhlIHJlZ2lvbiBjb2RlIGZvciB0aGUgbGFuZ3VhZ2UgcHJlZmVycmVkIGJ5IHRoZSBjdXJyZW50IHVzZXIuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvdmVycmlkZXMgLSBvYmplY3Qgd2l0aCBjYWxsYmFja3MgdGhhdCBhcmUgYWxsb3dlZCB0byBvdmVycmlkZSB0aGUgc2V0dXAgY29udHJvbGxlciBsb2dpYyAodXNlZnVsbCBmb3IgZGVza3RvcCBhcHApXHJcbiAqIEBwYXJhbSBpc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cENvbnRyb2xsZXIoXHJcbiAgaW5pdFN0YXRlLFxyXG4gIGluaXRMYW5nQ29kZSxcclxuICBvdmVycmlkZXMsXHJcbiAgaXNGaXJzdE1ldGFNYXNrQ29udHJvbGxlclNldHVwLFxyXG4pIHtcclxuICAvL1xyXG4gIC8vIE1ldGFNYXNrIENvbnRyb2xsZXJcclxuICAvL1xyXG5cclxuICBjb250cm9sbGVyID0gbmV3IE1ldGFtYXNrQ29udHJvbGxlcih7XHJcbiAgICBpbmZ1cmFQcm9qZWN0SWQ6IHByb2Nlc3MuZW52LklORlVSQV9QUk9KRUNUX0lELFxyXG4gICAgLy8gVXNlciBjb25maXJtYXRpb24gY2FsbGJhY2tzOlxyXG4gICAgc2hvd1VzZXJDb25maXJtYXRpb246IHRyaWdnZXJVaSxcclxuICAgIC8vIGluaXRpYWwgc3RhdGVcclxuICAgIGluaXRTdGF0ZSxcclxuICAgIC8vIGluaXRpYWwgbG9jYWxlIGNvZGVcclxuICAgIGluaXRMYW5nQ29kZSxcclxuICAgIC8vIHBsYXRmb3JtIHNwZWNpZmljIGFwaVxyXG4gICAgcGxhdGZvcm0sXHJcbiAgICBub3RpZmljYXRpb25NYW5hZ2VyLFxyXG4gICAgYnJvd3NlcixcclxuICAgIGdldFJlcXVlc3RBY2NvdW50VGFiSWRzOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0QWNjb3VudFRhYklkcztcclxuICAgIH0sXHJcbiAgICBnZXRPcGVuTWV0YW1hc2tUYWJzSWRzOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBvcGVuTWV0YW1hc2tUYWJzSURzO1xyXG4gICAgfSxcclxuICAgIGxvY2FsU3RvcmUsXHJcbiAgICBvdmVycmlkZXMsXHJcbiAgICBpc0ZpcnN0TWV0YU1hc2tDb250cm9sbGVyU2V0dXAsXHJcbiAgfSk7XHJcblxyXG4gIHNldHVwRW5zSXBmc1Jlc29sdmVyKHtcclxuICAgIGdldEN1cnJlbnRDaGFpbklkOiAoKSA9PlxyXG4gICAgICBjb250cm9sbGVyLm5ldHdvcmtDb250cm9sbGVyLnN0b3JlLmdldFN0YXRlKCkucHJvdmlkZXJDb25maWcuY2hhaW5JZCxcclxuICAgIGdldElwZnNHYXRld2F5OiBjb250cm9sbGVyLnByZWZlcmVuY2VzQ29udHJvbGxlci5nZXRJcGZzR2F0ZXdheS5iaW5kKFxyXG4gICAgICBjb250cm9sbGVyLnByZWZlcmVuY2VzQ29udHJvbGxlcixcclxuICAgICksXHJcbiAgICBwcm92aWRlcjogY29udHJvbGxlci5wcm92aWRlcixcclxuICB9KTtcclxuXHJcbiAgLy8gc2V0dXAgc3RhdGUgcGVyc2lzdGVuY2VcclxuICBwdW1wKFxyXG4gICAgc3RvcmVBc1N0cmVhbShjb250cm9sbGVyLnN0b3JlKSxcclxuICAgIGRlYm91bmNlKDEwMDApLFxyXG4gICAgY3JlYXRlU3RyZWFtU2luayhhc3luYyAoc3RhdGUpID0+IHtcclxuICAgICAgYXdhaXQgbG9jYWxTdG9yZS5zZXQoc3RhdGUpO1xyXG4gICAgICBzdGF0ZVBlcnNpc3RlbmNlRXZlbnRzLmVtaXQoJ3N0YXRlLXBlcnNpc3RlZCcsIHN0YXRlKTtcclxuICAgIH0pLFxyXG4gICAgKGVycm9yKSA9PiB7XHJcbiAgICAgIGxvZy5lcnJvcignTWV0YU1hc2sgLSBQZXJzaXN0ZW5jZSBwaXBlbGluZSBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICB9LFxyXG4gICk7XHJcblxyXG4gIHNldHVwU2VudHJ5R2V0U3RhdGVHbG9iYWwoY29udHJvbGxlcik7XHJcblxyXG4gIGNvbnN0IGlzQ2xpZW50T3BlblN0YXR1cyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHBvcHVwSXNPcGVuIHx8XHJcbiAgICAgIEJvb2xlYW4oT2JqZWN0LmtleXMob3Blbk1ldGFtYXNrVGFic0lEcykubGVuZ3RoKSB8fFxyXG4gICAgICBub3RpZmljYXRpb25Jc09wZW5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbG9zZUVudmlyb25tZW50SW5zdGFuY2VzID0gKGlzQ2xpZW50T3BlbiwgZW52aXJvbm1lbnRUeXBlKSA9PiB7XHJcbiAgICAvLyBpZiBhbGwgaW5zdGFuY2VzIG9mIG1ldGFtYXNrIGFyZSBjbG9zZWQgd2UgY2FsbCBhIG1ldGhvZCBvbiB0aGUgY29udHJvbGxlciB0byBzdG9wIGdhc0ZlZUNvbnRyb2xsZXIgcG9sbGluZ1xyXG4gICAgaWYgKGlzQ2xpZW50T3BlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgY29udHJvbGxlci5vbkNsaWVudENsb3NlZCgpO1xyXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugd2FudCB0byBvbmx5IHJlbW92ZSB0aGUgcG9sbGluZyB0b2tlbnMgZm9yIHRoZSBlbnZpcm9ubWVudCB0eXBlIHRoYXQgaGFzIGNsb3NlZFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgZnVsbHNjcmVlbiBlbnZpcm9ubWVudCBhIHVzZXIgbWlnaHQgaGF2ZSBtdWx0aXBsZSB0YWJzIG9wZW4gc28gd2UgZG9uJ3Qgd2FudCB0byBkaXNjb25uZWN0IGFsbCBvZlxyXG4gICAgICAvLyBpdHMgY29ycmVzcG9uZGluZyBwb2xsaW5nIHRva2VucyB1bmxlc3MgYWxsIHRhYnMgYXJlIGNsb3NlZC5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudmlyb25tZW50VHlwZSA9PT0gRU5WSVJPTk1FTlRfVFlQRV9GVUxMU0NSRUVOICYmXHJcbiAgICAgICAgQm9vbGVhbihPYmplY3Qua2V5cyhvcGVuTWV0YW1hc2tUYWJzSURzKS5sZW5ndGgpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb250cm9sbGVyLm9uRW52aXJvbm1lbnRUeXBlQ2xvc2VkKGVudmlyb25tZW50VHlwZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBydW50aW1lLlBvcnQgb2JqZWN0LCBhcyBwcm92aWRlZCBieSB0aGUgYnJvd3NlcjpcclxuICAgKlxyXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL1BvcnRcclxuICAgKiBAdHlwZWRlZiBQb3J0XHJcbiAgICogQHR5cGUgT2JqZWN0XHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIENvbm5lY3RzIGEgUG9ydCB0byB0aGUgTWV0YU1hc2sgY29udHJvbGxlciB2aWEgYSBtdWx0aXBsZXhlZCBkdXBsZXggc3RyZWFtLlxyXG4gICAqIFRoaXMgbWV0aG9kIGlkZW50aWZpZXMgdHJ1c3RlZCAoTWV0YU1hc2spIGludGVyZmFjZXMsIGFuZCBjb25uZWN0cyB0aGVtIGRpZmZlcmVudGx5IGZyb20gdW50cnVzdGVkICh3ZWIgcGFnZXMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQb3J0fSByZW1vdGVQb3J0IC0gVGhlIHBvcnQgcHJvdmlkZWQgYnkgYSBuZXcgY29udGV4dC5cclxuICAgKi9cclxuICBjb25uZWN0UmVtb3RlID0gYXN5bmMgKHJlbW90ZVBvcnQpID0+IHtcclxuXG5cclxuICAgIGNvbnN0IHByb2Nlc3NOYW1lID0gcmVtb3RlUG9ydC5uYW1lO1xyXG5cclxuICAgIGlmIChtZXRhbWFza0Jsb2NrZWRQb3J0cy5pbmNsdWRlcyhyZW1vdGVQb3J0Lm5hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNNZXRhTWFza0ludGVybmFsUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgY29uc3Qgc291cmNlUGxhdGZvcm0gPSBnZXRQbGF0Zm9ybSgpO1xyXG4gICAgY29uc3Qgc2VuZGVyVXJsID0gcmVtb3RlUG9ydC5zZW5kZXI/LnVybFxyXG4gICAgICA/IG5ldyBVUkwocmVtb3RlUG9ydC5zZW5kZXIudXJsKVxyXG4gICAgICA6IG51bGw7XHJcblxyXG4gICAgaWYgKHNvdXJjZVBsYXRmb3JtID09PSBQTEFURk9STV9GSVJFRk9YKSB7XHJcbiAgICAgIGlzTWV0YU1hc2tJbnRlcm5hbFByb2Nlc3MgPSBtZXRhbWFza0ludGVybmFsUHJvY2Vzc0hhc2hbcHJvY2Vzc05hbWVdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXNNZXRhTWFza0ludGVybmFsUHJvY2VzcyA9XHJcbiAgICAgICAgc2VuZGVyVXJsPy5vcmlnaW4gPT09IGBjaHJvbWUtZXh0ZW5zaW9uOi8vJHticm93c2VyLnJ1bnRpbWUuaWR9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNNZXRhTWFza0ludGVybmFsUHJvY2Vzcykge1xyXG4gICAgICBjb25zdCBwb3J0U3RyZWFtID1cclxuICAgICAgICBvdmVycmlkZXM/LmdldFBvcnRTdHJlYW0/LihyZW1vdGVQb3J0KSB8fCBuZXcgUG9ydFN0cmVhbShyZW1vdGVQb3J0KTtcclxuICAgICAgLy8gY29tbXVuaWNhdGlvbiB3aXRoIHBvcHVwXHJcbiAgICAgIGNvbnRyb2xsZXIuaXNDbGllbnRPcGVuID0gdHJ1ZTtcclxuICAgICAgY29udHJvbGxlci5zZXR1cFRydXN0ZWRDb21tdW5pY2F0aW9uKHBvcnRTdHJlYW0sIHJlbW90ZVBvcnQuc2VuZGVyKTtcclxuICAgICAgaWYgKGlzTWFuaWZlc3RWMykge1xyXG4gICAgICAgIC8vIElmIHdlIGdldCBhIFdPUktFUl9LRUVQX0FMSVZFIG1lc3NhZ2UsIHdlIHJlc3BvbmQgd2l0aCBhbiBBQ0tcclxuICAgICAgICByZW1vdGVQb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UubmFtZSA9PT0gV09SS0VSX0tFRVBfQUxJVkVfTUVTU0FHRSkge1xyXG4gICAgICAgICAgICAvLyBUbyB0ZXN0IHVuLWNvbW1lbnQgdGhpcyBsaW5lIGFuZCB3YWl0IGZvciAxIG1pbnV0ZS4gQW4gZXJyb3Igc2hvdWxkIGJlIHNob3duIG9uIE1ldGFNYXNrIFVJLlxyXG4gICAgICAgICAgICByZW1vdGVQb3J0LnBvc3RNZXNzYWdlKHsgbmFtZTogQUNLX0tFRVBfQUxJVkVfTUVTU0FHRSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYXBwU3RhdGVDb250cm9sbGVyLnNldFNlcnZpY2VXb3JrZXJMYXN0QWN0aXZlVGltZShcclxuICAgICAgICAgICAgICBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBjb25uZWN0aW9uSWQgPSBnZW5lcmF0ZUNvbm5lY3Rpb25JZChyZW1vdGVQb3J0LCBwcm9jZXNzTmFtZSk7XHJcbiAgICAgIGlmIChwcm9jZXNzTmFtZSA9PT0gRU5WSVJPTk1FTlRfVFlQRV9QT1BVUCkge1xyXG4gICAgICAgIHBvcHVwSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICBlbmRPZlN0cmVhbShwb3J0U3RyZWFtLCAoKSA9PiB7XHJcbiAgICAgICAgICBvcGVuTWV0YW1hc2tDb25uZWN0aW9ucy5zZXQoY29ubmVjdGlvbklkLCAwKTtcclxuICAgICAgICAgIHBvcHVwSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBpc0NsaWVudE9wZW4gPSBpc0NsaWVudE9wZW5TdGF0dXMoKTtcclxuICAgICAgICAgIGNvbnRyb2xsZXIuaXNDbGllbnRPcGVuID0gaXNDbGllbnRPcGVuO1xyXG4gICAgICAgICAgb25DbG9zZUVudmlyb25tZW50SW5zdGFuY2VzKGlzQ2xpZW50T3BlbiwgRU5WSVJPTk1FTlRfVFlQRV9QT1BVUCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcm9jZXNzTmFtZSA9PT0gRU5WSVJPTk1FTlRfVFlQRV9OT1RJRklDQVRJT04pIHtcclxuICAgICAgICBub3RpZmljYXRpb25Jc09wZW4gPSB0cnVlO1xyXG4gICAgICAgIGVuZE9mU3RyZWFtKHBvcnRTdHJlYW0sICgpID0+IHtcclxuICAgICAgICAgIG9wZW5NZXRhbWFza0Nvbm5lY3Rpb25zLnNldChjb25uZWN0aW9uSWQsIDApO1xyXG4gICAgICAgICAgbm90aWZpY2F0aW9uSXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBpc0NsaWVudE9wZW4gPSBpc0NsaWVudE9wZW5TdGF0dXMoKTtcclxuICAgICAgICAgIGNvbnRyb2xsZXIuaXNDbGllbnRPcGVuID0gaXNDbGllbnRPcGVuO1xyXG4gICAgICAgICAgb25DbG9zZUVudmlyb25tZW50SW5zdGFuY2VzKFxyXG4gICAgICAgICAgICBpc0NsaWVudE9wZW4sXHJcbiAgICAgICAgICAgIEVOVklST05NRU5UX1RZUEVfTk9USUZJQ0FUSU9OLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb2Nlc3NOYW1lID09PSBFTlZJUk9OTUVOVF9UWVBFX0ZVTExTQ1JFRU4pIHtcclxuICAgICAgICBjb25zdCB0YWJJZCA9IHJlbW90ZVBvcnQuc2VuZGVyLnRhYi5pZDtcclxuICAgICAgICBvcGVuTWV0YW1hc2tUYWJzSURzW3RhYklkXSA9IHRydWU7XHJcblxyXG4gICAgICAgIGVuZE9mU3RyZWFtKHBvcnRTdHJlYW0sICgpID0+IHtcclxuICAgICAgICAgIG9wZW5NZXRhbWFza0Nvbm5lY3Rpb25zLnNldChjb25uZWN0aW9uSWQsIDApO1xyXG4gICAgICAgICAgZGVsZXRlIG9wZW5NZXRhbWFza1RhYnNJRHNbdGFiSWRdO1xyXG4gICAgICAgICAgY29uc3QgaXNDbGllbnRPcGVuID0gaXNDbGllbnRPcGVuU3RhdHVzKCk7XHJcbiAgICAgICAgICBjb250cm9sbGVyLmlzQ2xpZW50T3BlbiA9IGlzQ2xpZW50T3BlbjtcclxuICAgICAgICAgIG9uQ2xvc2VFbnZpcm9ubWVudEluc3RhbmNlcyhcclxuICAgICAgICAgICAgaXNDbGllbnRPcGVuLFxyXG4gICAgICAgICAgICBFTlZJUk9OTUVOVF9UWVBFX0ZVTExTQ1JFRU4sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBzZW5kZXJVcmwgJiZcclxuICAgICAgc2VuZGVyVXJsLm9yaWdpbiA9PT0gcGhpc2hpbmdQYWdlVXJsLm9yaWdpbiAmJlxyXG4gICAgICBzZW5kZXJVcmwucGF0aG5hbWUgPT09IHBoaXNoaW5nUGFnZVVybC5wYXRobmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHBvcnRTdHJlYW0gPVxyXG4gICAgICAgIG92ZXJyaWRlcz8uZ2V0UG9ydFN0cmVhbT8uKHJlbW90ZVBvcnQpIHx8IG5ldyBQb3J0U3RyZWFtKHJlbW90ZVBvcnQpO1xyXG4gICAgICBjb250cm9sbGVyLnNldHVwUGhpc2hpbmdDb21tdW5pY2F0aW9uKHtcclxuICAgICAgICBjb25uZWN0aW9uU3RyZWFtOiBwb3J0U3RyZWFtLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZW1vdGVQb3J0LnNlbmRlciAmJiByZW1vdGVQb3J0LnNlbmRlci50YWIgJiYgcmVtb3RlUG9ydC5zZW5kZXIudXJsKSB7XHJcbiAgICAgICAgY29uc3QgdGFiSWQgPSByZW1vdGVQb3J0LnNlbmRlci50YWIuaWQ7XHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChyZW1vdGVQb3J0LnNlbmRlci51cmwpO1xyXG4gICAgICAgIGNvbnN0IHsgb3JpZ2luIH0gPSB1cmw7XHJcblxyXG4gICAgICAgIHJlbW90ZVBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2cpID0+IHtcclxuICAgICAgICAgIGlmIChtc2cuZGF0YSAmJiBtc2cuZGF0YS5tZXRob2QgPT09ICdldGhfcmVxdWVzdEFjY291bnRzJykge1xyXG4gICAgICAgICAgICByZXF1ZXN0QWNjb3VudFRhYklkc1tvcmlnaW5dID0gdGFiSWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29ubmVjdEV4dGVybmFsKHJlbW90ZVBvcnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbW11bmljYXRpb24gd2l0aCBwYWdlIG9yIG90aGVyIGV4dGVuc2lvblxyXG4gIGNvbm5lY3RFeHRlcm5hbCA9IChyZW1vdGVQb3J0KSA9PiB7XHJcblxuXHJcbiAgICBjb25zdCBwb3J0U3RyZWFtID1cclxuICAgICAgb3ZlcnJpZGVzPy5nZXRQb3J0U3RyZWFtPy4ocmVtb3RlUG9ydCkgfHwgbmV3IFBvcnRTdHJlYW0ocmVtb3RlUG9ydCk7XHJcbiAgICBjb250cm9sbGVyLnNldHVwVW50cnVzdGVkQ29tbXVuaWNhdGlvbih7XHJcbiAgICAgIGNvbm5lY3Rpb25TdHJlYW06IHBvcnRTdHJlYW0sXHJcbiAgICAgIHNlbmRlcjogcmVtb3RlUG9ydC5zZW5kZXIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAob3ZlcnJpZGVzPy5yZWdpc3RlckNvbm5lY3RMaXN0ZW5lcnMpIHtcclxuICAgIG92ZXJyaWRlcy5yZWdpc3RlckNvbm5lY3RMaXN0ZW5lcnMoY29ubmVjdFJlbW90ZSwgY29ubmVjdEV4dGVybmFsKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gVXNlciBJbnRlcmZhY2Ugc2V0dXBcclxuICAvL1xyXG5cclxuICBjb250cm9sbGVyLnR4Q29udHJvbGxlci5pbml0QXBwcm92YWxzKCkudGhlbigoKSA9PiB7XHJcbiAgICB1cGRhdGVCYWRnZSgpO1xyXG4gIH0pO1xyXG4gIGNvbnRyb2xsZXIudHhDb250cm9sbGVyLm9uKFxyXG4gICAgTUVUQU1BU0tfQ09OVFJPTExFUl9FVkVOVFMuVVBEQVRFX0JBREdFLFxyXG4gICAgdXBkYXRlQmFkZ2UsXHJcbiAgKTtcclxuICBjb250cm9sbGVyLmRlY3J5cHRNZXNzYWdlQ29udHJvbGxlci5odWIub24oXHJcbiAgICBNRVRBTUFTS19DT05UUk9MTEVSX0VWRU5UUy5VUERBVEVfQkFER0UsXHJcbiAgICB1cGRhdGVCYWRnZSxcclxuICApO1xyXG4gIGNvbnRyb2xsZXIuZW5jcnlwdGlvblB1YmxpY0tleUNvbnRyb2xsZXIuaHViLm9uKFxyXG4gICAgTUVUQU1BU0tfQ09OVFJPTExFUl9FVkVOVFMuVVBEQVRFX0JBREdFLFxyXG4gICAgdXBkYXRlQmFkZ2UsXHJcbiAgKTtcclxuICBjb250cm9sbGVyLnNpZ25hdHVyZUNvbnRyb2xsZXIuaHViLm9uKFxyXG4gICAgTUVUQU1BU0tfQ09OVFJPTExFUl9FVkVOVFMuVVBEQVRFX0JBREdFLFxyXG4gICAgdXBkYXRlQmFkZ2UsXHJcbiAgKTtcclxuICBjb250cm9sbGVyLmFwcFN0YXRlQ29udHJvbGxlci5vbihcclxuICAgIE1FVEFNQVNLX0NPTlRST0xMRVJfRVZFTlRTLlVQREFURV9CQURHRSxcclxuICAgIHVwZGF0ZUJhZGdlLFxyXG4gICk7XHJcblxyXG4gIGNvbnRyb2xsZXIuY29udHJvbGxlck1lc3Nlbmdlci5zdWJzY3JpYmUoXHJcbiAgICBNRVRBTUFTS19DT05UUk9MTEVSX0VWRU5UUy5BUFBST1ZBTF9TVEFURV9DSEFOR0UsXHJcbiAgICB1cGRhdGVCYWRnZSxcclxuICApO1xyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRoZSBXZWIgRXh0ZW5zaW9uJ3MgXCJiYWRnZVwiIG51bWJlciwgb24gdGhlIGxpdHRsZSBmb3ggaW4gdGhlIHRvb2xiYXIuXHJcbiAgICogVGhlIG51bWJlciByZWZsZWN0cyB0aGUgY3VycmVudCBudW1iZXIgb2YgcGVuZGluZyB0cmFuc2FjdGlvbnMgb3IgbWVzc2FnZSBzaWduYXR1cmVzIG5lZWRpbmcgdXNlciBhcHByb3ZhbC5cclxuICAgKi9cclxuICBmdW5jdGlvbiB1cGRhdGVCYWRnZSgpIHtcclxuICAgIGxldCBsYWJlbCA9ICcnO1xyXG4gICAgY29uc3QgY291bnQgPSBnZXRVbmFwcHJvdmVkVHJhbnNhY3Rpb25Db3VudCgpO1xyXG4gICAgaWYgKGNvdW50KSB7XHJcbiAgICAgIGxhYmVsID0gU3RyaW5nKGNvdW50KTtcclxuICAgIH1cclxuICAgIC8vIGJyb3dzZXJBY3Rpb24gaGFzIGJlZW4gcmVwbGFjZWQgYnkgYWN0aW9uIGluIE1WM1xyXG4gICAgaWYgKGlzTWFuaWZlc3RWMykge1xyXG4gICAgICBicm93c2VyLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBsYWJlbCB9KTtcclxuICAgICAgYnJvd3Nlci5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogJyMwMzdERDYnIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGxhYmVsIH0pO1xyXG4gICAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogJyMwMzdERDYnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VW5hcHByb3ZlZFRyYW5zYWN0aW9uQ291bnQoKSB7XHJcbiAgICBjb25zdCBwZW5kaW5nQXBwcm92YWxDb3VudCA9XHJcbiAgICAgIGNvbnRyb2xsZXIuYXBwcm92YWxDb250cm9sbGVyLmdldFRvdGFsQXBwcm92YWxDb3VudCgpO1xyXG4gICAgY29uc3Qgd2FpdGluZ0ZvclVubG9ja0NvdW50ID1cclxuICAgICAgY29udHJvbGxlci5hcHBTdGF0ZUNvbnRyb2xsZXIud2FpdGluZ0ZvclVubG9jay5sZW5ndGg7XHJcbiAgICByZXR1cm4gcGVuZGluZ0FwcHJvdmFsQ291bnQgKyB3YWl0aW5nRm9yVW5sb2NrQ291bnQ7XHJcbiAgfVxyXG5cclxuICBub3RpZmljYXRpb25NYW5hZ2VyLm9uKFxyXG4gICAgTk9USUZJQ0FUSU9OX01BTkFHRVJfRVZFTlRTLlBPUFVQX0NMT1NFRCxcclxuICAgICh7IGF1dG9tYXRpY2FsbHlDbG9zZWQgfSkgPT4ge1xyXG4gICAgICBpZiAoIWF1dG9tYXRpY2FsbHlDbG9zZWQpIHtcclxuICAgICAgICByZWplY3RVbmFwcHJvdmVkTm90aWZpY2F0aW9ucygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGdldFVuYXBwcm92ZWRUcmFuc2FjdGlvbkNvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgdHJpZ2dlclVpKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gcmVqZWN0VW5hcHByb3ZlZE5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhcclxuICAgICAgY29udHJvbGxlci50eENvbnRyb2xsZXIudHhTdGF0ZU1hbmFnZXIuZ2V0VW5hcHByb3ZlZFR4TGlzdCgpLFxyXG4gICAgKS5mb3JFYWNoKCh0eElkKSA9PlxyXG4gICAgICBjb250cm9sbGVyLnR4Q29udHJvbGxlci50eFN0YXRlTWFuYWdlci5zZXRUeFN0YXR1c1JlamVjdGVkKHR4SWQpLFxyXG4gICAgKTtcclxuICAgIGNvbnRyb2xsZXIuc2lnbmF0dXJlQ29udHJvbGxlci5yZWplY3RVbmFwcHJvdmVkKFxyXG4gICAgICBSRUpFQ1RfTk9USUZJQ0FUSU9OX0NMT1NFX1NJRyxcclxuICAgICk7XHJcbiAgICBjb250cm9sbGVyLmRlY3J5cHRNZXNzYWdlQ29udHJvbGxlci5yZWplY3RVbmFwcHJvdmVkKFxyXG4gICAgICBSRUpFQ1RfTk9USUZJQ0FUSU9OX0NMT1NFLFxyXG4gICAgKTtcclxuICAgIGNvbnRyb2xsZXIuZW5jcnlwdGlvblB1YmxpY0tleUNvbnRyb2xsZXIucmVqZWN0VW5hcHByb3ZlZChcclxuICAgICAgUkVKRUNUX05PVElGSUNBVElPTl9DTE9TRSxcclxuICAgICk7XHJcblxyXG4gICAgLy8gRmluYWxseSwgcmVzb2x2ZSBzbmFwIGRpYWxvZyBhcHByb3ZhbHMgb24gRmxhc2sgYW5kIHJlamVjdCBhbGwgdGhlIG90aGVycyBtYW5hZ2VkIGJ5IHRoZSBBcHByb3ZhbENvbnRyb2xsZXIuXHJcbiAgICBPYmplY3QudmFsdWVzKGNvbnRyb2xsZXIuYXBwcm92YWxDb250cm9sbGVyLnN0YXRlLnBlbmRpbmdBcHByb3ZhbHMpLmZvckVhY2goXHJcbiAgICAgICh7IGlkLCB0eXBlIH0pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29udHJvbGxlci5hcHByb3ZhbENvbnRyb2xsZXIucmVqZWN0KFxyXG4gICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgIGV0aEVycm9ycy5wcm92aWRlci51c2VyUmVqZWN0ZWRSZXF1ZXN0KCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgdXBkYXRlQmFkZ2UoKTtcclxuICB9XHJcblxyXG5cbn1cclxuXHJcbi8vXHJcbi8vIEV0Yy4uLlxyXG4vL1xyXG5cclxuLyoqXHJcbiAqIE9wZW5zIHRoZSBicm93c2VyIHBvcHVwIGZvciB1c2VyIGNvbmZpcm1hdGlvblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gdHJpZ2dlclVpKCkge1xyXG4gIGNvbnN0IHRhYnMgPSBhd2FpdCBwbGF0Zm9ybS5nZXRBY3RpdmVUYWJzKCk7XHJcbiAgY29uc3QgY3VycmVudGx5QWN0aXZlTWV0YW1hc2tUYWIgPSBCb29sZWFuKFxyXG4gICAgdGFicy5maW5kKCh0YWIpID0+IG9wZW5NZXRhbWFza1RhYnNJRHNbdGFiLmlkXSksXHJcbiAgKTtcclxuICAvLyBWaXZhbGRpIGlzIG5vdCBjbG9zaW5nIHBvcnQgY29ubmVjdGlvbiBvbiBwb3B1cCBjbG9zZSwgc28gcG9wdXBJc09wZW4gZG9lcyBub3Qgd29yayBjb3JyZWN0bHlcclxuICAvLyBUbyBiZSByZXZpZXdlZCBpbiB0aGUgZnV0dXJlIGlmIHRoaXMgYmVoYXZpb3VyIGlzIGZpeGVkIC0gYWxzbyB0aGUgd2F5IHdlIGRldGVybWluZSBpc1ZpdmFsZGkgdmFyaWFibGUgbWlnaHQgY2hhbmdlIGF0IHNvbWUgcG9pbnRcclxuICBjb25zdCBpc1ZpdmFsZGkgPVxyXG4gICAgdGFicy5sZW5ndGggPiAwICYmXHJcbiAgICB0YWJzWzBdLmV4dERhdGEgJiZcclxuICAgIHRhYnNbMF0uZXh0RGF0YS5pbmRleE9mKCd2aXZhbGRpX3RhYicpID4gLTE7XHJcbiAgaWYgKFxyXG4gICAgIXVpSXNUcmlnZ2VyaW5nICYmXHJcbiAgICAoaXNWaXZhbGRpIHx8ICFwb3B1cElzT3BlbikgJiZcclxuICAgICFjdXJyZW50bHlBY3RpdmVNZXRhbWFza1RhYlxyXG4gICkge1xyXG4gICAgdWlJc1RyaWdnZXJpbmcgPSB0cnVlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFBvcHVwSWQgPSBjb250cm9sbGVyLmFwcFN0YXRlQ29udHJvbGxlci5nZXRDdXJyZW50UG9wdXBJZCgpO1xyXG4gICAgICBhd2FpdCBub3RpZmljYXRpb25NYW5hZ2VyLnNob3dQb3B1cChcclxuICAgICAgICAobmV3UG9wdXBJZCkgPT5cclxuICAgICAgICAgIGNvbnRyb2xsZXIuYXBwU3RhdGVDb250cm9sbGVyLnNldEN1cnJlbnRQb3B1cElkKG5ld1BvcHVwSWQpLFxyXG4gICAgICAgIGN1cnJlbnRQb3B1cElkLFxyXG4gICAgICApO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdWlJc1RyaWdnZXJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEl0IGFkZHMgdGhlIFwiQXBwIEluc3RhbGxlZFwiIGV2ZW50IGludG8gYSBxdWV1ZSBvZiBldmVudHMsIHdoaWNoIHdpbGwgYmUgdHJhY2tlZCBvbmx5IGFmdGVyIGEgdXNlciBvcHRzIGludG8gbWV0cmljcy5cclxuY29uc3QgYWRkQXBwSW5zdGFsbGVkRXZlbnQgPSAoKSA9PiB7XHJcbiAgaWYgKGNvbnRyb2xsZXIpIHtcclxuICAgIGNvbnRyb2xsZXIubWV0YU1ldHJpY3NDb250cm9sbGVyLnVwZGF0ZVRyYWl0cyh7XHJcbiAgICAgIFtNZXRhTWV0cmljc1VzZXJUcmFpdC5JbnN0YWxsRGF0ZUV4dF06IG5ldyBEYXRlKClcclxuICAgICAgICAudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIC5zcGxpdCgnVCcpWzBdLCAvLyB5eXl5LW1tLWRkXHJcbiAgICB9KTtcclxuICAgIGNvbnRyb2xsZXIubWV0YU1ldHJpY3NDb250cm9sbGVyLmFkZEV2ZW50QmVmb3JlTWV0cmljc09wdEluKHtcclxuICAgICAgY2F0ZWdvcnk6IE1ldGFNZXRyaWNzRXZlbnRDYXRlZ29yeS5BcHAsXHJcbiAgICAgIGV2ZW50OiBNZXRhTWV0cmljc0V2ZW50TmFtZS5BcHBJbnN0YWxsZWQsXHJcbiAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gSWYgdGhlIGNvbnRyb2xsZXIgaXMgbm90IHNldCB5ZXQsIHdlIHdhaXQgYW5kIHRyeSB0byBhZGQgdGhlIFwiQXBwIEluc3RhbGxlZFwiIGV2ZW50IGFnYWluLlxyXG4gICAgYWRkQXBwSW5zdGFsbGVkRXZlbnQoKTtcclxuICB9LCAxMDAwKTtcclxufTtcclxuXHJcbi8vIE9uIGZpcnN0IGluc3RhbGwsIG9wZW4gYSBuZXcgdGFiIHdpdGggTWV0YU1hc2tcclxuYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCh7IHJlYXNvbiB9KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgcmVhc29uID09PSAnaW5zdGFsbCcgJiZcclxuICAgICEocHJvY2Vzcy5lbnYuTUVUQU1BU0tfREVCVUcgfHwgcHJvY2Vzcy5lbnYuSU5fVEVTVClcclxuICApIHtcclxuICAgIGFkZEFwcEluc3RhbGxlZEV2ZW50KCk7XHJcbiAgICBwbGF0Zm9ybS5vcGVuRXh0ZW5zaW9uSW5Ccm93c2VyKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwU2VudHJ5R2V0U3RhdGVHbG9iYWwoc3RvcmUpIHtcclxuICBnbG9iYWwuc3RhdGVIb29rcy5nZXRTZW50cnlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGZ1bGxTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICBjb25zdCBkZWJ1Z1N0YXRlID0gbWFza09iamVjdCh7IG1ldGFtYXNrOiBmdWxsU3RhdGUgfSwgU0VOVFJZX1NUQVRFKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJyb3dzZXI6IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LFxyXG4gICAgICBzdG9yZTogZGVidWdTdGF0ZSxcclxuICAgICAgdmVyc2lvbjogcGxhdGZvcm0uZ2V0VmVyc2lvbigpLFxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmFja2dyb3VuZCgpIHtcclxuICBpbml0aWFsaXplKCkuY2F0Y2gobG9nLmVycm9yKTtcclxufVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5TS0lQX0JBQ0tHUk9VTkRfSU5JVElBTElaQVRJT04pIHtcclxuICBpbml0QmFja2dyb3VuZCgpO1xyXG59XHJcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5emRISmxZVzB0YUhSMGNDOXViMlJsWDIxdlpIVnNaWE12Y21WaFpHRmliR1V0YzNSeVpXRnRMMnhwWWk5cGJuUmxjbTVoYkM5emRISmxZVzF6TDNCcGNHVnNhVzVsTG1weklpd2libTlrWlY5dGIyUjFiR1Z6TDNOMGNtVmhiUzFvZEhSd0wyNXZaR1ZmYlc5a2RXeGxjeTl5WldGa1lXSnNaUzF6ZEhKbFlXMHZiR2xpTDJsdWRHVnlibUZzTDNOMGNtVmhiWE12YzNSaGRHVXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZjM1J5WldGdExXaDBkSEF2Ym05a1pWOXRiMlIxYkdWekwzSmxZV1JoWW14bExYTjBjbVZoYlM5c2FXSXZhVzUwWlhKdVlXd3ZjM1J5WldGdGN5OXpkSEpsWVcwdFluSnZkM05sY2k1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5emRISmxZVzB0YUhSMGNDOXViMlJsWDIxdlpIVnNaWE12Y21WaFpHRmliR1V0YzNSeVpXRnRMM0psWVdSaFlteGxMV0p5YjNkelpYSXVhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZkR2h5YjNWbmFDOXBibVJsZUM1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5MGFXNTVMWE5sWTNBeU5UWnJNUzlxY3k1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5MGFXNTVMWE5sWTNBeU5UWnJNUzl5Wm1NMk9UYzVMbXB6SWl3aWJtOWtaVjl0YjJSMWJHVnpMM1J2TFdSaGRHRXRkbWxsZHk5cGJtUmxlQzVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTkwZDJWbGRHNWhZMnd0ZFhScGJDOXVZV05zTFhWMGFXd3Vhbk1pTENKdWIyUmxYMjF2WkhWc1pYTXZkSGRsWlhSdVlXTnNMMjVoWTJ3dFptRnpkQzVxY3lJc0ltNXZaR1ZmYlc5a2RXeGxjeTkwZVhCbFptOXlZMlV2WlhKeWIzSnpMbXB6SWl3aWJtOWtaVjl0YjJSMWJHVnpMM1I1Y0dWbWIzSmpaUzlsZUhSeVlTNXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OTBlWEJsWm05eVkyVXZhVzVrWlhndWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmRIbHdaV1p2Y21ObEwyNWhkR2wyWlM1cWN5SXNJbTV2WkdWZmJXOWtkV3hsY3k5MWFXNTBPR0Z5Y21GNWN5OWpiMjVqWVhRdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmRXbHVkRGhoY25KaGVYTXZaWEYxWVd4ekxtcHpJaXdpYm05a1pWOXRiMlIxYkdWekwzVnBiblE0WVhKeVlYbHpMMlp5YjIwdGMzUnlhVzVuTG1weklpd2libTlrWlY5dGIyUjFiR1Z6TDNWcGJuUTRZWEp5WVhsekwzUnZMWE4wY21sdVp5NXFjeUlzSW01dlpHVmZiVzlrZFd4bGN5OTJZWEoxYVc1MExXSnBkR052YVc0dmFXNWtaWGd1YW5NaUxDSnViMlJsWDIxdlpIVnNaWE12ZDJWaUxXVnVZMjlrYVc1bkwzTnlZeTlzYVdJdWFuTWlMQ0p1YjJSbFgyMXZaSFZzWlhNdmQyaGhkSGRuTFdabGRHTm9MMlJwYzNRdlptVjBZMmd1ZFcxa0xtcHpJaXdpYm05a1pWOXRiMlIxYkdWekwzZHBaaTlwYm1SbGVDNXFjeUlzSW5Ob1lYSmxaQzlqYjI1emRHRnVkSE12WVd4aGNtMXpMbXB6SWl3aWMyaGhjbVZrTDJOdmJuTjBZVzUwY3k5emJXRnlkRlJ5WVc1ellXTjBhVzl1Y3k1cWN5SXNJbk5vWVhKbFpDOWpiMjV6ZEdGdWRITXZkR1Z6ZEMxbWJHRm5jeTVxY3lJc0ltRndjQzl6WTNKcGNIUnpMMkpoWTJ0bmNtOTFibVF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyaEhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU14UWtFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEwUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3T3p0QlExUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN08wRkROVWRCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN08wRkRNVkpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenM3TzBGRE9VUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN1FVTllRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN08wRkRha1pCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZGpGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE9VZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdPenRCUXpOR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTndVVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOeVFrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNwQ1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpOQ1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGFrUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYUVSQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZETVVaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5RUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3TzBGRE5XMUNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGREwwUlBMRTFCUVUwc2RVSkJRWFZDTEVkQlFVY3NlVUpCUVhsQ08wRkJRVU1zVDBGQlFTeERRVUZCTEhWQ1FVRkJMRWRCUVVFc2RVSkJRVUU3UVVGRE1VUXNUVUZCVFN4NVEwRkJlVU1zUjBGRGNFUXNNa05CUVRKRE8wRkJRVU1zVDBGQlFTeERRVUZCTEhsRFFVRkJMRWRCUVVFc2VVTkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFJqbERMRWxCUVVFc1MwRkJRU3hIUVVGQkxFOUJRVUU3UVVGRlR5eE5RVUZOTEhkRFFVRjNReXhIUVVGSExGbEJRVTBzUjBGQlJ5eEZRVUZGTzBGQlFVTXNUMEZCUVN4RFFVRkJMSGREUVVGQkxFZEJRVUVzZDBOQlFVRTdRVUZETjBRc1RVRkJUU3h2UTBGQmIwTXNSMEZCUnl4SFFVRkhPMEZCUVVNc1QwRkJRU3hEUVVGQkxHOURRVUZCTEVkQlFVRXNiME5CUVVFN1FVRkRha1FzVFVGQlRTdzRRMEZCT0VNc1IwRkJSeXhEUVVGRE8wRkJRVU1zVDBGQlFTeERRVUZCTERoRFFVRkJMRWRCUVVFc09FTkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFNucEVMRTFCUVUwc05rSkJRVFpDTEVkQlFVY3NLMEpCUVN0Q08wRkJRVU1zVDBGQlFTeERRVUZCTERaQ1FVRkJMRWRCUVVFc05rSkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkpOMFVzU1VGQlFTeFZRVUZCTEhOQ1FVRkJMRU5CUVVFc1QwRkJRU3hEUVVGQkxGRkJRVUVzUTBGQlFTeERRVUZCTEVOQlFVRTdRVUZEUVN4SlFVRkJMR1ZCUVVFc2MwSkJRVUVzUTBGQlFTeFBRVUZCTEVOQlFVRXNaVUZCUVN4RFFVRkJMRU5CUVVFc1EwRkJRVHRCUVVOQkxFbEJRVUVzVVVGQlFTeHpRa0ZCUVN4RFFVRkJMRTlCUVVFc1EwRkJRU3hOUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTzBGQlEwRXNTVUZCUVN4clFrRkJRU3h6UWtGQlFTeERRVUZCTEU5QlFVRXNRMEZCUVN4cFFrRkJRU3hEUVVGQkxFTkJRVUVzUTBGQlFUdEJRVU5CTEVsQlFVRXNXVUZCUVN4elFrRkJRU3hEUVVGQkxFOUJRVUVzUTBGQlFTeFZRVUZCTEVOQlFVRXNRMEZCUVN4RFFVRkJPMEZCUTBFc1NVRkJRU3gzUWtGQlFTeHpRa0ZCUVN4RFFVRkJMRTlCUVVFc1EwRkJRU3gxUWtGQlFTeERRVUZCTEVOQlFVRXNRMEZCUVR0QlFVTkJMRWxCUVVFc1dVRkJRU3hQUVVGQkxFTkJRVUVzY1VKQlFVRXNRMEZCUVN4RFFVRkJPMEZCUlVFc1NVRkJRU3gxUWtGQlFTeHpRa0ZCUVN4RFFVRkJMRTlCUVVFc1EwRkJRU3gxUWtGQlFTeERRVUZCTEVOQlFVRXNRMEZCUVR0QlFVVkJMRWxCUVVFc1owSkJRVUVzVDBGQlFTeERRVUZCTEdkQ1FVRkJMRU5CUVVFc1EwRkJRVHRCUVVOQkxFbEJRVUVzVDBGQlFTeFBRVUZCTEVOQlFVRXNORUpCUVVFc1EwRkJRU3hEUVVGQk8wRkJUMEVzU1VGQlFTeGxRVUZCTEU5QlFVRXNRMEZCUVN4dlEwRkJRU3hEUVVGQkxFTkJRVUU3UVVGUFFTeEpRVUZCTEd0Q1FVRkJMRTlCUVVFc1EwRkJRU3cwUTBGQlFTeERRVUZCTEVOQlFVRTdRVUZEUVN4SlFVRkJMRTFCUVVFc1QwRkJRU3hEUVVGQkxHZERRVUZCTEVOQlFVRXNRMEZCUVR0QlFVTkJMRWxCUVVFc1ZVRkJRU3hQUVVGQkxFTkJRVUVzYlVOQlFVRXNRMEZCUVN4RFFVRkJPMEZCUTBFc1NVRkJRU3hSUVVGQkxFOUJRVUVzUTBGQlFTeFpRVUZCTEVOQlFVRXNRMEZCUVR0QlFVTkJMRWxCUVVFc1kwRkJRU3h6UWtGQlFTeERRVUZCTEU5QlFVRXNRMEZCUVN4alFVRkJMRU5CUVVFc1EwRkJRU3hEUVVGQk8wRkJRMEVzU1VGQlFTeFpRVUZCTEhOQ1FVRkJMRU5CUVVFc1QwRkJRU3hEUVVGQkxHZENRVUZCTEVOQlFVRXNRMEZCUVN4RFFVRkJPMEZCUTBFc1NVRkJRU3hoUVVGQkxITkNRVUZCTEVOQlFVRXNUMEZCUVN4RFFVRkJMSFZDUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTzBGQlEwRXNTVUZCUVN4alFVRkJMSE5DUVVGQkxFTkJRVUVzVDBGQlFTeERRVUZCTEcxQ1FVRkJMRU5CUVVFc1EwRkJRU3hEUVVGQk8wRkJRMEVzU1VGQlFTeG5Ra0ZCUVN4elFrRkJRU3hEUVVGQkxFOUJRVUVzUTBGQlFTeHhRa0ZCUVN4RFFVRkJMRU5CUVVFc1EwRkJRVHRCUVVOQkxFbEJRVUVzWlVGQlFTeFBRVUZCTEVOQlFVRXNiVUpCUVVFc1EwRkJRU3hEUVVGQk8wRkJSVUVzU1VGQlFTeHZRa0ZCUVN4elFrRkJRU3hEUVVGQkxFOUJRVUVzUTBGQlFTeDNRa0ZCUVN4RFFVRkJMRU5CUVVFc1EwRkJRVHRCUVVOQkxFbEJRVUVzZFVKQlFVRXNkVUpCUVVFc1EwRkJRU3hQUVVGQkxFTkJRVUVzTkVKQlFVRXNRMEZCUVN4RFFVRkJMRU5CUVVFN1FVRkhRU3hKUVVGQkxITkNRVUZCTEhWQ1FVRkJMRU5CUVVFc1QwRkJRU3hEUVVGQkxIVkNRVUZCTEVOQlFVRXNRMEZCUVN4RFFVRkJPMEZCUjBFc1NVRkJRU3hyUWtGQlFTeHpRa0ZCUVN4RFFVRkJMRTlCUVVFc1EwRkJRU3h2UWtGQlFTeERRVUZCTEVOQlFVRXNRMEZCUVR0QlFVTkJMRWxCUVVFc05rSkJRVUVzYzBKQlFVRXNRMEZCUVN4UFFVRkJMRU5CUVVFc2NVTkJRVUVzUTBGQlFTeERRVUZCTEVOQlFVRTdRVUZEUVN4SlFVRkJMRzFDUVVGQkxITkNRVUZCTEVOQlFVRXNUMEZCUVN4RFFVRkJMSFZDUVVGQkxFTkJRVUVzUTBGQlFTeERRVUZCTzBGQlEwRXNTVUZCUVN4VFFVRkJMSE5DUVVGQkxFTkJRVUVzVDBGQlFTeERRVUZCTEhOQ1FVRkJMRU5CUVVFc1EwRkJRU3hEUVVGQk8wRkJRWGRFTEN0RFFVRkJMRVZCUVVFc1NVRkJRU3hQUVVGQkxFOUJRVUVzUzBGQlFTeFZRVUZCTEVWQlFVRXNUMEZCUVN4SlFVRkJMRU5CUVVFc1EwRkJRU3hKUVVGQkxHOUNRVUZCTEVsQlFVRXNUMEZCUVN4RlFVRkJMRU5CUVVFc1EwRkJRU3hKUVVGQkxHMUNRVUZCTEVsQlFVRXNUMEZCUVN4RlFVRkJMRU5CUVVFc1EwRkJRU3hQUVVGQkxFTkJRVUVzTWtKQlFVRXNkVUpCUVVFc1JVRkJRU3hQUVVGQkxGZEJRVUVzUjBGQlFTeG5Ra0ZCUVN4SFFVRkJMR2xDUVVGQkxFTkJRVUVzUlVGQlFTeEZRVUZCTEZkQlFVRXNRMEZCUVN4RFFVRkJMRVZCUVVFN1FVRkJRU3h0UkVGQlFTeEZRVUZCTEVsQlFVRXNRMEZCUVN4WFFVRkJMRWxCUVVFc1IwRkJRU3hKUVVGQkxFZEJRVUVzVjBGQlFTeEZRVUZCTEVWQlFVRXNUMEZCUVN4SFFVRkJMRU5CUVVFc1JVRkJRU3hEUVVGQkxFbEJRVUVzUjBGQlFTeExRVUZCTEVsQlFVRXNTVUZCUVN4UFFVRkJMRWRCUVVFc1MwRkJRU3hSUVVGQkxFbEJRVUVzVDBGQlFTeEhRVUZCTEV0QlFVRXNWVUZCUVN4RlFVRkJMRVZCUVVFc1QwRkJRU3hGUVVGQkxGTkJRVUVzUjBGQlFTeEZRVUZCTEVOQlFVRXNSVUZCUVN4RFFVRkJMRWxCUVVFc1VVRkJRU3gzUWtGQlFTeERRVUZCTEZkQlFVRXNRMEZCUVN4RFFVRkJMRU5CUVVFc1NVRkJRU3hMUVVGQkxFbEJRVUVzUzBGQlFTeEpRVUZCTEVOQlFVRXNSMEZCUVN4RFFVRkJMRVZCUVVFc1JVRkJRU3hQUVVGQkxFdEJRVUVzU1VGQlFTeERRVUZCTEVkQlFVRXNRMEZCUVN4RFFVRkJMRVZCUVVFc1EwRkJRU3hKUVVGQkxGTkJRVUVzUlVGQlFTeERRVUZCTEVOQlFVRXNTVUZCUVN4M1FrRkJRU3hOUVVGQkxHVkJRVUVzU1VGQlFTeE5RVUZCTEhsQ1FVRkJMRU5CUVVFc1EwRkJRU3hMUVVGQkxFbEJRVUVzUjBGQlFTeEpRVUZCTEVkQlFVRXNSVUZCUVN4RlFVRkJMRWxCUVVFc1IwRkJRU3hMUVVGQkxGTkJRVUVzU1VGQlFTeE5RVUZCTEZWQlFVRXNaVUZCUVN4TFFVRkJMRU5CUVVFc1IwRkJRU3hGUVVGQkxFZEJRVUVzUTBGQlFTeEZRVUZCTEVWQlFVRXNTVUZCUVN4UFFVRkJMSEZDUVVGQkxFZEJRVUVzVFVGQlFTeDVRa0ZCUVN4RFFVRkJMRWRCUVVFc1JVRkJRU3hIUVVGQkxFTkJRVUVzUjBGQlFTeEpRVUZCTEVOQlFVRXNRMEZCUVN4SlFVRkJMRWxCUVVFc1MwRkJRU3hKUVVGQkxFbEJRVUVzU1VGQlFTeEpRVUZCTEVsQlFVRXNRMEZCUVN4RlFVRkJMRVZCUVVFc1RVRkJRU3hsUVVGQkxFTkJRVUVzVFVGQlFTeEZRVUZCTEVkQlFVRXNSVUZCUVN4SlFVRkJMRU5CUVVFc1EwRkJRU3hGUVVGQkxFMUJRVUVzUlVGQlFTeE5RVUZCTEVOQlFVRXNSMEZCUVN4RFFVRkJMRWRCUVVFc1IwRkJRU3hEUVVGQkxFZEJRVUVzUTBGQlFTeERRVUZCTEVWQlFVRXNSVUZCUVN4RlFVRkJMRU5CUVVFc1RVRkJRU3hSUVVGQkxFZEJRVUVzUjBGQlFTeERRVUZCTEVOQlFVRXNTVUZCUVN4TFFVRkJMRVZCUVVFc1JVRkJRU3hMUVVGQkxFbEJRVUVzUTBGQlFTeEhRVUZCTEVWQlFVRXNUVUZCUVN4RFFVRkJMRU5CUVVFc1JVRkJRU3hEUVVGQkxFOUJRVUVzVFVGQlFTeERRVUZCTEVWQlFVRTdRVUZCUVN4eFEwRkJRU3hGUVVGQkxFOUJRVUVzUjBGQlFTeEpRVUZCTEVkQlFVRXNWMEZCUVN4SFFVRkJMRWRCUVVFc1IwRkJRU3hGUVVGQkxGTkJRVUVzUjBGQlFTeEZRVUZCTEVOQlFVRXNSVUZCUVRzN096czdPenM3TzBGQlVYaEVMRTFCUVUwN08wTkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVRTdRVUZEZWtJc1RVRkJUU3hwUWtGQmFVSTdSVUZCUlN4SFFVRkhMR1ZCUVVFc1VVRkJRVHREUVVGdFFpeERRVUZCTzBGQlJTOURMRTFCUVUwc09FSkJRVGhDTzBWQlEyeERMRU5CUVVNc1NVRkJRU3gxUWtGQmMwSXNSMEZCUnl4SlFVRkpPMFZCUXpsQ0xFTkJRVU1zU1VGQlFTdzRRa0ZCTmtJc1IwRkJSeXhKUVVGSk8wVkJRM0pETEVOQlFVTXNTVUZCUVN3MFFrRkJNa0lzUjBGQlJ5eEpRVUZCTzBOQlEyaERMRU5CUVVFN1FVRkZSQ3hOUVVGTkxIVkNRVUYxUWl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVRTdRVUZGTDBNc1UwRkJRU3hSUVVGSExHZENRVUZuUWl4RFFVRkRMRTlCUVU4c1NVRkJTU3hsUVVGbExFZEJRVWNzVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkJPMEZCUld4RkxFMUJRVTBzVjBGQlZ5eEpRVUZKTEZWQlFVRXNVVUZCYVVJc1JVRkJSU3hEUVVGQk8wRkJRM2hETEUxQlFVMHNjMEpCUVhOQ0xFbEJRVWtzYjBKQlFVRXNVVUZCYlVJc1JVRkJSU3hEUVVGQk8wRkJSWEpFTEVsQlFVa3NZMEZCWXl4TFFVRkxMRU5CUVVFN1FVRkRka0lzU1VGQlNTeHhRa0ZCY1VJc1MwRkJTeXhEUVVGQk8wRkJRemxDTEVsQlFVa3NhVUpCUVdsQ0xFdEJRVXNzUTBGQlFUdEJRVU14UWl4TlFVRk5MSE5DUVVGelFpeEZRVUZGTEVOQlFVRTdRVUZET1VJc1RVRkJUU3d3UWtGQk1FSXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJRVHRCUVVONlF5eE5RVUZOTEhWQ1FVRjFRaXhGUVVGRkxFTkJRVUU3UVVGREwwSXNTVUZCU1N4VlFVRlZMRU5CUVVFN096dEJRVWRrTEUxQlFVMHNVMEZCVXl4UFFVRlBMRWxCUVVrc1VVRkJVU3hEUVVGQk8wRkJRMnhETEUxQlFVMHNZVUZCWVN4TlFVRk5MRWRCUVVjc1NVRkJTU3hoUVVGQkxGRkJRVzlDTEVWQlFVVXNSMEZCUnl4SlFVRkpMRmRCUVVFc1VVRkJWU3hGUVVGRkxFTkJRVUU3UVVGRGVrVXNTVUZCU1N4aFFVRmhMRU5CUVVFN1FVRkZha0lzU1VGQlNTeE5RVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMR1ZCUVdVc1JVRkJSVHRGUVVONFF5eE5RVUZOTEZkQlFWY3NhVUpCUVdsQ0xFZEJRVWNzVlVGQlZTeEpRVUZKTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRVHREUVVOMFJUdEJRVVZCTEUxQlFVMHNhMEpCUVd0Q0xFbEJRVWtzUjBGQlJ5eERRVUZETEU5QlFVOHNTVUZCU1N3d1FrRkJNRUlzUTBGQlF5eERRVUZCTzBGQlJYUkZMRTFCUVUwc05rSkJRVFpDTEV0QlFVc3NRMEZCUVRzN1FVRkZlRU1zVFVGQlRTeG5RMEZCWjBNc01FSkJRVEJDTEVOQlFVRTdRVUZGYUVVc1RVRkJUU3g1UWtGQmVVSXNkMEpCUVhkQ0xFTkJRVUU3UVVGRGRrUXNUVUZCVFN3MFFrRkJORUlzTWtKQlFUSkNMRU5CUVVFN096dEJRVXQwUkN4TlFVRk5MSGxDUVVGNVFpeEpRVUZKTEU5QlFVRXNVVUZCV1N4RlFVRkZMRU5CUVVFN096czdPenM3T3p0QlFVVjRSQ3hQUVVGQkxIVkNRVUZCTEVkQlFVRXNjMEpCUVVFc1EwRkJRVHRCUVU5QkxFMUJRVTA3T3pzN1EwRkpUQ3hIUVVGSExFTkJRVUVzUTBGQlFTeEZRVUZCTEV0QlFVRXNaMEpCUVdVc1IwRkJSU3hEUVVGQk96czdPenM3TzBGQlQzSkNMRTFCUVUwc2VVSkJRWGxDTEZsQlFWazdSVUZEZWtNc1RVRkJUU3hQUVVGUExFMUJRVTBzY1VKQlFVRXNVVUZCVHl4TFFVRkxMRTFCUTNaQ0xFTkJRVU03T3pzN096czdPenM3T3pzN08wbEJZMHdzUzBGQlN5eFpRVUZaTzBsQlEycENMRmxCUVZrc1VVRkJRVHRIUVVOaUxFTkJRVU1zUzBGRFJ5eERRVUZGTEZWQlFWYzdTVUZEYUVJc1EwRkJRU3hEUVVGQkxFVkJRVUVzWlVGQlFTeDNRa0ZCZFVJc1IwRkJSU3hEUVVGQk8wbEJRM3BDTEU5QlFVOHNUVUZCVFN4RFFVRkJPMGRCUTJRc1EwRkJReXhOUVVOSkxFTkJRVU1zVFVGQlRUdEpRVU5ZTEVOQlFVRXNRMEZCUVN4RlFVRkJMR1ZCUVVFc2QwSkJRWFZDTEVkQlFVVXNRMEZCUVR0SFFVTXhRaXhEUVVGRExFTkJRVUU3T3p0RlFVZEtMRXRCUVVzc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTzBsQlEzUkNMSEZDUVVGQkxGRkJRVThzUzBGQlN5eFpRVU5GTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVN1RVRkRia0lzVFVGQlRTeEpRVUZCTEcxQ1FVRnJRaXhOUVVGRE8wdEJRekZDTEVOQlFVTXNTMEZEUnl4RFFVRkRMRTFCUVUwN1RVRkRWaXhEUVVGQkxFTkJRVUVzUlVGQlFTeGxRVUZCTEhkQ1FVRjFRaXhIUVVGRkxFTkJRVUU3UzBGRE1VSXNRMEZCUXl4TlFVTkpMRU5CUVVNc1RVRkJUVHM3TzAxQlIxZ3NRMEZCUVN4RFFVRkJMRVZCUVVFc1pVRkJRU3gzUWtGQmRVSXNSMEZCUlN4RFFVRkJPMHRCUXpGQ0xFTkJRVU1zUTBGQlFUdEhRVU5PTzBOQlEwUXNRMEZCUVRzN08wRkJSMFFzU1VGQlNTeGhRVUZoTEVOQlFVRTdRVUZEYWtJc1NVRkJTU3hsUVVGbExFTkJRVUU3UVVGRmJrSXNjVUpCUVVFc1VVRkJUeXhSUVVGUkxGVkJRVlVzV1VGQldTeERRVUZETEU5QlFVOHNUMEZCVHl4TFFVRkxPenRGUVVWMlJDeE5RVUZOTEdGQlFXRXNRMEZCUVR0RlFVTnVRaXhOUVVGTkxHRkJRV0VzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkJPMFZCUXpGQ0xFMUJRVTA3TzBkQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVFN1JVRkZOMElzVFVGQlRTeE5RVUZOTEUxQlFVMHNTMEZCUVN4SlFVRkJMRWxCUVU0c1RVRkJUU3hMUVVGQkxFdEJRVUVzUTBGQlFTeEhRVUZCTEV0QlFVRXNRMEZCUVN4SFFVRk9MRTFCUVUwc1NVRkJTeXhEUVVGQk8wVkJRM1pDTEUxQlFVMHNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZCTEVOQlFVRXNSVUZCUVN4TFFVRkJMRzFDUVVGclFpeEZRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRVHRGUVVVNVJDeE5RVUZOTEdWQlFXVXNiMEpCUVc5Q0xFTkJRVU1zVlVGQlZTeEZRVUZGTEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3UlVGRE1VVXNUVUZCVFN4clFrRkJhMElzZFVKQlFYVkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdSVUZGZEVVc1NVRkRSU3hsUVVGbExFdEJRVXNzUTBGQlF5eEpRVU53UWl4dFFrRkJiVUlzUzBGQlN5eFpRVUZaTEVsQlFVa3NaVUZCWlN4SFFVRkhMRU5CUVVFN08wbEJSVE5FT3p0SlFVVkJMR0ZCUVdFc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZCTzBsQlEzUkNMSFZDUVVGMVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlFUdEhRVU12UkN4TlFVRk5PMGxCUTB3c1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5d3lRa0ZCTWtJc1EwRkJReXhEUVVGQk8wZEJRemxETzBOQlEwUXNRMEZCUXl4RFFVRkJPMEZCUlVZc2NVSkJRVUVzVVVGQlR5eFJRVUZSTEd0Q1FVRnJRaXhaUVVGWkxFTkJRVU1zVDBGQlR5eFBRVUZQTEV0QlFVczdPMFZCUlM5RUxFMUJRVTBzWVVGQllTeERRVUZCT3pzN1JVRkhia0lzWlVGQlpTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVFN1EwRkRla0lzUTBGQlF5eERRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlowVkdMRFJDUVVFMFFqdEZRVU14UWl4SlFVRkpPMGxCUTBZc1RVRkJUU3haUVVGWkxFMUJRVTBzZDBKQlFYZENMRVZCUVVVc1EwRkJRVHRKUVVOc1JDeE5RVUZOTEdWQlFXVXNUVUZCVFN4RFFVRkJMRU5CUVVFc1JVRkJRU3d3UWtGQlFTeFJRVUY1UWl4SFFVRkZMRU5CUVVFN1NVRkpkRVFzU1VGQlNTdzRRa0ZCT0VJc1EwRkJRVHRKUVVOc1F5eEpRVUZKTEVkQlFVRXNZVUZCV1N4RlFVRkZPMDFCUTJoQ0xFMUJRVTBzWTBGQll5eE5RVUZOTEhGQ1FVRkJMRkZCUVU4c1VVRkJVU3hSUVVGUkxFbEJRVWtzUTBGQlF5eERRVU53UkN4blEwRkJaME1zUTBGRGFrTXNRMEZCUXl4RFFVRkJPMDFCUlVZc2FVTkJRMFVzUTBGQlFTeFhRVUZYTEV0QlFVRXNTVUZCUVN4SlFVRllMRmRCUVZjc1MwRkJRU3hMUVVGQkxFTkJRVUVzUjBGQlFTeExRVUZCTEVOQlFVRXNSMEZCV0N4WFFVRlhMQ3RDUVVGblF5eE5RVUZMTEZOQlFWTXNRMEZCUVR0TlFVTXpSQ3hOUVVGTkxIRkNRVUZCTEZGQlFVOHNVVUZCVVN4UlFVRlJMRWxCUVVrc1EwRkJRenRSUVVGRkxEaENRVUZCTzA5QlFXZERMRU5CUVVNc1EwRkJRVHRMUVVOMlJUdEpRVVZCTEdWQlFXVXNRMEZEWWl4VFFVRlRMRVZCUTFRc1dVRkJXU3hGUVVOYUxFVkJRVVVzUlVGRFJpdzRRa0ZEUml4RFFVRkRMRU5CUVVFN1NVRkRSQ3hKUVVGSkxFTkJRVU1zUjBGQlFTeGhRVUZaTEVWQlFVVTdUVUZEYWtJc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RFFVRkJPMHRCUTJwRE8wbEJRMEVzVFVGQlRTeHpRa0ZCYzBJc1JVRkJSU3hEUVVGQk8wbEJRemxDTEZOQlFVRXNVVUZCUnl4TFFVRkxMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUVR0SlFVTTNReXh4UWtGQmNVSXNSVUZCUlN4RFFVRkJPMGRCUTNoQ0xFTkJRVU1zWTBGQll6dEpRVU5rTEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzBkQlF6ZENPME5CUTBZN096czdPMEZCUzBFc09FTkJRVGhETEV0QlFVc3NRMEZCUXp0RlFVTnNSQ3hYUVVGWExFZEJRVWM3U1VGRFdpeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdEhRVU42UWp0RFFVTkdPenM3T3pzN1FVRk5RU3g1UTBGQmVVTTdSVUZEZGtNc1NVRkJTU3hOUVVGTkxFTkJRVUU3UlVGRFZpeEpRVUZKTzBsQlEwWXNUVUZCVFN4clEwRkJhME1zU1VGQlNTeEhRVUZITEVOQlF6ZERMRTlCUVU4c1NVRkJTU3d3UWtGRFlpeERRVUZETEVOQlFVRTdPenM3U1VGSlJDd3JRa0ZCSzBJc1MwRkJTeXhIUVVGSExHMUNRVUZ0UWl4RFFVRkJPMGxCUlRGRUxGTkJRVk1zVFVGQlRTeFRRVUZUTEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRKUVVOb1JDeE5RVUZOTEdGQlFXRXNRMEZCUXl4TFFVRkxMRVZCUVVVc0swSkJRU3RDTEV0QlFVc3NRMEZCUXl4RFFVRkJPMGxCUTJoRkxFMUJRVTBzWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlN4cFEwRkJhVU1zUTBGQlF5eERRVUZCT3pzN1NVRkhha1VzU1VGQlNTeGxRVUZsTEVOQlFVRTdTVUZEYmtJc1NVRkJTU3hqUVVGakxFTkJRVUU3U1VGRGJFSXNUVUZCVFN4bFFVRmxMRWxCUVVrc1QwRkJUeXhEUVVGRExIRkNRVUZ4UWp0TlFVTndSQ3hyUWtGQmEwSXNUMEZCVHl4RFFVRkJPMDFCUTNwQ0xHbENRVUZwUWl4TlFVRk5MRU5CUVVFN1MwRkRlRUlzUTBGQlF5eERRVUZCT3pzN08wbEJTVVlzVFVGQlRTeHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVRTdPenRKUVVkb1JDeE5RVUZOTEZOQlFWTXNTMEZCU3l4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVUU3T3pzN08wbEJTM2hETEZWQlFWVXNRMEZEVWl4TlFVRk5MR05CUVdNc1EwRkJReXhKUVVGSkxDdENRVUVyUWl4RlFVRkZMRU5CUVVNc1JVRkRNMFFzTmtKQlEwWXNRMEZCUXl4RFFVRkJPMGxCUTBRc1RVRkJUU3haUVVGWkxFTkJRVUU3UjBGRGJrSXNRMEZCUXl4alFVRmpPMGxCUTJRc1NVRkJTU3hMUVVGTExGbEJRVmtzSzBKQlFTdENMRVZCUVVVN1RVRkRjRVFzVDBGQlR5eExRVUZMTEVOQlExWXNjMFZCUTBZc1EwRkJReXhEUVVGQk8wdEJRMFlzVFVGQlRUdE5RVU5NTEU5QlFVOHNUVUZCVFN4RFFVRkRMRFJEUVVFMFF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkJPMHRCUTNCRk8wZEJRMFFzVTBGQlV6dEpRVU5TTEVsQlFVa3NUVUZCVFN4RlFVRkZPMDFCUTFZc1RVRkJUU3hQUVVGUExFVkJRVVVzUTBGQlFUdExRVU5xUWp0SFFVTkdPME5CUTBZN096czdPenM3T3pzN096dEJRVmxQTERCRFFVRXdRenM3UlVGRkwwTXNUVUZCVFN4WFFVRlhMRWxCUVVrc1UwRkJRU3hSUVVGUkxFTkJRVU03U1VGQlJTeFpRVUZCTEZkQlFVRXNVVUZCUVR0SFFVRlpMRU5CUVVNc1EwRkJRVHRGUVVNM1F5eFJRVUZSTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU1zUTBGQlFUczdPenRGUVVsc1F5eG5Ra0ZEUlN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hKUVVGSkxFVkJRVVVzUzBGQlN5eFJRVUZSTEhGQ1FVRnhRaXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZCT3pzN096czdSVUZOTTBVc1NVRkJTU3hoUVVGaExFbEJRVWtzUTBGQlF5eGhRVUZoTEV0QlFVc3NSVUZCUlRzN1NVRkZlRU1zWjBKQlFXZENMRkZCUVZFc2NVSkJRWEZDTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVFN1NVRkROMFFzVFVGQlRTeGxRVUZsTEVOQlFVTXNhMFJCUVd0RUxFTkJRVU1zUTBGQlFUdEhRVU16UlRzN08wVkJSMEVzVVVGQlVTeEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkhMRTlCUVZFN08wbEJSVFZDTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVUVzUTBGQlFTeEZRVUZCTEdkQ1FVRkJMRkZCUVdVc1JVRkJReXhoUVVGaExFTkJRVU1zUTBGQlFUdEpRVU55UkN4TlFVRk5MR2xDUVVGcFFpeERRVUZETEVkQlFVY3NSVUZCUlRzN1RVRkZNMElzVDBGQlR6dFJRVUZGTEdOQlFVRTdUMEZCWlR0TFFVTjZRaXhEUVVGRExFTkJRVUU3UjBGRFNDeERRVUZETEVOQlFVRTdPenRGUVVkR0xHZENRVUZuUWl4TlFVRk5MRkZCUVZFc1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZCTzBWQlEzcEVMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVU3U1VGRGJFSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkJPMGRCUXpORU96dEZRVVZCTEZWQlFWVXNXVUZCV1N4RFFVRkRMR0ZCUVdFc1MwRkJTeXhEUVVGRExFTkJRVUU3T3p0RlFVY3hReXhWUVVGVkxFbEJRVWtzUTBGQlF5eGhRVUZoTEV0QlFVc3NRMEZCUXl4RFFVRkJPenM3UlVGSGJFTXNUMEZCVHl4aFFVRmhMRXRCUVVzc1EwRkJRVHREUVVNelFqdEJRVVZCTEN0RVFVRXJSRHRGUVVNM1JDeE5RVUZOT3p0SFFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGQk8wVkJRemRDTEUxQlFVMHNTMEZCU3l4TlFVRk5MRXRCUVVFc1NVRkJRU3hKUVVGT0xFMUJRVTBzUzBGQlFTeExRVUZCTEVOQlFVRXNTVUZCVGl4TlFVRk5MRWxCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEhRVUZITEUxQlFVMHNTMEZCUVN4SlFVRkJMRWxCUVU0c1RVRkJUU3hMUVVGQkxFdEJRVUVzUTBGQlFTeEhRVUZCTEV0QlFVRXNRMEZCUVN4SFFVRk9MRTFCUVUwc1IwRkJTU3hEUVVGQk8wVkJRMjVFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlR0SlFVTXZRaXhQUVVGUExFMUJRVTBzUTBGRFdDeHZSVUZCYjBVc1JVRkRjRVVzUlVGQlJTeEZRVU5HTEcxQ1FVTkdMRU5CUVVNc1EwRkJRenRKUVVOR0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNiMFZCUTBZc1EwRkJReXhEUVVGQk8wZEJRMGc3UlVGRFFTeFBRVUZSTEVOQlFVRXNSVUZCUlN4RlFVRkhMRU5CUVVFc1EwRkJRU3hGUVVGSExHMUNRVUZ2UWl4RFFVRkJMRU5CUVVNc1EwRkJRVHREUVVOMlF6czdPenM3T3pzN096czdPMEZCV1U4c05rWkJTMHc3T3pzN08wVkJTMEVzWVVGQllTeEpRVUZKTEcxQ1FVRkJMRkZCUVd0Q0xFTkJRVU03U1VGRGJFTXNhVUpCUVdsQ0xFOUJRVThzU1VGQlNTeHJRa0ZCYTBJN08wbEJSVGxETEhOQ1FVRnpRaXhUUVVGVE96dEpRVVV2UWl4VFFVRlRPenRKUVVWVUxGbEJRVms3TzBsQlJWb3NVVUZCVVR0SlFVTlNMRzFDUVVGdFFqdEpRVU51UWl4VFFVRkJMSEZDUVVGQkxGRkJRVTg3U1VGRFVDeDVRa0ZCZVVJc1RVRkJUVHROUVVNM1FpeFBRVUZQTEc5Q1FVRnZRaXhEUVVGQk8wdEJRelZDTzBsQlEwUXNkMEpCUVhkQ0xFMUJRVTA3VFVGRE5VSXNUMEZCVHl4dFFrRkJiVUlzUTBGQlFUdExRVU16UWp0SlFVTkVMRlZCUVZVN1NVRkRWaXhUUVVGVE8wbEJRMVFzT0VKQlFVRTdSMEZEUkN4RFFVRkRMRU5CUVVFN1JVRkZSaXhEUVVGQkxFTkJRVUVzUlVGQlFTeE5RVUZCTEZGQlFXOUNMRVZCUVVNN1NVRkRia0lzYlVKQlFXMUNMRTFCUTJwQ0xGVkJRVlVzYTBKQlFXdENMRTFCUVUwc1UwRkJVeXhGUVVGRkxHVkJRV1VzVVVGQlVUdEpRVU4wUlN4blFrRkJaMElzVlVGQlZTeHpRa0ZCYzBJc1pVRkJaU3hMUVVGTExFTkJRMnhGTEZWQlFWVXNjMEpCUTFvc1EwRkJRenRKUVVORUxGVkJRVlVzVlVGQlZTeFRRVUZETzBkQlEzUkNMRU5CUVVNc1EwRkJRVHM3TzBWQlIwWXNRMEZCUVN4RFFVRkJMRVZCUVVFc1MwRkJRU3hSUVVGSkxFVkJRMFlzUTBGQlFTeERRVUZCTEVWQlFVRXNVMEZCUVN4alFVRmhMRVZCUVVNc1ZVRkJWU3hOUVVGTkxFTkJRVU1zUlVGREwwSXNRMEZCUVN4RFFVRkJMRVZCUVVFc1pVRkJRU3hSUVVGUkxFVkJRVU1zU1VGQlNTeERRVUZETEVWQlEyUXNRMEZCUVN4RFFVRkJMRVZCUVVFc2FVSkJRVUVzVVVGQlowSXNSVUZCUXl4bFFVRnBRanRKUVVOb1F5eE5RVUZOTEZWQlFWVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8wbEJRek5DTEhOQ1FVRnpRaXhMUVVGTExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVUU3UjBGRGRFUXNRMEZCUXl4RlFVTkVMRk5CUVZVN1NVRkRWQ3hUUVVGQkxGRkJRVWNzVFVGQlRTeERRVUZETEhkRFFVRjNReXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZCTzBkQlJUbEVMRU5CUVVNc1EwRkJRVHRGUVVWRUxIbENRVUY1UWl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGQk8wVkJSWEpETEUxQlFVMHNjVUpCUVhGQ0xFMUJRVTA3U1VGREwwSXNUMEZEUlN4WFFVRlhMRWxCUTFnc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVU5vUkN4clFrRkJhMElzUTBGQlFUdEhRVVZ5UWl4RFFVRkJPMFZCUlVRc1RVRkJUU3c0UWtGQk9FSXNiVU5CUVcxRE96dEpRVVZ5UlN4SlFVRkpMRmxCUVZrc1MwRkJTeXhMUVVGTExFVkJRVVU3VFVGRE1VSXNWVUZCVlN4bFFVRmxMRVZCUVVVc1EwRkJRVHM3UzBGRk5VSXNUVUZCVFRzN08wMUJSMHdzU1VGRFJTeGxRVUZsTEV0QlFVc3NTVUZCUVN3MFFrRkJNa0lzU1VGREwwTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVOb1JEdFJRVU5CTEU5QlFVRTdUMEZEUmp0TlFVTkJMRlZCUVZVc2QwSkJRWGRDTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVFN1MwRkRja1E3UjBGRFJDeERRVUZCT3pzN096czdPenM3T3pzN096czdPMFZCWjBKRUxHZENRVUZuUWl4dlFrRkJjMEk3U1VGQlFTeEpRVUZCTEd0Q1FVRkJMRU5CUVVFN1NVRkhjRU1zVFVGQlRTeGpRVUZqTEZWQlFWVXNTMEZCU3l4RFFVRkJPMGxCUlc1RExFbEJRVWtzYjBKQlFXOUNMRk5CUVZNc1EwRkJReXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzAxQlEyeEVMRTlCUVVFN1MwRkRSanRKUVVWQkxFbEJRVWtzTkVKQlFUUkNMRXRCUVVzc1EwRkJRVHRKUVVOeVF5eE5RVUZOTEdsQ1FVRnBRaXhEUVVGQkxFTkJRVUVzUlVGQlFTeExRVUZCTEZsQlFWY3NSMEZCUlN4RFFVRkJPMGxCUTNCRExFMUJRVTBzV1VGQldTeERRVUZCTEhGQ1FVRkJMRlZCUVZVc1QwRkJUeXhOUVVGQkxFbEJRVUVzU1VGQlFTeHJRa0ZCUVN4TFFVRkJMRXRCUVVFc1EwRkJRU3hKUVVGcVFpeHJRa0ZCUVN4SlFVRnpRaXhIUVVOd1F5eEpRVUZKTEVkQlFVY3NRMEZCUXl4VlFVRlZMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRemxDTEVsQlFVa3NRMEZCUVR0SlFVVlNMRWxCUVVrc1kwRkJZeXhMUVVGTExFbEJRVUVzYVVKQlFXZENMRVZCUVVVN1RVRkRka01zTkVKQlFUUkNMREpDUVVFeVFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkJPMHRCUTNKRkxFMUJRVTA3VFVGRFRDdzBRa0ZEUlN4RFFVRkJMRk5CUVZNc1MwRkJRU3hKUVVGQkxFbEJRVlFzVTBGQlV5eExRVUZCTEV0QlFVRXNRMEZCUVN4SFFVRkJMRXRCUVVFc1EwRkJRU3hIUVVGVUxGTkJRVk1zVDBGQlVTeE5RVUZOTEVOQlFVRXNiVUpCUVVFc1JVRkJjVUlzY1VKQlFVRXNVVUZCVHl4UlFVRlJMRWRCUVVrc1EwRkJRU3hEUVVGRExFTkJRVUU3UzBGRGNFVTdTVUZGUVN4SlFVRkpMSGxDUVVGNVFpeEZRVUZGTzAxQlFVRXNTVUZCUVN4eFFrRkJRU3hEUVVGQk8wMUJRemRDTEUxQlFVMHNZVUZEU2l4RFFVRkJMRk5CUVZNc1MwRkJRU3hKUVVGQkxFbEJRVlFzVTBGQlV5eExRVUZCTEV0QlFVRXNRMEZCUVN4SFFVRkJMRXRCUVVFc1EwRkJRU3hIUVVGQkxFTkJRVUVzZDBKQlFWUXNVMEZCVXl4alFVRmxMRTFCUVVFc1NVRkJRU3hKUVVGQkxIRkNRVUZCTEV0QlFVRXNTMEZCUVN4RFFVRkJMRWRCUVVFc1MwRkJRU3hEUVVGQkxFZEJRWGhDTEhGQ1FVRkJMRXRCUVVFc1EwRkJRU3hUUVVGVExFVkJRV3RDTEZWQlFWVXNRMEZCUXl4TFFVRkpMRWxCUVVrc2IwSkJRVUVzVVVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkJPenROUVVWMFJTeFZRVUZWTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVFN1RVRkRPVUlzVlVGQlZTd3dRa0ZCTUVJc1EwRkJReXhWUVVGVkxFVkJRVVVzVlVGQlZTeFBRVUZQTEVOQlFVTXNRMEZCUVR0TlFVTnVSU3hKUVVGSkxFZEJRVUVzWVVGQldTeEZRVUZGT3p0UlFVVm9RaXhWUVVGVkxGVkJRVlVzV1VGQldTeERRVUZGTEZkQlFWazdWVUZETlVNc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eDVRa0ZCZVVJc1JVRkJSVHM3V1VGRk9VTXNWVUZCVlN4WlFVRlpMRU5CUVVNN1kwRkJSU3hOUVVGTkxITkNRVUZCTzJGQlFYZENMRU5CUVVNc1EwRkJRVHRaUVVWNFJDeFZRVUZWTEcxQ1FVRnRRaXdyUWtGQkswSXNRMEZETVVRc1NVRkJTU3hKUVVGSkxFVkJRMVlzUTBGQlF5eERRVUZCTzFkQlEwZzdVMEZEUkN4RFFVRkRMRU5CUVVFN1QwRkRTanROUVVWQkxFMUJRVTBzWlVGQlpTeHZRa0ZCYjBJc1EwRkJReXhWUVVGVkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVRTdUVUZEYkVVc1NVRkJTU3hYUVVGWExFdEJRVXNzU1VGQlFTeDFRa0ZCYzBJc1JVRkJSVHRSUVVNeFF5eGpRVUZqTEVsQlFVa3NRMEZCUVR0UlFVTnNRaXhEUVVGQkxFTkJRVUVzUlVGQlFTeFpRVUZCTEZGQlFWY3NSVUZCUXl4VlFVRlZMRVZCUVVVc1RVRkJUVHRWUVVNMVFpeDFRa0ZCZFVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUVR0VlFVTTFReXhqUVVGakxFdEJRVXNzUTBGQlFUdFZRVU51UWl4TlFVRk5MR1ZCUVdVc2EwSkJRV3RDTEVWQlFVVXNRMEZCUVR0VlFVTjZReXhWUVVGVkxHRkJRV0VzUjBGQlJ5eFpRVUZaTEVOQlFVRTdWVUZEZEVNc01rSkJRVEpDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVFc2RVSkJRWE5DTEVOQlFVTXNRMEZCUVR0VFFVTnNSU3hEUVVGRExFTkJRVUU3VDBGRFNqdE5RVVZCTEVsQlFVa3NWMEZCVnl4TFFVRkxMRWxCUVVFc09FSkJRVFpDTEVWQlFVVTdVVUZEYWtRc2NVSkJRWEZDTEVsQlFVa3NRMEZCUVR0UlFVTjZRaXhEUVVGQkxFTkJRVUVzUlVGQlFTeFpRVUZCTEZGQlFWY3NSVUZCUXl4VlFVRlZMRVZCUVVVc1RVRkJUVHRWUVVNMVFpeDFRa0ZCZFVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUVR0VlFVTTFReXh4UWtGQmNVSXNTMEZCU3l4RFFVRkJPMVZCUXpGQ0xFMUJRVTBzWlVGQlpTeHJRa0ZCYTBJc1JVRkJSU3hEUVVGQk8xVkJRM3BETEZWQlFWVXNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJRVHRWUVVOMFF5d3lRa0ZCTWtJc1EwRkRla0lzV1VGQldTeEZRVU5hTEVsQlFVRXNPRUpCUTBZc1EwRkJReXhEUVVGQk8xTkJRMFlzUTBGQlF5eERRVUZCTzA5QlEwbzdUVUZGUVN4SlFVRkpMRmRCUVZjc1MwRkJTeXhKUVVGQkxEUkNRVUV5UWl4RlFVRkZPMUZCUXk5RExFMUJRVTBzVVVGQlVTeFZRVUZWTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVFN1VVRkRkRU1zYlVKQlFXMUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZCTzFGQlJXcERMRU5CUVVFc1EwRkJRU3hGUVVGQkxGbEJRVUVzVVVGQlZ5eEZRVUZETEZWQlFWVXNSVUZCUlN4TlFVRk5PMVZCUXpWQ0xIVkNRVUYxUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZCTzFWQlF6VkRMRTlCUVU4c2JVSkJRVzFDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1ZVRkRha01zVFVGQlRTeGxRVUZsTEd0Q1FVRnJRaXhGUVVGRkxFTkJRVUU3VlVGRGVrTXNWVUZCVlN4aFFVRmhMRWRCUVVjc1dVRkJXU3hEUVVGQk8xVkJRM1JETERKQ1FVRXlRaXhEUVVONlFpeFpRVUZaTEVWQlExb3NTVUZCUVN3MFFrRkRSaXhEUVVGRExFTkJRVUU3VTBGRFJpeERRVUZETEVOQlFVRTdUMEZEU2p0TFFVTkVMRTFCUVUwc1NVRkRUQ3hUUVVGVExFbEJRMVFzVTBGQlV5eFBRVUZQTEV0QlFVc3NaVUZCWlN4UFFVRlBMRWxCUXpORExGTkJRVk1zVTBGQlV5eExRVUZMTEdWQlFXVXNVMEZCVXl4RlFVTXZRenROUVVGQkxFbEJRVUVzYzBKQlFVRXNRMEZCUVR0TlFVTkJMRTFCUVUwc1lVRkRTaXhEUVVGQkxGTkJRVk1zUzBGQlFTeEpRVUZCTEVsQlFWUXNVMEZCVXl4TFFVRkJMRXRCUVVFc1EwRkJRU3hIUVVGQkxFdEJRVUVzUTBGQlFTeEhRVUZCTEVOQlFVRXNlVUpCUVZRc1UwRkJVeXhqUVVGbExFMUJRVUVzU1VGQlFTeEpRVUZCTEhOQ1FVRkJMRXRCUVVFc1MwRkJRU3hEUVVGQkxFZEJRVUVzUzBGQlFTeERRVUZCTEVkQlFYaENMSE5DUVVGQkxFdEJRVUVzUTBGQlFTeFRRVUZUTEVWQlFXdENMRlZCUVZVc1EwRkJReXhMUVVGSkxFbEJRVWtzYjBKQlFVRXNVVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGQk8wMUJRM1JGTEZWQlFWVXNNa0pCUVRKQ0xFTkJRVU03VVVGRGNFTXNhMEpCUVd0Q0xGVkJRVUU3VDBGRGJrSXNRMEZCUXl4RFFVRkJPMHRCUTBnc1RVRkJUVHROUVVOTUxFbEJRVWtzVlVGQlZTeFBRVUZQTEVsQlFVa3NWVUZCVlN4UFFVRlBMRWxCUVVrc1NVRkJTU3hWUVVGVkxFOUJRVThzU1VGQlNTeEZRVUZGTzFGQlEzWkZMRTFCUVUwc1VVRkJVU3hWUVVGVkxFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVRTdVVUZEZEVNc1RVRkJUU3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEZWQlFWVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1EwRkJRVHRSUVVNeFF5eE5RVUZOT3p0VFFVRlZMRWRCUVVjc1IwRkJSeXhEUVVGQk8xRkJSWFJDTEZWQlFWVXNWVUZCVlN4WlFVRlpMRU5CUVVVc1QwRkJVVHRWUVVONFF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRWRCUVVjc1MwRkJTeXhQUVVGUExFdEJRVXNzY1VKQlFYRkNMRVZCUVVVN1dVRkRla1FzYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZCTzFkQlEzUkRPMU5CUTBRc1EwRkJReXhEUVVGQk8wOUJRMG83VFVGRFFTeGxRVUZsTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVFN1MwRkROMEk3UjBGRFJDeERRVUZCT3pzN1JVRkhSQ3hyUWtGQmJVSXNZMEZCWlR0SlFVRkJMRWxCUVVFc2MwSkJRVUVzUTBGQlFUdEpRVWRvUXl4TlFVRk5MR0ZCUTBvc1EwRkJRU3hUUVVGVExFdEJRVUVzU1VGQlFTeEpRVUZVTEZOQlFWTXNTMEZCUVN4TFFVRkJMRU5CUVVFc1IwRkJRU3hMUVVGQkxFTkJRVUVzUjBGQlFTeERRVUZCTEhsQ1FVRlVMRk5CUVZNc1kwRkJaU3hOUVVGQkxFbEJRVUVzU1VGQlFTeHpRa0ZCUVN4TFFVRkJMRXRCUVVFc1EwRkJRU3hIUVVGQkxFdEJRVUVzUTBGQlFTeEhRVUY0UWl4elFrRkJRU3hMUVVGQkxFTkJRVUVzVTBGQlV5eEZRVUZyUWl4VlFVRlZMRU5CUVVNc1MwRkJTU3hKUVVGSkxHOUNRVUZCTEZGQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRVHRKUVVOMFJTeFZRVUZWTERSQ1FVRTBRaXhEUVVGRE8wMUJRM0pETEd0Q1FVRnJRaXhWUVVGVk8wMUJRelZDTEZGQlFWRXNWVUZCVlN4UFFVRkRPMHRCUTNCQ0xFTkJRVU1zUTBGQlFUdEhRVU5JTEVOQlFVRTdSVUZGUkN4SlFVRkpMRk5CUVZNc1MwRkJRU3hKUVVGQkxFbEJRVlFzVTBGQlV5eExRVUZCTEV0QlFVRXNRMEZCUVN4SlFVRlVMRk5CUVZNc2VVSkJRVEJDTEVWQlFVVTdTVUZEZGtNc1UwRkJVeXg1UWtGQmVVSXNRMEZCUXl4aFFVRmhMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVUU3UjBGRGNFVTdPenM3T3p0RlFVMUJMRlZCUVZVc1lVRkJZU3hqUVVGakxFVkJRVVVzUzBGQlN5eERRVUZETEUxQlFVMDdTVUZEYWtRc1YwRkJWeXhGUVVGRkxFTkJRVUU3UjBGRFpDeERRVUZETEVOQlFVRTdSVUZEUml4VlFVRlZMR0ZCUVdFc1IwRkJSeXhEUVVONFFpeHRRa0ZCUVN3eVFrRkJNRUlzWVVGQllTeEZRVU4yUXl4WFFVTkdMRU5CUVVNc1EwRkJRVHRGUVVORUxGVkJRVlVzZVVKQlFYbENMRWxCUVVrc1IwRkJSeXhEUVVONFF5eHRRa0ZCUVN3eVFrRkJNRUlzWVVGQllTeEZRVU4yUXl4WFFVTkdMRU5CUVVNc1EwRkJRVHRGUVVORUxGVkJRVlVzT0VKQlFUaENMRWxCUVVrc1IwRkJSeXhEUVVNM1F5eHRRa0ZCUVN3eVFrRkJNRUlzWVVGQllTeEZRVU4yUXl4WFFVTkdMRU5CUVVNc1EwRkJRVHRGUVVORUxGVkJRVlVzYjBKQlFXOUNMRWxCUVVrc1IwRkJSeXhEUVVOdVF5eHRRa0ZCUVN3eVFrRkJNRUlzWVVGQllTeEZRVU4yUXl4WFFVTkdMRU5CUVVNc1EwRkJRVHRGUVVORUxGVkJRVlVzYlVKQlFXMUNMRWRCUVVjc1EwRkRPVUlzYlVKQlFVRXNNa0pCUVRCQ0xHRkJRV0VzUlVGRGRrTXNWMEZEUml4RFFVRkRMRU5CUVVFN1JVRkZSQ3hWUVVGVkxHOUNRVUZ2UWl4VlFVRlZMRU5CUTNSRExHMUNRVUZCTERKQ1FVRXdRaXh6UWtGQmMwSXNSVUZEYUVRc1YwRkRSaXhEUVVGRExFTkJRVUU3T3pzN096dEZRVTFFTEhWQ1FVRjFRanRKUVVOeVFpeEpRVUZKTEZGQlFWRXNSVUZCUlN4RFFVRkJPMGxCUTJRc1RVRkJUU3hSUVVGUkxEWkNRVUUyUWl4RlFVRkZMRU5CUVVFN1NVRkROME1zU1VGQlNTeExRVUZMTEVWQlFVVTdUVUZEVkN4UlFVRlJMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlFUdExRVU4yUWpzN1NVRkZRU3hKUVVGSkxFZEJRVUVzWVVGQldTeEZRVUZGTzAxQlEyaENMSEZDUVVGQkxGRkJRVThzVDBGQlR5eGhRVUZoTEVOQlFVTTdVVUZCUlN4TlFVRk5MRXRCUVVFN1QwRkJUeXhEUVVGRExFTkJRVUU3VFVGRE5VTXNjVUpCUVVFc1VVRkJUeXhQUVVGUExIZENRVUYzUWl4RFFVRkRPMUZCUVVVc1QwRkJUeXhUUVVGQk8wOUJRVmNzUTBGQlF5eERRVUZCTzB0QlF6ZEVMRTFCUVUwN1RVRkRUQ3h4UWtGQlFTeFJRVUZQTEdOQlFXTXNZVUZCWVN4RFFVRkRPMUZCUVVVc1RVRkJUU3hMUVVGQk8wOUJRVThzUTBGQlF5eERRVUZCTzAxQlEyNUVMSEZDUVVGQkxGRkJRVThzWTBGQll5eDNRa0ZCZDBJc1EwRkJRenRSUVVGRkxFOUJRVThzVTBGQlFUdFBRVUZYTEVOQlFVTXNRMEZCUVR0TFFVTnlSVHRIUVVOR08wVkJSVUVzZVVOQlFYbERPMGxCUTNaRExFMUJRVTBzZFVKQlEwb3NWVUZCVlN4dFFrRkJiVUlzYzBKQlFYTkNMRVZCUVVVc1EwRkJRVHRKUVVOMlJDeE5RVUZOTEhkQ1FVTktMRlZCUVZVc2JVSkJRVzFDTEdsQ1FVRnBRaXhQUVVGUExFTkJRVUU3U1VGRGRrUXNUMEZCVHl4dlFrRkJiMElzUjBGQlJ5eHhRa0ZCY1VJc1EwRkJRVHRIUVVOeVJEdEZRVVZCTEcxQ1FVRnRRaXhIUVVGSExFTkJRM0JDTEc5Q1FVRkJMRFJDUVVFeVFpeGhRVUZoTEVWQlEzaERMRU5CUVVNN08wZEJRWFZDTEV0QlFVczdTVUZETTBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPMDFCUTNoQ0xEWkNRVUUyUWl4RlFVRkZMRU5CUVVFN1MwRkRhRU1zVFVGQlRTeEpRVUZKTERaQ1FVRTJRaXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzAxQlF6bERMRk5CUVZNc1JVRkJSU3hEUVVGQk8wdEJRMkk3UjBGRlNpeERRVUZETEVOQlFVRTdSVUZGUkN4NVEwRkJlVU03U1VGRGRrTXNUVUZCVFN4TFFVRkxMRU5CUTFRc1ZVRkJWU3hoUVVGaExHVkJRV1VzYjBKQlFXOUNMRVZCUXpWRUxFTkJRVU1zVVVGQlVTeERRVUZGTEZGQlExUXNWVUZCVlN4aFFVRmhMR1ZCUVdVc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVTnFSU3hEUVVGRExFTkJRVUU3U1VGRFJDeFZRVUZWTEc5Q1FVRnZRaXhwUWtGQmFVSXNRMEZETjBNc1dVRkJRU3c0UWtGRFJpeERRVUZETEVOQlFVRTdTVUZEUkN4VlFVRlZMSGxDUVVGNVFpeHBRa0ZCYVVJc1EwRkRiRVFzV1VGQlFTd3dRa0ZEUml4RFFVRkRMRU5CUVVFN1NVRkRSQ3hWUVVGVkxEaENRVUU0UWl4cFFrRkJhVUlzUTBGRGRrUXNXVUZCUVN3d1FrRkRSaXhEUVVGRExFTkJRVUU3T3p0SlFVZEVMRTFCUVUwc1QwRkJUeXhEUVVGRExGVkJRVlVzYlVKQlFXMUNMRTFCUVUwc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVTjZSU3hEUVVGRE96czdTMEZCV1N4TFFVRkxPMDFCUTJoQ0xGRkJRVkVzU1VGQlNUczdWVUZIVWl4VlFVRlZMRzFDUVVGdFFpeFBRVUZQTEVOQlEyeERMRVZCUVVVc1JVRkRSaXhoUVVGQkxGVkJRVk1zVTBGQlV5eHZRa0ZCYjBJc1JVRkRlRU1zUTBGQlF5eERRVUZCTzFWQlEwUXNUVUZCUVR0UFFVTktPMHRCUlVvc1EwRkJReXhEUVVGQk8wbEJSVVFzVjBGQlZ5eEZRVUZGTEVOQlFVRTdSMEZEWmp0RFFVZEdPenM3T3pzN096czdRVUZUUVN3eVFrRkJNa0k3UlVGRGVrSXNUVUZCVFN4UFFVRlBMRTFCUVUwc1VVRkJVU3hqUVVGakxFVkJRVVVzUTBGQlFUdEZRVU16UXl4TlFVRk5MRFpDUVVFMlFpeFBRVUZQTEVOQlEzaERMRWxCUVVrc1MwRkJTeXhEUVVGRkxFOUJRVkVzYlVKQlFXMUNMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGRGFFUXNRMEZCUXl4RFFVRkJPenM3UlVGSFJDeE5RVUZOTEZsQlEwb3NTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhKUVVObUxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4SlFVTm1MRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVUU3UlVGRE4wTXNTVUZEUlN4RFFVRkRMR05CUVdNc1MwRkRaQ3hUUVVGVExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZETTBJc1EwRkJReXd3UWtGQk1FSXNSVUZETTBJN1NVRkRRU3hwUWtGQmFVSXNTVUZCU1N4RFFVRkJPMGxCUTNKQ0xFbEJRVWs3VFVGRFJpeE5RVUZOTEdsQ1FVRnBRaXhWUVVGVkxHMUNRVUZ0UWl4clFrRkJhMElzUlVGQlJTeERRVUZCTzAxQlEzaEZMRTFCUVUwc2JVSkJRVzFDTEZWQlFWVXNRMEZEYUVNc1kwRkRReXhWUVVGVkxHMUNRVUZ0UWl4clFrRkJhMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZETjBRc1kwRkRSaXhEUVVGRExFTkJRVUU3UzBGRFJpeFRRVUZUTzAxQlExSXNhVUpCUVdsQ0xFdEJRVXNzUTBGQlFUdExRVU40UWp0SFFVTkdPME5CUTBZN096dEJRVWRCTEUxQlFVMHNkVUpCUVhWQ0xFMUJRVTA3UlVGRGFrTXNTVUZCU1N4VlFVRlZMRVZCUVVVN1NVRkRaQ3hWUVVGVkxITkNRVUZ6UWl4aFFVRmhMRU5CUVVNN1RVRkROVU1zUTBGQlF5eFpRVUZCTEhGQ1FVRnZRaXhsUVVGbExFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNXVUZEYmtNc1JVRkJSU3hOUVVOU0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTJwQ0xFTkJRVU1zUTBGQlFUczdTVUZEUml4VlFVRlZMSE5DUVVGelFpd3lRa0ZCTWtJc1EwRkJRenROUVVNeFJDeFZRVUZWTEZsQlFVRXNlVUpCUVhkQ0xFbEJRVWs3VFVGRGRFTXNUMEZCVHl4WlFVRkJMSEZDUVVGdlFpeGhRVUZoTzAxQlEzaERMRmxCUVZrc1JVRkJRenRMUVVOa0xFTkJRVU1zUTBGQlFUdEpRVU5HTEU5QlFVRTdSMEZEUmp0RlFVTkJMRlZCUVZVc1EwRkJReXhOUVVGTk96dEpRVVZtTEc5Q1FVRnZRaXhGUVVGRkxFTkJRVUU3UjBGRGRrSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRVHREUVVOVUxFTkJRVUU3T3p0QlFVZEVMSEZDUVVGQkxGRkJRVThzVVVGQlVTeFpRVUZaTEZsQlFWa3NRMEZCUXl4RFFVRkRPenREUVVGVkxFdEJRVXM3UlVGRGRFUXNTVUZEUlN4TlFVRk5MRXRCUVVzc1UwRkJVeXhKUVVOd1FpeEZRVUZGTEU5QlFVOHNTVUZCU1N4bFFVRmxMRWxCUVVrc1QwRkJUeXhKUVVGSkxGRkJRVkVzUTBGQlF5eEZRVU53UkR0SlFVTkJMRzlDUVVGdlFpeEZRVUZGTEVOQlFVRTdTVUZEZEVJc1VVRkJVU3gxUWtGQmRVSXNSVUZCUlN4RFFVRkJPMGRCUTI1RE8wTkJRMFFzUTBGQlF5eERRVUZCTzBGQlJVWXNNRU5CUVRCRE8wVkJRM2hETEUxQlFVMHNWMEZCVnl4bFFVRmxMRWRCUVVjc1dVRkJXVHRKUVVNM1F5eE5RVUZOTEZsQlFWa3NTMEZCU3l4VFFVRlRMRVZCUVVVc1EwRkJRVHRKUVVOc1F5eE5RVUZOTEdGQlFXRXNRMEZCUVN4RFFVRkJMRVZCUVVFc1QwRkJRU3hYUVVGVkxFVkJRVU03VFVGQlJTeFZRVUZWTEZOQlFVRTdTMEZCVnl4RlFVRkZMRmxCUVVFc1lVRkJXU3hEUVVGRExFTkJRVUU3U1VGRGNFVXNUMEZCVHp0TlFVTk1MRk5CUVZNc1RVRkJUU3hWUVVGVkxGVkJRVlU3VFVGRGJrTXNUMEZCVHl4VlFVRlZPMDFCUTJwQ0xGTkJRVk1zVVVGQlVTeFhRVUZYTEVWQlFVTTdTMEZET1VJc1EwRkJRVHRIUVVOR0xFTkJRVUU3UTBGRFNEdEJRVVZCTERCQ1FVRXdRanRGUVVONFFpeFZRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRMRk5CUVVFc1VVRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlFUdERRVU12UWp0QlFVVkJMRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzSzBKQlFTdENMRVZCUVVVN1JVRkRMME1zWTBGQll5eEZRVUZGTEVOQlFVRTdRMEZEYkVJaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUZCdmNuUmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXRZV1pwYm5SdmMyZ3ZjSFZ0Y0NCM2FYUm9YRzR2THlCd1pYSnRhWE56YVc5dUlHWnliMjBnZEdobElHRjFkR2h2Y2l3Z1RXRjBhR2xoY3lCQ2RYVnpJQ2hBYldGbWFXNTBiM05vS1M1Y2JpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR1Z2Y3p0Y2JseHVablZ1WTNScGIyNGdiMjVqWlNoallXeHNZbUZqYXlrZ2UxeHVJQ0IyWVhJZ1kyRnNiR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWWdLR05oYkd4bFpDa2djbVYwZFhKdU8xeHVJQ0FnSUdOaGJHeGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ1kyRnNiR0poWTJzdVlYQndiSGtvZG05cFpDQXdMQ0JoY21kMWJXVnVkSE1wTzF4dUlDQjlPMXh1ZlZ4dVhHNTJZWElnWDNKbGNYVnBjbVVrWTI5a1pYTWdQU0J5WlhGMWFYSmxLQ2N1TGk4dUxpOHVMaTlsY25KdmNuTW5LUzVqYjJSbGN5eGNiaUFnSUNCRlVsSmZUVWxUVTBsT1IxOUJVa2RUSUQwZ1gzSmxjWFZwY21Va1kyOWtaWE11UlZKU1gwMUpVMU5KVGtkZlFWSkhVeXhjYmlBZ0lDQkZVbEpmVTFSU1JVRk5YMFJGVTFSU1QxbEZSQ0E5SUY5eVpYRjFhWEpsSkdOdlpHVnpMa1ZTVWw5VFZGSkZRVTFmUkVWVFZGSlBXVVZFTzF4dVhHNW1kVzVqZEdsdmJpQnViMjl3S0dWeWNpa2dlMXh1SUNBdkx5QlNaWFJvY205M0lIUm9aU0JsY25KdmNpQnBaaUJwZENCbGVHbHpkSE1nZEc4Z1lYWnZhV1FnYzNkaGJHeHZkMmx1WnlCcGRGeHVJQ0JwWmlBb1pYSnlLU0IwYUhKdmR5Qmxjbkk3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x6VW1WeGRXVnpkQ2h6ZEhKbFlXMHBJSHRjYmlBZ2NtVjBkWEp1SUhOMGNtVmhiUzV6WlhSSVpXRmtaWElnSmlZZ2RIbHdaVzltSUhOMGNtVmhiUzVoWW05eWRDQTlQVDBnSjJaMWJtTjBhVzl1Snp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWkdWemRISnZlV1Z5S0hOMGNtVmhiU3dnY21WaFpHbHVaeXdnZDNKcGRHbHVaeXdnWTJGc2JHSmhZMnNwSUh0Y2JpQWdZMkZzYkdKaFkyc2dQU0J2Ym1ObEtHTmhiR3hpWVdOcktUdGNiaUFnZG1GeUlHTnNiM05sWkNBOUlHWmhiSE5sTzF4dUlDQnpkSEpsWVcwdWIyNG9KMk5zYjNObEp5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJR05zYjNObFpDQTlJSFJ5ZFdVN1hHNGdJSDBwTzF4dUlDQnBaaUFvWlc5eklEMDlQU0IxYm1SbFptbHVaV1FwSUdWdmN5QTlJSEpsY1hWcGNtVW9KeTR2Wlc1a0xXOW1MWE4wY21WaGJTY3BPMXh1SUNCbGIzTW9jM1J5WldGdExDQjdYRzRnSUNBZ2NtVmhaR0ZpYkdVNklISmxZV1JwYm1jc1hHNGdJQ0FnZDNKcGRHRmliR1U2SUhkeWFYUnBibWRjYmlBZ2ZTd2dablZ1WTNScGIyNGdLR1Z5Y2lrZ2UxeHVJQ0FnSUdsbUlDaGxjbklwSUhKbGRIVnliaUJqWVd4c1ltRmpheWhsY25JcE8xeHVJQ0FnSUdOc2IzTmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ1kyRnNiR0poWTJzb0tUdGNiaUFnZlNrN1hHNGdJSFpoY2lCa1pYTjBjbTk1WldRZ1BTQm1ZV3h6WlR0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaGxjbklwSUh0Y2JpQWdJQ0JwWmlBb1kyeHZjMlZrS1NCeVpYUjFjbTQ3WEc0Z0lDQWdhV1lnS0dSbGMzUnliM2xsWkNrZ2NtVjBkWEp1TzF4dUlDQWdJR1JsYzNSeWIzbGxaQ0E5SUhSeWRXVTdJQzh2SUhKbGNYVmxjM1F1WkdWemRISnZlU0JxZFhOMElHUnZJQzVsYm1RZ0xTQXVZV0p2Y25RZ2FYTWdkMmhoZENCM1pTQjNZVzUwWEc1Y2JpQWdJQ0JwWmlBb2FYTlNaWEYxWlhOMEtITjBjbVZoYlNrcElISmxkSFZ5YmlCemRISmxZVzB1WVdKdmNuUW9LVHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSE4wY21WaGJTNWtaWE4wY205NUlEMDlQU0FuWm5WdVkzUnBiMjRuS1NCeVpYUjFjbTRnYzNSeVpXRnRMbVJsYzNSeWIza29LVHRjYmlBZ0lDQmpZV3hzWW1GamF5aGxjbklnZkh3Z2JtVjNJRVZTVWw5VFZGSkZRVTFmUkVWVFZGSlBXVVZFS0Nkd2FYQmxKeWtwTzF4dUlDQjlPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpZV3hzS0dadUtTQjdYRzRnSUdadUtDazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlIQnBjR1VvWm5KdmJTd2dkRzhwSUh0Y2JpQWdjbVYwZFhKdUlHWnliMjB1Y0dsd1pTaDBieWs3WEc1OVhHNWNibVoxYm1OMGFXOXVJSEJ2Y0VOaGJHeGlZV05yS0hOMGNtVmhiWE1wSUh0Y2JpQWdhV1lnS0NGemRISmxZVzF6TG14bGJtZDBhQ2tnY21WMGRYSnVJRzV2YjNBN1hHNGdJR2xtSUNoMGVYQmxiMllnYzNSeVpXRnRjMXR6ZEhKbFlXMXpMbXhsYm1kMGFDQXRJREZkSUNFOVBTQW5ablZ1WTNScGIyNG5LU0J5WlhSMWNtNGdibTl2Y0R0Y2JpQWdjbVYwZFhKdUlITjBjbVZoYlhNdWNHOXdLQ2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJSEJwY0dWc2FXNWxLQ2tnZTF4dUlDQm1iM0lnS0haaGNpQmZiR1Z1SUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUN3Z2MzUnlaV0Z0Y3lBOUlHNWxkeUJCY25KaGVTaGZiR1Z1S1N3Z1gydGxlU0E5SURBN0lGOXJaWGtnUENCZmJHVnVPeUJmYTJWNUt5c3BJSHRjYmlBZ0lDQnpkSEpsWVcxelcxOXJaWGxkSUQwZ1lYSm5kVzFsYm5SelcxOXJaWGxkTzF4dUlDQjlYRzVjYmlBZ2RtRnlJR05oYkd4aVlXTnJJRDBnY0c5d1EyRnNiR0poWTJzb2MzUnlaV0Z0Y3lrN1hHNGdJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLSE4wY21WaGJYTmJNRjBwS1NCemRISmxZVzF6SUQwZ2MzUnlaV0Z0YzFzd1hUdGNibHh1SUNCcFppQW9jM1J5WldGdGN5NXNaVzVuZEdnZ1BDQXlLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZTVWw5TlNWTlRTVTVIWDBGU1IxTW9KM04wY21WaGJYTW5LVHRjYmlBZ2ZWeHVYRzRnSUhaaGNpQmxjbkp2Y2p0Y2JpQWdkbUZ5SUdSbGMzUnliM2x6SUQwZ2MzUnlaV0Z0Y3k1dFlYQW9ablZ1WTNScGIyNGdLSE4wY21WaGJTd2dhU2tnZTF4dUlDQWdJSFpoY2lCeVpXRmthVzVuSUQwZ2FTQThJSE4wY21WaGJYTXViR1Z1WjNSb0lDMGdNVHRjYmlBZ0lDQjJZWElnZDNKcGRHbHVaeUE5SUdrZ1BpQXdPMXh1SUNBZ0lISmxkSFZ5YmlCa1pYTjBjbTk1WlhJb2MzUnlaV0Z0TENCeVpXRmthVzVuTENCM2NtbDBhVzVuTENCbWRXNWpkR2x2YmlBb1pYSnlLU0I3WEc0Z0lDQWdJQ0JwWmlBb0lXVnljbTl5S1NCbGNuSnZjaUE5SUdWeWNqdGNiaUFnSUNBZ0lHbG1JQ2hsY25JcElHUmxjM1J5YjNsekxtWnZja1ZoWTJnb1kyRnNiQ2s3WEc0Z0lDQWdJQ0JwWmlBb2NtVmhaR2x1WnlrZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnWkdWemRISnZlWE11Wm05eVJXRmphQ2hqWVd4c0tUdGNiaUFnSUNBZ0lHTmhiR3hpWVdOcktHVnljbTl5S1R0Y2JpQWdJQ0I5S1R0Y2JpQWdmU2s3WEc0Z0lISmxkSFZ5YmlCemRISmxZVzF6TG5KbFpIVmpaU2h3YVhCbEtUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCd2FYQmxiR2x1WlRzaUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJGVWxKZlNVNVdRVXhKUkY5UFVGUmZWa0ZNVlVVZ1BTQnlaWEYxYVhKbEtDY3VMaTh1TGk4dUxpOWxjbkp2Y25NbktTNWpiMlJsY3k1RlVsSmZTVTVXUVV4SlJGOVBVRlJmVmtGTVZVVTdYRzVjYm1aMWJtTjBhVzl1SUdocFoyaFhZWFJsY2sxaGNtdEdjbTl0S0c5d2RHbHZibk1zSUdselJIVndiR1Y0TENCa2RYQnNaWGhMWlhrcElIdGNiaUFnY21WMGRYSnVJRzl3ZEdsdmJuTXVhR2xuYUZkaGRHVnlUV0Z5YXlBaFBTQnVkV3hzSUQ4Z2IzQjBhVzl1Y3k1b2FXZG9WMkYwWlhKTllYSnJJRG9nYVhORWRYQnNaWGdnUHlCdmNIUnBiMjV6VzJSMWNHeGxlRXRsZVYwZ09pQnVkV3hzTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJuWlhSSWFXZG9WMkYwWlhKTllYSnJLSE4wWVhSbExDQnZjSFJwYjI1ekxDQmtkWEJzWlhoTFpYa3NJR2x6UkhWd2JHVjRLU0I3WEc0Z0lIWmhjaUJvZDIwZ1BTQm9hV2RvVjJGMFpYSk5ZWEpyUm5KdmJTaHZjSFJwYjI1ekxDQnBjMFIxY0d4bGVDd2daSFZ3YkdWNFMyVjVLVHRjYmx4dUlDQnBaaUFvYUhkdElDRTlJRzUxYkd3cElIdGNiaUFnSUNCcFppQW9JU2hwYzBacGJtbDBaU2hvZDIwcElDWW1JRTFoZEdndVpteHZiM0lvYUhkdEtTQTlQVDBnYUhkdEtTQjhmQ0JvZDIwZ1BDQXdLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2JtRnRaU0E5SUdselJIVndiR1Y0SUQ4Z1pIVndiR1Y0UzJWNUlEb2dKMmhwWjJoWFlYUmxjazFoY21zbk8xeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVlNVbDlKVGxaQlRFbEVYMDlRVkY5V1FVeFZSU2h1WVcxbExDQm9kMjBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLR2gzYlNrN1hHNGdJSDBnTHk4Z1JHVm1ZWFZzZENCMllXeDFaVnh1WEc1Y2JpQWdjbVYwZFhKdUlITjBZWFJsTG05aWFtVmpkRTF2WkdVZ1B5QXhOaUE2SURFMklDb2dNVEF5TkR0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEc0Z0lHZGxkRWhwWjJoWFlYUmxjazFoY21zNklHZGxkRWhwWjJoWFlYUmxjazFoY210Y2JuMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2RsZG1WdWRITW5LUzVGZG1WdWRFVnRhWFIwWlhJN1hHNGlMQ0psZUhCdmNuUnpJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDJ4cFlpOWZjM1J5WldGdFgzSmxZV1JoWW14bExtcHpKeWs3WEc1bGVIQnZjblJ6TGxOMGNtVmhiU0E5SUdWNGNHOXlkSE03WEc1bGVIQnZjblJ6TGxKbFlXUmhZbXhsSUQwZ1pYaHdiM0owY3p0Y2JtVjRjRzl5ZEhNdVYzSnBkR0ZpYkdVZ1BTQnlaWEYxYVhKbEtDY3VMMnhwWWk5ZmMzUnlaV0Z0WDNkeWFYUmhZbXhsTG1wekp5azdYRzVsZUhCdmNuUnpMa1IxY0d4bGVDQTlJSEpsY1hWcGNtVW9KeTR2YkdsaUwxOXpkSEpsWVcxZlpIVndiR1Y0TG1wekp5azdYRzVsZUhCdmNuUnpMbFJ5WVc1elptOXliU0E5SUhKbGNYVnBjbVVvSnk0dmJHbGlMMTl6ZEhKbFlXMWZkSEpoYm5ObWIzSnRMbXB6SnlrN1hHNWxlSEJ2Y25SekxsQmhjM05VYUhKdmRXZG9JRDBnY21WeGRXbHlaU2duTGk5c2FXSXZYM04wY21WaGJWOXdZWE56ZEdoeWIzVm5hQzVxY3ljcE8xeHVaWGh3YjNKMGN5NW1hVzVwYzJobFpDQTlJSEpsY1hWcGNtVW9KeTR2YkdsaUwybHVkR1Z5Ym1Gc0wzTjBjbVZoYlhNdlpXNWtMVzltTFhOMGNtVmhiUzVxY3ljcE8xeHVaWGh3YjNKMGN5NXdhWEJsYkdsdVpTQTlJSEpsY1hWcGNtVW9KeTR2YkdsaUwybHVkR1Z5Ym1Gc0wzTjBjbVZoYlhNdmNHbHdaV3hwYm1VdWFuTW5LVHRjYmlJc0luWmhjaUJUZEhKbFlXMGdQU0J5WlhGMWFYSmxLQ2R6ZEhKbFlXMG5LVnh1WEc0dkx5QjBhSEp2ZFdkb1hHNHZMMXh1THk4Z1lTQnpkSEpsWVcwZ2RHaGhkQ0JrYjJWeklHNXZkR2hwYm1jZ1luVjBJSEpsTFdWdGFYUWdkR2hsSUdsdWNIVjBMbHh1THk4Z2RYTmxablZzSUdadmNpQmhaMmR5WldkaGRHbHVaeUJoSUhObGNtbGxjeUJ2WmlCamFHRnVaMmx1WnlCaWRYUWdibTkwSUdWdVpHbHVaeUJ6ZEhKbFlXMXpJR2x1ZEc4Z2IyNWxJSE4wY21WaGJTbGNibHh1Wlhod2IzSjBjeUE5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZEdoeWIzVm5hRnh1ZEdoeWIzVm5hQzUwYUhKdmRXZG9JRDBnZEdoeWIzVm5hRnh1WEc0dkwyTnlaV0YwWlNCaElISmxZV1JoWW14bElIZHlhWFJoWW14bElITjBjbVZoYlM1Y2JseHVablZ1WTNScGIyNGdkR2h5YjNWbmFDQW9kM0pwZEdVc0lHVnVaQ3dnYjNCMGN5a2dlMXh1SUNCM2NtbDBaU0E5SUhkeWFYUmxJSHg4SUdaMWJtTjBhVzl1SUNoa1lYUmhLU0I3SUhSb2FYTXVjWFZsZFdVb1pHRjBZU2tnZlZ4dUlDQmxibVFnUFNCbGJtUWdmSHdnWm5WdVkzUnBiMjRnS0NrZ2V5QjBhR2x6TG5GMVpYVmxLRzUxYkd3cElIMWNibHh1SUNCMllYSWdaVzVrWldRZ1BTQm1ZV3h6WlN3Z1pHVnpkSEp2ZVdWa0lEMGdabUZzYzJVc0lHSjFabVpsY2lBOUlGdGRMQ0JmWlc1a1pXUWdQU0JtWVd4elpWeHVJQ0IyWVhJZ2MzUnlaV0Z0SUQwZ2JtVjNJRk4wY21WaGJTZ3BYRzRnSUhOMGNtVmhiUzV5WldGa1lXSnNaU0E5SUhOMGNtVmhiUzUzY21sMFlXSnNaU0E5SUhSeWRXVmNiaUFnYzNSeVpXRnRMbkJoZFhObFpDQTlJR1poYkhObFhHNWNiaTh2SUNCemRISmxZVzB1WVhWMGIxQmhkWE5sSUNBZ1BTQWhLRzl3ZEhNZ0ppWWdiM0IwY3k1aGRYUnZVR0YxYzJVZ0lDQTlQVDBnWm1Gc2MyVXBYRzRnSUhOMGNtVmhiUzVoZFhSdlJHVnpkSEp2ZVNBOUlDRW9iM0IwY3lBbUppQnZjSFJ6TG1GMWRHOUVaWE4wY205NUlEMDlQU0JtWVd4elpTbGNibHh1SUNCemRISmxZVzB1ZDNKcGRHVWdQU0JtZFc1amRHbHZiaUFvWkdGMFlTa2dlMXh1SUNBZ0lIZHlhWFJsTG1OaGJHd29kR2hwY3l3Z1pHRjBZU2xjYmlBZ0lDQnlaWFIxY200Z0lYTjBjbVZoYlM1d1lYVnpaV1JjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUdSeVlXbHVLQ2tnZTF4dUlDQWdJSGRvYVd4bEtHSjFabVpsY2k1c1pXNW5kR2dnSmlZZ0lYTjBjbVZoYlM1d1lYVnpaV1FwSUh0Y2JpQWdJQ0FnSUhaaGNpQmtZWFJoSUQwZ1luVm1abVZ5TG5Ob2FXWjBLQ2xjYmlBZ0lDQWdJR2xtS0c1MWJHd2dQVDA5SUdSaGRHRXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkSEpsWVcwdVpXMXBkQ2duWlc1a0p5bGNiaUFnSUNBZ0lHVnNjMlZjYmlBZ0lDQWdJQ0FnYzNSeVpXRnRMbVZ0YVhRb0oyUmhkR0VuTENCa1lYUmhLVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSE4wY21WaGJTNXhkV1YxWlNBOUlITjBjbVZoYlM1d2RYTm9JRDBnWm5WdVkzUnBiMjRnS0dSaGRHRXBJSHRjYmk4dklDQWdJR052Ym5OdmJHVXVaWEp5YjNJb1pXNWtaV1FwWEc0Z0lDQWdhV1lvWDJWdVpHVmtLU0J5WlhSMWNtNGdjM1J5WldGdFhHNGdJQ0FnYVdZb1pHRjBZU0E5UFQwZ2JuVnNiQ2tnWDJWdVpHVmtJRDBnZEhKMVpWeHVJQ0FnSUdKMVptWmxjaTV3ZFhOb0tHUmhkR0VwWEc0Z0lDQWdaSEpoYVc0b0tWeHVJQ0FnSUhKbGRIVnliaUJ6ZEhKbFlXMWNiaUFnZlZ4dVhHNGdJQzh2ZEdocGN5QjNhV3hzSUdKbElISmxaMmx6ZEdWeVpXUWdZWE1nZEdobElHWnBjbk4wSUNkbGJtUW5JR3hwYzNSbGJtVnlYRzRnSUM4dmJYVnpkQ0JqWVd4c0lHUmxjM1J5YjNrZ2JtVjRkQ0IwYVdOckxDQjBieUJ0WVd0bElITjFjbVVnZDJVbmNtVWdZV1owWlhJZ1lXNTVYRzRnSUM4dmMzUnlaV0Z0SUhCcGNHVmtJR1p5YjIwZ2FHVnlaUzVjYmlBZ0x5OTBhR2x6SUdseklHOXViSGtnWVNCd2NtOWliR1Z0SUdsbUlHVnVaQ0JwY3lCdWIzUWdaVzFwZEhSbFpDQnplVzVqYUhKdmJtOTFjMng1TGx4dUlDQXZMMkVnYm1salpYSWdkMkY1SUhSdklHUnZJSFJvYVhNZ2FYTWdkRzhnYldGclpTQnpkWEpsSUhSb2FYTWdhWE1nZEdobElHeGhjM1FnYkdsemRHVnVaWElnWm05eUlDZGxibVFuWEc1Y2JpQWdjM1J5WldGdExtOXVLQ2RsYm1RbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjM1J5WldGdExuSmxZV1JoWW14bElEMGdabUZzYzJWY2JpQWdJQ0JwWmlnaGMzUnlaV0Z0TG5keWFYUmhZbXhsSUNZbUlITjBjbVZoYlM1aGRYUnZSR1Z6ZEhKdmVTbGNiaUFnSUNBZ0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0J6ZEhKbFlXMHVaR1Z6ZEhKdmVTZ3BYRzRnSUNBZ0lDQjlLVnh1SUNCOUtWeHVYRzRnSUdaMWJtTjBhVzl1SUY5bGJtUWdLQ2tnZTF4dUlDQWdJSE4wY21WaGJTNTNjbWwwWVdKc1pTQTlJR1poYkhObFhHNGdJQ0FnWlc1a0xtTmhiR3dvYzNSeVpXRnRLVnh1SUNBZ0lHbG1LQ0Z6ZEhKbFlXMHVjbVZoWkdGaWJHVWdKaVlnYzNSeVpXRnRMbUYxZEc5RVpYTjBjbTk1S1Z4dUlDQWdJQ0FnYzNSeVpXRnRMbVJsYzNSeWIza29LVnh1SUNCOVhHNWNiaUFnYzNSeVpXRnRMbVZ1WkNBOUlHWjFibU4wYVc5dUlDaGtZWFJoS1NCN1hHNGdJQ0FnYVdZb1pXNWtaV1FwSUhKbGRIVnlibHh1SUNBZ0lHVnVaR1ZrSUQwZ2RISjFaVnh1SUNBZ0lHbG1LR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3BJSE4wY21WaGJTNTNjbWwwWlNoa1lYUmhLVnh1SUNBZ0lGOWxibVFvS1NBdkx5QjNhV3hzSUdWdGFYUWdiM0lnY1hWbGRXVmNiaUFnSUNCeVpYUjFjbTRnYzNSeVpXRnRYRzRnSUgxY2JseHVJQ0J6ZEhKbFlXMHVaR1Z6ZEhKdmVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JwWmloa1pYTjBjbTk1WldRcElISmxkSFZ5Ymx4dUlDQWdJR1JsYzNSeWIzbGxaQ0E5SUhSeWRXVmNiaUFnSUNCbGJtUmxaQ0E5SUhSeWRXVmNiaUFnSUNCaWRXWm1aWEl1YkdWdVozUm9JRDBnTUZ4dUlDQWdJSE4wY21WaGJTNTNjbWwwWVdKc1pTQTlJSE4wY21WaGJTNXlaV0ZrWVdKc1pTQTlJR1poYkhObFhHNGdJQ0FnYzNSeVpXRnRMbVZ0YVhRb0oyTnNiM05sSnlsY2JpQWdJQ0J5WlhSMWNtNGdjM1J5WldGdFhHNGdJSDFjYmx4dUlDQnpkSEpsWVcwdWNHRjFjMlVnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2FXWW9jM1J5WldGdExuQmhkWE5sWkNrZ2NtVjBkWEp1WEc0Z0lDQWdjM1J5WldGdExuQmhkWE5sWkNBOUlIUnlkV1ZjYmlBZ0lDQnlaWFIxY200Z2MzUnlaV0Z0WEc0Z0lIMWNibHh1SUNCemRISmxZVzB1Y21WemRXMWxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUdsbUtITjBjbVZoYlM1d1lYVnpaV1FwSUh0Y2JpQWdJQ0FnSUhOMGNtVmhiUzV3WVhWelpXUWdQU0JtWVd4elpWeHVJQ0FnSUNBZ2MzUnlaV0Z0TG1WdGFYUW9KM0psYzNWdFpTY3BYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVLQ2xjYmlBZ0lDQXZMMjFoZVNCb1lYWmxJR0psWTI5dFpTQndZWFZ6WldRZ1lXZGhhVzRzWEc0Z0lDQWdMeTloY3lCa2NtRnBiaUJsYldsMGN5QW5aR0YwWVNjdVhHNGdJQ0FnYVdZb0lYTjBjbVZoYlM1d1lYVnpaV1FwWEc0Z0lDQWdJQ0J6ZEhKbFlXMHVaVzFwZENnblpISmhhVzRuS1Z4dUlDQWdJSEpsZEhWeWJpQnpkSEpsWVcxY2JpQWdmVnh1SUNCeVpYUjFjbTRnYzNSeVpXRnRYRzU5WEc1Y2JpSXNJbU52Ym5OMElFSk9JRDBnY21WeGRXbHlaU2duWW00dWFuTW5LVnh1WTI5dWMzUWdSVU1nUFNCeVpYRjFhWEpsS0NkbGJHeHBjSFJwWXljcExtVmpYRzVqYjI1emRDQnpaV053TWpVMmF6RWdQU0J1WlhjZ1JVTW9KM05sWTNBeU5UWnJNU2NwWEc1amIyNXpkQ0JrWlhSbGNtMXBibWx6ZEdsalIyVnVaWEpoZEdWTElEMGdjbVZ4ZFdseVpTZ25MaTl5Wm1NMk9UYzVKeWxjYmx4dVkyOXVjM1FnV2tWU1R6TXlJRDBnUW5WbVptVnlMbUZzYkc5aktETXlMQ0F3S1Z4dVkyOXVjM1FnUlVOZlIxSlBWVkJmVDFKRVJWSWdQU0JDZFdabVpYSXVabkp2YlNnblptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVZpWVdGbFpHTmxObUZtTkRoaE1ETmlZbVprTWpWbE9HTmtNRE0yTkRFME1TY3NJQ2RvWlhnbktWeHVZMjl1YzNRZ1JVTmZVQ0E5SUVKMVptWmxjaTVtY205dEtDZG1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1abVptWm1aV1ptWm1abVl6Sm1KeXdnSjJobGVDY3BYRzVjYm1OdmJuTjBJRzRnUFNCelpXTndNalUyYXpFdVkzVnlkbVV1Ymx4dVkyOXVjM1FnYmtScGRqSWdQU0J1TG5Ob2NtNG9NU2xjYm1OdmJuTjBJRWNnUFNCelpXTndNalUyYXpFdVkzVnlkbVV1WjF4dVhHNWpiMjV6ZENCVVNGSlBWMTlDUVVSZlVGSkpWa0ZVUlNBOUlDZEZlSEJsWTNSbFpDQlFjbWwyWVhSbEoxeHVZMjl1YzNRZ1ZFaFNUMWRmUWtGRVgxQlBTVTVVSUQwZ0owVjRjR1ZqZEdWa0lGQnZhVzUwSjF4dVkyOXVjM1FnVkVoU1QxZGZRa0ZFWDFSWFJVRkxJRDBnSjBWNGNHVmpkR1ZrSUZSM1pXRnJKMXh1WTI5dWMzUWdWRWhTVDFkZlFrRkVYMGhCVTBnZ1BTQW5SWGh3WldOMFpXUWdTR0Z6YUNkY2JtTnZibk4wSUZSSVVrOVhYMEpCUkY5VFNVZE9RVlJWVWtVZ1BTQW5SWGh3WldOMFpXUWdVMmxuYm1GMGRYSmxKMXh1WTI5dWMzUWdWRWhTVDFkZlFrRkVYMFZZVkZKQlgwUkJWRUVnUFNBblJYaHdaV04wWldRZ1JYaDBjbUVnUkdGMFlTQW9NeklnWW5sMFpYTXBKMXh1WEc1bWRXNWpkR2x2YmlCcGMxTmpZV3hoY2lBb2VDa2dlMXh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbWx6UW5WbVptVnlLSGdwSUNZbUlIZ3ViR1Z1WjNSb0lEMDlQU0F6TWx4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzA5eVpHVnlVMk5oYkdGeUlDaDRLU0I3WEc0Z0lHbG1JQ2doYVhOVFkyRnNZWElvZUNrcElISmxkSFZ5YmlCbVlXeHpaVnh1SUNCeVpYUjFjbTRnZUM1amIyMXdZWEpsS0VWRFgwZFNUMVZRWDA5U1JFVlNLU0E4SURBZ0x5OGdQQ0JIWEc1OVhHNWNibVoxYm1OMGFXOXVJR2x6VUc5cGJuUWdLSEFwSUh0Y2JpQWdhV1lnS0NGQ2RXWm1aWEl1YVhOQ2RXWm1aWElvY0NrcElISmxkSFZ5YmlCbVlXeHpaVnh1SUNCcFppQW9jQzVzWlc1bmRHZ2dQQ0F6TXlrZ2NtVjBkWEp1SUdaaGJITmxYRzVjYmlBZ1kyOXVjM1FnZENBOUlIQmJNRjFjYmlBZ1kyOXVjM1FnZUNBOUlIQXVjMnhwWTJVb01Td2dNek1wWEc0Z0lHbG1JQ2g0TG1OdmJYQmhjbVVvV2tWU1R6TXlLU0E5UFQwZ01Da2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lHbG1JQ2g0TG1OdmJYQmhjbVVvUlVOZlVDa2dQajBnTUNrZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUdsbUlDZ29kQ0E5UFQwZ01IZ3dNaUI4ZkNCMElEMDlQU0F3ZURBektTQW1KaUJ3TG14bGJtZDBhQ0E5UFQwZ016TXBJSHRjYmlBZ0lDQjBjbmtnZXlCa1pXTnZaR1ZHY205dEtIQXBJSDBnWTJGMFkyZ2dLR1VwSUhzZ2NtVjBkWEp1SUdaaGJITmxJSDBnTHk4Z1ZFOUVUem9nZEdWdGNHOXlZWEo1WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJSGtnUFNCd0xuTnNhV05sS0RNektWeHVJQ0JwWmlBb2VTNWpiMjF3WVhKbEtGcEZVazh6TWlrZ1BUMDlJREFwSUhKbGRIVnliaUJtWVd4elpWeHVJQ0JwWmlBb2VTNWpiMjF3WVhKbEtFVkRYMUFwSUQ0OUlEQXBJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQnBaaUFvZENBOVBUMGdNSGd3TkNBbUppQndMbXhsYm1kMGFDQTlQVDBnTmpVcElISmxkSFZ5YmlCMGNuVmxYRzRnSUhKbGRIVnliaUJtWVd4elpWeHVmVnh1WEc1bWRXNWpkR2x2YmlCZlgybHpVRzlwYm5SRGIyMXdjbVZ6YzJWa0lDaHdLU0I3WEc0Z0lISmxkSFZ5YmlCd1d6QmRJQ0U5UFNBd2VEQTBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHpVRzlwYm5SRGIyMXdjbVZ6YzJWa0lDaHdLU0I3WEc0Z0lHbG1JQ2doYVhOUWIybHVkQ2h3S1NrZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUhKbGRIVnliaUJmWDJselVHOXBiblJEYjIxd2NtVnpjMlZrS0hBcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdselVISnBkbUYwWlNBb2VDa2dlMXh1SUNCcFppQW9JV2x6VTJOaGJHRnlLSGdwS1NCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnY21WMGRYSnVJSGd1WTI5dGNHRnlaU2hhUlZKUE16SXBJRDRnTUNBbUppQXZMeUErSURCY2JpQWdJQ0I0TG1OdmJYQmhjbVVvUlVOZlIxSlBWVkJmVDFKRVJWSXBJRHdnTUNBdkx5QThJRWRjYm4xY2JseHVablZ1WTNScGIyNGdhWE5UYVdkdVlYUjFjbVVnS0haaGJIVmxLU0I3WEc0Z0lHTnZibk4wSUhJZ1BTQjJZV3gxWlM1emJHbGpaU2d3TENBek1pbGNiaUFnWTI5dWMzUWdjeUE5SUhaaGJIVmxMbk5zYVdObEtETXlMQ0EyTkNsY2JpQWdjbVYwZFhKdUlFSjFabVpsY2k1cGMwSjFabVpsY2loMllXeDFaU2tnSmlZZ2RtRnNkV1V1YkdWdVozUm9JRDA5UFNBMk5DQW1KbHh1SUNBZ0lISXVZMjl0Y0dGeVpTaEZRMTlIVWs5VlVGOVBVa1JGVWlrZ1BDQXdJQ1ltWEc0Z0lDQWdjeTVqYjIxd1lYSmxLRVZEWDBkU1QxVlFYMDlTUkVWU0tTQThJREJjYm4xY2JseHVablZ1WTNScGIyNGdZWE56ZFcxbFEyOXRjSEpsYzNOcGIyNGdLSFpoYkhWbExDQndkV0pyWlhrcElIdGNiaUFnYVdZZ0tIWmhiSFZsSUQwOVBTQjFibVJsWm1sdVpXUWdKaVlnY0hWaWEyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElISmxkSFZ5YmlCZlgybHpVRzlwYm5SRGIyMXdjbVZ6YzJWa0tIQjFZbXRsZVNsY2JpQWdhV1lnS0haaGJIVmxJRDA5UFNCMWJtUmxabWx1WldRcElISmxkSFZ5YmlCMGNuVmxYRzRnSUhKbGRIVnliaUIyWVd4MVpWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbWNtOXRRblZtWm1WeUlDaGtLU0I3SUhKbGRIVnliaUJ1WlhjZ1FrNG9aQ2tnZlZ4dVpuVnVZM1JwYjI0Z2RHOUNkV1ptWlhJZ0tHUXBJSHNnY21WMGRYSnVJR1F1ZEc5QmNuSmhlVXhwYTJVb1FuVm1abVZ5TENBblltVW5MQ0F6TWlrZ2ZWeHVablZ1WTNScGIyNGdaR1ZqYjJSbFJuSnZiU0FvVUNrZ2V5QnlaWFIxY200Z2MyVmpjREkxTm1zeExtTjFjblpsTG1SbFkyOWtaVkJ2YVc1MEtGQXBJSDFjYm1aMWJtTjBhVzl1SUdkbGRFVnVZMjlrWldRZ0tGQXNJR052YlhCeVpYTnpaV1FwSUhzZ2NtVjBkWEp1SUVKMVptWmxjaTVtY205dEtGQXVYMlZ1WTI5a1pTaGpiMjF3Y21WemMyVmtLU2tnZlZ4dVhHNW1kVzVqZEdsdmJpQndiMmx1ZEVGa1pDQW9jRUVzSUhCQ0xDQmZYMk52YlhCeVpYTnpaV1FwSUh0Y2JpQWdhV1lnS0NGcGMxQnZhVzUwS0hCQktTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhVU0ZKUFYxOUNRVVJmVUU5SlRsUXBYRzRnSUdsbUlDZ2hhWE5RYjJsdWRDaHdRaWtwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1ZFaFNUMWRmUWtGRVgxQlBTVTVVS1Z4dVhHNGdJR052Ym5OMElHRWdQU0JrWldOdlpHVkdjbTl0S0hCQktWeHVJQ0JqYjI1emRDQmlJRDBnWkdWamIyUmxSbkp2YlNod1FpbGNiaUFnWTI5dWMzUWdjSEFnUFNCaExtRmtaQ2hpS1Z4dUlDQnBaaUFvY0hBdWFYTkpibVpwYm1sMGVTZ3BLU0J5WlhSMWNtNGdiblZzYkZ4dVhHNGdJR052Ym5OMElHTnZiWEJ5WlhOelpXUWdQU0JoYzNOMWJXVkRiMjF3Y21WemMybHZiaWhmWDJOdmJYQnlaWE56WldRc0lIQkJLVnh1SUNCeVpYUjFjbTRnWjJWMFJXNWpiMlJsWkNod2NDd2dZMjl0Y0hKbGMzTmxaQ2xjYm4xY2JseHVablZ1WTNScGIyNGdjRzlwYm5SQlpHUlRZMkZzWVhJZ0tIQXNJSFIzWldGckxDQmZYMk52YlhCeVpYTnpaV1FwSUh0Y2JpQWdhV1lnS0NGcGMxQnZhVzUwS0hBcEtTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRlJJVWs5WFgwSkJSRjlRVDBsT1ZDbGNiaUFnYVdZZ0tDRnBjMDl5WkdWeVUyTmhiR0Z5S0hSM1pXRnJLU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loVVNGSlBWMTlDUVVSZlZGZEZRVXNwWEc1Y2JpQWdZMjl1YzNRZ1kyOXRjSEpsYzNObFpDQTlJR0Z6YzNWdFpVTnZiWEJ5WlhOemFXOXVLRjlmWTI5dGNISmxjM05sWkN3Z2NDbGNiaUFnWTI5dWMzUWdjSEFnUFNCa1pXTnZaR1ZHY205dEtIQXBYRzRnSUdsbUlDaDBkMlZoYXk1amIyMXdZWEpsS0ZwRlVrOHpNaWtnUFQwOUlEQXBJSEpsZEhWeWJpQm5aWFJGYm1OdlpHVmtLSEJ3TENCamIyMXdjbVZ6YzJWa0tWeHVYRzRnSUdOdmJuTjBJSFIwSUQwZ1puSnZiVUoxWm1abGNpaDBkMlZoYXlsY2JpQWdZMjl1YzNRZ2NYRWdQU0JITG0xMWJDaDBkQ2xjYmlBZ1kyOXVjM1FnZFhVZ1BTQndjQzVoWkdRb2NYRXBYRzRnSUdsbUlDaDFkUzVwYzBsdVptbHVhWFI1S0NrcElISmxkSFZ5YmlCdWRXeHNYRzVjYmlBZ2NtVjBkWEp1SUdkbGRFVnVZMjlrWldRb2RYVXNJR052YlhCeVpYTnpaV1FwWEc1OVhHNWNibVoxYm1OMGFXOXVJSEJ2YVc1MFEyOXRjSEpsYzNNZ0tIQXNJRjlmWTI5dGNISmxjM05sWkNrZ2UxeHVJQ0JwWmlBb0lXbHpVRzlwYm5Rb2NDa3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvVkVoU1QxZGZRa0ZFWDFCUFNVNVVLVnh1WEc0Z0lHTnZibk4wSUhCd0lEMGdaR1ZqYjJSbFJuSnZiU2h3S1Z4dUlDQnBaaUFvY0hBdWFYTkpibVpwYm1sMGVTZ3BLU0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0ZSSVVrOVhYMEpCUkY5UVQwbE9WQ2xjYmx4dUlDQmpiMjV6ZENCamIyMXdjbVZ6YzJWa0lEMGdZWE56ZFcxbFEyOXRjSEpsYzNOcGIyNG9YMTlqYjIxd2NtVnpjMlZrTENCd0tWeHVYRzRnSUhKbGRIVnliaUJuWlhSRmJtTnZaR1ZrS0hCd0xDQmpiMjF3Y21WemMyVmtLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQndiMmx1ZEVaeWIyMVRZMkZzWVhJZ0tHUXNJRjlmWTI5dGNISmxjM05sWkNrZ2UxeHVJQ0JwWmlBb0lXbHpVSEpwZG1GMFpTaGtLU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loVVNGSlBWMTlDUVVSZlVGSkpWa0ZVUlNsY2JseHVJQ0JqYjI1emRDQmtaQ0E5SUdaeWIyMUNkV1ptWlhJb1pDbGNiaUFnWTI5dWMzUWdjSEFnUFNCSExtMTFiQ2hrWkNsY2JpQWdhV1lnS0hCd0xtbHpTVzVtYVc1cGRIa29LU2tnY21WMGRYSnVJRzUxYkd4Y2JseHVJQ0JqYjI1emRDQmpiMjF3Y21WemMyVmtJRDBnWVhOemRXMWxRMjl0Y0hKbGMzTnBiMjRvWDE5amIyMXdjbVZ6YzJWa0tWeHVJQ0J5WlhSMWNtNGdaMlYwUlc1amIyUmxaQ2h3Y0N3Z1kyOXRjSEpsYzNObFpDbGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NHOXBiblJOZFd4MGFYQnNlU0FvY0N3Z2RIZGxZV3NzSUY5ZlkyOXRjSEpsYzNObFpDa2dlMXh1SUNCcFppQW9JV2x6VUc5cGJuUW9jQ2twSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1ZFaFNUMWRmUWtGRVgxQlBTVTVVS1Z4dUlDQnBaaUFvSVdselQzSmtaWEpUWTJGc1lYSW9kSGRsWVdzcEtTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRlJJVWs5WFgwSkJSRjlVVjBWQlN5bGNibHh1SUNCamIyNXpkQ0JqYjIxd2NtVnpjMlZrSUQwZ1lYTnpkVzFsUTI5dGNISmxjM05wYjI0b1gxOWpiMjF3Y21WemMyVmtMQ0J3S1Z4dUlDQmpiMjV6ZENCd2NDQTlJR1JsWTI5a1pVWnliMjBvY0NsY2JpQWdZMjl1YzNRZ2RIUWdQU0JtY205dFFuVm1abVZ5S0hSM1pXRnJLVnh1SUNCamIyNXpkQ0J4Y1NBOUlIQndMbTExYkNoMGRDbGNiaUFnYVdZZ0tIRnhMbWx6U1c1bWFXNXBkSGtvS1NrZ2NtVjBkWEp1SUc1MWJHeGNibHh1SUNCeVpYUjFjbTRnWjJWMFJXNWpiMlJsWkNoeGNTd2dZMjl0Y0hKbGMzTmxaQ2xjYm4xY2JseHVablZ1WTNScGIyNGdjSEpwZG1GMFpVRmtaQ0FvWkN3Z2RIZGxZV3NwSUh0Y2JpQWdhV1lnS0NGcGMxQnlhWFpoZEdVb1pDa3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvVkVoU1QxZGZRa0ZFWDFCU1NWWkJWRVVwWEc0Z0lHbG1JQ2doYVhOUGNtUmxjbE5qWVd4aGNpaDBkMlZoYXlrcElIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9WRWhTVDFkZlFrRkVYMVJYUlVGTEtWeHVYRzRnSUdOdmJuTjBJR1JrSUQwZ1puSnZiVUoxWm1abGNpaGtLVnh1SUNCamIyNXpkQ0IwZENBOUlHWnliMjFDZFdabVpYSW9kSGRsWVdzcFhHNGdJR052Ym5OMElHUjBJRDBnZEc5Q2RXWm1aWElvWkdRdVlXUmtLSFIwS1M1MWJXOWtLRzRwS1Z4dUlDQnBaaUFvSVdselVISnBkbUYwWlNoa2RDa3BJSEpsZEhWeWJpQnVkV3hzWEc1Y2JpQWdjbVYwZFhKdUlHUjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlIQnlhWFpoZEdWVGRXSWdLR1FzSUhSM1pXRnJLU0I3WEc0Z0lHbG1JQ2doYVhOUWNtbDJZWFJsS0dRcEtTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRlJJVWs5WFgwSkJSRjlRVWtsV1FWUkZLVnh1SUNCcFppQW9JV2x6VDNKa1pYSlRZMkZzWVhJb2RIZGxZV3NwS1NCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtGUklVazlYWDBKQlJGOVVWMFZCU3lsY2JseHVJQ0JqYjI1emRDQmtaQ0E5SUdaeWIyMUNkV1ptWlhJb1pDbGNiaUFnWTI5dWMzUWdkSFFnUFNCbWNtOXRRblZtWm1WeUtIUjNaV0ZyS1Z4dUlDQmpiMjV6ZENCa2RDQTlJSFJ2UW5WbVptVnlLR1JrTG5OMVlpaDBkQ2t1ZFcxdlpDaHVLU2xjYmlBZ2FXWWdLQ0ZwYzFCeWFYWmhkR1VvWkhRcEtTQnlaWFIxY200Z2JuVnNiRnh1WEc0Z0lISmxkSFZ5YmlCa2RGeHVmVnh1WEc1bWRXNWpkR2x2YmlCemFXZHVJQ2hvWVhOb0xDQjRLU0I3WEc0Z0lISmxkSFZ5YmlCZlgzTnBaMjRvYUdGemFDd2dlQ2xjYm4xY2JseHVablZ1WTNScGIyNGdjMmxuYmxkcGRHaEZiblJ5YjNCNUlDaG9ZWE5vTENCNExDQmhaR1JFWVhSaEtTQjdYRzRnSUhKbGRIVnliaUJmWDNOcFoyNG9hR0Z6YUN3Z2VDd2dZV1JrUkdGMFlTbGNibjFjYmx4dVpuVnVZM1JwYjI0Z1gxOXphV2R1SUNob1lYTm9MQ0I0TENCaFpHUkVZWFJoS1NCN1hHNGdJR2xtSUNnaGFYTlRZMkZzWVhJb2FHRnphQ2twSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1ZFaFNUMWRmUWtGRVgwaEJVMGdwWEc0Z0lHbG1JQ2doYVhOUWNtbDJZWFJsS0hncEtTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRlJJVWs5WFgwSkJSRjlRVWtsV1FWUkZLVnh1SUNCcFppQW9ZV1JrUkdGMFlTQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlDRnBjMU5qWVd4aGNpaGhaR1JFWVhSaEtTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhVU0ZKUFYxOUNRVVJmUlZoVVVrRmZSRUZVUVNsY2JseHVJQ0JqYjI1emRDQmtJRDBnWm5KdmJVSjFabVpsY2loNEtWeHVJQ0JqYjI1emRDQmxJRDBnWm5KdmJVSjFabVpsY2lob1lYTm9LVnh1WEc0Z0lHeGxkQ0J5TENCelhHNGdJR052Ym5OMElHTm9aV05yVTJsbklEMGdablZ1WTNScGIyNGdLR3NwSUh0Y2JpQWdJQ0JqYjI1emRDQnJTU0E5SUdaeWIyMUNkV1ptWlhJb2F5bGNiaUFnSUNCamIyNXpkQ0JSSUQwZ1J5NXRkV3dvYTBrcFhHNWNiaUFnSUNCcFppQW9VUzVwYzBsdVptbHVhWFI1S0NrcElISmxkSFZ5YmlCbVlXeHpaVnh1WEc0Z0lDQWdjaUE5SUZFdWVDNTFiVzlrS0c0cFhHNGdJQ0FnYVdZZ0tISXVhWE5hWlhKdktDa2dQVDA5SURBcElISmxkSFZ5YmlCbVlXeHpaVnh1WEc0Z0lDQWdjeUE5SUd0SlhHNGdJQ0FnSUNBdWFXNTJiU2h1S1Z4dUlDQWdJQ0FnTG0xMWJDaGxMbUZrWkNoa0xtMTFiQ2h5S1NrcFhHNGdJQ0FnSUNBdWRXMXZaQ2h1S1Z4dUlDQWdJR2xtSUNoekxtbHpXbVZ5YnlncElEMDlQU0F3S1NCeVpYUjFjbTRnWm1Gc2MyVmNibHh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxYRzRnSUgxY2JseHVJQ0JrWlhSbGNtMXBibWx6ZEdsalIyVnVaWEpoZEdWTEtHaGhjMmdzSUhnc0lHTm9aV05yVTJsbkxDQnBjMUJ5YVhaaGRHVXNJR0ZrWkVSaGRHRXBYRzVjYmlBZ0x5OGdaVzVtYjNKalpTQnNiM2NnVXlCMllXeDFaWE1zSUhObFpTQmlhWEEyTWpvZ0oyeHZkeUJ6SUhaaGJIVmxjeUJwYmlCemFXZHVZWFIxY21WekoxeHVJQ0JwWmlBb2N5NWpiWEFvYmtScGRqSXBJRDRnTUNrZ2UxeHVJQ0FnSUhNZ1BTQnVMbk4xWWloektWeHVJQ0I5WEc1Y2JpQWdZMjl1YzNRZ1luVm1abVZ5SUQwZ1FuVm1abVZ5TG1Gc2JHOWpWVzV6WVdabEtEWTBLVnh1SUNCMGIwSjFabVpsY2loeUtTNWpiM0I1S0dKMVptWmxjaXdnTUNsY2JpQWdkRzlDZFdabVpYSW9jeWt1WTI5d2VTaGlkV1ptWlhJc0lETXlLVnh1SUNCeVpYUjFjbTRnWW5WbVptVnlYRzU5WEc1Y2JtWjFibU4wYVc5dUlIWmxjbWxtZVNBb2FHRnphQ3dnY1N3Z2MybG5ibUYwZFhKbExDQnpkSEpwWTNRcElIdGNiaUFnYVdZZ0tDRnBjMU5qWVd4aGNpaG9ZWE5vS1NrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaFVTRkpQVjE5Q1FVUmZTRUZUU0NsY2JpQWdhV1lnS0NGcGMxQnZhVzUwS0hFcEtTQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRlJJVWs5WFgwSkJSRjlRVDBsT1ZDbGNibHh1SUNBdkx5QXhMalF1TVNCRmJtWnZjbU5sSUhJZ1lXNWtJSE1nWVhKbElHSnZkR2dnYVc1MFpXZGxjbk1nYVc0Z2RHaGxJR2x1ZEdWeWRtRnNJRnN4TENCdUlPS0lraUF4WFNBb01Td2dhWE5UYVdkdVlYUjFjbVVnWlc1bWIzSmpaWE1nSnp3Z2JpQXRJREVuS1Z4dUlDQnBaaUFvSVdselUybG5ibUYwZFhKbEtITnBaMjVoZEhWeVpTa3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvVkVoU1QxZGZRa0ZFWDFOSlIwNUJWRlZTUlNsY2JseHVJQ0JqYjI1emRDQlJJRDBnWkdWamIyUmxSbkp2YlNoeEtWeHVJQ0JqYjI1emRDQnlJRDBnWm5KdmJVSjFabVpsY2loemFXZHVZWFIxY21VdWMyeHBZMlVvTUN3Z016SXBLVnh1SUNCamIyNXpkQ0J6SUQwZ1puSnZiVUoxWm1abGNpaHphV2R1WVhSMWNtVXVjMnhwWTJVb016SXNJRFkwS1NsY2JseHVJQ0JwWmlBb2MzUnlhV04wSUNZbUlITXVZMjF3S0c1RWFYWXlLU0ErSURBcElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnZlZ4dVhHNGdJQzh2SURFdU5DNHhJRVZ1Wm05eVkyVWdjaUJoYm1RZ2N5QmhjbVVnWW05MGFDQnBiblJsWjJWeWN5QnBiaUIwYUdVZ2FXNTBaWEoyWVd3Z1d6RXNJRzRnNG9pU0lERmRJQ2d5TENCbGJtWnZjbU5sY3lBblBpQXdKeWxjYmlBZ2FXWWdLSEl1WjNSdUtEQXBJRHc5SURBZ0x5b2dmSHdnY2k1amIyMXdZWEpsVkc4b2Jpa2dQajBnTUNBcUx5a2djbVYwZFhKdUlHWmhiSE5sWEc0Z0lHbG1JQ2h6TG1kMGJpZ3dLU0E4UFNBd0lDOHFJSHg4SUhNdVkyOXRjR0Z5WlZSdktHNHBJRDQ5SURBZ0tpOHBJSEpsZEhWeWJpQm1ZV3h6WlZ4dVhHNGdJQzh2SURFdU5DNHlJRWdnUFNCSVlYTm9LRTBwTENCaGJISmxZV1I1SUdSdmJtVWdZbmtnZEdobElIVnpaWEpjYmlBZ0x5OGdNUzQwTGpNZ1pTQTlJRWhjYmlBZ1kyOXVjM1FnWlNBOUlHWnliMjFDZFdabVpYSW9hR0Z6YUNsY2JseHVJQ0F2THlCRGIyMXdkWFJsSUhOZUxURmNiaUFnWTI5dWMzUWdjMGx1ZGlBOUlITXVhVzUyYlNodUtWeHVYRzRnSUM4dklERXVOQzQwSUVOdmJYQjFkR1VnZFRFZ1BTQmxjMTdpaUpJeElHMXZaQ0J1WEc0Z0lDOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RUSWdQU0J5YzE3aWlKSXhJRzF2WkNCdVhHNGdJR052Ym5OMElIVXhJRDBnWlM1dGRXd29jMGx1ZGlrdWRXMXZaQ2h1S1Z4dUlDQmpiMjV6ZENCMU1pQTlJSEl1YlhWc0tITkpibllwTG5WdGIyUW9iaWxjYmx4dUlDQXZMeUF4TGpRdU5TQkRiMjF3ZFhSbElGSWdQU0FvZUZJc0lIbFNLVnh1SUNBdkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUZJZ1BTQjFNVWNnS3lCMU1sRmNiaUFnWTI5dWMzUWdVaUE5SUVjdWJYVnNRV1JrS0hVeExDQlJMQ0IxTWlsY2JseHVJQ0F2THlBeExqUXVOU0FvWTI5dWRDNHBJRVZ1Wm05eVkyVWdVaUJwY3lCdWIzUWdZWFFnYVc1bWFXNXBkSGxjYmlBZ2FXWWdLRkl1YVhOSmJtWnBibWwwZVNncEtTQnlaWFIxY200Z1ptRnNjMlZjYmx4dUlDQXZMeUF4TGpRdU5pQkRiMjUyWlhKMElIUm9aU0JtYVdWc1pDQmxiR1Z0Wlc1MElGSXVlQ0IwYnlCaGJpQnBiblJsWjJWeVhHNGdJR052Ym5OMElIaFNJRDBnVWk1NFhHNWNiaUFnTHk4Z01TNDBMamNnVTJWMElIWWdQU0I0VWlCdGIyUWdibHh1SUNCamIyNXpkQ0IySUQwZ2VGSXVkVzF2WkNodUtWeHVYRzRnSUM4dklERXVOQzQ0SUVsbUlIWWdQU0J5TENCdmRYUndkWFFnWENKMllXeHBaRndpTENCaGJtUWdhV1lnZGlBaFBTQnlMQ0J2ZFhSd2RYUWdYQ0pwYm5aaGJHbGtYQ0pjYmlBZ2NtVjBkWEp1SUhZdVpYRW9jaWxjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYRzRnSUdselVHOXBiblFzWEc0Z0lHbHpVRzlwYm5SRGIyMXdjbVZ6YzJWa0xGeHVJQ0JwYzFCeWFYWmhkR1VzWEc0Z0lIQnZhVzUwUVdSa0xGeHVJQ0J3YjJsdWRFRmtaRk5qWVd4aGNpeGNiaUFnY0c5cGJuUkRiMjF3Y21WemN5eGNiaUFnY0c5cGJuUkdjbTl0VTJOaGJHRnlMRnh1SUNCd2IybHVkRTExYkhScGNHeDVMRnh1SUNCd2NtbDJZWFJsUVdSa0xGeHVJQ0J3Y21sMllYUmxVM1ZpTEZ4dUlDQnphV2R1TEZ4dUlDQnphV2R1VjJsMGFFVnVkSEp2Y0hrc1hHNGdJSFpsY21sbWVWeHVmVnh1SWl3aVkyOXVjM1FnWTNKbFlYUmxTRzFoWXlBOUlISmxjWFZwY21Vb0oyTnlaV0YwWlMxb2JXRmpKeWxjYmx4dVkyOXVjM1FnVDA1Rk1TQTlJRUoxWm1abGNpNWhiR3h2WXlneExDQXhLVnh1WTI5dWMzUWdXa1ZTVHpFZ1BTQkNkV1ptWlhJdVlXeHNiMk1vTVN3Z01DbGNibHh1THk4Z2FIUjBjSE02THk5MGIyOXNjeTVwWlhSbUxtOXlaeTlvZEcxc0wzSm1Zelk1TnpramMyVmpkR2x2YmkwekxqSmNibVoxYm1OMGFXOXVJR1JsZEdWeWJXbHVhWE4wYVdOSFpXNWxjbUYwWlVzZ0tHaGhjMmdzSUhnc0lHTm9aV05yVTJsbkxDQnBjMUJ5YVhaaGRHVXNJR1Y0ZEhKaFJXNTBjbTl3ZVNrZ2UxeHVJQ0F2THlCVGRHVndJRUVzSUdsbmJtOXlaV1FnWVhNZ2FHRnphQ0JoYkhKbFlXUjVJSEJ5YjNacFpHVmtYRzRnSUM4dklGTjBaWEFnUWx4dUlDQXZMeUJUZEdWd0lFTmNiaUFnYkdWMElHc2dQU0JDZFdabVpYSXVZV3hzYjJNb016SXNJREFwWEc0Z0lHeGxkQ0IySUQwZ1FuVm1abVZ5TG1Gc2JHOWpLRE15TENBeEtWeHVYRzRnSUM4dklGTjBaWEFnUkZ4dUlDQnJJRDBnWTNKbFlYUmxTRzFoWXlnbmMyaGhNalUySnl3Z2F5bGNiaUFnSUNBdWRYQmtZWFJsS0hZcFhHNGdJQ0FnTG5Wd1pHRjBaU2hhUlZKUE1TbGNiaUFnSUNBdWRYQmtZWFJsS0hncFhHNGdJQ0FnTG5Wd1pHRjBaU2hvWVhOb0tWeHVJQ0FnSUM1MWNHUmhkR1VvWlhoMGNtRkZiblJ5YjNCNUlIeDhJQ2NuS1Z4dUlDQWdJQzVrYVdkbGMzUW9LVnh1WEc0Z0lDOHZJRk4wWlhBZ1JWeHVJQ0IySUQwZ1kzSmxZWFJsU0cxaFl5Z25jMmhoTWpVMkp5d2dheWt1ZFhCa1lYUmxLSFlwTG1ScFoyVnpkQ2dwWEc1Y2JpQWdMeThnVTNSbGNDQkdYRzRnSUdzZ1BTQmpjbVZoZEdWSWJXRmpLQ2R6YUdFeU5UWW5MQ0JyS1Z4dUlDQWdJQzUxY0dSaGRHVW9kaWxjYmlBZ0lDQXVkWEJrWVhSbEtFOU9SVEVwWEc0Z0lDQWdMblZ3WkdGMFpTaDRLVnh1SUNBZ0lDNTFjR1JoZEdVb2FHRnphQ2xjYmlBZ0lDQXVkWEJrWVhSbEtHVjRkSEpoUlc1MGNtOXdlU0I4ZkNBbkp5bGNiaUFnSUNBdVpHbG5aWE4wS0NsY2JseHVJQ0F2THlCVGRHVndJRWRjYmlBZ2RpQTlJR055WldGMFpVaHRZV01vSjNOb1lUSTFOaWNzSUdzcExuVndaR0YwWlNoMktTNWthV2RsYzNRb0tWeHVYRzRnSUM4dklGTjBaWEFnU0RFdlNESmhMQ0JwWjI1dmNtVmtJR0Z6SUhSc1pXNGdQVDA5SUhGc1pXNGdLREkxTmlCaWFYUXBYRzRnSUM4dklGTjBaWEFnU0RKaVhHNGdJSFlnUFNCamNtVmhkR1ZJYldGaktDZHphR0V5TlRZbkxDQnJLUzUxY0dSaGRHVW9kaWt1WkdsblpYTjBLQ2xjYmx4dUlDQnNaWFFnVkNBOUlIWmNibHh1SUNBdkx5QlRkR1Z3SUVnekxDQnlaWEJsWVhRZ2RXNTBhV3dnVkNCcGN5QjNhWFJvYVc0Z2RHaGxJR2x1ZEdWeWRtRnNJRnN4TENCdUlDMGdNVjBnWVc1a0lHbHpJSE4xYVhSaFlteGxJR1p2Y2lCRlEwUlRRVnh1SUNCM2FHbHNaU0FvSVdselVISnBkbUYwWlNoVUtTQjhmQ0FoWTJobFkydFRhV2NvVkNrcElIdGNiaUFnSUNCcklEMGdZM0psWVhSbFNHMWhZeWduYzJoaE1qVTJKeXdnYXlsY2JpQWdJQ0FnSUM1MWNHUmhkR1VvZGlsY2JpQWdJQ0FnSUM1MWNHUmhkR1VvV2tWU1R6RXBYRzRnSUNBZ0lDQXVaR2xuWlhOMEtDbGNibHh1SUNBZ0lIWWdQU0JqY21WaGRHVkliV0ZqS0NkemFHRXlOVFluTENCcktTNTFjR1JoZEdVb2Rpa3VaR2xuWlhOMEtDbGNibHh1SUNBZ0lDOHZJRk4wWlhBZ1NERXZTREpoTENCaFoyRnBiaXdnYVdkdWIzSmxaQ0JoY3lCMGJHVnVJRDA5UFNCeGJHVnVJQ2d5TlRZZ1ltbDBLVnh1SUNBZ0lDOHZJRk4wWlhBZ1NESmlJR0ZuWVdsdVhHNGdJQ0FnZGlBOUlHTnlaV0YwWlVodFlXTW9KM05vWVRJMU5pY3NJR3NwTG5Wd1pHRjBaU2gyS1M1a2FXZGxjM1FvS1Z4dUlDQWdJRlFnUFNCMlhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1ZGeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdSbGRHVnliV2x1YVhOMGFXTkhaVzVsY21GMFpVdGNiaUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnZEc5RVlYUmhWbWxsZHlBb1pHRjBZU2tnZTF4dUlDQnBaaUFvWkdGMFlTQnBibk4wWVc1alpXOW1JRWx1ZERoQmNuSmhlU0I4ZkNCa1lYUmhJR2x1YzNSaGJtTmxiMllnVldsdWREaEJjbkpoZVNCOGZDQmtZWFJoSUdsdWMzUmhibU5sYjJZZ1ZXbHVkRGhEYkdGdGNHVmtRWEp5WVhrcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFUmhkR0ZXYVdWM0tHUmhkR0V1WW5WbVptVnlMQ0JrWVhSaExtSjVkR1ZQWm1aelpYUXNJR1JoZEdFdVlubDBaVXhsYm1kMGFDbGNiaUFnZlZ4dVhHNGdJR2xtSUNoa1lYUmhJR2x1YzNSaGJtTmxiMllnUVhKeVlYbENkV1ptWlhJcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFUmhkR0ZXYVdWM0tHUmhkR0VwWEc0Z0lIMWNibHh1SUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEZlSEJsWTNSbFpDQmdaR0YwWVdBZ2RHOGdZbVVnWVc0Z1FYSnlZWGxDZFdabVpYSXNJRUoxWm1abGNpd2dTVzUwT0VGeWNtRjVMQ0JWYVc1ME9FRnljbUY1SUc5eUlGVnBiblE0UTJ4aGJYQmxaRUZ5Y21GNUp5bGNibjFjYmlJc0lpOHZJRmR5YVhSMFpXNGdhVzRnTWpBeE5DMHlNREUySUdKNUlFUnRhWFJ5ZVNCRGFHVnpkRzU1YTJnZ1lXNWtJRVJsZG1rZ1RXRnVaR2x5YVM1Y2JpOHZJRkIxWW14cFl5QmtiMjFoYVc0dVhHNG9ablZ1WTNScGIyNG9jbTl2ZEN3Z1ppa2dlMXh1SUNBbmRYTmxJSE4wY21samRDYzdYRzRnSUdsbUlDaDBlWEJsYjJZZ2JXOWtkV3hsSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCdGIyUjFiR1V1Wlhod2IzSjBjeWtnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtS0NrN1hHNGdJR1ZzYzJVZ2FXWWdLSEp2YjNRdWJtRmpiQ2tnY205dmRDNXVZV05zTG5WMGFXd2dQU0JtS0NrN1hHNGdJR1ZzYzJVZ2UxeHVJQ0FnSUhKdmIzUXVibUZqYkNBOUlIdDlPMXh1SUNBZ0lISnZiM1F1Ym1GamJDNTFkR2xzSUQwZ1ppZ3BPMXh1SUNCOVhHNTlLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1SUNBbmRYTmxJSE4wY21samRDYzdYRzVjYmlBZ2RtRnlJSFYwYVd3Z1BTQjdmVHRjYmx4dUlDQm1kVzVqZEdsdmJpQjJZV3hwWkdGMFpVSmhjMlUyTkNoektTQjdYRzRnSUNBZ2FXWWdLQ0VvTDE0b1B6cGJRUzFhWVMxNk1DMDVLMXhjTDExN01uMWJRUzFhWVMxNk1DMDVLMXhjTDExN01uMHBLaWcvT2x0QkxWcGhMWG93TFRrclhGd3ZYWHN5ZlQwOWZGdEJMVnBoTFhvd0xUa3JYRnd2WFhzemZUMHBQeVF2TG5SbGMzUW9jeWtwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZHBiblpoYkdsa0lHVnVZMjlrYVc1bkp5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkWFJwYkM1a1pXTnZaR1ZWVkVZNElEMGdablZ1WTNScGIyNG9jeWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnY3lBaFBUMGdKM04wY21sdVp5Y3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjJWNGNHVmpkR1ZrSUhOMGNtbHVaeWNwTzF4dUlDQWdJSFpoY2lCcExDQmtJRDBnZFc1bGMyTmhjR1VvWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0hNcEtTd2dZaUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR1F1YkdWdVozUm9LVHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z1pDNXNaVzVuZEdnN0lHa3JLeWtnWWx0cFhTQTlJR1F1WTJoaGNrTnZaR1ZCZENocEtUdGNiaUFnSUNCeVpYUjFjbTRnWWp0Y2JpQWdmVHRjYmx4dUlDQjFkR2xzTG1WdVkyOWtaVlZVUmpnZ1BTQm1kVzVqZEdsdmJpaGhjbklwSUh0Y2JpQWdJQ0IyWVhJZ2FTd2djeUE5SUZ0ZE8xeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JoY25JdWJHVnVaM1JvT3lCcEt5c3BJSE11Y0hWemFDaFRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxLR0Z5Y2x0cFhTa3BPMXh1SUNBZ0lISmxkSFZ5YmlCa1pXTnZaR1ZWVWtsRGIyMXdiMjVsYm5Rb1pYTmpZWEJsS0hNdWFtOXBiaWduSnlrcEtUdGNiaUFnZlR0Y2JseHVJQ0JwWmlBb2RIbHdaVzltSUdGMGIySWdQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0x5OGdUbTlrWlM1cWMxeHVYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQkNkV1ptWlhJdVpuSnZiU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0F2THlCT2IyUmxJSFkySUdGdVpDQnNZWFJsY2x4dUlDQWdJQ0FnZFhScGJDNWxibU52WkdWQ1lYTmxOalFnUFNCbWRXNWpkR2x2YmlBb1lYSnlLU0I3SUM4dklIWTJJR0Z1WkNCc1lYUmxjbHh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJDZFdabVpYSXVabkp2YlNoaGNuSXBMblJ2VTNSeWFXNW5LQ2RpWVhObE5qUW5LVHRjYmlBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUhWMGFXd3VaR1ZqYjJSbFFtRnpaVFkwSUQwZ1puVnVZM1JwYjI0Z0tITXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2FXUmhkR1ZDWVhObE5qUW9jeWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZXbHVkRGhCY25KaGVTaEJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyeHBZMlV1WTJGc2JDaENkV1ptWlhJdVpuSnZiU2h6TENBblltRnpaVFkwSnlrc0lEQXBLVHRjYmlBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdMeThnVG05a1pTQmxZWEpzYVdWeUlIUm9ZVzRnZGpaY2JpQWdJQ0FnSUhWMGFXd3VaVzVqYjJSbFFtRnpaVFkwSUQwZ1puVnVZM1JwYjI0Z0tHRnljaWtnZXlBdkx5QjJOaUJoYm1RZ2JHRjBaWEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2h1WlhjZ1FuVm1abVZ5S0dGeWNpa3BMblJ2VTNSeWFXNW5LQ2RpWVhObE5qUW5LVHRjYmlBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUhWMGFXd3VaR1ZqYjJSbFFtRnpaVFkwSUQwZ1puVnVZM1JwYjI0b2N5a2dlMXh1SUNBZ0lDQWdJQ0IyWVd4cFpHRjBaVUpoYzJVMk5DaHpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCVmFXNTBPRUZ5Y21GNUtFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tHNWxkeUJDZFdabVpYSW9jeXdnSjJKaGMyVTJOQ2NwTENBd0tTazdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJQzh2SUVKeWIzZHpaWEp6WEc1Y2JpQWdJQ0IxZEdsc0xtVnVZMjlrWlVKaGMyVTJOQ0E5SUdaMWJtTjBhVzl1S0dGeWNpa2dlMXh1SUNBZ0lDQWdkbUZ5SUdrc0lITWdQU0JiWFN3Z2JHVnVJRDBnWVhKeUxteGxibWQwYUR0Y2JpQWdJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JzWlc0N0lHa3JLeWtnY3k1d2RYTm9LRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvWVhKeVcybGRLU2s3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZblJ2WVNoekxtcHZhVzRvSnljcEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2RYUnBiQzVrWldOdlpHVkNZWE5sTmpRZ1BTQm1kVzVqZEdsdmJpaHpLU0I3WEc0Z0lDQWdJQ0IyWVd4cFpHRjBaVUpoYzJVMk5DaHpLVHRjYmlBZ0lDQWdJSFpoY2lCcExDQmtJRDBnWVhSdllpaHpLU3dnWWlBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0dRdWJHVnVaM1JvS1R0Y2JpQWdJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JrTG14bGJtZDBhRHNnYVNzcktTQmlXMmxkSUQwZ1pDNWphR0Z5UTI5a1pVRjBLR2twTzF4dUlDQWdJQ0FnY21WMGRYSnVJR0k3WEc0Z0lDQWdmVHRjYmx4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhWMGFXdzdYRzVjYm4wcEtUdGNiaUlzSWlobWRXNWpkR2x2YmlodVlXTnNLU0I3WEc0bmRYTmxJSE4wY21samRDYzdYRzVjYmk4dklGQnZjblJsWkNCcGJpQXlNREUwSUdKNUlFUnRhWFJ5ZVNCRGFHVnpkRzU1YTJnZ1lXNWtJRVJsZG1rZ1RXRnVaR2x5YVM1Y2JpOHZJRkIxWW14cFl5QmtiMjFoYVc0dVhHNHZMMXh1THk4Z1NXMXdiR1Z0Wlc1MFlYUnBiMjRnWkdWeWFYWmxaQ0JtY205dElGUjNaV1YwVG1GRGJDQjJaWEp6YVc5dUlESXdNVFF3TkRJM0xseHVMeThnVTJWbElHWnZjaUJrWlhSaGFXeHpPaUJvZEhSd09pOHZkSGRsWlhSdVlXTnNMbU55TG5sd0xuUnZMMXh1WEc1MllYSWdaMllnUFNCbWRXNWpkR2x2YmlocGJtbDBLU0I3WEc0Z0lIWmhjaUJwTENCeUlEMGdibVYzSUVac2IyRjBOalJCY25KaGVTZ3hOaWs3WEc0Z0lHbG1JQ2hwYm1sMEtTQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2FXNXBkQzVzWlc1bmRHZzdJR2tyS3lrZ2NsdHBYU0E5SUdsdWFYUmJhVjA3WEc0Z0lISmxkSFZ5YmlCeU8xeHVmVHRjYmx4dUx5OGdJRkJzZFdkbllXSnNaU3dnYVc1cGRHbGhiR2w2WldRZ2FXNGdhR2xuYUMxc1pYWmxiQ0JCVUVrZ1ltVnNiM2N1WEc1MllYSWdjbUZ1Wkc5dFlubDBaWE1nUFNCbWRXNWpkR2x2YmlndktpQjRMQ0J1SUNvdktTQjdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ibThnVUZKT1J5Y3BPeUI5TzF4dVhHNTJZWElnWHpBZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNneE5pazdYRzUyWVhJZ1h6a2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTZ3pNaWs3SUY4NVd6QmRJRDBnT1R0Y2JseHVkbUZ5SUdkbU1DQTlJR2RtS0Nrc1hHNGdJQ0FnWjJZeElEMGdaMllvV3pGZEtTeGNiaUFnSUNCZk1USXhOalkxSUQwZ1oyWW9XekI0WkdJME1Td2dNVjBwTEZ4dUlDQWdJRVFnUFNCblppaGJNSGczT0dFekxDQXdlREV6TlRrc0lEQjROR1JqWVN3Z01IZzNOV1ZpTENBd2VHUTRZV0lzSURCNE5ERTBNU3dnTUhnd1lUUmtMQ0F3ZURBd056QXNJREI0WlRnNU9Dd2dNSGczTnpjNUxDQXdlRFF3Tnprc0lEQjRPR05qTnl3Z01IaG1aVGN6TENBd2VESmlObVlzSURCNE5tTmxaU3dnTUhnMU1qQXpYU2tzWEc0Z0lDQWdSRElnUFNCblppaGJNSGhtTVRVNUxDQXdlREkyWWpJc0lEQjRPV0k1TkN3Z01IaGxZbVEyTENBd2VHSXhOVFlzSURCNE9ESTRNeXdnTUhneE5EbGhMQ0F3ZURBd1pUQXNJREI0WkRFek1Dd2dNSGhsWldZekxDQXdlRGd3WmpJc0lEQjRNVGs0WlN3Z01IaG1ZMlUzTENBd2VEVTJaR1lzSURCNFpEbGtZeXdnTUhneU5EQTJYU2tzWEc0Z0lDQWdXQ0E5SUdkbUtGc3dlR1ExTVdFc0lEQjRPR1l5TlN3Z01IZ3laRFl3TENBd2VHTTVOVFlzSURCNFlUZGlNaXdnTUhnNU5USTFMQ0F3ZUdNM05qQXNJREI0TmpreVl5d2dNSGhrWXpWakxDQXdlR1prWkRZc0lEQjRaVEl6TVN3Z01IaGpNR0UwTENBd2VEVXpabVVzSURCNFkyUTJaU3dnTUhnek5tUXpMQ0F3ZURJeE5qbGRLU3hjYmlBZ0lDQlpJRDBnWjJZb1d6QjROalkxT0N3Z01IZzJOalkyTENBd2VEWTJOallzSURCNE5qWTJOaXdnTUhnMk5qWTJMQ0F3ZURZMk5qWXNJREI0TmpZMk5pd2dNSGcyTmpZMkxDQXdlRFkyTmpZc0lEQjROalkyTml3Z01IZzJOalkyTENBd2VEWTJOallzSURCNE5qWTJOaXdnTUhnMk5qWTJMQ0F3ZURZMk5qWXNJREI0TmpZMk5sMHBMRnh1SUNBZ0lFa2dQU0JuWmloYk1IaGhNR0l3TENBd2VEUmhNR1VzSURCNE1XSXlOeXdnTUhoak5HVmxMQ0F3ZUdVME56Z3NJREI0WVdReVppd2dNSGd4T0RBMkxDQXdlREptTkRNc0lEQjRaRGRoTnl3Z01IZ3paR1ppTENBd2VEQXdPVGtzSURCNE1tSTBaQ3dnTUhoa1pqQmlMQ0F3ZURSbVl6RXNJREI0TWpRNE1Dd2dNSGd5WWpnelhTazdYRzVjYm1aMWJtTjBhVzl1SUhSek5qUW9lQ3dnYVN3Z2FDd2diQ2tnZTF4dUlDQjRXMmxkSUNBZ1BTQW9hQ0ErUGlBeU5Da2dKaUF3ZUdabU8xeHVJQ0I0VzJrck1WMGdQU0FvYUNBK1BpQXhOaWtnSmlBd2VHWm1PMXh1SUNCNFcya3JNbDBnUFNBb2FDQStQaUFnT0NrZ0ppQXdlR1ptTzF4dUlDQjRXMmtyTTEwZ1BTQm9JQ1lnTUhobVpqdGNiaUFnZUZ0cEt6UmRJRDBnS0d3Z1BqNGdNalFwSUNBbUlEQjRabVk3WEc0Z0lIaGJhU3MxWFNBOUlDaHNJRDQrSURFMktTQWdKaUF3ZUdabU8xeHVJQ0I0VzJrck5sMGdQU0FvYkNBK1BpQWdPQ2tnSUNZZ01IaG1aanRjYmlBZ2VGdHBLemRkSUQwZ2JDQW1JREI0Wm1ZN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhadUtIZ3NJSGhwTENCNUxDQjVhU3dnYmlrZ2UxeHVJQ0IyWVhJZ2FTeGtJRDBnTUR0Y2JpQWdabTl5SUNocElEMGdNRHNnYVNBOElHNDdJR2tyS3lrZ1pDQjhQU0I0VzNocEsybGRYbmxiZVdrcmFWMDdYRzRnSUhKbGRIVnliaUFvTVNBbUlDZ29aQ0F0SURFcElENCtQaUE0S1NrZ0xTQXhPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpjbmx3ZEc5ZmRtVnlhV1o1WHpFMktIZ3NJSGhwTENCNUxDQjVhU2tnZTF4dUlDQnlaWFIxY200Z2RtNG9lQ3g0YVN4NUxIbHBMREUyS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKNWNIUnZYM1psY21sbWVWOHpNaWg0TENCNGFTd2dlU3dnZVdrcElIdGNiaUFnY21WMGRYSnVJSFp1S0hnc2VHa3NlU3g1YVN3ek1pazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnZjbVZmYzJGc2MyRXlNQ2h2TENCd0xDQnJMQ0JqS1NCN1hHNGdJSFpoY2lCcU1DQWdQU0JqV3lBd1hTQW1JREI0Wm1ZZ2ZDQW9ZMXNnTVYwZ0ppQXdlR1ptS1R3OE9DQjhJQ2hqV3lBeVhTQW1JREI0Wm1ZcFBEd3hOaUI4SUNoald5QXpYU0FtSURCNFptWXBQRHd5TkN4Y2JpQWdJQ0FnSUdveElDQTlJR3RiSURCZElDWWdNSGhtWmlCOElDaHJXeUF4WFNBbUlEQjRabVlwUER3NElId2dLR3RiSURKZElDWWdNSGhtWmlrOFBERTJJSHdnS0d0YklETmRJQ1lnTUhobVppazhQREkwTEZ4dUlDQWdJQ0FnYWpJZ0lEMGdhMXNnTkYwZ0ppQXdlR1ptSUh3Z0tHdGJJRFZkSUNZZ01IaG1aaWs4UERnZ2ZDQW9hMXNnTmwwZ0ppQXdlR1ptS1R3OE1UWWdmQ0FvYTFzZ04xMGdKaUF3ZUdabUtUdzhNalFzWEc0Z0lDQWdJQ0JxTXlBZ1BTQnJXeUE0WFNBbUlEQjRabVlnZkNBb2Exc2dPVjBnSmlBd2VHWm1LVHc4T0NCOElDaHJXekV3WFNBbUlEQjRabVlwUER3eE5pQjhJQ2hyV3pFeFhTQW1JREI0Wm1ZcFBEd3lOQ3hjYmlBZ0lDQWdJR28wSUNBOUlHdGJNVEpkSUNZZ01IaG1aaUI4SUNocld6RXpYU0FtSURCNFptWXBQRHc0SUh3Z0tHdGJNVFJkSUNZZ01IaG1aaWs4UERFMklId2dLR3RiTVRWZElDWWdNSGhtWmlrOFBESTBMRnh1SUNBZ0lDQWdhalVnSUQwZ1kxc2dORjBnSmlBd2VHWm1JSHdnS0dOYklEVmRJQ1lnTUhobVppazhQRGdnZkNBb1kxc2dObDBnSmlBd2VHWm1LVHc4TVRZZ2ZDQW9ZMXNnTjEwZ0ppQXdlR1ptS1R3OE1qUXNYRzRnSUNBZ0lDQnFOaUFnUFNCd1d5QXdYU0FtSURCNFptWWdmQ0FvY0ZzZ01WMGdKaUF3ZUdabUtUdzhPQ0I4SUNod1d5QXlYU0FtSURCNFptWXBQRHd4TmlCOElDaHdXeUF6WFNBbUlEQjRabVlwUER3eU5DeGNiaUFnSUNBZ0lHbzNJQ0E5SUhCYklEUmRJQ1lnTUhobVppQjhJQ2h3V3lBMVhTQW1JREI0Wm1ZcFBEdzRJSHdnS0hCYklEWmRJQ1lnTUhobVppazhQREUySUh3Z0tIQmJJRGRkSUNZZ01IaG1aaWs4UERJMExGeHVJQ0FnSUNBZ2FqZ2dJRDBnY0ZzZ09GMGdKaUF3ZUdabUlId2dLSEJiSURsZElDWWdNSGhtWmlrOFBEZ2dmQ0FvY0ZzeE1GMGdKaUF3ZUdabUtUdzhNVFlnZkNBb2NGc3hNVjBnSmlBd2VHWm1LVHc4TWpRc1hHNGdJQ0FnSUNCcU9TQWdQU0J3V3pFeVhTQW1JREI0Wm1ZZ2ZDQW9jRnN4TTEwZ0ppQXdlR1ptS1R3OE9DQjhJQ2h3V3pFMFhTQW1JREI0Wm1ZcFBEd3hOaUI4SUNod1d6RTFYU0FtSURCNFptWXBQRHd5TkN4Y2JpQWdJQ0FnSUdveE1DQTlJR05iSURoZElDWWdNSGhtWmlCOElDaGpXeUE1WFNBbUlEQjRabVlwUER3NElId2dLR05iTVRCZElDWWdNSGhtWmlrOFBERTJJSHdnS0dOYk1URmRJQ1lnTUhobVppazhQREkwTEZ4dUlDQWdJQ0FnYWpFeElEMGdhMXN4TmwwZ0ppQXdlR1ptSUh3Z0tHdGJNVGRkSUNZZ01IaG1aaWs4UERnZ2ZDQW9hMXN4T0YwZ0ppQXdlR1ptS1R3OE1UWWdmQ0FvYTFzeE9WMGdKaUF3ZUdabUtUdzhNalFzWEc0Z0lDQWdJQ0JxTVRJZ1BTQnJXekl3WFNBbUlEQjRabVlnZkNBb2Exc3lNVjBnSmlBd2VHWm1LVHc4T0NCOElDaHJXekl5WFNBbUlEQjRabVlwUER3eE5pQjhJQ2hyV3pJelhTQW1JREI0Wm1ZcFBEd3lOQ3hjYmlBZ0lDQWdJR294TXlBOUlHdGJNalJkSUNZZ01IaG1aaUI4SUNocld6STFYU0FtSURCNFptWXBQRHc0SUh3Z0tHdGJNalpkSUNZZ01IaG1aaWs4UERFMklId2dLR3RiTWpkZElDWWdNSGhtWmlrOFBESTBMRnh1SUNBZ0lDQWdhakUwSUQwZ2Exc3lPRjBnSmlBd2VHWm1JSHdnS0d0Yk1qbGRJQ1lnTUhobVppazhQRGdnZkNBb2Exc3pNRjBnSmlBd2VHWm1LVHc4TVRZZ2ZDQW9hMXN6TVYwZ0ppQXdlR1ptS1R3OE1qUXNYRzRnSUNBZ0lDQnFNVFVnUFNCald6RXlYU0FtSURCNFptWWdmQ0FvWTFzeE0xMGdKaUF3ZUdabUtUdzhPQ0I4SUNoald6RTBYU0FtSURCNFptWXBQRHd4TmlCOElDaGpXekUxWFNBbUlEQjRabVlwUER3eU5EdGNibHh1SUNCMllYSWdlREFnUFNCcU1Dd2dlREVnUFNCcU1Td2dlRElnUFNCcU1pd2dlRE1nUFNCcU15d2dlRFFnUFNCcU5Dd2dlRFVnUFNCcU5Td2dlRFlnUFNCcU5pd2dlRGNnUFNCcU55eGNiaUFnSUNBZ0lIZzRJRDBnYWpnc0lIZzVJRDBnYWprc0lIZ3hNQ0E5SUdveE1Dd2dlREV4SUQwZ2FqRXhMQ0I0TVRJZ1BTQnFNVElzSUhneE15QTlJR294TXl3Z2VERTBJRDBnYWpFMExGeHVJQ0FnSUNBZ2VERTFJRDBnYWpFMUxDQjFPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dNakE3SUdrZ0t6MGdNaWtnZTF4dUlDQWdJSFVnUFNCNE1DQXJJSGd4TWlCOElEQTdYRzRnSUNBZ2VEUWdYajBnZFR3OE55QjhJSFUrUGo0b016SXROeWs3WEc0Z0lDQWdkU0E5SUhnMElDc2dlREFnZkNBd08xeHVJQ0FnSUhnNElGNDlJSFU4UERrZ2ZDQjFQajQrS0RNeUxUa3BPMXh1SUNBZ0lIVWdQU0I0T0NBcklIZzBJSHdnTUR0Y2JpQWdJQ0I0TVRJZ1hqMGdkVHc4TVRNZ2ZDQjFQajQrS0RNeUxURXpLVHRjYmlBZ0lDQjFJRDBnZURFeUlDc2dlRGdnZkNBd08xeHVJQ0FnSUhnd0lGNDlJSFU4UERFNElId2dkVDQrUGlnek1pMHhPQ2s3WEc1Y2JpQWdJQ0IxSUQwZ2VEVWdLeUI0TVNCOElEQTdYRzRnSUNBZ2VEa2dYajBnZFR3OE55QjhJSFUrUGo0b016SXROeWs3WEc0Z0lDQWdkU0E5SUhnNUlDc2dlRFVnZkNBd08xeHVJQ0FnSUhneE15QmVQU0IxUER3NUlId2dkVDQrUGlnek1pMDVLVHRjYmlBZ0lDQjFJRDBnZURFeklDc2dlRGtnZkNBd08xeHVJQ0FnSUhneElGNDlJSFU4UERFeklId2dkVDQrUGlnek1pMHhNeWs3WEc0Z0lDQWdkU0E5SUhneElDc2dlREV6SUh3Z01EdGNiaUFnSUNCNE5TQmVQU0IxUER3eE9DQjhJSFUrUGo0b016SXRNVGdwTzF4dVhHNGdJQ0FnZFNBOUlIZ3hNQ0FySUhnMklId2dNRHRjYmlBZ0lDQjRNVFFnWGowZ2RUdzhOeUI4SUhVK1BqNG9Nekl0TnlrN1hHNGdJQ0FnZFNBOUlIZ3hOQ0FySUhneE1DQjhJREE3WEc0Z0lDQWdlRElnWGowZ2RUdzhPU0I4SUhVK1BqNG9Nekl0T1NrN1hHNGdJQ0FnZFNBOUlIZ3lJQ3NnZURFMElId2dNRHRjYmlBZ0lDQjROaUJlUFNCMVBEd3hNeUI4SUhVK1BqNG9Nekl0TVRNcE8xeHVJQ0FnSUhVZ1BTQjROaUFySUhneUlId2dNRHRjYmlBZ0lDQjRNVEFnWGowZ2RUdzhNVGdnZkNCMVBqNCtLRE15TFRFNEtUdGNibHh1SUNBZ0lIVWdQU0I0TVRVZ0t5QjRNVEVnZkNBd08xeHVJQ0FnSUhneklGNDlJSFU4UERjZ2ZDQjFQajQrS0RNeUxUY3BPMXh1SUNBZ0lIVWdQU0I0TXlBcklIZ3hOU0I4SURBN1hHNGdJQ0FnZURjZ1hqMGdkVHc4T1NCOElIVStQajRvTXpJdE9TazdYRzRnSUNBZ2RTQTlJSGczSUNzZ2VETWdmQ0F3TzF4dUlDQWdJSGd4TVNCZVBTQjFQRHd4TXlCOElIVStQajRvTXpJdE1UTXBPMXh1SUNBZ0lIVWdQU0I0TVRFZ0t5QjROeUI4SURBN1hHNGdJQ0FnZURFMUlGNDlJSFU4UERFNElId2dkVDQrUGlnek1pMHhPQ2s3WEc1Y2JpQWdJQ0IxSUQwZ2VEQWdLeUI0TXlCOElEQTdYRzRnSUNBZ2VERWdYajBnZFR3OE55QjhJSFUrUGo0b016SXROeWs3WEc0Z0lDQWdkU0E5SUhneElDc2dlREFnZkNBd08xeHVJQ0FnSUhneUlGNDlJSFU4UERrZ2ZDQjFQajQrS0RNeUxUa3BPMXh1SUNBZ0lIVWdQU0I0TWlBcklIZ3hJSHdnTUR0Y2JpQWdJQ0I0TXlCZVBTQjFQRHd4TXlCOElIVStQajRvTXpJdE1UTXBPMXh1SUNBZ0lIVWdQU0I0TXlBcklIZ3lJSHdnTUR0Y2JpQWdJQ0I0TUNCZVBTQjFQRHd4T0NCOElIVStQajRvTXpJdE1UZ3BPMXh1WEc0Z0lDQWdkU0E5SUhnMUlDc2dlRFFnZkNBd08xeHVJQ0FnSUhnMklGNDlJSFU4UERjZ2ZDQjFQajQrS0RNeUxUY3BPMXh1SUNBZ0lIVWdQU0I0TmlBcklIZzFJSHdnTUR0Y2JpQWdJQ0I0TnlCZVBTQjFQRHc1SUh3Z2RUNCtQaWd6TWkwNUtUdGNiaUFnSUNCMUlEMGdlRGNnS3lCNE5pQjhJREE3WEc0Z0lDQWdlRFFnWGowZ2RUdzhNVE1nZkNCMVBqNCtLRE15TFRFektUdGNiaUFnSUNCMUlEMGdlRFFnS3lCNE55QjhJREE3WEc0Z0lDQWdlRFVnWGowZ2RUdzhNVGdnZkNCMVBqNCtLRE15TFRFNEtUdGNibHh1SUNBZ0lIVWdQU0I0TVRBZ0t5QjRPU0I4SURBN1hHNGdJQ0FnZURFeElGNDlJSFU4UERjZ2ZDQjFQajQrS0RNeUxUY3BPMXh1SUNBZ0lIVWdQU0I0TVRFZ0t5QjRNVEFnZkNBd08xeHVJQ0FnSUhnNElGNDlJSFU4UERrZ2ZDQjFQajQrS0RNeUxUa3BPMXh1SUNBZ0lIVWdQU0I0T0NBcklIZ3hNU0I4SURBN1hHNGdJQ0FnZURrZ1hqMGdkVHc4TVRNZ2ZDQjFQajQrS0RNeUxURXpLVHRjYmlBZ0lDQjFJRDBnZURrZ0t5QjRPQ0I4SURBN1hHNGdJQ0FnZURFd0lGNDlJSFU4UERFNElId2dkVDQrUGlnek1pMHhPQ2s3WEc1Y2JpQWdJQ0IxSUQwZ2VERTFJQ3NnZURFMElId2dNRHRjYmlBZ0lDQjRNVElnWGowZ2RUdzhOeUI4SUhVK1BqNG9Nekl0TnlrN1hHNGdJQ0FnZFNBOUlIZ3hNaUFySUhneE5TQjhJREE3WEc0Z0lDQWdlREV6SUY0OUlIVThQRGtnZkNCMVBqNCtLRE15TFRrcE8xeHVJQ0FnSUhVZ1BTQjRNVE1nS3lCNE1USWdmQ0F3TzF4dUlDQWdJSGd4TkNCZVBTQjFQRHd4TXlCOElIVStQajRvTXpJdE1UTXBPMXh1SUNBZ0lIVWdQU0I0TVRRZ0t5QjRNVE1nZkNBd08xeHVJQ0FnSUhneE5TQmVQU0IxUER3eE9DQjhJSFUrUGo0b016SXRNVGdwTzF4dUlDQjlYRzRnSUNCNE1DQTlJQ0I0TUNBcklDQnFNQ0I4SURBN1hHNGdJQ0I0TVNBOUlDQjRNU0FySUNCcU1TQjhJREE3WEc0Z0lDQjRNaUE5SUNCNE1pQXJJQ0JxTWlCOElEQTdYRzRnSUNCNE15QTlJQ0I0TXlBcklDQnFNeUI4SURBN1hHNGdJQ0I0TkNBOUlDQjROQ0FySUNCcU5DQjhJREE3WEc0Z0lDQjROU0E5SUNCNE5TQXJJQ0JxTlNCOElEQTdYRzRnSUNCNE5pQTlJQ0I0TmlBcklDQnFOaUI4SURBN1hHNGdJQ0I0TnlBOUlDQjROeUFySUNCcU55QjhJREE3WEc0Z0lDQjRPQ0E5SUNCNE9DQXJJQ0JxT0NCOElEQTdYRzRnSUNCNE9TQTlJQ0I0T1NBcklDQnFPU0I4SURBN1hHNGdJSGd4TUNBOUlIZ3hNQ0FySUdveE1DQjhJREE3WEc0Z0lIZ3hNU0E5SUhneE1TQXJJR294TVNCOElEQTdYRzRnSUhneE1pQTlJSGd4TWlBcklHb3hNaUI4SURBN1hHNGdJSGd4TXlBOUlIZ3hNeUFySUdveE15QjhJREE3WEc0Z0lIZ3hOQ0E5SUhneE5DQXJJR294TkNCOElEQTdYRzRnSUhneE5TQTlJSGd4TlNBcklHb3hOU0I4SURBN1hHNWNiaUFnYjFzZ01GMGdQU0I0TUNBK1BqNGdJREFnSmlBd2VHWm1PMXh1SUNCdld5QXhYU0E5SUhnd0lENCtQaUFnT0NBbUlEQjRabVk3WEc0Z0lHOWJJREpkSUQwZ2VEQWdQajQrSURFMklDWWdNSGhtWmp0Y2JpQWdiMXNnTTEwZ1BTQjRNQ0ErUGo0Z01qUWdKaUF3ZUdabU8xeHVYRzRnSUc5YklEUmRJRDBnZURFZ1BqNCtJQ0F3SUNZZ01IaG1aanRjYmlBZ2Ixc2dOVjBnUFNCNE1TQStQajRnSURnZ0ppQXdlR1ptTzF4dUlDQnZXeUEyWFNBOUlIZ3hJRDQrUGlBeE5pQW1JREI0Wm1ZN1hHNGdJRzliSURkZElEMGdlREVnUGo0K0lESTBJQ1lnTUhobVpqdGNibHh1SUNCdld5QTRYU0E5SUhneUlENCtQaUFnTUNBbUlEQjRabVk3WEc0Z0lHOWJJRGxkSUQwZ2VESWdQajQrSUNBNElDWWdNSGhtWmp0Y2JpQWdiMXN4TUYwZ1BTQjRNaUErUGo0Z01UWWdKaUF3ZUdabU8xeHVJQ0J2V3pFeFhTQTlJSGd5SUQ0K1BpQXlOQ0FtSURCNFptWTdYRzVjYmlBZ2Ixc3hNbDBnUFNCNE15QStQajRnSURBZ0ppQXdlR1ptTzF4dUlDQnZXekV6WFNBOUlIZ3pJRDQrUGlBZ09DQW1JREI0Wm1ZN1hHNGdJRzliTVRSZElEMGdlRE1nUGo0K0lERTJJQ1lnTUhobVpqdGNiaUFnYjFzeE5WMGdQU0I0TXlBK1BqNGdNalFnSmlBd2VHWm1PMXh1WEc0Z0lHOWJNVFpkSUQwZ2VEUWdQajQrSUNBd0lDWWdNSGhtWmp0Y2JpQWdiMXN4TjEwZ1BTQjROQ0ErUGo0Z0lEZ2dKaUF3ZUdabU8xeHVJQ0J2V3pFNFhTQTlJSGcwSUQ0K1BpQXhOaUFtSURCNFptWTdYRzRnSUc5Yk1UbGRJRDBnZURRZ1BqNCtJREkwSUNZZ01IaG1aanRjYmx4dUlDQnZXekl3WFNBOUlIZzFJRDQrUGlBZ01DQW1JREI0Wm1ZN1hHNGdJRzliTWpGZElEMGdlRFVnUGo0K0lDQTRJQ1lnTUhobVpqdGNiaUFnYjFzeU1sMGdQU0I0TlNBK1BqNGdNVFlnSmlBd2VHWm1PMXh1SUNCdld6SXpYU0E5SUhnMUlENCtQaUF5TkNBbUlEQjRabVk3WEc1Y2JpQWdiMXN5TkYwZ1BTQjROaUErUGo0Z0lEQWdKaUF3ZUdabU8xeHVJQ0J2V3pJMVhTQTlJSGcySUQ0K1BpQWdPQ0FtSURCNFptWTdYRzRnSUc5Yk1qWmRJRDBnZURZZ1BqNCtJREUySUNZZ01IaG1aanRjYmlBZ2Ixc3lOMTBnUFNCNE5pQStQajRnTWpRZ0ppQXdlR1ptTzF4dVhHNGdJRzliTWpoZElEMGdlRGNnUGo0K0lDQXdJQ1lnTUhobVpqdGNiaUFnYjFzeU9WMGdQU0I0TnlBK1BqNGdJRGdnSmlBd2VHWm1PMXh1SUNCdld6TXdYU0E5SUhnM0lENCtQaUF4TmlBbUlEQjRabVk3WEc0Z0lHOWJNekZkSUQwZ2VEY2dQajQrSURJMElDWWdNSGhtWmp0Y2JseHVJQ0J2V3pNeVhTQTlJSGc0SUQ0K1BpQWdNQ0FtSURCNFptWTdYRzRnSUc5Yk16TmRJRDBnZURnZ1BqNCtJQ0E0SUNZZ01IaG1aanRjYmlBZ2Ixc3pORjBnUFNCNE9DQStQajRnTVRZZ0ppQXdlR1ptTzF4dUlDQnZXek0xWFNBOUlIZzRJRDQrUGlBeU5DQW1JREI0Wm1ZN1hHNWNiaUFnYjFzek5sMGdQU0I0T1NBK1BqNGdJREFnSmlBd2VHWm1PMXh1SUNCdld6TTNYU0E5SUhnNUlENCtQaUFnT0NBbUlEQjRabVk3WEc0Z0lHOWJNemhkSUQwZ2VEa2dQajQrSURFMklDWWdNSGhtWmp0Y2JpQWdiMXN6T1YwZ1BTQjRPU0ErUGo0Z01qUWdKaUF3ZUdabU8xeHVYRzRnSUc5Yk5EQmRJRDBnZURFd0lENCtQaUFnTUNBbUlEQjRabVk3WEc0Z0lHOWJOREZkSUQwZ2VERXdJRDQrUGlBZ09DQW1JREI0Wm1ZN1hHNGdJRzliTkRKZElEMGdlREV3SUQ0K1BpQXhOaUFtSURCNFptWTdYRzRnSUc5Yk5ETmRJRDBnZURFd0lENCtQaUF5TkNBbUlEQjRabVk3WEc1Y2JpQWdiMXMwTkYwZ1BTQjRNVEVnUGo0K0lDQXdJQ1lnTUhobVpqdGNiaUFnYjFzME5WMGdQU0I0TVRFZ1BqNCtJQ0E0SUNZZ01IaG1aanRjYmlBZ2IxczBObDBnUFNCNE1URWdQajQrSURFMklDWWdNSGhtWmp0Y2JpQWdiMXMwTjEwZ1BTQjRNVEVnUGo0K0lESTBJQ1lnTUhobVpqdGNibHh1SUNCdld6UTRYU0E5SUhneE1pQStQajRnSURBZ0ppQXdlR1ptTzF4dUlDQnZXelE1WFNBOUlIZ3hNaUErUGo0Z0lEZ2dKaUF3ZUdabU8xeHVJQ0J2V3pVd1hTQTlJSGd4TWlBK1BqNGdNVFlnSmlBd2VHWm1PMXh1SUNCdld6VXhYU0E5SUhneE1pQStQajRnTWpRZ0ppQXdlR1ptTzF4dVhHNGdJRzliTlRKZElEMGdlREV6SUQ0K1BpQWdNQ0FtSURCNFptWTdYRzRnSUc5Yk5UTmRJRDBnZURFeklENCtQaUFnT0NBbUlEQjRabVk3WEc0Z0lHOWJOVFJkSUQwZ2VERXpJRDQrUGlBeE5pQW1JREI0Wm1ZN1hHNGdJRzliTlRWZElEMGdlREV6SUQ0K1BpQXlOQ0FtSURCNFptWTdYRzVjYmlBZ2IxczFObDBnUFNCNE1UUWdQajQrSUNBd0lDWWdNSGhtWmp0Y2JpQWdiMXMxTjEwZ1BTQjRNVFFnUGo0K0lDQTRJQ1lnTUhobVpqdGNiaUFnYjFzMU9GMGdQU0I0TVRRZ1BqNCtJREUySUNZZ01IaG1aanRjYmlBZ2IxczFPVjBnUFNCNE1UUWdQajQrSURJMElDWWdNSGhtWmp0Y2JseHVJQ0J2V3pZd1hTQTlJSGd4TlNBK1BqNGdJREFnSmlBd2VHWm1PMXh1SUNCdld6WXhYU0E5SUhneE5TQStQajRnSURnZ0ppQXdlR1ptTzF4dUlDQnZXell5WFNBOUlIZ3hOU0ErUGo0Z01UWWdKaUF3ZUdabU8xeHVJQ0J2V3pZelhTQTlJSGd4TlNBK1BqNGdNalFnSmlBd2VHWm1PMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpiM0psWDJoellXeHpZVEl3S0c4c2NDeHJMR01wSUh0Y2JpQWdkbUZ5SUdvd0lDQTlJR05iSURCZElDWWdNSGhtWmlCOElDaGpXeUF4WFNBbUlEQjRabVlwUER3NElId2dLR05iSURKZElDWWdNSGhtWmlrOFBERTJJSHdnS0dOYklETmRJQ1lnTUhobVppazhQREkwTEZ4dUlDQWdJQ0FnYWpFZ0lEMGdhMXNnTUYwZ0ppQXdlR1ptSUh3Z0tHdGJJREZkSUNZZ01IaG1aaWs4UERnZ2ZDQW9hMXNnTWwwZ0ppQXdlR1ptS1R3OE1UWWdmQ0FvYTFzZ00xMGdKaUF3ZUdabUtUdzhNalFzWEc0Z0lDQWdJQ0JxTWlBZ1BTQnJXeUEwWFNBbUlEQjRabVlnZkNBb2Exc2dOVjBnSmlBd2VHWm1LVHc4T0NCOElDaHJXeUEyWFNBbUlEQjRabVlwUER3eE5pQjhJQ2hyV3lBM1hTQW1JREI0Wm1ZcFBEd3lOQ3hjYmlBZ0lDQWdJR296SUNBOUlHdGJJRGhkSUNZZ01IaG1aaUI4SUNocld5QTVYU0FtSURCNFptWXBQRHc0SUh3Z0tHdGJNVEJkSUNZZ01IaG1aaWs4UERFMklId2dLR3RiTVRGZElDWWdNSGhtWmlrOFBESTBMRnh1SUNBZ0lDQWdhalFnSUQwZ2Exc3hNbDBnSmlBd2VHWm1JSHdnS0d0Yk1UTmRJQ1lnTUhobVppazhQRGdnZkNBb2Exc3hORjBnSmlBd2VHWm1LVHc4TVRZZ2ZDQW9hMXN4TlYwZ0ppQXdlR1ptS1R3OE1qUXNYRzRnSUNBZ0lDQnFOU0FnUFNCald5QTBYU0FtSURCNFptWWdmQ0FvWTFzZ05WMGdKaUF3ZUdabUtUdzhPQ0I4SUNoald5QTJYU0FtSURCNFptWXBQRHd4TmlCOElDaGpXeUEzWFNBbUlEQjRabVlwUER3eU5DeGNiaUFnSUNBZ0lHbzJJQ0E5SUhCYklEQmRJQ1lnTUhobVppQjhJQ2h3V3lBeFhTQW1JREI0Wm1ZcFBEdzRJSHdnS0hCYklESmRJQ1lnTUhobVppazhQREUySUh3Z0tIQmJJRE5kSUNZZ01IaG1aaWs4UERJMExGeHVJQ0FnSUNBZ2FqY2dJRDBnY0ZzZ05GMGdKaUF3ZUdabUlId2dLSEJiSURWZElDWWdNSGhtWmlrOFBEZ2dmQ0FvY0ZzZ05sMGdKaUF3ZUdabUtUdzhNVFlnZkNBb2NGc2dOMTBnSmlBd2VHWm1LVHc4TWpRc1hHNGdJQ0FnSUNCcU9DQWdQU0J3V3lBNFhTQW1JREI0Wm1ZZ2ZDQW9jRnNnT1YwZ0ppQXdlR1ptS1R3OE9DQjhJQ2h3V3pFd1hTQW1JREI0Wm1ZcFBEd3hOaUI4SUNod1d6RXhYU0FtSURCNFptWXBQRHd5TkN4Y2JpQWdJQ0FnSUdvNUlDQTlJSEJiTVRKZElDWWdNSGhtWmlCOElDaHdXekV6WFNBbUlEQjRabVlwUER3NElId2dLSEJiTVRSZElDWWdNSGhtWmlrOFBERTJJSHdnS0hCYk1UVmRJQ1lnTUhobVppazhQREkwTEZ4dUlDQWdJQ0FnYWpFd0lEMGdZMXNnT0YwZ0ppQXdlR1ptSUh3Z0tHTmJJRGxkSUNZZ01IaG1aaWs4UERnZ2ZDQW9ZMXN4TUYwZ0ppQXdlR1ptS1R3OE1UWWdmQ0FvWTFzeE1WMGdKaUF3ZUdabUtUdzhNalFzWEc0Z0lDQWdJQ0JxTVRFZ1BTQnJXekUyWFNBbUlEQjRabVlnZkNBb2Exc3hOMTBnSmlBd2VHWm1LVHc4T0NCOElDaHJXekU0WFNBbUlEQjRabVlwUER3eE5pQjhJQ2hyV3pFNVhTQW1JREI0Wm1ZcFBEd3lOQ3hjYmlBZ0lDQWdJR294TWlBOUlHdGJNakJkSUNZZ01IaG1aaUI4SUNocld6SXhYU0FtSURCNFptWXBQRHc0SUh3Z0tHdGJNakpkSUNZZ01IaG1aaWs4UERFMklId2dLR3RiTWpOZElDWWdNSGhtWmlrOFBESTBMRnh1SUNBZ0lDQWdhakV6SUQwZ2Exc3lORjBnSmlBd2VHWm1JSHdnS0d0Yk1qVmRJQ1lnTUhobVppazhQRGdnZkNBb2Exc3lObDBnSmlBd2VHWm1LVHc4TVRZZ2ZDQW9hMXN5TjEwZ0ppQXdlR1ptS1R3OE1qUXNYRzRnSUNBZ0lDQnFNVFFnUFNCcld6STRYU0FtSURCNFptWWdmQ0FvYTFzeU9WMGdKaUF3ZUdabUtUdzhPQ0I4SUNocld6TXdYU0FtSURCNFptWXBQRHd4TmlCOElDaHJXek14WFNBbUlEQjRabVlwUER3eU5DeGNiaUFnSUNBZ0lHb3hOU0E5SUdOYk1USmRJQ1lnTUhobVppQjhJQ2hqV3pFelhTQW1JREI0Wm1ZcFBEdzRJSHdnS0dOYk1UUmRJQ1lnTUhobVppazhQREUySUh3Z0tHTmJNVFZkSUNZZ01IaG1aaWs4UERJME8xeHVYRzRnSUhaaGNpQjRNQ0E5SUdvd0xDQjRNU0E5SUdveExDQjRNaUE5SUdveUxDQjRNeUE5SUdvekxDQjROQ0E5SUdvMExDQjROU0E5SUdvMUxDQjROaUE5SUdvMkxDQjROeUE5SUdvM0xGeHVJQ0FnSUNBZ2VEZ2dQU0JxT0N3Z2VEa2dQU0JxT1N3Z2VERXdJRDBnYWpFd0xDQjRNVEVnUFNCcU1URXNJSGd4TWlBOUlHb3hNaXdnZURFeklEMGdhakV6TENCNE1UUWdQU0JxTVRRc1hHNGdJQ0FnSUNCNE1UVWdQU0JxTVRVc0lIVTdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXlNRHNnYVNBclBTQXlLU0I3WEc0Z0lDQWdkU0E5SUhnd0lDc2dlREV5SUh3Z01EdGNiaUFnSUNCNE5DQmVQU0IxUER3M0lId2dkVDQrUGlnek1pMDNLVHRjYmlBZ0lDQjFJRDBnZURRZ0t5QjRNQ0I4SURBN1hHNGdJQ0FnZURnZ1hqMGdkVHc4T1NCOElIVStQajRvTXpJdE9TazdYRzRnSUNBZ2RTQTlJSGc0SUNzZ2VEUWdmQ0F3TzF4dUlDQWdJSGd4TWlCZVBTQjFQRHd4TXlCOElIVStQajRvTXpJdE1UTXBPMXh1SUNBZ0lIVWdQU0I0TVRJZ0t5QjRPQ0I4SURBN1hHNGdJQ0FnZURBZ1hqMGdkVHc4TVRnZ2ZDQjFQajQrS0RNeUxURTRLVHRjYmx4dUlDQWdJSFVnUFNCNE5TQXJJSGd4SUh3Z01EdGNiaUFnSUNCNE9TQmVQU0IxUER3M0lId2dkVDQrUGlnek1pMDNLVHRjYmlBZ0lDQjFJRDBnZURrZ0t5QjROU0I4SURBN1hHNGdJQ0FnZURFeklGNDlJSFU4UERrZ2ZDQjFQajQrS0RNeUxUa3BPMXh1SUNBZ0lIVWdQU0I0TVRNZ0t5QjRPU0I4SURBN1hHNGdJQ0FnZURFZ1hqMGdkVHc4TVRNZ2ZDQjFQajQrS0RNeUxURXpLVHRjYmlBZ0lDQjFJRDBnZURFZ0t5QjRNVE1nZkNBd08xeHVJQ0FnSUhnMUlGNDlJSFU4UERFNElId2dkVDQrUGlnek1pMHhPQ2s3WEc1Y2JpQWdJQ0IxSUQwZ2VERXdJQ3NnZURZZ2ZDQXdPMXh1SUNBZ0lIZ3hOQ0JlUFNCMVBEdzNJSHdnZFQ0K1BpZ3pNaTAzS1R0Y2JpQWdJQ0IxSUQwZ2VERTBJQ3NnZURFd0lId2dNRHRjYmlBZ0lDQjRNaUJlUFNCMVBEdzVJSHdnZFQ0K1BpZ3pNaTA1S1R0Y2JpQWdJQ0IxSUQwZ2VESWdLeUI0TVRRZ2ZDQXdPMXh1SUNBZ0lIZzJJRjQ5SUhVOFBERXpJSHdnZFQ0K1BpZ3pNaTB4TXlrN1hHNGdJQ0FnZFNBOUlIZzJJQ3NnZURJZ2ZDQXdPMXh1SUNBZ0lIZ3hNQ0JlUFNCMVBEd3hPQ0I4SUhVK1BqNG9Nekl0TVRncE8xeHVYRzRnSUNBZ2RTQTlJSGd4TlNBcklIZ3hNU0I4SURBN1hHNGdJQ0FnZURNZ1hqMGdkVHc4TnlCOElIVStQajRvTXpJdE55azdYRzRnSUNBZ2RTQTlJSGd6SUNzZ2VERTFJSHdnTUR0Y2JpQWdJQ0I0TnlCZVBTQjFQRHc1SUh3Z2RUNCtQaWd6TWkwNUtUdGNiaUFnSUNCMUlEMGdlRGNnS3lCNE15QjhJREE3WEc0Z0lDQWdlREV4SUY0OUlIVThQREV6SUh3Z2RUNCtQaWd6TWkweE15azdYRzRnSUNBZ2RTQTlJSGd4TVNBcklIZzNJSHdnTUR0Y2JpQWdJQ0I0TVRVZ1hqMGdkVHc4TVRnZ2ZDQjFQajQrS0RNeUxURTRLVHRjYmx4dUlDQWdJSFVnUFNCNE1DQXJJSGd6SUh3Z01EdGNiaUFnSUNCNE1TQmVQU0IxUER3M0lId2dkVDQrUGlnek1pMDNLVHRjYmlBZ0lDQjFJRDBnZURFZ0t5QjRNQ0I4SURBN1hHNGdJQ0FnZURJZ1hqMGdkVHc4T1NCOElIVStQajRvTXpJdE9TazdYRzRnSUNBZ2RTQTlJSGd5SUNzZ2VERWdmQ0F3TzF4dUlDQWdJSGd6SUY0OUlIVThQREV6SUh3Z2RUNCtQaWd6TWkweE15azdYRzRnSUNBZ2RTQTlJSGd6SUNzZ2VESWdmQ0F3TzF4dUlDQWdJSGd3SUY0OUlIVThQREU0SUh3Z2RUNCtQaWd6TWkweE9DazdYRzVjYmlBZ0lDQjFJRDBnZURVZ0t5QjROQ0I4SURBN1hHNGdJQ0FnZURZZ1hqMGdkVHc4TnlCOElIVStQajRvTXpJdE55azdYRzRnSUNBZ2RTQTlJSGcySUNzZ2VEVWdmQ0F3TzF4dUlDQWdJSGczSUY0OUlIVThQRGtnZkNCMVBqNCtLRE15TFRrcE8xeHVJQ0FnSUhVZ1BTQjROeUFySUhnMklId2dNRHRjYmlBZ0lDQjROQ0JlUFNCMVBEd3hNeUI4SUhVK1BqNG9Nekl0TVRNcE8xeHVJQ0FnSUhVZ1BTQjROQ0FySUhnM0lId2dNRHRjYmlBZ0lDQjROU0JlUFNCMVBEd3hPQ0I4SUhVK1BqNG9Nekl0TVRncE8xeHVYRzRnSUNBZ2RTQTlJSGd4TUNBcklIZzVJSHdnTUR0Y2JpQWdJQ0I0TVRFZ1hqMGdkVHc4TnlCOElIVStQajRvTXpJdE55azdYRzRnSUNBZ2RTQTlJSGd4TVNBcklIZ3hNQ0I4SURBN1hHNGdJQ0FnZURnZ1hqMGdkVHc4T1NCOElIVStQajRvTXpJdE9TazdYRzRnSUNBZ2RTQTlJSGc0SUNzZ2VERXhJSHdnTUR0Y2JpQWdJQ0I0T1NCZVBTQjFQRHd4TXlCOElIVStQajRvTXpJdE1UTXBPMXh1SUNBZ0lIVWdQU0I0T1NBcklIZzRJSHdnTUR0Y2JpQWdJQ0I0TVRBZ1hqMGdkVHc4TVRnZ2ZDQjFQajQrS0RNeUxURTRLVHRjYmx4dUlDQWdJSFVnUFNCNE1UVWdLeUI0TVRRZ2ZDQXdPMXh1SUNBZ0lIZ3hNaUJlUFNCMVBEdzNJSHdnZFQ0K1BpZ3pNaTAzS1R0Y2JpQWdJQ0IxSUQwZ2VERXlJQ3NnZURFMUlId2dNRHRjYmlBZ0lDQjRNVE1nWGowZ2RUdzhPU0I4SUhVK1BqNG9Nekl0T1NrN1hHNGdJQ0FnZFNBOUlIZ3hNeUFySUhneE1pQjhJREE3WEc0Z0lDQWdlREUwSUY0OUlIVThQREV6SUh3Z2RUNCtQaWd6TWkweE15azdYRzRnSUNBZ2RTQTlJSGd4TkNBcklIZ3hNeUI4SURBN1hHNGdJQ0FnZURFMUlGNDlJSFU4UERFNElId2dkVDQrUGlnek1pMHhPQ2s3WEc0Z0lIMWNibHh1SUNCdld5QXdYU0E5SUhnd0lENCtQaUFnTUNBbUlEQjRabVk3WEc0Z0lHOWJJREZkSUQwZ2VEQWdQajQrSUNBNElDWWdNSGhtWmp0Y2JpQWdiMXNnTWwwZ1BTQjRNQ0ErUGo0Z01UWWdKaUF3ZUdabU8xeHVJQ0J2V3lBelhTQTlJSGd3SUQ0K1BpQXlOQ0FtSURCNFptWTdYRzVjYmlBZ2Ixc2dORjBnUFNCNE5TQStQajRnSURBZ0ppQXdlR1ptTzF4dUlDQnZXeUExWFNBOUlIZzFJRDQrUGlBZ09DQW1JREI0Wm1ZN1hHNGdJRzliSURaZElEMGdlRFVnUGo0K0lERTJJQ1lnTUhobVpqdGNiaUFnYjFzZ04xMGdQU0I0TlNBK1BqNGdNalFnSmlBd2VHWm1PMXh1WEc0Z0lHOWJJRGhkSUQwZ2VERXdJRDQrUGlBZ01DQW1JREI0Wm1ZN1hHNGdJRzliSURsZElEMGdlREV3SUQ0K1BpQWdPQ0FtSURCNFptWTdYRzRnSUc5Yk1UQmRJRDBnZURFd0lENCtQaUF4TmlBbUlEQjRabVk3WEc0Z0lHOWJNVEZkSUQwZ2VERXdJRDQrUGlBeU5DQW1JREI0Wm1ZN1hHNWNiaUFnYjFzeE1sMGdQU0I0TVRVZ1BqNCtJQ0F3SUNZZ01IaG1aanRjYmlBZ2Ixc3hNMTBnUFNCNE1UVWdQajQrSUNBNElDWWdNSGhtWmp0Y2JpQWdiMXN4TkYwZ1BTQjRNVFVnUGo0K0lERTJJQ1lnTUhobVpqdGNiaUFnYjFzeE5WMGdQU0I0TVRVZ1BqNCtJREkwSUNZZ01IaG1aanRjYmx4dUlDQnZXekUyWFNBOUlIZzJJRDQrUGlBZ01DQW1JREI0Wm1ZN1hHNGdJRzliTVRkZElEMGdlRFlnUGo0K0lDQTRJQ1lnTUhobVpqdGNiaUFnYjFzeE9GMGdQU0I0TmlBK1BqNGdNVFlnSmlBd2VHWm1PMXh1SUNCdld6RTVYU0E5SUhnMklENCtQaUF5TkNBbUlEQjRabVk3WEc1Y2JpQWdiMXN5TUYwZ1BTQjROeUErUGo0Z0lEQWdKaUF3ZUdabU8xeHVJQ0J2V3pJeFhTQTlJSGczSUQ0K1BpQWdPQ0FtSURCNFptWTdYRzRnSUc5Yk1qSmRJRDBnZURjZ1BqNCtJREUySUNZZ01IaG1aanRjYmlBZ2Ixc3lNMTBnUFNCNE55QStQajRnTWpRZ0ppQXdlR1ptTzF4dVhHNGdJRzliTWpSZElEMGdlRGdnUGo0K0lDQXdJQ1lnTUhobVpqdGNiaUFnYjFzeU5WMGdQU0I0T0NBK1BqNGdJRGdnSmlBd2VHWm1PMXh1SUNCdld6STJYU0E5SUhnNElENCtQaUF4TmlBbUlEQjRabVk3WEc0Z0lHOWJNamRkSUQwZ2VEZ2dQajQrSURJMElDWWdNSGhtWmp0Y2JseHVJQ0J2V3pJNFhTQTlJSGc1SUQ0K1BpQWdNQ0FtSURCNFptWTdYRzRnSUc5Yk1qbGRJRDBnZURrZ1BqNCtJQ0E0SUNZZ01IaG1aanRjYmlBZ2Ixc3pNRjBnUFNCNE9TQStQajRnTVRZZ0ppQXdlR1ptTzF4dUlDQnZXek14WFNBOUlIZzVJRDQrUGlBeU5DQW1JREI0Wm1ZN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOeWVYQjBiMTlqYjNKbFgzTmhiSE5oTWpBb2IzVjBMR2x1Y0N4ckxHTXBJSHRjYmlBZ1kyOXlaVjl6WVd4ellUSXdLRzkxZEN4cGJuQXNheXhqS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKNWNIUnZYMk52Y21WZmFITmhiSE5oTWpBb2IzVjBMR2x1Y0N4ckxHTXBJSHRjYmlBZ1kyOXlaVjlvYzJGc2MyRXlNQ2h2ZFhRc2FXNXdMR3NzWXlrN1hHNTlYRzVjYm5aaGNpQnphV2R0WVNBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0ZzeE1ERXNJREV5TUN3Z01URXlMQ0E1Tnl3Z01URXdMQ0F4TURBc0lETXlMQ0ExTVN3Z05UQXNJRFExTENBNU9Dd2dNVEl4TENBeE1UWXNJREV3TVN3Z016SXNJREV3TjEwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1hDSmxlSEJoYm1RZ016SXRZbmwwWlNCclhDSmNibHh1Wm5WdVkzUnBiMjRnWTNKNWNIUnZYM04wY21WaGJWOXpZV3h6WVRJd1gzaHZjaWhqTEdOd2IzTXNiU3h0Y0c5ekxHSXNiaXhyS1NCN1hHNGdJSFpoY2lCNklEMGdibVYzSUZWcGJuUTRRWEp5WVhrb01UWXBMQ0I0SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvTmpRcE8xeHVJQ0IyWVhJZ2RTd2dhVHRjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SURFMk95QnBLeXNwSUhwYmFWMGdQU0F3TzF4dUlDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z09Ec2dhU3NyS1NCNlcybGRJRDBnYmx0cFhUdGNiaUFnZDJocGJHVWdLR0lnUGowZ05qUXBJSHRjYmlBZ0lDQmpjbmx3ZEc5ZlkyOXlaVjl6WVd4ellUSXdLSGdzZWl4ckxITnBaMjFoS1R0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2dOalE3SUdrckt5a2dZMXRqY0c5eksybGRJRDBnYlZ0dGNHOXpLMmxkSUY0Z2VGdHBYVHRjYmlBZ0lDQjFJRDBnTVR0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0E0T3lCcElEd2dNVFk3SUdrckt5a2dlMXh1SUNBZ0lDQWdkU0E5SUhVZ0t5QW9lbHRwWFNBbUlEQjRabVlwSUh3Z01EdGNiaUFnSUNBZ0lIcGJhVjBnUFNCMUlDWWdNSGhtWmp0Y2JpQWdJQ0FnSUhVZ1BqNCtQU0E0TzF4dUlDQWdJSDFjYmlBZ0lDQmlJQzA5SURZME8xeHVJQ0FnSUdOd2IzTWdLejBnTmpRN1hHNGdJQ0FnYlhCdmN5QXJQU0EyTkR0Y2JpQWdmVnh1SUNCcFppQW9ZaUErSURBcElIdGNiaUFnSUNCamNubHdkRzlmWTI5eVpWOXpZV3h6WVRJd0tIZ3NlaXhyTEhOcFoyMWhLVHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z1lqc2dhU3NyS1NCalcyTndiM01yYVYwZ1BTQnRXMjF3YjNNcmFWMGdYaUI0VzJsZE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlBd08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCamNubHdkRzlmYzNSeVpXRnRYM05oYkhOaE1qQW9ZeXhqY0c5ekxHSXNiaXhyS1NCN1hHNGdJSFpoY2lCNklEMGdibVYzSUZWcGJuUTRRWEp5WVhrb01UWXBMQ0I0SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvTmpRcE8xeHVJQ0IyWVhJZ2RTd2dhVHRjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SURFMk95QnBLeXNwSUhwYmFWMGdQU0F3TzF4dUlDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z09Ec2dhU3NyS1NCNlcybGRJRDBnYmx0cFhUdGNiaUFnZDJocGJHVWdLR0lnUGowZ05qUXBJSHRjYmlBZ0lDQmpjbmx3ZEc5ZlkyOXlaVjl6WVd4ellUSXdLSGdzZWl4ckxITnBaMjFoS1R0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2dOalE3SUdrckt5a2dZMXRqY0c5eksybGRJRDBnZUZ0cFhUdGNiaUFnSUNCMUlEMGdNVHRjYmlBZ0lDQm1iM0lnS0drZ1BTQTRPeUJwSUR3Z01UWTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RTQTlJSFVnS3lBb2VsdHBYU0FtSURCNFptWXBJSHdnTUR0Y2JpQWdJQ0FnSUhwYmFWMGdQU0IxSUNZZ01IaG1aanRjYmlBZ0lDQWdJSFVnUGo0K1BTQTRPMXh1SUNBZ0lIMWNiaUFnSUNCaUlDMDlJRFkwTzF4dUlDQWdJR053YjNNZ0t6MGdOalE3WEc0Z0lIMWNiaUFnYVdZZ0tHSWdQaUF3S1NCN1hHNGdJQ0FnWTNKNWNIUnZYMk52Y21WZmMyRnNjMkV5TUNoNExIb3NheXh6YVdkdFlTazdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdJN0lHa3JLeWtnWTF0amNHOXpLMmxkSUQwZ2VGdHBYVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVablZ1WTNScGIyNGdZM0o1Y0hSdlgzTjBjbVZoYlNoakxHTndiM01zWkN4dUxHc3BJSHRjYmlBZ2RtRnlJSE1nUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2d6TWlrN1hHNGdJR055ZVhCMGIxOWpiM0psWDJoellXeHpZVEl3S0hNc2JpeHJMSE5wWjIxaEtUdGNiaUFnZG1GeUlITnVJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29PQ2s3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dPRHNnYVNzcktTQnpibHRwWFNBOUlHNWJhU3N4TmwwN1hHNGdJSEpsZEhWeWJpQmpjbmx3ZEc5ZmMzUnlaV0Z0WDNOaGJITmhNakFvWXl4amNHOXpMR1FzYzI0c2N5azdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnllWEIwYjE5emRISmxZVzFmZUc5eUtHTXNZM0J2Y3l4dExHMXdiM01zWkN4dUxHc3BJSHRjYmlBZ2RtRnlJSE1nUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2d6TWlrN1hHNGdJR055ZVhCMGIxOWpiM0psWDJoellXeHpZVEl3S0hNc2JpeHJMSE5wWjIxaEtUdGNiaUFnZG1GeUlITnVJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29PQ2s3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dPRHNnYVNzcktTQnpibHRwWFNBOUlHNWJhU3N4TmwwN1hHNGdJSEpsZEhWeWJpQmpjbmx3ZEc5ZmMzUnlaV0Z0WDNOaGJITmhNakJmZUc5eUtHTXNZM0J2Y3l4dExHMXdiM01zWkN4emJpeHpLVHRjYm4xY2JseHVMeXBjYmlvZ1VHOXlkQ0J2WmlCQmJtUnlaWGNnVFc5dmJpZHpJRkJ2YkhreE16QTFMV1J2Ym01aExURTJMaUJRZFdKc2FXTWdaRzl0WVdsdUxseHVLaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wm14dmIyUjVZbVZ5Y25rdmNHOXNlVEV6TURVdFpHOXVibUZjYmlvdlhHNWNiblpoY2lCd2IyeDVNVE13TlNBOUlHWjFibU4wYVc5dUtHdGxlU2tnZTF4dUlDQjBhR2x6TG1KMVptWmxjaUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLREUyS1R0Y2JpQWdkR2hwY3k1eUlEMGdibVYzSUZWcGJuUXhOa0Z5Y21GNUtERXdLVHRjYmlBZ2RHaHBjeTVvSUQwZ2JtVjNJRlZwYm5ReE5rRnljbUY1S0RFd0tUdGNiaUFnZEdocGN5NXdZV1FnUFNCdVpYY2dWV2x1ZERFMlFYSnlZWGtvT0NrN1hHNGdJSFJvYVhNdWJHVm1kRzkyWlhJZ1BTQXdPMXh1SUNCMGFHbHpMbVpwYmlBOUlEQTdYRzVjYmlBZ2RtRnlJSFF3TENCME1Td2dkRElzSUhRekxDQjBOQ3dnZERVc0lIUTJMQ0IwTnp0Y2JseHVJQ0IwTUNBOUlHdGxlVnNnTUYwZ0ppQXdlR1ptSUh3Z0tHdGxlVnNnTVYwZ0ppQXdlR1ptS1NBOFBDQTRPeUIwYUdsekxuSmJNRjBnUFNBb0lIUXdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1NBbUlEQjRNV1ptWmp0Y2JpQWdkREVnUFNCclpYbGJJREpkSUNZZ01IaG1aaUI4SUNoclpYbGJJRE5kSUNZZ01IaG1aaWtnUER3Z09Ec2dkR2hwY3k1eVd6RmRJRDBnS0NoME1DQStQajRnTVRNcElId2dLSFF4SUR3OElDQXpLU2tnSmlBd2VERm1abVk3WEc0Z0lIUXlJRDBnYTJWNVd5QTBYU0FtSURCNFptWWdmQ0FvYTJWNVd5QTFYU0FtSURCNFptWXBJRHc4SURnN0lIUm9hWE11Y2xzeVhTQTlJQ2dvZERFZ1BqNCtJREV3S1NCOElDaDBNaUE4UENBZ05pa3BJQ1lnTUhneFpqQXpPMXh1SUNCME15QTlJR3RsZVZzZ05sMGdKaUF3ZUdabUlId2dLR3RsZVZzZ04xMGdKaUF3ZUdabUtTQThQQ0E0T3lCMGFHbHpMbkpiTTEwZ1BTQW9LSFF5SUQ0K1BpQWdOeWtnZkNBb2RETWdQRHdnSURrcEtTQW1JREI0TVdabVpqdGNiaUFnZERRZ1BTQnJaWGxiSURoZElDWWdNSGhtWmlCOElDaHJaWGxiSURsZElDWWdNSGhtWmlrZ1BEd2dPRHNnZEdocGN5NXlXelJkSUQwZ0tDaDBNeUErUGo0Z0lEUXBJSHdnS0hRMElEdzhJREV5S1NrZ0ppQXdlREF3Wm1ZN1hHNGdJSFJvYVhNdWNsczFYU0E5SUNnb2REUWdQajQrSUNBeEtTa2dKaUF3ZURGbVptVTdYRzRnSUhRMUlEMGdhMlY1V3pFd1hTQW1JREI0Wm1ZZ2ZDQW9hMlY1V3pFeFhTQW1JREI0Wm1ZcElEdzhJRGc3SUhSb2FYTXVjbHMyWFNBOUlDZ29kRFFnUGo0K0lERTBLU0I4SUNoME5TQThQQ0FnTWlrcElDWWdNSGd4Wm1abU8xeHVJQ0IwTmlBOUlHdGxlVnN4TWwwZ0ppQXdlR1ptSUh3Z0tHdGxlVnN4TTEwZ0ppQXdlR1ptS1NBOFBDQTRPeUIwYUdsekxuSmJOMTBnUFNBb0tIUTFJRDQrUGlBeE1Ta2dmQ0FvZERZZ1BEd2dJRFVwS1NBbUlEQjRNV1k0TVR0Y2JpQWdkRGNnUFNCclpYbGJNVFJkSUNZZ01IaG1aaUI4SUNoclpYbGJNVFZkSUNZZ01IaG1aaWtnUER3Z09Ec2dkR2hwY3k1eVd6aGRJRDBnS0NoME5pQStQajRnSURncElId2dLSFEzSUR3OElDQTRLU2tnSmlBd2VERm1abVk3WEc0Z0lIUm9hWE11Y2xzNVhTQTlJQ2dvZERjZ1BqNCtJQ0ExS1NrZ0ppQXdlREF3TjJZN1hHNWNiaUFnZEdocGN5NXdZV1JiTUYwZ1BTQnJaWGxiTVRaZElDWWdNSGhtWmlCOElDaHJaWGxiTVRkZElDWWdNSGhtWmlrZ1BEd2dPRHRjYmlBZ2RHaHBjeTV3WVdSYk1WMGdQU0JyWlhsYk1UaGRJQ1lnTUhobVppQjhJQ2hyWlhsYk1UbGRJQ1lnTUhobVppa2dQRHdnT0R0Y2JpQWdkR2hwY3k1d1lXUmJNbDBnUFNCclpYbGJNakJkSUNZZ01IaG1aaUI4SUNoclpYbGJNakZkSUNZZ01IaG1aaWtnUER3Z09EdGNiaUFnZEdocGN5NXdZV1JiTTEwZ1BTQnJaWGxiTWpKZElDWWdNSGhtWmlCOElDaHJaWGxiTWpOZElDWWdNSGhtWmlrZ1BEd2dPRHRjYmlBZ2RHaHBjeTV3WVdSYk5GMGdQU0JyWlhsYk1qUmRJQ1lnTUhobVppQjhJQ2hyWlhsYk1qVmRJQ1lnTUhobVppa2dQRHdnT0R0Y2JpQWdkR2hwY3k1d1lXUmJOVjBnUFNCclpYbGJNalpkSUNZZ01IaG1aaUI4SUNoclpYbGJNamRkSUNZZ01IaG1aaWtnUER3Z09EdGNiaUFnZEdocGN5NXdZV1JiTmwwZ1BTQnJaWGxiTWpoZElDWWdNSGhtWmlCOElDaHJaWGxiTWpsZElDWWdNSGhtWmlrZ1BEd2dPRHRjYmlBZ2RHaHBjeTV3WVdSYk4xMGdQU0JyWlhsYk16QmRJQ1lnTUhobVppQjhJQ2hyWlhsYk16RmRJQ1lnTUhobVppa2dQRHdnT0R0Y2JuMDdYRzVjYm5CdmJIa3hNekExTG5CeWIzUnZkSGx3WlM1aWJHOWphM01nUFNCbWRXNWpkR2x2YmlodExDQnRjRzl6TENCaWVYUmxjeWtnZTF4dUlDQjJZWElnYUdsaWFYUWdQU0IwYUdsekxtWnBiaUEvSURBZ09pQW9NU0E4UENBeE1TazdYRzRnSUhaaGNpQjBNQ3dnZERFc0lIUXlMQ0IwTXl3Z2REUXNJSFExTENCME5pd2dkRGNzSUdNN1hHNGdJSFpoY2lCa01Dd2daREVzSUdReUxDQmtNeXdnWkRRc0lHUTFMQ0JrTml3Z1pEY3NJR1E0TENCa09UdGNibHh1SUNCMllYSWdhREFnUFNCMGFHbHpMbWhiTUYwc1hHNGdJQ0FnSUNCb01TQTlJSFJvYVhNdWFGc3hYU3hjYmlBZ0lDQWdJR2d5SUQwZ2RHaHBjeTVvV3pKZExGeHVJQ0FnSUNBZ2FETWdQU0IwYUdsekxtaGJNMTBzWEc0Z0lDQWdJQ0JvTkNBOUlIUm9hWE11YUZzMFhTeGNiaUFnSUNBZ0lHZzFJRDBnZEdocGN5NW9XelZkTEZ4dUlDQWdJQ0FnYURZZ1BTQjBhR2x6TG1oYk5sMHNYRzRnSUNBZ0lDQm9OeUE5SUhSb2FYTXVhRnMzWFN4Y2JpQWdJQ0FnSUdnNElEMGdkR2hwY3k1b1d6aGRMRnh1SUNBZ0lDQWdhRGtnUFNCMGFHbHpMbWhiT1YwN1hHNWNiaUFnZG1GeUlISXdJRDBnZEdocGN5NXlXekJkTEZ4dUlDQWdJQ0FnY2pFZ1BTQjBhR2x6TG5KYk1WMHNYRzRnSUNBZ0lDQnlNaUE5SUhSb2FYTXVjbHN5WFN4Y2JpQWdJQ0FnSUhJeklEMGdkR2hwY3k1eVd6TmRMRnh1SUNBZ0lDQWdjalFnUFNCMGFHbHpMbkpiTkYwc1hHNGdJQ0FnSUNCeU5TQTlJSFJvYVhNdWNsczFYU3hjYmlBZ0lDQWdJSEkySUQwZ2RHaHBjeTV5V3paZExGeHVJQ0FnSUNBZ2NqY2dQU0IwYUdsekxuSmJOMTBzWEc0Z0lDQWdJQ0J5T0NBOUlIUm9hWE11Y2xzNFhTeGNiaUFnSUNBZ0lISTVJRDBnZEdocGN5NXlXemxkTzF4dVhHNGdJSGRvYVd4bElDaGllWFJsY3lBK1BTQXhOaWtnZTF4dUlDQWdJSFF3SUQwZ2JWdHRjRzl6S3lBd1hTQW1JREI0Wm1ZZ2ZDQW9iVnR0Y0c5ekt5QXhYU0FtSURCNFptWXBJRHc4SURnN0lHZ3dJQ3M5SUNnZ2REQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwSUNZZ01IZ3habVptTzF4dUlDQWdJSFF4SUQwZ2JWdHRjRzl6S3lBeVhTQW1JREI0Wm1ZZ2ZDQW9iVnR0Y0c5ekt5QXpYU0FtSURCNFptWXBJRHc4SURnN0lHZ3hJQ3M5SUNnb2REQWdQajQrSURFektTQjhJQ2gwTVNBOFBDQWdNeWtwSUNZZ01IZ3habVptTzF4dUlDQWdJSFF5SUQwZ2JWdHRjRzl6S3lBMFhTQW1JREI0Wm1ZZ2ZDQW9iVnR0Y0c5ekt5QTFYU0FtSURCNFptWXBJRHc4SURnN0lHZ3lJQ3M5SUNnb2RERWdQajQrSURFd0tTQjhJQ2gwTWlBOFBDQWdOaWtwSUNZZ01IZ3habVptTzF4dUlDQWdJSFF6SUQwZ2JWdHRjRzl6S3lBMlhTQW1JREI0Wm1ZZ2ZDQW9iVnR0Y0c5ekt5QTNYU0FtSURCNFptWXBJRHc4SURnN0lHZ3pJQ3M5SUNnb2RESWdQajQrSUNBM0tTQjhJQ2gwTXlBOFBDQWdPU2twSUNZZ01IZ3habVptTzF4dUlDQWdJSFEwSUQwZ2JWdHRjRzl6S3lBNFhTQW1JREI0Wm1ZZ2ZDQW9iVnR0Y0c5ekt5QTVYU0FtSURCNFptWXBJRHc4SURnN0lHZzBJQ3M5SUNnb2RETWdQajQrSUNBMEtTQjhJQ2gwTkNBOFBDQXhNaWtwSUNZZ01IZ3habVptTzF4dUlDQWdJR2cxSUNzOUlDZ29kRFFnUGo0K0lDQXhLU2tnSmlBd2VERm1abVk3WEc0Z0lDQWdkRFVnUFNCdFcyMXdiM01yTVRCZElDWWdNSGhtWmlCOElDaHRXMjF3YjNNck1URmRJQ1lnTUhobVppa2dQRHdnT0RzZ2FEWWdLejBnS0NoME5DQStQajRnTVRRcElId2dLSFExSUR3OElDQXlLU2tnSmlBd2VERm1abVk3WEc0Z0lDQWdkRFlnUFNCdFcyMXdiM01yTVRKZElDWWdNSGhtWmlCOElDaHRXMjF3YjNNck1UTmRJQ1lnTUhobVppa2dQRHdnT0RzZ2FEY2dLejBnS0NoME5TQStQajRnTVRFcElId2dLSFEySUR3OElDQTFLU2tnSmlBd2VERm1abVk3WEc0Z0lDQWdkRGNnUFNCdFcyMXdiM01yTVRSZElDWWdNSGhtWmlCOElDaHRXMjF3YjNNck1UVmRJQ1lnTUhobVppa2dQRHdnT0RzZ2FEZ2dLejBnS0NoME5pQStQajRnSURncElId2dLSFEzSUR3OElDQTRLU2tnSmlBd2VERm1abVk3WEc0Z0lDQWdhRGtnS3owZ0tDaDBOeUErUGo0Z05Ta3BJSHdnYUdsaWFYUTdYRzVjYmlBZ0lDQmpJRDBnTUR0Y2JseHVJQ0FnSUdRd0lEMGdZenRjYmlBZ0lDQmtNQ0FyUFNCb01DQXFJSEl3TzF4dUlDQWdJR1F3SUNzOUlHZ3hJQ29nS0RVZ0tpQnlPU2s3WEc0Z0lDQWdaREFnS3owZ2FESWdLaUFvTlNBcUlISTRLVHRjYmlBZ0lDQmtNQ0FyUFNCb015QXFJQ2cxSUNvZ2NqY3BPMXh1SUNBZ0lHUXdJQ3M5SUdnMElDb2dLRFVnS2lCeU5pazdYRzRnSUNBZ1l5QTlJQ2hrTUNBK1BqNGdNVE1wT3lCa01DQW1QU0F3ZURGbVptWTdYRzRnSUNBZ1pEQWdLejBnYURVZ0tpQW9OU0FxSUhJMUtUdGNiaUFnSUNCa01DQXJQU0JvTmlBcUlDZzFJQ29nY2pRcE8xeHVJQ0FnSUdRd0lDczlJR2czSUNvZ0tEVWdLaUJ5TXlrN1hHNGdJQ0FnWkRBZ0t6MGdhRGdnS2lBb05TQXFJSEl5S1R0Y2JpQWdJQ0JrTUNBclBTQm9PU0FxSUNnMUlDb2djakVwTzF4dUlDQWdJR01nS3owZ0tHUXdJRDQrUGlBeE15azdJR1F3SUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdReElEMGdZenRjYmlBZ0lDQmtNU0FyUFNCb01DQXFJSEl4TzF4dUlDQWdJR1F4SUNzOUlHZ3hJQ29nY2pBN1hHNGdJQ0FnWkRFZ0t6MGdhRElnS2lBb05TQXFJSEk1S1R0Y2JpQWdJQ0JrTVNBclBTQm9NeUFxSUNnMUlDb2djamdwTzF4dUlDQWdJR1F4SUNzOUlHZzBJQ29nS0RVZ0tpQnlOeWs3WEc0Z0lDQWdZeUE5SUNoa01TQStQajRnTVRNcE95QmtNU0FtUFNBd2VERm1abVk3WEc0Z0lDQWdaREVnS3owZ2FEVWdLaUFvTlNBcUlISTJLVHRjYmlBZ0lDQmtNU0FyUFNCb05pQXFJQ2cxSUNvZ2NqVXBPMXh1SUNBZ0lHUXhJQ3M5SUdnM0lDb2dLRFVnS2lCeU5DazdYRzRnSUNBZ1pERWdLejBnYURnZ0tpQW9OU0FxSUhJektUdGNiaUFnSUNCa01TQXJQU0JvT1NBcUlDZzFJQ29nY2pJcE8xeHVJQ0FnSUdNZ0t6MGdLR1F4SUQ0K1BpQXhNeWs3SUdReElDWTlJREI0TVdabVpqdGNibHh1SUNBZ0lHUXlJRDBnWXp0Y2JpQWdJQ0JrTWlBclBTQm9NQ0FxSUhJeU8xeHVJQ0FnSUdReUlDczlJR2d4SUNvZ2NqRTdYRzRnSUNBZ1pESWdLejBnYURJZ0tpQnlNRHRjYmlBZ0lDQmtNaUFyUFNCb015QXFJQ2cxSUNvZ2Nqa3BPMXh1SUNBZ0lHUXlJQ3M5SUdnMElDb2dLRFVnS2lCeU9DazdYRzRnSUNBZ1l5QTlJQ2hrTWlBK1BqNGdNVE1wT3lCa01pQW1QU0F3ZURGbVptWTdYRzRnSUNBZ1pESWdLejBnYURVZ0tpQW9OU0FxSUhJM0tUdGNiaUFnSUNCa01pQXJQU0JvTmlBcUlDZzFJQ29nY2pZcE8xeHVJQ0FnSUdReUlDczlJR2czSUNvZ0tEVWdLaUJ5TlNrN1hHNGdJQ0FnWkRJZ0t6MGdhRGdnS2lBb05TQXFJSEkwS1R0Y2JpQWdJQ0JrTWlBclBTQm9PU0FxSUNnMUlDb2djak1wTzF4dUlDQWdJR01nS3owZ0tHUXlJRDQrUGlBeE15azdJR1F5SUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdReklEMGdZenRjYmlBZ0lDQmtNeUFyUFNCb01DQXFJSEl6TzF4dUlDQWdJR1F6SUNzOUlHZ3hJQ29nY2pJN1hHNGdJQ0FnWkRNZ0t6MGdhRElnS2lCeU1UdGNiaUFnSUNCa015QXJQU0JvTXlBcUlISXdPMXh1SUNBZ0lHUXpJQ3M5SUdnMElDb2dLRFVnS2lCeU9TazdYRzRnSUNBZ1l5QTlJQ2hrTXlBK1BqNGdNVE1wT3lCa015QW1QU0F3ZURGbVptWTdYRzRnSUNBZ1pETWdLejBnYURVZ0tpQW9OU0FxSUhJNEtUdGNiaUFnSUNCa015QXJQU0JvTmlBcUlDZzFJQ29nY2pjcE8xeHVJQ0FnSUdReklDczlJR2czSUNvZ0tEVWdLaUJ5TmlrN1hHNGdJQ0FnWkRNZ0t6MGdhRGdnS2lBb05TQXFJSEkxS1R0Y2JpQWdJQ0JrTXlBclBTQm9PU0FxSUNnMUlDb2djalFwTzF4dUlDQWdJR01nS3owZ0tHUXpJRDQrUGlBeE15azdJR1F6SUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdRMElEMGdZenRjYmlBZ0lDQmtOQ0FyUFNCb01DQXFJSEkwTzF4dUlDQWdJR1EwSUNzOUlHZ3hJQ29nY2pNN1hHNGdJQ0FnWkRRZ0t6MGdhRElnS2lCeU1qdGNiaUFnSUNCa05DQXJQU0JvTXlBcUlISXhPMXh1SUNBZ0lHUTBJQ3M5SUdnMElDb2djakE3WEc0Z0lDQWdZeUE5SUNoa05DQStQajRnTVRNcE95QmtOQ0FtUFNBd2VERm1abVk3WEc0Z0lDQWdaRFFnS3owZ2FEVWdLaUFvTlNBcUlISTVLVHRjYmlBZ0lDQmtOQ0FyUFNCb05pQXFJQ2cxSUNvZ2NqZ3BPMXh1SUNBZ0lHUTBJQ3M5SUdnM0lDb2dLRFVnS2lCeU55azdYRzRnSUNBZ1pEUWdLejBnYURnZ0tpQW9OU0FxSUhJMktUdGNiaUFnSUNCa05DQXJQU0JvT1NBcUlDZzFJQ29nY2pVcE8xeHVJQ0FnSUdNZ0t6MGdLR1EwSUQ0K1BpQXhNeWs3SUdRMElDWTlJREI0TVdabVpqdGNibHh1SUNBZ0lHUTFJRDBnWXp0Y2JpQWdJQ0JrTlNBclBTQm9NQ0FxSUhJMU8xeHVJQ0FnSUdRMUlDczlJR2d4SUNvZ2NqUTdYRzRnSUNBZ1pEVWdLejBnYURJZ0tpQnlNenRjYmlBZ0lDQmtOU0FyUFNCb015QXFJSEl5TzF4dUlDQWdJR1ExSUNzOUlHZzBJQ29nY2pFN1hHNGdJQ0FnWXlBOUlDaGtOU0ErUGo0Z01UTXBPeUJrTlNBbVBTQXdlREZtWm1ZN1hHNGdJQ0FnWkRVZ0t6MGdhRFVnS2lCeU1EdGNiaUFnSUNCa05TQXJQU0JvTmlBcUlDZzFJQ29nY2prcE8xeHVJQ0FnSUdRMUlDczlJR2czSUNvZ0tEVWdLaUJ5T0NrN1hHNGdJQ0FnWkRVZ0t6MGdhRGdnS2lBb05TQXFJSEkzS1R0Y2JpQWdJQ0JrTlNBclBTQm9PU0FxSUNnMUlDb2djallwTzF4dUlDQWdJR01nS3owZ0tHUTFJRDQrUGlBeE15azdJR1ExSUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdRMklEMGdZenRjYmlBZ0lDQmtOaUFyUFNCb01DQXFJSEkyTzF4dUlDQWdJR1EySUNzOUlHZ3hJQ29nY2pVN1hHNGdJQ0FnWkRZZ0t6MGdhRElnS2lCeU5EdGNiaUFnSUNCa05pQXJQU0JvTXlBcUlISXpPMXh1SUNBZ0lHUTJJQ3M5SUdnMElDb2djakk3WEc0Z0lDQWdZeUE5SUNoa05pQStQajRnTVRNcE95QmtOaUFtUFNBd2VERm1abVk3WEc0Z0lDQWdaRFlnS3owZ2FEVWdLaUJ5TVR0Y2JpQWdJQ0JrTmlBclBTQm9OaUFxSUhJd08xeHVJQ0FnSUdRMklDczlJR2czSUNvZ0tEVWdLaUJ5T1NrN1hHNGdJQ0FnWkRZZ0t6MGdhRGdnS2lBb05TQXFJSEk0S1R0Y2JpQWdJQ0JrTmlBclBTQm9PU0FxSUNnMUlDb2djamNwTzF4dUlDQWdJR01nS3owZ0tHUTJJRDQrUGlBeE15azdJR1EySUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdRM0lEMGdZenRjYmlBZ0lDQmtOeUFyUFNCb01DQXFJSEkzTzF4dUlDQWdJR1EzSUNzOUlHZ3hJQ29nY2pZN1hHNGdJQ0FnWkRjZ0t6MGdhRElnS2lCeU5UdGNiaUFnSUNCa055QXJQU0JvTXlBcUlISTBPMXh1SUNBZ0lHUTNJQ3M5SUdnMElDb2djak03WEc0Z0lDQWdZeUE5SUNoa055QStQajRnTVRNcE95QmtOeUFtUFNBd2VERm1abVk3WEc0Z0lDQWdaRGNnS3owZ2FEVWdLaUJ5TWp0Y2JpQWdJQ0JrTnlBclBTQm9OaUFxSUhJeE8xeHVJQ0FnSUdRM0lDczlJR2czSUNvZ2NqQTdYRzRnSUNBZ1pEY2dLejBnYURnZ0tpQW9OU0FxSUhJNUtUdGNiaUFnSUNCa055QXJQU0JvT1NBcUlDZzFJQ29nY2pncE8xeHVJQ0FnSUdNZ0t6MGdLR1EzSUQ0K1BpQXhNeWs3SUdRM0lDWTlJREI0TVdabVpqdGNibHh1SUNBZ0lHUTRJRDBnWXp0Y2JpQWdJQ0JrT0NBclBTQm9NQ0FxSUhJNE8xeHVJQ0FnSUdRNElDczlJR2d4SUNvZ2NqYzdYRzRnSUNBZ1pEZ2dLejBnYURJZ0tpQnlOanRjYmlBZ0lDQmtPQ0FyUFNCb015QXFJSEkxTzF4dUlDQWdJR1E0SUNzOUlHZzBJQ29nY2pRN1hHNGdJQ0FnWXlBOUlDaGtPQ0ErUGo0Z01UTXBPeUJrT0NBbVBTQXdlREZtWm1ZN1hHNGdJQ0FnWkRnZ0t6MGdhRFVnS2lCeU16dGNiaUFnSUNCa09DQXJQU0JvTmlBcUlISXlPMXh1SUNBZ0lHUTRJQ3M5SUdnM0lDb2djakU3WEc0Z0lDQWdaRGdnS3owZ2FEZ2dLaUJ5TUR0Y2JpQWdJQ0JrT0NBclBTQm9PU0FxSUNnMUlDb2djamtwTzF4dUlDQWdJR01nS3owZ0tHUTRJRDQrUGlBeE15azdJR1E0SUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdRNUlEMGdZenRjYmlBZ0lDQmtPU0FyUFNCb01DQXFJSEk1TzF4dUlDQWdJR1E1SUNzOUlHZ3hJQ29nY2pnN1hHNGdJQ0FnWkRrZ0t6MGdhRElnS2lCeU56dGNiaUFnSUNCa09TQXJQU0JvTXlBcUlISTJPMXh1SUNBZ0lHUTVJQ3M5SUdnMElDb2djalU3WEc0Z0lDQWdZeUE5SUNoa09TQStQajRnTVRNcE95QmtPU0FtUFNBd2VERm1abVk3WEc0Z0lDQWdaRGtnS3owZ2FEVWdLaUJ5TkR0Y2JpQWdJQ0JrT1NBclBTQm9OaUFxSUhJek8xeHVJQ0FnSUdRNUlDczlJR2czSUNvZ2NqSTdYRzRnSUNBZ1pEa2dLejBnYURnZ0tpQnlNVHRjYmlBZ0lDQmtPU0FyUFNCb09TQXFJSEl3TzF4dUlDQWdJR01nS3owZ0tHUTVJRDQrUGlBeE15azdJR1E1SUNZOUlEQjRNV1ptWmp0Y2JseHVJQ0FnSUdNZ1BTQW9LQ2hqSUR3OElESXBJQ3NnWXlrcElId2dNRHRjYmlBZ0lDQmpJRDBnS0dNZ0t5QmtNQ2tnZkNBd08xeHVJQ0FnSUdRd0lEMGdZeUFtSURCNE1XWm1aanRjYmlBZ0lDQmpJRDBnS0dNZ1BqNCtJREV6S1R0Y2JpQWdJQ0JrTVNBclBTQmpPMXh1WEc0Z0lDQWdhREFnUFNCa01EdGNiaUFnSUNCb01TQTlJR1F4TzF4dUlDQWdJR2d5SUQwZ1pESTdYRzRnSUNBZ2FETWdQU0JrTXp0Y2JpQWdJQ0JvTkNBOUlHUTBPMXh1SUNBZ0lHZzFJRDBnWkRVN1hHNGdJQ0FnYURZZ1BTQmtOanRjYmlBZ0lDQm9OeUE5SUdRM08xeHVJQ0FnSUdnNElEMGdaRGc3WEc0Z0lDQWdhRGtnUFNCa09UdGNibHh1SUNBZ0lHMXdiM01nS3owZ01UWTdYRzRnSUNBZ1lubDBaWE1nTFQwZ01UWTdYRzRnSUgxY2JpQWdkR2hwY3k1b1d6QmRJRDBnYURBN1hHNGdJSFJvYVhNdWFGc3hYU0E5SUdneE8xeHVJQ0IwYUdsekxtaGJNbDBnUFNCb01qdGNiaUFnZEdocGN5NW9Xek5kSUQwZ2FETTdYRzRnSUhSb2FYTXVhRnMwWFNBOUlHZzBPMXh1SUNCMGFHbHpMbWhiTlYwZ1BTQm9OVHRjYmlBZ2RHaHBjeTVvV3paZElEMGdhRFk3WEc0Z0lIUm9hWE11YUZzM1hTQTlJR2czTzF4dUlDQjBhR2x6TG1oYk9GMGdQU0JvT0R0Y2JpQWdkR2hwY3k1b1d6bGRJRDBnYURrN1hHNTlPMXh1WEc1d2IyeDVNVE13TlM1d2NtOTBiM1I1Y0dVdVptbHVhWE5vSUQwZ1puVnVZM1JwYjI0b2JXRmpMQ0J0WVdOd2IzTXBJSHRjYmlBZ2RtRnlJR2NnUFNCdVpYY2dWV2x1ZERFMlFYSnlZWGtvTVRBcE8xeHVJQ0IyWVhJZ1l5d2diV0Z6YXl3Z1ppd2dhVHRjYmx4dUlDQnBaaUFvZEdocGN5NXNaV1owYjNabGNpa2dlMXh1SUNBZ0lHa2dQU0IwYUdsekxteGxablJ2ZG1WeU8xeHVJQ0FnSUhSb2FYTXVZblZtWm1WeVcya3JLMTBnUFNBeE8xeHVJQ0FnSUdadmNpQW9PeUJwSUR3Z01UWTdJR2tyS3lrZ2RHaHBjeTVpZFdabVpYSmJhVjBnUFNBd08xeHVJQ0FnSUhSb2FYTXVabWx1SUQwZ01UdGNiaUFnSUNCMGFHbHpMbUpzYjJOcmN5aDBhR2x6TG1KMVptWmxjaXdnTUN3Z01UWXBPMXh1SUNCOVhHNWNiaUFnWXlBOUlIUm9hWE11YUZzeFhTQStQajRnTVRNN1hHNGdJSFJvYVhNdWFGc3hYU0FtUFNBd2VERm1abVk3WEc0Z0lHWnZjaUFvYVNBOUlESTdJR2tnUENBeE1Ec2dhU3NyS1NCN1hHNGdJQ0FnZEdocGN5NW9XMmxkSUNzOUlHTTdYRzRnSUNBZ1l5QTlJSFJvYVhNdWFGdHBYU0ErUGo0Z01UTTdYRzRnSUNBZ2RHaHBjeTVvVzJsZElDWTlJREI0TVdabVpqdGNiaUFnZlZ4dUlDQjBhR2x6TG1oYk1GMGdLejBnS0dNZ0tpQTFLVHRjYmlBZ1l5QTlJSFJvYVhNdWFGc3dYU0ErUGo0Z01UTTdYRzRnSUhSb2FYTXVhRnN3WFNBbVBTQXdlREZtWm1ZN1hHNGdJSFJvYVhNdWFGc3hYU0FyUFNCak8xeHVJQ0JqSUQwZ2RHaHBjeTVvV3pGZElENCtQaUF4TXp0Y2JpQWdkR2hwY3k1b1d6RmRJQ1k5SURCNE1XWm1aanRjYmlBZ2RHaHBjeTVvV3pKZElDczlJR003WEc1Y2JpQWdaMXN3WFNBOUlIUm9hWE11YUZzd1hTQXJJRFU3WEc0Z0lHTWdQU0JuV3pCZElENCtQaUF4TXp0Y2JpQWdaMXN3WFNBbVBTQXdlREZtWm1ZN1hHNGdJR1p2Y2lBb2FTQTlJREU3SUdrZ1BDQXhNRHNnYVNzcktTQjdYRzRnSUNBZ1oxdHBYU0E5SUhSb2FYTXVhRnRwWFNBcklHTTdYRzRnSUNBZ1l5QTlJR2RiYVYwZ1BqNCtJREV6TzF4dUlDQWdJR2RiYVYwZ0pqMGdNSGd4Wm1abU8xeHVJQ0I5WEc0Z0lHZGJPVjBnTFQwZ0tERWdQRHdnTVRNcE8xeHVYRzRnSUcxaGMyc2dQU0FvWXlCZUlERXBJQzBnTVR0Y2JpQWdabTl5SUNocElEMGdNRHNnYVNBOElERXdPeUJwS3lzcElHZGJhVjBnSmowZ2JXRnphenRjYmlBZ2JXRnpheUE5SUg1dFlYTnJPMXh1SUNCbWIzSWdLR2tnUFNBd095QnBJRHdnTVRBN0lHa3JLeWtnZEdocGN5NW9XMmxkSUQwZ0tIUm9hWE11YUZ0cFhTQW1JRzFoYzJzcElId2daMXRwWFR0Y2JseHVJQ0IwYUdsekxtaGJNRjBnUFNBb0tIUm9hWE11YUZzd1hTQWdJQ0FnSUNBcElId2dLSFJvYVhNdWFGc3hYU0E4UENBeE15a2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2tnSmlBd2VHWm1abVk3WEc0Z0lIUm9hWE11YUZzeFhTQTlJQ2dvZEdocGN5NW9XekZkSUQ0K1BpQWdNeWtnZkNBb2RHaHBjeTVvV3pKZElEdzhJREV3S1NBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tTQW1JREI0Wm1abVpqdGNiaUFnZEdocGN5NW9XekpkSUQwZ0tDaDBhR2x6TG1oYk1sMGdQajQrSUNBMktTQjhJQ2gwYUdsekxtaGJNMTBnUER3Z0lEY3BJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwSUNZZ01IaG1abVptTzF4dUlDQjBhR2x6TG1oYk0xMGdQU0FvS0hSb2FYTXVhRnN6WFNBK1BqNGdJRGtwSUh3Z0tIUm9hWE11YUZzMFhTQThQQ0FnTkNrZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDa2dKaUF3ZUdabVptWTdYRzRnSUhSb2FYTXVhRnMwWFNBOUlDZ29kR2hwY3k1b1d6UmRJRDQrUGlBeE1pa2dmQ0FvZEdocGN5NW9XelZkSUR3OElDQXhLU0I4SUNoMGFHbHpMbWhiTmwwZ1BEd2dNVFFwS1NBbUlEQjRabVptWmp0Y2JpQWdkR2hwY3k1b1d6VmRJRDBnS0NoMGFHbHpMbWhiTmwwZ1BqNCtJQ0F5S1NCOElDaDBhR2x6TG1oYk4xMGdQRHdnTVRFcElDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXBJQ1lnTUhobVptWm1PMXh1SUNCMGFHbHpMbWhiTmwwZ1BTQW9LSFJvYVhNdWFGczNYU0ErUGo0Z0lEVXBJSHdnS0hSb2FYTXVhRnM0WFNBOFBDQWdPQ2tnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNrZ0ppQXdlR1ptWm1ZN1hHNGdJSFJvYVhNdWFGczNYU0E5SUNnb2RHaHBjeTVvV3poZElENCtQaUFnT0NrZ2ZDQW9kR2hwY3k1b1d6bGRJRHc4SUNBMUtTQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLU0FtSURCNFptWm1aanRjYmx4dUlDQm1JRDBnZEdocGN5NW9XekJkSUNzZ2RHaHBjeTV3WVdSYk1GMDdYRzRnSUhSb2FYTXVhRnN3WFNBOUlHWWdKaUF3ZUdabVptWTdYRzRnSUdadmNpQW9hU0E5SURFN0lHa2dQQ0E0T3lCcEt5c3BJSHRjYmlBZ0lDQm1JRDBnS0Nnb2RHaHBjeTVvVzJsZElDc2dkR2hwY3k1d1lXUmJhVjBwSUh3Z01Da2dLeUFvWmlBK1BqNGdNVFlwS1NCOElEQTdYRzRnSUNBZ2RHaHBjeTVvVzJsZElEMGdaaUFtSURCNFptWm1aanRjYmlBZ2ZWeHVYRzRnSUcxaFkxdHRZV053YjNNcklEQmRJRDBnS0hSb2FYTXVhRnN3WFNBK1BqNGdNQ2tnSmlBd2VHWm1PMXh1SUNCdFlXTmJiV0ZqY0c5ekt5QXhYU0E5SUNoMGFHbHpMbWhiTUYwZ1BqNCtJRGdwSUNZZ01IaG1aanRjYmlBZ2JXRmpXMjFoWTNCdmN5c2dNbDBnUFNBb2RHaHBjeTVvV3pGZElENCtQaUF3S1NBbUlEQjRabVk3WEc0Z0lHMWhZMXR0WVdOd2IzTXJJRE5kSUQwZ0tIUm9hWE11YUZzeFhTQStQajRnT0NrZ0ppQXdlR1ptTzF4dUlDQnRZV05iYldGamNHOXpLeUEwWFNBOUlDaDBhR2x6TG1oYk1sMGdQajQrSURBcElDWWdNSGhtWmp0Y2JpQWdiV0ZqVzIxaFkzQnZjeXNnTlYwZ1BTQW9kR2hwY3k1b1d6SmRJRDQrUGlBNEtTQW1JREI0Wm1ZN1hHNGdJRzFoWTF0dFlXTndiM01ySURaZElEMGdLSFJvYVhNdWFGc3pYU0ErUGo0Z01Da2dKaUF3ZUdabU8xeHVJQ0J0WVdOYmJXRmpjRzl6S3lBM1hTQTlJQ2gwYUdsekxtaGJNMTBnUGo0K0lEZ3BJQ1lnTUhobVpqdGNiaUFnYldGalcyMWhZM0J2Y3lzZ09GMGdQU0FvZEdocGN5NW9XelJkSUQ0K1BpQXdLU0FtSURCNFptWTdYRzRnSUcxaFkxdHRZV053YjNNcklEbGRJRDBnS0hSb2FYTXVhRnMwWFNBK1BqNGdPQ2tnSmlBd2VHWm1PMXh1SUNCdFlXTmJiV0ZqY0c5ekt6RXdYU0E5SUNoMGFHbHpMbWhiTlYwZ1BqNCtJREFwSUNZZ01IaG1aanRjYmlBZ2JXRmpXMjFoWTNCdmN5c3hNVjBnUFNBb2RHaHBjeTVvV3pWZElENCtQaUE0S1NBbUlEQjRabVk3WEc0Z0lHMWhZMXR0WVdOd2IzTXJNVEpkSUQwZ0tIUm9hWE11YUZzMlhTQStQajRnTUNrZ0ppQXdlR1ptTzF4dUlDQnRZV05iYldGamNHOXpLekV6WFNBOUlDaDBhR2x6TG1oYk5sMGdQajQrSURncElDWWdNSGhtWmp0Y2JpQWdiV0ZqVzIxaFkzQnZjeXN4TkYwZ1BTQW9kR2hwY3k1b1d6ZGRJRDQrUGlBd0tTQW1JREI0Wm1ZN1hHNGdJRzFoWTF0dFlXTndiM01yTVRWZElEMGdLSFJvYVhNdWFGczNYU0ErUGo0Z09Da2dKaUF3ZUdabU8xeHVmVHRjYmx4dWNHOXNlVEV6TURVdWNISnZkRzkwZVhCbExuVndaR0YwWlNBOUlHWjFibU4wYVc5dUtHMHNJRzF3YjNNc0lHSjVkR1Z6S1NCN1hHNGdJSFpoY2lCcExDQjNZVzUwTzF4dVhHNGdJR2xtSUNoMGFHbHpMbXhsWm5SdmRtVnlLU0I3WEc0Z0lDQWdkMkZ1ZENBOUlDZ3hOaUF0SUhSb2FYTXViR1ZtZEc5MlpYSXBPMXh1SUNBZ0lHbG1JQ2gzWVc1MElENGdZbmwwWlhNcFhHNGdJQ0FnSUNCM1lXNTBJRDBnWW5sMFpYTTdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUhkaGJuUTdJR2tyS3lsY2JpQWdJQ0FnSUhSb2FYTXVZblZtWm1WeVczUm9hWE11YkdWbWRHOTJaWElnS3lCcFhTQTlJRzFiYlhCdmN5dHBYVHRjYmlBZ0lDQmllWFJsY3lBdFBTQjNZVzUwTzF4dUlDQWdJRzF3YjNNZ0t6MGdkMkZ1ZER0Y2JpQWdJQ0IwYUdsekxteGxablJ2ZG1WeUlDczlJSGRoYm5RN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdWbWRHOTJaWElnUENBeE5pbGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0IwYUdsekxtSnNiMk5yY3loMGFHbHpMbUoxWm1abGNpd2dNQ3dnTVRZcE8xeHVJQ0FnSUhSb2FYTXViR1ZtZEc5MlpYSWdQU0F3TzF4dUlDQjlYRzVjYmlBZ2FXWWdLR0o1ZEdWeklENDlJREUyS1NCN1hHNGdJQ0FnZDJGdWRDQTlJR0o1ZEdWeklDMGdLR0o1ZEdWeklDVWdNVFlwTzF4dUlDQWdJSFJvYVhNdVlteHZZMnR6S0cwc0lHMXdiM01zSUhkaGJuUXBPMXh1SUNBZ0lHMXdiM01nS3owZ2QyRnVkRHRjYmlBZ0lDQmllWFJsY3lBdFBTQjNZVzUwTzF4dUlDQjlYRzVjYmlBZ2FXWWdLR0o1ZEdWektTQjdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdKNWRHVnpPeUJwS3lzcFhHNGdJQ0FnSUNCMGFHbHpMbUoxWm1abGNsdDBhR2x6TG14bFpuUnZkbVZ5SUNzZ2FWMGdQU0J0VzIxd2IzTXJhVjA3WEc0Z0lDQWdkR2hwY3k1c1pXWjBiM1psY2lBclBTQmllWFJsY3p0Y2JpQWdmVnh1ZlR0Y2JseHVablZ1WTNScGIyNGdZM0o1Y0hSdlgyOXVaWFJwYldWaGRYUm9LRzkxZEN3Z2IzVjBjRzl6TENCdExDQnRjRzl6TENCdUxDQnJLU0I3WEc0Z0lIWmhjaUJ6SUQwZ2JtVjNJSEJ2YkhreE16QTFLR3NwTzF4dUlDQnpMblZ3WkdGMFpTaHRMQ0J0Y0c5ekxDQnVLVHRjYmlBZ2N5NW1hVzVwYzJnb2IzVjBMQ0J2ZFhSd2IzTXBPMXh1SUNCeVpYUjFjbTRnTUR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKNWNIUnZYMjl1WlhScGJXVmhkWFJvWDNabGNtbG1lU2hvTENCb2NHOXpMQ0J0TENCdGNHOXpMQ0J1TENCcktTQjdYRzRnSUhaaGNpQjRJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29NVFlwTzF4dUlDQmpjbmx3ZEc5ZmIyNWxkR2x0WldGMWRHZ29lQ3d3TEcwc2JYQnZjeXh1TEdzcE8xeHVJQ0J5WlhSMWNtNGdZM0o1Y0hSdlgzWmxjbWxtZVY4eE5paG9MR2h3YjNNc2VDd3dLVHRjYm4xY2JseHVablZ1WTNScGIyNGdZM0o1Y0hSdlgzTmxZM0psZEdKdmVDaGpMRzBzWkN4dUxHc3BJSHRjYmlBZ2RtRnlJR2s3WEc0Z0lHbG1JQ2hrSUR3Z016SXBJSEpsZEhWeWJpQXRNVHRjYmlBZ1kzSjVjSFJ2WDNOMGNtVmhiVjk0YjNJb1l5d3dMRzBzTUN4a0xHNHNheWs3WEc0Z0lHTnllWEIwYjE5dmJtVjBhVzFsWVhWMGFDaGpMQ0F4Tml3Z1l5d2dNeklzSUdRZ0xTQXpNaXdnWXlrN1hHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQXhOanNnYVNzcktTQmpXMmxkSUQwZ01EdGNiaUFnY21WMGRYSnVJREE3WEc1OVhHNWNibVoxYm1OMGFXOXVJR055ZVhCMGIxOXpaV055WlhSaWIzaGZiM0JsYmlodExHTXNaQ3h1TEdzcElIdGNiaUFnZG1GeUlHazdYRzRnSUhaaGNpQjRJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29NeklwTzF4dUlDQnBaaUFvWkNBOElETXlLU0J5WlhSMWNtNGdMVEU3WEc0Z0lHTnllWEIwYjE5emRISmxZVzBvZUN3d0xETXlMRzRzYXlrN1hHNGdJR2xtSUNoamNubHdkRzlmYjI1bGRHbHRaV0YxZEdoZmRtVnlhV1o1S0dNc0lERTJMR01zSURNeUxHUWdMU0F6TWl4NEtTQWhQVDBnTUNrZ2NtVjBkWEp1SUMweE8xeHVJQ0JqY25sd2RHOWZjM1J5WldGdFgzaHZjaWh0TERBc1l5d3dMR1FzYml4cktUdGNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJRE15T3lCcEt5c3BJRzFiYVYwZ1BTQXdPMXh1SUNCeVpYUjFjbTRnTUR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJWME1qVTFNVGtvY2l3Z1lTa2dlMXh1SUNCMllYSWdhVHRjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SURFMk95QnBLeXNwSUhKYmFWMGdQU0JoVzJsZGZEQTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTmhjakkxTlRFNUtHOHBJSHRjYmlBZ2RtRnlJR2tzSUhZc0lHTWdQU0F4TzF4dUlDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z01UWTdJR2tyS3lrZ2UxeHVJQ0FnSUhZZ1BTQnZXMmxkSUNzZ1l5QXJJRFkxTlRNMU8xeHVJQ0FnSUdNZ1BTQk5ZWFJvTG1ac2IyOXlLSFlnTHlBMk5UVXpOaWs3WEc0Z0lDQWdiMXRwWFNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIMWNiaUFnYjFzd1hTQXJQU0JqTFRFZ0t5QXpOeUFxSUNoakxURXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaV3d5TlRVeE9TaHdMQ0J4TENCaUtTQjdYRzRnSUhaaGNpQjBMQ0JqSUQwZ2ZpaGlMVEVwTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJREUyT3lCcEt5c3BJSHRjYmlBZ0lDQjBJRDBnWXlBbUlDaHdXMmxkSUY0Z2NWdHBYU2s3WEc0Z0lDQWdjRnRwWFNCZVBTQjBPMXh1SUNBZ0lIRmJhVjBnWGowZ2REdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJ3WVdOck1qVTFNVGtvYnl3Z2Jpa2dlMXh1SUNCMllYSWdhU3dnYWl3Z1lqdGNiaUFnZG1GeUlHMGdQU0JuWmlncExDQjBJRDBnWjJZb0tUdGNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJREUyT3lCcEt5c3BJSFJiYVYwZ1BTQnVXMmxkTzF4dUlDQmpZWEl5TlRVeE9TaDBLVHRjYmlBZ1kyRnlNalUxTVRrb2RDazdYRzRnSUdOaGNqSTFOVEU1S0hRcE8xeHVJQ0JtYjNJZ0tHb2dQU0F3T3lCcUlEd2dNanNnYWlzcktTQjdYRzRnSUNBZ2JWc3dYU0E5SUhSYk1GMGdMU0F3ZUdabVpXUTdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Uc2dhU0E4SURFMU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUcxYmFWMGdQU0IwVzJsZElDMGdNSGhtWm1abUlDMGdLQ2h0VzJrdE1WMCtQakUyS1NBbUlERXBPMXh1SUNBZ0lDQWdiVnRwTFRGZElDWTlJREI0Wm1abVpqdGNiaUFnSUNCOVhHNGdJQ0FnYlZzeE5WMGdQU0IwV3pFMVhTQXRJREI0TjJabVppQXRJQ2dvYlZzeE5GMCtQakUyS1NBbUlERXBPMXh1SUNBZ0lHSWdQU0FvYlZzeE5WMCtQakUyS1NBbUlERTdYRzRnSUNBZ2JWc3hORjBnSmowZ01IaG1abVptTzF4dUlDQWdJSE5sYkRJMU5URTVLSFFzSUcwc0lERXRZaWs3WEc0Z0lIMWNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJREUyT3lCcEt5c3BJSHRjYmlBZ0lDQnZXeklxYVYwZ1BTQjBXMmxkSUNZZ01IaG1aanRjYmlBZ0lDQnZXeklxYVNzeFhTQTlJSFJiYVYwK1BqZzdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnYm1WeE1qVTFNVGtvWVN3Z1lpa2dlMXh1SUNCMllYSWdZeUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLRE15S1N3Z1pDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtETXlLVHRjYmlBZ2NHRmphekkxTlRFNUtHTXNJR0VwTzF4dUlDQndZV05yTWpVMU1Ua29aQ3dnWWlrN1hHNGdJSEpsZEhWeWJpQmpjbmx3ZEc5ZmRtVnlhV1o1WHpNeUtHTXNJREFzSUdRc0lEQXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQndZWEl5TlRVeE9TaGhLU0I3WEc0Z0lIWmhjaUJrSUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvTXpJcE8xeHVJQ0J3WVdOck1qVTFNVGtvWkN3Z1lTazdYRzRnSUhKbGRIVnliaUJrV3pCZElDWWdNVHRjYm4xY2JseHVablZ1WTNScGIyNGdkVzV3WVdOck1qVTFNVGtvYnl3Z2Jpa2dlMXh1SUNCMllYSWdhVHRjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SURFMk95QnBLeXNwSUc5YmFWMGdQU0J1V3pJcWFWMGdLeUFvYmxzeUtta3JNVjBnUER3Z09DazdYRzRnSUc5Yk1UVmRJQ1k5SURCNE4yWm1aanRjYm4xY2JseHVablZ1WTNScGIyNGdRU2h2TENCaExDQmlLU0I3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dNVFk3SUdrckt5a2diMXRwWFNBOUlHRmJhVjBnS3lCaVcybGRPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmFLRzhzSUdFc0lHSXBJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXhOanNnYVNzcktTQnZXMmxkSUQwZ1lWdHBYU0F0SUdKYmFWMDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlFMG9ieXdnWVN3Z1lpa2dlMXh1SUNCMllYSWdkaXdnWXl4Y2JpQWdJQ0FnZERBZ1BTQXdMQ0FnZERFZ1BTQXdMQ0FnZERJZ1BTQXdMQ0FnZERNZ1BTQXdMQ0FnZERRZ1BTQXdMQ0FnZERVZ1BTQXdMQ0FnZERZZ1BTQXdMQ0FnZERjZ1BTQXdMRnh1SUNBZ0lDQjBPQ0E5SURBc0lDQjBPU0E5SURBc0lIUXhNQ0E5SURBc0lIUXhNU0E5SURBc0lIUXhNaUE5SURBc0lIUXhNeUE5SURBc0lIUXhOQ0E5SURBc0lIUXhOU0E5SURBc1hHNGdJQ0FnZERFMklEMGdNQ3dnZERFM0lEMGdNQ3dnZERFNElEMGdNQ3dnZERFNUlEMGdNQ3dnZERJd0lEMGdNQ3dnZERJeElEMGdNQ3dnZERJeUlEMGdNQ3dnZERJeklEMGdNQ3hjYmlBZ0lDQjBNalFnUFNBd0xDQjBNalVnUFNBd0xDQjBNallnUFNBd0xDQjBNamNnUFNBd0xDQjBNamdnUFNBd0xDQjBNamtnUFNBd0xDQjBNekFnUFNBd0xGeHVJQ0FnSUdJd0lEMGdZbHN3WFN4Y2JpQWdJQ0JpTVNBOUlHSmJNVjBzWEc0Z0lDQWdZaklnUFNCaVd6SmRMRnh1SUNBZ0lHSXpJRDBnWWxzelhTeGNiaUFnSUNCaU5DQTlJR0piTkYwc1hHNGdJQ0FnWWpVZ1BTQmlXelZkTEZ4dUlDQWdJR0kySUQwZ1lsczJYU3hjYmlBZ0lDQmlOeUE5SUdKYk4xMHNYRzRnSUNBZ1lqZ2dQU0JpV3poZExGeHVJQ0FnSUdJNUlEMGdZbHM1WFN4Y2JpQWdJQ0JpTVRBZ1BTQmlXekV3WFN4Y2JpQWdJQ0JpTVRFZ1BTQmlXekV4WFN4Y2JpQWdJQ0JpTVRJZ1BTQmlXekV5WFN4Y2JpQWdJQ0JpTVRNZ1BTQmlXekV6WFN4Y2JpQWdJQ0JpTVRRZ1BTQmlXekUwWFN4Y2JpQWdJQ0JpTVRVZ1BTQmlXekUxWFR0Y2JseHVJQ0IySUQwZ1lWc3dYVHRjYmlBZ2REQWdLejBnZGlBcUlHSXdPMXh1SUNCME1TQXJQU0IySUNvZ1lqRTdYRzRnSUhReUlDczlJSFlnS2lCaU1qdGNiaUFnZERNZ0t6MGdkaUFxSUdJek8xeHVJQ0IwTkNBclBTQjJJQ29nWWpRN1hHNGdJSFExSUNzOUlIWWdLaUJpTlR0Y2JpQWdkRFlnS3owZ2RpQXFJR0kyTzF4dUlDQjBOeUFyUFNCMklDb2dZamM3WEc0Z0lIUTRJQ3M5SUhZZ0tpQmlPRHRjYmlBZ2REa2dLejBnZGlBcUlHSTVPMXh1SUNCME1UQWdLejBnZGlBcUlHSXhNRHRjYmlBZ2RERXhJQ3M5SUhZZ0tpQmlNVEU3WEc0Z0lIUXhNaUFyUFNCMklDb2dZakV5TzF4dUlDQjBNVE1nS3owZ2RpQXFJR0l4TXp0Y2JpQWdkREUwSUNzOUlIWWdLaUJpTVRRN1hHNGdJSFF4TlNBclBTQjJJQ29nWWpFMU8xeHVJQ0IySUQwZ1lWc3hYVHRjYmlBZ2RERWdLejBnZGlBcUlHSXdPMXh1SUNCME1pQXJQU0IySUNvZ1lqRTdYRzRnSUhReklDczlJSFlnS2lCaU1qdGNiaUFnZERRZ0t6MGdkaUFxSUdJek8xeHVJQ0IwTlNBclBTQjJJQ29nWWpRN1hHNGdJSFEySUNzOUlIWWdLaUJpTlR0Y2JpQWdkRGNnS3owZ2RpQXFJR0kyTzF4dUlDQjBPQ0FyUFNCMklDb2dZamM3WEc0Z0lIUTVJQ3M5SUhZZ0tpQmlPRHRjYmlBZ2RERXdJQ3M5SUhZZ0tpQmlPVHRjYmlBZ2RERXhJQ3M5SUhZZ0tpQmlNVEE3WEc0Z0lIUXhNaUFyUFNCMklDb2dZakV4TzF4dUlDQjBNVE1nS3owZ2RpQXFJR0l4TWp0Y2JpQWdkREUwSUNzOUlIWWdLaUJpTVRNN1hHNGdJSFF4TlNBclBTQjJJQ29nWWpFME8xeHVJQ0IwTVRZZ0t6MGdkaUFxSUdJeE5UdGNiaUFnZGlBOUlHRmJNbDA3WEc0Z0lIUXlJQ3M5SUhZZ0tpQmlNRHRjYmlBZ2RETWdLejBnZGlBcUlHSXhPMXh1SUNCME5DQXJQU0IySUNvZ1lqSTdYRzRnSUhRMUlDczlJSFlnS2lCaU16dGNiaUFnZERZZ0t6MGdkaUFxSUdJME8xeHVJQ0IwTnlBclBTQjJJQ29nWWpVN1hHNGdJSFE0SUNzOUlIWWdLaUJpTmp0Y2JpQWdkRGtnS3owZ2RpQXFJR0kzTzF4dUlDQjBNVEFnS3owZ2RpQXFJR0k0TzF4dUlDQjBNVEVnS3owZ2RpQXFJR0k1TzF4dUlDQjBNVElnS3owZ2RpQXFJR0l4TUR0Y2JpQWdkREV6SUNzOUlIWWdLaUJpTVRFN1hHNGdJSFF4TkNBclBTQjJJQ29nWWpFeU8xeHVJQ0IwTVRVZ0t6MGdkaUFxSUdJeE16dGNiaUFnZERFMklDczlJSFlnS2lCaU1UUTdYRzRnSUhReE55QXJQU0IySUNvZ1lqRTFPMXh1SUNCMklEMGdZVnN6WFR0Y2JpQWdkRE1nS3owZ2RpQXFJR0l3TzF4dUlDQjBOQ0FyUFNCMklDb2dZakU3WEc0Z0lIUTFJQ3M5SUhZZ0tpQmlNanRjYmlBZ2REWWdLejBnZGlBcUlHSXpPMXh1SUNCME55QXJQU0IySUNvZ1lqUTdYRzRnSUhRNElDczlJSFlnS2lCaU5UdGNiaUFnZERrZ0t6MGdkaUFxSUdJMk8xeHVJQ0IwTVRBZ0t6MGdkaUFxSUdJM08xeHVJQ0IwTVRFZ0t6MGdkaUFxSUdJNE8xeHVJQ0IwTVRJZ0t6MGdkaUFxSUdJNU8xeHVJQ0IwTVRNZ0t6MGdkaUFxSUdJeE1EdGNiaUFnZERFMElDczlJSFlnS2lCaU1URTdYRzRnSUhReE5TQXJQU0IySUNvZ1lqRXlPMXh1SUNCME1UWWdLejBnZGlBcUlHSXhNenRjYmlBZ2RERTNJQ3M5SUhZZ0tpQmlNVFE3WEc0Z0lIUXhPQ0FyUFNCMklDb2dZakUxTzF4dUlDQjJJRDBnWVZzMFhUdGNiaUFnZERRZ0t6MGdkaUFxSUdJd08xeHVJQ0IwTlNBclBTQjJJQ29nWWpFN1hHNGdJSFEySUNzOUlIWWdLaUJpTWp0Y2JpQWdkRGNnS3owZ2RpQXFJR0l6TzF4dUlDQjBPQ0FyUFNCMklDb2dZalE3WEc0Z0lIUTVJQ3M5SUhZZ0tpQmlOVHRjYmlBZ2RERXdJQ3M5SUhZZ0tpQmlOanRjYmlBZ2RERXhJQ3M5SUhZZ0tpQmlOenRjYmlBZ2RERXlJQ3M5SUhZZ0tpQmlPRHRjYmlBZ2RERXpJQ3M5SUhZZ0tpQmlPVHRjYmlBZ2RERTBJQ3M5SUhZZ0tpQmlNVEE3WEc0Z0lIUXhOU0FyUFNCMklDb2dZakV4TzF4dUlDQjBNVFlnS3owZ2RpQXFJR0l4TWp0Y2JpQWdkREUzSUNzOUlIWWdLaUJpTVRNN1hHNGdJSFF4T0NBclBTQjJJQ29nWWpFME8xeHVJQ0IwTVRrZ0t6MGdkaUFxSUdJeE5UdGNiaUFnZGlBOUlHRmJOVjA3WEc0Z0lIUTFJQ3M5SUhZZ0tpQmlNRHRjYmlBZ2REWWdLejBnZGlBcUlHSXhPMXh1SUNCME55QXJQU0IySUNvZ1lqSTdYRzRnSUhRNElDczlJSFlnS2lCaU16dGNiaUFnZERrZ0t6MGdkaUFxSUdJME8xeHVJQ0IwTVRBZ0t6MGdkaUFxSUdJMU8xeHVJQ0IwTVRFZ0t6MGdkaUFxSUdJMk8xeHVJQ0IwTVRJZ0t6MGdkaUFxSUdJM08xeHVJQ0IwTVRNZ0t6MGdkaUFxSUdJNE8xeHVJQ0IwTVRRZ0t6MGdkaUFxSUdJNU8xeHVJQ0IwTVRVZ0t6MGdkaUFxSUdJeE1EdGNiaUFnZERFMklDczlJSFlnS2lCaU1URTdYRzRnSUhReE55QXJQU0IySUNvZ1lqRXlPMXh1SUNCME1UZ2dLejBnZGlBcUlHSXhNenRjYmlBZ2RERTVJQ3M5SUhZZ0tpQmlNVFE3WEc0Z0lIUXlNQ0FyUFNCMklDb2dZakUxTzF4dUlDQjJJRDBnWVZzMlhUdGNiaUFnZERZZ0t6MGdkaUFxSUdJd08xeHVJQ0IwTnlBclBTQjJJQ29nWWpFN1hHNGdJSFE0SUNzOUlIWWdLaUJpTWp0Y2JpQWdkRGtnS3owZ2RpQXFJR0l6TzF4dUlDQjBNVEFnS3owZ2RpQXFJR0kwTzF4dUlDQjBNVEVnS3owZ2RpQXFJR0kxTzF4dUlDQjBNVElnS3owZ2RpQXFJR0kyTzF4dUlDQjBNVE1nS3owZ2RpQXFJR0kzTzF4dUlDQjBNVFFnS3owZ2RpQXFJR0k0TzF4dUlDQjBNVFVnS3owZ2RpQXFJR0k1TzF4dUlDQjBNVFlnS3owZ2RpQXFJR0l4TUR0Y2JpQWdkREUzSUNzOUlIWWdLaUJpTVRFN1hHNGdJSFF4T0NBclBTQjJJQ29nWWpFeU8xeHVJQ0IwTVRrZ0t6MGdkaUFxSUdJeE16dGNiaUFnZERJd0lDczlJSFlnS2lCaU1UUTdYRzRnSUhReU1TQXJQU0IySUNvZ1lqRTFPMXh1SUNCMklEMGdZVnMzWFR0Y2JpQWdkRGNnS3owZ2RpQXFJR0l3TzF4dUlDQjBPQ0FyUFNCMklDb2dZakU3WEc0Z0lIUTVJQ3M5SUhZZ0tpQmlNanRjYmlBZ2RERXdJQ3M5SUhZZ0tpQmlNenRjYmlBZ2RERXhJQ3M5SUhZZ0tpQmlORHRjYmlBZ2RERXlJQ3M5SUhZZ0tpQmlOVHRjYmlBZ2RERXpJQ3M5SUhZZ0tpQmlOanRjYmlBZ2RERTBJQ3M5SUhZZ0tpQmlOenRjYmlBZ2RERTFJQ3M5SUhZZ0tpQmlPRHRjYmlBZ2RERTJJQ3M5SUhZZ0tpQmlPVHRjYmlBZ2RERTNJQ3M5SUhZZ0tpQmlNVEE3WEc0Z0lIUXhPQ0FyUFNCMklDb2dZakV4TzF4dUlDQjBNVGtnS3owZ2RpQXFJR0l4TWp0Y2JpQWdkREl3SUNzOUlIWWdLaUJpTVRNN1hHNGdJSFF5TVNBclBTQjJJQ29nWWpFME8xeHVJQ0IwTWpJZ0t6MGdkaUFxSUdJeE5UdGNiaUFnZGlBOUlHRmJPRjA3WEc0Z0lIUTRJQ3M5SUhZZ0tpQmlNRHRjYmlBZ2REa2dLejBnZGlBcUlHSXhPMXh1SUNCME1UQWdLejBnZGlBcUlHSXlPMXh1SUNCME1URWdLejBnZGlBcUlHSXpPMXh1SUNCME1USWdLejBnZGlBcUlHSTBPMXh1SUNCME1UTWdLejBnZGlBcUlHSTFPMXh1SUNCME1UUWdLejBnZGlBcUlHSTJPMXh1SUNCME1UVWdLejBnZGlBcUlHSTNPMXh1SUNCME1UWWdLejBnZGlBcUlHSTRPMXh1SUNCME1UY2dLejBnZGlBcUlHSTVPMXh1SUNCME1UZ2dLejBnZGlBcUlHSXhNRHRjYmlBZ2RERTVJQ3M5SUhZZ0tpQmlNVEU3WEc0Z0lIUXlNQ0FyUFNCMklDb2dZakV5TzF4dUlDQjBNakVnS3owZ2RpQXFJR0l4TXp0Y2JpQWdkREl5SUNzOUlIWWdLaUJpTVRRN1hHNGdJSFF5TXlBclBTQjJJQ29nWWpFMU8xeHVJQ0IySUQwZ1lWczVYVHRjYmlBZ2REa2dLejBnZGlBcUlHSXdPMXh1SUNCME1UQWdLejBnZGlBcUlHSXhPMXh1SUNCME1URWdLejBnZGlBcUlHSXlPMXh1SUNCME1USWdLejBnZGlBcUlHSXpPMXh1SUNCME1UTWdLejBnZGlBcUlHSTBPMXh1SUNCME1UUWdLejBnZGlBcUlHSTFPMXh1SUNCME1UVWdLejBnZGlBcUlHSTJPMXh1SUNCME1UWWdLejBnZGlBcUlHSTNPMXh1SUNCME1UY2dLejBnZGlBcUlHSTRPMXh1SUNCME1UZ2dLejBnZGlBcUlHSTVPMXh1SUNCME1Ua2dLejBnZGlBcUlHSXhNRHRjYmlBZ2RESXdJQ3M5SUhZZ0tpQmlNVEU3WEc0Z0lIUXlNU0FyUFNCMklDb2dZakV5TzF4dUlDQjBNaklnS3owZ2RpQXFJR0l4TXp0Y2JpQWdkREl6SUNzOUlIWWdLaUJpTVRRN1hHNGdJSFF5TkNBclBTQjJJQ29nWWpFMU8xeHVJQ0IySUQwZ1lWc3hNRjA3WEc0Z0lIUXhNQ0FyUFNCMklDb2dZakE3WEc0Z0lIUXhNU0FyUFNCMklDb2dZakU3WEc0Z0lIUXhNaUFyUFNCMklDb2dZakk3WEc0Z0lIUXhNeUFyUFNCMklDb2dZak03WEc0Z0lIUXhOQ0FyUFNCMklDb2dZalE3WEc0Z0lIUXhOU0FyUFNCMklDb2dZalU3WEc0Z0lIUXhOaUFyUFNCMklDb2dZalk3WEc0Z0lIUXhOeUFyUFNCMklDb2dZamM3WEc0Z0lIUXhPQ0FyUFNCMklDb2dZamc3WEc0Z0lIUXhPU0FyUFNCMklDb2dZams3WEc0Z0lIUXlNQ0FyUFNCMklDb2dZakV3TzF4dUlDQjBNakVnS3owZ2RpQXFJR0l4TVR0Y2JpQWdkREl5SUNzOUlIWWdLaUJpTVRJN1hHNGdJSFF5TXlBclBTQjJJQ29nWWpFek8xeHVJQ0IwTWpRZ0t6MGdkaUFxSUdJeE5EdGNiaUFnZERJMUlDczlJSFlnS2lCaU1UVTdYRzRnSUhZZ1BTQmhXekV4WFR0Y2JpQWdkREV4SUNzOUlIWWdLaUJpTUR0Y2JpQWdkREV5SUNzOUlIWWdLaUJpTVR0Y2JpQWdkREV6SUNzOUlIWWdLaUJpTWp0Y2JpQWdkREUwSUNzOUlIWWdLaUJpTXp0Y2JpQWdkREUxSUNzOUlIWWdLaUJpTkR0Y2JpQWdkREUySUNzOUlIWWdLaUJpTlR0Y2JpQWdkREUzSUNzOUlIWWdLaUJpTmp0Y2JpQWdkREU0SUNzOUlIWWdLaUJpTnp0Y2JpQWdkREU1SUNzOUlIWWdLaUJpT0R0Y2JpQWdkREl3SUNzOUlIWWdLaUJpT1R0Y2JpQWdkREl4SUNzOUlIWWdLaUJpTVRBN1hHNGdJSFF5TWlBclBTQjJJQ29nWWpFeE8xeHVJQ0IwTWpNZ0t6MGdkaUFxSUdJeE1qdGNiaUFnZERJMElDczlJSFlnS2lCaU1UTTdYRzRnSUhReU5TQXJQU0IySUNvZ1lqRTBPMXh1SUNCME1qWWdLejBnZGlBcUlHSXhOVHRjYmlBZ2RpQTlJR0ZiTVRKZE8xeHVJQ0IwTVRJZ0t6MGdkaUFxSUdJd08xeHVJQ0IwTVRNZ0t6MGdkaUFxSUdJeE8xeHVJQ0IwTVRRZ0t6MGdkaUFxSUdJeU8xeHVJQ0IwTVRVZ0t6MGdkaUFxSUdJek8xeHVJQ0IwTVRZZ0t6MGdkaUFxSUdJME8xeHVJQ0IwTVRjZ0t6MGdkaUFxSUdJMU8xeHVJQ0IwTVRnZ0t6MGdkaUFxSUdJMk8xeHVJQ0IwTVRrZ0t6MGdkaUFxSUdJM08xeHVJQ0IwTWpBZ0t6MGdkaUFxSUdJNE8xeHVJQ0IwTWpFZ0t6MGdkaUFxSUdJNU8xeHVJQ0IwTWpJZ0t6MGdkaUFxSUdJeE1EdGNiaUFnZERJeklDczlJSFlnS2lCaU1URTdYRzRnSUhReU5DQXJQU0IySUNvZ1lqRXlPMXh1SUNCME1qVWdLejBnZGlBcUlHSXhNenRjYmlBZ2RESTJJQ3M5SUhZZ0tpQmlNVFE3WEc0Z0lIUXlOeUFyUFNCMklDb2dZakUxTzF4dUlDQjJJRDBnWVZzeE0xMDdYRzRnSUhReE15QXJQU0IySUNvZ1lqQTdYRzRnSUhReE5DQXJQU0IySUNvZ1lqRTdYRzRnSUhReE5TQXJQU0IySUNvZ1lqSTdYRzRnSUhReE5pQXJQU0IySUNvZ1lqTTdYRzRnSUhReE55QXJQU0IySUNvZ1lqUTdYRzRnSUhReE9DQXJQU0IySUNvZ1lqVTdYRzRnSUhReE9TQXJQU0IySUNvZ1lqWTdYRzRnSUhReU1DQXJQU0IySUNvZ1lqYzdYRzRnSUhReU1TQXJQU0IySUNvZ1lqZzdYRzRnSUhReU1pQXJQU0IySUNvZ1lqazdYRzRnSUhReU15QXJQU0IySUNvZ1lqRXdPMXh1SUNCME1qUWdLejBnZGlBcUlHSXhNVHRjYmlBZ2RESTFJQ3M5SUhZZ0tpQmlNVEk3WEc0Z0lIUXlOaUFyUFNCMklDb2dZakV6TzF4dUlDQjBNamNnS3owZ2RpQXFJR0l4TkR0Y2JpQWdkREk0SUNzOUlIWWdLaUJpTVRVN1hHNGdJSFlnUFNCaFd6RTBYVHRjYmlBZ2RERTBJQ3M5SUhZZ0tpQmlNRHRjYmlBZ2RERTFJQ3M5SUhZZ0tpQmlNVHRjYmlBZ2RERTJJQ3M5SUhZZ0tpQmlNanRjYmlBZ2RERTNJQ3M5SUhZZ0tpQmlNenRjYmlBZ2RERTRJQ3M5SUhZZ0tpQmlORHRjYmlBZ2RERTVJQ3M5SUhZZ0tpQmlOVHRjYmlBZ2RESXdJQ3M5SUhZZ0tpQmlOanRjYmlBZ2RESXhJQ3M5SUhZZ0tpQmlOenRjYmlBZ2RESXlJQ3M5SUhZZ0tpQmlPRHRjYmlBZ2RESXpJQ3M5SUhZZ0tpQmlPVHRjYmlBZ2RESTBJQ3M5SUhZZ0tpQmlNVEE3WEc0Z0lIUXlOU0FyUFNCMklDb2dZakV4TzF4dUlDQjBNallnS3owZ2RpQXFJR0l4TWp0Y2JpQWdkREkzSUNzOUlIWWdLaUJpTVRNN1hHNGdJSFF5T0NBclBTQjJJQ29nWWpFME8xeHVJQ0IwTWprZ0t6MGdkaUFxSUdJeE5UdGNiaUFnZGlBOUlHRmJNVFZkTzF4dUlDQjBNVFVnS3owZ2RpQXFJR0l3TzF4dUlDQjBNVFlnS3owZ2RpQXFJR0l4TzF4dUlDQjBNVGNnS3owZ2RpQXFJR0l5TzF4dUlDQjBNVGdnS3owZ2RpQXFJR0l6TzF4dUlDQjBNVGtnS3owZ2RpQXFJR0kwTzF4dUlDQjBNakFnS3owZ2RpQXFJR0kxTzF4dUlDQjBNakVnS3owZ2RpQXFJR0kyTzF4dUlDQjBNaklnS3owZ2RpQXFJR0kzTzF4dUlDQjBNak1nS3owZ2RpQXFJR0k0TzF4dUlDQjBNalFnS3owZ2RpQXFJR0k1TzF4dUlDQjBNalVnS3owZ2RpQXFJR0l4TUR0Y2JpQWdkREkySUNzOUlIWWdLaUJpTVRFN1hHNGdJSFF5TnlBclBTQjJJQ29nWWpFeU8xeHVJQ0IwTWpnZ0t6MGdkaUFxSUdJeE16dGNiaUFnZERJNUlDczlJSFlnS2lCaU1UUTdYRzRnSUhRek1DQXJQU0IySUNvZ1lqRTFPMXh1WEc0Z0lIUXdJQ0FyUFNBek9DQXFJSFF4Tmp0Y2JpQWdkREVnSUNzOUlETTRJQ29nZERFM08xeHVJQ0IwTWlBZ0t6MGdNemdnS2lCME1UZzdYRzRnSUhReklDQXJQU0F6T0NBcUlIUXhPVHRjYmlBZ2REUWdJQ3M5SURNNElDb2dkREl3TzF4dUlDQjBOU0FnS3owZ016Z2dLaUIwTWpFN1hHNGdJSFEySUNBclBTQXpPQ0FxSUhReU1qdGNiaUFnZERjZ0lDczlJRE00SUNvZ2RESXpPMXh1SUNCME9DQWdLejBnTXpnZ0tpQjBNalE3WEc0Z0lIUTVJQ0FyUFNBek9DQXFJSFF5TlR0Y2JpQWdkREV3SUNzOUlETTRJQ29nZERJMk8xeHVJQ0IwTVRFZ0t6MGdNemdnS2lCME1qYzdYRzRnSUhReE1pQXJQU0F6T0NBcUlIUXlPRHRjYmlBZ2RERXpJQ3M5SURNNElDb2dkREk1TzF4dUlDQjBNVFFnS3owZ016Z2dLaUIwTXpBN1hHNGdJQzh2SUhReE5TQnNaV1owSUdGeklHbHpYRzVjYmlBZ0x5OGdabWx5YzNRZ1kyRnlYRzRnSUdNZ1BTQXhPMXh1SUNCMklEMGdJSFF3SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkREFnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFF4SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkREVnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFF5SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRElnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFF6SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRE1nUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFEwSUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRFFnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFExSUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRFVnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFEySUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRFlnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFEzSUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRGNnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFE0SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRGdnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdJSFE1SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QWdkRGtnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREV3SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVEFnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREV4SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVEVnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREV5SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVElnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREV6SUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVE1nUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREUwSUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVFFnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCMklEMGdkREUxSUNzZ1l5QXJJRFkxTlRNMU95QmpJRDBnVFdGMGFDNW1iRzl2Y2loMklDOGdOalUxTXpZcE95QjBNVFVnUFNCMklDMGdZeUFxSURZMU5UTTJPMXh1SUNCME1DQXJQU0JqTFRFZ0t5QXpOeUFxSUNoakxURXBPMXh1WEc0Z0lDOHZJSE5sWTI5dVpDQmpZWEpjYmlBZ1l5QTlJREU3WEc0Z0lIWWdQU0FnZERBZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTUNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERFZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTVNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERJZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTWlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERNZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTXlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERRZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTkNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERVZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTlNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERZZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTmlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERjZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwTnlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERnZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwT0NBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0FnZERrZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJQ0IwT1NBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRBZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TUNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRFZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TVNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRJZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TWlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRNZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TXlBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRRZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TkNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIWWdQU0IwTVRVZ0t5QmpJQ3NnTmpVMU16VTdJR01nUFNCTllYUm9MbVpzYjI5eUtIWWdMeUEyTlRVek5pazdJSFF4TlNBOUlIWWdMU0JqSUNvZ05qVTFNelk3WEc0Z0lIUXdJQ3M5SUdNdE1TQXJJRE0zSUNvZ0tHTXRNU2s3WEc1Y2JpQWdiMXNnTUYwZ1BTQjBNRHRjYmlBZ2Ixc2dNVjBnUFNCME1UdGNiaUFnYjFzZ01sMGdQU0IwTWp0Y2JpQWdiMXNnTTEwZ1BTQjBNenRjYmlBZ2Ixc2dORjBnUFNCME5EdGNiaUFnYjFzZ05WMGdQU0IwTlR0Y2JpQWdiMXNnTmwwZ1BTQjBOanRjYmlBZ2Ixc2dOMTBnUFNCME56dGNiaUFnYjFzZ09GMGdQU0IwT0R0Y2JpQWdiMXNnT1YwZ1BTQjBPVHRjYmlBZ2Ixc3hNRjBnUFNCME1UQTdYRzRnSUc5Yk1URmRJRDBnZERFeE8xeHVJQ0J2V3pFeVhTQTlJSFF4TWp0Y2JpQWdiMXN4TTEwZ1BTQjBNVE03WEc0Z0lHOWJNVFJkSUQwZ2RERTBPMXh1SUNCdld6RTFYU0E5SUhReE5UdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1V5aHZMQ0JoS1NCN1hHNGdJRTBvYnl3Z1lTd2dZU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2x1ZGpJMU5URTVLRzhzSUdrcElIdGNiaUFnZG1GeUlHTWdQU0JuWmlncE8xeHVJQ0IyWVhJZ1lUdGNiaUFnWm05eUlDaGhJRDBnTURzZ1lTQThJREUyT3lCaEt5c3BJR05iWVYwZ1BTQnBXMkZkTzF4dUlDQm1iM0lnS0dFZ1BTQXlOVE03SUdFZ1BqMGdNRHNnWVMwdEtTQjdYRzRnSUNBZ1V5aGpMQ0JqS1R0Y2JpQWdJQ0JwWmloaElDRTlQU0F5SUNZbUlHRWdJVDA5SURRcElFMG9ZeXdnWXl3Z2FTazdYRzRnSUgxY2JpQWdabTl5SUNoaElEMGdNRHNnWVNBOElERTJPeUJoS3lzcElHOWJZVjBnUFNCalcyRmRPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQndiM2N5TlRJektHOHNJR2twSUh0Y2JpQWdkbUZ5SUdNZ1BTQm5aaWdwTzF4dUlDQjJZWElnWVR0Y2JpQWdabTl5SUNoaElEMGdNRHNnWVNBOElERTJPeUJoS3lzcElHTmJZVjBnUFNCcFcyRmRPMXh1SUNCbWIzSWdLR0VnUFNBeU5UQTdJR0VnUGowZ01Ec2dZUzB0S1NCN1hHNGdJQ0FnSUNCVEtHTXNJR01wTzF4dUlDQWdJQ0FnYVdZb1lTQWhQVDBnTVNrZ1RTaGpMQ0JqTENCcEtUdGNiaUFnZlZ4dUlDQm1iM0lnS0dFZ1BTQXdPeUJoSUR3Z01UWTdJR0VyS3lrZ2IxdGhYU0E5SUdOYllWMDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnllWEIwYjE5elkyRnNZWEp0ZFd4MEtIRXNJRzRzSUhBcElIdGNiaUFnZG1GeUlIb2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTZ3pNaWs3WEc0Z0lIWmhjaUI0SUQwZ2JtVjNJRVpzYjJGME5qUkJjbkpoZVNnNE1Da3NJSElzSUdrN1hHNGdJSFpoY2lCaElEMGdaMllvS1N3Z1lpQTlJR2RtS0Nrc0lHTWdQU0JuWmlncExGeHVJQ0FnSUNBZ1pDQTlJR2RtS0Nrc0lHVWdQU0JuWmlncExDQm1JRDBnWjJZb0tUdGNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJRE14T3lCcEt5c3BJSHBiYVYwZ1BTQnVXMmxkTzF4dUlDQjZXek14WFQwb2Jsc3pNVjBtTVRJM0tYdzJORHRjYmlBZ2Vsc3dYU1k5TWpRNE8xeHVJQ0IxYm5CaFkyc3lOVFV4T1NoNExIQXBPMXh1SUNCbWIzSWdLR2tnUFNBd095QnBJRHdnTVRZN0lHa3JLeWtnZTF4dUlDQWdJR0piYVYwOWVGdHBYVHRjYmlBZ0lDQmtXMmxkUFdGYmFWMDlZMXRwWFQwd08xeHVJQ0I5WEc0Z0lHRmJNRjA5WkZzd1hUMHhPMXh1SUNCbWIzSWdLR2s5TWpVME95QnBQajB3T3lBdExXa3BJSHRjYmlBZ0lDQnlQU2g2VzJrK1BqNHpYVDQrUGlocEpqY3BLU1l4TzF4dUlDQWdJSE5sYkRJMU5URTVLR0VzWWl4eUtUdGNiaUFnSUNCelpXd3lOVFV4T1NoakxHUXNjaWs3WEc0Z0lDQWdRU2hsTEdFc1l5azdYRzRnSUNBZ1dpaGhMR0VzWXlrN1hHNGdJQ0FnUVNoakxHSXNaQ2s3WEc0Z0lDQWdXaWhpTEdJc1pDazdYRzRnSUNBZ1V5aGtMR1VwTzF4dUlDQWdJRk1vWml4aEtUdGNiaUFnSUNCTktHRXNZeXhoS1R0Y2JpQWdJQ0JOS0dNc1lpeGxLVHRjYmlBZ0lDQkJLR1VzWVN4aktUdGNiaUFnSUNCYUtHRXNZU3hqS1R0Y2JpQWdJQ0JUS0dJc1lTazdYRzRnSUNBZ1dpaGpMR1FzWmlrN1hHNGdJQ0FnVFNoaExHTXNYekV5TVRZMk5TazdYRzRnSUNBZ1FTaGhMR0VzWkNrN1hHNGdJQ0FnVFNoakxHTXNZU2s3WEc0Z0lDQWdUU2hoTEdRc1ppazdYRzRnSUNBZ1RTaGtMR0lzZUNrN1hHNGdJQ0FnVXloaUxHVXBPMXh1SUNBZ0lITmxiREkxTlRFNUtHRXNZaXh5S1R0Y2JpQWdJQ0J6Wld3eU5UVXhPU2hqTEdRc2NpazdYRzRnSUgxY2JpQWdabTl5SUNocElEMGdNRHNnYVNBOElERTJPeUJwS3lzcElIdGNiaUFnSUNCNFcya3JNVFpkUFdGYmFWMDdYRzRnSUNBZ2VGdHBLek15WFQxalcybGRPMXh1SUNBZ0lIaGJhU3MwT0YwOVlsdHBYVHRjYmlBZ0lDQjRXMmtyTmpSZFBXUmJhVjA3WEc0Z0lIMWNiaUFnZG1GeUlIZ3pNaUE5SUhndWMzVmlZWEp5WVhrb016SXBPMXh1SUNCMllYSWdlREUySUQwZ2VDNXpkV0poY25KaGVTZ3hOaWs3WEc0Z0lHbHVkakkxTlRFNUtIZ3pNaXg0TXpJcE8xeHVJQ0JOS0hneE5peDRNVFlzZURNeUtUdGNiaUFnY0dGamF6STFOVEU1S0hFc2VERTJLVHRjYmlBZ2NtVjBkWEp1SURBN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOeWVYQjBiMTl6WTJGc1lYSnRkV3gwWDJKaGMyVW9jU3dnYmlrZ2UxeHVJQ0J5WlhSMWNtNGdZM0o1Y0hSdlgzTmpZV3hoY20xMWJIUW9jU3dnYml3Z1h6a3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpjbmx3ZEc5ZlltOTRYMnRsZVhCaGFYSW9lU3dnZUNrZ2UxeHVJQ0J5WVc1a2IyMWllWFJsY3loNExDQXpNaWs3WEc0Z0lISmxkSFZ5YmlCamNubHdkRzlmYzJOaGJHRnliWFZzZEY5aVlYTmxLSGtzSUhncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCamNubHdkRzlmWW05NFgySmxabTl5Wlc1dEtHc3NJSGtzSUhncElIdGNiaUFnZG1GeUlITWdQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTZ3pNaWs3WEc0Z0lHTnllWEIwYjE5elkyRnNZWEp0ZFd4MEtITXNJSGdzSUhrcE8xeHVJQ0J5WlhSMWNtNGdZM0o1Y0hSdlgyTnZjbVZmYUhOaGJITmhNakFvYXl3Z1h6QXNJSE1zSUhOcFoyMWhLVHRjYm4xY2JseHVkbUZ5SUdOeWVYQjBiMTlpYjNoZllXWjBaWEp1YlNBOUlHTnllWEIwYjE5elpXTnlaWFJpYjNnN1hHNTJZWElnWTNKNWNIUnZYMkp2ZUY5dmNHVnVYMkZtZEdWeWJtMGdQU0JqY25sd2RHOWZjMlZqY21WMFltOTRYMjl3Wlc0N1hHNWNibVoxYm1OMGFXOXVJR055ZVhCMGIxOWliM2dvWXl3Z2JTd2daQ3dnYml3Z2VTd2dlQ2tnZTF4dUlDQjJZWElnYXlBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0RNeUtUdGNiaUFnWTNKNWNIUnZYMkp2ZUY5aVpXWnZjbVZ1YlNockxDQjVMQ0I0S1R0Y2JpQWdjbVYwZFhKdUlHTnllWEIwYjE5aWIzaGZZV1owWlhKdWJTaGpMQ0J0TENCa0xDQnVMQ0JyS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKNWNIUnZYMkp2ZUY5dmNHVnVLRzBzSUdNc0lHUXNJRzRzSUhrc0lIZ3BJSHRjYmlBZ2RtRnlJR3NnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2d6TWlrN1hHNGdJR055ZVhCMGIxOWliM2hmWW1WbWIzSmxibTBvYXl3Z2VTd2dlQ2s3WEc0Z0lISmxkSFZ5YmlCamNubHdkRzlmWW05NFgyOXdaVzVmWVdaMFpYSnViU2h0TENCakxDQmtMQ0J1TENCcktUdGNibjFjYmx4dWRtRnlJRXNnUFNCYlhHNGdJREI0TkRJNFlUSm1PVGdzSURCNFpEY3lPR0ZsTWpJc0lEQjROekV6TnpRME9URXNJREI0TWpObFpqWTFZMlFzWEc0Z0lEQjRZalZqTUdaaVkyWXNJREI0WldNMFpETmlNbVlzSURCNFpUbGlOV1JpWVRVc0lEQjRPREU0T1dSaVltTXNYRzRnSURCNE16azFObU15TldJc0lEQjRaak0wT0dJMU16Z3NJREI0TlRsbU1URXhaakVzSURCNFlqWXdOV1F3TVRrc1hHNGdJREI0T1RJelpqZ3lZVFFzSURCNFlXWXhPVFJtT1dJc0lEQjRZV0l4WXpWbFpEVXNJREI0WkdFMlpEZ3hNVGdzWEc0Z0lEQjRaRGd3TjJGaE9UZ3NJREI0WVRNd016QXlORElzSURCNE1USTRNelZpTURFc0lEQjRORFUzTURabVltVXNYRzRnSURCNE1qUXpNVGcxWW1Vc0lEQjROR1ZsTkdJeU9HTXNJREI0TlRVd1l6ZGtZek1zSURCNFpEVm1abUkwWlRJc1hHNGdJREI0TnpKaVpUVmtOelFzSURCNFpqSTNZamc1Tm1Zc0lEQjRPREJrWldJeFptVXNJREI0TTJJeE5qazJZakVzWEc0Z0lEQjRPV0prWXpBMllUY3NJREI0TWpWak56RXlNelVzSURCNFl6RTVZbVl4TnpRc0lEQjRZMlkyT1RJMk9UUXNYRzRnSURCNFpUUTVZalk1WXpFc0lEQjRPV1ZtTVRSaFpESXNJREI0WldaaVpUUTNPRFlzSURCNE16ZzBaakkxWlRNc1hHNGdJREI0TUdaak1UbGtZellzSURCNE9HSTRZMlExWWpVc0lEQjRNalF3WTJFeFkyTXNJREI0TnpkaFl6bGpOalVzWEc0Z0lEQjRNbVJsT1RKak5tWXNJREI0TlRreVlqQXlOelVzSURCNE5HRTNORGcwWVdFc0lEQjRObVZoTm1VME9ETXNYRzRnSURCNE5XTmlNR0U1WkdNc0lEQjRZbVEwTVdaaVpEUXNJREI0TnpabU9UZzRaR0VzSURCNE9ETXhNVFV6WWpVc1hHNGdJREI0T1RnelpUVXhOVElzSURCNFpXVTJObVJtWVdJc0lEQjRZVGd6TVdNMk5tUXNJREI0TW1SaU5ETXlNVEFzWEc0Z0lEQjRZakF3TXpJM1l6Z3NJREI0T1RobVlqSXhNMllzSURCNFltWTFPVGRtWXpjc0lEQjRZbVZsWmpCbFpUUXNYRzRnSURCNFl6WmxNREJpWmpNc0lEQjRNMlJoT0RobVl6SXNJREI0WkRWaE56a3hORGNzSURCNE9UTXdZV0UzTWpVc1hHNGdJREI0TURaallUWXpOVEVzSURCNFpUQXdNemd5Tm1Zc0lEQjRNVFF5T1RJNU5qY3NJREI0TUdFd1pUWmxOekFzWEc0Z0lEQjRNamRpTnpCaE9EVXNJREI0TkRaa01qSm1abU1zSURCNE1tVXhZakl4TXpnc0lEQjROV015Tm1NNU1qWXNYRzRnSURCNE5HUXlZelprWm1Nc0lEQjROV0ZqTkRKaFpXUXNJREI0TlRNek9EQmtNVE1zSURCNE9XUTVOV0l6WkdZc1hHNGdJREI0TmpVd1lUY3pOVFFzSURCNE9HSmhaall6WkdVc0lEQjROelkyWVRCaFltSXNJREI0TTJNM04ySXlZVGdzWEc0Z0lEQjRPREZqTW1NNU1tVXNJREI0TkRkbFpHRmxaVFlzSURCNE9USTNNakpqT0RVc0lEQjRNVFE0TWpNMU0ySXNYRzRnSURCNFlUSmlabVU0WVRFc0lEQjROR05tTVRBek5qUXNJREI0WVRneFlUWTJOR0lzSURCNFltTTBNak13TURFc1hHNGdJREI0WXpJMFlqaGlOekFzSURCNFpEQm1PRGszT1RFc0lEQjRZemMyWXpVeFlUTXNJREI0TURZMU5HSmxNekFzWEc0Z0lEQjRaREU1TW1VNE1Ua3NJREI0WkRabFpqVXlNVGdzSURCNFpEWTVPVEEyTWpRc0lEQjROVFUyTldFNU1UQXNYRzRnSURCNFpqUXdaVE0xT0RVc0lEQjROVGMzTVRJd01tRXNJREI0TVRBMllXRXdOekFzSURCNE16SmlZbVF4WWpnc1hHNGdJREI0TVRsaE5HTXhNVFlzSURCNFlqaGtNbVF3WXpnc0lEQjRNV1V6Tnpaak1EZ3NJREI0TlRFME1XRmlOVE1zWEc0Z0lEQjRNamMwT0RjM05HTXNJREI0WkdZNFpXVmlPVGtzSURCNE16UmlNR0pqWWpVc0lEQjRaVEU1WWpRNFlUZ3NYRzRnSURCNE16a3hZekJqWWpNc0lEQjRZelZqT1RWaE5qTXNJREI0TkdWa09HRmhOR0VzSURCNFpUTTBNVGhoWTJJc1hHNGdJREI0TldJNVkyTmhOR1lzSURCNE56YzJNMlV6TnpNc0lEQjROamd5WlRabVpqTXNJREI0WkRaaU1tSTRZVE1zWEc0Z0lEQjROelE0WmpneVpXVXNJREI0TldSbFptSXlabU1zSURCNE56aGhOVFl6Tm1Zc0lEQjRORE14TnpKbU5qQXNYRzRnSURCNE9EUmpPRGM0TVRRc0lEQjRZVEZtTUdGaU56SXNJREI0T0dOak56QXlNRGdzSURCNE1XRTJORE01WldNc1hHNGdJREI0T1RCaVpXWm1abUVzSURCNE1qTTJNekZsTWpnc0lEQjRZVFExTURaalpXSXNJREI0WkdVNE1tSmtaVGtzWEc0Z0lEQjRZbVZtT1dFelpqY3NJREI0WWpKak5qYzVNVFVzSURCNFl6WTNNVGM0WmpJc0lEQjRaVE0zTWpVek1tSXNYRzRnSURCNFkyRXlOek5sWTJVc0lEQjRaV0V5TmpZeE9XTXNJREI0WkRFNE5tSTRZemNzSURCNE1qRmpNR015TURjc1hHNGdJREI0WldGa1lUZGtaRFlzSURCNFkyUmxNR1ZpTVdVc0lEQjRaalUzWkRSbU4yWXNJREI0WldVMlpXUXhOemdzWEc0Z0lEQjRNRFptTURZM1lXRXNJREI0TnpJeE56Wm1ZbUVzSURCNE1HRTJNemRrWXpVc0lEQjRZVEpqT0RrNFlUWXNYRzRnSURCNE1URXpaams0TURRc0lEQjRZbVZtT1RCa1lXVXNJREI0TVdJM01UQmlNelVzSURCNE1UTXhZelEzTVdJc1hHNGdJREI0TWpoa1lqYzNaalVzSURCNE1qTXdORGRrT0RRc0lEQjRNekpqWVdGaU4ySXNJREI0TkRCak56STBPVE1zWEc0Z0lEQjRNMk01WldKbE1HRXNJREI0TVRWak9XSmxZbU1zSURCNE5ETXhaRFkzWXpRc0lEQjRPV014TURCa05HTXNYRzRnSURCNE5HTmpOV1EwWW1Vc0lEQjRZMkl6WlRReVlqWXNJREI0TlRrM1pqSTVPV01zSURCNFptTTJOVGRsTW1Fc1hHNGdJREI0TldaallqWm1ZV0lzSURCNE0yRmtObVpoWldNc0lEQjRObU0wTkRFNU9HTXNJREI0TkdFME56VTRNVGRjYmwwN1hHNWNibVoxYm1OMGFXOXVJR055ZVhCMGIxOW9ZWE5vWW14dlkydHpYMmhzS0dob0xDQm9iQ3dnYlN3Z2Jpa2dlMXh1SUNCMllYSWdkMmdnUFNCdVpYY2dTVzUwTXpKQmNuSmhlU2d4Tmlrc0lIZHNJRDBnYm1WM0lFbHVkRE15UVhKeVlYa29NVFlwTEZ4dUlDQWdJQ0FnWW1nd0xDQmlhREVzSUdKb01pd2dZbWd6TENCaWFEUXNJR0pvTlN3Z1ltZzJMQ0JpYURjc1hHNGdJQ0FnSUNCaWJEQXNJR0pzTVN3Z1ltd3lMQ0JpYkRNc0lHSnNOQ3dnWW13MUxDQmliRFlzSUdKc055eGNiaUFnSUNBZ0lIUm9MQ0IwYkN3Z2FTd2dhaXdnYUN3Z2JDd2dZU3dnWWl3Z1l5d2daRHRjYmx4dUlDQjJZWElnWVdnd0lEMGdhR2hiTUYwc1hHNGdJQ0FnSUNCaGFERWdQU0JvYUZzeFhTeGNiaUFnSUNBZ0lHRm9NaUE5SUdob1d6SmRMRnh1SUNBZ0lDQWdZV2d6SUQwZ2FHaGJNMTBzWEc0Z0lDQWdJQ0JoYURRZ1BTQm9hRnMwWFN4Y2JpQWdJQ0FnSUdGb05TQTlJR2hvV3pWZExGeHVJQ0FnSUNBZ1lXZzJJRDBnYUdoYk5sMHNYRzRnSUNBZ0lDQmhhRGNnUFNCb2FGczNYU3hjYmx4dUlDQWdJQ0FnWVd3d0lEMGdhR3hiTUYwc1hHNGdJQ0FnSUNCaGJERWdQU0JvYkZzeFhTeGNiaUFnSUNBZ0lHRnNNaUE5SUdoc1d6SmRMRnh1SUNBZ0lDQWdZV3d6SUQwZ2FHeGJNMTBzWEc0Z0lDQWdJQ0JoYkRRZ1BTQm9iRnMwWFN4Y2JpQWdJQ0FnSUdGc05TQTlJR2hzV3pWZExGeHVJQ0FnSUNBZ1lXdzJJRDBnYUd4Yk5sMHNYRzRnSUNBZ0lDQmhiRGNnUFNCb2JGczNYVHRjYmx4dUlDQjJZWElnY0c5eklEMGdNRHRjYmlBZ2QyaHBiR1VnS0c0Z1BqMGdNVEk0S1NCN1hHNGdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJREUyT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR29nUFNBNElDb2dhU0FySUhCdmN6dGNiaUFnSUNBZ0lIZG9XMmxkSUQwZ0tHMWJhaXN3WFNBOFBDQXlOQ2tnZkNBb2JWdHFLekZkSUR3OElERTJLU0I4SUNodFcyb3JNbDBnUER3Z09Da2dmQ0J0VzJvck0xMDdYRzRnSUNBZ0lDQjNiRnRwWFNBOUlDaHRXMm9yTkYwZ1BEd2dNalFwSUh3Z0tHMWJhaXMxWFNBOFBDQXhOaWtnZkNBb2JWdHFLelpkSUR3OElEZ3BJSHdnYlZ0cUt6ZGRPMXh1SUNBZ0lIMWNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnT0RBN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWW1nd0lEMGdZV2d3TzF4dUlDQWdJQ0FnWW1neElEMGdZV2d4TzF4dUlDQWdJQ0FnWW1neUlEMGdZV2d5TzF4dUlDQWdJQ0FnWW1neklEMGdZV2d6TzF4dUlDQWdJQ0FnWW1nMElEMGdZV2cwTzF4dUlDQWdJQ0FnWW1nMUlEMGdZV2cxTzF4dUlDQWdJQ0FnWW1nMklEMGdZV2cyTzF4dUlDQWdJQ0FnWW1nM0lEMGdZV2czTzF4dVhHNGdJQ0FnSUNCaWJEQWdQU0JoYkRBN1hHNGdJQ0FnSUNCaWJERWdQU0JoYkRFN1hHNGdJQ0FnSUNCaWJESWdQU0JoYkRJN1hHNGdJQ0FnSUNCaWJETWdQU0JoYkRNN1hHNGdJQ0FnSUNCaWJEUWdQU0JoYkRRN1hHNGdJQ0FnSUNCaWJEVWdQU0JoYkRVN1hHNGdJQ0FnSUNCaWJEWWdQU0JoYkRZN1hHNGdJQ0FnSUNCaWJEY2dQU0JoYkRjN1hHNWNiaUFnSUNBZ0lDOHZJR0ZrWkZ4dUlDQWdJQ0FnYUNBOUlHRm9OenRjYmlBZ0lDQWdJR3dnUFNCaGJEYzdYRzVjYmlBZ0lDQWdJR0VnUFNCc0lDWWdNSGhtWm1abU95QmlJRDBnYkNBK1BqNGdNVFk3WEc0Z0lDQWdJQ0JqSUQwZ2FDQW1JREI0Wm1abVpqc2daQ0E5SUdnZ1BqNCtJREUyTzF4dVhHNGdJQ0FnSUNBdkx5QlRhV2R0WVRGY2JpQWdJQ0FnSUdnZ1BTQW9LR0ZvTkNBK1BqNGdNVFFwSUh3Z0tHRnNOQ0E4UENBb016SXRNVFFwS1NrZ1hpQW9LR0ZvTkNBK1BqNGdNVGdwSUh3Z0tHRnNOQ0E4UENBb016SXRNVGdwS1NrZ1hpQW9LR0ZzTkNBK1BqNGdLRFF4TFRNeUtTa2dmQ0FvWVdnMElEdzhJQ2d6TWkwb05ERXRNeklwS1NrcE8xeHVJQ0FnSUNBZ2JDQTlJQ2dvWVd3MElENCtQaUF4TkNrZ2ZDQW9ZV2cwSUR3OElDZ3pNaTB4TkNrcEtTQmVJQ2dvWVd3MElENCtQaUF4T0NrZ2ZDQW9ZV2cwSUR3OElDZ3pNaTB4T0NrcEtTQmVJQ2dvWVdnMElENCtQaUFvTkRFdE16SXBLU0I4SUNoaGJEUWdQRHdnS0RNeUxTZzBNUzB6TWlrcEtTazdYRzVjYmlBZ0lDQWdJR0VnS3owZ2JDQW1JREI0Wm1abVpqc2dZaUFyUFNCc0lENCtQaUF4Tmp0Y2JpQWdJQ0FnSUdNZ0t6MGdhQ0FtSURCNFptWm1aanNnWkNBclBTQm9JRDQrUGlBeE5qdGNibHh1SUNBZ0lDQWdMeThnUTJoY2JpQWdJQ0FnSUdnZ1BTQW9ZV2cwSUNZZ1lXZzFLU0JlSUNoK1lXZzBJQ1lnWVdnMktUdGNiaUFnSUNBZ0lHd2dQU0FvWVd3MElDWWdZV3cxS1NCZUlDaCtZV3cwSUNZZ1lXdzJLVHRjYmx4dUlDQWdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUNBZ1l5QXJQU0JvSUNZZ01IaG1abVptT3lCa0lDczlJR2dnUGo0K0lERTJPMXh1WEc0Z0lDQWdJQ0F2THlCTFhHNGdJQ0FnSUNCb0lEMGdTMXRwS2pKZE8xeHVJQ0FnSUNBZ2JDQTlJRXRiYVNveUt6RmRPMXh1WEc0Z0lDQWdJQ0JoSUNzOUlHd2dKaUF3ZUdabVptWTdJR0lnS3owZ2JDQStQajRnTVRZN1hHNGdJQ0FnSUNCaklDczlJR2dnSmlBd2VHWm1abVk3SUdRZ0t6MGdhQ0ErUGo0Z01UWTdYRzVjYmlBZ0lDQWdJQzh2SUhkY2JpQWdJQ0FnSUdnZ1BTQjNhRnRwSlRFMlhUdGNiaUFnSUNBZ0lHd2dQU0IzYkZ0cEpURTJYVHRjYmx4dUlDQWdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUNBZ1l5QXJQU0JvSUNZZ01IaG1abVptT3lCa0lDczlJR2dnUGo0K0lERTJPMXh1WEc0Z0lDQWdJQ0JpSUNzOUlHRWdQajQrSURFMk8xeHVJQ0FnSUNBZ1l5QXJQU0JpSUQ0K1BpQXhOanRjYmlBZ0lDQWdJR1FnS3owZ1l5QStQajRnTVRZN1hHNWNiaUFnSUNBZ0lIUm9JRDBnWXlBbUlEQjRabVptWmlCOElHUWdQRHdnTVRZN1hHNGdJQ0FnSUNCMGJDQTlJR0VnSmlBd2VHWm1abVlnZkNCaUlEdzhJREUyTzF4dVhHNGdJQ0FnSUNBdkx5QmhaR1JjYmlBZ0lDQWdJR2dnUFNCMGFEdGNiaUFnSUNBZ0lHd2dQU0IwYkR0Y2JseHVJQ0FnSUNBZ1lTQTlJR3dnSmlBd2VHWm1abVk3SUdJZ1BTQnNJRDQrUGlBeE5qdGNiaUFnSUNBZ0lHTWdQU0JvSUNZZ01IaG1abVptT3lCa0lEMGdhQ0ErUGo0Z01UWTdYRzVjYmlBZ0lDQWdJQzh2SUZOcFoyMWhNRnh1SUNBZ0lDQWdhQ0E5SUNnb1lXZ3dJRDQrUGlBeU9Da2dmQ0FvWVd3d0lEdzhJQ2d6TWkweU9Da3BLU0JlSUNnb1lXd3dJRDQrUGlBb016UXRNeklwS1NCOElDaGhhREFnUER3Z0tETXlMU2d6TkMwek1pa3BLU2tnWGlBb0tHRnNNQ0ErUGo0Z0tETTVMVE15S1NrZ2ZDQW9ZV2d3SUR3OElDZ3pNaTBvTXprdE16SXBLU2twTzF4dUlDQWdJQ0FnYkNBOUlDZ29ZV3d3SUQ0K1BpQXlPQ2tnZkNBb1lXZ3dJRHc4SUNnek1pMHlPQ2twS1NCZUlDZ29ZV2d3SUQ0K1BpQW9NelF0TXpJcEtTQjhJQ2hoYkRBZ1BEd2dLRE15TFNnek5DMHpNaWtwS1NrZ1hpQW9LR0ZvTUNBK1BqNGdLRE01TFRNeUtTa2dmQ0FvWVd3d0lEdzhJQ2d6TWkwb016a3RNeklwS1NrcE8xeHVYRzRnSUNBZ0lDQmhJQ3M5SUd3Z0ppQXdlR1ptWm1ZN0lHSWdLejBnYkNBK1BqNGdNVFk3WEc0Z0lDQWdJQ0JqSUNzOUlHZ2dKaUF3ZUdabVptWTdJR1FnS3owZ2FDQStQajRnTVRZN1hHNWNiaUFnSUNBZ0lDOHZJRTFoYWx4dUlDQWdJQ0FnYUNBOUlDaGhhREFnSmlCaGFERXBJRjRnS0dGb01DQW1JR0ZvTWlrZ1hpQW9ZV2d4SUNZZ1lXZ3lLVHRjYmlBZ0lDQWdJR3dnUFNBb1lXd3dJQ1lnWVd3eEtTQmVJQ2hoYkRBZ0ppQmhiRElwSUY0Z0tHRnNNU0FtSUdGc01pazdYRzVjYmlBZ0lDQWdJR0VnS3owZ2JDQW1JREI0Wm1abVpqc2dZaUFyUFNCc0lENCtQaUF4Tmp0Y2JpQWdJQ0FnSUdNZ0t6MGdhQ0FtSURCNFptWm1aanNnWkNBclBTQm9JRDQrUGlBeE5qdGNibHh1SUNBZ0lDQWdZaUFyUFNCaElENCtQaUF4Tmp0Y2JpQWdJQ0FnSUdNZ0t6MGdZaUErUGo0Z01UWTdYRzRnSUNBZ0lDQmtJQ3M5SUdNZ1BqNCtJREUyTzF4dVhHNGdJQ0FnSUNCaWFEY2dQU0FvWXlBbUlEQjRabVptWmlrZ2ZDQW9aQ0E4UENBeE5pazdYRzRnSUNBZ0lDQmliRGNnUFNBb1lTQW1JREI0Wm1abVppa2dmQ0FvWWlBOFBDQXhOaWs3WEc1Y2JpQWdJQ0FnSUM4dklHRmtaRnh1SUNBZ0lDQWdhQ0E5SUdKb016dGNiaUFnSUNBZ0lHd2dQU0JpYkRNN1hHNWNiaUFnSUNBZ0lHRWdQU0JzSUNZZ01IaG1abVptT3lCaUlEMGdiQ0ErUGo0Z01UWTdYRzRnSUNBZ0lDQmpJRDBnYUNBbUlEQjRabVptWmpzZ1pDQTlJR2dnUGo0K0lERTJPMXh1WEc0Z0lDQWdJQ0JvSUQwZ2RHZzdYRzRnSUNBZ0lDQnNJRDBnZEd3N1hHNWNiaUFnSUNBZ0lHRWdLejBnYkNBbUlEQjRabVptWmpzZ1lpQXJQU0JzSUQ0K1BpQXhOanRjYmlBZ0lDQWdJR01nS3owZ2FDQW1JREI0Wm1abVpqc2daQ0FyUFNCb0lENCtQaUF4Tmp0Y2JseHVJQ0FnSUNBZ1lpQXJQU0JoSUQ0K1BpQXhOanRjYmlBZ0lDQWdJR01nS3owZ1lpQStQajRnTVRZN1hHNGdJQ0FnSUNCa0lDczlJR01nUGo0K0lERTJPMXh1WEc0Z0lDQWdJQ0JpYURNZ1BTQW9ZeUFtSURCNFptWm1aaWtnZkNBb1pDQThQQ0F4TmlrN1hHNGdJQ0FnSUNCaWJETWdQU0FvWVNBbUlEQjRabVptWmlrZ2ZDQW9ZaUE4UENBeE5pazdYRzVjYmlBZ0lDQWdJR0ZvTVNBOUlHSm9NRHRjYmlBZ0lDQWdJR0ZvTWlBOUlHSm9NVHRjYmlBZ0lDQWdJR0ZvTXlBOUlHSm9NanRjYmlBZ0lDQWdJR0ZvTkNBOUlHSm9NenRjYmlBZ0lDQWdJR0ZvTlNBOUlHSm9ORHRjYmlBZ0lDQWdJR0ZvTmlBOUlHSm9OVHRjYmlBZ0lDQWdJR0ZvTnlBOUlHSm9OanRjYmlBZ0lDQWdJR0ZvTUNBOUlHSm9OenRjYmx4dUlDQWdJQ0FnWVd3eElEMGdZbXd3TzF4dUlDQWdJQ0FnWVd3eUlEMGdZbXd4TzF4dUlDQWdJQ0FnWVd3eklEMGdZbXd5TzF4dUlDQWdJQ0FnWVd3MElEMGdZbXd6TzF4dUlDQWdJQ0FnWVd3MUlEMGdZbXcwTzF4dUlDQWdJQ0FnWVd3MklEMGdZbXcxTzF4dUlDQWdJQ0FnWVd3M0lEMGdZbXcyTzF4dUlDQWdJQ0FnWVd3d0lEMGdZbXczTzF4dVhHNGdJQ0FnSUNCcFppQW9hU1V4TmlBOVBUMGdNVFVwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hxSUQwZ01Ec2dhaUE4SURFMk95QnFLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJoWkdSY2JpQWdJQ0FnSUNBZ0lDQm9JRDBnZDJoYmFsMDdYRzRnSUNBZ0lDQWdJQ0FnYkNBOUlIZHNXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdZU0E5SUd3Z0ppQXdlR1ptWm1ZN0lHSWdQU0JzSUQ0K1BpQXhOanRjYmlBZ0lDQWdJQ0FnSUNCaklEMGdhQ0FtSURCNFptWm1aanNnWkNBOUlHZ2dQajQrSURFMk8xeHVYRzRnSUNBZ0lDQWdJQ0FnYUNBOUlIZG9XeWhxS3prcEpURTJYVHRjYmlBZ0lDQWdJQ0FnSUNCc0lEMGdkMnhiS0dvck9Ta2xNVFpkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdZU0FyUFNCc0lDWWdNSGhtWm1abU95QmlJQ3M5SUd3Z1BqNCtJREUyTzF4dUlDQWdJQ0FnSUNBZ0lHTWdLejBnYUNBbUlEQjRabVptWmpzZ1pDQXJQU0JvSUQ0K1BpQXhOanRjYmx4dUlDQWdJQ0FnSUNBZ0lDOHZJSE5wWjIxaE1GeHVJQ0FnSUNBZ0lDQWdJSFJvSUQwZ2QyaGJLR29yTVNrbE1UWmRPMXh1SUNBZ0lDQWdJQ0FnSUhSc0lEMGdkMnhiS0dvck1Ta2xNVFpkTzF4dUlDQWdJQ0FnSUNBZ0lHZ2dQU0FvS0hSb0lENCtQaUF4S1NCOElDaDBiQ0E4UENBb016SXRNU2twS1NCZUlDZ29kR2dnUGo0K0lEZ3BJSHdnS0hSc0lEdzhJQ2d6TWkwNEtTa3BJRjRnS0hSb0lENCtQaUEzS1R0Y2JpQWdJQ0FnSUNBZ0lDQnNJRDBnS0NoMGJDQStQajRnTVNrZ2ZDQW9kR2dnUER3Z0tETXlMVEVwS1NrZ1hpQW9LSFJzSUQ0K1BpQTRLU0I4SUNoMGFDQThQQ0FvTXpJdE9Da3BLU0JlSUNnb2RHd2dQajQrSURjcElId2dLSFJvSUR3OElDZ3pNaTAzS1NrcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUNBZ0lDQWdJR01nS3owZ2FDQW1JREI0Wm1abVpqc2daQ0FyUFNCb0lENCtQaUF4Tmp0Y2JseHVJQ0FnSUNBZ0lDQWdJQzh2SUhOcFoyMWhNVnh1SUNBZ0lDQWdJQ0FnSUhSb0lEMGdkMmhiS0dvck1UUXBKVEUyWFR0Y2JpQWdJQ0FnSUNBZ0lDQjBiQ0E5SUhkc1d5aHFLekUwS1NVeE5sMDdYRzRnSUNBZ0lDQWdJQ0FnYUNBOUlDZ29kR2dnUGo0K0lERTVLU0I4SUNoMGJDQThQQ0FvTXpJdE1Ua3BLU2tnWGlBb0tIUnNJRDQrUGlBb05qRXRNeklwS1NCOElDaDBhQ0E4UENBb016SXRLRFl4TFRNeUtTa3BLU0JlSUNoMGFDQStQajRnTmlrN1hHNGdJQ0FnSUNBZ0lDQWdiQ0E5SUNnb2RHd2dQajQrSURFNUtTQjhJQ2gwYUNBOFBDQW9Nekl0TVRrcEtTa2dYaUFvS0hSb0lENCtQaUFvTmpFdE16SXBLU0I4SUNoMGJDQThQQ0FvTXpJdEtEWXhMVE15S1NrcEtTQmVJQ2dvZEd3Z1BqNCtJRFlwSUh3Z0tIUm9JRHc4SUNnek1pMDJLU2twTzF4dVhHNGdJQ0FnSUNBZ0lDQWdZU0FyUFNCc0lDWWdNSGhtWm1abU95QmlJQ3M5SUd3Z1BqNCtJREUyTzF4dUlDQWdJQ0FnSUNBZ0lHTWdLejBnYUNBbUlEQjRabVptWmpzZ1pDQXJQU0JvSUQ0K1BpQXhOanRjYmx4dUlDQWdJQ0FnSUNBZ0lHSWdLejBnWVNBK1BqNGdNVFk3WEc0Z0lDQWdJQ0FnSUNBZ1l5QXJQU0JpSUQ0K1BpQXhOanRjYmlBZ0lDQWdJQ0FnSUNCa0lDczlJR01nUGo0K0lERTJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2QyaGJhbDBnUFNBb1l5QW1JREI0Wm1abVppa2dmQ0FvWkNBOFBDQXhOaWs3WEc0Z0lDQWdJQ0FnSUNBZ2QyeGJhbDBnUFNBb1lTQW1JREI0Wm1abVppa2dmQ0FvWWlBOFBDQXhOaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCaFpHUmNiaUFnSUNCb0lEMGdZV2d3TzF4dUlDQWdJR3dnUFNCaGJEQTdYRzVjYmlBZ0lDQmhJRDBnYkNBbUlEQjRabVptWmpzZ1lpQTlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdQU0JvSUNZZ01IaG1abVptT3lCa0lEMGdhQ0ErUGo0Z01UWTdYRzVjYmlBZ0lDQm9JRDBnYUdoYk1GMDdYRzRnSUNBZ2JDQTlJR2hzV3pCZE8xeHVYRzRnSUNBZ1lTQXJQU0JzSUNZZ01IaG1abVptT3lCaUlDczlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdLejBnYUNBbUlEQjRabVptWmpzZ1pDQXJQU0JvSUQ0K1BpQXhOanRjYmx4dUlDQWdJR0lnS3owZ1lTQStQajRnTVRZN1hHNGdJQ0FnWXlBclBTQmlJRDQrUGlBeE5qdGNiaUFnSUNCa0lDczlJR01nUGo0K0lERTJPMXh1WEc0Z0lDQWdhR2hiTUYwZ1BTQmhhREFnUFNBb1l5QW1JREI0Wm1abVppa2dmQ0FvWkNBOFBDQXhOaWs3WEc0Z0lDQWdhR3hiTUYwZ1BTQmhiREFnUFNBb1lTQW1JREI0Wm1abVppa2dmQ0FvWWlBOFBDQXhOaWs3WEc1Y2JpQWdJQ0JvSUQwZ1lXZ3hPMXh1SUNBZ0lHd2dQU0JoYkRFN1hHNWNiaUFnSUNCaElEMGdiQ0FtSURCNFptWm1aanNnWWlBOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ1BTQm9JQ1lnTUhobVptWm1PeUJrSUQwZ2FDQStQajRnTVRZN1hHNWNiaUFnSUNCb0lEMGdhR2hiTVYwN1hHNGdJQ0FnYkNBOUlHaHNXekZkTzF4dVhHNGdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ0t6MGdhQ0FtSURCNFptWm1aanNnWkNBclBTQm9JRDQrUGlBeE5qdGNibHh1SUNBZ0lHSWdLejBnWVNBK1BqNGdNVFk3WEc0Z0lDQWdZeUFyUFNCaUlENCtQaUF4Tmp0Y2JpQWdJQ0JrSUNzOUlHTWdQajQrSURFMk8xeHVYRzRnSUNBZ2FHaGJNVjBnUFNCaGFERWdQU0FvWXlBbUlEQjRabVptWmlrZ2ZDQW9aQ0E4UENBeE5pazdYRzRnSUNBZ2FHeGJNVjBnUFNCaGJERWdQU0FvWVNBbUlEQjRabVptWmlrZ2ZDQW9ZaUE4UENBeE5pazdYRzVjYmlBZ0lDQm9JRDBnWVdneU8xeHVJQ0FnSUd3Z1BTQmhiREk3WEc1Y2JpQWdJQ0JoSUQwZ2JDQW1JREI0Wm1abVpqc2dZaUE5SUd3Z1BqNCtJREUyTzF4dUlDQWdJR01nUFNCb0lDWWdNSGhtWm1abU95QmtJRDBnYUNBK1BqNGdNVFk3WEc1Y2JpQWdJQ0JvSUQwZ2FHaGJNbDA3WEc0Z0lDQWdiQ0E5SUdoc1d6SmRPMXh1WEc0Z0lDQWdZU0FyUFNCc0lDWWdNSGhtWm1abU95QmlJQ3M5SUd3Z1BqNCtJREUyTzF4dUlDQWdJR01nS3owZ2FDQW1JREI0Wm1abVpqc2daQ0FyUFNCb0lENCtQaUF4Tmp0Y2JseHVJQ0FnSUdJZ0t6MGdZU0ErUGo0Z01UWTdYRzRnSUNBZ1l5QXJQU0JpSUQ0K1BpQXhOanRjYmlBZ0lDQmtJQ3M5SUdNZ1BqNCtJREUyTzF4dVhHNGdJQ0FnYUdoYk1sMGdQU0JoYURJZ1BTQW9ZeUFtSURCNFptWm1aaWtnZkNBb1pDQThQQ0F4TmlrN1hHNGdJQ0FnYUd4Yk1sMGdQU0JoYkRJZ1BTQW9ZU0FtSURCNFptWm1aaWtnZkNBb1lpQThQQ0F4TmlrN1hHNWNiaUFnSUNCb0lEMGdZV2d6TzF4dUlDQWdJR3dnUFNCaGJETTdYRzVjYmlBZ0lDQmhJRDBnYkNBbUlEQjRabVptWmpzZ1lpQTlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdQU0JvSUNZZ01IaG1abVptT3lCa0lEMGdhQ0ErUGo0Z01UWTdYRzVjYmlBZ0lDQm9JRDBnYUdoYk0xMDdYRzRnSUNBZ2JDQTlJR2hzV3pOZE8xeHVYRzRnSUNBZ1lTQXJQU0JzSUNZZ01IaG1abVptT3lCaUlDczlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdLejBnYUNBbUlEQjRabVptWmpzZ1pDQXJQU0JvSUQ0K1BpQXhOanRjYmx4dUlDQWdJR0lnS3owZ1lTQStQajRnTVRZN1hHNGdJQ0FnWXlBclBTQmlJRDQrUGlBeE5qdGNiaUFnSUNCa0lDczlJR01nUGo0K0lERTJPMXh1WEc0Z0lDQWdhR2hiTTEwZ1BTQmhhRE1nUFNBb1l5QW1JREI0Wm1abVppa2dmQ0FvWkNBOFBDQXhOaWs3WEc0Z0lDQWdhR3hiTTEwZ1BTQmhiRE1nUFNBb1lTQW1JREI0Wm1abVppa2dmQ0FvWWlBOFBDQXhOaWs3WEc1Y2JpQWdJQ0JvSUQwZ1lXZzBPMXh1SUNBZ0lHd2dQU0JoYkRRN1hHNWNiaUFnSUNCaElEMGdiQ0FtSURCNFptWm1aanNnWWlBOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ1BTQm9JQ1lnTUhobVptWm1PeUJrSUQwZ2FDQStQajRnTVRZN1hHNWNiaUFnSUNCb0lEMGdhR2hiTkYwN1hHNGdJQ0FnYkNBOUlHaHNXelJkTzF4dVhHNGdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ0t6MGdhQ0FtSURCNFptWm1aanNnWkNBclBTQm9JRDQrUGlBeE5qdGNibHh1SUNBZ0lHSWdLejBnWVNBK1BqNGdNVFk3WEc0Z0lDQWdZeUFyUFNCaUlENCtQaUF4Tmp0Y2JpQWdJQ0JrSUNzOUlHTWdQajQrSURFMk8xeHVYRzRnSUNBZ2FHaGJORjBnUFNCaGFEUWdQU0FvWXlBbUlEQjRabVptWmlrZ2ZDQW9aQ0E4UENBeE5pazdYRzRnSUNBZ2FHeGJORjBnUFNCaGJEUWdQU0FvWVNBbUlEQjRabVptWmlrZ2ZDQW9ZaUE4UENBeE5pazdYRzVjYmlBZ0lDQm9JRDBnWVdnMU8xeHVJQ0FnSUd3Z1BTQmhiRFU3WEc1Y2JpQWdJQ0JoSUQwZ2JDQW1JREI0Wm1abVpqc2dZaUE5SUd3Z1BqNCtJREUyTzF4dUlDQWdJR01nUFNCb0lDWWdNSGhtWm1abU95QmtJRDBnYUNBK1BqNGdNVFk3WEc1Y2JpQWdJQ0JvSUQwZ2FHaGJOVjA3WEc0Z0lDQWdiQ0E5SUdoc1d6VmRPMXh1WEc0Z0lDQWdZU0FyUFNCc0lDWWdNSGhtWm1abU95QmlJQ3M5SUd3Z1BqNCtJREUyTzF4dUlDQWdJR01nS3owZ2FDQW1JREI0Wm1abVpqc2daQ0FyUFNCb0lENCtQaUF4Tmp0Y2JseHVJQ0FnSUdJZ0t6MGdZU0ErUGo0Z01UWTdYRzRnSUNBZ1l5QXJQU0JpSUQ0K1BpQXhOanRjYmlBZ0lDQmtJQ3M5SUdNZ1BqNCtJREUyTzF4dVhHNGdJQ0FnYUdoYk5WMGdQU0JoYURVZ1BTQW9ZeUFtSURCNFptWm1aaWtnZkNBb1pDQThQQ0F4TmlrN1hHNGdJQ0FnYUd4Yk5WMGdQU0JoYkRVZ1BTQW9ZU0FtSURCNFptWm1aaWtnZkNBb1lpQThQQ0F4TmlrN1hHNWNiaUFnSUNCb0lEMGdZV2cyTzF4dUlDQWdJR3dnUFNCaGJEWTdYRzVjYmlBZ0lDQmhJRDBnYkNBbUlEQjRabVptWmpzZ1lpQTlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdQU0JvSUNZZ01IaG1abVptT3lCa0lEMGdhQ0ErUGo0Z01UWTdYRzVjYmlBZ0lDQm9JRDBnYUdoYk5sMDdYRzRnSUNBZ2JDQTlJR2hzV3paZE8xeHVYRzRnSUNBZ1lTQXJQU0JzSUNZZ01IaG1abVptT3lCaUlDczlJR3dnUGo0K0lERTJPMXh1SUNBZ0lHTWdLejBnYUNBbUlEQjRabVptWmpzZ1pDQXJQU0JvSUQ0K1BpQXhOanRjYmx4dUlDQWdJR0lnS3owZ1lTQStQajRnTVRZN1hHNGdJQ0FnWXlBclBTQmlJRDQrUGlBeE5qdGNiaUFnSUNCa0lDczlJR01nUGo0K0lERTJPMXh1WEc0Z0lDQWdhR2hiTmwwZ1BTQmhhRFlnUFNBb1l5QW1JREI0Wm1abVppa2dmQ0FvWkNBOFBDQXhOaWs3WEc0Z0lDQWdhR3hiTmwwZ1BTQmhiRFlnUFNBb1lTQW1JREI0Wm1abVppa2dmQ0FvWWlBOFBDQXhOaWs3WEc1Y2JpQWdJQ0JvSUQwZ1lXZzNPMXh1SUNBZ0lHd2dQU0JoYkRjN1hHNWNiaUFnSUNCaElEMGdiQ0FtSURCNFptWm1aanNnWWlBOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ1BTQm9JQ1lnTUhobVptWm1PeUJrSUQwZ2FDQStQajRnTVRZN1hHNWNiaUFnSUNCb0lEMGdhR2hiTjEwN1hHNGdJQ0FnYkNBOUlHaHNXemRkTzF4dVhHNGdJQ0FnWVNBclBTQnNJQ1lnTUhobVptWm1PeUJpSUNzOUlHd2dQajQrSURFMk8xeHVJQ0FnSUdNZ0t6MGdhQ0FtSURCNFptWm1aanNnWkNBclBTQm9JRDQrUGlBeE5qdGNibHh1SUNBZ0lHSWdLejBnWVNBK1BqNGdNVFk3WEc0Z0lDQWdZeUFyUFNCaUlENCtQaUF4Tmp0Y2JpQWdJQ0JrSUNzOUlHTWdQajQrSURFMk8xeHVYRzRnSUNBZ2FHaGJOMTBnUFNCaGFEY2dQU0FvWXlBbUlEQjRabVptWmlrZ2ZDQW9aQ0E4UENBeE5pazdYRzRnSUNBZ2FHeGJOMTBnUFNCaGJEY2dQU0FvWVNBbUlEQjRabVptWmlrZ2ZDQW9ZaUE4UENBeE5pazdYRzVjYmlBZ0lDQndiM01nS3owZ01USTRPMXh1SUNBZ0lHNGdMVDBnTVRJNE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHNDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnllWEIwYjE5b1lYTm9LRzkxZEN3Z2JTd2diaWtnZTF4dUlDQjJZWElnYUdnZ1BTQnVaWGNnU1c1ME16SkJjbkpoZVNnNEtTeGNiaUFnSUNBZ0lHaHNJRDBnYm1WM0lFbHVkRE15UVhKeVlYa29PQ2tzWEc0Z0lDQWdJQ0I0SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvTWpVMktTeGNiaUFnSUNBZ0lHa3NJR0lnUFNCdU8xeHVYRzRnSUdob1d6QmRJRDBnTUhnMllUQTVaVFkyTnp0Y2JpQWdhR2hiTVYwZ1BTQXdlR0ppTmpkaFpUZzFPMXh1SUNCb2FGc3lYU0E5SURCNE0yTTJaV1l6TnpJN1hHNGdJR2hvV3pOZElEMGdNSGhoTlRSbVpqVXpZVHRjYmlBZ2FHaGJORjBnUFNBd2VEVXhNR1UxTWpkbU8xeHVJQ0JvYUZzMVhTQTlJREI0T1dJd05UWTRPR003WEc0Z0lHaG9XelpkSUQwZ01IZ3haamd6WkRsaFlqdGNiaUFnYUdoYk4xMGdQU0F3ZURWaVpUQmpaREU1TzF4dVhHNGdJR2hzV3pCZElEMGdNSGhtTTJKall6a3dPRHRjYmlBZ2FHeGJNVjBnUFNBd2VEZzBZMkZoTnpOaU8xeHVJQ0JvYkZzeVhTQTlJREI0Wm1VNU5HWTRNbUk3WEc0Z0lHaHNXek5kSUQwZ01IZzFaakZrTXpabU1UdGNiaUFnYUd4Yk5GMGdQU0F3ZUdGa1pUWTRNbVF4TzF4dUlDQm9iRnMxWFNBOUlEQjRNbUl6WlRaak1XWTdYRzRnSUdoc1d6WmRJRDBnTUhobVlqUXhZbVEyWWp0Y2JpQWdhR3hiTjEwZ1BTQXdlREV6TjJVeU1UYzVPMXh1WEc0Z0lHTnllWEIwYjE5b1lYTm9ZbXh2WTJ0elgyaHNLR2hvTENCb2JDd2diU3dnYmlrN1hHNGdJRzRnSlQwZ01USTRPMXh1WEc0Z0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCdU95QnBLeXNwSUhoYmFWMGdQU0J0VzJJdGJpdHBYVHRjYmlBZ2VGdHVYU0E5SURFeU9EdGNibHh1SUNCdUlEMGdNalUyTFRFeU9Db29iand4TVRJL01Ub3dLVHRjYmlBZ2VGdHVMVGxkSUQwZ01EdGNiaUFnZEhNMk5DaDRMQ0J1TFRnc0lDQW9ZaUF2SURCNE1qQXdNREF3TURBcElId2dNQ3dnWWlBOFBDQXpLVHRjYmlBZ1kzSjVjSFJ2WDJoaGMyaGliRzlqYTNOZmFHd29hR2dzSUdoc0xDQjRMQ0J1S1R0Y2JseHVJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2dPRHNnYVNzcktTQjBjelkwS0c5MWRDd2dPQ3BwTENCb2FGdHBYU3dnYUd4YmFWMHBPMXh1WEc0Z0lISmxkSFZ5YmlBd08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCaFpHUW9jQ3dnY1NrZ2UxeHVJQ0IyWVhJZ1lTQTlJR2RtS0Nrc0lHSWdQU0JuWmlncExDQmpJRDBnWjJZb0tTeGNiaUFnSUNBZ0lHUWdQU0JuWmlncExDQmxJRDBnWjJZb0tTd2daaUE5SUdkbUtDa3NYRzRnSUNBZ0lDQm5JRDBnWjJZb0tTd2dhQ0E5SUdkbUtDa3NJSFFnUFNCblppZ3BPMXh1WEc0Z0lGb29ZU3dnY0ZzeFhTd2djRnN3WFNrN1hHNGdJRm9vZEN3Z2NWc3hYU3dnY1Zzd1hTazdYRzRnSUUwb1lTd2dZU3dnZENrN1hHNGdJRUVvWWl3Z2NGc3dYU3dnY0ZzeFhTazdYRzRnSUVFb2RDd2djVnN3WFN3Z2NWc3hYU2s3WEc0Z0lFMG9ZaXdnWWl3Z2RDazdYRzRnSUUwb1l5d2djRnN6WFN3Z2NWc3pYU2s3WEc0Z0lFMG9ZeXdnWXl3Z1JESXBPMXh1SUNCTktHUXNJSEJiTWwwc0lIRmJNbDBwTzF4dUlDQkJLR1FzSUdRc0lHUXBPMXh1SUNCYUtHVXNJR0lzSUdFcE8xeHVJQ0JhS0dZc0lHUXNJR01wTzF4dUlDQkJLR2NzSUdRc0lHTXBPMXh1SUNCQktHZ3NJR0lzSUdFcE8xeHVYRzRnSUUwb2NGc3dYU3dnWlN3Z1ppazdYRzRnSUUwb2NGc3hYU3dnYUN3Z1p5azdYRzRnSUUwb2NGc3lYU3dnWnl3Z1ppazdYRzRnSUUwb2NGc3pYU3dnWlN3Z2FDazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTnpkMkZ3S0hBc0lIRXNJR0lwSUh0Y2JpQWdkbUZ5SUdrN1hHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNCelpXd3lOVFV4T1Nod1cybGRMQ0J4VzJsZExDQmlLVHRjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCd1lXTnJLSElzSUhBcElIdGNiaUFnZG1GeUlIUjRJRDBnWjJZb0tTd2dkSGtnUFNCblppZ3BMQ0I2YVNBOUlHZG1LQ2s3WEc0Z0lHbHVkakkxTlRFNUtIcHBMQ0J3V3pKZEtUdGNiaUFnVFNoMGVDd2djRnN3WFN3Z2Vta3BPMXh1SUNCTktIUjVMQ0J3V3pGZExDQjZhU2s3WEc0Z0lIQmhZMnN5TlRVeE9TaHlMQ0IwZVNrN1hHNGdJSEpiTXpGZElGNDlJSEJoY2pJMU5URTVLSFI0S1NBOFBDQTNPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpZMkZzWVhKdGRXeDBLSEFzSUhFc0lITXBJSHRjYmlBZ2RtRnlJR0lzSUdrN1hHNGdJSE5sZERJMU5URTVLSEJiTUYwc0lHZG1NQ2s3WEc0Z0lITmxkREkxTlRFNUtIQmJNVjBzSUdkbU1TazdYRzRnSUhObGRESTFOVEU1S0hCYk1sMHNJR2RtTVNrN1hHNGdJSE5sZERJMU5URTVLSEJiTTEwc0lHZG1NQ2s3WEc0Z0lHWnZjaUFvYVNBOUlESTFOVHNnYVNBK1BTQXdPeUF0TFdrcElIdGNiaUFnSUNCaUlEMGdLSE5iS0drdk9DbDhNRjBnUGo0Z0tHa21OeWtwSUNZZ01UdGNiaUFnSUNCamMzZGhjQ2h3TENCeExDQmlLVHRjYmlBZ0lDQmhaR1FvY1N3Z2NDazdYRzRnSUNBZ1lXUmtLSEFzSUhBcE8xeHVJQ0FnSUdOemQyRndLSEFzSUhFc0lHSXBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhOallXeGhjbUpoYzJVb2NDd2djeWtnZTF4dUlDQjJZWElnY1NBOUlGdG5aaWdwTENCblppZ3BMQ0JuWmlncExDQm5aaWdwWFR0Y2JpQWdjMlYwTWpVMU1Ua29jVnN3WFN3Z1dDazdYRzRnSUhObGRESTFOVEU1S0hGYk1WMHNJRmtwTzF4dUlDQnpaWFF5TlRVeE9TaHhXekpkTENCblpqRXBPMXh1SUNCTktIRmJNMTBzSUZnc0lGa3BPMXh1SUNCelkyRnNZWEp0ZFd4MEtIQXNJSEVzSUhNcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCamNubHdkRzlmYzJsbmJsOXJaWGx3WVdseUtIQnJMQ0J6YXl3Z2MyVmxaR1ZrS1NCN1hHNGdJSFpoY2lCa0lEMGdibVYzSUZWcGJuUTRRWEp5WVhrb05qUXBPMXh1SUNCMllYSWdjQ0E5SUZ0blppZ3BMQ0JuWmlncExDQm5aaWdwTENCblppZ3BYVHRjYmlBZ2RtRnlJR2s3WEc1Y2JpQWdhV1lnS0NGelpXVmtaV1FwSUhKaGJtUnZiV0o1ZEdWektITnJMQ0F6TWlrN1hHNGdJR055ZVhCMGIxOW9ZWE5vS0dRc0lITnJMQ0F6TWlrN1hHNGdJR1JiTUYwZ0pqMGdNalE0TzF4dUlDQmtXek14WFNBbVBTQXhNamM3WEc0Z0lHUmJNekZkSUh3OUlEWTBPMXh1WEc0Z0lITmpZV3hoY21KaGMyVW9jQ3dnWkNrN1hHNGdJSEJoWTJzb2NHc3NJSEFwTzF4dVhHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQXpNanNnYVNzcktTQnphMXRwS3pNeVhTQTlJSEJyVzJsZE8xeHVJQ0J5WlhSMWNtNGdNRHRjYm4xY2JseHVkbUZ5SUV3Z1BTQnVaWGNnUm14dllYUTJORUZ5Y21GNUtGc3dlR1ZrTENBd2VHUXpMQ0F3ZUdZMUxDQXdlRFZqTENBd2VERmhMQ0F3ZURZekxDQXdlREV5TENBd2VEVTRMQ0F3ZUdRMkxDQXdlRGxqTENBd2VHWTNMQ0F3ZUdFeUxDQXdlR1JsTENBd2VHWTVMQ0F3ZUdSbExDQXdlREUwTENBd0xDQXdMQ0F3TENBd0xDQXdMQ0F3TENBd0xDQXdMQ0F3TENBd0xDQXdMQ0F3TENBd0xDQXdMQ0F3TENBd2VERXdYU2s3WEc1Y2JtWjFibU4wYVc5dUlHMXZaRXdvY2l3Z2VDa2dlMXh1SUNCMllYSWdZMkZ5Y25rc0lHa3NJR29zSUdzN1hHNGdJR1p2Y2lBb2FTQTlJRFl6T3lCcElENDlJRE15T3lBdExXa3BJSHRjYmlBZ0lDQmpZWEp5ZVNBOUlEQTdYRzRnSUNBZ1ptOXlJQ2hxSUQwZ2FTQXRJRE15TENCcklEMGdhU0F0SURFeU95QnFJRHdnYXpzZ0t5dHFLU0I3WEc0Z0lDQWdJQ0I0VzJwZElDczlJR05oY25KNUlDMGdNVFlnS2lCNFcybGRJQ29nVEZ0cUlDMGdLR2tnTFNBek1pbGRPMXh1SUNBZ0lDQWdZMkZ5Y25rZ1BTQk5ZWFJvTG1ac2IyOXlLQ2g0VzJwZElDc2dNVEk0S1NBdklESTFOaWs3WEc0Z0lDQWdJQ0I0VzJwZElDMDlJR05oY25KNUlDb2dNalUyTzF4dUlDQWdJSDFjYmlBZ0lDQjRXMnBkSUNzOUlHTmhjbko1TzF4dUlDQWdJSGhiYVYwZ1BTQXdPMXh1SUNCOVhHNGdJR05oY25KNUlEMGdNRHRjYmlBZ1ptOXlJQ2hxSUQwZ01Ec2dhaUE4SURNeU95QnFLeXNwSUh0Y2JpQWdJQ0I0VzJwZElDczlJR05oY25KNUlDMGdLSGhiTXpGZElENCtJRFFwSUNvZ1RGdHFYVHRjYmlBZ0lDQmpZWEp5ZVNBOUlIaGJhbDBnUGo0Z09EdGNiaUFnSUNCNFcycGRJQ1k5SURJMU5UdGNiaUFnZlZ4dUlDQm1iM0lnS0dvZ1BTQXdPeUJxSUR3Z016STdJR29yS3lrZ2VGdHFYU0F0UFNCallYSnllU0FxSUV4YmFsMDdYRzRnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0F6TWpzZ2FTc3JLU0I3WEc0Z0lDQWdlRnRwS3pGZElDczlJSGhiYVYwZ1BqNGdPRHRjYmlBZ0lDQnlXMmxkSUQwZ2VGdHBYU0FtSURJMU5UdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WldSMVkyVW9jaWtnZTF4dUlDQjJZWElnZUNBOUlHNWxkeUJHYkc5aGREWTBRWEp5WVhrb05qUXBMQ0JwTzF4dUlDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z05qUTdJR2tyS3lrZ2VGdHBYU0E5SUhKYmFWMDdYRzRnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0EyTkRzZ2FTc3JLU0J5VzJsZElEMGdNRHRjYmlBZ2JXOWtUQ2h5TENCNEtUdGNibjFjYmx4dUx5OGdUbTkwWlRvZ1pHbG1abVZ5Wlc1alpTQm1jbTl0SUVNZ0xTQnpiV3hsYmlCeVpYUjFjbTVsWkN3Z2JtOTBJSEJoYzNObFpDQmhjeUJoY21kMWJXVnVkQzVjYm1aMWJtTjBhVzl1SUdOeWVYQjBiMTl6YVdkdUtITnRMQ0J0TENCdUxDQnpheWtnZTF4dUlDQjJZWElnWkNBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0RZMEtTd2dhQ0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLRFkwS1N3Z2NpQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtEWTBLVHRjYmlBZ2RtRnlJR2tzSUdvc0lIZ2dQU0J1WlhjZ1JteHZZWFEyTkVGeWNtRjVLRFkwS1R0Y2JpQWdkbUZ5SUhBZ1BTQmJaMllvS1N3Z1oyWW9LU3dnWjJZb0tTd2daMllvS1YwN1hHNWNiaUFnWTNKNWNIUnZYMmhoYzJnb1pDd2djMnNzSURNeUtUdGNiaUFnWkZzd1hTQW1QU0F5TkRnN1hHNGdJR1JiTXpGZElDWTlJREV5Tnp0Y2JpQWdaRnN6TVYwZ2ZEMGdOalE3WEc1Y2JpQWdkbUZ5SUhOdGJHVnVJRDBnYmlBcklEWTBPMXh1SUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYmpzZ2FTc3JLU0J6YlZzMk5DQXJJR2xkSUQwZ2JWdHBYVHRjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SURNeU95QnBLeXNwSUhOdFd6TXlJQ3NnYVYwZ1BTQmtXek15SUNzZ2FWMDdYRzVjYmlBZ1kzSjVjSFJ2WDJoaGMyZ29jaXdnYzIwdWMzVmlZWEp5WVhrb016SXBMQ0J1S3pNeUtUdGNiaUFnY21Wa2RXTmxLSElwTzF4dUlDQnpZMkZzWVhKaVlYTmxLSEFzSUhJcE8xeHVJQ0J3WVdOcktITnRMQ0J3S1R0Y2JseHVJQ0JtYjNJZ0tHa2dQU0F6TWpzZ2FTQThJRFkwT3lCcEt5c3BJSE50VzJsZElEMGdjMnRiYVYwN1hHNGdJR055ZVhCMGIxOW9ZWE5vS0dnc0lITnRMQ0J1SUNzZ05qUXBPMXh1SUNCeVpXUjFZMlVvYUNrN1hHNWNiaUFnWm05eUlDaHBJRDBnTURzZ2FTQThJRFkwT3lCcEt5c3BJSGhiYVYwZ1BTQXdPMXh1SUNCbWIzSWdLR2tnUFNBd095QnBJRHdnTXpJN0lHa3JLeWtnZUZ0cFhTQTlJSEpiYVYwN1hHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQXpNanNnYVNzcktTQjdYRzRnSUNBZ1ptOXlJQ2hxSUQwZ01Ec2dhaUE4SURNeU95QnFLeXNwSUh0Y2JpQWdJQ0FnSUhoYmFTdHFYU0FyUFNCb1cybGRJQ29nWkZ0cVhUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnRiMlJNS0hOdExuTjFZbUZ5Y21GNUtETXlLU3dnZUNrN1hHNGdJSEpsZEhWeWJpQnpiV3hsYmp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnZFc1d1lXTnJibVZuS0hJc0lIQXBJSHRjYmlBZ2RtRnlJSFFnUFNCblppZ3BMQ0JqYUdzZ1BTQm5aaWdwTENCdWRXMGdQU0JuWmlncExGeHVJQ0FnSUNBZ1pHVnVJRDBnWjJZb0tTd2daR1Z1TWlBOUlHZG1LQ2tzSUdSbGJqUWdQU0JuWmlncExGeHVJQ0FnSUNBZ1pHVnVOaUE5SUdkbUtDazdYRzVjYmlBZ2MyVjBNalUxTVRrb2Nsc3lYU3dnWjJZeEtUdGNiaUFnZFc1d1lXTnJNalUxTVRrb2Nsc3hYU3dnY0NrN1hHNGdJRk1vYm5WdExDQnlXekZkS1R0Y2JpQWdUU2hrWlc0c0lHNTFiU3dnUkNrN1hHNGdJRm9vYm5WdExDQnVkVzBzSUhKYk1sMHBPMXh1SUNCQktHUmxiaXdnY2xzeVhTd2daR1Z1S1R0Y2JseHVJQ0JUS0dSbGJqSXNJR1JsYmlrN1hHNGdJRk1vWkdWdU5Dd2daR1Z1TWlrN1hHNGdJRTBvWkdWdU5pd2daR1Z1TkN3Z1pHVnVNaWs3WEc0Z0lFMG9kQ3dnWkdWdU5pd2diblZ0S1R0Y2JpQWdUU2gwTENCMExDQmtaVzRwTzF4dVhHNGdJSEJ2ZHpJMU1qTW9kQ3dnZENrN1hHNGdJRTBvZEN3Z2RDd2diblZ0S1R0Y2JpQWdUU2gwTENCMExDQmtaVzRwTzF4dUlDQk5LSFFzSUhRc0lHUmxiaWs3WEc0Z0lFMG9jbHN3WFN3Z2RDd2daR1Z1S1R0Y2JseHVJQ0JUS0dOb2F5d2djbHN3WFNrN1hHNGdJRTBvWTJockxDQmphR3NzSUdSbGJpazdYRzRnSUdsbUlDaHVaWEV5TlRVeE9TaGphR3NzSUc1MWJTa3BJRTBvY2xzd1hTd2djbHN3WFN3Z1NTazdYRzVjYmlBZ1V5aGphR3NzSUhKYk1GMHBPMXh1SUNCTktHTm9heXdnWTJockxDQmtaVzRwTzF4dUlDQnBaaUFvYm1WeE1qVTFNVGtvWTJockxDQnVkVzBwS1NCeVpYUjFjbTRnTFRFN1hHNWNiaUFnYVdZZ0tIQmhjakkxTlRFNUtISmJNRjBwSUQwOVBTQW9jRnN6TVYwK1BqY3BLU0JhS0hKYk1GMHNJR2RtTUN3Z2Nsc3dYU2s3WEc1Y2JpQWdUU2h5V3pOZExDQnlXekJkTENCeVd6RmRLVHRjYmlBZ2NtVjBkWEp1SURBN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOeWVYQjBiMTl6YVdkdVgyOXdaVzRvYlN3Z2MyMHNJRzRzSUhCcktTQjdYRzRnSUhaaGNpQnBPMXh1SUNCMllYSWdkQ0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLRE15S1N3Z2FDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtEWTBLVHRjYmlBZ2RtRnlJSEFnUFNCYloyWW9LU3dnWjJZb0tTd2daMllvS1N3Z1oyWW9LVjBzWEc0Z0lDQWdJQ0J4SUQwZ1cyZG1LQ2tzSUdkbUtDa3NJR2RtS0Nrc0lHZG1LQ2xkTzF4dVhHNGdJR2xtSUNodUlEd2dOalFwSUhKbGRIVnliaUF0TVR0Y2JseHVJQ0JwWmlBb2RXNXdZV05yYm1WbktIRXNJSEJyS1NrZ2NtVjBkWEp1SUMweE8xeHVYRzRnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1T3lCcEt5c3BJRzFiYVYwZ1BTQnpiVnRwWFR0Y2JpQWdabTl5SUNocElEMGdNRHNnYVNBOElETXlPeUJwS3lzcElHMWJhU3N6TWwwZ1BTQndhMXRwWFR0Y2JpQWdZM0o1Y0hSdlgyaGhjMmdvYUN3Z2JTd2diaWs3WEc0Z0lISmxaSFZqWlNob0tUdGNiaUFnYzJOaGJHRnliWFZzZENod0xDQnhMQ0JvS1R0Y2JseHVJQ0J6WTJGc1lYSmlZWE5sS0hFc0lITnRMbk4xWW1GeWNtRjVLRE15S1NrN1hHNGdJR0ZrWkNod0xDQnhLVHRjYmlBZ2NHRmpheWgwTENCd0tUdGNibHh1SUNCdUlDMDlJRFkwTzF4dUlDQnBaaUFvWTNKNWNIUnZYM1psY21sbWVWOHpNaWh6YlN3Z01Dd2dkQ3dnTUNrcElIdGNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYmpzZ2FTc3JLU0J0VzJsZElEMGdNRHRjYmlBZ0lDQnlaWFIxY200Z0xURTdYRzRnSUgxY2JseHVJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2dianNnYVNzcktTQnRXMmxkSUQwZ2MyMWJhU0FySURZMFhUdGNiaUFnY21WMGRYSnVJRzQ3WEc1OVhHNWNiblpoY2lCamNubHdkRzlmYzJWamNtVjBZbTk0WDB0RldVSlpWRVZUSUQwZ016SXNYRzRnSUNBZ1kzSjVjSFJ2WDNObFkzSmxkR0p2ZUY5T1QwNURSVUpaVkVWVElEMGdNalFzWEc0Z0lDQWdZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOWFSVkpQUWxsVVJWTWdQU0F6TWl4Y2JpQWdJQ0JqY25sd2RHOWZjMlZqY21WMFltOTRYMEpQV0ZwRlVrOUNXVlJGVXlBOUlERTJMRnh1SUNBZ0lHTnllWEIwYjE5elkyRnNZWEp0ZFd4MFgwSlpWRVZUSUQwZ016SXNYRzRnSUNBZ1kzSjVjSFJ2WDNOallXeGhjbTExYkhSZlUwTkJURUZTUWxsVVJWTWdQU0F6TWl4Y2JpQWdJQ0JqY25sd2RHOWZZbTk0WDFCVlFreEpRMHRGV1VKWlZFVlRJRDBnTXpJc1hHNGdJQ0FnWTNKNWNIUnZYMkp2ZUY5VFJVTlNSVlJMUlZsQ1dWUkZVeUE5SURNeUxGeHVJQ0FnSUdOeWVYQjBiMTlpYjNoZlFrVkdUMUpGVGsxQ1dWUkZVeUE5SURNeUxGeHVJQ0FnSUdOeWVYQjBiMTlpYjNoZlRrOU9RMFZDV1ZSRlV5QTlJR055ZVhCMGIxOXpaV055WlhSaWIzaGZUazlPUTBWQ1dWUkZVeXhjYmlBZ0lDQmpjbmx3ZEc5ZlltOTRYMXBGVWs5Q1dWUkZVeUE5SUdOeWVYQjBiMTl6WldOeVpYUmliM2hmV2tWU1QwSlpWRVZUTEZ4dUlDQWdJR055ZVhCMGIxOWliM2hmUWs5WVdrVlNUMEpaVkVWVElEMGdZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOUNUMWhhUlZKUFFsbFVSVk1zWEc0Z0lDQWdZM0o1Y0hSdlgzTnBaMjVmUWxsVVJWTWdQU0EyTkN4Y2JpQWdJQ0JqY25sd2RHOWZjMmxuYmw5UVZVSk1TVU5MUlZsQ1dWUkZVeUE5SURNeUxGeHVJQ0FnSUdOeWVYQjBiMTl6YVdkdVgxTkZRMUpGVkV0RldVSlpWRVZUSUQwZ05qUXNYRzRnSUNBZ1kzSjVjSFJ2WDNOcFoyNWZVMFZGUkVKWlZFVlRJRDBnTXpJc1hHNGdJQ0FnWTNKNWNIUnZYMmhoYzJoZlFsbFVSVk1nUFNBMk5EdGNibHh1Ym1GamJDNXNiM2RzWlhabGJDQTlJSHRjYmlBZ1kzSjVjSFJ2WDJOdmNtVmZhSE5oYkhOaE1qQTZJR055ZVhCMGIxOWpiM0psWDJoellXeHpZVEl3TEZ4dUlDQmpjbmx3ZEc5ZmMzUnlaV0Z0WDNodmNqb2dZM0o1Y0hSdlgzTjBjbVZoYlY5NGIzSXNYRzRnSUdOeWVYQjBiMTl6ZEhKbFlXMDZJR055ZVhCMGIxOXpkSEpsWVcwc1hHNGdJR055ZVhCMGIxOXpkSEpsWVcxZmMyRnNjMkV5TUY5NGIzSTZJR055ZVhCMGIxOXpkSEpsWVcxZmMyRnNjMkV5TUY5NGIzSXNYRzRnSUdOeWVYQjBiMTl6ZEhKbFlXMWZjMkZzYzJFeU1Eb2dZM0o1Y0hSdlgzTjBjbVZoYlY5ellXeHpZVEl3TEZ4dUlDQmpjbmx3ZEc5ZmIyNWxkR2x0WldGMWRHZzZJR055ZVhCMGIxOXZibVYwYVcxbFlYVjBhQ3hjYmlBZ1kzSjVjSFJ2WDI5dVpYUnBiV1ZoZFhSb1gzWmxjbWxtZVRvZ1kzSjVjSFJ2WDI5dVpYUnBiV1ZoZFhSb1gzWmxjbWxtZVN4Y2JpQWdZM0o1Y0hSdlgzWmxjbWxtZVY4eE5qb2dZM0o1Y0hSdlgzWmxjbWxtZVY4eE5peGNiaUFnWTNKNWNIUnZYM1psY21sbWVWOHpNam9nWTNKNWNIUnZYM1psY21sbWVWOHpNaXhjYmlBZ1kzSjVjSFJ2WDNObFkzSmxkR0p2ZURvZ1kzSjVjSFJ2WDNObFkzSmxkR0p2ZUN4Y2JpQWdZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOXZjR1Z1T2lCamNubHdkRzlmYzJWamNtVjBZbTk0WDI5d1pXNHNYRzRnSUdOeWVYQjBiMTl6WTJGc1lYSnRkV3gwT2lCamNubHdkRzlmYzJOaGJHRnliWFZzZEN4Y2JpQWdZM0o1Y0hSdlgzTmpZV3hoY20xMWJIUmZZbUZ6WlRvZ1kzSjVjSFJ2WDNOallXeGhjbTExYkhSZlltRnpaU3hjYmlBZ1kzSjVjSFJ2WDJKdmVGOWlaV1p2Y21WdWJUb2dZM0o1Y0hSdlgySnZlRjlpWldadmNtVnViU3hjYmlBZ1kzSjVjSFJ2WDJKdmVGOWhablJsY201dE9pQmpjbmx3ZEc5ZlltOTRYMkZtZEdWeWJtMHNYRzRnSUdOeWVYQjBiMTlpYjNnNklHTnllWEIwYjE5aWIzZ3NYRzRnSUdOeWVYQjBiMTlpYjNoZmIzQmxiam9nWTNKNWNIUnZYMkp2ZUY5dmNHVnVMRnh1SUNCamNubHdkRzlmWW05NFgydGxlWEJoYVhJNklHTnllWEIwYjE5aWIzaGZhMlY1Y0dGcGNpeGNiaUFnWTNKNWNIUnZYMmhoYzJnNklHTnllWEIwYjE5b1lYTm9MRnh1SUNCamNubHdkRzlmYzJsbmJqb2dZM0o1Y0hSdlgzTnBaMjRzWEc0Z0lHTnllWEIwYjE5emFXZHVYMnRsZVhCaGFYSTZJR055ZVhCMGIxOXphV2R1WDJ0bGVYQmhhWElzWEc0Z0lHTnllWEIwYjE5emFXZHVYMjl3Wlc0NklHTnllWEIwYjE5emFXZHVYMjl3Wlc0c1hHNWNiaUFnWTNKNWNIUnZYM05sWTNKbGRHSnZlRjlMUlZsQ1dWUkZVem9nWTNKNWNIUnZYM05sWTNKbGRHSnZlRjlMUlZsQ1dWUkZVeXhjYmlBZ1kzSjVjSFJ2WDNObFkzSmxkR0p2ZUY5T1QwNURSVUpaVkVWVE9pQmpjbmx3ZEc5ZmMyVmpjbVYwWW05NFgwNVBUa05GUWxsVVJWTXNYRzRnSUdOeWVYQjBiMTl6WldOeVpYUmliM2hmV2tWU1QwSlpWRVZUT2lCamNubHdkRzlmYzJWamNtVjBZbTk0WDFwRlVrOUNXVlJGVXl4Y2JpQWdZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOUNUMWhhUlZKUFFsbFVSVk02SUdOeWVYQjBiMTl6WldOeVpYUmliM2hmUWs5WVdrVlNUMEpaVkVWVExGeHVJQ0JqY25sd2RHOWZjMk5oYkdGeWJYVnNkRjlDV1ZSRlV6b2dZM0o1Y0hSdlgzTmpZV3hoY20xMWJIUmZRbGxVUlZNc1hHNGdJR055ZVhCMGIxOXpZMkZzWVhKdGRXeDBYMU5EUVV4QlVrSlpWRVZUT2lCamNubHdkRzlmYzJOaGJHRnliWFZzZEY5VFEwRk1RVkpDV1ZSRlV5eGNiaUFnWTNKNWNIUnZYMkp2ZUY5UVZVSk1TVU5MUlZsQ1dWUkZVem9nWTNKNWNIUnZYMkp2ZUY5UVZVSk1TVU5MUlZsQ1dWUkZVeXhjYmlBZ1kzSjVjSFJ2WDJKdmVGOVRSVU5TUlZSTFJWbENXVlJGVXpvZ1kzSjVjSFJ2WDJKdmVGOVRSVU5TUlZSTFJWbENXVlJGVXl4Y2JpQWdZM0o1Y0hSdlgySnZlRjlDUlVaUFVrVk9UVUpaVkVWVE9pQmpjbmx3ZEc5ZlltOTRYMEpGUms5U1JVNU5RbGxVUlZNc1hHNGdJR055ZVhCMGIxOWliM2hmVGs5T1EwVkNXVlJGVXpvZ1kzSjVjSFJ2WDJKdmVGOU9UMDVEUlVKWlZFVlRMRnh1SUNCamNubHdkRzlmWW05NFgxcEZVazlDV1ZSRlV6b2dZM0o1Y0hSdlgySnZlRjlhUlZKUFFsbFVSVk1zWEc0Z0lHTnllWEIwYjE5aWIzaGZRazlZV2tWU1QwSlpWRVZUT2lCamNubHdkRzlmWW05NFgwSlBXRnBGVWs5Q1dWUkZVeXhjYmlBZ1kzSjVjSFJ2WDNOcFoyNWZRbGxVUlZNNklHTnllWEIwYjE5emFXZHVYMEpaVkVWVExGeHVJQ0JqY25sd2RHOWZjMmxuYmw5UVZVSk1TVU5MUlZsQ1dWUkZVem9nWTNKNWNIUnZYM05wWjI1ZlVGVkNURWxEUzBWWlFsbFVSVk1zWEc0Z0lHTnllWEIwYjE5emFXZHVYMU5GUTFKRlZFdEZXVUpaVkVWVE9pQmpjbmx3ZEc5ZmMybG5ibDlUUlVOU1JWUkxSVmxDV1ZSRlV5eGNiaUFnWTNKNWNIUnZYM05wWjI1ZlUwVkZSRUpaVkVWVE9pQmpjbmx3ZEc5ZmMybG5ibDlUUlVWRVFsbFVSVk1zWEc0Z0lHTnllWEIwYjE5b1lYTm9YMEpaVkVWVE9pQmpjbmx3ZEc5ZmFHRnphRjlDV1ZSRlV5eGNibHh1SUNCblpqb2daMllzWEc0Z0lFUTZJRVFzWEc0Z0lFdzZJRXdzWEc0Z0lIQmhZMnN5TlRVeE9Ub2djR0ZqYXpJMU5URTVMRnh1SUNCMWJuQmhZMnN5TlRVeE9Ub2dkVzV3WVdOck1qVTFNVGtzWEc0Z0lFMDZJRTBzWEc0Z0lFRTZJRUVzWEc0Z0lGTTZJRk1zWEc0Z0lGbzZJRm9zWEc0Z0lIQnZkekkxTWpNNklIQnZkekkxTWpNc1hHNGdJR0ZrWkRvZ1lXUmtMRnh1SUNCelpYUXlOVFV4T1RvZ2MyVjBNalUxTVRrc1hHNGdJRzF2WkV3NklHMXZaRXdzWEc0Z0lITmpZV3hoY20xMWJIUTZJSE5qWVd4aGNtMTFiSFFzWEc0Z0lITmpZV3hoY21KaGMyVTZJSE5qWVd4aGNtSmhjMlVzWEc1OU8xeHVYRzR2S2lCSWFXZG9MV3hsZG1Wc0lFRlFTU0FxTDF4dVhHNW1kVzVqZEdsdmJpQmphR1ZqYTB4bGJtZDBhSE1vYXl3Z2Jpa2dlMXh1SUNCcFppQW9heTVzWlc1bmRHZ2dJVDA5SUdOeWVYQjBiMTl6WldOeVpYUmliM2hmUzBWWlFsbFVSVk1wSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWW1Ga0lHdGxlU0J6YVhwbEp5azdYRzRnSUdsbUlDaHVMbXhsYm1kMGFDQWhQVDBnWTNKNWNIUnZYM05sWTNKbGRHSnZlRjlPVDA1RFJVSlpWRVZUS1NCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjJKaFpDQnViMjVqWlNCemFYcGxKeWs3WEc1OVhHNWNibVoxYm1OMGFXOXVJR05vWldOclFtOTRUR1Z1WjNSb2N5aHdheXdnYzJzcElIdGNiaUFnYVdZZ0tIQnJMbXhsYm1kMGFDQWhQVDBnWTNKNWNIUnZYMkp2ZUY5UVZVSk1TVU5MUlZsQ1dWUkZVeWtnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RpWVdRZ2NIVmliR2xqSUd0bGVTQnphWHBsSnlrN1hHNGdJR2xtSUNoemF5NXNaVzVuZEdnZ0lUMDlJR055ZVhCMGIxOWliM2hmVTBWRFVrVlVTMFZaUWxsVVJWTXBJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZbUZrSUhObFkzSmxkQ0JyWlhrZ2MybDZaU2NwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJqYUdWamEwRnljbUY1Vkhsd1pYTW9LU0I3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tDRW9ZWEpuZFcxbGJuUnpXMmxkSUdsdWMzUmhibU5sYjJZZ1ZXbHVkRGhCY25KaGVTa3BYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2QxYm1WNGNHVmpkR1ZrSUhSNWNHVXNJSFZ6WlNCVmFXNTBPRUZ5Y21GNUp5azdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNTFjQ2hoY25JcElIdGNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCaGNuSXViR1Z1WjNSb095QnBLeXNwSUdGeWNsdHBYU0E5SURBN1hHNTlYRzVjYm01aFkyd3VjbUZ1Wkc5dFFubDBaWE1nUFNCbWRXNWpkR2x2YmlodUtTQjdYRzRnSUhaaGNpQmlJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29iaWs3WEc0Z0lISmhibVJ2YldKNWRHVnpLR0lzSUc0cE8xeHVJQ0J5WlhSMWNtNGdZanRjYm4wN1hHNWNibTVoWTJ3dWMyVmpjbVYwWW05NElEMGdablZ1WTNScGIyNG9iWE5uTENCdWIyNWpaU3dnYTJWNUtTQjdYRzRnSUdOb1pXTnJRWEp5WVhsVWVYQmxjeWh0YzJjc0lHNXZibU5sTENCclpYa3BPMXh1SUNCamFHVmphMHhsYm1kMGFITW9hMlY1TENCdWIyNWpaU2s3WEc0Z0lIWmhjaUJ0SUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvWTNKNWNIUnZYM05sWTNKbGRHSnZlRjlhUlZKUFFsbFVSVk1nS3lCdGMyY3ViR1Z1WjNSb0tUdGNiaUFnZG1GeUlHTWdQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaHRMbXhsYm1kMGFDazdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JYTm5MbXhsYm1kMGFEc2dhU3NyS1NCdFcya3JZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOWFSVkpQUWxsVVJWTmRJRDBnYlhOblcybGRPMXh1SUNCamNubHdkRzlmYzJWamNtVjBZbTk0S0dNc0lHMHNJRzB1YkdWdVozUm9MQ0J1YjI1alpTd2dhMlY1S1R0Y2JpQWdjbVYwZFhKdUlHTXVjM1ZpWVhKeVlYa29ZM0o1Y0hSdlgzTmxZM0psZEdKdmVGOUNUMWhhUlZKUFFsbFVSVk1wTzF4dWZUdGNibHh1Ym1GamJDNXpaV055WlhSaWIzZ3ViM0JsYmlBOUlHWjFibU4wYVc5dUtHSnZlQ3dnYm05dVkyVXNJR3RsZVNrZ2UxeHVJQ0JqYUdWamEwRnljbUY1Vkhsd1pYTW9ZbTk0TENCdWIyNWpaU3dnYTJWNUtUdGNiaUFnWTJobFkydE1aVzVuZEdoektHdGxlU3dnYm05dVkyVXBPMXh1SUNCMllYSWdZeUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR055ZVhCMGIxOXpaV055WlhSaWIzaGZRazlZV2tWU1QwSlpWRVZUSUNzZ1ltOTRMbXhsYm1kMGFDazdYRzRnSUhaaGNpQnRJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29ZeTVzWlc1bmRHZ3BPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHSnZlQzVzWlc1bmRHZzdJR2tyS3lrZ1kxdHBLMk55ZVhCMGIxOXpaV055WlhSaWIzaGZRazlZV2tWU1QwSlpWRVZUWFNBOUlHSnZlRnRwWFR0Y2JpQWdhV1lnS0dNdWJHVnVaM1JvSUR3Z016SXBJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQnBaaUFvWTNKNWNIUnZYM05sWTNKbGRHSnZlRjl2Y0dWdUtHMHNJR01zSUdNdWJHVnVaM1JvTENCdWIyNWpaU3dnYTJWNUtTQWhQVDBnTUNrZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUhKbGRIVnliaUJ0TG5OMVltRnljbUY1S0dOeWVYQjBiMTl6WldOeVpYUmliM2hmV2tWU1QwSlpWRVZUS1R0Y2JuMDdYRzVjYm01aFkyd3VjMlZqY21WMFltOTRMbXRsZVV4bGJtZDBhQ0E5SUdOeWVYQjBiMTl6WldOeVpYUmliM2hmUzBWWlFsbFVSVk03WEc1dVlXTnNMbk5sWTNKbGRHSnZlQzV1YjI1alpVeGxibWQwYUNBOUlHTnllWEIwYjE5elpXTnlaWFJpYjNoZlRrOU9RMFZDV1ZSRlV6dGNibTVoWTJ3dWMyVmpjbVYwWW05NExtOTJaWEpvWldGa1RHVnVaM1JvSUQwZ1kzSjVjSFJ2WDNObFkzSmxkR0p2ZUY5Q1QxaGFSVkpQUWxsVVJWTTdYRzVjYm01aFkyd3VjMk5oYkdGeVRYVnNkQ0E5SUdaMWJtTjBhVzl1S0c0c0lIQXBJSHRjYmlBZ1kyaGxZMnRCY25KaGVWUjVjR1Z6S0c0c0lIQXBPMXh1SUNCcFppQW9iaTVzWlc1bmRHZ2dJVDA5SUdOeWVYQjBiMTl6WTJGc1lYSnRkV3gwWDFORFFVeEJVa0paVkVWVEtTQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oySmhaQ0J1SUhOcGVtVW5LVHRjYmlBZ2FXWWdLSEF1YkdWdVozUm9JQ0U5UFNCamNubHdkRzlmYzJOaGJHRnliWFZzZEY5Q1dWUkZVeWtnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RpWVdRZ2NDQnphWHBsSnlrN1hHNGdJSFpoY2lCeElEMGdibVYzSUZWcGJuUTRRWEp5WVhrb1kzSjVjSFJ2WDNOallXeGhjbTExYkhSZlFsbFVSVk1wTzF4dUlDQmpjbmx3ZEc5ZmMyTmhiR0Z5YlhWc2RDaHhMQ0J1TENCd0tUdGNiaUFnY21WMGRYSnVJSEU3WEc1OU8xeHVYRzV1WVdOc0xuTmpZV3hoY2sxMWJIUXVZbUZ6WlNBOUlHWjFibU4wYVc5dUtHNHBJSHRjYmlBZ1kyaGxZMnRCY25KaGVWUjVjR1Z6S0c0cE8xeHVJQ0JwWmlBb2JpNXNaVzVuZEdnZ0lUMDlJR055ZVhCMGIxOXpZMkZzWVhKdGRXeDBYMU5EUVV4QlVrSlpWRVZUS1NCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjJKaFpDQnVJSE5wZW1VbktUdGNiaUFnZG1GeUlIRWdQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGpjbmx3ZEc5ZmMyTmhiR0Z5YlhWc2RGOUNXVlJGVXlrN1hHNGdJR055ZVhCMGIxOXpZMkZzWVhKdGRXeDBYMkpoYzJVb2NTd2diaWs3WEc0Z0lISmxkSFZ5YmlCeE8xeHVmVHRjYmx4dWJtRmpiQzV6WTJGc1lYSk5kV3gwTG5OallXeGhja3hsYm1kMGFDQTlJR055ZVhCMGIxOXpZMkZzWVhKdGRXeDBYMU5EUVV4QlVrSlpWRVZUTzF4dWJtRmpiQzV6WTJGc1lYSk5kV3gwTG1keWIzVndSV3hsYldWdWRFeGxibWQwYUNBOUlHTnllWEIwYjE5elkyRnNZWEp0ZFd4MFgwSlpWRVZUTzF4dVhHNXVZV05zTG1KdmVDQTlJR1oxYm1OMGFXOXVLRzF6Wnl3Z2JtOXVZMlVzSUhCMVlteHBZMHRsZVN3Z2MyVmpjbVYwUzJWNUtTQjdYRzRnSUhaaGNpQnJJRDBnYm1GamJDNWliM2d1WW1WbWIzSmxLSEIxWW14cFkwdGxlU3dnYzJWamNtVjBTMlY1S1R0Y2JpQWdjbVYwZFhKdUlHNWhZMnd1YzJWamNtVjBZbTk0S0cxelp5d2dibTl1WTJVc0lHc3BPMXh1ZlR0Y2JseHVibUZqYkM1aWIzZ3VZbVZtYjNKbElEMGdablZ1WTNScGIyNG9jSFZpYkdsalMyVjVMQ0J6WldOeVpYUkxaWGtwSUh0Y2JpQWdZMmhsWTJ0QmNuSmhlVlI1Y0dWektIQjFZbXhwWTB0bGVTd2djMlZqY21WMFMyVjVLVHRjYmlBZ1kyaGxZMnRDYjNoTVpXNW5kR2h6S0hCMVlteHBZMHRsZVN3Z2MyVmpjbVYwUzJWNUtUdGNiaUFnZG1GeUlHc2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGpjbmx3ZEc5ZlltOTRYMEpGUms5U1JVNU5RbGxVUlZNcE8xeHVJQ0JqY25sd2RHOWZZbTk0WDJKbFptOXlaVzV0S0dzc0lIQjFZbXhwWTB0bGVTd2djMlZqY21WMFMyVjVLVHRjYmlBZ2NtVjBkWEp1SUdzN1hHNTlPMXh1WEc1dVlXTnNMbUp2ZUM1aFpuUmxjaUE5SUc1aFkyd3VjMlZqY21WMFltOTRPMXh1WEc1dVlXTnNMbUp2ZUM1dmNHVnVJRDBnWm5WdVkzUnBiMjRvYlhObkxDQnViMjVqWlN3Z2NIVmliR2xqUzJWNUxDQnpaV055WlhSTFpYa3BJSHRjYmlBZ2RtRnlJR3NnUFNCdVlXTnNMbUp2ZUM1aVpXWnZjbVVvY0hWaWJHbGpTMlY1TENCelpXTnlaWFJMWlhrcE8xeHVJQ0J5WlhSMWNtNGdibUZqYkM1elpXTnlaWFJpYjNndWIzQmxiaWh0YzJjc0lHNXZibU5sTENCcktUdGNibjA3WEc1Y2JtNWhZMnd1WW05NExtOXdaVzR1WVdaMFpYSWdQU0J1WVdOc0xuTmxZM0psZEdKdmVDNXZjR1Z1TzF4dVhHNXVZV05zTG1KdmVDNXJaWGxRWVdseUlEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lIWmhjaUJ3YXlBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0dOeWVYQjBiMTlpYjNoZlVGVkNURWxEUzBWWlFsbFVSVk1wTzF4dUlDQjJZWElnYzJzZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoamNubHdkRzlmWW05NFgxTkZRMUpGVkV0RldVSlpWRVZUS1R0Y2JpQWdZM0o1Y0hSdlgySnZlRjlyWlhsd1lXbHlLSEJyTENCemF5azdYRzRnSUhKbGRIVnliaUI3Y0hWaWJHbGpTMlY1T2lCd2F5d2djMlZqY21WMFMyVjVPaUJ6YTMwN1hHNTlPMXh1WEc1dVlXTnNMbUp2ZUM1clpYbFFZV2x5TG1aeWIyMVRaV055WlhSTFpYa2dQU0JtZFc1amRHbHZiaWh6WldOeVpYUkxaWGtwSUh0Y2JpQWdZMmhsWTJ0QmNuSmhlVlI1Y0dWektITmxZM0psZEV0bGVTazdYRzRnSUdsbUlDaHpaV055WlhSTFpYa3ViR1Z1WjNSb0lDRTlQU0JqY25sd2RHOWZZbTk0WDFORlExSkZWRXRGV1VKWlZFVlRLVnh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblltRmtJSE5sWTNKbGRDQnJaWGtnYzJsNlpTY3BPMXh1SUNCMllYSWdjR3NnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2hqY25sd2RHOWZZbTk0WDFCVlFreEpRMHRGV1VKWlZFVlRLVHRjYmlBZ1kzSjVjSFJ2WDNOallXeGhjbTExYkhSZlltRnpaU2h3YXl3Z2MyVmpjbVYwUzJWNUtUdGNiaUFnY21WMGRYSnVJSHR3ZFdKc2FXTkxaWGs2SUhCckxDQnpaV055WlhSTFpYazZJRzVsZHlCVmFXNTBPRUZ5Y21GNUtITmxZM0psZEV0bGVTbDlPMXh1ZlR0Y2JseHVibUZqYkM1aWIzZ3VjSFZpYkdsalMyVjVUR1Z1WjNSb0lEMGdZM0o1Y0hSdlgySnZlRjlRVlVKTVNVTkxSVmxDV1ZSRlV6dGNibTVoWTJ3dVltOTRMbk5sWTNKbGRFdGxlVXhsYm1kMGFDQTlJR055ZVhCMGIxOWliM2hmVTBWRFVrVlVTMFZaUWxsVVJWTTdYRzV1WVdOc0xtSnZlQzV6YUdGeVpXUkxaWGxNWlc1bmRHZ2dQU0JqY25sd2RHOWZZbTk0WDBKRlJrOVNSVTVOUWxsVVJWTTdYRzV1WVdOc0xtSnZlQzV1YjI1alpVeGxibWQwYUNBOUlHTnllWEIwYjE5aWIzaGZUazlPUTBWQ1dWUkZVenRjYm01aFkyd3VZbTk0TG05MlpYSm9aV0ZrVEdWdVozUm9JRDBnYm1GamJDNXpaV055WlhSaWIzZ3ViM1psY21obFlXUk1aVzVuZEdnN1hHNWNibTVoWTJ3dWMybG5iaUE5SUdaMWJtTjBhVzl1S0cxelp5d2djMlZqY21WMFMyVjVLU0I3WEc0Z0lHTm9aV05yUVhKeVlYbFVlWEJsY3lodGMyY3NJSE5sWTNKbGRFdGxlU2s3WEc0Z0lHbG1JQ2h6WldOeVpYUkxaWGt1YkdWdVozUm9JQ0U5UFNCamNubHdkRzlmYzJsbmJsOVRSVU5TUlZSTFJWbENXVlJGVXlsY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMkpoWkNCelpXTnlaWFFnYTJWNUlITnBlbVVuS1R0Y2JpQWdkbUZ5SUhOcFoyNWxaRTF6WnlBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0dOeWVYQjBiMTl6YVdkdVgwSlpWRVZUSzIxelp5NXNaVzVuZEdncE8xeHVJQ0JqY25sd2RHOWZjMmxuYmloemFXZHVaV1JOYzJjc0lHMXpaeXdnYlhObkxteGxibWQwYUN3Z2MyVmpjbVYwUzJWNUtUdGNiaUFnY21WMGRYSnVJSE5wWjI1bFpFMXpaenRjYm4wN1hHNWNibTVoWTJ3dWMybG5iaTV2Y0dWdUlEMGdablZ1WTNScGIyNG9jMmxuYm1Wa1RYTm5MQ0J3ZFdKc2FXTkxaWGtwSUh0Y2JpQWdZMmhsWTJ0QmNuSmhlVlI1Y0dWektITnBaMjVsWkUxelp5d2djSFZpYkdsalMyVjVLVHRjYmlBZ2FXWWdLSEIxWW14cFkwdGxlUzVzWlc1bmRHZ2dJVDA5SUdOeWVYQjBiMTl6YVdkdVgxQlZRa3hKUTB0RldVSlpWRVZUS1Z4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZbUZrSUhCMVlteHBZeUJyWlhrZ2MybDZaU2NwTzF4dUlDQjJZWElnZEcxd0lEMGdibVYzSUZWcGJuUTRRWEp5WVhrb2MybG5ibVZrVFhObkxteGxibWQwYUNrN1hHNGdJSFpoY2lCdGJHVnVJRDBnWTNKNWNIUnZYM05wWjI1ZmIzQmxiaWgwYlhBc0lITnBaMjVsWkUxelp5d2djMmxuYm1Wa1RYTm5MbXhsYm1kMGFDd2djSFZpYkdsalMyVjVLVHRjYmlBZ2FXWWdLRzFzWlc0Z1BDQXdLU0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdkbUZ5SUcwZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNodGJHVnVLVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnRMbXhsYm1kMGFEc2dhU3NyS1NCdFcybGRJRDBnZEcxd1cybGRPMXh1SUNCeVpYUjFjbTRnYlR0Y2JuMDdYRzVjYm01aFkyd3VjMmxuYmk1a1pYUmhZMmhsWkNBOUlHWjFibU4wYVc5dUtHMXpaeXdnYzJWamNtVjBTMlY1S1NCN1hHNGdJSFpoY2lCemFXZHVaV1JOYzJjZ1BTQnVZV05zTG5OcFoyNG9iWE5uTENCelpXTnlaWFJMWlhrcE8xeHVJQ0IyWVhJZ2MybG5JRDBnYm1WM0lGVnBiblE0UVhKeVlYa29ZM0o1Y0hSdlgzTnBaMjVmUWxsVVJWTXBPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITnBaeTVzWlc1bmRHZzdJR2tyS3lrZ2MybG5XMmxkSUQwZ2MybG5ibVZrVFhOblcybGRPMXh1SUNCeVpYUjFjbTRnYzJsbk8xeHVmVHRjYmx4dWJtRmpiQzV6YVdkdUxtUmxkR0ZqYUdWa0xuWmxjbWxtZVNBOUlHWjFibU4wYVc5dUtHMXpaeXdnYzJsbkxDQndkV0pzYVdOTFpYa3BJSHRjYmlBZ1kyaGxZMnRCY25KaGVWUjVjR1Z6S0cxelp5d2djMmxuTENCd2RXSnNhV05MWlhrcE8xeHVJQ0JwWmlBb2MybG5MbXhsYm1kMGFDQWhQVDBnWTNKNWNIUnZYM05wWjI1ZlFsbFVSVk1wWEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGlZV1FnYzJsbmJtRjBkWEpsSUhOcGVtVW5LVHRjYmlBZ2FXWWdLSEIxWW14cFkwdGxlUzVzWlc1bmRHZ2dJVDA5SUdOeWVYQjBiMTl6YVdkdVgxQlZRa3hKUTB0RldVSlpWRVZUS1Z4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZbUZrSUhCMVlteHBZeUJyWlhrZ2MybDZaU2NwTzF4dUlDQjJZWElnYzIwZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoamNubHdkRzlmYzJsbmJsOUNXVlJGVXlBcklHMXpaeTVzWlc1bmRHZ3BPMXh1SUNCMllYSWdiU0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR055ZVhCMGIxOXphV2R1WDBKWlZFVlRJQ3NnYlhObkxteGxibWQwYUNrN1hHNGdJSFpoY2lCcE8xeHVJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2dZM0o1Y0hSdlgzTnBaMjVmUWxsVVJWTTdJR2tyS3lrZ2MyMWJhVjBnUFNCemFXZGJhVjA3WEc0Z0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCdGMyY3ViR1Z1WjNSb095QnBLeXNwSUhOdFcya3JZM0o1Y0hSdlgzTnBaMjVmUWxsVVJWTmRJRDBnYlhOblcybGRPMXh1SUNCeVpYUjFjbTRnS0dOeWVYQjBiMTl6YVdkdVgyOXdaVzRvYlN3Z2MyMHNJSE50TG14bGJtZDBhQ3dnY0hWaWJHbGpTMlY1S1NBK1BTQXdLVHRjYm4wN1hHNWNibTVoWTJ3dWMybG5iaTVyWlhsUVlXbHlJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCd2F5QTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtHTnllWEIwYjE5emFXZHVYMUJWUWt4SlEwdEZXVUpaVkVWVEtUdGNiaUFnZG1GeUlITnJJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29ZM0o1Y0hSdlgzTnBaMjVmVTBWRFVrVlVTMFZaUWxsVVJWTXBPMXh1SUNCamNubHdkRzlmYzJsbmJsOXJaWGx3WVdseUtIQnJMQ0J6YXlrN1hHNGdJSEpsZEhWeWJpQjdjSFZpYkdsalMyVjVPaUJ3YXl3Z2MyVmpjbVYwUzJWNU9pQnphMzA3WEc1OU8xeHVYRzV1WVdOc0xuTnBaMjR1YTJWNVVHRnBjaTVtY205dFUyVmpjbVYwUzJWNUlEMGdablZ1WTNScGIyNG9jMlZqY21WMFMyVjVLU0I3WEc0Z0lHTm9aV05yUVhKeVlYbFVlWEJsY3loelpXTnlaWFJMWlhrcE8xeHVJQ0JwWmlBb2MyVmpjbVYwUzJWNUxteGxibWQwYUNBaFBUMGdZM0o1Y0hSdlgzTnBaMjVmVTBWRFVrVlVTMFZaUWxsVVJWTXBYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkaVlXUWdjMlZqY21WMElHdGxlU0J6YVhwbEp5azdYRzRnSUhaaGNpQndheUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR055ZVhCMGIxOXphV2R1WDFCVlFreEpRMHRGV1VKWlZFVlRLVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQndheTVzWlc1bmRHZzdJR2tyS3lrZ2NHdGJhVjBnUFNCelpXTnlaWFJMWlhsYk16SXJhVjA3WEc0Z0lISmxkSFZ5YmlCN2NIVmliR2xqUzJWNU9pQndheXdnYzJWamNtVjBTMlY1T2lCdVpYY2dWV2x1ZERoQmNuSmhlU2h6WldOeVpYUkxaWGtwZlR0Y2JuMDdYRzVjYm01aFkyd3VjMmxuYmk1clpYbFFZV2x5TG1aeWIyMVRaV1ZrSUQwZ1puVnVZM1JwYjI0b2MyVmxaQ2tnZTF4dUlDQmphR1ZqYTBGeWNtRjVWSGx3WlhNb2MyVmxaQ2s3WEc0Z0lHbG1JQ2h6WldWa0xteGxibWQwYUNBaFBUMGdZM0o1Y0hSdlgzTnBaMjVmVTBWRlJFSlpWRVZUS1Z4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZbUZrSUhObFpXUWdjMmw2WlNjcE8xeHVJQ0IyWVhJZ2NHc2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGpjbmx3ZEc5ZmMybG5ibDlRVlVKTVNVTkxSVmxDV1ZSRlV5azdYRzRnSUhaaGNpQnpheUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR055ZVhCMGIxOXphV2R1WDFORlExSkZWRXRGV1VKWlZFVlRLVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXpNanNnYVNzcktTQnphMXRwWFNBOUlITmxaV1JiYVYwN1hHNGdJR055ZVhCMGIxOXphV2R1WDJ0bGVYQmhhWElvY0dzc0lITnJMQ0IwY25WbEtUdGNiaUFnY21WMGRYSnVJSHR3ZFdKc2FXTkxaWGs2SUhCckxDQnpaV055WlhSTFpYazZJSE5yZlR0Y2JuMDdYRzVjYm01aFkyd3VjMmxuYmk1d2RXSnNhV05MWlhsTVpXNW5kR2dnUFNCamNubHdkRzlmYzJsbmJsOVFWVUpNU1VOTFJWbENXVlJGVXp0Y2JtNWhZMnd1YzJsbmJpNXpaV055WlhSTFpYbE1aVzVuZEdnZ1BTQmpjbmx3ZEc5ZmMybG5ibDlUUlVOU1JWUkxSVmxDV1ZSRlV6dGNibTVoWTJ3dWMybG5iaTV6WldWa1RHVnVaM1JvSUQwZ1kzSjVjSFJ2WDNOcFoyNWZVMFZGUkVKWlZFVlRPMXh1Ym1GamJDNXphV2R1TG5OcFoyNWhkSFZ5WlV4bGJtZDBhQ0E5SUdOeWVYQjBiMTl6YVdkdVgwSlpWRVZUTzF4dVhHNXVZV05zTG1oaGMyZ2dQU0JtZFc1amRHbHZiaWh0YzJjcElIdGNiaUFnWTJobFkydEJjbkpoZVZSNWNHVnpLRzF6WnlrN1hHNGdJSFpoY2lCb0lEMGdibVYzSUZWcGJuUTRRWEp5WVhrb1kzSjVjSFJ2WDJoaGMyaGZRbGxVUlZNcE8xeHVJQ0JqY25sd2RHOWZhR0Z6YUNob0xDQnRjMmNzSUcxelp5NXNaVzVuZEdncE8xeHVJQ0J5WlhSMWNtNGdhRHRjYm4wN1hHNWNibTVoWTJ3dWFHRnphQzVvWVhOb1RHVnVaM1JvSUQwZ1kzSjVjSFJ2WDJoaGMyaGZRbGxVUlZNN1hHNWNibTVoWTJ3dWRtVnlhV1o1SUQwZ1puVnVZM1JwYjI0b2VDd2dlU2tnZTF4dUlDQmphR1ZqYTBGeWNtRjVWSGx3WlhNb2VDd2dlU2s3WEc0Z0lDOHZJRnBsY204Z2JHVnVaM1JvSUdGeVozVnRaVzUwY3lCaGNtVWdZMjl1YzJsa1pYSmxaQ0J1YjNRZ1pYRjFZV3d1WEc0Z0lHbG1JQ2g0TG14bGJtZDBhQ0E5UFQwZ01DQjhmQ0I1TG14bGJtZDBhQ0E5UFQwZ01Da2djbVYwZFhKdUlHWmhiSE5sTzF4dUlDQnBaaUFvZUM1c1pXNW5kR2dnSVQwOUlIa3ViR1Z1WjNSb0tTQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lISmxkSFZ5YmlBb2RtNG9lQ3dnTUN3Z2VTd2dNQ3dnZUM1c1pXNW5kR2dwSUQwOVBTQXdLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibjA3WEc1Y2JtNWhZMnd1YzJWMFVGSk9SeUE5SUdaMWJtTjBhVzl1S0dadUtTQjdYRzRnSUhKaGJtUnZiV0o1ZEdWeklEMGdabTQ3WEc1OU8xeHVYRzRvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQzh2SUVsdWFYUnBZV3hwZW1VZ1VGSk9SeUJwWmlCbGJuWnBjbTl1YldWdWRDQndjbTkyYVdSbGN5QkRVMUJTVGtjdVhHNGdJQzh2SUVsbUlHNXZkQ3dnYldWMGFHOWtjeUJqWVd4c2FXNW5JSEpoYm1SdmJXSjVkR1Z6SUhkcGJHd2dkR2h5YjNjdVhHNGdJSFpoY2lCamNubHdkRzhnUFNCMGVYQmxiMllnYzJWc1ppQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ1B5QW9jMlZzWmk1amNubHdkRzhnZkh3Z2MyVnNaaTV0YzBOeWVYQjBieWtnT2lCdWRXeHNPMXh1SUNCcFppQW9ZM0o1Y0hSdklDWW1JR055ZVhCMGJ5NW5aWFJTWVc1a2IyMVdZV3gxWlhNcElIdGNiaUFnSUNBdkx5QkNjbTkzYzJWeWN5NWNiaUFnSUNCMllYSWdVVlZQVkVFZ1BTQTJOVFV6Tmp0Y2JpQWdJQ0J1WVdOc0xuTmxkRkJTVGtjb1puVnVZM1JwYjI0b2VDd2diaWtnZTF4dUlDQWdJQ0FnZG1GeUlHa3NJSFlnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2h1S1R0Y2JpQWdJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1T3lCcElDczlJRkZWVDFSQktTQjdYRzRnSUNBZ0lDQWdJR055ZVhCMGJ5NW5aWFJTWVc1a2IyMVdZV3gxWlhNb2RpNXpkV0poY25KaGVTaHBMQ0JwSUNzZ1RXRjBhQzV0YVc0b2JpQXRJR2tzSUZGVlQxUkJLU2twTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzQ3SUdrckt5a2dlRnRwWFNBOUlIWmJhVjA3WEc0Z0lDQWdJQ0JqYkdWaGJuVndLSFlwTzF4dUlDQWdJSDBwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnlaWEYxYVhKbElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUM4dklFNXZaR1V1YW5NdVhHNGdJQ0FnWTNKNWNIUnZJRDBnY21WeGRXbHlaU2duWTNKNWNIUnZKeWs3WEc0Z0lDQWdhV1lnS0dOeWVYQjBieUFtSmlCamNubHdkRzh1Y21GdVpHOXRRbmwwWlhNcElIdGNiaUFnSUNBZ0lHNWhZMnd1YzJWMFVGSk9SeWhtZFc1amRHbHZiaWg0TENCdUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCcExDQjJJRDBnWTNKNWNIUnZMbkpoYm1SdmJVSjVkR1Z6S0c0cE8xeHVJQ0FnSUNBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2Jqc2dhU3NyS1NCNFcybGRJRDBnZGx0cFhUdGNiaUFnSUNBZ0lDQWdZMnhsWVc1MWNDaDJLVHRjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmU2tvS1R0Y2JseHVmU2tvZEhsd1pXOW1JRzF2WkhWc1pTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdiVzlrZFd4bExtVjRjRzl5ZEhNZ1B5QnRiMlIxYkdVdVpYaHdiM0owY3lBNklDaHpaV3htTG01aFkyd2dQU0J6Wld4bUxtNWhZMndnZkh3Z2UzMHBLVHRjYmlJc0luWmhjaUJ1WVhScGRtVWdQU0J5WlhGMWFYSmxLQ2N1TDI1aGRHbDJaU2NwWEc1Y2JtWjFibU4wYVc5dUlHZGxkRlI1Y0dWT1lXMWxJQ2htYmlrZ2UxeHVJQ0J5WlhSMWNtNGdabTR1Ym1GdFpTQjhmQ0JtYmk1MGIxTjBjbWx1WnlncExtMWhkR05vS0M5bWRXNWpkR2x2YmlBb0xpby9LVnhjY3lwY1hDZ3ZLVnN4WFZ4dWZWeHVYRzVtZFc1amRHbHZiaUJuWlhSV1lXeDFaVlI1Y0dWT1lXMWxJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYm1GMGFYWmxMazVwYkNoMllXeDFaU2tnUHlBbkp5QTZJR2RsZEZSNWNHVk9ZVzFsS0haaGJIVmxMbU52Ym5OMGNuVmpkRzl5S1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJuWlhSV1lXeDFaU0FvZG1Gc2RXVXBJSHRjYmlBZ2FXWWdLRzVoZEdsMlpTNUdkVzVqZEdsdmJpaDJZV3gxWlNrcElISmxkSFZ5YmlBbkoxeHVJQ0JwWmlBb2JtRjBhWFpsTGxOMGNtbHVaeWgyWVd4MVpTa3BJSEpsZEhWeWJpQktVMDlPTG5OMGNtbHVaMmxtZVNoMllXeDFaU2xjYmlBZ2FXWWdLSFpoYkhWbElDWW1JRzVoZEdsMlpTNVBZbXBsWTNRb2RtRnNkV1VwS1NCeVpYUjFjbTRnSnlkY2JpQWdjbVYwZFhKdUlIWmhiSFZsWEc1OVhHNWNibVoxYm1OMGFXOXVJR05oY0hSMWNtVlRkR0ZqYTFSeVlXTmxJQ2hsTENCMEtTQjdYRzRnSUdsbUlDaEZjbkp2Y2k1allYQjBkWEpsVTNSaFkydFVjbUZqWlNrZ2UxeHVJQ0FnSUVWeWNtOXlMbU5oY0hSMWNtVlRkR0ZqYTFSeVlXTmxLR1VzSUhRcFhHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdkR1pLVTA5T0lDaDBlWEJsS1NCN1hHNGdJR2xtSUNodVlYUnBkbVV1Um5WdVkzUnBiMjRvZEhsd1pTa3BJSEpsZEhWeWJpQjBlWEJsTG5SdlNsTlBUaUEvSUhSNWNHVXVkRzlLVTA5T0tDa2dPaUJuWlhSVWVYQmxUbUZ0WlNoMGVYQmxLVnh1SUNCcFppQW9ibUYwYVhabExrRnljbUY1S0hSNWNHVXBLU0J5WlhSMWNtNGdKMEZ5Y21GNUoxeHVJQ0JwWmlBb2RIbHdaU0FtSmlCdVlYUnBkbVV1VDJKcVpXTjBLSFI1Y0dVcEtTQnlaWFIxY200Z0owOWlhbVZqZENkY2JseHVJQ0J5WlhSMWNtNGdkSGx3WlNBaFBUMGdkVzVrWldacGJtVmtJRDhnZEhsd1pTQTZJQ2NuWEc1OVhHNWNibVoxYm1OMGFXOXVJSFJtUlhKeWIzSlRkSEpwYm1jZ0tIUjVjR1VzSUhaaGJIVmxMQ0IyWVd4MVpWUjVjR1ZPWVcxbEtTQjdYRzRnSUhaaGNpQjJZV3gxWlVwemIyNGdQU0JuWlhSV1lXeDFaU2gyWVd4MVpTbGNibHh1SUNCeVpYUjFjbTRnSjBWNGNHVmpkR1ZrSUNjZ0t5QjBaa3BUVDA0b2RIbHdaU2tnS3lBbkxDQm5iM1FuSUN0Y2JpQWdJQ0FvZG1Gc2RXVlVlWEJsVG1GdFpTQWhQVDBnSnljZ1B5QW5JQ2NnS3lCMllXeDFaVlI1Y0dWT1lXMWxJRG9nSnljcElDdGNiaUFnSUNBb2RtRnNkV1ZLYzI5dUlDRTlQU0FuSnlBL0lDY2dKeUFySUhaaGJIVmxTbk52YmlBNklDY25LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlVabFI1Y0dWRmNuSnZjaUFvZEhsd1pTd2dkbUZzZFdVc0lIWmhiSFZsVkhsd1pVNWhiV1VwSUh0Y2JpQWdkbUZzZFdWVWVYQmxUbUZ0WlNBOUlIWmhiSFZsVkhsd1pVNWhiV1VnZkh3Z1oyVjBWbUZzZFdWVWVYQmxUbUZ0WlNoMllXeDFaU2xjYmlBZ2RHaHBjeTV0WlhOellXZGxJRDBnZEdaRmNuSnZjbE4wY21sdVp5aDBlWEJsTENCMllXeDFaU3dnZG1Gc2RXVlVlWEJsVG1GdFpTbGNibHh1SUNCallYQjBkWEpsVTNSaFkydFVjbUZqWlNoMGFHbHpMQ0JVWmxSNWNHVkZjbkp2Y2lsY2JpQWdkR2hwY3k1ZlgzUjVjR1VnUFNCMGVYQmxYRzRnSUhSb2FYTXVYMTkyWVd4MVpTQTlJSFpoYkhWbFhHNGdJSFJvYVhNdVgxOTJZV3gxWlZSNWNHVk9ZVzFsSUQwZ2RtRnNkV1ZVZVhCbFRtRnRaVnh1ZlZ4dVhHNVVabFI1Y0dWRmNuSnZjaTV3Y205MGIzUjVjR1VnUFNCUFltcGxZM1F1WTNKbFlYUmxLRVZ5Y205eUxuQnliM1J2ZEhsd1pTbGNibFJtVkhsd1pVVnljbTl5TG5CeWIzUnZkSGx3WlM1amIyNXpkSEoxWTNSdmNpQTlJRlJtVkhsd1pVVnljbTl5WEc1Y2JtWjFibU4wYVc5dUlIUm1VSEp2Y0dWeWRIbEZjbkp2Y2xOMGNtbHVaeUFvZEhsd1pTd2diR0ZpWld3c0lHNWhiV1VzSUhaaGJIVmxMQ0IyWVd4MVpWUjVjR1ZPWVcxbEtTQjdYRzRnSUhaaGNpQmtaWE5qY21sd2RHbHZiaUE5SUNkY0lpQnZaaUIwZVhCbElDZGNiaUFnYVdZZ0tHeGhZbVZzSUQwOVBTQW5hMlY1SnlrZ1pHVnpZM0pwY0hScGIyNGdQU0FuWENJZ2QybDBhQ0JyWlhrZ2RIbHdaU0FuWEc1Y2JpQWdjbVYwZFhKdUlIUm1SWEp5YjNKVGRISnBibWNvSjNCeWIzQmxjblI1SUZ3aUp5QXJJSFJtU2xOUFRpaHVZVzFsS1NBcklHUmxjMk55YVhCMGFXOXVJQ3NnZEdaS1UwOU9LSFI1Y0dVcExDQjJZV3gxWlN3Z2RtRnNkV1ZVZVhCbFRtRnRaU2xjYm4xY2JseHVablZ1WTNScGIyNGdWR1pRY205d1pYSjBlVlI1Y0dWRmNuSnZjaUFvZEhsd1pTd2djSEp2Y0dWeWRIa3NJR3hoWW1Wc0xDQjJZV3gxWlN3Z2RtRnNkV1ZVZVhCbFRtRnRaU2tnZTF4dUlDQnBaaUFvZEhsd1pTa2dlMXh1SUNBZ0lIWmhiSFZsVkhsd1pVNWhiV1VnUFNCMllXeDFaVlI1Y0dWT1lXMWxJSHg4SUdkbGRGWmhiSFZsVkhsd1pVNWhiV1VvZG1Gc2RXVXBYRzRnSUNBZ2RHaHBjeTV0WlhOellXZGxJRDBnZEdaUWNtOXdaWEowZVVWeWNtOXlVM1J5YVc1bktIUjVjR1VzSUd4aFltVnNMQ0J3Y205d1pYSjBlU3dnZG1Gc2RXVXNJSFpoYkhWbFZIbHdaVTVoYldVcFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2RHaHBjeTV0WlhOellXZGxJRDBnSjFWdVpYaHdaV04wWldRZ2NISnZjR1Z5ZEhrZ1hDSW5JQ3NnY0hKdmNHVnlkSGtnS3lBblhDSW5YRzRnSUgxY2JseHVJQ0JqWVhCMGRYSmxVM1JoWTJ0VWNtRmpaU2gwYUdsekxDQlVabFI1Y0dWRmNuSnZjaWxjYmlBZ2RHaHBjeTVmWDJ4aFltVnNJRDBnYkdGaVpXeGNiaUFnZEdocGN5NWZYM0J5YjNCbGNuUjVJRDBnY0hKdmNHVnlkSGxjYmlBZ2RHaHBjeTVmWDNSNWNHVWdQU0IwZVhCbFhHNGdJSFJvYVhNdVgxOTJZV3gxWlNBOUlIWmhiSFZsWEc0Z0lIUm9hWE11WDE5MllXeDFaVlI1Y0dWT1lXMWxJRDBnZG1Gc2RXVlVlWEJsVG1GdFpWeHVmVnh1WEc1VVpsQnliM0JsY25SNVZIbHdaVVZ5Y205eUxuQnliM1J2ZEhsd1pTQTlJRTlpYW1WamRDNWpjbVZoZEdVb1JYSnliM0l1Y0hKdmRHOTBlWEJsS1Z4dVZHWlFjbTl3WlhKMGVWUjVjR1ZGY25KdmNpNXdjbTkwYjNSNWNHVXVZMjl1YzNSeWRXTjBiM0lnUFNCVVpsUjVjR1ZGY25KdmNseHVYRzVtZFc1amRHbHZiaUIwWmtOMWMzUnZiVVZ5Y205eUlDaGxlSEJsWTNSbFpDd2dZV04wZFdGc0tTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ZHWlVlWEJsUlhKeWIzSW9aWGh3WldOMFpXUXNJSHQ5TENCaFkzUjFZV3dwWEc1OVhHNWNibVoxYm1OMGFXOXVJSFJtVTNWaVJYSnliM0lnS0dVc0lIQnliM0JsY25SNUxDQnNZV0psYkNrZ2UxeHVJQ0F2THlCemRXSWdZMmhwYkdRL1hHNGdJR2xtSUNobElHbHVjM1JoYm1ObGIyWWdWR1pRY205d1pYSjBlVlI1Y0dWRmNuSnZjaWtnZTF4dUlDQWdJSEJ5YjNCbGNuUjVJRDBnY0hKdmNHVnlkSGtnS3lBbkxpY2dLeUJsTGw5ZmNISnZjR1Z5ZEhsY2JseHVJQ0FnSUdVZ1BTQnVaWGNnVkdaUWNtOXdaWEowZVZSNWNHVkZjbkp2Y2loY2JpQWdJQ0FnSUdVdVgxOTBlWEJsTENCd2NtOXdaWEowZVN3Z1pTNWZYMnhoWW1Wc0xDQmxMbDlmZG1Gc2RXVXNJR1V1WDE5MllXeDFaVlI1Y0dWT1lXMWxYRzRnSUNBZ0tWeHVYRzRnSUM4dklHTm9hV3hrUDF4dUlDQjlJR1ZzYzJVZ2FXWWdLR1VnYVc1emRHRnVZMlZ2WmlCVVpsUjVjR1ZGY25KdmNpa2dlMXh1SUNBZ0lHVWdQU0J1WlhjZ1ZHWlFjbTl3WlhKMGVWUjVjR1ZGY25KdmNpaGNiaUFnSUNBZ0lHVXVYMTkwZVhCbExDQndjbTl3WlhKMGVTd2diR0ZpWld3c0lHVXVYMTkyWVd4MVpTd2daUzVmWDNaaGJIVmxWSGx3WlU1aGJXVmNiaUFnSUNBcFhHNGdJSDFjYmx4dUlDQmpZWEIwZFhKbFUzUmhZMnRVY21GalpTaGxLVnh1SUNCeVpYUjFjbTRnWlZ4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ1ZHWlVlWEJsUlhKeWIzSTZJRlJtVkhsd1pVVnljbTl5TEZ4dUlDQlVabEJ5YjNCbGNuUjVWSGx3WlVWeWNtOXlPaUJVWmxCeWIzQmxjblI1Vkhsd1pVVnljbTl5TEZ4dUlDQjBaa04xYzNSdmJVVnljbTl5T2lCMFprTjFjM1J2YlVWeWNtOXlMRnh1SUNCMFpsTjFZa1Z5Y205eU9pQjBabE4xWWtWeWNtOXlMRnh1SUNCMFprcFRUMDQ2SUhSbVNsTlBUaXhjYmlBZ1oyVjBWbUZzZFdWVWVYQmxUbUZ0WlRvZ1oyVjBWbUZzZFdWVWVYQmxUbUZ0WlZ4dWZWeHVJaXdpZG1GeUlFNUJWRWxXUlNBOUlISmxjWFZwY21Vb0p5NHZibUYwYVhabEp5bGNiblpoY2lCRlVsSlBVbE1nUFNCeVpYRjFhWEpsS0NjdUwyVnljbTl5Y3ljcFhHNWNibVoxYm1OMGFXOXVJRjlDZFdabVpYSWdLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUJDZFdabVpYSXVhWE5DZFdabVpYSW9kbUZzZFdVcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUVobGVDQW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKM04wY21sdVp5Y2dKaVlnTDE0b1d6QXRPV0V0WmwxN01uMHBLeVF2YVM1MFpYTjBLSFpoYkhWbEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCZlRHVnVaM1JvVGlBb2RIbHdaU3dnYkdWdVozUm9LU0I3WEc0Z0lIWmhjaUJ1WVcxbElEMGdkSGx3WlM1MGIwcFRUMDRvS1Z4dVhHNGdJR1oxYm1OMGFXOXVJRXhsYm1kMGFDQW9kbUZzZFdVcElIdGNiaUFnSUNCcFppQW9JWFI1Y0dVb2RtRnNkV1VwS1NCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNCcFppQW9kbUZzZFdVdWJHVnVaM1JvSUQwOVBTQnNaVzVuZEdncElISmxkSFZ5YmlCMGNuVmxYRzVjYmlBZ0lDQjBhSEp2ZHlCRlVsSlBVbE11ZEdaRGRYTjBiMjFGY25KdmNpaHVZVzFsSUNzZ0p5aE1aVzVuZEdnNklDY2dLeUJzWlc1bmRHZ2dLeUFuS1Njc0lHNWhiV1VnS3lBbktFeGxibWQwYURvZ0p5QXJJSFpoYkhWbExteGxibWQwYUNBcklDY3BKeWxjYmlBZ2ZWeHVJQ0JNWlc1bmRHZ3VkRzlLVTA5T0lEMGdablZ1WTNScGIyNGdLQ2tnZXlCeVpYUjFjbTRnYm1GdFpTQjlYRzVjYmlBZ2NtVjBkWEp1SUV4bGJtZDBhRnh1ZlZ4dVhHNTJZWElnWDBGeWNtRjVUaUE5SUY5TVpXNW5kR2hPTG1KcGJtUW9iblZzYkN3Z1RrRlVTVlpGTGtGeWNtRjVLVnh1ZG1GeUlGOUNkV1ptWlhKT0lEMGdYMHhsYm1kMGFFNHVZbWx1WkNodWRXeHNMQ0JmUW5WbVptVnlLVnh1ZG1GeUlGOUlaWGhPSUQwZ1gweGxibWQwYUU0dVltbHVaQ2h1ZFd4c0xDQklaWGdwWEc1MllYSWdYMU4wY21sdVowNGdQU0JmVEdWdVozUm9UaTVpYVc1a0tHNTFiR3dzSUU1QlZFbFdSUzVUZEhKcGJtY3BYRzVjYm1aMWJtTjBhVzl1SUZKaGJtZGxJQ2hoTENCaUxDQm1LU0I3WEc0Z0lHWWdQU0JtSUh4OElFNUJWRWxXUlM1T2RXMWlaWEpjYmlBZ1puVnVZM1JwYjI0Z1gzSmhibWRsSUNoMllXeDFaU3dnYzNSeWFXTjBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWW9kbUZzZFdVc0lITjBjbWxqZENrZ0ppWWdLSFpoYkhWbElENGdZU2tnSmlZZ0tIWmhiSFZsSUR3Z1lpbGNiaUFnZlZ4dUlDQmZjbUZ1WjJVdWRHOUtVMDlPSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCZ0pIdG1MblJ2U2xOUFRpZ3BmU0JpWlhSM1pXVnVJRnNrZTJGOUxDQWtlMko5WFdCY2JpQWdmVnh1SUNCeVpYUjFjbTRnWDNKaGJtZGxYRzU5WEc1Y2JuWmhjaUJKVGxRMU0xOU5RVmdnUFNCTllYUm9MbkJ2ZHlneUxDQTFNeWtnTFNBeFhHNWNibVoxYm1OMGFXOXVJRVpwYm1sMFpTQW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjUxYldKbGNpY2dKaVlnYVhOR2FXNXBkR1VvZG1Gc2RXVXBYRzU5WEc1bWRXNWpkR2x2YmlCSmJuUTRJQ2gyWVd4MVpTa2dleUJ5WlhSMWNtNGdLQ2gyWVd4MVpTQThQQ0F5TkNrZ1BqNGdNalFwSUQwOVBTQjJZV3gxWlNCOVhHNW1kVzVqZEdsdmJpQkpiblF4TmlBb2RtRnNkV1VwSUhzZ2NtVjBkWEp1SUNnb2RtRnNkV1VnUER3Z01UWXBJRDQrSURFMktTQTlQVDBnZG1Gc2RXVWdmVnh1Wm5WdVkzUnBiMjRnU1c1ME16SWdLSFpoYkhWbEtTQjdJSEpsZEhWeWJpQW9kbUZzZFdVZ2ZDQXdLU0E5UFQwZ2RtRnNkV1VnZlZ4dVpuVnVZM1JwYjI0Z1NXNTBOVE1nS0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdWRXMWlaWEluSUNZbVhHNGdJQ0FnZG1Gc2RXVWdQajBnTFVsT1ZEVXpYMDFCV0NBbUpseHVJQ0FnSUhaaGJIVmxJRHc5SUVsT1ZEVXpYMDFCV0NBbUpseHVJQ0FnSUUxaGRHZ3VabXh2YjNJb2RtRnNkV1VwSUQwOVBTQjJZV3gxWlZ4dWZWeHVablZ1WTNScGIyNGdWVWx1ZERnZ0tIWmhiSFZsS1NCN0lISmxkSFZ5YmlBb2RtRnNkV1VnSmlBd2VHWm1LU0E5UFQwZ2RtRnNkV1VnZlZ4dVpuVnVZM1JwYjI0Z1ZVbHVkREUySUNoMllXeDFaU2tnZXlCeVpYUjFjbTRnS0haaGJIVmxJQ1lnTUhobVptWm1LU0E5UFQwZ2RtRnNkV1VnZlZ4dVpuVnVZM1JwYjI0Z1ZVbHVkRE15SUNoMllXeDFaU2tnZXlCeVpYUjFjbTRnS0haaGJIVmxJRDQrUGlBd0tTQTlQVDBnZG1Gc2RXVWdmVnh1Wm5WdVkzUnBiMjRnVlVsdWREVXpJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYm5WdFltVnlKeUFtSmx4dUlDQWdJSFpoYkhWbElENDlJREFnSmlaY2JpQWdJQ0IyWVd4MVpTQThQU0JKVGxRMU0xOU5RVmdnSmlaY2JpQWdJQ0JOWVhSb0xtWnNiMjl5S0haaGJIVmxLU0E5UFQwZ2RtRnNkV1ZjYm4xY2JseHVkbUZ5SUhSNWNHVnpJRDBnZTF4dUlDQkJjbkpoZVU0NklGOUJjbkpoZVU0c1hHNGdJRUoxWm1abGNqb2dYMEoxWm1abGNpeGNiaUFnUW5WbVptVnlUam9nWDBKMVptWmxjazRzWEc0Z0lFWnBibWwwWlRvZ1JtbHVhWFJsTEZ4dUlDQklaWGc2SUVobGVDeGNiaUFnU0dWNFRqb2dYMGhsZUU0c1hHNGdJRWx1ZERnNklFbHVkRGdzWEc0Z0lFbHVkREUyT2lCSmJuUXhOaXhjYmlBZ1NXNTBNekk2SUVsdWRETXlMRnh1SUNCSmJuUTFNem9nU1c1ME5UTXNYRzRnSUZKaGJtZGxPaUJTWVc1blpTeGNiaUFnVTNSeWFXNW5Uam9nWDFOMGNtbHVaMDRzWEc0Z0lGVkpiblE0T2lCVlNXNTBPQ3hjYmlBZ1ZVbHVkREUyT2lCVlNXNTBNVFlzWEc0Z0lGVkpiblF6TWpvZ1ZVbHVkRE15TEZ4dUlDQlZTVzUwTlRNNklGVkpiblExTTF4dWZWeHVYRzVtYjNJZ0tIWmhjaUIwZVhCbFRtRnRaU0JwYmlCMGVYQmxjeWtnZTF4dUlDQjBlWEJsYzF0MGVYQmxUbUZ0WlYwdWRHOUtVMDlPSUQwZ1puVnVZM1JwYjI0Z0tIUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RGeHVJQ0I5TG1KcGJtUW9iblZzYkN3Z2RIbHdaVTVoYldVcFhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZEhsd1pYTmNiaUlzSW5aaGNpQkZVbEpQVWxNZ1BTQnlaWEYxYVhKbEtDY3VMMlZ5Y205eWN5Y3BYRzUyWVhJZ1RrRlVTVlpGSUQwZ2NtVnhkV2x5WlNnbkxpOXVZWFJwZG1VbktWeHVYRzR2THlCemFHOXlkQzFvWVc1a1hHNTJZWElnZEdaS1UwOU9JRDBnUlZKU1QxSlRMblJtU2xOUFRseHVkbUZ5SUZSbVZIbHdaVVZ5Y205eUlEMGdSVkpTVDFKVExsUm1WSGx3WlVWeWNtOXlYRzUyWVhJZ1ZHWlFjbTl3WlhKMGVWUjVjR1ZGY25KdmNpQTlJRVZTVWs5U1V5NVVabEJ5YjNCbGNuUjVWSGx3WlVWeWNtOXlYRzUyWVhJZ2RHWlRkV0pGY25KdmNpQTlJRVZTVWs5U1V5NTBabE4xWWtWeWNtOXlYRzUyWVhJZ1oyVjBWbUZzZFdWVWVYQmxUbUZ0WlNBOUlFVlNVazlTVXk1blpYUldZV3gxWlZSNWNHVk9ZVzFsWEc1Y2JuWmhjaUJVV1ZCRlV5QTlJSHRjYmlBZ1lYSnlZWGxQWmpvZ1puVnVZM1JwYjI0Z1lYSnlZWGxQWmlBb2RIbHdaU3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJSFI1Y0dVZ1BTQmpiMjF3YVd4bEtIUjVjR1VwWEc0Z0lDQWdiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTWdmSHdnZTMxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUY5aGNuSmhlVTltSUNoaGNuSmhlU3dnYzNSeWFXTjBLU0I3WEc0Z0lDQWdJQ0JwWmlBb0lVNUJWRWxXUlM1QmNuSmhlU2hoY25KaGVTa3BJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJQ0FnYVdZZ0tFNUJWRWxXUlM1T2FXd29ZWEp5WVhrcEtTQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJR2xtSUNodmNIUnBiMjV6TG0xcGJreGxibWQwYUNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUdGeWNtRjVMbXhsYm1kMGFDQThJRzl3ZEdsdmJuTXViV2x1VEdWdVozUm9LU0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0FnSUdsbUlDaHZjSFJwYjI1ekxtMWhlRXhsYm1kMGFDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlHRnljbUY1TG14bGJtZDBhQ0ErSUc5d2RHbHZibk11YldGNFRHVnVaM1JvS1NCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbXhsYm1kMGFDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlHRnljbUY1TG14bGJtZDBhQ0FoUFQwZ2IzQjBhVzl1Y3k1c1pXNW5kR2dwSUhKbGRIVnliaUJtWVd4elpWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1lYSnlZWGt1WlhabGNua29ablZ1WTNScGIyNGdLSFpoYkhWbExDQnBLU0I3WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFI1Y0dWbWIzSmpaU2gwZVhCbExDQjJZV3gxWlN3Z2MzUnlhV04wS1Z4dUlDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dkR1pUZFdKRmNuSnZjaWhsTENCcEtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnSUNCZllYSnlZWGxQWmk1MGIwcFRUMDRnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzNSeUlEMGdKMXNuSUNzZ2RHWktVMDlPS0hSNWNHVXBJQ3NnSjEwblhHNGdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NXNaVzVuZEdnZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCemRISWdLejBnSjNzbklDc2diM0IwYVc5dWN5NXNaVzVuZEdnZ0t5QW5mU2RjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvYjNCMGFXOXVjeTV0YVc1TVpXNW5kR2dnSVQwOUlIVnVaR1ZtYVc1bFpDQjhmQ0J2Y0hScGIyNXpMbTFoZUV4bGJtZDBhQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJSE4wY2lBclBTQW5leWNnSzF4dUlDQWdJQ0FnSUNBZ0lDaHZjSFJwYjI1ekxtMXBia3hsYm1kMGFDQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z01DQTZJRzl3ZEdsdmJuTXViV2x1VEdWdVozUm9LU0FySUNjc0p5QXJYRzRnSUNBZ0lDQWdJQ0FnS0c5d2RHbHZibk11YldGNFRHVnVaM1JvSUQwOVBTQjFibVJsWm1sdVpXUWdQeUJKYm1acGJtbDBlU0E2SUc5d2RHbHZibk11YldGNFRHVnVaM1JvS1NBcklDZDlKMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlITjBjbHh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCZllYSnlZWGxQWmx4dUlDQjlMRnh1WEc0Z0lHMWhlV0psT2lCbWRXNWpkR2x2YmlCdFlYbGlaU0FvZEhsd1pTa2dlMXh1SUNBZ0lIUjVjR1VnUFNCamIyMXdhV3hsS0hSNWNHVXBYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQmZiV0Y1WW1VZ0tIWmhiSFZsTENCemRISnBZM1FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJPUVZSSlZrVXVUbWxzS0haaGJIVmxLU0I4ZkNCMGVYQmxLSFpoYkhWbExDQnpkSEpwWTNRc0lHMWhlV0psS1Z4dUlDQWdJSDFjYmlBZ0lDQmZiV0Y1WW1VdWRHOUtVMDlPSUQwZ1puVnVZM1JwYjI0Z0tDa2dleUJ5WlhSMWNtNGdKejhuSUNzZ2RHWktVMDlPS0hSNWNHVXBJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmZiV0Y1WW1WY2JpQWdmU3hjYmx4dUlDQnRZWEE2SUdaMWJtTjBhVzl1SUcxaGNDQW9jSEp2Y0dWeWRIbFVlWEJsTENCd2NtOXdaWEowZVV0bGVWUjVjR1VwSUh0Y2JpQWdJQ0J3Y205d1pYSjBlVlI1Y0dVZ1BTQmpiMjF3YVd4bEtIQnliM0JsY25SNVZIbHdaU2xjYmlBZ0lDQnBaaUFvY0hKdmNHVnlkSGxMWlhsVWVYQmxLU0J3Y205d1pYSjBlVXRsZVZSNWNHVWdQU0JqYjIxd2FXeGxLSEJ5YjNCbGNuUjVTMlY1Vkhsd1pTbGNibHh1SUNBZ0lHWjFibU4wYVc5dUlGOXRZWEFnS0haaGJIVmxMQ0J6ZEhKcFkzUXBJSHRjYmlBZ0lDQWdJR2xtSUNnaFRrRlVTVlpGTGs5aWFtVmpkQ2gyWVd4MVpTa3BJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJQ0FnYVdZZ0tFNUJWRWxXUlM1T2FXd29kbUZzZFdVcEtTQnlaWFIxY200Z1ptRnNjMlZjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnY0hKdmNHVnlkSGxPWVcxbElHbHVJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIzQmxjblI1UzJWNVZIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkSGx3WldadmNtTmxLSEJ5YjNCbGNuUjVTMlY1Vkhsd1pTd2djSEp2Y0dWeWRIbE9ZVzFsTENCemRISnBZM1FwWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHliM2NnZEdaVGRXSkZjbkp2Y2lobExDQndjbTl3WlhKMGVVNWhiV1VzSUNkclpYa25LVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjSEp2Y0dWeWRIbFdZV3gxWlNBOUlIWmhiSFZsVzNCeWIzQmxjblI1VG1GdFpWMWNiaUFnSUNBZ0lDQWdJQ0IwZVhCbFptOXlZMlVvY0hKdmNHVnlkSGxVZVhCbExDQndjbTl3WlhKMGVWWmhiSFZsTENCemRISnBZM1FwWEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUhKdmR5QjBabE4xWWtWeWNtOXlLR1VzSUhCeWIzQmxjblI1VG1GdFpTbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNod2NtOXdaWEowZVV0bGVWUjVjR1VwSUh0Y2JpQWdJQ0FnSUY5dFlYQXVkRzlLVTA5T0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSjNzbklDc2dkR1pLVTA5T0tIQnliM0JsY25SNVMyVjVWSGx3WlNrZ0t5QW5PaUFuSUNzZ2RHWktVMDlPS0hCeWIzQmxjblI1Vkhsd1pTa2dLeUFuZlNkY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdYMjFoY0M1MGIwcFRUMDRnUFNCbWRXNWpkR2x2YmlBb0tTQjdJSEpsZEhWeWJpQW5leWNnS3lCMFprcFRUMDRvY0hKdmNHVnlkSGxVZVhCbEtTQXJJQ2Q5SnlCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRjl0WVhCY2JpQWdmU3hjYmx4dUlDQnZZbXBsWTNRNklHWjFibU4wYVc5dUlHOWlhbVZqZENBb2RXNWpiMjF3YVd4bFpDa2dlMXh1SUNBZ0lIWmhjaUIwZVhCbElEMGdlMzFjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJSFI1Y0dWUWNtOXdaWEowZVU1aGJXVWdhVzRnZFc1amIyMXdhV3hsWkNrZ2UxeHVJQ0FnSUNBZ2RIbHdaVnQwZVhCbFVISnZjR1Z5ZEhsT1lXMWxYU0E5SUdOdmJYQnBiR1VvZFc1amIyMXdhV3hsWkZ0MGVYQmxVSEp2Y0dWeWRIbE9ZVzFsWFNsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJmYjJKcVpXTjBJQ2gyWVd4MVpTd2djM1J5YVdOMEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVU1QlZFbFdSUzVQWW1wbFkzUW9kbUZzZFdVcEtTQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJR2xtSUNoT1FWUkpWa1V1VG1sc0tIWmhiSFZsS1NrZ2NtVjBkWEp1SUdaaGJITmxYRzVjYmlBZ0lDQWdJSFpoY2lCd2NtOXdaWEowZVU1aGJXVmNibHh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2h3Y205d1pYSjBlVTVoYldVZ2FXNGdkSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCd2NtOXdaWEowZVZSNWNHVWdQU0IwZVhCbFczQnliM0JsY25SNVRtRnRaVjFjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjSEp2Y0dWeWRIbFdZV3gxWlNBOUlIWmhiSFZsVzNCeWIzQmxjblI1VG1GdFpWMWNibHh1SUNBZ0lDQWdJQ0FnSUhSNWNHVm1iM0pqWlNod2NtOXdaWEowZVZSNWNHVXNJSEJ5YjNCbGNuUjVWbUZzZFdVc0lITjBjbWxqZENsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QjBabE4xWWtWeWNtOXlLR1VzSUhCeWIzQmxjblI1VG1GdFpTbGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hOMGNtbGpkQ2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLSEJ5YjNCbGNuUjVUbUZ0WlNCcGJpQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxXM0J5YjNCbGNuUjVUbUZ0WlYwcElHTnZiblJwYm5WbFhHNWNiaUFnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkdaUWNtOXdaWEowZVZSNWNHVkZjbkp2Y2loMWJtUmxabWx1WldRc0lIQnliM0JsY25SNVRtRnRaU2xjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpWeHVJQ0FnSUgxY2JpQWdJQ0JmYjJKcVpXTjBMblJ2U2xOUFRpQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUhSbVNsTlBUaWgwZVhCbEtTQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1gyOWlhbVZqZEZ4dUlDQjlMRnh1WEc0Z0lHRnVlVTltT2lCbWRXNWpkR2x2YmlCaGJubFBaaUFvS1NCN1hHNGdJQ0FnZG1GeUlIUjVjR1Z6SUQwZ1cxMHVjMnhwWTJVdVkyRnNiQ2hoY21kMWJXVnVkSE1wTG0xaGNDaGpiMjF3YVd4bEtWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1gyRnVlVTltSUNoMllXeDFaU3dnYzNSeWFXTjBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSGx3WlhNdWMyOXRaU2htZFc1amRHbHZiaUFvZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBlWEJsWm05eVkyVW9kSGx3WlN3Z2RtRnNkV1VzSUhOMGNtbGpkQ2xjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUgxY2JpQWdJQ0JmWVc1NVQyWXVkRzlLVTA5T0lEMGdablZ1WTNScGIyNGdLQ2tnZXlCeVpYUjFjbTRnZEhsd1pYTXViV0Z3S0hSbVNsTlBUaWt1YW05cGJpZ25mQ2NwSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJmWVc1NVQyWmNiaUFnZlN4Y2JseHVJQ0JoYkd4UFpqb2dablZ1WTNScGIyNGdZV3hzVDJZZ0tDa2dlMXh1SUNBZ0lIWmhjaUIwZVhCbGN5QTlJRnRkTG5Oc2FXTmxMbU5oYkd3b1lYSm5kVzFsYm5SektTNXRZWEFvWTI5dGNHbHNaU2xjYmx4dUlDQWdJR1oxYm1OMGFXOXVJRjloYkd4UFppQW9kbUZzZFdVc0lITjBjbWxqZENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSNWNHVnpMbVYyWlhKNUtHWjFibU4wYVc5dUlDaDBlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSNWNHVm1iM0pqWlNoMGVYQmxMQ0IyWVd4MVpTd2djM1J5YVdOMEtWeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdmVnh1SUNBZ0lGOWhiR3hQWmk1MGIwcFRUMDRnUFNCbWRXNWpkR2x2YmlBb0tTQjdJSEpsZEhWeWJpQjBlWEJsY3k1dFlYQW9kR1pLVTA5T0tTNXFiMmx1S0NjZ0ppQW5LU0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdYMkZzYkU5bVhHNGdJSDBzWEc1Y2JpQWdjWFZoWTJ0elRHbHJaVG9nWm5WdVkzUnBiMjRnY1hWaFkydHpUR2xyWlNBb2RIbHdaU2tnZTF4dUlDQWdJR1oxYm1OMGFXOXVJRjl4ZFdGamEzTk1hV3RsSUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFI1Y0dVZ1BUMDlJR2RsZEZaaGJIVmxWSGx3WlU1aGJXVW9kbUZzZFdVcFhHNGdJQ0FnZlZ4dUlDQWdJRjl4ZFdGamEzTk1hV3RsTG5SdlNsTlBUaUE5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlIUjVjR1VnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRjl4ZFdGamEzTk1hV3RsWEc0Z0lIMHNYRzVjYmlBZ2RIVndiR1U2SUdaMWJtTjBhVzl1SUhSMWNHeGxJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2RIbHdaWE1nUFNCYlhTNXpiR2xqWlM1allXeHNLR0Z5WjNWdFpXNTBjeWt1YldGd0tHTnZiWEJwYkdVcFhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCZmRIVndiR1VnS0haaGJIVmxjeXdnYzNSeWFXTjBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1RrRlVTVlpGTGs1cGJDaDJZV3gxWlhNcEtTQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJR2xtSUNoT1FWUkpWa1V1VG1sc0tIWmhiSFZsY3k1c1pXNW5kR2dwS1NCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lHbG1JQ2h6ZEhKcFkzUWdKaVlnS0haaGJIVmxjeTVzWlc1bmRHZ2dJVDA5SUhSNWNHVnpMbXhsYm1kMGFDa3BJSEpsZEhWeWJpQm1ZV3h6WlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEhsd1pYTXVaWFpsY25rb1puVnVZM1JwYjI0Z0tIUjVjR1VzSUdrcElIdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RIbHdaV1p2Y21ObEtIUjVjR1VzSUhaaGJIVmxjMXRwWFN3Z2MzUnlhV04wS1Z4dUlDQWdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dkR1pUZFdKRmNuSnZjaWhsTENCcEtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnSUNCZmRIVndiR1V1ZEc5S1UwOU9JRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z0p5Z25JQ3NnZEhsd1pYTXViV0Z3S0hSbVNsTlBUaWt1YW05cGJpZ25MQ0FuS1NBcklDY3BKeUI5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdYM1IxY0d4bFhHNGdJSDBzWEc1Y2JpQWdkbUZzZFdVNklHWjFibU4wYVc5dUlIWmhiSFZsSUNobGVIQmxZM1JsWkNrZ2UxeHVJQ0FnSUdaMWJtTjBhVzl1SUY5MllXeDFaU0FvWVdOMGRXRnNLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZV04wZFdGc0lEMDlQU0JsZUhCbFkzUmxaRnh1SUNBZ0lIMWNiaUFnSUNCZmRtRnNkV1V1ZEc5S1UwOU9JRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z1pYaHdaV04wWldRZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUY5MllXeDFaVnh1SUNCOVhHNTlYRzVjYmk4dklGUlBSRTg2SUdSbGNISmxZMkYwWlZ4dVZGbFFSVk11YjI1bFQyWWdQU0JVV1ZCRlV5NWhibmxQWmx4dVhHNW1kVzVqZEdsdmJpQmpiMjF3YVd4bElDaDBlWEJsS1NCN1hHNGdJR2xtSUNoT1FWUkpWa1V1VTNSeWFXNW5LSFI1Y0dVcEtTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWYk1GMGdQVDA5SUNjL0p5a2djbVYwZFhKdUlGUlpVRVZUTG0xaGVXSmxLSFI1Y0dVdWMyeHBZMlVvTVNrcFhHNWNiaUFnSUNCeVpYUjFjbTRnVGtGVVNWWkZXM1I1Y0dWZElIeDhJRlJaVUVWVExuRjFZV05yYzB4cGEyVW9kSGx3WlNsY2JpQWdmU0JsYkhObElHbG1JQ2gwZVhCbElDWW1JRTVCVkVsV1JTNVBZbXBsWTNRb2RIbHdaU2twSUh0Y2JpQWdJQ0JwWmlBb1RrRlVTVlpGTGtGeWNtRjVLSFI1Y0dVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhsd1pTNXNaVzVuZEdnZ0lUMDlJREVwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owVjRjR1ZqZEdWa0lHTnZiWEJwYkdVb0tTQndZWEpoYldWMFpYSWdiMllnZEhsd1pTQkJjbkpoZVNCdlppQnNaVzVuZEdnZ01TY3BYRzRnSUNBZ0lDQnlaWFIxY200Z1ZGbFFSVk11WVhKeVlYbFBaaWgwZVhCbFd6QmRLVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCVVdWQkZVeTV2WW1wbFkzUW9kSGx3WlNsY2JpQWdmU0JsYkhObElHbG1JQ2hPUVZSSlZrVXVSblZ1WTNScGIyNG9kSGx3WlNrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhsd1pWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlGUlpVRVZUTG5aaGJIVmxLSFI1Y0dVcFhHNTlYRzVjYm1aMWJtTjBhVzl1SUhSNWNHVm1iM0pqWlNBb2RIbHdaU3dnZG1Gc2RXVXNJSE4wY21samRDd2djM1Z5Y205bllYUmxLU0I3WEc0Z0lHbG1JQ2hPUVZSSlZrVXVSblZ1WTNScGIyNG9kSGx3WlNrcElIdGNiaUFnSUNCcFppQW9kSGx3WlNoMllXeDFaU3dnYzNSeWFXTjBLU2tnY21WMGRYSnVJSFJ5ZFdWY2JseHVJQ0FnSUhSb2NtOTNJRzVsZHlCVVpsUjVjR1ZGY25KdmNpaHpkWEp5YjJkaGRHVWdmSHdnZEhsd1pTd2dkbUZzZFdVcFhHNGdJSDFjYmx4dUlDQXZMeUJLU1ZSY2JpQWdjbVYwZFhKdUlIUjVjR1ZtYjNKalpTaGpiMjF3YVd4bEtIUjVjR1VwTENCMllXeDFaU3dnYzNSeWFXTjBLVnh1ZlZ4dVhHNHZMeUJoYzNOcFoyNGdkSGx3WlhNZ2RHOGdkSGx3WldadmNtTmxJR1oxYm1OMGFXOXVYRzVtYjNJZ0tIWmhjaUIwZVhCbFRtRnRaU0JwYmlCT1FWUkpWa1VwSUh0Y2JpQWdkSGx3WldadmNtTmxXM1I1Y0dWT1lXMWxYU0E5SUU1QlZFbFdSVnQwZVhCbFRtRnRaVjFjYm4xY2JseHVabTl5SUNoMGVYQmxUbUZ0WlNCcGJpQlVXVkJGVXlrZ2UxeHVJQ0IwZVhCbFptOXlZMlZiZEhsd1pVNWhiV1ZkSUQwZ1ZGbFFSVk5iZEhsd1pVNWhiV1ZkWEc1OVhHNWNiblpoY2lCRldGUlNRU0E5SUhKbGNYVnBjbVVvSnk0dlpYaDBjbUVuS1Z4dVptOXlJQ2gwZVhCbFRtRnRaU0JwYmlCRldGUlNRU2tnZTF4dUlDQjBlWEJsWm05eVkyVmJkSGx3WlU1aGJXVmRJRDBnUlZoVVVrRmJkSGx3WlU1aGJXVmRYRzU5WEc1Y2JuUjVjR1ZtYjNKalpTNWpiMjF3YVd4bElEMGdZMjl0Y0dsc1pWeHVkSGx3WldadmNtTmxMbFJtVkhsd1pVVnljbTl5SUQwZ1ZHWlVlWEJsUlhKeWIzSmNiblI1Y0dWbWIzSmpaUzVVWmxCeWIzQmxjblI1Vkhsd1pVVnljbTl5SUQwZ1ZHWlFjbTl3WlhKMGVWUjVjR1ZGY25KdmNseHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSFI1Y0dWbWIzSmpaVnh1SWl3aWRtRnlJSFI1Y0dWeklEMGdlMXh1SUNCQmNuSmhlVG9nWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3SUhKbGRIVnliaUIyWVd4MVpTQWhQVDBnYm5Wc2JDQW1KaUIyWVd4MVpTQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIWmhiSFZsTG1OdmJuTjBjblZqZEc5eUlEMDlQU0JCY25KaGVTQjlMRnh1SUNCQ2IyOXNaV0Z1T2lCbWRXNWpkR2x2YmlBb2RtRnNkV1VwSUhzZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjJKdmIyeGxZVzRuSUgwc1hHNGdJRVoxYm1OMGFXOXVPaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHNnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMloxYm1OMGFXOXVKeUI5TEZ4dUlDQk9hV3c2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQjJZV3gxWlNBOVBUMGdiblZzYkNCOUxGeHVJQ0JPZFcxaVpYSTZJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dleUJ5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iblZ0WW1WeUp5QjlMRnh1SUNCUFltcGxZM1E2SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZXlCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUI5TEZ4dUlDQlRkSEpwYm1jNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2V5QnlaWFIxY200Z2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmMzUnlhVzVuSnlCOUxGeHVJQ0FuSnpvZ1puVnVZM1JwYjI0Z0tDa2dleUJ5WlhSMWNtNGdkSEoxWlNCOVhHNTlYRzVjYmk4dklGUlBSRTg2SUdSbGNISmxZMkYwWlZ4dWRIbHdaWE11VG5Wc2JDQTlJSFI1Y0dWekxrNXBiRnh1WEc1bWIzSWdLSFpoY2lCMGVYQmxUbUZ0WlNCcGJpQjBlWEJsY3lrZ2UxeHVJQ0IwZVhCbGMxdDBlWEJsVG1GdFpWMHVkRzlLVTA5T0lEMGdablZ1WTNScGIyNGdLSFFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkRnh1SUNCOUxtSnBibVFvYm5Wc2JDd2dkSGx3WlU1aGJXVXBYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2RIbHdaWE5jYmlJc0lpZDFjMlVnYzNSeWFXTjBKMXh1WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nWVNCdVpYY2dWV2x1ZERoQmNuSmhlU0JqY21WaGRHVmtJR0o1SUdOdmJtTmhkR1Z1WVhScGJtY2dkR2hsSUhCaGMzTmxaQ0JCY25KaGVVeHBhMlZ6WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRCY25KaGVUeEJjbkpoZVV4cGEyVThiblZ0WW1WeVBqNTlJR0Z5Y21GNWMxeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRzWlc1bmRHaGRYRzRnS2k5Y2JtWjFibU4wYVc5dUlHTnZibU5oZENBb1lYSnlZWGx6TENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0NGc1pXNW5kR2dwSUh0Y2JpQWdJQ0JzWlc1bmRHZ2dQU0JoY25KaGVYTXVjbVZrZFdObEtDaGhZMk1zSUdOMWNuSXBJRDArSUdGall5QXJJR04xY25JdWJHVnVaM1JvTENBd0tWeHVJQ0I5WEc1Y2JpQWdZMjl1YzNRZ2IzVjBjSFYwSUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvYkdWdVozUm9LVnh1SUNCc1pYUWdiMlptYzJWMElEMGdNRnh1WEc0Z0lHWnZjaUFvWTI5dWMzUWdZWEp5SUc5bUlHRnljbUY1Y3lrZ2UxeHVJQ0FnSUc5MWRIQjFkQzV6WlhRb1lYSnlMQ0J2Wm1aelpYUXBYRzRnSUNBZ2IyWm1jMlYwSUNzOUlHRnljaTVzWlc1bmRHaGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZkWFJ3ZFhSY2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JqYjI1allYUmNiaUlzSWlkMWMyVWdjM1J5YVdOMEoxeHVYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR1VnZEhkdklIQmhjM05sWkNCVmFXNTBPRUZ5Y21GNWN5Qm9ZWFpsSUhSb1pTQnpZVzFsSUdOdmJuUmxiblJjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMVZwYm5RNFFYSnlZWGw5SUdGY2JpQXFJRUJ3WVhKaGJTQjdWV2x1ZERoQmNuSmhlWDBnWWx4dUlDb3ZYRzVtZFc1amRHbHZiaUJsY1hWaGJITWdLR0VzSUdJcElIdGNiaUFnYVdZZ0tHRWdQVDA5SUdJcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpWeHVJQ0I5WEc1Y2JpQWdhV1lnS0dFdVlubDBaVXhsYm1kMGFDQWhQVDBnWWk1aWVYUmxUR1Z1WjNSb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxYRzRnSUgxY2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdFdVlubDBaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHRmJhVjBnSVQwOUlHSmJhVjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMGNuVmxYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1pYRjFZV3h6WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2RjYmx4dVkyOXVjM1FnZXlCbGJtTnZaR2x1WnpvZ1oyVjBRMjlrWldNZ2ZTQTlJSEpsY1hWcGNtVW9KMjExYkhScFltRnpaU2NwWEc1amIyNXpkQ0IxZEdZNFJXNWpiMlJsY2lBOUlHNWxkeUJVWlhoMFJXNWpiMlJsY2lncFhHNWNiaThxS2x4dUlDb2dRSFI1Y0dWa1pXWWdlMTlmYVcxd2IzSjBYMThvSjIxMWJIUnBZbUZ6WlM5emNtTXZkSGx3WlhNbktTNUNZWE5sVG1GdFpTQjhJQ2QxZEdZNEp5QjhJQ2QxZEdZdE9DY2dmQ0FuWVhOamFXa25JSHdnZFc1a1pXWnBibVZrZlNCVGRYQndiM0owWldSRmJtTnZaR2x1WjNOY2JpQXFMMXh1WEc0dktpcGNiaUFxSUVsdWRHVnljSEpsZEhNZ1pXRmphQ0JqYUdGeVlXTjBaWElnYVc0Z1lTQnpkSEpwYm1jZ1lYTWdZU0JpZVhSbElHRnVaRnh1SUNvZ2NtVjBkWEp1Y3lCaElGVnBiblE0UVhKeVlYa2diMllnZEdodmMyVWdZbmwwWlhNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUhOMGNtbHVaeUF0SUZSb1pTQnpkSEpwYm1jZ2RHOGdkSFZ5YmlCcGJuUnZJR0Z1SUdGeWNtRjVYRzRnS2k5Y2JtWjFibU4wYVc5dUlHRnpZMmxwVTNSeWFXNW5WRzlWYVc1ME9FRnljbUY1SUNoemRISnBibWNwSUh0Y2JpQWdZMjl1YzNRZ1lYSnlZWGtnUFNCdVpYY2dWV2x1ZERoQmNuSmhlU2h6ZEhKcGJtY3ViR1Z1WjNSb0tWeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2MzUnlhVzVuTG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1lYSnlZWGxiYVYwZ1BTQnpkSEpwYm1jdVkyaGhja052WkdWQmRDaHBLVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR0Z5Y21GNVhHNTlYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0VnWUZWcGJuUTRRWEp5WVhsZ0lHWnliMjBnZEdobElIQmhjM05sWkNCemRISnBibWRjYmlBcVhHNGdLaUJUZFhCd2IzSjBjeUJnZFhSbU9HQXNJR0IxZEdZdE9HQWdZVzVrSUdGdWVTQmxibU52WkdsdVp5QnpkWEJ3YjNKMFpXUWdZbmtnZEdobElHMTFiSFJwWW1GelpTQnRiMlIxYkdVdVhHNGdLbHh1SUNvZ1FXeHpieUJnWVhOamFXbGdJSGRvYVdOb0lHbHpJSE5wYldsc1lYSWdkRzhnYm05a1pTZHpJQ2RpYVc1aGNua25JR1Z1WTI5a2FXNW5MbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnpkSEpwYm1kY2JpQXFJRUJ3WVhKaGJTQjdVM1Z3Y0c5eWRHVmtSVzVqYjJScGJtZHpmU0JiWlc1amIyUnBibWM5ZFhSbU9GMGdMU0IxZEdZNExDQmlZWE5sTVRZc0lHSmhjMlUyTkN3Z1ltRnpaVFkwZFhKc2NHRmtMQ0JsZEdOY2JpQXFJRUJ5WlhSMWNtNXpJSHRWYVc1ME9FRnljbUY1ZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJtY205dFUzUnlhVzVuSUNoemRISnBibWNzSUdWdVkyOWthVzVuSUQwZ0ozVjBaamduS1NCN1hHNGdJR2xtSUNobGJtTnZaR2x1WnlBOVBUMGdKM1YwWmpnbklIeDhJR1Z1WTI5a2FXNW5JRDA5UFNBbmRYUm1MVGduS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFYwWmpoRmJtTnZaR1Z5TG1WdVkyOWtaU2h6ZEhKcGJtY3BYRzRnSUgxY2JseHVJQ0JwWmlBb1pXNWpiMlJwYm1jZ1BUMDlJQ2RoYzJOcGFTY3BJSHRjYmlBZ0lDQnlaWFIxY200Z1lYTmphV2xUZEhKcGJtZFViMVZwYm5RNFFYSnlZWGtvYzNSeWFXNW5LVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR2RsZEVOdlpHVmpLR1Z1WTI5a2FXNW5LUzVrWldOdlpHVW9jM1J5YVc1bktWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaeWIyMVRkSEpwYm1kY2JpSXNJaWQxYzJVZ2MzUnlhV04wSjF4dVhHNWpiMjV6ZENCN0lHVnVZMjlrYVc1bk9pQm5aWFJEYjJSbFl5QjlJRDBnY21WeGRXbHlaU2duYlhWc2RHbGlZWE5sSnlsY2JtTnZibk4wSUhWMFpqaEVaV052WkdWeUlEMGdibVYzSUZSbGVIUkVaV052WkdWeUtDZDFkR1k0SnlsY2JseHVMeW9xWEc0Z0tpQkFkSGx3WldSbFppQjdYMTlwYlhCdmNuUmZYeWduYlhWc2RHbGlZWE5sTDNOeVl5OTBlWEJsY3ljcExrSmhjMlZPWVcxbElId2dKM1YwWmpnbklId2dKM1YwWmkwNEp5QjhJQ2RoYzJOcGFTY2dmQ0IxYm1SbFptbHVaV1I5SUZOMWNIQnZjblJsWkVWdVkyOWthVzVuYzF4dUlDb3ZYRzVjYmk4cUtseHVJQ29nVkhWeWJuTWdZU0JWYVc1ME9FRnljbUY1SUc5bUlHSjVkR1Z6SUdsdWRHOGdZU0J6ZEhKcGJtY2dkMmwwYUNCbFlXTm9YRzRnS2lCamFHRnlZV04wWlhJZ1ltVnBibWNnZEdobElHTm9ZWElnWTI5a1pTQnZaaUIwYUdVZ1kyOXljbVZ6Y0c5dVpHbHVaeUJpZVhSbFhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VmFXNTBPRUZ5Y21GNWZTQmhjbkpoZVNBdElGUm9aU0JoY25KaGVTQjBieUIwZFhKdUlHbHVkRzhnWVNCemRISnBibWRjYmlBcUwxeHVablZ1WTNScGIyNGdkV2x1ZERoQmNuSmhlVlJ2UVhOamFXbFRkSEpwYm1jZ0tHRnljbUY1S1NCN1hHNGdJR3hsZENCemRISnBibWNnUFNBbkoxeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lYSnlZWGt1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCemRISnBibWNnS3owZ1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaGhjbkpoZVZ0cFhTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2MzUnlhVzVuWEc1OVhHNWNiaThxS2x4dUlDb2dWSFZ5Ym5NZ1lTQmdWV2x1ZERoQmNuSmhlV0FnYVc1MGJ5QmhJSE4wY21sdVp5NWNiaUFxWEc0Z0tpQlRkWEJ3YjNKMGN5QmdkWFJtT0dBc0lHQjFkR1l0T0dBZ1lXNWtJR0Z1ZVNCbGJtTnZaR2x1WnlCemRYQndiM0owWldRZ1lua2dkR2hsSUcxMWJIUnBZbUZ6WlNCdGIyUjFiR1V1WEc0Z0tseHVJQ29nUVd4emJ5QmdZWE5qYVdsZ0lIZG9hV05vSUdseklITnBiV2xzWVhJZ2RHOGdibTlrWlNkeklDZGlhVzVoY25rbklHVnVZMjlrYVc1bkxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1ZXbHVkRGhCY25KaGVYMGdZWEp5WVhrZ0xTQlVhR1VnWVhKeVlYa2dkRzhnZEhWeWJpQnBiblJ2SUdFZ2MzUnlhVzVuWEc0Z0tpQkFjR0Z5WVcwZ2UxTjFjSEJ2Y25SbFpFVnVZMjlrYVc1bmMzMGdXMlZ1WTI5a2FXNW5QWFYwWmpoZElDMGdWR2hsSUdWdVkyOWthVzVuSUhSdklIVnpaVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UzTjBjbWx1WjMxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnZEc5VGRISnBibWNnS0dGeWNtRjVMQ0JsYm1OdlpHbHVaeUE5SUNkMWRHWTRKeWtnZTF4dUlDQnBaaUFvWlc1amIyUnBibWNnUFQwOUlDZDFkR1k0SnlCOGZDQmxibU52WkdsdVp5QTlQVDBnSjNWMFppMDRKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjFkR1k0UkdWamIyUmxjaTVrWldOdlpHVW9ZWEp5WVhrcFhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1amIyUnBibWNnUFQwOUlDZGhjMk5wYVNjcElIdGNiaUFnSUNCeVpYUjFjbTRnZFdsdWREaEJjbkpoZVZSdlFYTmphV2xUZEhKcGJtY29ZWEp5WVhrcFhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1oyVjBRMjlrWldNb1pXNWpiMlJwYm1jcExtVnVZMjlrWlNoaGNuSmhlU2xjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjBiMU4wY21sdVoxeHVJaXdpSjNWelpTQnpkSEpwWTNRblhHNTJZWElnUW5WbVptVnlJRDBnY21WeGRXbHlaU2duYzJGbVpTMWlkV1ptWlhJbktTNUNkV1ptWlhKY2JseHVMeThnVG5WdFltVnlMazFCV0Y5VFFVWkZYMGxPVkVWSFJWSmNiblpoY2lCTlFWaGZVMEZHUlY5SlRsUkZSMFZTSUQwZ09UQXdOekU1T1RJMU5EYzBNRGs1TVZ4dVhHNW1kVzVqZEdsdmJpQmphR1ZqYTFWSmJuUTFNeUFvYmlrZ2UxeHVJQ0JwWmlBb2JpQThJREFnZkh3Z2JpQStJRTFCV0Y5VFFVWkZYMGxPVkVWSFJWSWdmSHdnYmlBbElERWdJVDA5SURBcElIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2QyWVd4MVpTQnZkWFFnYjJZZ2NtRnVaMlVuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJsYm1OdlpHVWdLRzUxYldKbGNpd2dZblZtWm1WeUxDQnZabVp6WlhRcElIdGNiaUFnWTJobFkydFZTVzUwTlRNb2JuVnRZbVZ5S1Z4dVhHNGdJR2xtSUNnaFluVm1abVZ5S1NCaWRXWm1aWElnUFNCQ2RXWm1aWEl1WVd4c2IyTlZibk5oWm1Vb1pXNWpiMlJwYm1kTVpXNW5kR2dvYm5WdFltVnlLU2xjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9ZblZtWm1WeUtTa2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduWW5WbVptVnlJRzExYzNRZ1ltVWdZU0JDZFdabVpYSWdhVzV6ZEdGdVkyVW5LVnh1SUNCcFppQW9JVzltWm5ObGRDa2diMlptYzJWMElEMGdNRnh1WEc0Z0lDOHZJRGdnWW1sMFhHNGdJR2xtSUNodWRXMWlaWElnUENBd2VHWmtLU0I3WEc0Z0lDQWdZblZtWm1WeUxuZHlhWFJsVlVsdWREZ29iblZ0WW1WeUxDQnZabVp6WlhRcFhHNGdJQ0FnWlc1amIyUmxMbUo1ZEdWeklEMGdNVnh1WEc0Z0lDOHZJREUySUdKcGRGeHVJQ0I5SUdWc2MyVWdhV1lnS0c1MWJXSmxjaUE4UFNBd2VHWm1abVlwSUh0Y2JpQWdJQ0JpZFdabVpYSXVkM0pwZEdWVlNXNTBPQ2d3ZUdaa0xDQnZabVp6WlhRcFhHNGdJQ0FnWW5WbVptVnlMbmR5YVhSbFZVbHVkREUyVEVVb2JuVnRZbVZ5TENCdlptWnpaWFFnS3lBeEtWeHVJQ0FnSUdWdVkyOWtaUzVpZVhSbGN5QTlJRE5jYmx4dUlDQXZMeUF6TWlCaWFYUmNiaUFnZlNCbGJITmxJR2xtSUNodWRXMWlaWElnUEQwZ01IaG1abVptWm1abVppa2dlMXh1SUNBZ0lHSjFabVpsY2k1M2NtbDBaVlZKYm5RNEtEQjRabVVzSUc5bVpuTmxkQ2xjYmlBZ0lDQmlkV1ptWlhJdWQzSnBkR1ZWU1c1ME16Sk1SU2h1ZFcxaVpYSXNJRzltWm5ObGRDQXJJREVwWEc0Z0lDQWdaVzVqYjJSbExtSjVkR1Z6SUQwZ05WeHVYRzRnSUM4dklEWTBJR0pwZEZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdKMVptWmxjaTUzY21sMFpWVkpiblE0S0RCNFptWXNJRzltWm5ObGRDbGNiaUFnSUNCaWRXWm1aWEl1ZDNKcGRHVlZTVzUwTXpKTVJTaHVkVzFpWlhJZ1BqNCtJREFzSUc5bVpuTmxkQ0FySURFcFhHNGdJQ0FnWW5WbVptVnlMbmR5YVhSbFZVbHVkRE15VEVVb0tHNTFiV0psY2lBdklEQjRNVEF3TURBd01EQXdLU0I4SURBc0lHOW1abk5sZENBcklEVXBYRzRnSUNBZ1pXNWpiMlJsTG1KNWRHVnpJRDBnT1Z4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdKMVptWmxjbHh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmtaV052WkdVZ0tHSjFabVpsY2l3Z2IyWm1jMlYwS1NCN1hHNGdJR2xtSUNnaFFuVm1abVZ5TG1selFuVm1abVZ5S0dKMVptWmxjaWtwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oySjFabVpsY2lCdGRYTjBJR0psSUdFZ1FuVm1abVZ5SUdsdWMzUmhibU5sSnlsY2JpQWdhV1lnS0NGdlptWnpaWFFwSUc5bVpuTmxkQ0E5SURCY2JseHVJQ0IyWVhJZ1ptbHljM1FnUFNCaWRXWm1aWEl1Y21WaFpGVkpiblE0S0c5bVpuTmxkQ2xjYmx4dUlDQXZMeUE0SUdKcGRGeHVJQ0JwWmlBb1ptbHljM1FnUENBd2VHWmtLU0I3WEc0Z0lDQWdaR1ZqYjJSbExtSjVkR1Z6SUQwZ01WeHVJQ0FnSUhKbGRIVnliaUJtYVhKemRGeHVYRzRnSUM4dklERTJJR0pwZEZ4dUlDQjlJR1ZzYzJVZ2FXWWdLR1pwY25OMElEMDlQU0F3ZUdaa0tTQjdYRzRnSUNBZ1pHVmpiMlJsTG1KNWRHVnpJRDBnTTF4dUlDQWdJSEpsZEhWeWJpQmlkV1ptWlhJdWNtVmhaRlZKYm5ReE5reEZLRzltWm5ObGRDQXJJREVwWEc1Y2JpQWdMeThnTXpJZ1ltbDBYRzRnSUgwZ1pXeHpaU0JwWmlBb1ptbHljM1FnUFQwOUlEQjRabVVwSUh0Y2JpQWdJQ0JrWldOdlpHVXVZbmwwWlhNZ1BTQTFYRzRnSUNBZ2NtVjBkWEp1SUdKMVptWmxjaTV5WldGa1ZVbHVkRE15VEVVb2IyWm1jMlYwSUNzZ01TbGNibHh1SUNBdkx5QTJOQ0JpYVhSY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCa1pXTnZaR1V1WW5sMFpYTWdQU0E1WEc0Z0lDQWdkbUZ5SUd4dklEMGdZblZtWm1WeUxuSmxZV1JWU1c1ME16Sk1SU2h2Wm1aelpYUWdLeUF4S1Z4dUlDQWdJSFpoY2lCb2FTQTlJR0oxWm1abGNpNXlaV0ZrVlVsdWRETXlURVVvYjJabWMyVjBJQ3NnTlNsY2JpQWdJQ0IyWVhJZ2JuVnRZbVZ5SUQwZ2FHa2dLaUF3ZURBeE1EQXdNREF3TURBZ0t5QnNiMXh1SUNBZ0lHTm9aV05yVlVsdWREVXpLRzUxYldKbGNpbGNibHh1SUNBZ0lISmxkSFZ5YmlCdWRXMWlaWEpjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbGJtTnZaR2x1WjB4bGJtZDBhQ0FvYm5WdFltVnlLU0I3WEc0Z0lHTm9aV05yVlVsdWREVXpLRzUxYldKbGNpbGNibHh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRzUxYldKbGNpQThJREI0Wm1RZ1B5QXhYRzRnSUNBZ0lDQTZJRzUxYldKbGNpQThQU0F3ZUdabVptWWdQeUF6WEc0Z0lDQWdJQ0FnSURvZ2JuVnRZbVZ5SUR3OUlEQjRabVptWm1abVptWWdQeUExWEc0Z0lDQWdJQ0FnSUNBZ09pQTVYRzRnSUNsY2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3SUdWdVkyOWtaVG9nWlc1amIyUmxMQ0JrWldOdlpHVTZJR1JsWTI5a1pTd2daVzVqYjJScGJtZE1aVzVuZEdnNklHVnVZMjlrYVc1blRHVnVaM1JvSUgxY2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aVhHNWNibVY0Y0c5eWRITXVWR1Y0ZEVWdVkyOWtaWElnUFZ4dUlDQjBlWEJsYjJZZ1ZHVjRkRVZ1WTI5a1pYSWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJVWlhoMFJXNWpiMlJsY2lBNklISmxjWFZwY21Vb1hDSjFkR2xzWENJcExsUmxlSFJGYm1OdlpHVnlYRzVjYm1WNGNHOXlkSE11VkdWNGRFUmxZMjlrWlhJZ1BWeHVJQ0IwZVhCbGIyWWdWR1Y0ZEVSbFkyOWtaWElnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCVVpYaDBSR1ZqYjJSbGNpQTZJSEpsY1hWcGNtVW9YQ0oxZEdsc1hDSXBMbFJsZUhSRVpXTnZaR1Z5WEc0aUxDSW9ablZ1WTNScGIyNGdLR2RzYjJKaGJDd2dabUZqZEc5eWVTa2dlMXh1SUNCMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbVlXTjBiM0o1S0dWNGNHOXlkSE1wSURwY2JpQWdkSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0lEOGdaR1ZtYVc1bEtGc25aWGh3YjNKMGN5ZGRMQ0JtWVdOMGIzSjVLU0E2WEc0Z0lDaG1ZV04wYjNKNUtDaG5iRzlpWVd3dVYwaEJWRmRIUm1WMFkyZ2dQU0I3ZlNrcEtUdGNibjBvZEdocGN5d2dLR1oxYm1OMGFXOXVJQ2hsZUhCdmNuUnpLU0I3SUNkMWMyVWdjM1J5YVdOMEp6dGNibHh1SUNCMllYSWdaMnh2WW1Gc0lEMWNiaUFnSUNBb2RIbHdaVzltSUdkc2IySmhiRlJvYVhNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlHZHNiMkpoYkZSb2FYTXBJSHg4WEc0Z0lDQWdLSFI1Y0dWdlppQnpaV3htSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCelpXeG1LU0I4ZkZ4dUlDQWdJQ2gwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQm5iRzlpWVd3cE8xeHVYRzRnSUhaaGNpQnpkWEJ3YjNKMElEMGdlMXh1SUNBZ0lITmxZWEpqYUZCaGNtRnRjem9nSjFWU1RGTmxZWEpqYUZCaGNtRnRjeWNnYVc0Z1oyeHZZbUZzTEZ4dUlDQWdJR2wwWlhKaFlteGxPaUFuVTNsdFltOXNKeUJwYmlCbmJHOWlZV3dnSmlZZ0oybDBaWEpoZEc5eUp5QnBiaUJUZVcxaWIyd3NYRzRnSUNBZ1lteHZZanBjYmlBZ0lDQWdJQ2RHYVd4bFVtVmhaR1Z5SnlCcGJpQm5iRzlpWVd3Z0ppWmNiaUFnSUNBZ0lDZENiRzlpSnlCcGJpQm5iRzlpWVd3Z0ppWmNiaUFnSUNBZ0lDaG1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhjZ1FteHZZaWdwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNrb0tTeGNiaUFnSUNCbWIzSnRSR0YwWVRvZ0owWnZjbTFFWVhSaEp5QnBiaUJuYkc5aVlXd3NYRzRnSUNBZ1lYSnlZWGxDZFdabVpYSTZJQ2RCY25KaGVVSjFabVpsY2ljZ2FXNGdaMnh2WW1Gc1hHNGdJSDA3WEc1Y2JpQWdablZ1WTNScGIyNGdhWE5FWVhSaFZtbGxkeWh2WW1vcElIdGNiaUFnSUNCeVpYUjFjbTRnYjJKcUlDWW1JRVJoZEdGV2FXVjNMbkJ5YjNSdmRIbHdaUzVwYzFCeWIzUnZkSGx3WlU5bUtHOWlhaWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpkWEJ3YjNKMExtRnljbUY1UW5WbVptVnlLU0I3WEc0Z0lDQWdkbUZ5SUhacFpYZERiR0Z6YzJWeklEMGdXMXh1SUNBZ0lDQWdKMXR2WW1wbFkzUWdTVzUwT0VGeWNtRjVYU2NzWEc0Z0lDQWdJQ0FuVzI5aWFtVmpkQ0JWYVc1ME9FRnljbUY1WFNjc1hHNGdJQ0FnSUNBblcyOWlhbVZqZENCVmFXNTBPRU5zWVcxd1pXUkJjbkpoZVYwbkxGeHVJQ0FnSUNBZ0oxdHZZbXBsWTNRZ1NXNTBNVFpCY25KaGVWMG5MRnh1SUNBZ0lDQWdKMXR2WW1wbFkzUWdWV2x1ZERFMlFYSnlZWGxkSnl4Y2JpQWdJQ0FnSUNkYmIySnFaV04wSUVsdWRETXlRWEp5WVhsZEp5eGNiaUFnSUNBZ0lDZGJiMkpxWldOMElGVnBiblF6TWtGeWNtRjVYU2NzWEc0Z0lDQWdJQ0FuVzI5aWFtVmpkQ0JHYkc5aGRETXlRWEp5WVhsZEp5eGNiaUFnSUNBZ0lDZGJiMkpxWldOMElFWnNiMkYwTmpSQmNuSmhlVjBuWEc0Z0lDQWdYVHRjYmx4dUlDQWdJSFpoY2lCcGMwRnljbUY1UW5WbVptVnlWbWxsZHlBOVhHNGdJQ0FnSUNCQmNuSmhlVUoxWm1abGNpNXBjMVpwWlhjZ2ZIeGNiaUFnSUNBZ0lHWjFibU4wYVc5dUtHOWlhaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYjJKcUlDWW1JSFpwWlhkRGJHRnpjMlZ6TG1sdVpHVjRUMllvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tHOWlhaWtwSUQ0Z0xURmNiaUFnSUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZPWVcxbEtHNWhiV1VwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUc1aGJXVWdJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCdVlXMWxJRDBnVTNSeWFXNW5LRzVoYldVcE8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb0wxdGVZUzE2TUMwNVhGd3RJeVFsSmljcUt5NWVYMkI4ZmlGZEwya3VkR1Z6ZENodVlXMWxLU0I4ZkNCdVlXMWxJRDA5UFNBbkp5a2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduU1c1MllXeHBaQ0JqYUdGeVlXTjBaWElnYVc0Z2FHVmhaR1Z5SUdacFpXeGtJRzVoYldVNklGd2lKeUFySUc1aGJXVWdLeUFuWENJbktWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdibUZ0WlM1MGIweHZkMlZ5UTJGelpTZ3BYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZXWVd4MVpTaDJZV3gxWlNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RtRnNkV1VnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlGTjBjbWx1WnloMllXeDFaU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVnh1SUNCOVhHNWNiaUFnTHk4Z1FuVnBiR1FnWVNCa1pYTjBjblZqZEdsMlpTQnBkR1Z5WVhSdmNpQm1iM0lnZEdobElIWmhiSFZsSUd4cGMzUmNiaUFnWm5WdVkzUnBiMjRnYVhSbGNtRjBiM0pHYjNJb2FYUmxiWE1wSUh0Y2JpQWdJQ0IyWVhJZ2FYUmxjbUYwYjNJZ1BTQjdYRzRnSUNBZ0lDQnVaWGgwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxJRDBnYVhSbGJYTXVjMmhwWm5Rb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGtiMjVsT2lCMllXeDFaU0E5UFQwZ2RXNWtaV1pwYm1Wa0xDQjJZV3gxWlRvZ2RtRnNkV1Y5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR2xtSUNoemRYQndiM0owTG1sMFpYSmhZbXhsS1NCN1hHNGdJQ0FnSUNCcGRHVnlZWFJ2Y2x0VGVXMWliMnd1YVhSbGNtRjBiM0pkSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBkR1Z5WVhSdmNseHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYVhSbGNtRjBiM0pjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUVobFlXUmxjbk1vYUdWaFpHVnljeWtnZTF4dUlDQWdJSFJvYVhNdWJXRndJRDBnZTMwN1hHNWNiaUFnSUNCcFppQW9hR1ZoWkdWeWN5QnBibk4wWVc1alpXOW1JRWhsWVdSbGNuTXBJSHRjYmlBZ0lDQWdJR2hsWVdSbGNuTXVabTl5UldGamFDaG1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZ3Y0dWdVpDaHVZVzFsTENCMllXeDFaU2s3WEc0Z0lDQWdJQ0I5TENCMGFHbHpLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2FHVmhaR1Z5Y3lrcElIdGNiaUFnSUNBZ0lHaGxZV1JsY25NdVptOXlSV0ZqYUNobWRXNWpkR2x2Ymlob1pXRmtaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoY0hCbGJtUW9hR1ZoWkdWeVd6QmRMQ0JvWldGa1pYSmJNVjBwTzF4dUlDQWdJQ0FnZlN3Z2RHaHBjeWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hvWldGa1pYSnpLU0I3WEc0Z0lDQWdJQ0JQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsT1lXMWxjeWhvWldGa1pYSnpLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGNIQmxibVFvYm1GdFpTd2dhR1ZoWkdWeWMxdHVZVzFsWFNrN1hHNGdJQ0FnSUNCOUxDQjBhR2x6S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCSVpXRmtaWEp6TG5CeWIzUnZkSGx3WlM1aGNIQmxibVFnUFNCbWRXNWpkR2x2YmlodVlXMWxMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lHNWhiV1VnUFNCdWIzSnRZV3hwZW1WT1lXMWxLRzVoYldVcE8xeHVJQ0FnSUhaaGJIVmxJRDBnYm05eWJXRnNhWHBsVm1Gc2RXVW9kbUZzZFdVcE8xeHVJQ0FnSUhaaGNpQnZiR1JXWVd4MVpTQTlJSFJvYVhNdWJXRndXMjVoYldWZE8xeHVJQ0FnSUhSb2FYTXViV0Z3VzI1aGJXVmRJRDBnYjJ4a1ZtRnNkV1VnUHlCdmJHUldZV3gxWlNBcklDY3NJQ2NnS3lCMllXeDFaU0E2SUhaaGJIVmxPMXh1SUNCOU8xeHVYRzRnSUVobFlXUmxjbk11Y0hKdmRHOTBlWEJsV3lka1pXeGxkR1VuWFNBOUlHWjFibU4wYVc5dUtHNWhiV1VwSUh0Y2JpQWdJQ0JrWld4bGRHVWdkR2hwY3k1dFlYQmJibTl5YldGc2FYcGxUbUZ0WlNodVlXMWxLVjA3WEc0Z0lIMDdYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dVdVoyVjBJRDBnWm5WdVkzUnBiMjRvYm1GdFpTa2dlMXh1SUNBZ0lHNWhiV1VnUFNCdWIzSnRZV3hwZW1WT1lXMWxLRzVoYldVcE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtaGhjeWh1WVcxbEtTQS9JSFJvYVhNdWJXRndXMjVoYldWZElEb2diblZzYkZ4dUlDQjlPMXh1WEc0Z0lFaGxZV1JsY25NdWNISnZkRzkwZVhCbExtaGhjeUE5SUdaMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV0WVhBdWFHRnpUM2R1VUhKdmNHVnlkSGtvYm05eWJXRnNhWHBsVG1GdFpTaHVZVzFsS1NsY2JpQWdmVHRjYmx4dUlDQklaV0ZrWlhKekxuQnliM1J2ZEhsd1pTNXpaWFFnUFNCbWRXNWpkR2x2YmlodVlXMWxMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lIUm9hWE11YldGd1cyNXZjbTFoYkdsNlpVNWhiV1VvYm1GdFpTbGRJRDBnYm05eWJXRnNhWHBsVm1Gc2RXVW9kbUZzZFdVcE8xeHVJQ0I5TzF4dVhHNGdJRWhsWVdSbGNuTXVjSEp2ZEc5MGVYQmxMbVp2Y2tWaFkyZ2dQU0JtZFc1amRHbHZiaWhqWVd4c1ltRmpheXdnZEdocGMwRnlaeWtnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJRzVoYldVZ2FXNGdkR2hwY3k1dFlYQXBJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTFoY0M1b1lYTlBkMjVRY205d1pYSjBlU2h1WVcxbEtTa2dlMXh1SUNBZ0lDQWdJQ0JqWVd4c1ltRmpheTVqWVd4c0tIUm9hWE5CY21jc0lIUm9hWE11YldGd1cyNWhiV1ZkTENCdVlXMWxMQ0IwYUdsektUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdTR1ZoWkdWeWN5NXdjbTkwYjNSNWNHVXVhMlY1Y3lBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUJwZEdWdGN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmloMllXeDFaU3dnYm1GdFpTa2dlMXh1SUNBZ0lDQWdhWFJsYlhNdWNIVnphQ2h1WVcxbEtUdGNiaUFnSUNCOUtUdGNiaUFnSUNCeVpYUjFjbTRnYVhSbGNtRjBiM0pHYjNJb2FYUmxiWE1wWEc0Z0lIMDdYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dVdWRtRnNkV1Z6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RtRnlJR2wwWlcxeklEMGdXMTA3WEc0Z0lDQWdkR2hwY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwZEdWdGN5NXdkWE5vS0haaGJIVmxLVHRjYmlBZ0lDQjlLVHRjYmlBZ0lDQnlaWFIxY200Z2FYUmxjbUYwYjNKR2IzSW9hWFJsYlhNcFhHNGdJSDA3WEc1Y2JpQWdTR1ZoWkdWeWN5NXdjbTkwYjNSNWNHVXVaVzUwY21sbGN5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCcGRHVnRjeUE5SUZ0ZE8xeHVJQ0FnSUhSb2FYTXVabTl5UldGamFDaG1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JtRnRaU2tnZTF4dUlDQWdJQ0FnYVhSbGJYTXVjSFZ6YUNoYmJtRnRaU3dnZG1Gc2RXVmRLVHRjYmlBZ0lDQjlLVHRjYmlBZ0lDQnlaWFIxY200Z2FYUmxjbUYwYjNKR2IzSW9hWFJsYlhNcFhHNGdJSDA3WEc1Y2JpQWdhV1lnS0hOMWNIQnZjblF1YVhSbGNtRmliR1VwSUh0Y2JpQWdJQ0JJWldGa1pYSnpMbkJ5YjNSdmRIbHdaVnRUZVcxaWIyd3VhWFJsY21GMGIzSmRJRDBnU0dWaFpHVnljeTV3Y205MGIzUjVjR1V1Wlc1MGNtbGxjenRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUdOdmJuTjFiV1ZrS0dKdlpIa3BJSHRjYmlBZ0lDQnBaaUFvWW05a2VTNWliMlI1VlhObFpDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlGQnliMjFwYzJVdWNtVnFaV04wS0c1bGR5QlVlWEJsUlhKeWIzSW9KMEZzY21WaFpIa2djbVZoWkNjcEtWeHVJQ0FnSUgxY2JpQWdJQ0JpYjJSNUxtSnZaSGxWYzJWa0lEMGdkSEoxWlR0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHWnBiR1ZTWldGa1pYSlNaV0ZrZVNoeVpXRmtaWElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z0lDQWdJQ0J5WldGa1pYSXViMjVzYjJGa0lEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGMyOXNkbVVvY21WaFpHVnlMbkpsYzNWc2RDazdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdjbVZoWkdWeUxtOXVaWEp5YjNJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WcVpXTjBLSEpsWVdSbGNpNWxjbkp2Y2lrN1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgwcFhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnlaV0ZrUW14dllrRnpRWEp5WVhsQ2RXWm1aWElvWW14dllpa2dlMXh1SUNBZ0lIWmhjaUJ5WldGa1pYSWdQU0J1WlhjZ1JtbHNaVkpsWVdSbGNpZ3BPMXh1SUNBZ0lIWmhjaUJ3Y205dGFYTmxJRDBnWm1sc1pWSmxZV1JsY2xKbFlXUjVLSEpsWVdSbGNpazdYRzRnSUNBZ2NtVmhaR1Z5TG5KbFlXUkJjMEZ5Y21GNVFuVm1abVZ5S0dKc2IySXBPMXh1SUNBZ0lISmxkSFZ5YmlCd2NtOXRhWE5sWEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCeVpXRmtRbXh2WWtGelZHVjRkQ2hpYkc5aUtTQjdYRzRnSUNBZ2RtRnlJSEpsWVdSbGNpQTlJRzVsZHlCR2FXeGxVbVZoWkdWeUtDazdYRzRnSUNBZ2RtRnlJSEJ5YjIxcGMyVWdQU0JtYVd4bFVtVmhaR1Z5VW1WaFpIa29jbVZoWkdWeUtUdGNiaUFnSUNCeVpXRmtaWEl1Y21WaFpFRnpWR1Y0ZENoaWJHOWlLVHRjYmlBZ0lDQnlaWFIxY200Z2NISnZiV2x6WlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVmhaRUZ5Y21GNVFuVm1abVZ5UVhOVVpYaDBLR0oxWmlrZ2UxeHVJQ0FnSUhaaGNpQjJhV1YzSUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvWW5WbUtUdGNiaUFnSUNCMllYSWdZMmhoY25NZ1BTQnVaWGNnUVhKeVlYa29kbWxsZHk1c1pXNW5kR2dwTzF4dVhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCMmFXVjNMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCamFHRnljMXRwWFNBOUlGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9kbWxsZDF0cFhTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJqYUdGeWN5NXFiMmx1S0NjbktWeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdZblZtWm1WeVEyeHZibVVvWW5WbUtTQjdYRzRnSUNBZ2FXWWdLR0oxWmk1emJHbGpaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR0oxWmk1emJHbGpaU2d3S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjJZWElnZG1sbGR5QTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtHSjFaaTVpZVhSbFRHVnVaM1JvS1R0Y2JpQWdJQ0FnSUhacFpYY3VjMlYwS0c1bGR5QlZhVzUwT0VGeWNtRjVLR0oxWmlrcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUhacFpYY3VZblZtWm1WeVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z1FtOWtlU2dwSUh0Y2JpQWdJQ0IwYUdsekxtSnZaSGxWYzJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNCMGFHbHpMbDlwYm1sMFFtOWtlU0E5SUdaMWJtTjBhVzl1S0dKdlpIa3BJSHRjYmlBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUdabGRHTm9MVzF2WTJzZ2QzSmhjSE1nZEdobElGSmxjM0J2Ym5ObElHOWlhbVZqZENCcGJpQmhiaUJGVXpZZ1VISnZlSGtnZEc5Y2JpQWdJQ0FnSUNBZ2NISnZkbWxrWlNCMWMyVm1kV3dnZEdWemRDQm9ZWEp1WlhOeklHWmxZWFIxY21WeklITjFZMmdnWVhNZ1pteDFjMmd1SUVodmQyVjJaWElzSUc5dVhHNGdJQ0FnSUNBZ0lFVlROU0JpY205M2MyVnljeUIzYVhSb2IzVjBJR1psZEdOb0lHOXlJRkJ5YjNoNUlITjFjSEJ2Y25RZ2NHOXNiSGxtYVd4c2N5QnRkWE4wSUdKbElIVnpaV1E3WEc0Z0lDQWdJQ0FnSUhSb1pTQndjbTk0ZVMxd2IyeHNlV1pwYkd3Z2FYTWdkVzVoWW14bElIUnZJSEJ5YjNoNUlHRnVJR0YwZEhKcFluVjBaU0IxYm14bGMzTWdhWFFnWlhocGMzUnpYRzRnSUNBZ0lDQWdJRzl1SUhSb1pTQnZZbXBsWTNRZ1ltVm1iM0psSUhSb1pTQlFjbTk0ZVNCcGN5QmpjbVZoZEdWa0xpQlVhR2x6SUdOb1lXNW5aU0JsYm5OMWNtVnpYRzRnSUNBZ0lDQWdJRkpsYzNCdmJuTmxMbUp2WkhsVmMyVmtJR1Y0YVhOMGN5QnZiaUIwYUdVZ2FXNXpkR0Z1WTJVc0lIZG9hV3hsSUcxaGFXNTBZV2x1YVc1bklIUm9aVnh1SUNBZ0lDQWdJQ0J6WlcxaGJuUnBZeUJ2WmlCelpYUjBhVzVuSUZKbGNYVmxjM1F1WW05a2VWVnpaV1FnYVc0Z2RHaGxJR052Ym5OMGNuVmpkRzl5SUdKbFptOXlaVnh1SUNBZ0lDQWdJQ0JmYVc1cGRFSnZaSGtnYVhNZ1kyRnNiR1ZrTGx4dUlDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhSb2FYTXVZbTlrZVZWelpXUWdQU0IwYUdsekxtSnZaSGxWYzJWa08xeHVJQ0FnSUNBZ2RHaHBjeTVmWW05a2VVbHVhWFFnUFNCaWIyUjVPMXh1SUNBZ0lDQWdhV1lnS0NGaWIyUjVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMkp2WkhsVVpYaDBJRDBnSnljN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCaWIyUjVJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aWIyUjVWR1Y0ZENBOUlHSnZaSGs3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hOMWNIQnZjblF1WW14dllpQW1KaUJDYkc5aUxuQnliM1J2ZEhsd1pTNXBjMUJ5YjNSdmRIbHdaVTltS0dKdlpIa3BLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMkp2WkhsQ2JHOWlJRDBnWW05a2VUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9jM1Z3Y0c5eWRDNW1iM0p0UkdGMFlTQW1KaUJHYjNKdFJHRjBZUzV3Y205MGIzUjVjR1V1YVhOUWNtOTBiM1I1Y0dWUFppaGliMlI1S1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aWIyUjVSbTl5YlVSaGRHRWdQU0JpYjJSNU8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHpkWEJ3YjNKMExuTmxZWEpqYUZCaGNtRnRjeUFtSmlCVlVreFRaV0Z5WTJoUVlYSmhiWE11Y0hKdmRHOTBlWEJsTG1selVISnZkRzkwZVhCbFQyWW9ZbTlrZVNrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlltOWtlVlJsZUhRZ1BTQmliMlI1TG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tITjFjSEJ2Y25RdVlYSnlZWGxDZFdabVpYSWdKaVlnYzNWd2NHOXlkQzVpYkc5aUlDWW1JR2x6UkdGMFlWWnBaWGNvWW05a2VTa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZbTlrZVVGeWNtRjVRblZtWm1WeUlEMGdZblZtWm1WeVEyeHZibVVvWW05a2VTNWlkV1ptWlhJcE8xeHVJQ0FnSUNBZ0lDQXZMeUJKUlNBeE1DMHhNU0JqWVc0bmRDQm9ZVzVrYkdVZ1lTQkVZWFJoVm1sbGR5QmliMlI1TGx4dUlDQWdJQ0FnSUNCMGFHbHpMbDlpYjJSNVNXNXBkQ0E5SUc1bGR5QkNiRzlpS0Z0MGFHbHpMbDlpYjJSNVFYSnlZWGxDZFdabVpYSmRLVHRjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvYzNWd2NHOXlkQzVoY25KaGVVSjFabVpsY2lBbUppQW9RWEp5WVhsQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1selVISnZkRzkwZVhCbFQyWW9ZbTlrZVNrZ2ZId2dhWE5CY25KaGVVSjFabVpsY2xacFpYY29ZbTlrZVNrcEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgySnZaSGxCY25KaGVVSjFabVpsY2lBOUlHSjFabVpsY2tOc2IyNWxLR0p2WkhrcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWW05a2VWUmxlSFFnUFNCaWIyUjVJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tHSnZaSGtwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9JWFJvYVhNdWFHVmhaR1Z5Y3k1blpYUW9KMk52Ym5SbGJuUXRkSGx3WlNjcEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWW05a2VTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1obFlXUmxjbk11YzJWMEtDZGpiMjUwWlc1MExYUjVjR1VuTENBbmRHVjRkQzl3YkdGcGJqdGphR0Z5YzJWMFBWVlVSaTA0SnlrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1ZlltOWtlVUpzYjJJZ0ppWWdkR2hwY3k1ZlltOWtlVUpzYjJJdWRIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUdWaFpHVnljeTV6WlhRb0oyTnZiblJsYm5RdGRIbHdaU2NzSUhSb2FYTXVYMkp2WkhsQ2JHOWlMblI1Y0dVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSE4xY0hCdmNuUXVjMlZoY21Ob1VHRnlZVzF6SUNZbUlGVlNURk5sWVhKamFGQmhjbUZ0Y3k1d2NtOTBiM1I1Y0dVdWFYTlFjbTkwYjNSNWNHVlBaaWhpYjJSNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR1ZoWkdWeWN5NXpaWFFvSjJOdmJuUmxiblF0ZEhsd1pTY3NJQ2RoY0hCc2FXTmhkR2x2Ymk5NExYZDNkeTFtYjNKdExYVnliR1Z1WTI5a1pXUTdZMmhoY25ObGREMVZWRVl0T0NjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHbG1JQ2h6ZFhCd2IzSjBMbUpzYjJJcElIdGNiaUFnSUNBZ0lIUm9hWE11WW14dllpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjbVZxWldOMFpXUWdQU0JqYjI1emRXMWxaQ2gwYUdsektUdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbGFtVmpkR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlISmxhbVZqZEdWa1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVmWW05a2VVSnNiMklwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1VISnZiV2x6WlM1eVpYTnZiSFpsS0hSb2FYTXVYMkp2WkhsQ2JHOWlLVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXVYMkp2WkhsQmNuSmhlVUoxWm1abGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYzI5c2RtVW9ibVYzSUVKc2IySW9XM1JvYVhNdVgySnZaSGxCY25KaGVVSjFabVpsY2wwcEtWeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdVgySnZaSGxHYjNKdFJHRjBZU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyOTFiR1FnYm05MElISmxZV1FnUm05eWJVUmhkR0VnWW05a2VTQmhjeUJpYkc5aUp5bGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdVSEp2YldselpTNXlaWE52YkhabEtHNWxkeUJDYkc5aUtGdDBhR2x6TGw5aWIyUjVWR1Y0ZEYwcEtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0IwYUdsekxtRnljbUY1UW5WbVptVnlJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOWliMlI1UVhKeVlYbENkV1ptWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2FYTkRiMjV6ZFcxbFpDQTlJR052Ym5OMWJXVmtLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwTnZibk4xYldWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYVhORGIyNXpkVzFsWkZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1FYSnlZWGxDZFdabVpYSXVhWE5XYVdWM0tIUm9hWE11WDJKdlpIbEJjbkpoZVVKMVptWmxjaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQlFjbTl0YVhObExuSmxjMjlzZG1Vb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMkp2WkhsQmNuSmhlVUoxWm1abGNpNWlkV1ptWlhJdWMyeHBZMlVvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZZbTlrZVVGeWNtRjVRblZtWm1WeUxtSjVkR1ZQWm1aelpYUXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlltOWtlVUZ5Y21GNVFuVm1abVZ5TG1KNWRHVlBabVp6WlhRZ0t5QjBhR2x6TGw5aWIyUjVRWEp5WVhsQ2RXWm1aWEl1WW5sMFpVeGxibWQwYUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGMyOXNkbVVvZEdocGN5NWZZbTlrZVVGeWNtRjVRblZtWm1WeUtWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWliRzlpS0NrdWRHaGxiaWh5WldGa1FteHZZa0Z6UVhKeVlYbENkV1ptWlhJcFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTUwWlhoMElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NtVnFaV04wWldRZ1BTQmpiMjV6ZFcxbFpDaDBhR2x6S1R0Y2JpQWdJQ0FnSUdsbUlDaHlaV3BsWTNSbFpDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZxWldOMFpXUmNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVYMkp2WkhsQ2JHOWlLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WldGa1FteHZZa0Z6VkdWNGRDaDBhR2x6TGw5aWIyUjVRbXh2WWlsY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaHBjeTVmWW05a2VVRnljbUY1UW5WbVptVnlLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYzI5c2RtVW9jbVZoWkVGeWNtRjVRblZtWm1WeVFYTlVaWGgwS0hSb2FYTXVYMkp2WkhsQmNuSmhlVUoxWm1abGNpa3BYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdVgySnZaSGxHYjNKdFJHRjBZU2tnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjJOdmRXeGtJRzV2ZENCeVpXRmtJRVp2Y20xRVlYUmhJR0p2WkhrZ1lYTWdkR1Y0ZENjcFhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVUhKdmJXbHpaUzV5WlhOdmJIWmxLSFJvYVhNdVgySnZaSGxVWlhoMEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCcFppQW9jM1Z3Y0c5eWRDNW1iM0p0UkdGMFlTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1bWIzSnRSR0YwWVNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MFpYaDBLQ2t1ZEdobGJpaGtaV052WkdVcFhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVhbk52YmlBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11ZEdWNGRDZ3BMblJvWlc0b1NsTlBUaTV3WVhKelpTbGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJQzh2SUVoVVZGQWdiV1YwYUc5a2N5QjNhRzl6WlNCallYQnBkR0ZzYVhwaGRHbHZiaUJ6YUc5MWJHUWdZbVVnYm05eWJXRnNhWHBsWkZ4dUlDQjJZWElnYldWMGFHOWtjeUE5SUZzblJFVk1SVlJGSnl3Z0owZEZWQ2NzSUNkSVJVRkVKeXdnSjA5UVZFbFBUbE1uTENBblVFOVRWQ2NzSUNkUVZWUW5YVHRjYmx4dUlDQm1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVk5aWFJvYjJRb2JXVjBhRzlrS1NCN1hHNGdJQ0FnZG1GeUlIVndZMkZ6WldRZ1BTQnRaWFJvYjJRdWRHOVZjSEJsY2tOaGMyVW9LVHRjYmlBZ0lDQnlaWFIxY200Z2JXVjBhRzlrY3k1cGJtUmxlRTltS0hWd1kyRnpaV1FwSUQ0Z0xURWdQeUIxY0dOaGMyVmtJRG9nYldWMGFHOWtYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJTWlhGMVpYTjBLR2x1Y0hWMExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLQ0VvZEdocGN5QnBibk4wWVc1alpXOW1JRkpsY1hWbGMzUXBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkUWJHVmhjMlVnZFhObElIUm9aU0JjSW01bGQxd2lJRzl3WlhKaGRHOXlMQ0IwYUdseklFUlBUU0J2WW1wbFkzUWdZMjl1YzNSeWRXTjBiM0lnWTJGdWJtOTBJR0psSUdOaGJHeGxaQ0JoY3lCaElHWjFibU4wYVc5dUxpY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NZ2ZId2dlMzA3WEc0Z0lDQWdkbUZ5SUdKdlpIa2dQU0J2Y0hScGIyNXpMbUp2WkhrN1hHNWNiaUFnSUNCcFppQW9hVzV3ZFhRZ2FXNXpkR0Z1WTJWdlppQlNaWEYxWlhOMEtTQjdYRzRnSUNBZ0lDQnBaaUFvYVc1d2RYUXVZbTlrZVZWelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFXeHlaV0ZrZVNCeVpXRmtKeWxjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdWRYSnNJRDBnYVc1d2RYUXVkWEpzTzF4dUlDQWdJQ0FnZEdocGN5NWpjbVZrWlc1MGFXRnNjeUE5SUdsdWNIVjBMbU55WldSbGJuUnBZV3h6TzF4dUlDQWdJQ0FnYVdZZ0tDRnZjSFJwYjI1ekxtaGxZV1JsY25NcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1pXRmtaWEp6SUQwZ2JtVjNJRWhsWVdSbGNuTW9hVzV3ZFhRdWFHVmhaR1Z5Y3lrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbTFsZEdodlpDQTlJR2x1Y0hWMExtMWxkR2h2WkR0Y2JpQWdJQ0FnSUhSb2FYTXViVzlrWlNBOUlHbHVjSFYwTG0xdlpHVTdYRzRnSUNBZ0lDQjBhR2x6TG5OcFoyNWhiQ0E5SUdsdWNIVjBMbk5wWjI1aGJEdGNiaUFnSUNBZ0lHbG1JQ2doWW05a2VTQW1KaUJwYm5CMWRDNWZZbTlrZVVsdWFYUWdJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0JpYjJSNUlEMGdhVzV3ZFhRdVgySnZaSGxKYm1sME8xeHVJQ0FnSUNBZ0lDQnBibkIxZEM1aWIyUjVWWE5sWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11ZFhKc0lEMGdVM1J5YVc1bktHbHVjSFYwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtTnlaV1JsYm5ScFlXeHpJRDBnYjNCMGFXOXVjeTVqY21Wa1pXNTBhV0ZzY3lCOGZDQjBhR2x6TG1OeVpXUmxiblJwWVd4eklIeDhJQ2R6WVcxbExXOXlhV2RwYmljN1hHNGdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFHVmhaR1Z5Y3lCOGZDQWhkR2hwY3k1b1pXRmtaWEp6S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWhsWVdSbGNuTWdQU0J1WlhjZ1NHVmhaR1Z5Y3lodmNIUnBiMjV6TG1obFlXUmxjbk1wTzF4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG0xbGRHaHZaQ0E5SUc1dmNtMWhiR2w2WlUxbGRHaHZaQ2h2Y0hScGIyNXpMbTFsZEdodlpDQjhmQ0IwYUdsekxtMWxkR2h2WkNCOGZDQW5SMFZVSnlrN1hHNGdJQ0FnZEdocGN5NXRiMlJsSUQwZ2IzQjBhVzl1Y3k1dGIyUmxJSHg4SUhSb2FYTXViVzlrWlNCOGZDQnVkV3hzTzF4dUlDQWdJSFJvYVhNdWMybG5ibUZzSUQwZ2IzQjBhVzl1Y3k1emFXZHVZV3dnZkh3Z2RHaHBjeTV6YVdkdVlXdzdYRzRnSUNBZ2RHaHBjeTV5WldabGNuSmxjaUE5SUc1MWJHdzdYRzVjYmlBZ0lDQnBaaUFvS0hSb2FYTXViV1YwYUc5a0lEMDlQU0FuUjBWVUp5QjhmQ0IwYUdsekxtMWxkR2h2WkNBOVBUMGdKMGhGUVVRbktTQW1KaUJpYjJSNUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RDYjJSNUlHNXZkQ0JoYkd4dmQyVmtJR1p2Y2lCSFJWUWdiM0lnU0VWQlJDQnlaWEYxWlhOMGN5Y3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVYMmx1YVhSQ2IyUjVLR0p2WkhrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWJXVjBhRzlrSUQwOVBTQW5SMFZVSnlCOGZDQjBhR2x6TG0xbGRHaHZaQ0E5UFQwZ0owaEZRVVFuS1NCN1hHNGdJQ0FnSUNCcFppQW9iM0IwYVc5dWN5NWpZV05vWlNBOVBUMGdKMjV2TFhOMGIzSmxKeUI4ZkNCdmNIUnBiMjV6TG1OaFkyaGxJRDA5UFNBbmJtOHRZMkZqYUdVbktTQjdYRzRnSUNBZ0lDQWdJQzh2SUZObFlYSmphQ0JtYjNJZ1lTQW5YeWNnY0dGeVlXMWxkR1Z5SUdsdUlIUm9aU0J4ZFdWeWVTQnpkSEpwYm1kY2JpQWdJQ0FnSUNBZ2RtRnlJSEpsVUdGeVlXMVRaV0Z5WTJnZ1BTQXZLRnMvSmwwcFh6MWJYaVpkS2k4N1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WlZCaGNtRnRVMlZoY21Ob0xuUmxjM1FvZEdocGN5NTFjbXdwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2FYUWdZV3h5WldGa2VTQmxlR2x6ZEhNZ2RHaGxiaUJ6WlhRZ2RHaGxJSFpoYkhWbElIZHBkR2dnZEdobElHTjFjbkpsYm5RZ2RHbHRaVnh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVkWEpzSUQwZ2RHaHBjeTUxY213dWNtVndiR0ZqWlNoeVpWQmhjbUZ0VTJWaGNtTm9MQ0FuSkRGZlBTY2dLeUJ1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnVDNSb1pYSjNhWE5sSUdGa1pDQmhJRzVsZHlBblh5Y2djR0Z5WVcxbGRHVnlJSFJ2SUhSb1pTQmxibVFnZDJsMGFDQjBhR1VnWTNWeWNtVnVkQ0IwYVcxbFhHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbFVYVmxjbmxUZEhKcGJtY2dQU0F2WEZ3L0x6dGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuVnliQ0FyUFNBb2NtVlJkV1Z5ZVZOMGNtbHVaeTUwWlhOMEtIUm9hWE11ZFhKc0tTQS9JQ2NtSnlBNklDYy9KeWtnS3lBblh6MG5JQ3NnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQlNaWEYxWlhOMExuQnliM1J2ZEhsd1pTNWpiRzl1WlNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVbVZ4ZFdWemRDaDBhR2x6TENCN1ltOWtlVG9nZEdocGN5NWZZbTlrZVVsdWFYUjlLVnh1SUNCOU8xeHVYRzRnSUdaMWJtTjBhVzl1SUdSbFkyOWtaU2hpYjJSNUtTQjdYRzRnSUNBZ2RtRnlJR1p2Y20wZ1BTQnVaWGNnUm05eWJVUmhkR0VvS1R0Y2JpQWdJQ0JpYjJSNVhHNGdJQ0FnSUNBdWRISnBiU2dwWEc0Z0lDQWdJQ0F1YzNCc2FYUW9KeVluS1Z4dUlDQWdJQ0FnTG1admNrVmhZMmdvWm5WdVkzUnBiMjRvWW5sMFpYTXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSjVkR1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhOd2JHbDBJRDBnWW5sMFpYTXVjM0JzYVhRb0p6MG5LVHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibUZ0WlNBOUlITndiR2wwTG5Ob2FXWjBLQ2t1Y21Wd2JHRmpaU2d2WEZ3ckwyY3NJQ2NnSnlrN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxJRDBnYzNCc2FYUXVhbTlwYmlnblBTY3BMbkpsY0d4aFkyVW9MMXhjS3k5bkxDQW5JQ2NwTzF4dUlDQWdJQ0FnSUNBZ0lHWnZjbTB1WVhCd1pXNWtLR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2h1WVcxbEtTd2daR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSEpsZEhWeWJpQm1iM0p0WEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCd1lYSnpaVWhsWVdSbGNuTW9jbUYzU0dWaFpHVnljeWtnZTF4dUlDQWdJSFpoY2lCb1pXRmtaWEp6SUQwZ2JtVjNJRWhsWVdSbGNuTW9LVHRjYmlBZ0lDQXZMeUJTWlhCc1lXTmxJR2x1YzNSaGJtTmxjeUJ2WmlCY1hISmNYRzRnWVc1a0lGeGNiaUJtYjJ4c2IzZGxaQ0JpZVNCaGRDQnNaV0Z6ZENCdmJtVWdjM0JoWTJVZ2IzSWdhRzl5YVhwdmJuUmhiQ0IwWVdJZ2QybDBhQ0JoSUhOd1lXTmxYRzRnSUNBZ0x5OGdhSFIwY0hNNkx5OTBiMjlzY3k1cFpYUm1MbTl5Wnk5b2RHMXNMM0ptWXpjeU16QWpjMlZqZEdsdmJpMHpMakpjYmlBZ0lDQjJZWElnY0hKbFVISnZZMlZ6YzJWa1NHVmhaR1Z5Y3lBOUlISmhkMGhsWVdSbGNuTXVjbVZ3YkdGalpTZ3ZYRnh5UDF4Y2JsdGNYSFFnWFNzdlp5d2dKeUFuS1R0Y2JpQWdJQ0F2THlCQmRtOXBaR2x1WnlCemNHeHBkQ0IyYVdFZ2NtVm5aWGdnZEc4Z2QyOXlheUJoY205MWJtUWdZU0JqYjIxdGIyNGdTVVV4TVNCaWRXY2dkMmwwYUNCMGFHVWdZMjl5WlMxcWN5QXpMall1TUNCeVpXZGxlQ0J3YjJ4NVptbHNiRnh1SUNBZ0lDOHZJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluYVhSb2RXSXZabVYwWTJndmFYTnpkV1Z6THpjME9GeHVJQ0FnSUM4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTZiRzlwY205amF5OWpiM0psTFdwekwybHpjM1ZsY3k4M05URmNiaUFnSUNCd2NtVlFjbTlqWlhOelpXUklaV0ZrWlhKelhHNGdJQ0FnSUNBdWMzQnNhWFFvSjF4Y2NpY3BYRzRnSUNBZ0lDQXViV0Z3S0daMWJtTjBhVzl1S0dobFlXUmxjaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYUdWaFpHVnlMbWx1WkdWNFQyWW9KMXhjYmljcElEMDlQU0F3SUQ4Z2FHVmhaR1Z5TG5OMVluTjBjaWd4TENCb1pXRmtaWEl1YkdWdVozUm9LU0E2SUdobFlXUmxjbHh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLR3hwYm1VcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCaGNuUnpJRDBnYkdsdVpTNXpjR3hwZENnbk9pY3BPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2EyVjVJRDBnY0dGeWRITXVjMmhwWm5Rb0tTNTBjbWx0S0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2RtRnNkV1VnUFNCd1lYSjBjeTVxYjJsdUtDYzZKeWt1ZEhKcGJTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUdobFlXUmxjbk11WVhCd1pXNWtLR3RsZVN3Z2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCeVpYUjFjbTRnYUdWaFpHVnljMXh1SUNCOVhHNWNiaUFnUW05a2VTNWpZV3hzS0ZKbGNYVmxjM1F1Y0hKdmRHOTBlWEJsS1R0Y2JseHVJQ0JtZFc1amRHbHZiaUJTWlhOd2IyNXpaU2hpYjJSNVNXNXBkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR2xtSUNnaEtIUm9hWE1nYVc1emRHRnVZMlZ2WmlCU1pYTndiMjV6WlNrcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMUJzWldGelpTQjFjMlVnZEdobElGd2libVYzWENJZ2IzQmxjbUYwYjNJc0lIUm9hWE1nUkU5TklHOWlhbVZqZENCamIyNXpkSEoxWTNSdmNpQmpZVzV1YjNRZ1ltVWdZMkZzYkdWa0lHRnpJR0VnWm5WdVkzUnBiMjR1SnlsY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0NGdmNIUnBiMjV6S1NCN1hHNGdJQ0FnSUNCdmNIUnBiMjV6SUQwZ2UzMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTUwZVhCbElEMGdKMlJsWm1GMWJIUW5PMXh1SUNBZ0lIUm9hWE11YzNSaGRIVnpJRDBnYjNCMGFXOXVjeTV6ZEdGMGRYTWdQVDA5SUhWdVpHVm1hVzVsWkNBL0lESXdNQ0E2SUc5d2RHbHZibk11YzNSaGRIVnpPMXh1SUNBZ0lIUm9hWE11YjJzZ1BTQjBhR2x6TG5OMFlYUjFjeUErUFNBeU1EQWdKaVlnZEdocGN5NXpkR0YwZFhNZ1BDQXpNREE3WEc0Z0lDQWdkR2hwY3k1emRHRjBkWE5VWlhoMElEMGdiM0IwYVc5dWN5NXpkR0YwZFhOVVpYaDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QW5KeUE2SUNjbklDc2diM0IwYVc5dWN5NXpkR0YwZFhOVVpYaDBPMXh1SUNBZ0lIUm9hWE11YUdWaFpHVnljeUE5SUc1bGR5QklaV0ZrWlhKektHOXdkR2x2Ym5NdWFHVmhaR1Z5Y3lrN1hHNGdJQ0FnZEdocGN5NTFjbXdnUFNCdmNIUnBiMjV6TG5WeWJDQjhmQ0FuSnp0Y2JpQWdJQ0IwYUdsekxsOXBibWwwUW05a2VTaGliMlI1U1c1cGRDazdYRzRnSUgxY2JseHVJQ0JDYjJSNUxtTmhiR3dvVW1WemNHOXVjMlV1Y0hKdmRHOTBlWEJsS1R0Y2JseHVJQ0JTWlhOd2IyNXpaUzV3Y205MGIzUjVjR1V1WTJ4dmJtVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZKbGMzQnZibk5sS0hSb2FYTXVYMkp2WkhsSmJtbDBMQ0I3WEc0Z0lDQWdJQ0J6ZEdGMGRYTTZJSFJvYVhNdWMzUmhkSFZ6TEZ4dUlDQWdJQ0FnYzNSaGRIVnpWR1Y0ZERvZ2RHaHBjeTV6ZEdGMGRYTlVaWGgwTEZ4dUlDQWdJQ0FnYUdWaFpHVnljem9nYm1WM0lFaGxZV1JsY25Nb2RHaHBjeTVvWldGa1pYSnpLU3hjYmlBZ0lDQWdJSFZ5YkRvZ2RHaHBjeTUxY214Y2JpQWdJQ0I5S1Z4dUlDQjlPMXh1WEc0Z0lGSmxjM0J2Ym5ObExtVnljbTl5SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RtRnlJSEpsYzNCdmJuTmxJRDBnYm1WM0lGSmxjM0J2Ym5ObEtHNTFiR3dzSUh0emRHRjBkWE02SURBc0lITjBZWFIxYzFSbGVIUTZJQ2NuZlNrN1hHNGdJQ0FnY21WemNHOXVjMlV1ZEhsd1pTQTlJQ2RsY25KdmNpYzdYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzQnZibk5sWEc0Z0lIMDdYRzVjYmlBZ2RtRnlJSEpsWkdseVpXTjBVM1JoZEhWelpYTWdQU0JiTXpBeExDQXpNRElzSURNd015d2dNekEzTENBek1EaGRPMXh1WEc0Z0lGSmxjM0J2Ym5ObExuSmxaR2x5WldOMElEMGdablZ1WTNScGIyNG9kWEpzTENCemRHRjBkWE1wSUh0Y2JpQWdJQ0JwWmlBb2NtVmthWEpsWTNSVGRHRjBkWE5sY3k1cGJtUmxlRTltS0hOMFlYUjFjeWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblNXNTJZV3hwWkNCemRHRjBkWE1nWTI5a1pTY3BYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlNaWE53YjI1elpTaHVkV3hzTENCN2MzUmhkSFZ6T2lCemRHRjBkWE1zSUdobFlXUmxjbk02SUh0c2IyTmhkR2x2YmpvZ2RYSnNmWDBwWEc0Z0lIMDdYRzVjYmlBZ1pYaHdiM0owY3k1RVQwMUZlR05sY0hScGIyNGdQU0JuYkc5aVlXd3VSRTlOUlhoalpYQjBhVzl1TzF4dUlDQjBjbmtnZTF4dUlDQWdJRzVsZHlCbGVIQnZjblJ6TGtSUFRVVjRZMlZ3ZEdsdmJpZ3BPMXh1SUNCOUlHTmhkR05vSUNobGNuSXBJSHRjYmlBZ0lDQmxlSEJ2Y25SekxrUlBUVVY0WTJWd2RHbHZiaUE5SUdaMWJtTjBhVzl1S0cxbGMzTmhaMlVzSUc1aGJXVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXVnpjMkZuWlNBOUlHMWxjM05oWjJVN1hHNGdJQ0FnSUNCMGFHbHpMbTVoYldVZ1BTQnVZVzFsTzF4dUlDQWdJQ0FnZG1GeUlHVnljbTl5SUQwZ1JYSnliM0lvYldWemMyRm5aU2s3WEc0Z0lDQWdJQ0IwYUdsekxuTjBZV05ySUQwZ1pYSnliM0l1YzNSaFkyczdYRzRnSUNBZ2ZUdGNiaUFnSUNCbGVIQnZjblJ6TGtSUFRVVjRZMlZ3ZEdsdmJpNXdjbTkwYjNSNWNHVWdQU0JQWW1wbFkzUXVZM0psWVhSbEtFVnljbTl5TG5CeWIzUnZkSGx3WlNrN1hHNGdJQ0FnWlhod2IzSjBjeTVFVDAxRmVHTmxjSFJwYjI0dWNISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlJRDBnWlhod2IzSjBjeTVFVDAxRmVHTmxjSFJwYjI0N1hHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQm1aWFJqYUNocGJuQjFkQ3dnYVc1cGRDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpaHlaWE52YkhabExDQnlaV3BsWTNRcElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhGMVpYTjBJRDBnYm1WM0lGSmxjWFZsYzNRb2FXNXdkWFFzSUdsdWFYUXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2NtVnhkV1Z6ZEM1emFXZHVZV3dnSmlZZ2NtVnhkV1Z6ZEM1emFXZHVZV3d1WVdKdmNuUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WcVpXTjBLRzVsZHlCbGVIQnZjblJ6TGtSUFRVVjRZMlZ3ZEdsdmJpZ25RV0p2Y25SbFpDY3NJQ2RCWW05eWRFVnljbTl5SnlrcFhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIWmhjaUI0YUhJZ1BTQnVaWGNnV0UxTVNIUjBjRkpsY1hWbGMzUW9LVHRjYmx4dUlDQWdJQ0FnWm5WdVkzUnBiMjRnWVdKdmNuUllhSElvS1NCN1hHNGdJQ0FnSUNBZ0lIaG9jaTVoWW05eWRDZ3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0I0YUhJdWIyNXNiMkZrSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdmNIUnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJSE4wWVhSMWN6b2dlR2h5TG5OMFlYUjFjeXhjYmlBZ0lDQWdJQ0FnSUNCemRHRjBkWE5VWlhoME9pQjRhSEl1YzNSaGRIVnpWR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ0lDQm9aV0ZrWlhKek9pQndZWEp6WlVobFlXUmxjbk1vZUdoeUxtZGxkRUZzYkZKbGMzQnZibk5sU0dWaFpHVnljeWdwSUh4OElDY25LVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6TG5WeWJDQTlJQ2R5WlhOd2IyNXpaVlZTVENjZ2FXNGdlR2h5SUQ4Z2VHaHlMbkpsYzNCdmJuTmxWVkpNSURvZ2IzQjBhVzl1Y3k1b1pXRmtaWEp6TG1kbGRDZ25XQzFTWlhGMVpYTjBMVlZTVENjcE8xeHVJQ0FnSUNBZ0lDQjJZWElnWW05a2VTQTlJQ2R5WlhOd2IyNXpaU2NnYVc0Z2VHaHlJRDhnZUdoeUxuSmxjM0J2Ym5ObElEb2dlR2h5TG5KbGMzQnZibk5sVkdWNGREdGNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtHNWxkeUJTWlhOd2IyNXpaU2hpYjJSNUxDQnZjSFJwYjI1ektTazdYRzRnSUNBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdlR2h5TG05dVpYSnliM0lnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaV3BsWTNRb2JtVjNJRlI1Y0dWRmNuSnZjaWduVG1WMGQyOXlheUJ5WlhGMVpYTjBJR1poYVd4bFpDY3BLVHRjYmlBZ0lDQWdJQ0FnZlN3Z01DazdYRzRnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0I0YUhJdWIyNTBhVzFsYjNWMElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WcVpXTjBLRzVsZHlCVWVYQmxSWEp5YjNJb0owNWxkSGR2Y21zZ2NtVnhkV1Z6ZENCbVlXbHNaV1FuS1NrN1hHNGdJQ0FnSUNBZ0lIMHNJREFwTzF4dUlDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ2VHaHlMbTl1WVdKdmNuUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpXcGxZM1FvYm1WM0lHVjRjRzl5ZEhNdVJFOU5SWGhqWlhCMGFXOXVLQ2RCWW05eWRHVmtKeXdnSjBGaWIzSjBSWEp5YjNJbktTazdYRzRnSUNBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdablZ1WTNScGIyNGdabWw0VlhKc0tIVnliQ2tnZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIxY213Z1BUMDlJQ2NuSUNZbUlHZHNiMkpoYkM1c2IyTmhkR2x2Ymk1b2NtVm1JRDhnWjJ4dlltRnNMbXh2WTJGMGFXOXVMbWh5WldZZ09pQjFjbXhjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjFjbXhjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCNGFISXViM0JsYmloeVpYRjFaWE4wTG0xbGRHaHZaQ3dnWm1sNFZYSnNLSEpsY1hWbGMzUXVkWEpzS1N3Z2RISjFaU2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaHlaWEYxWlhOMExtTnlaV1JsYm5ScFlXeHpJRDA5UFNBbmFXNWpiSFZrWlNjcElIdGNiaUFnSUNBZ0lDQWdlR2h5TG5kcGRHaERjbVZrWlc1MGFXRnNjeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSEpsY1hWbGMzUXVZM0psWkdWdWRHbGhiSE1nUFQwOUlDZHZiV2wwSnlrZ2UxeHVJQ0FnSUNBZ0lDQjRhSEl1ZDJsMGFFTnlaV1JsYm5ScFlXeHpJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNnbmNtVnpjRzl1YzJWVWVYQmxKeUJwYmlCNGFISXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjFjSEJ2Y25RdVlteHZZaWtnZTF4dUlDQWdJQ0FnSUNBZ0lIaG9jaTV5WlhOd2IyNXpaVlI1Y0dVZ1BTQW5ZbXh2WWljN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9YRzRnSUNBZ0lDQWdJQ0FnYzNWd2NHOXlkQzVoY25KaGVVSjFabVpsY2lBbUpseHVJQ0FnSUNBZ0lDQWdJSEpsY1hWbGMzUXVhR1ZoWkdWeWN5NW5aWFFvSjBOdmJuUmxiblF0Vkhsd1pTY3BJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEM1b1pXRmtaWEp6TG1kbGRDZ25RMjl1ZEdWdWRDMVVlWEJsSnlrdWFXNWtaWGhQWmlnbllYQndiR2xqWVhScGIyNHZiMk4wWlhRdGMzUnlaV0Z0SnlrZ0lUMDlJQzB4WEc0Z0lDQWdJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSGhvY2k1eVpYTndiMjV6WlZSNWNHVWdQU0FuWVhKeVlYbGlkV1ptWlhJbk8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNocGJtbDBJQ1ltSUhSNWNHVnZaaUJwYm1sMExtaGxZV1JsY25NZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUNFb2FXNXBkQzVvWldGa1pYSnpJR2x1YzNSaGJtTmxiMllnU0dWaFpHVnljeWtwSUh0Y2JpQWdJQ0FnSUNBZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVUbUZ0WlhNb2FXNXBkQzVvWldGa1pYSnpLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdJQ0I0YUhJdWMyVjBVbVZ4ZFdWemRFaGxZV1JsY2lodVlXMWxMQ0J1YjNKdFlXeHBlbVZXWVd4MVpTaHBibWwwTG1obFlXUmxjbk5iYm1GdFpWMHBLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wTG1obFlXUmxjbk11Wm05eVJXRmphQ2htZFc1amRHbHZiaWgyWVd4MVpTd2dibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSGhvY2k1elpYUlNaWEYxWlhOMFNHVmhaR1Z5S0c1aGJXVXNJSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaHlaWEYxWlhOMExuTnBaMjVoYkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMExuTnBaMjVoYkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkaFltOXlkQ2NzSUdGaWIzSjBXR2h5S1R0Y2JseHVJQ0FnSUNBZ0lDQjRhSEl1YjI1eVpXRmtlWE4wWVhSbFkyaGhibWRsSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1JFOU9SU0FvYzNWalkyVnpjeUJ2Y2lCbVlXbHNkWEpsS1Z4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2g0YUhJdWNtVmhaSGxUZEdGMFpTQTlQVDBnTkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WeGRXVnpkQzV6YVdkdVlXd3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWduWVdKdmNuUW5MQ0JoWW05eWRGaG9jaWs3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0I0YUhJdWMyVnVaQ2gwZVhCbGIyWWdjbVZ4ZFdWemRDNWZZbTlrZVVsdWFYUWdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdiblZzYkNBNklISmxjWFZsYzNRdVgySnZaSGxKYm1sMEtUdGNiaUFnSUNCOUtWeHVJQ0I5WEc1Y2JpQWdabVYwWTJndWNHOXNlV1pwYkd3Z1BTQjBjblZsTzF4dVhHNGdJR2xtSUNnaFoyeHZZbUZzTG1abGRHTm9LU0I3WEc0Z0lDQWdaMnh2WW1Gc0xtWmxkR05vSUQwZ1ptVjBZMmc3WEc0Z0lDQWdaMnh2WW1Gc0xraGxZV1JsY25NZ1BTQklaV0ZrWlhKek8xeHVJQ0FnSUdkc2IySmhiQzVTWlhGMVpYTjBJRDBnVW1WeGRXVnpkRHRjYmlBZ0lDQm5iRzlpWVd3dVVtVnpjRzl1YzJVZ1BTQlNaWE53YjI1elpUdGNiaUFnZlZ4dVhHNGdJR1Y0Y0c5eWRITXVTR1ZoWkdWeWN5QTlJRWhsWVdSbGNuTTdYRzRnSUdWNGNHOXlkSE11VW1WeGRXVnpkQ0E5SUZKbGNYVmxjM1E3WEc0Z0lHVjRjRzl5ZEhNdVVtVnpjRzl1YzJVZ1BTQlNaWE53YjI1elpUdGNiaUFnWlhod2IzSjBjeTVtWlhSamFDQTlJR1psZEdOb08xeHVYRzRnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1Y2JuMHBLU2s3WEc0aUxDSjJZWElnWW5NMU9HTm9aV05ySUQwZ2NtVnhkV2x5WlNnblluTTFPR05vWldOckp5bGNibHh1Wm5WdVkzUnBiMjRnWkdWamIyUmxVbUYzSUNoaWRXWm1aWElzSUhabGNuTnBiMjRwSUh0Y2JpQWdMeThnWTJobFkyc2dkbVZ5YzJsdmJpQnZibXg1SUdsbUlHUmxabWx1WldSY2JpQWdhV1lnS0habGNuTnBiMjRnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KaUJpZFdabVpYSmJNRjBnSVQwOUlIWmxjbk5wYjI0cElIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblNXNTJZV3hwWkNCdVpYUjNiM0pySUhabGNuTnBiMjRuS1Z4dVhHNGdJQzh2SUhWdVkyOXRjSEpsYzNObFpGeHVJQ0JwWmlBb1luVm1abVZ5TG14bGJtZDBhQ0E5UFQwZ016TXBJSHRjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ2RtVnljMmx2YmpvZ1luVm1abVZ5V3pCZExGeHVJQ0FnSUNBZ2NISnBkbUYwWlV0bGVUb2dZblZtWm1WeUxuTnNhV05sS0RFc0lETXpLU3hjYmlBZ0lDQWdJR052YlhCeVpYTnpaV1E2SUdaaGJITmxYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeThnYVc1MllXeHBaQ0JzWlc1bmRHaGNiaUFnYVdZZ0tHSjFabVpsY2k1c1pXNW5kR2dnSVQwOUlETTBLU0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdWMGxHSUd4bGJtZDBhQ2NwWEc1Y2JpQWdMeThnYVc1MllXeHBaQ0JqYjIxd2NtVnpjMmx2YmlCbWJHRm5YRzRnSUdsbUlDaGlkV1ptWlhKYk16TmRJQ0U5UFNBd2VEQXhLU0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMGx1ZG1Gc2FXUWdZMjl0Y0hKbGMzTnBiMjRnWm14aFp5Y3BYRzVjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0IyWlhKemFXOXVPaUJpZFdabVpYSmJNRjBzWEc0Z0lDQWdjSEpwZG1GMFpVdGxlVG9nWW5WbVptVnlMbk5zYVdObEtERXNJRE16S1N4Y2JpQWdJQ0JqYjIxd2NtVnpjMlZrT2lCMGNuVmxYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWlc1amIyUmxVbUYzSUNoMlpYSnphVzl1TENCd2NtbDJZWFJsUzJWNUxDQmpiMjF3Y21WemMyVmtLU0I3WEc0Z0lIWmhjaUJ5WlhOMWJIUWdQU0J1WlhjZ1FuVm1abVZ5S0dOdmJYQnlaWE56WldRZ1B5QXpOQ0E2SURNektWeHVYRzRnSUhKbGMzVnNkQzUzY21sMFpWVkpiblE0S0habGNuTnBiMjRzSURBcFhHNGdJSEJ5YVhaaGRHVkxaWGt1WTI5d2VTaHlaWE4xYkhRc0lERXBYRzVjYmlBZ2FXWWdLR052YlhCeVpYTnpaV1FwSUh0Y2JpQWdJQ0J5WlhOMWJIUmJNek5kSUQwZ01IZ3dNVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEpsYzNWc2RGeHVmVnh1WEc1bWRXNWpkR2x2YmlCa1pXTnZaR1VnS0hOMGNtbHVaeXdnZG1WeWMybHZiaWtnZTF4dUlDQnlaWFIxY200Z1pHVmpiMlJsVW1GM0tHSnpOVGhqYUdWamF5NWtaV052WkdVb2MzUnlhVzVuS1N3Z2RtVnljMmx2YmlsY2JuMWNibHh1Wm5WdVkzUnBiMjRnWlc1amIyUmxJQ2gyWlhKemFXOXVMQ0J3Y21sMllYUmxTMlY1TENCamIyMXdjbVZ6YzJWa0tTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2RtVnljMmx2YmlBOVBUMGdKMjUxYldKbGNpY3BJSEpsZEhWeWJpQmljelU0WTJobFkyc3VaVzVqYjJSbEtHVnVZMjlrWlZKaGR5aDJaWEp6YVc5dUxDQndjbWwyWVhSbFMyVjVMQ0JqYjIxd2NtVnpjMlZrS1NsY2JseHVJQ0J5WlhSMWNtNGdZbk0xT0dOb1pXTnJMbVZ1WTI5a1pTaGNiaUFnSUNCbGJtTnZaR1ZTWVhjb1hHNGdJQ0FnSUNCMlpYSnphVzl1TG5abGNuTnBiMjRzWEc0Z0lDQWdJQ0IyWlhKemFXOXVMbkJ5YVhaaGRHVkxaWGtzWEc0Z0lDQWdJQ0IyWlhKemFXOXVMbU52YlhCeVpYTnpaV1JjYmlBZ0lDQXBYRzRnSUNsY2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3WEc0Z0lHUmxZMjlrWlRvZ1pHVmpiMlJsTEZ4dUlDQmtaV052WkdWU1lYYzZJR1JsWTI5a1pWSmhkeXhjYmlBZ1pXNWpiMlJsT2lCbGJtTnZaR1VzWEc0Z0lHVnVZMjlrWlZKaGR6b2daVzVqYjJSbFVtRjNYRzU5WEc0aUxDSmxlSEJ2Y25RZ1kyOXVjM1FnUVZWVVQxOU1UME5MWDFSSlRVVlBWVlJmUVV4QlVrMGdQU0FuUVZWVVQxOU1UME5MWDFSSlRVVlBWVlJmUVV4QlVrMG5PMXh5WEc1bGVIQnZjblFnWTI5dWMzUWdUVVZVUVUxRlZGSkpRMU5mUmtsT1FVeEpXa1ZmUlZaRlRsUmZSbEpCUjAxRlRsUmZRVXhCVWswZ1BWeHlYRzRnSUNkTlJWUkJUVVZVVWtsRFUxOUdTVTVCVEVsYVJWOUZWa1ZPVkY5R1VrRkhUVVZPVkY5QlRFRlNUU2M3WEhKY2JpSXNJbWx0Y0c5eWRDQjdJRk5GUTA5T1JDQjlJR1p5YjIwZ0p5NHZkR2x0WlNjN1hISmNibHh5WEc1bGVIQnZjblFnWTI5dWMzUWdSa0ZNVEVKQlEwdGZVMDFCVWxSZlZGSkJUbE5CUTFSSlQwNVRYMUpGUmxKRlUwaGZWRWxOUlNBOUlGTkZRMDlPUkNBcUlERXdPMXh5WEc1bGVIQnZjblFnWTI5dWMzUWdSa0ZNVEVKQlEwdGZVMDFCVWxSZlZGSkJUbE5CUTFSSlQwNVRYMFJGUVVSTVNVNUZJRDBnTVRnd08xeHlYRzVsZUhCdmNuUWdZMjl1YzNRZ1JrRk1URUpCUTB0ZlUwMUJVbFJmVkZKQlRsTkJRMVJKVDA1VFgwMUJXRjlHUlVWZlRWVk1WRWxRVEVsRlVpQTlJREk3WEhKY2JpSXNJbVY0Y0c5eWRDQmpiMjV6ZENCQlExUkpUMDVmVVZWRlZVVmZUVVZVVWtsRFUxOUZNa1ZmVkVWVFZDQTlJQ2RoWTNScGIyNWZjWFZsZFdWZmJXVjBjbWxqYzE5bE1tVmZkR1Z6ZENjN1hISmNiaUlzSWk4cUtseHlYRzRnS2lCQVptbHNaU0JVYUdVZ1pXNTBjbmtnY0c5cGJuUWdabTl5SUhSb1pTQjNaV0lnWlhoMFpXNXphVzl1SUhOcGJtZHNaWFJ2YmlCd2NtOWpaWE56TGx4eVhHNGdLaTljY2x4dVhISmNibWx0Y0c5eWRDQkZkbVZ1ZEVWdGFYUjBaWElnWm5KdmJTQW5aWFpsYm5Sekp6dGNjbHh1YVcxd2IzSjBJR1Z1WkU5bVUzUnlaV0Z0SUdaeWIyMGdKMlZ1WkMxdlppMXpkSEpsWVcwbk8xeHlYRzVwYlhCdmNuUWdjSFZ0Y0NCbWNtOXRJQ2R3ZFcxd0p6dGNjbHh1YVcxd2IzSjBJR1JsWW05MWJtTmxJR1p5YjIwZ0oyUmxZbTkxYm1ObExYTjBjbVZoYlNjN1hISmNibWx0Y0c5eWRDQnNiMmNnWm5KdmJTQW5iRzluYkdWMlpXd25PMXh5WEc1cGJYQnZjblFnWW5KdmQzTmxjaUJtY205dElDZDNaV0psZUhSbGJuTnBiMjR0Y0c5c2VXWnBiR3duTzF4eVhHNXBiWEJ2Y25RZ2V5QnpkRzl5WlVGelUzUnlaV0Z0SUgwZ1puSnZiU0FuUUcxbGRHRnRZWE5yTDI5aWN5MXpkRzl5WlNjN1hISmNibHh1YVcxd2IzSjBJRkJ2Y25SVGRISmxZVzBnWm5KdmJTQW5aWGgwWlc1emFXOXVMWEJ2Y25RdGMzUnlaV0Z0Snp0Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUdWMGFFVnljbTl5Y3lCOUlHWnliMjBnSjJWMGFDMXljR010WlhKeWIzSnpKenRjY2x4dWFXMXdiM0owSUh0Y2NseHVJQ0JGVGxaSlVrOU9UVVZPVkY5VVdWQkZYMUJQVUZWUUxGeHlYRzRnSUVWT1ZrbFNUMDVOUlU1VVgxUlpVRVZmVGs5VVNVWkpRMEZVU1U5T0xGeHlYRzRnSUVWT1ZrbFNUMDVOUlU1VVgxUlpVRVZmUmxWTVRGTkRVa1ZGVGl4Y2NseHVJQ0JGV0ZSRlRsTkpUMDVmVFVWVFUwRkhSVk1zWEhKY2JpQWdVRXhCVkVaUFVrMWZSa2xTUlVaUFdDeGNjbHh1ZlNCbWNtOXRJQ2N1TGk4dUxpOXphR0Z5WldRdlkyOXVjM1JoYm5SekwyRndjQ2M3WEhKY2JtbHRjRzl5ZENCN1hISmNiaUFnVWtWS1JVTlVYMDVQVkVsR1NVTkJWRWxQVGw5RFRFOVRSU3hjY2x4dUlDQlNSVXBGUTFSZlRrOVVTVVpKUTBGVVNVOU9YME5NVDFORlgxTkpSeXhjY2x4dUlDQk5aWFJoVFdWMGNtbGpjMFYyWlc1MFEyRjBaV2R2Y25rc1hISmNiaUFnVFdWMFlVMWxkSEpwWTNORmRtVnVkRTVoYldVc1hISmNiaUFnVFdWMFlVMWxkSEpwWTNOVmMyVnlWSEpoYVhRc1hISmNibjBnWm5KdmJTQW5MaTR2TGk0dmMyaGhjbVZrTDJOdmJuTjBZVzUwY3k5dFpYUmhiV1YwY21samN5YzdYSEpjYm1sdGNHOXlkQ0I3SUdOb1pXTnJSbTl5VEdGemRFVnljbTl5UVc1a1RHOW5JSDBnWm5KdmJTQW5MaTR2TGk0dmMyaGhjbVZrTDIxdlpIVnNaWE12WW5KdmQzTmxjaTF5ZFc1MGFXMWxMblYwYVd4ekp6dGNjbHh1YVcxd2IzSjBJSHNnYVhOTllXNXBabVZ6ZEZZeklIMGdabkp2YlNBbkxpNHZMaTR2YzJoaGNtVmtMMjF2WkhWc1pYTXZiWFl6TG5WMGFXeHpKenRjY2x4dWFXMXdiM0owSUhzZ2JXRnphMDlpYW1WamRDQjlJR1p5YjIwZ0p5NHVMeTR1TDNOb1lYSmxaQzl0YjJSMWJHVnpMMjlpYW1WamRDNTFkR2xzY3ljN1hISmNibWx0Y0c5eWRDQjdJR2RsZEVWdWRtbHliMjV0Wlc1MFZIbHdaU3dnWkdWbVpYSnlaV1JRY205dGFYTmxMQ0JuWlhSUWJHRjBabTl5YlNCOUlHWnliMjBnSnk0dmJHbGlMM1YwYVd3bk8xeHlYRzVwYlhCdmNuUWdiV2xuY21GMGFXOXVjeUJtY205dElDY3VMMjFwWjNKaGRHbHZibk1uTzF4eVhHNXBiWEJ2Y25RZ1RXbG5jbUYwYjNJZ1puSnZiU0FuTGk5c2FXSXZiV2xuY21GMGIzSW5PMXh5WEc1cGJYQnZjblFnUlhoMFpXNXphVzl1VUd4aGRHWnZjbTBnWm5KdmJTQW5MaTl3YkdGMFptOXliWE12WlhoMFpXNXphVzl1Snp0Y2NseHVhVzF3YjNKMElFeHZZMkZzVTNSdmNtVWdabkp2YlNBbkxpOXNhV0l2Ykc5allXd3RjM1J2Y21Vbk8xeHlYRzVwYlhCdmNuUWdVbVZoWkU5dWJIbE9aWFIzYjNKclUzUnZjbVVnWm5KdmJTQW5MaTlzYVdJdmJtVjBkMjl5YXkxemRHOXlaU2M3WEhKY2JtbHRjRzl5ZENCN0lGTkZUbFJTV1Y5VFZFRlVSU0I5SUdaeWIyMGdKeTR2YkdsaUwzTmxkSFZ3VTJWdWRISjVKenRjY2x4dVhISmNibWx0Y0c5eWRDQmpjbVZoZEdWVGRISmxZVzFUYVc1cklHWnliMjBnSnk0dmJHbGlMMk55WldGMFpWTjBjbVZoYlZOcGJtc25PMXh5WEc1cGJYQnZjblFnVG05MGFXWnBZMkYwYVc5dVRXRnVZV2RsY2l3Z2UxeHlYRzRnSUU1UFZFbEdTVU5CVkVsUFRsOU5RVTVCUjBWU1gwVldSVTVVVXl4Y2NseHVmU0JtY205dElDY3VMMnhwWWk5dWIzUnBabWxqWVhScGIyNHRiV0Z1WVdkbGNpYzdYSEpjYm1sdGNHOXlkQ0JOWlhSaGJXRnphME52Ym5SeWIyeHNaWElzSUh0Y2NseHVJQ0JOUlZSQlRVRlRTMTlEVDA1VVVrOU1URVZTWDBWV1JVNVVVeXhjY2x4dWZTQm1jbTl0SUNjdUwyMWxkR0Z0WVhOckxXTnZiblJ5YjJ4c1pYSW5PMXh5WEc1cGJYQnZjblFnY21GM1JtbHljM1JVYVcxbFUzUmhkR1VnWm5KdmJTQW5MaTltYVhKemRDMTBhVzFsTFhOMFlYUmxKenRjY2x4dWFXMXdiM0owSUdkbGRFWnBjbk4wVUhKbFptVnljbVZrVEdGdVowTnZaR1VnWm5KdmJTQW5MaTlzYVdJdloyVjBMV1pwY25OMExYQnlaV1psY25KbFpDMXNZVzVuTFdOdlpHVW5PMXh5WEc1cGJYQnZjblFnWjJWMFQySnFVM1J5ZFdOMGRYSmxJR1p5YjIwZ0p5NHZiR2xpTDJkbGRFOWlhbE4wY25WamRIVnlaU2M3WEhKY2JtbHRjRzl5ZENCelpYUjFjRVZ1YzBsd1puTlNaWE52YkhabGNpQm1jbTl0SUNjdUwyeHBZaTlsYm5NdGFYQm1jeTl6WlhSMWNDYzdYSEpjYmx4eVhHNHZLaUJsYzJ4cGJuUXRaVzVoWW14bElHbHRjRzl5ZEM5bWFYSnpkQ0FxTDF4eVhHNWNjbHh1THlvZ1pYTnNhVzUwTFdScGMyRmliR1VnYVcxd2IzSjBMMjl5WkdWeUlDb3ZYSEpjYmx4dUx5b2daWE5zYVc1MExXVnVZV0pzWlNCcGJYQnZjblF2YjNKa1pYSWdLaTljY2x4dVhISmNibU52Ym5OMElIc2djMlZ1ZEhKNUlIMGdQU0JuYkc5aVlXdzdYSEpjYm1OdmJuTjBJR1pwY25OMFZHbHRaVk4wWVhSbElEMGdleUF1TGk1eVlYZEdhWEp6ZEZScGJXVlRkR0YwWlNCOU8xeHlYRzVjY2x4dVkyOXVjM1FnYldWMFlXMWhjMnRKYm5SbGNtNWhiRkJ5YjJObGMzTklZWE5vSUQwZ2UxeHlYRzRnSUZ0RlRsWkpVazlPVFVWT1ZGOVVXVkJGWDFCUFVGVlFYVG9nZEhKMVpTeGNjbHh1SUNCYlJVNVdTVkpQVGsxRlRsUmZWRmxRUlY5T1QxUkpSa2xEUVZSSlQwNWRPaUIwY25WbExGeHlYRzRnSUZ0RlRsWkpVazlPVFVWT1ZGOVVXVkJGWDBaVlRFeFRRMUpGUlU1ZE9pQjBjblZsTEZ4eVhHNTlPMXh5WEc1Y2NseHVZMjl1YzNRZ2JXVjBZVzFoYzJ0Q2JHOWphMlZrVUc5eWRITWdQU0JiSjNSeVpYcHZjaTFqYjI1dVpXTjBKMTA3WEhKY2JseHlYRzVzYjJjdWMyVjBSR1ZtWVhWc2RFeGxkbVZzS0hCeWIyTmxjM011Wlc1MkxrMUZWRUZOUVZOTFgwUkZRbFZISUQ4Z0oyUmxZblZuSnlBNklDZHBibVp2SnlrN1hISmNibHh5WEc1amIyNXpkQ0J3YkdGMFptOXliU0E5SUc1bGR5QkZlSFJsYm5OcGIyNVFiR0YwWm05eWJTZ3BPMXh5WEc1amIyNXpkQ0J1YjNScFptbGpZWFJwYjI1TllXNWhaMlZ5SUQwZ2JtVjNJRTV2ZEdsbWFXTmhkR2x2YmsxaGJtRm5aWElvS1R0Y2NseHVYSEpjYm14bGRDQndiM0IxY0VselQzQmxiaUE5SUdaaGJITmxPMXh5WEc1c1pYUWdibTkwYVdacFkyRjBhVzl1U1hOUGNHVnVJRDBnWm1Gc2MyVTdYSEpjYm14bGRDQjFhVWx6VkhKcFoyZGxjbWx1WnlBOUlHWmhiSE5sTzF4eVhHNWpiMjV6ZENCdmNHVnVUV1YwWVcxaGMydFVZV0p6U1VSeklEMGdlMzA3WEhKY2JtTnZibk4wSUc5d1pXNU5aWFJoYldGemEwTnZibTVsWTNScGIyNXpJRDBnYm1WM0lFMWhjQ2dwTzF4eVhHNWpiMjV6ZENCeVpYRjFaWE4wUVdOamIzVnVkRlJoWWtsa2N5QTlJSHQ5TzF4eVhHNXNaWFFnWTI5dWRISnZiR3hsY2p0Y2NseHVYSEpjYmk4dklITjBZWFJsSUhCbGNuTnBjM1JsYm1ObFhISmNibU52Ym5OMElHbHVWR1Z6ZENBOUlIQnliMk5sYzNNdVpXNTJMa2xPWDFSRlUxUTdYSEpjYm1OdmJuTjBJR3h2WTJGc1UzUnZjbVVnUFNCcGJsUmxjM1FnUHlCdVpYY2dVbVZoWkU5dWJIbE9aWFIzYjNKclUzUnZjbVVvS1NBNklHNWxkeUJNYjJOaGJGTjBiM0psS0NrN1hISmNibXhsZENCMlpYSnphVzl1WldSRVlYUmhPMXh5WEc1Y2NseHVhV1lnS0dsdVZHVnpkQ0I4ZkNCd2NtOWpaWE56TG1WdWRpNU5SVlJCVFVGVFMxOUVSVUpWUnlrZ2UxeHlYRzRnSUdkc2IySmhiQzV6ZEdGMFpVaHZiMnR6TG0xbGRHRnRZWE5yUjJWMFUzUmhkR1VnUFNCc2IyTmhiRk4wYjNKbExtZGxkQzVpYVc1a0tHeHZZMkZzVTNSdmNtVXBPMXh5WEc1OVhISmNibHh5WEc1amIyNXpkQ0J3YUdsemFHbHVaMUJoWjJWVmNtd2dQU0J1WlhjZ1ZWSk1LSEJ5YjJObGMzTXVaVzUyTGxCSVNWTklTVTVIWDFkQlVrNUpUa2RmVUVGSFJWOVZVa3dwTzF4eVhHNWNjbHh1WTI5dWMzUWdUMDVGWDFORlEwOU9SRjlKVGw5TlNVeE1TVk5GUTA5T1JGTWdQU0F4WHpBd01EdGNjbHh1THk4Z1ZHbHRaVzkxZENCbWIzSWdhVzVwZEdsaGJHbDZhVzVuSUhCb2FYTm9hVzVuSUhkaGNtNXBibWNnY0dGblpTNWNjbHh1WTI5dWMzUWdVRWhKVTBoSlRrZGZWMEZTVGtsT1IxOVFRVWRGWDFSSlRVVlBWVlFnUFNCUFRrVmZVMFZEVDA1RVgwbE9YMDFKVEV4SlUwVkRUMDVFVXp0Y2NseHVYSEpjYm1OdmJuTjBJRUZEUzE5TFJVVlFYMEZNU1ZaRlgwMUZVMU5CUjBVZ1BTQW5RVU5MWDB0RlJWQmZRVXhKVmtWZlRVVlRVMEZIUlNjN1hISmNibU52Ym5OMElGZFBVa3RGVWw5TFJVVlFYMEZNU1ZaRlgwMUZVMU5CUjBVZ1BTQW5WMDlTUzBWU1gwdEZSVkJmUVV4SlZrVmZUVVZUVTBGSFJTYzdYSEpjYmx4eVhHNWNibHh5WEc0dkx5QkZkbVZ1ZENCbGJXbDBkR1Z5SUdadmNpQnpkR0YwWlNCd1pYSnphWE4wWlc1alpWeHlYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmhkR1ZRWlhKemFYTjBaVzVqWlVWMlpXNTBjeUE5SUc1bGR5QkZkbVZ1ZEVWdGFYUjBaWElvS1R0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCVWFHbHpJR1JsWm1WeWNtVmtJRkJ5YjIxcGMyVWdhWE1nZFhObFpDQjBieUIwY21GamF5QjNhR1YwYUdWeUlHbHVhWFJwWVd4cGVtRjBhVzl1SUdoaGN5Qm1hVzVwYzJobFpDNWNjbHh1SUNwY2NseHVJQ29nU1hRZ2FYTWdkbVZ5ZVNCcGJYQnZjblJoYm5RZ2RHOGdaVzV6ZFhKbElIUm9ZWFFnWUhKbGMyOXNkbVZKYm1sMGFXRnNhWHBoZEdsdmJtQWdhWE1nS21Gc2QyRjVjeXBjY2x4dUlDb2dZMkZzYkdWa0lHOXVZMlVnYVc1cGRHbGhiR2w2WVhScGIyNGdhR0Z6SUdOdmJYQnNaWFJsWkN3Z1lXNWtJSFJvWVhRZ1lISmxhbVZqZEVsdWFYUnBZV3hwZW1GMGFXOXVZQ0JwYzF4eVhHNGdLaUJqWVd4c1pXUWdhV1lnYVc1cGRHbGhiR2w2WVhScGIyNGdabUZwYkhNZ2FXNGdZVzRnZFc1eVpXTnZkbVZ5WVdKc1pTQjNZWGt1WEhKY2JpQXFMMXh5WEc1amIyNXpkQ0I3WEhKY2JpQWdjSEp2YldselpUb2dhWE5KYm1sMGFXRnNhWHBsWkN4Y2NseHVJQ0J5WlhOdmJIWmxPaUJ5WlhOdmJIWmxTVzVwZEdsaGJHbDZZWFJwYjI0c1hISmNiaUFnY21WcVpXTjBPaUJ5WldwbFkzUkpibWwwYVdGc2FYcGhkR2x2Yml4Y2NseHVmU0E5SUdSbFptVnljbVZrVUhKdmJXbHpaU2dwTzF4eVhHNWNjbHh1THlvcVhISmNiaUFxSUZObGJtUnpJR0VnYldWemMyRm5aU0IwYnlCMGFHVWdaR0Z3Y0NoektTQmpiMjUwWlc1MElITmpjbWx3ZENCMGJ5QnphV2R1WVd3Z2FYUWdZMkZ1SUdOdmJtNWxZM1FnZEc4Z1RXVjBZVTFoYzJzZ1ltRmphMmR5YjNWdVpDQmhjMXh5WEc0Z0tpQjBhR1VnWW1GamEyVnVaQ0JwY3lCdWIzUWdZV04wYVhabExpQkpkQ0JwY3lCeVpYRjFhWEpsWkNCMGJ5QnlaUzFqYjI1dVpXTjBJR1JoY0hCeklHRm1kR1Z5SUhObGNuWnBZMlVnZDI5eWEyVnlJSEpsTFdGamRHbDJZWFJsY3k1Y2NseHVJQ29nUm05eUlHNXZiaTFrWVhCd0lIQmhaMlZ6TENCMGFHVWdiV1Z6YzJGblpTQjNhV3hzSUdKbElITmxiblFnWVc1a0lHbG5ibTl5WldRdVhISmNiaUFxTDF4eVhHNWpiMjV6ZENCelpXNWtVbVZoWkhsTlpYTnpZV2RsVkc5VVlXSnpJRDBnWVhONWJtTWdLQ2tnUFQ0Z2UxeHlYRzRnSUdOdmJuTjBJSFJoWW5NZ1BTQmhkMkZwZENCaWNtOTNjMlZ5TG5SaFluTmNjbHh1SUNBZ0lDNXhkV1Z5ZVNoN1hISmNiaUFnSUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ0FnS2lCUGJteDVJSEYxWlhKNUlIUmhZbk1nZEdoaGRDQnZkWElnWlhoMFpXNXphVzl1SUdOaGJpQnlkVzRnYVc0dUlGUnZJR1J2SUhSb2FYTXNJSGRsSUhGMVpYSjVJR1p2Y2lCaGJHd2dWVkpNY3lCMGFHRjBJRzkxY2x4eVhHNGdJQ0FnSUNBZ0tpQmxlSFJsYm5OcGIyNGdZMkZ1SUdsdWFtVmpkQ0J6WTNKcGNIUnpJR2x1TENCM2FHbGphQ0JwY3lCaWVTQjFjMmx1WnlCMGFHVWdYQ0k4WVd4c1gzVnliSE0rWENJZ2RtRnNkV1VnWVc1a0lGOWZkMmwwYUc5MWRGOWZYSEpjYmlBZ0lDQWdJQ0FxSUhSb1pTQmNJblJoWW5OY0lpQnRZVzVwWm1WemRDQndaWEp0YVhOemFXOXVMaUJKWmlCM1pTQnBibU5zZFdSbFpDQjBhR1VnWENKMFlXSnpYQ0lnY0dWeWJXbHpjMmx2Yml3Z2RHaHBjeUIzYjNWc1pDQmhiSE52SUdabGRHTm9YSEpjYmlBZ0lDQWdJQ0FxSUZWU1RITWdkR2hoZENCM1pTZGtJRzV2ZENCaVpTQmhZbXhsSUhSdklHbHVhbVZqZENCcGJpd2daUzVuTGlCamFISnZiV1U2THk5d1lXZGxjeXdnWTJoeWIyMWxPaTh2WlhoMFpXNXphVzl1TENCM2FHbGphRnh5WEc0Z0lDQWdJQ0FnS2lCcGN5QnViM1FnZDJoaGRDQjNaU2RrSUhkaGJuUXVYSEpjYmlBZ0lDQWdJQ0FxWEhKY2JpQWdJQ0FnSUNBcUlGbHZkU0J0YVdkb2RDQmlaU0IzYjI1a1pYSnBibWNzSUdodmR5QmtiMlZ6SUhSb1pTQmNJblZ5YkZ3aUlIQmhjbUZ0SUhkdmNtc2dkMmwwYUc5MWRDQjBhR1VnWENKMFlXSnpYQ0lnY0dWeWJXbHpjMmx2Ymo5Y2NseHVJQ0FnSUNBZ0lDcGNjbHh1SUNBZ0lDQWdJQ29nUUhObFpTQjdRR3hwYm1zZ2FIUjBjSE02THk5aWRXZHpMbU5vY205dGFYVnRMbTl5Wnk5d0wyTm9jbTl0YVhWdEwybHpjM1ZsY3k5a1pYUmhhV3cvYVdROU5qWXhNekV4STJNeGZWeHlYRzRnSUNBZ0lDQWdLaUFnWENKSlppQjBhR1VnWlhoMFpXNXphVzl1SUdoaGN5QmhZMk5sYzNNZ2RHOGdhVzVxWldOMElITmpjbWx3ZEhNZ2FXNTBieUJVWVdJc0lIUm9aVzRnZDJVZ1kyRnVJSEpsZEhWeWJpQjBhR1VnZFhKc1hISmNiaUFnSUNBZ0lDQXFJQ0FnYjJZZ1ZHRmlJQ2hpWldOaGRYTmxJSFJvWlNCbGVIUmxibk5wYjI0Z1kyOTFiR1FnYW5WemRDQnBibXBsWTNRZ1lTQnpZM0pwY0hRZ2RHOGdiV1Z6YzJGblpTQjBhR1VnYkc5allYUnBiMjR1YUhKbFppa3VYQ0pjY2x4dUlDQWdJQ0FnSUNvdlhISmNiaUFnSUNBZ0lIVnliRG9nSnp4aGJHeGZkWEpzY3o0bkxGeHlYRzRnSUNBZ0lDQjNhVzVrYjNkVWVYQmxPaUFuYm05eWJXRnNKeXhjY2x4dUlDQWdJSDBwWEhKY2JpQWdJQ0F1ZEdobGJpZ29jbVZ6ZFd4MEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUdOb1pXTnJSbTl5VEdGemRFVnljbTl5UVc1a1RHOW5LQ2s3WEhKY2JpQWdJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYSEpjYmlBZ0lDQjlLVnh5WEc0Z0lDQWdMbU5oZEdOb0tDZ3BJRDArSUh0Y2NseHVJQ0FnSUNBZ1kyaGxZMnRHYjNKTVlYTjBSWEp5YjNKQmJtUk1iMmNvS1R0Y2NseHVJQ0FnSUgwcE8xeHlYRzVjY2x4dUlDQXZLaW9nUUhSdlpHOGdkMlVnYzJodmRXeGtJRzl1YkhrZ2MyVnVaRTFsYzNOaFoyVWdkRzhnWkdGd2NDQjBZV0p6TENCdWIzUWdZV3hzSUhSaFluTXVJQ292WEhKY2JpQWdabTl5SUNoamIyNXpkQ0IwWVdJZ2IyWWdkR0ZpY3lrZ2UxeHlYRzRnSUNBZ1luSnZkM05sY2k1MFlXSnpYSEpjYmlBZ0lDQWdJQzV6Wlc1a1RXVnpjMkZuWlNoMFlXSXVhV1FzSUh0Y2NseHVJQ0FnSUNBZ0lDQnVZVzFsT2lCRldGUkZUbE5KVDA1ZlRVVlRVMEZIUlZNdVVrVkJSRmtzWEhKY2JpQWdJQ0FnSUgwcFhISmNiaUFnSUNBZ0lDNTBhR1Z1S0NncElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNCamFHVmphMFp2Y2t4aGMzUkZjbkp2Y2tGdVpFeHZaeWdwTzF4eVhHNGdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQXVZMkYwWTJnb0tDa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDOHZJRUZ1SUdWeWNtOXlJRzFoZVNCb1lYQndaVzRnYVdZZ2RHaGxJR052Ym5SbGJuUnpZM0pwY0hRZ2FYTWdZbXh2WTJ0bFpDQm1jbTl0SUd4dllXUnBibWNzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdZVzVrSUhSb2RYTWdkR2hsY21VZ2FYTWdibThnY25WdWRHbHRaUzV2YmsxbGMzTmhaMlVnYUdGdVpHeGxjaUIwYnlCc2FYTjBaVzRnZEc4Z2RHaGxJRzFsYzNOaFoyVXVYSEpjYmlBZ0lDQWdJQ0FnWTJobFkydEdiM0pNWVhOMFJYSnliM0pCYm1STWIyY29LVHRjY2x4dUlDQWdJQ0FnZlNrN1hISmNiaUFnZlZ4eVhHNTlPMXh5WEc1Y2NseHVMeThnVkdobGMyVWdZWEpsSUhObGRDQmhablJsY2lCcGJtbDBhV0ZzYVhwaGRHbHZibHh5WEc1c1pYUWdZMjl1Ym1WamRGSmxiVzkwWlR0Y2NseHViR1YwSUdOdmJtNWxZM1JGZUhSbGNtNWhiRHRjY2x4dVhISmNibUp5YjNkelpYSXVjblZ1ZEdsdFpTNXZia052Ym01bFkzUXVZV1JrVEdsemRHVnVaWElvWVhONWJtTWdLQzR1TG1GeVozTXBJRDArSUh0Y2NseHVJQ0F2THlCUmRXVjFaU0IxY0NCamIyNXVaV04wYVc5dUlHRjBkR1Z0Y0hSeklHaGxjbVVzSUhkaGFYUnBibWNnZFc1MGFXd2dZV1owWlhJZ2FXNXBkR2xoYkdsNllYUnBiMjVjY2x4dUlDQmhkMkZwZENCcGMwbHVhWFJwWVd4cGVtVmtPMXh5WEc0Z0lHTnZibk4wSUhKbGJXOTBaVkJ2Y25RZ1BTQmhjbWR6V3pCZE8xeHlYRzRnSUdOdmJuTjBJSHNnYzJWdVpHVnlJSDBnUFNCeVpXMXZkR1ZRYjNKME8xeHlYRzVjY2x4dUlDQmpiMjV6ZENCMWNtd2dQU0J6Wlc1a1pYSS9MblZ5YkR0Y2NseHVJQ0JqYjI1emRDQmtaWFJsWTNSbFpGQnliMk5sYzNOT1lXMWxJRDBnZFhKc0lEOGdaMlYwUlc1MmFYSnZibTFsYm5SVWVYQmxLSFZ5YkNrZ09pQW5KenRjY2x4dVhISmNiaUFnWTI5dWMzUWdZMjl1Ym1WamRHbHZia2xrSUQwZ1oyVnVaWEpoZEdWRGIyNXVaV04wYVc5dVNXUW9jbVZ0YjNSbFVHOXlkQ3dnWkdWMFpXTjBaV1JRY205alpYTnpUbUZ0WlNrN1hISmNiaUFnWTI5dWMzUWdiM0JsYmtOdmJtNWxZM1JwYjI1eklEMGdiM0JsYmsxbGRHRnRZWE5yUTI5dWJtVmpkR2x2Ym5NdVoyVjBLR052Ym01bFkzUnBiMjVKWkNrZ2ZId2dNRHRjY2x4dVhISmNiaUFnYVdZZ0tGeHlYRzRnSUNBZ2IzQmxia052Ym01bFkzUnBiMjV6SUQwOVBTQXdJSHg4WEhKY2JpQWdJQ0FvWkdWMFpXTjBaV1JRY205alpYTnpUbUZ0WlNBOVBUMGdKMkpoWTJ0bmNtOTFibVFuSUNZbUlHOXdaVzVEYjI1dVpXTjBhVzl1Y3lBOElESXBYSEpjYmlBZ0lDQXZMeUF5SUdKaFkydG5jbTkxYm1RZ1kyOXVibVZqZEdsdmJuTWdZWEpsSUdGc2JHOTNaV1FzSUc5dVpTQm1iM0lnY0docGMyaHBibWNnZDJGeWJtbHVaeUJ3WVdkbElHRnVaQ0J2Ym1VZ1ptOXlJSFJvWlNCc1pXUm5aWElnWW5KcFpHZGxJR3RsZVhKcGJtZGNjbHh1SUNBcElIdGNjbHh1SUNBZ0lDOHZJRlJvYVhNZ2FYTWdjMlYwSUdsdUlHQnpaWFIxY0VOdmJuUnliMnhzWlhKZ0xDQjNhR2xqYUNCcGN5QmpZV3hzWldRZ1lYTWdjR0Z5ZENCdlppQnBibWwwYVdGc2FYcGhkR2x2Ymx4eVhHNGdJQ0FnWTI5dWJtVmpkRkpsYlc5MFpTZ3VMaTVoY21kektUdGNjbHh1SUNBZ0lHOXdaVzVOWlhSaGJXRnphME52Ym01bFkzUnBiMjV6TG5ObGRDaGpiMjV1WldOMGFXOXVTV1FzSUc5d1pXNURiMjV1WldOMGFXOXVjeUFySURFcE8xeHlYRzRnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KME5QVGs1RlExUkpUMDVmUVV4U1JVRkVXVjlGV0VsVFZGTW5LVHRjY2x4dUlDQjlYSEpjYm4wcE8xeHlYRzVjY2x4dVluSnZkM05sY2k1eWRXNTBhVzFsTG05dVEyOXVibVZqZEVWNGRHVnlibUZzTG1Ga1pFeHBjM1JsYm1WeUtHRnplVzVqSUNndUxpNWhjbWR6S1NBOVBpQjdYSEpjYmlBZ0x5OGdVWFZsZFdVZ2RYQWdZMjl1Ym1WamRHbHZiaUJoZEhSbGJYQjBjeUJvWlhKbExDQjNZV2wwYVc1bklIVnVkR2xzSUdGbWRHVnlJR2x1YVhScFlXeHBlbUYwYVc5dVhISmNiaUFnWVhkaGFYUWdhWE5KYm1sMGFXRnNhWHBsWkR0Y2NseHVYSEpjYmlBZ0x5OGdWR2hwY3lCcGN5QnpaWFFnYVc0Z1lITmxkSFZ3UTI5dWRISnZiR3hsY21Bc0lIZG9hV05vSUdseklHTmhiR3hsWkNCaGN5QndZWEowSUc5bUlHbHVhWFJwWVd4cGVtRjBhVzl1WEhKY2JpQWdZMjl1Ym1WamRFVjRkR1Z5Ym1Gc0tDNHVMbUZ5WjNNcE8xeHlYRzU5S1R0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCQWRIbHdaV1JsWmlCN2FXMXdiM0owS0NjdUxpOHVMaTl6YUdGeVpXUXZZMjl1YzNSaGJuUnpMM1J5WVc1ellXTjBhVzl1SnlrdVZISmhibk5oWTNScGIyNU5aWFJoZlNCVWNtRnVjMkZqZEdsdmJrMWxkR0ZjY2x4dUlDb3ZYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dWR2hsSUdSaGRHRWdaVzFwZEhSbFpDQm1jbTl0SUhSb1pTQk5aWFJoVFdGemEwTnZiblJ5YjJ4c1pYSXVjM1J2Y21VZ1JYWmxiblJGYldsMGRHVnlMQ0JoYkhOdklIVnpaV1FnZEc4Z2FXNXBkR2xoYkdsNlpTQjBhR1VnVFdWMFlVMWhjMnREYjI1MGNtOXNiR1Z5TGlCQmRtRnBiR0ZpYkdVZ2FXNGdWVWtnYjI0Z1VtVmhZM1FnYzNSaGRHVWdZWE1nYzNSaGRHVXViV1YwWVcxaGMyc3VYSEpjYmlBcVhISmNiaUFxSUVCMGVYQmxaR1ZtSUUxbGRHRk5ZWE5yVTNSaGRHVmNjbHh1SUNvZ1FIQnliM0JsY25SNUlIdGliMjlzWldGdWZTQnBjMGx1YVhScFlXeHBlbVZrSUMwZ1YyaGxkR2hsY2lCMGFHVWdabWx5YzNRZ2RtRjFiSFFnYUdGeklHSmxaVzRnWTNKbFlYUmxaQzVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHRpYjI5c1pXRnVmU0JwYzFWdWJHOWphMlZrSUMwZ1YyaGxkR2hsY2lCMGFHVWdkbUYxYkhRZ2FYTWdZM1Z5Y21WdWRHeDVJR1JsWTNKNWNIUmxaQ0JoYm1RZ1lXTmpiM1Z1ZEhNZ1lYSmxJR0YyWVdsc1lXSnNaU0JtYjNJZ2MyVnNaV04wYVc5dUxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UySnZiMnhsWVc1OUlHbHpRV05qYjNWdWRFMWxiblZQY0dWdUlDMGdVbVZ3Y21WelpXNTBjeUIzYUdWMGFHVnlJSFJvWlNCdFlXbHVJR0ZqWTI5MWJuUWdjMlZzWldOMGFXOXVJRlZKSUdseklHTjFjbkpsYm5Sc2VTQmthWE53YkdGNVpXUXVYSEpjYmlBcUlFQndjbTl3WlhKMGVTQjdZbTl2YkdWaGJuMGdhWE5PWlhSM2IzSnJUV1Z1ZFU5d1pXNGdMU0JTWlhCeVpYTmxiblJ6SUhkb1pYUm9aWElnZEdobElHMWhhVzRnYm1WMGQyOXlheUJ6Wld4bFkzUnBiMjRnVlVrZ2FYTWdZM1Z5Y21WdWRHeDVJR1JwYzNCc1lYbGxaQzVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHR2WW1wbFkzUjlJR2xrWlc1MGFYUnBaWE1nTFNCQmJpQnZZbXBsWTNRZ2JXRjBZMmhwYm1jZ2JHOTNaWEl0WTJGelpTQm9aWGdnWVdSa2NtVnpjMlZ6SUhSdklFbGtaVzUwYVhSNUlHOWlhbVZqZEhNZ2QybDBhQ0JjSW1Ga1pISmxjM05jSWlCaGJtUWdYQ0p1WVcxbFhDSWdLRzVwWTJ0dVlXMWxLU0JyWlhsekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyOWlhbVZqZEgwZ2RXNWhjSEJ5YjNabFpGUjRjeUF0SUVGdUlHOWlhbVZqZENCdFlYQndhVzVuSUhSeVlXNXpZV04wYVc5dUlHaGhjMmhsY3lCMGJ5QjFibUZ3Y0hKdmRtVmtJSFJ5WVc1ellXTjBhVzl1Y3k1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0dlltcGxZM1I5SUc1bGRIZHZjbXREYjI1bWFXZDFjbUYwYVc5dWN5QXRJRUVnYkdsemRDQnZaaUJ1WlhSM2IzSnJJR052Ym1acFozVnlZWFJwYjI1ekxDQmpiMjUwWVdsdWFXNW5JRkpRUXlCd2NtOTJhV1JsY2lCa1pYUmhhV3h6SUNobFp5QmphR0ZwYmtsa0xDQnljR05WY213c0lISndZMUJ5WldabGNtVnVZMlZ6S1M1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0QmNuSmhlWDBnWVdSa2NtVnpjMEp2YjJzZ0xTQkJJR3hwYzNRZ2IyWWdjSEpsZG1sdmRYTnNlU0J6Wlc1MElIUnZJR0ZrWkhKbGMzTmxjeTVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHR2WW1wbFkzUjlJR052Ym5SeVlXTjBSWGhqYUdGdVoyVlNZWFJsY3lBdElFbHVabThnWVdKdmRYUWdZM1Z5Y21WdWRDQjBiMnRsYmlCd2NtbGpaWE11WEhKY2JpQXFJRUJ3Y205d1pYSjBlU0I3UVhKeVlYbDlJSFJ2YTJWdWN5QXRJRlJ2YTJWdWN5Qm9aV3hrSUdKNUlIUm9aU0JqZFhKeVpXNTBJSFZ6WlhJc0lHbHVZMngxWkdsdVp5QjBhR1ZwY2lCaVlXeGhibU5sY3k1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0dlltcGxZM1I5SUhObGJtUWdMU0JVVDBSUE9pQkViMk4xYldWdWRGeHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UySnZiMnhsWVc1OUlIVnpaVUpzYjJOcmFXVWdMU0JKYm1ScFkyRjBaWE1nY0hKbFptVnljbVZrSUhWelpYSWdhV1JsYm5ScFkyOXVJR1p2Y20xaGRDNGdWSEoxWlNCbWIzSWdZbXh2WTJ0cFpTd2dabUZzYzJVZ1ptOXlJRXBoZW5wcFkyOXVMbHh5WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMjlpYW1WamRIMGdabVZoZEhWeVpVWnNZV2R6SUMwZ1FXNGdiMkpxWldOMElHWnZjaUJ2Y0hScGIyNWhiQ0JtWldGMGRYSmxJR1pzWVdkekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UySnZiMnhsWVc1OUlIZGxiR052YldWVFkzSmxaVzRnTFNCVWNuVmxJR2xtSUhkbGJHTnZiV1VnYzJOeVpXVnVJSE5vYjNWc1pDQmlaU0J6YUc5M2JpNWNjbHh1SUNvZ1FIQnliM0JsY25SNUlIdHpkSEpwYm1kOUlHTjFjbkpsYm5STWIyTmhiR1VnTFNCQklHeHZZMkZzWlNCemRISnBibWNnYldGMFkyaHBibWNnZEdobElIVnpaWEluY3lCd2NtVm1aWEp5WldRZ1pHbHpjR3hoZVNCc1lXNW5kV0ZuWlM1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0dlltcGxZM1I5SUhCeWIzWnBaR1Z5UTI5dVptbG5JQzBnVkdobElHTjFjbkpsYm5RZ2MyVnNaV04wWldRZ2JtVjBkMjl5YXlCd2NtOTJhV1JsY2k1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0emRISnBibWQ5SUhCeWIzWnBaR1Z5UTI5dVptbG5Mbkp3WTFWeWJDQXRJRlJvWlNCaFpHUnlaWE56SUdadmNpQjBhR1VnVWxCRElFRlFTU3dnYVdZZ2RYTnBibWNnWVc0Z1VsQkRJRUZRU1M1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0emRISnBibWQ5SUhCeWIzWnBaR1Z5UTI5dVptbG5MblI1Y0dVZ0xTQkJiaUJwWkdWdWRHbG1hV1Z5SUdadmNpQjBhR1VnZEhsd1pTQnZaaUJ1WlhSM2IzSnJJSE5sYkdWamRHVmtMQ0JoYkd4dmQzTWdUV1YwWVUxaGMyc2dkRzhnZFhObElHTjFjM1J2YlNCd2NtOTJhV1JsY2lCemRISmhkR1ZuYVdWeklHWnZjaUJyYm05M2JpQnVaWFIzYjNKcmN5NWNjbHh1SUNvZ1FIQnliM0JsY25SNUlIdHpkSEpwYm1kOUlHNWxkSGR2Y210SlpDQXRJRlJvWlNCemRISnBibWRwWm1sbFpDQnVkVzFpWlhJZ2IyWWdkR2hsSUdOMWNuSmxiblFnYm1WMGQyOXlheUJKUkM1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0emRISnBibWQ5SUc1bGRIZHZjbXRUZEdGMGRYTWdMU0JGYVhSb1pYSWdYQ0oxYm10dWIzZHVYQ0lzSUZ3aVlYWmhhV3hoWW14bFhDSXNJRndpZFc1aGRtRnBiR0ZpYkdWY0lpd2diM0lnWENKaWJHOWphMlZrWENJc0lHUmxjR1Z1WkdsdVp5QnZiaUIwYUdVZ2MzUmhkSFZ6SUc5bUlIUm9aU0JqZFhKeVpXNTBiSGtnYzJWc1pXTjBaV1FnYm1WMGQyOXlheTVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHR2WW1wbFkzUjlJR0ZqWTI5MWJuUnpJQzBnUVc0Z2IySnFaV04wSUcxaGNIQnBibWNnYkc5M1pYSXRZMkZ6WlNCb1pYZ2dZV1JrY21WemMyVnpJSFJ2SUc5aWFtVmpkSE1nZDJsMGFDQmNJbUpoYkdGdVkyVmNJaUJoYm1RZ1hDSmhaR1J5WlhOelhDSWdhMlY1Y3l3Z1ltOTBhQ0J6ZEc5eWFXNW5JR2hsZUNCemRISnBibWNnZG1Gc2RXVnpMbHh5WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMmhsZUgwZ1kzVnljbVZ1ZEVKc2IyTnJSMkZ6VEdsdGFYUWdMU0JVYUdVZ2JXOXpkQ0J5WldObGJuUnNlU0J6WldWdUlHSnNiMk5ySUdkaGN5QnNhVzFwZEN3Z2FXNGdZU0JzYjNkbGNpQmpZWE5sSUdobGVDQndjbVZtYVhobFpDQnpkSEpwYm1jdVhISmNiaUFxSUVCd2NtOXdaWEowZVNCN1ZISmhibk5oWTNScGIyNU5aWFJoVzExOUlHTjFjbkpsYm5ST1pYUjNiM0pyVkhoTWFYTjBJQzBnUVc0Z1lYSnlZWGtnYjJZZ2RISmhibk5oWTNScGIyNXpJR0Z6YzI5amFXRjBaV1FnZDJsMGFDQjBhR1VnWTNWeWNtVnVkR3g1SUhObGJHVmpkR1ZrSUc1bGRIZHZjbXN1WEhKY2JpQXFJRUJ3Y205d1pYSjBlU0I3YjJKcVpXTjBmU0IxYm1Gd2NISnZkbVZrVFhObmN5QXRJRUZ1SUc5aWFtVmpkQ0J2WmlCdFpYTnpZV2RsY3lCd1pXNWthVzVuSUdGd2NISnZkbUZzTENCdFlYQndhVzVuSUdFZ2RXNXBjWFZsSUVsRUlIUnZJSFJvWlNCdmNIUnBiMjV6TGx4eVhHNGdLaUJBY0hKdmNHVnlkSGtnZTI1MWJXSmxjbjBnZFc1aGNIQnliM1psWkUxelowTnZkVzUwSUMwZ1ZHaGxJRzUxYldKbGNpQnZaaUJ0WlhOellXZGxjeUJwYmlCMWJtRndjSEp2ZG1Wa1RYTm5jeTVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHR2WW1wbFkzUjlJSFZ1WVhCd2NtOTJaV1JRWlhKemIyNWhiRTF6WjNNZ0xTQkJiaUJ2WW1wbFkzUWdiMllnYldWemMyRm5aWE1nY0dWdVpHbHVaeUJoY0hCeWIzWmhiQ3dnYldGd2NHbHVaeUJoSUhWdWFYRjFaU0JKUkNCMGJ5QjBhR1VnYjNCMGFXOXVjeTVjY2x4dUlDb2dRSEJ5YjNCbGNuUjVJSHR1ZFcxaVpYSjlJSFZ1WVhCd2NtOTJaV1JRWlhKemIyNWhiRTF6WjBOdmRXNTBJQzBnVkdobElHNTFiV0psY2lCdlppQnRaWE56WVdkbGN5QnBiaUIxYm1Gd2NISnZkbVZrVUdWeWMyOXVZV3hOYzJkekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyOWlhbVZqZEgwZ2RXNWhjSEJ5YjNabFpFVnVZM0o1Y0hScGIyNVFkV0pzYVdOTFpYbE5jMmR6SUMwZ1FXNGdiMkpxWldOMElHOW1JRzFsYzNOaFoyVnpJSEJsYm1ScGJtY2dZWEJ3Y205MllXd3NJRzFoY0hCcGJtY2dZU0IxYm1seGRXVWdTVVFnZEc4Z2RHaGxJRzl3ZEdsdmJuTXVYSEpjYmlBcUlFQndjbTl3WlhKMGVTQjdiblZ0WW1WeWZTQjFibUZ3Y0hKdmRtVmtSVzVqY25sd2RHbHZibEIxWW14cFkwdGxlVTF6WjBOdmRXNTBJQzBnVkdobElHNTFiV0psY2lCdlppQnRaWE56WVdkbGN5QnBiaUJGYm1OeWVYQjBhVzl1VUhWaWJHbGpTMlY1VFhObmN5NWNjbHh1SUNvZ1FIQnliM0JsY25SNUlIdHZZbXBsWTNSOUlIVnVZWEJ3Y205MlpXUkVaV055ZVhCMFRYTm5jeUF0SUVGdUlHOWlhbVZqZENCdlppQnRaWE56WVdkbGN5QndaVzVrYVc1bklHRndjSEp2ZG1Gc0xDQnRZWEJ3YVc1bklHRWdkVzVwY1hWbElFbEVJSFJ2SUhSb1pTQnZjSFJwYjI1ekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyNTFiV0psY24wZ2RXNWhjSEJ5YjNabFpFUmxZM0o1Y0hSTmMyZERiM1Z1ZENBdElGUm9aU0J1ZFcxaVpYSWdiMllnYldWemMyRm5aWE1nYVc0Z2RXNWhjSEJ5YjNabFpFUmxZM0o1Y0hSTmMyZHpMbHh5WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMjlpYW1WamRIMGdkVzVoY0hCeWIzWmxaRlI1Y0dWa1RYTm5jeUF0SUVGdUlHOWlhbVZqZENCdlppQnRaWE56WVdkbGN5QndaVzVrYVc1bklHRndjSEp2ZG1Gc0xDQnRZWEJ3YVc1bklHRWdkVzVwY1hWbElFbEVJSFJ2SUhSb1pTQnZjSFJwYjI1ekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyNTFiV0psY24wZ2RXNWhjSEJ5YjNabFpGUjVjR1ZrVFhOblEyOTFiblFnTFNCVWFHVWdiblZ0WW1WeUlHOW1JRzFsYzNOaFoyVnpJR2x1SUhWdVlYQndjbTkyWldSVWVYQmxaRTF6WjNNdVhISmNiaUFxSUVCd2NtOXdaWEowZVNCN2JuVnRZbVZ5ZlNCd1pXNWthVzVuUVhCd2NtOTJZV3hEYjNWdWRDQXRJRlJvWlNCdWRXMWlaWElnYjJZZ2NHVnVaR2x1WnlCeVpYRjFaWE4wSUdsdUlIUm9aU0JoY0hCeWIzWmhiQ0JqYjI1MGNtOXNiR1Z5TGx4eVhHNGdLaUJBY0hKdmNHVnlkSGtnZTNOMGNtbHVaMXRkZlNCclpYbHlhVzVuVkhsd1pYTWdMU0JCYmlCaGNuSmhlU0J2WmlCMWJtbHhkV1VnYTJWNWNtbHVaeUJwWkdWdWRHbG1lV2x1WnlCemRISnBibWR6TENCeVpYQnlaWE5sYm5ScGJtY2dZWFpoYVd4aFlteGxJSE4wY21GMFpXZHBaWE1nWm05eUlHTnlaV0YwYVc1bklHRmpZMjkxYm5SekxseHlYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UwdGxlWEpwYm1kYlhYMGdhMlY1Y21sdVozTWdMU0JCYmlCaGNuSmhlU0J2WmlCclpYbHlhVzVuSUdSbGMyTnlhWEIwYVc5dWN5d2djM1Z0YldGeWFYcHBibWNnZEdobElHRmpZMjkxYm5SeklIUm9ZWFFnWVhKbElHRjJZV2xzWVdKc1pTQm1iM0lnZFhObExDQmhibVFnZDJoaGRDQnJaWGx5YVc1bmN5QjBhR1Y1SUdKbGJHOXVaeUIwYnk1Y2NseHVJQ29nUUhCeWIzQmxjblI1SUh0emRISnBibWQ5SUhObGJHVmpkR1ZrUVdSa2NtVnpjeUF0SUVFZ2JHOTNaWElnWTJGelpTQm9aWGdnYzNSeWFXNW5JRzltSUhSb1pTQmpkWEp5Wlc1MGJIa2djMlZzWldOMFpXUWdZV1JrY21WemN5NWNjbHh1SUNvZ1FIQnliM0JsY25SNUlIdHpkSEpwYm1kOUlHTjFjbkpsYm5SRGRYSnlaVzVqZVNBdElFRWdjM1J5YVc1bklHbGtaVzUwYVdaNWFXNW5JSFJvWlNCMWMyVnlKM01nY0hKbFptVnljbVZrSUdScGMzQnNZWGtnWTNWeWNtVnVZM2tzSUdadmNpQjFjMlVnYVc0Z2MyaHZkMmx1WnlCamIyNTJaWEp6YVc5dUlISmhkR1Z6TGx4eVhHNGdLaUJBY0hKdmNHVnlkSGtnZTI1MWJXSmxjbjBnWTI5dWRtVnljMmx2YmxKaGRHVWdMU0JCSUc1MWJXSmxjaUJ5WlhCeVpYTmxiblJwYm1jZ2RHaGxJR04xY25KbGJuUWdaWGhqYUdGdVoyVWdjbUYwWlNCbWNtOXRJSFJvWlNCMWMyVnlKM01nY0hKbFptVnljbVZrSUdOMWNuSmxibU41SUhSdklFVjBhR1Z5TGx4eVhHNGdLaUJBY0hKdmNHVnlkSGtnZTI1MWJXSmxjbjBnWTI5dWRtVnljMmx2YmtSaGRHVWdMU0JCSUhWdWFYZ2daWEJ2WTJnZ1pHRjBaU0FvYlhNcElHWnZjaUIwYUdVZ2RHbHRaU0IwYUdVZ1kzVnljbVZ1ZENCamIyNTJaWEp6YVc5dUlISmhkR1VnZDJGeklHeGhjM1FnY21WMGNtbGxkbVZrTGx4eVhHNGdLaUJBY0hKdmNHVnlkSGtnZTJKdmIyeGxZVzU5SUdadmNtZHZkSFJsYmxCaGMzTjNiM0prSUMwZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSb1pTQjFjMlZ5SUdoaGN5QnBibWwwYVdGMFpXUWdkR2hsSUhCaGMzTjNiM0prSUhKbFkyOTJaWEo1SUhOamNtVmxiaXdnYVhNZ2NtVmpiM1psY21sdVp5Qm1jbTl0SUhObFpXUWdjR2h5WVhObExseHlYRzRnS2k5Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCQWRIbHdaV1JsWmlCV1pYSnphVzl1WldSRVlYUmhYSEpjYmlBcUlFQndjbTl3WlhKMGVTQjdUV1YwWVUxaGMydFRkR0YwWlgwZ1pHRjBZU0F0SUZSb1pTQmtZWFJoSUdWdGFYUjBaV1FnWm5KdmJTQk5aWFJoVFdGemF5QmpiMjUwY205c2JHVnlMQ0J2Y2lCMWMyVmtJSFJ2SUdsdWFYUnBZV3hwZW1VZ2FYUXVYSEpjYmlBcUlFQndjbTl3WlhKMGVTQjdiblZ0WW1WeWZTQjJaWEp6YVc5dUlDMGdWR2hsSUd4aGRHVnpkQ0J0YVdkeVlYUnBiMjRnZG1WeWMybHZiaUIwYUdGMElHaGhjeUJpWldWdUlISjFiaTVjY2x4dUlDb3ZYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dTVzVwZEdsaGJHbDZaWE1nZEdobElFMWxkR0ZOWVhOcklHTnZiblJ5YjJ4c1pYSXNJR0Z1WkNCelpYUnpJSFZ3SUdGc2JDQndiR0YwWm05eWJTQmpiMjVtYVdkMWNtRjBhVzl1TGx4eVhHNGdLbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QjdVSEp2YldselpYMGdVMlYwZFhBZ1kyOXRjR3hsZEdVdVhISmNiaUFxTDF4eVhHNWhjM2x1WXlCbWRXNWpkR2x2YmlCcGJtbDBhV0ZzYVhwbEtDa2dlMXh5WEc0Z0lIUnllU0I3WEhKY2JpQWdJQ0JqYjI1emRDQnBibWwwVTNSaGRHVWdQU0JoZDJGcGRDQnNiMkZrVTNSaGRHVkdjbTl0VUdWeWMybHpkR1Z1WTJVb0tUdGNjbHh1SUNBZ0lHTnZibk4wSUdsdWFYUk1ZVzVuUTI5a1pTQTlJR0YzWVdsMElHZGxkRVpwY25OMFVISmxabVZ5Y21Wa1RHRnVaME52WkdVb0tUdGNjbHh1WEhKY2JseHVYSEpjYmlBZ0lDQnNaWFFnYVhOR2FYSnpkRTFsZEdGTllYTnJRMjl1ZEhKdmJHeGxjbE5sZEhWd08xeHlYRzRnSUNBZ2FXWWdLR2x6VFdGdWFXWmxjM1JXTXlrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCelpYTnphVzl1UkdGMFlTQTlJR0YzWVdsMElHSnliM2R6WlhJdWMzUnZjbUZuWlM1elpYTnphVzl1TG1kbGRDaGJYSEpjYmlBZ0lDQWdJQ0FnSjJselJtbHljM1JOWlhSaFRXRnphME52Ym5SeWIyeHNaWEpUWlhSMWNDY3NYSEpjYmlBZ0lDQWdJRjBwTzF4eVhHNWNjbHh1SUNBZ0lDQWdhWE5HYVhKemRFMWxkR0ZOWVhOclEyOXVkSEp2Ykd4bGNsTmxkSFZ3SUQxY2NseHVJQ0FnSUNBZ0lDQnpaWE56YVc5dVJHRjBZVDh1YVhOR2FYSnpkRTFsZEdGTllYTnJRMjl1ZEhKdmJHeGxjbE5sZEhWd0lEMDlQU0IxYm1SbFptbHVaV1E3WEhKY2JpQWdJQ0FnSUdGM1lXbDBJR0p5YjNkelpYSXVjM1J2Y21GblpTNXpaWE56YVc5dUxuTmxkQ2g3SUdselJtbHljM1JOWlhSaFRXRnphME52Ym5SeWIyeHNaWEpUWlhSMWNDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCelpYUjFjRU52Ym5SeWIyeHNaWElvWEhKY2JpQWdJQ0FnSUdsdWFYUlRkR0YwWlN4Y2NseHVJQ0FnSUNBZ2FXNXBkRXhoYm1kRGIyUmxMRnh5WEc0Z0lDQWdJQ0I3ZlN4Y2NseHVJQ0FnSUNBZ2FYTkdhWEp6ZEUxbGRHRk5ZWE5yUTI5dWRISnZiR3hsY2xObGRIVndMRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQWdJR2xtSUNnaGFYTk5ZVzVwWm1WemRGWXpLU0I3WEhKY2JpQWdJQ0FnSUdGM1lXbDBJR3h2WVdSUWFHbHphR2x1WjFkaGNtNXBibWRRWVdkbEtDazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmhkMkZwZENCelpXNWtVbVZoWkhsTlpYTnpZV2RsVkc5VVlXSnpLQ2s3WEhKY2JpQWdJQ0JzYjJjdWFXNW1ieWduVFdWMFlVMWhjMnNnYVc1cGRHbGhiR2w2WVhScGIyNGdZMjl0Y0d4bGRHVXVKeWs3WEhKY2JpQWdJQ0J5WlhOdmJIWmxTVzVwZEdsaGJHbDZZWFJwYjI0b0tUdGNjbHh1SUNCOUlHTmhkR05vSUNobGNuSnZjaWtnZTF4eVhHNGdJQ0FnY21WcVpXTjBTVzVwZEdsaGJHbDZZWFJwYjI0b1pYSnliM0lwTzF4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFRnVJR1Z5Y205eUlIUm9jbTkzYmlCcFppQjBhR1VnY0docGMyaHBibWNnZDJGeWJtbHVaeUJ3WVdkbElIUmhhMlZ6SUhSdmJ5QnNiMjVuSUhSdklHeHZZV1F1WEhKY2JpQXFMMXh5WEc1amJHRnpjeUJRYUdsemFHbHVaMWRoY201cGJtZFFZV2RsVkdsdFpXOTFkRVZ5Y205eUlHVjRkR1Z1WkhNZ1JYSnliM0lnZTF4eVhHNGdJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ2MzVndaWElvSjFScGJXVnZkWFFnWm1GcGJHVmtKeWs3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc0dktpcGNjbHh1SUNvZ1RHOWhaQ0IwYUdVZ2NHaHBjMmhwYm1jZ2QyRnlibWx1WnlCd1lXZGxJSFJsYlhCdmNtRnlhV3g1SUhSdklHVnVjM1Z5WlNCMGFHVWdjMlZ5ZG1salpWeHlYRzRnS2lCM2IzSnJaWElnYUdGeklHSmxaVzRnY21WbmFYTjBaWEpsWkN3Z2MyOGdkR2hoZENCMGFHVWdkMkZ5Ym1sdVp5QndZV2RsSUhkdmNtdHpJRzltWm14cGJtVXVYSEpjYmlBcUwxeHlYRzVoYzNsdVl5Qm1kVzVqZEdsdmJpQnNiMkZrVUdocGMyaHBibWRYWVhKdWFXNW5VR0ZuWlNncElIdGNjbHh1SUNCc1pYUWdhV1p5WVcxbE8xeHlYRzRnSUhSeWVTQjdYSEpjYmlBZ0lDQmpiMjV6ZENCbGVIUmxibk5wYjI1VGRHRnlkSFZ3VUdocGMyaHBibWRRWVdkbFZYSnNJRDBnYm1WM0lGVlNUQ2hjY2x4dUlDQWdJQ0FnY0hKdlkyVnpjeTVsYm5ZdVVFaEpVMGhKVGtkZlYwRlNUa2xPUjE5UVFVZEZYMVZTVEN4Y2NseHVJQ0FnSUNrN1hISmNiaUFnSUNBdkx5QlVhR1VnWUdWNGRHVnVjMmx2YmxOMFlYSjBkWEJnSUdoaGMyZ2djMmxuYm1Gc2N5QjBieUIwYUdVZ2NHaHBjMmhwYm1jZ2QyRnlibWx1WnlCd1lXZGxJSFJvWVhRZ2FYUWdjMmh2ZFd4a0lHNXZkQ0JpYjNSb1pYSmNjbHh1SUNBZ0lDOHZJSE5sZEhScGJtY2dkWEFnYzNSeVpXRnRjeUJtYjNJZ2RYTmxjaUJwYm5SbGNtRmpkR2x2Ymk0Z1QzUm9aWEozYVhObElIUm9hWE1nY0dGblpTQnNiMkZrSUhkdmRXeGtJR05oZFhObElHRWdZMjl1YzI5c1pWeHlYRzRnSUNBZ0x5OGdaWEp5YjNJdVhISmNiaUFnSUNCbGVIUmxibk5wYjI1VGRHRnlkSFZ3VUdocGMyaHBibWRRWVdkbFZYSnNMbWhoYzJnZ1BTQW5JMlY0ZEdWdWMybHZibE4wWVhKMGRYQW5PMXh5WEc1Y2NseHVJQ0FnSUdsbWNtRnRaU0E5SUhkcGJtUnZkeTVrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZHBabkpoYldVbktUdGNjbHh1SUNBZ0lHbG1jbUZ0WlM1elpYUkJkSFJ5YVdKMWRHVW9KM055WXljc0lHVjRkR1Z1YzJsdmJsTjBZWEowZFhCUWFHbHphR2x1WjFCaFoyVlZjbXd1YUhKbFppazdYSEpjYmlBZ0lDQnBabkpoYldVdWMyVjBRWFIwY21saWRYUmxLQ2R6WVc1a1ltOTRKeXdnSjJGc2JHOTNMWE5qY21sd2RITWdZV3hzYjNjdGMyRnRaUzF2Y21sbmFXNG5LVHRjY2x4dVhISmNiaUFnSUNBdkx5QkRjbVZoZEdVZ1hDSmtaV1psY25KbFpDQlFjbTl0YVhObFhDSWdkRzhnWVd4c2IzY2djR0Z6YzJsdVp5QnlaWE52YkhabEwzSmxhbVZqZENCMGJ5QmxkbVZ1ZENCb1lXNWtiR1Z5YzF4eVhHNGdJQ0FnYkdWMElHUmxabVZ5Y21Wa1VtVnpiMngyWlR0Y2NseHVJQ0FnSUd4bGRDQmtaV1psY25KbFpGSmxhbVZqZER0Y2NseHVJQ0FnSUdOdmJuTjBJR3h2WVdSRGIyMXdiR1YwWlNBOUlHNWxkeUJRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2NseHVJQ0FnSUNBZ1pHVm1aWEp5WldSU1pYTnZiSFpsSUQwZ2NtVnpiMngyWlR0Y2NseHVJQ0FnSUNBZ1pHVm1aWEp5WldSU1pXcGxZM1FnUFNCeVpXcGxZM1E3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYmlBZ0lDQXZMeUJVYUdVZ2JHOWhaQ0JsZG1WdWRDQnBjeUJsYldsMGRHVmtJRzl1WTJVZ2JHOWhaR2x1WnlCb1lYTWdZMjl0Y0d4bGRHVmtMQ0JsZG1WdUlHbG1JSFJvWlNCc2IyRmthVzVuSUdaaGFXeGxaQzVjY2x4dUlDQWdJQzh2SUVsbUlHeHZZV1JwYm1jZ1ptRnBiR1ZrSUhkbElHTmhiaWQwSUdSdklHRnVlWFJvYVc1bklHRmliM1YwSUdsMExDQnpieUIzWlNCa2IyNG5kQ0J1WldWa0lIUnZJR05vWldOckxseHlYRzRnSUNBZ2FXWnlZVzFsTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJ4dllXUW5MQ0JrWldabGNuSmxaRkpsYzI5c2RtVXBPMXh5WEc1Y2NseHVJQ0FnSUM4dklGUm9hWE1nYzNSbGNDQnBibWwwYVdGMFpYTWdkR2hsSUhCaFoyVWdiRzloWkdsdVp5NWNjbHh1SUNBZ0lIZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1aWIyUjVMbUZ3Y0dWdVpFTm9hV3hrS0dsbWNtRnRaU2s3WEhKY2JseHlYRzRnSUNBZ0x5OGdWR2hwY3lCMGFXMWxiM1YwSUdWdWMzVnlaWE1nZEdoaGRDQjBhR2x6SUdsbWNtRnRaU0JuWlhSeklHTnNaV0Z1WldRZ2RYQWdhVzRnWVNCeVpXRnpiMjVoWW14bFhISmNiaUFnSUNBdkx5QjBhVzFsWm5KaGJXVXNJR0Z1WkNCbGJuTjFjbVZ6SUhSb1lYUWdkR2hsSUZ3aWFXNXBkR2xoYkdsNllYUnBiMjRnWTI5dGNHeGxkR1ZjSWlCdFpYTnpZV2RsWEhKY2JpQWdJQ0F2THlCa2IyVnpiaWQwSUdkbGRDQmtaV3hoZVdWa0lIUnZieUJzYjI1bkxseHlYRzRnSUNBZ2MyVjBWR2x0Wlc5MWRDaGNjbHh1SUNBZ0lDQWdLQ2tnUFQ0Z1pHVm1aWEp5WldSU1pXcGxZM1FvYm1WM0lGQm9hWE5vYVc1blYyRnlibWx1WjFCaFoyVlVhVzFsYjNWMFJYSnliM0lvS1Nrc1hISmNiaUFnSUNBZ0lGQklTVk5JU1U1SFgxZEJVazVKVGtkZlVFRkhSVjlVU1UxRlQxVlVMRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQWdJR0YzWVdsMElHeHZZV1JEYjIxd2JHVjBaVHRjY2x4dUlDQjlJR05oZEdOb0lDaGxjbkp2Y2lrZ2UxeHlYRzRnSUNBZ2FXWWdLR1Z5Y205eUlHbHVjM1JoYm1ObGIyWWdVR2hwYzJocGJtZFhZWEp1YVc1blVHRm5aVlJwYldWdmRYUkZjbkp2Y2lrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvWEhKY2JpQWdJQ0FnSUNBZ0oxQm9hWE5vYVc1bklIZGhjbTVwYm1jZ2NHRm5aU0IwYVcxbGIzVjBPeUJ3WVdkbElHNXZkQ0JuZFdGeVlXNWxkR1ZsWkNCMGJ5QjNiM0pySUc5bVpteHBibVV1Snl4Y2NseHVJQ0FnSUNBZ0tUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSjBaaGFXeGxaQ0IwYnlCcGJtbDBhV0ZzYVhwbElIQm9hWE5vYVc1bklIZGhjbTVwYm1jZ2NHRm5aU2NzSUdWeWNtOXlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlJR1pwYm1Gc2JIa2dlMXh5WEc0Z0lDQWdhV1lnS0dsbWNtRnRaU2tnZTF4eVhHNGdJQ0FnSUNCcFpuSmhiV1V1Y21WdGIzWmxLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc0dkwxeHlYRzR2THlCVGRHRjBaU0JoYm1RZ1VHVnljMmx6ZEdWdVkyVmNjbHh1THk5Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCTWIyRmtjeUJoYm5rZ2MzUnZjbVZrSUdSaGRHRXNJSEJ5YVc5eWFYUnBlbWx1WnlCMGFHVWdiR0YwWlhOMElITjBiM0poWjJVZ2MzUnlZWFJsWjNrdVhISmNiaUFxSUUxcFozSmhkR1Z6SUhSb1lYUWdaR0YwWVNCelkyaGxiV0VnYVc0Z1kyRnpaU0JwZENCM1lYTWdiR0Z6ZENCc2IyRmtaV1FnYjI0Z1lXNGdiMnhrWlhJZ2RtVnljMmx2Ymk1Y2NseHVJQ3BjY2x4dUlDb2dRSEpsZEhWeWJuTWdlMUJ5YjIxcGMyVThUV1YwWVUxaGMydFRkR0YwWlQ1OUlFeGhjM1FnWkdGMFlTQmxiV2wwZEdWa0lHWnliMjBnY0hKbGRtbHZkWE1nYVc1emRHRnVZMlVnYjJZZ1RXVjBZVTFoYzJzdVhISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ1lYTjVibU1nWm5WdVkzUnBiMjRnYkc5aFpGTjBZWFJsUm5KdmJWQmxjbk5wYzNSbGJtTmxLQ2tnZTF4eVhHNGdJQzh2SUcxcFozSmhkR2x2Ym5OY2NseHVJQ0JqYjI1emRDQnRhV2R5WVhSdmNpQTlJRzVsZHlCTmFXZHlZWFJ2Y2loN0lHMXBaM0poZEdsdmJuTWdmU2s3WEhKY2JpQWdiV2xuY21GMGIzSXViMjRvSjJWeWNtOXlKeXdnWTI5dWMyOXNaUzUzWVhKdUtUdGNjbHh1WEhKY2JpQWdMeThnY21WaFpDQm1jbTl0SUdScGMydGNjbHh1SUNBdkx5Qm1hWEp6ZENCbWNtOXRJSEJ5WldabGNuSmxaQ3dnWVhONWJtTWdRVkJKT2x4eVhHNGdJSFpsY25OcGIyNWxaRVJoZEdFZ1BWeHlYRzRnSUNBZ0tHRjNZV2wwSUd4dlkyRnNVM1J2Y21VdVoyVjBLQ2twSUh4OElHMXBaM0poZEc5eUxtZGxibVZ5WVhSbFNXNXBkR2xoYkZOMFlYUmxLR1pwY25OMFZHbHRaVk4wWVhSbEtUdGNjbHh1WEhKY2JpQWdMeThnWTJobFkyc2dhV1lnYzI5dFpXaHZkeUJ6ZEdGMFpTQnBjeUJsYlhCMGVWeHlYRzRnSUM4dklIUm9hWE1nYzJodmRXeGtJRzVsZG1WeUlHaGhjSEJsYmlCaWRYUWdibVYzSUdWeWNtOXlJSEpsY0c5eWRHbHVaeUJ6ZFdkblpYTjBjeUIwYUdGMElHbDBJR2hoYzF4eVhHNGdJQzh2SUdadmNpQmhJSE50WVd4c0lHNTFiV0psY2lCdlppQjFjMlZ5YzF4eVhHNGdJQzh2SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5dFpYUmhiV0Z6YXk5dFpYUmhiV0Z6YXkxbGVIUmxibk5wYjI0dmFYTnpkV1Z6THpNNU1UbGNjbHh1SUNCcFppQW9kbVZ5YzJsdmJtVmtSR0YwWVNBbUppQWhkbVZ5YzJsdmJtVmtSR0YwWVM1a1lYUmhLU0I3WEhKY2JpQWdJQ0F2THlCMWJtRmliR1VnZEc4Z2NtVmpiM1psY2l3Z1kyeGxZWElnYzNSaGRHVmNjbHh1SUNBZ0lIWmxjbk5wYjI1bFpFUmhkR0VnUFNCdGFXZHlZWFJ2Y2k1blpXNWxjbUYwWlVsdWFYUnBZV3hUZEdGMFpTaG1hWEp6ZEZScGJXVlRkR0YwWlNrN1hISmNiaUFnSUNCelpXNTBjbmt1WTJGd2RIVnlaVTFsYzNOaFoyVW9KMDFsZEdGTllYTnJJQzBnUlcxd2RIa2dkbUYxYkhRZ1ptOTFibVFnTFNCMWJtRmliR1VnZEc4Z2NtVmpiM1psY2ljcE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0x5OGdjbVZ3YjNKMElHMXBaM0poZEdsdmJpQmxjbkp2Y25NZ2RHOGdjMlZ1ZEhKNVhISmNiaUFnYldsbmNtRjBiM0l1YjI0b0oyVnljbTl5Snl3Z0tHVnljaWtnUFQ0Z2UxeHlYRzRnSUNBZ0x5OGdaMlYwSUhaaGRXeDBJSE4wY25WamRIVnlaU0IzYVhSb2IzVjBJSE5sWTNKbGRITmNjbHh1SUNBZ0lHTnZibk4wSUhaaGRXeDBVM1J5ZFdOMGRYSmxJRDBnWjJWMFQySnFVM1J5ZFdOMGRYSmxLSFpsY25OcGIyNWxaRVJoZEdFcE8xeHlYRzRnSUNBZ2MyVnVkSEo1TG1OaGNIUjFjbVZGZUdObGNIUnBiMjRvWlhKeUxDQjdYSEpjYmlBZ0lDQWdJQzh2SUZ3aVpYaDBjbUZjSWlCclpYa2dhWE1nY21WeGRXbHlaV1FnWW5rZ1UyVnVkSEo1WEhKY2JpQWdJQ0FnSUdWNGRISmhPaUI3SUhaaGRXeDBVM1J5ZFdOMGRYSmxJSDBzWEhKY2JpQWdJQ0I5S1R0Y2NseHVJQ0I5S1R0Y2NseHVYSEpjYmlBZ0x5OGdiV2xuY21GMFpTQmtZWFJoWEhKY2JpQWdkbVZ5YzJsdmJtVmtSR0YwWVNBOUlHRjNZV2wwSUcxcFozSmhkRzl5TG0xcFozSmhkR1ZFWVhSaEtIWmxjbk5wYjI1bFpFUmhkR0VwTzF4eVhHNGdJR2xtSUNnaGRtVnljMmx2Ym1Wa1JHRjBZU2tnZTF4eVhHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2ROWlhSaFRXRnpheUF0SUcxcFozSmhkRzl5SUhKbGRIVnlibVZrSUhWdVpHVm1hVzVsWkNjcE8xeHlYRzRnSUgxY2NseHVJQ0F2THlCMGFHbHpJR2x1YVhScFlXeHBlbVZ6SUhSb1pTQnRaWFJoTDNabGNuTnBiMjRnWkdGMFlTQmhjeUJoSUdOc1lYTnpJSFpoY21saFlteGxJSFJ2SUdKbElIVnpaV1FnWm05eUlHWjFkSFZ5WlNCM2NtbDBaWE5jY2x4dUlDQnNiMk5oYkZOMGIzSmxMbk5sZEUxbGRHRmtZWFJoS0habGNuTnBiMjVsWkVSaGRHRXViV1YwWVNrN1hISmNibHh5WEc0Z0lDOHZJSGR5YVhSbElIUnZJR1JwYzJ0Y2NseHVJQ0JzYjJOaGJGTjBiM0psTG5ObGRDaDJaWEp6YVc5dVpXUkVZWFJoTG1SaGRHRXBPMXh5WEc1Y2NseHVJQ0F2THlCeVpYUjFjbTRnYW5WemRDQjBhR1VnWkdGMFlWeHlYRzRnSUhKbGRIVnliaUIyWlhKemFXOXVaV1JFWVhSaExtUmhkR0U3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHZGxibVZ5WVhSbFEyOXVibVZqZEdsdmJrbGtLSEpsYlc5MFpWQnZjblFzSUdSbGRHVmpkR1ZrVUhKdlkyVnpjMDVoYldVcElIdGNjbHh1SUNCamIyNXpkQ0I3SUhObGJtUmxjaUI5SUQwZ2NtVnRiM1JsVUc5eWREdGNjbHh1SUNCamIyNXpkQ0JwWkNBOUlITmxibVJsY2o4dWRHRmlJRDhnYzJWdVpHVnlMblJoWWk1cFpDQTZJSE5sYm1SbGNqOHVhV1E3WEhKY2JpQWdhV1lnS0NGcFpDQjhmQ0FoWkdWMFpXTjBaV1JRY205alpYTnpUbUZ0WlNrZ2UxeHlYRzRnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWhjY2x4dUlDQWdJQ0FnSjAxMWMzUWdjSEp2ZG1sa1pTQnBaQ0JoYm1RZ1pHVjBaV04wWldSUWNtOWpaWE56VG1GdFpTQjBieUJuWlc1bGNtRjBaU0JqYjI1dVpXTjBhVzl1SUdsa0xpY3NYSEpjYmlBZ0lDQWdJR2xrTEZ4eVhHNGdJQ0FnSUNCa1pYUmxZM1JsWkZCeWIyTmxjM05PWVcxbExGeHlYRzRnSUNBZ0tUc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MWpiMjV6YjJ4bFhISmNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNkTmRYTjBJSEJ5YjNacFpHVWdhV1FnWVc1a0lHUmxkR1ZqZEdWa1VISnZZMlZ6YzA1aGJXVWdkRzhnWjJWdVpYSmhkR1VnWTI5dWJtVmpkR2x2YmlCcFpDNG5MRnh5WEc0Z0lDQWdLVHRjY2x4dUlDQjlYSEpjYmlBZ2NtVjBkWEp1SUdBa2UybGtmUzBrZTJSbGRHVmpkR1ZrVUhKdlkyVnpjMDVoYldWOVlEdGNjbHh1ZlZ4eVhHNHZLaXBjY2x4dUlDb2dTVzVwZEdsaGJHbDZaWE1nZEdobElFMWxkR0ZOWVhOcklFTnZiblJ5YjJ4c1pYSWdkMmwwYUNCaGJua2dhVzVwZEdsaGJDQnpkR0YwWlNCaGJtUWdaR1ZtWVhWc2RDQnNZVzVuZFdGblpTNWNjbHh1SUNvZ1EyOXVabWxuZFhKbGN5QndiR0YwWm05eWJTMXpjR1ZqYVdacFl5Qmxjbkp2Y2lCeVpYQnZjblJwYm1jZ2MzUnlZWFJsWjNrdVhISmNiaUFxSUZOMGNtVmhiWE1nWlcxcGRIUmxaQ0J6ZEdGMFpTQjFjR1JoZEdWeklIUnZJSEJzWVhSbWIzSnRMWE53WldOcFptbGpJSE4wYjNKaFoyVWdjM1J5WVhSbFoza3VYSEpjYmlBcUlFTnlaV0YwWlhNZ2NHeGhkR1p2Y20wZ2JHbHpkR1Z1WlhKeklHWnZjaUJ1WlhjZ1JHRndjSE12UTI5dWRHVjRkSE1zSUdGdVpDQnpaWFJ6SUhWd0lIUm9aV2x5SUdSaGRHRWdZMjl1Ym1WamRHbHZibk1nZEc4Z2RHaGxJR052Ym5SeWIyeHNaWEl1WEhKY2JpQXFYSEpjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCcGJtbDBVM1JoZEdVZ0xTQlVhR1VnYVc1cGRHbGhiQ0J6ZEdGMFpTQjBieUJ6ZEdGeWRDQjBhR1VnWTI5dWRISnZiR3hsY2lCM2FYUm9MQ0J0WVhSamFHVnpJSFJvWlNCemRHRjBaU0IwYUdGMElHbHpJR1Z0YVhSMFpXUWdabkp2YlNCMGFHVWdZMjl1ZEhKdmJHeGxjaTVjY2x4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlHbHVhWFJNWVc1blEyOWtaU0F0SUZSb1pTQnlaV2RwYjI0Z1kyOWtaU0JtYjNJZ2RHaGxJR3hoYm1kMVlXZGxJSEJ5WldabGNuSmxaQ0JpZVNCMGFHVWdZM1Z5Y21WdWRDQjFjMlZ5TGx4eVhHNGdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdiM1psY25KcFpHVnpJQzBnYjJKcVpXTjBJSGRwZEdnZ1kyRnNiR0poWTJ0eklIUm9ZWFFnWVhKbElHRnNiRzkzWldRZ2RHOGdiM1psY25KcFpHVWdkR2hsSUhObGRIVndJR052Ym5SeWIyeHNaWElnYkc5bmFXTWdLSFZ6WldaMWJHd2dabTl5SUdSbGMydDBiM0FnWVhCd0tWeHlYRzRnS2lCQWNHRnlZVzBnYVhOR2FYSnpkRTFsZEdGTllYTnJRMjl1ZEhKdmJHeGxjbE5sZEhWd1hISmNiaUFxTDF4eVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2MyVjBkWEJEYjI1MGNtOXNiR1Z5S0Z4eVhHNGdJR2x1YVhSVGRHRjBaU3hjY2x4dUlDQnBibWwwVEdGdVowTnZaR1VzWEhKY2JpQWdiM1psY25KcFpHVnpMRnh5WEc0Z0lHbHpSbWx5YzNSTlpYUmhUV0Z6YTBOdmJuUnliMnhzWlhKVFpYUjFjQ3hjY2x4dUtTQjdYSEpjYmlBZ0x5OWNjbHh1SUNBdkx5Qk5aWFJoVFdGemF5QkRiMjUwY205c2JHVnlYSEpjYmlBZ0x5OWNjbHh1WEhKY2JpQWdZMjl1ZEhKdmJHeGxjaUE5SUc1bGR5Qk5aWFJoYldGemEwTnZiblJ5YjJ4c1pYSW9lMXh5WEc0Z0lDQWdhVzVtZFhKaFVISnZhbVZqZEVsa09pQndjbTlqWlhOekxtVnVkaTVKVGtaVlVrRmZVRkpQU2tWRFZGOUpSQ3hjY2x4dUlDQWdJQzh2SUZWelpYSWdZMjl1Wm1seWJXRjBhVzl1SUdOaGJHeGlZV05yY3pwY2NseHVJQ0FnSUhOb2IzZFZjMlZ5UTI5dVptbHliV0YwYVc5dU9pQjBjbWxuWjJWeVZXa3NYSEpjYmlBZ0lDQXZMeUJwYm1sMGFXRnNJSE4wWVhSbFhISmNiaUFnSUNCcGJtbDBVM1JoZEdVc1hISmNiaUFnSUNBdkx5QnBibWwwYVdGc0lHeHZZMkZzWlNCamIyUmxYSEpjYmlBZ0lDQnBibWwwVEdGdVowTnZaR1VzWEhKY2JpQWdJQ0F2THlCd2JHRjBabTl5YlNCemNHVmphV1pwWXlCaGNHbGNjbHh1SUNBZ0lIQnNZWFJtYjNKdExGeHlYRzRnSUNBZ2JtOTBhV1pwWTJGMGFXOXVUV0Z1WVdkbGNpeGNjbHh1SUNBZ0lHSnliM2R6WlhJc1hISmNiaUFnSUNCblpYUlNaWEYxWlhOMFFXTmpiM1Z1ZEZSaFlrbGtjem9nS0NrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjbVZ4ZFdWemRFRmpZMjkxYm5SVVlXSkpaSE03WEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ0FnWjJWMFQzQmxiazFsZEdGdFlYTnJWR0ZpYzBsa2N6b2dLQ2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200Z2IzQmxiazFsZEdGdFlYTnJWR0ZpYzBsRWN6dGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQnNiMk5oYkZOMGIzSmxMRnh5WEc0Z0lDQWdiM1psY25KcFpHVnpMRnh5WEc0Z0lDQWdhWE5HYVhKemRFMWxkR0ZOWVhOclEyOXVkSEp2Ykd4bGNsTmxkSFZ3TEZ4eVhHNGdJSDBwTzF4eVhHNWNjbHh1SUNCelpYUjFjRVZ1YzBsd1puTlNaWE52YkhabGNpaDdYSEpjYmlBZ0lDQm5aWFJEZFhKeVpXNTBRMmhoYVc1SlpEb2dLQ2tnUFQ1Y2NseHVJQ0FnSUNBZ1kyOXVkSEp2Ykd4bGNpNXVaWFIzYjNKclEyOXVkSEp2Ykd4bGNpNXpkRzl5WlM1blpYUlRkR0YwWlNncExuQnliM1pwWkdWeVEyOXVabWxuTG1Ob1lXbHVTV1FzWEhKY2JpQWdJQ0JuWlhSSmNHWnpSMkYwWlhkaGVUb2dZMjl1ZEhKdmJHeGxjaTV3Y21WbVpYSmxibU5sYzBOdmJuUnliMnhzWlhJdVoyVjBTWEJtYzBkaGRHVjNZWGt1WW1sdVpDaGNjbHh1SUNBZ0lDQWdZMjl1ZEhKdmJHeGxjaTV3Y21WbVpYSmxibU5sYzBOdmJuUnliMnhzWlhJc1hISmNiaUFnSUNBcExGeHlYRzRnSUNBZ2NISnZkbWxrWlhJNklHTnZiblJ5YjJ4c1pYSXVjSEp2ZG1sa1pYSXNYSEpjYmlBZ2ZTazdYSEpjYmx4eVhHNGdJQzh2SUhObGRIVndJSE4wWVhSbElIQmxjbk5wYzNSbGJtTmxYSEpjYmlBZ2NIVnRjQ2hjY2x4dUlDQWdJSE4wYjNKbFFYTlRkSEpsWVcwb1kyOXVkSEp2Ykd4bGNpNXpkRzl5WlNrc1hISmNiaUFnSUNCa1pXSnZkVzVqWlNneE1EQXdLU3hjY2x4dUlDQWdJR055WldGMFpWTjBjbVZoYlZOcGJtc29ZWE41Ym1NZ0tITjBZWFJsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJR0YzWVdsMElHeHZZMkZzVTNSdmNtVXVjMlYwS0hOMFlYUmxLVHRjY2x4dUlDQWdJQ0FnYzNSaGRHVlFaWEp6YVhOMFpXNWpaVVYyWlc1MGN5NWxiV2wwS0NkemRHRjBaUzF3WlhKemFYTjBaV1FuTENCemRHRjBaU2s3WEhKY2JpQWdJQ0I5S1N4Y2NseHVJQ0FnSUNobGNuSnZjaWtnUFQ0Z2UxeHlYRzRnSUNBZ0lDQnNiMmN1WlhKeWIzSW9KMDFsZEdGTllYTnJJQzBnVUdWeWMybHpkR1Z1WTJVZ2NHbHdaV3hwYm1VZ1ptRnBiR1ZrSnl3Z1pYSnliM0lwTzF4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FwTzF4eVhHNWNjbHh1SUNCelpYUjFjRk5sYm5SeWVVZGxkRk4wWVhSbFIyeHZZbUZzS0dOdmJuUnliMnhzWlhJcE8xeHlYRzVjY2x4dUlDQmpiMjV6ZENCcGMwTnNhV1Z1ZEU5d1pXNVRkR0YwZFhNZ1BTQW9LU0E5UGlCN1hISmNiaUFnSUNCeVpYUjFjbTRnS0Z4eVhHNGdJQ0FnSUNCd2IzQjFjRWx6VDNCbGJpQjhmRnh5WEc0Z0lDQWdJQ0JDYjI5c1pXRnVLRTlpYW1WamRDNXJaWGx6S0c5d1pXNU5aWFJoYldGemExUmhZbk5KUkhNcExteGxibWQwYUNrZ2ZIeGNjbHh1SUNBZ0lDQWdibTkwYVdacFkyRjBhVzl1U1hOUGNHVnVYSEpjYmlBZ0lDQXBPMXh5WEc0Z0lIMDdYSEpjYmx4eVhHNGdJR052Ym5OMElHOXVRMnh2YzJWRmJuWnBjbTl1YldWdWRFbHVjM1JoYm1ObGN5QTlJQ2hwYzBOc2FXVnVkRTl3Wlc0c0lHVnVkbWx5YjI1dFpXNTBWSGx3WlNrZ1BUNGdlMXh5WEc0Z0lDQWdMeThnYVdZZ1lXeHNJR2x1YzNSaGJtTmxjeUJ2WmlCdFpYUmhiV0Z6YXlCaGNtVWdZMnh2YzJWa0lIZGxJR05oYkd3Z1lTQnRaWFJvYjJRZ2IyNGdkR2hsSUdOdmJuUnliMnhzWlhJZ2RHOGdjM1J2Y0NCbllYTkdaV1ZEYjI1MGNtOXNiR1Z5SUhCdmJHeHBibWRjY2x4dUlDQWdJR2xtSUNocGMwTnNhV1Z1ZEU5d1pXNGdQVDA5SUdaaGJITmxLU0I3WEhKY2JpQWdJQ0FnSUdOdmJuUnliMnhzWlhJdWIyNURiR2xsYm5SRGJHOXpaV1FvS1R0Y2NseHVJQ0FnSUNBZ0x5OGdiM1JvWlhKM2FYTmxJSGRsSUhkaGJuUWdkRzhnYjI1c2VTQnlaVzF2ZG1VZ2RHaGxJSEJ2Ykd4cGJtY2dkRzlyWlc1eklHWnZjaUIwYUdVZ1pXNTJhWEp2Ym0xbGJuUWdkSGx3WlNCMGFHRjBJR2hoY3lCamJHOXpaV1JjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmlBZ0lDQWdJQzh2SUdsdUlIUm9aU0JqWVhObElHOW1JR1oxYkd4elkzSmxaVzRnWlc1MmFYSnZibTFsYm5RZ1lTQjFjMlZ5SUcxcFoyaDBJR2hoZG1VZ2JYVnNkR2x3YkdVZ2RHRmljeUJ2Y0dWdUlITnZJSGRsSUdSdmJpZDBJSGRoYm5RZ2RHOGdaR2x6WTI5dWJtVmpkQ0JoYkd3Z2IyWmNjbHh1SUNBZ0lDQWdMeThnYVhSeklHTnZjbkpsYzNCdmJtUnBibWNnY0c5c2JHbHVaeUIwYjJ0bGJuTWdkVzVzWlhOeklHRnNiQ0IwWVdKeklHRnlaU0JqYkc5elpXUXVYSEpjYmlBZ0lDQWdJR2xtSUNoY2NseHVJQ0FnSUNBZ0lDQmxiblpwY205dWJXVnVkRlI1Y0dVZ1BUMDlJRVZPVmtsU1QwNU5SVTVVWDFSWlVFVmZSbFZNVEZORFVrVkZUaUFtSmx4eVhHNGdJQ0FnSUNBZ0lFSnZiMnhsWVc0b1QySnFaV04wTG10bGVYTW9iM0JsYmsxbGRHRnRZWE5yVkdGaWMwbEVjeWt1YkdWdVozUm9LVnh5WEc0Z0lDQWdJQ0FwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdZMjl1ZEhKdmJHeGxjaTV2YmtWdWRtbHliMjV0Wlc1MFZIbHdaVU5zYjNObFpDaGxiblpwY205dWJXVnVkRlI1Y0dVcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgwN1hISmNibHh5WEc0Z0lDOHFLbHh5WEc0Z0lDQXFJRUVnY25WdWRHbHRaUzVRYjNKMElHOWlhbVZqZEN3Z1lYTWdjSEp2ZG1sa1pXUWdZbmtnZEdobElHSnliM2R6WlhJNlhISmNiaUFnSUNwY2NseHVJQ0FnS2lCQWMyVmxJR2gwZEhCek9pOHZaR1YyWld4dmNHVnlMbTF2ZW1sc2JHRXViM0puTDJWdUxWVlRMMEZrWkMxdmJuTXZWMlZpUlhoMFpXNXphVzl1Y3k5QlVFa3ZjblZ1ZEdsdFpTOVFiM0owWEhKY2JpQWdJQ29nUUhSNWNHVmtaV1lnVUc5eWRGeHlYRzRnSUNBcUlFQjBlWEJsSUU5aWFtVmpkRnh5WEc0Z0lDQXFMMXh5WEc1Y2NseHVJQ0F2S2lwY2NseHVJQ0FnS2lCRGIyNXVaV04wY3lCaElGQnZjblFnZEc4Z2RHaGxJRTFsZEdGTllYTnJJR052Ym5SeWIyeHNaWElnZG1saElHRWdiWFZzZEdsd2JHVjRaV1FnWkhWd2JHVjRJSE4wY21WaGJTNWNjbHh1SUNBZ0tpQlVhR2x6SUcxbGRHaHZaQ0JwWkdWdWRHbG1hV1Z6SUhSeWRYTjBaV1FnS0UxbGRHRk5ZWE5yS1NCcGJuUmxjbVpoWTJWekxDQmhibVFnWTI5dWJtVmpkSE1nZEdobGJTQmthV1ptWlhKbGJuUnNlU0JtY205dElIVnVkSEoxYzNSbFpDQW9kMlZpSUhCaFoyVnpLUzVjY2x4dUlDQWdLbHh5WEc0Z0lDQXFJRUJ3WVhKaGJTQjdVRzl5ZEgwZ2NtVnRiM1JsVUc5eWRDQXRJRlJvWlNCd2IzSjBJSEJ5YjNacFpHVmtJR0o1SUdFZ2JtVjNJR052Ym5SbGVIUXVYSEpjYmlBZ0lDb3ZYSEpjYmlBZ1kyOXVibVZqZEZKbGJXOTBaU0E5SUdGemVXNWpJQ2h5WlcxdmRHVlFiM0owS1NBOVBpQjdYSEpjYmx4dVhISmNiaUFnSUNCamIyNXpkQ0J3Y205alpYTnpUbUZ0WlNBOUlISmxiVzkwWlZCdmNuUXVibUZ0WlR0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvYldWMFlXMWhjMnRDYkc5amEyVmtVRzl5ZEhNdWFXNWpiSFZrWlhNb2NtVnRiM1JsVUc5eWRDNXVZVzFsS1NrZ2UxeHlYRzRnSUNBZ0lDQnlaWFIxY200N1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiR1YwSUdselRXVjBZVTFoYzJ0SmJuUmxjbTVoYkZCeWIyTmxjM01nUFNCbVlXeHpaVHRjY2x4dUlDQWdJR052Ym5OMElITnZkWEpqWlZCc1lYUm1iM0p0SUQwZ1oyVjBVR3hoZEdadmNtMG9LVHRjY2x4dUlDQWdJR052Ym5OMElITmxibVJsY2xWeWJDQTlJSEpsYlc5MFpWQnZjblF1YzJWdVpHVnlQeTUxY214Y2NseHVJQ0FnSUNBZ1B5QnVaWGNnVlZKTUtISmxiVzkwWlZCdmNuUXVjMlZ1WkdWeUxuVnliQ2xjY2x4dUlDQWdJQ0FnT2lCdWRXeHNPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDaHpiM1Z5WTJWUWJHRjBabTl5YlNBOVBUMGdVRXhCVkVaUFVrMWZSa2xTUlVaUFdDa2dlMXh5WEc0Z0lDQWdJQ0JwYzAxbGRHRk5ZWE5yU1c1MFpYSnVZV3hRY205alpYTnpJRDBnYldWMFlXMWhjMnRKYm5SbGNtNWhiRkJ5YjJObGMzTklZWE5vVzNCeWIyTmxjM05PWVcxbFhUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lHbHpUV1YwWVUxaGMydEpiblJsY201aGJGQnliMk5sYzNNZ1BWeHlYRzRnSUNBZ0lDQWdJSE5sYm1SbGNsVnliRDh1YjNKcFoybHVJRDA5UFNCZ1kyaHliMjFsTFdWNGRHVnVjMmx2Ympvdkx5UjdZbkp2ZDNObGNpNXlkVzUwYVcxbExtbGtmV0E3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLR2x6VFdWMFlVMWhjMnRKYm5SbGNtNWhiRkJ5YjJObGMzTXBJSHRjY2x4dUlDQWdJQ0FnWTI5dWMzUWdjRzl5ZEZOMGNtVmhiU0E5WEhKY2JpQWdJQ0FnSUNBZ2IzWmxjbkpwWkdWelB5NW5aWFJRYjNKMFUzUnlaV0Z0UHk0b2NtVnRiM1JsVUc5eWRDa2dmSHdnYm1WM0lGQnZjblJUZEhKbFlXMG9jbVZ0YjNSbFVHOXlkQ2s3WEhKY2JpQWdJQ0FnSUM4dklHTnZiVzExYm1sallYUnBiMjRnZDJsMGFDQndiM0IxY0Z4eVhHNGdJQ0FnSUNCamIyNTBjbTlzYkdWeUxtbHpRMnhwWlc1MFQzQmxiaUE5SUhSeWRXVTdYSEpjYmlBZ0lDQWdJR052Ym5SeWIyeHNaWEl1YzJWMGRYQlVjblZ6ZEdWa1EyOXRiWFZ1YVdOaGRHbHZiaWh3YjNKMFUzUnlaV0Z0TENCeVpXMXZkR1ZRYjNKMExuTmxibVJsY2lrN1hISmNiaUFnSUNBZ0lHbG1JQ2hwYzAxaGJtbG1aWE4wVmpNcElIdGNjbHh1SUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JuWlhRZ1lTQlhUMUpMUlZKZlMwVkZVRjlCVEVsV1JTQnRaWE56WVdkbExDQjNaU0J5WlhOd2IyNWtJSGRwZEdnZ1lXNGdRVU5MWEhKY2JpQWdJQ0FnSUNBZ2NtVnRiM1JsVUc5eWRDNXZiazFsYzNOaFoyVXVZV1JrVEdsemRHVnVaWElvS0cxbGMzTmhaMlVwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaHRaWE56WVdkbExtNWhiV1VnUFQwOUlGZFBVa3RGVWw5TFJVVlFYMEZNU1ZaRlgwMUZVMU5CUjBVcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWRzhnZEdWemRDQjFiaTFqYjIxdFpXNTBJSFJvYVhNZ2JHbHVaU0JoYm1RZ2QyRnBkQ0JtYjNJZ01TQnRhVzUxZEdVdUlFRnVJR1Z5Y205eUlITm9iM1ZzWkNCaVpTQnphRzkzYmlCdmJpQk5aWFJoVFdGemF5QlZTUzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ0YjNSbFVHOXlkQzV3YjNOMFRXVnpjMkZuWlNoN0lHNWhiV1U2SUVGRFMxOUxSVVZRWDBGTVNWWkZYMDFGVTFOQlIwVWdmU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBjbTlzYkdWeUxtRndjRk4wWVhSbFEyOXVkSEp2Ykd4bGNpNXpaWFJUWlhKMmFXTmxWMjl5YTJWeVRHRnpkRUZqZEdsMlpWUnBiV1VvWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUkdGMFpTNXViM2NvS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ1kyOXVjM1FnWTI5dWJtVmpkR2x2Ymtsa0lEMGdaMlZ1WlhKaGRHVkRiMjV1WldOMGFXOXVTV1FvY21WdGIzUmxVRzl5ZEN3Z2NISnZZMlZ6YzA1aGJXVXBPMXh5WEc0Z0lDQWdJQ0JwWmlBb2NISnZZMlZ6YzA1aGJXVWdQVDA5SUVWT1ZrbFNUMDVOUlU1VVgxUlpVRVZmVUU5UVZWQXBJSHRjY2x4dUlDQWdJQ0FnSUNCd2IzQjFjRWx6VDNCbGJpQTlJSFJ5ZFdVN1hISmNiaUFnSUNBZ0lDQWdaVzVrVDJaVGRISmxZVzBvY0c5eWRGTjBjbVZoYlN3Z0tDa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdiM0JsYmsxbGRHRnRZWE5yUTI5dWJtVmpkR2x2Ym5NdWMyVjBLR052Ym01bFkzUnBiMjVKWkN3Z01DazdYSEpjYmlBZ0lDQWdJQ0FnSUNCd2IzQjFjRWx6VDNCbGJpQTlJR1poYkhObE8xeHlYRzRnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhWE5EYkdsbGJuUlBjR1Z1SUQwZ2FYTkRiR2xsYm5SUGNHVnVVM1JoZEhWektDazdYSEpjYmlBZ0lDQWdJQ0FnSUNCamIyNTBjbTlzYkdWeUxtbHpRMnhwWlc1MFQzQmxiaUE5SUdselEyeHBaVzUwVDNCbGJqdGNjbHh1SUNBZ0lDQWdJQ0FnSUc5dVEyeHZjMlZGYm5acGNtOXViV1Z1ZEVsdWMzUmhibU5sY3locGMwTnNhV1Z1ZEU5d1pXNHNJRVZPVmtsU1QwNU5SVTVVWDFSWlVFVmZVRTlRVlZBcE8xeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0JwWmlBb2NISnZZMlZ6YzA1aGJXVWdQVDA5SUVWT1ZrbFNUMDVOUlU1VVgxUlpVRVZmVGs5VVNVWkpRMEZVU1U5T0tTQjdYSEpjYmlBZ0lDQWdJQ0FnYm05MGFXWnBZMkYwYVc5dVNYTlBjR1Z1SUQwZ2RISjFaVHRjY2x4dUlDQWdJQ0FnSUNCbGJtUlBabE4wY21WaGJTaHdiM0owVTNSeVpXRnRMQ0FvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNCdmNHVnVUV1YwWVcxaGMydERiMjV1WldOMGFXOXVjeTV6WlhRb1kyOXVibVZqZEdsdmJrbGtMQ0F3S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJRzV2ZEdsbWFXTmhkR2x2YmtselQzQmxiaUE5SUdaaGJITmxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVhORGJHbGxiblJQY0dWdUlEMGdhWE5EYkdsbGJuUlBjR1Z1VTNSaGRIVnpLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQmpiMjUwY205c2JHVnlMbWx6UTJ4cFpXNTBUM0JsYmlBOUlHbHpRMnhwWlc1MFQzQmxianRjY2x4dUlDQWdJQ0FnSUNBZ0lHOXVRMnh2YzJWRmJuWnBjbTl1YldWdWRFbHVjM1JoYm1ObGN5aGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FYTkRiR2xsYm5SUGNHVnVMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQkZUbFpKVWs5T1RVVk9WRjlVV1ZCRlgwNVBWRWxHU1VOQlZFbFBUaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUdsbUlDaHdjbTlqWlhOelRtRnRaU0E5UFQwZ1JVNVdTVkpQVGsxRlRsUmZWRmxRUlY5R1ZVeE1VME5TUlVWT0tTQjdYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkR0ZpU1dRZ1BTQnlaVzF2ZEdWUWIzSjBMbk5sYm1SbGNpNTBZV0l1YVdRN1hISmNiaUFnSUNBZ0lDQWdiM0JsYmsxbGRHRnRZWE5yVkdGaWMwbEVjMXQwWVdKSlpGMGdQU0IwY25WbE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbGJtUlBabE4wY21WaGJTaHdiM0owVTNSeVpXRnRMQ0FvS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNCdmNHVnVUV1YwWVcxaGMydERiMjV1WldOMGFXOXVjeTV6WlhRb1kyOXVibVZqZEdsdmJrbGtMQ0F3S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQnZjR1Z1VFdWMFlXMWhjMnRVWVdKelNVUnpXM1JoWWtsa1hUdGNjbHh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2x6UTJ4cFpXNTBUM0JsYmlBOUlHbHpRMnhwWlc1MFQzQmxibE4wWVhSMWN5Z3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkSEp2Ykd4bGNpNXBjME5zYVdWdWRFOXdaVzRnUFNCcGMwTnNhV1Z1ZEU5d1pXNDdYSEpjYmlBZ0lDQWdJQ0FnSUNCdmJrTnNiM05sUlc1MmFYSnZibTFsYm5SSmJuTjBZVzVqWlhNb1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdselEyeHBaVzUwVDNCbGJpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1JVNVdTVkpQVGsxRlRsUmZWRmxRUlY5R1ZVeE1VME5TUlVWT0xGeHlYRzRnSUNBZ0lDQWdJQ0FnS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoY2NseHVJQ0FnSUNBZ2MyVnVaR1Z5VlhKc0lDWW1YSEpjYmlBZ0lDQWdJSE5sYm1SbGNsVnliQzV2Y21sbmFXNGdQVDA5SUhCb2FYTm9hVzVuVUdGblpWVnliQzV2Y21sbmFXNGdKaVpjY2x4dUlDQWdJQ0FnYzJWdVpHVnlWWEpzTG5CaGRHaHVZVzFsSUQwOVBTQndhR2x6YUdsdVoxQmhaMlZWY213dWNHRjBhRzVoYldWY2NseHVJQ0FnSUNrZ2UxeHlYRzRnSUNBZ0lDQmpiMjV6ZENCd2IzSjBVM1J5WldGdElEMWNjbHh1SUNBZ0lDQWdJQ0J2ZG1WeWNtbGtaWE0vTG1kbGRGQnZjblJUZEhKbFlXMC9MaWh5WlcxdmRHVlFiM0owS1NCOGZDQnVaWGNnVUc5eWRGTjBjbVZoYlNoeVpXMXZkR1ZRYjNKMEtUdGNjbHh1SUNBZ0lDQWdZMjl1ZEhKdmJHeGxjaTV6WlhSMWNGQm9hWE5vYVc1blEyOXRiWFZ1YVdOaGRHbHZiaWg3WEhKY2JpQWdJQ0FnSUNBZ1kyOXVibVZqZEdsdmJsTjBjbVZoYlRvZ2NHOXlkRk4wY21WaGJTeGNjbHh1SUNBZ0lDQWdmU2s3WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0JwWmlBb2NtVnRiM1JsVUc5eWRDNXpaVzVrWlhJZ0ppWWdjbVZ0YjNSbFVHOXlkQzV6Wlc1a1pYSXVkR0ZpSUNZbUlISmxiVzkwWlZCdmNuUXVjMlZ1WkdWeUxuVnliQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSaFlrbGtJRDBnY21WdGIzUmxVRzl5ZEM1elpXNWtaWEl1ZEdGaUxtbGtPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFZ5YkNBOUlHNWxkeUJWVWt3b2NtVnRiM1JsVUc5eWRDNXpaVzVrWlhJdWRYSnNLVHRjY2x4dUlDQWdJQ0FnSUNCamIyNXpkQ0I3SUc5eWFXZHBiaUI5SUQwZ2RYSnNPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaVzF2ZEdWUWIzSjBMbTl1VFdWemMyRm5aUzVoWkdSTWFYTjBaVzVsY2lnb2JYTm5LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2JYTm5MbVJoZEdFZ0ppWWdiWE5uTG1SaGRHRXViV1YwYUc5a0lEMDlQU0FuWlhSb1gzSmxjWFZsYzNSQlkyTnZkVzUwY3ljcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEVGalkyOTFiblJVWVdKSlpITmJiM0pwWjJsdVhTQTlJSFJoWWtsa08xeHlYRzRnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUdOdmJtNWxZM1JGZUhSbGNtNWhiQ2h5WlcxdmRHVlFiM0owS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0I5TzF4eVhHNWNjbHh1SUNBdkx5QmpiMjF0ZFc1cFkyRjBhVzl1SUhkcGRHZ2djR0ZuWlNCdmNpQnZkR2hsY2lCbGVIUmxibk5wYjI1Y2NseHVJQ0JqYjI1dVpXTjBSWGgwWlhKdVlXd2dQU0FvY21WdGIzUmxVRzl5ZENrZ1BUNGdlMXh5WEc1Y2JseHlYRzRnSUNBZ1kyOXVjM1FnY0c5eWRGTjBjbVZoYlNBOVhISmNiaUFnSUNBZ0lHOTJaWEp5YVdSbGN6OHVaMlYwVUc5eWRGTjBjbVZoYlQ4dUtISmxiVzkwWlZCdmNuUXBJSHg4SUc1bGR5QlFiM0owVTNSeVpXRnRLSEpsYlc5MFpWQnZjblFwTzF4eVhHNGdJQ0FnWTI5dWRISnZiR3hsY2k1elpYUjFjRlZ1ZEhKMWMzUmxaRU52YlcxMWJtbGpZWFJwYjI0b2UxeHlYRzRnSUNBZ0lDQmpiMjV1WldOMGFXOXVVM1J5WldGdE9pQndiM0owVTNSeVpXRnRMRnh5WEc0Z0lDQWdJQ0J6Wlc1a1pYSTZJSEpsYlc5MFpWQnZjblF1YzJWdVpHVnlMRnh5WEc0Z0lDQWdmU2s3WEhKY2JpQWdmVHRjY2x4dVhISmNiaUFnYVdZZ0tHOTJaWEp5YVdSbGN6OHVjbVZuYVhOMFpYSkRiMjV1WldOMFRHbHpkR1Z1WlhKektTQjdYSEpjYmlBZ0lDQnZkbVZ5Y21sa1pYTXVjbVZuYVhOMFpYSkRiMjV1WldOMFRHbHpkR1Z1WlhKektHTnZibTVsWTNSU1pXMXZkR1VzSUdOdmJtNWxZM1JGZUhSbGNtNWhiQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F2TDF4eVhHNGdJQzh2SUZWelpYSWdTVzUwWlhKbVlXTmxJSE5sZEhWd1hISmNiaUFnTHk5Y2NseHVYSEpjYmlBZ1kyOXVkSEp2Ykd4bGNpNTBlRU52Ym5SeWIyeHNaWEl1YVc1cGRFRndjSEp2ZG1Gc2N5Z3BMblJvWlc0b0tDa2dQVDRnZTF4eVhHNGdJQ0FnZFhCa1lYUmxRbUZrWjJVb0tUdGNjbHh1SUNCOUtUdGNjbHh1SUNCamIyNTBjbTlzYkdWeUxuUjRRMjl1ZEhKdmJHeGxjaTV2YmloY2NseHVJQ0FnSUUxRlZFRk5RVk5MWDBOUFRsUlNUMHhNUlZKZlJWWkZUbFJUTGxWUVJFRlVSVjlDUVVSSFJTeGNjbHh1SUNBZ0lIVndaR0YwWlVKaFpHZGxMRnh5WEc0Z0lDazdYSEpjYmlBZ1kyOXVkSEp2Ykd4bGNpNWtaV055ZVhCMFRXVnpjMkZuWlVOdmJuUnliMnhzWlhJdWFIVmlMbTl1S0Z4eVhHNGdJQ0FnVFVWVVFVMUJVMHRmUTA5T1ZGSlBURXhGVWw5RlZrVk9WRk11VlZCRVFWUkZYMEpCUkVkRkxGeHlYRzRnSUNBZ2RYQmtZWFJsUW1Ga1oyVXNYSEpjYmlBZ0tUdGNjbHh1SUNCamIyNTBjbTlzYkdWeUxtVnVZM0o1Y0hScGIyNVFkV0pzYVdOTFpYbERiMjUwY205c2JHVnlMbWgxWWk1dmJpaGNjbHh1SUNBZ0lFMUZWRUZOUVZOTFgwTlBUbFJTVDB4TVJWSmZSVlpGVGxSVExsVlFSRUZVUlY5Q1FVUkhSU3hjY2x4dUlDQWdJSFZ3WkdGMFpVSmhaR2RsTEZ4eVhHNGdJQ2s3WEhKY2JpQWdZMjl1ZEhKdmJHeGxjaTV6YVdkdVlYUjFjbVZEYjI1MGNtOXNiR1Z5TG1oMVlpNXZiaWhjY2x4dUlDQWdJRTFGVkVGTlFWTkxYME5QVGxSU1QweE1SVkpmUlZaRlRsUlRMbFZRUkVGVVJWOUNRVVJIUlN4Y2NseHVJQ0FnSUhWd1pHRjBaVUpoWkdkbExGeHlYRzRnSUNrN1hISmNiaUFnWTI5dWRISnZiR3hsY2k1aGNIQlRkR0YwWlVOdmJuUnliMnhzWlhJdWIyNG9YSEpjYmlBZ0lDQk5SVlJCVFVGVFMxOURUMDVVVWs5TVRFVlNYMFZXUlU1VVV5NVZVRVJCVkVWZlFrRkVSMFVzWEhKY2JpQWdJQ0IxY0dSaGRHVkNZV1JuWlN4Y2NseHVJQ0FwTzF4eVhHNWNjbHh1SUNCamIyNTBjbTlzYkdWeUxtTnZiblJ5YjJ4c1pYSk5aWE56Wlc1blpYSXVjM1ZpYzJOeWFXSmxLRnh5WEc0Z0lDQWdUVVZVUVUxQlUwdGZRMDlPVkZKUFRFeEZVbDlGVmtWT1ZGTXVRVkJRVWs5V1FVeGZVMVJCVkVWZlEwaEJUa2RGTEZ4eVhHNGdJQ0FnZFhCa1lYUmxRbUZrWjJVc1hISmNiaUFnS1R0Y2NseHVYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dWWEJrWVhSbGN5QjBhR1VnVjJWaUlFVjRkR1Z1YzJsdmJpZHpJRndpWW1Ga1oyVmNJaUJ1ZFcxaVpYSXNJRzl1SUhSb1pTQnNhWFIwYkdVZ1ptOTRJR2x1SUhSb1pTQjBiMjlzWW1GeUxseHlYRzRnSUNBcUlGUm9aU0J1ZFcxaVpYSWdjbVZtYkdWamRITWdkR2hsSUdOMWNuSmxiblFnYm5WdFltVnlJRzltSUhCbGJtUnBibWNnZEhKaGJuTmhZM1JwYjI1eklHOXlJRzFsYzNOaFoyVWdjMmxuYm1GMGRYSmxjeUJ1WldWa2FXNW5JSFZ6WlhJZ1lYQndjbTkyWVd3dVhISmNiaUFnSUNvdlhISmNiaUFnWm5WdVkzUnBiMjRnZFhCa1lYUmxRbUZrWjJVb0tTQjdYSEpjYmlBZ0lDQnNaWFFnYkdGaVpXd2dQU0FuSnp0Y2NseHVJQ0FnSUdOdmJuTjBJR052ZFc1MElEMGdaMlYwVlc1aGNIQnliM1psWkZSeVlXNXpZV04wYVc5dVEyOTFiblFvS1R0Y2NseHVJQ0FnSUdsbUlDaGpiM1Z1ZENrZ2UxeHlYRzRnSUNBZ0lDQnNZV0psYkNBOUlGTjBjbWx1WnloamIzVnVkQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0F2THlCaWNtOTNjMlZ5UVdOMGFXOXVJR2hoY3lCaVpXVnVJSEpsY0d4aFkyVmtJR0o1SUdGamRHbHZiaUJwYmlCTlZqTmNjbHh1SUNBZ0lHbG1JQ2hwYzAxaGJtbG1aWE4wVmpNcElIdGNjbHh1SUNBZ0lDQWdZbkp2ZDNObGNpNWhZM1JwYjI0dWMyVjBRbUZrWjJWVVpYaDBLSHNnZEdWNGREb2diR0ZpWld3Z2ZTazdYSEpjYmlBZ0lDQWdJR0p5YjNkelpYSXVZV04wYVc5dUxuTmxkRUpoWkdkbFFtRmphMmR5YjNWdVpFTnZiRzl5S0hzZ1kyOXNiM0k2SUNjak1ETTNSRVEySnlCOUtUdGNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lHSnliM2R6WlhJdVluSnZkM05sY2tGamRHbHZiaTV6WlhSQ1lXUm5aVlJsZUhRb2V5QjBaWGgwT2lCc1lXSmxiQ0I5S1R0Y2NseHVJQ0FnSUNBZ1luSnZkM05sY2k1aWNtOTNjMlZ5UVdOMGFXOXVMbk5sZEVKaFpHZGxRbUZqYTJkeWIzVnVaRU52Ykc5eUtIc2dZMjlzYjNJNklDY2pNRE0zUkVRMkp5QjlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR1oxYm1OMGFXOXVJR2RsZEZWdVlYQndjbTkyWldSVWNtRnVjMkZqZEdsdmJrTnZkVzUwS0NrZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnY0dWdVpHbHVaMEZ3Y0hKdmRtRnNRMjkxYm5RZ1BWeHlYRzRnSUNBZ0lDQmpiMjUwY205c2JHVnlMbUZ3Y0hKdmRtRnNRMjl1ZEhKdmJHeGxjaTVuWlhSVWIzUmhiRUZ3Y0hKdmRtRnNRMjkxYm5Rb0tUdGNjbHh1SUNBZ0lHTnZibk4wSUhkaGFYUnBibWRHYjNKVmJteHZZMnREYjNWdWRDQTlYSEpjYmlBZ0lDQWdJR052Ym5SeWIyeHNaWEl1WVhCd1UzUmhkR1ZEYjI1MGNtOXNiR1Z5TG5kaGFYUnBibWRHYjNKVmJteHZZMnN1YkdWdVozUm9PMXh5WEc0Z0lDQWdjbVYwZFhKdUlIQmxibVJwYm1kQmNIQnliM1poYkVOdmRXNTBJQ3NnZDJGcGRHbHVaMFp2Y2xWdWJHOWphME52ZFc1ME8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2JtOTBhV1pwWTJGMGFXOXVUV0Z1WVdkbGNpNXZiaWhjY2x4dUlDQWdJRTVQVkVsR1NVTkJWRWxQVGw5TlFVNUJSMFZTWDBWV1JVNVVVeTVRVDFCVlVGOURURTlUUlVRc1hISmNiaUFnSUNBb2V5QmhkWFJ2YldGMGFXTmhiR3g1UTJ4dmMyVmtJSDBwSUQwK0lIdGNjbHh1SUNBZ0lDQWdhV1lnS0NGaGRYUnZiV0YwYVdOaGJHeDVRMnh2YzJWa0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WcVpXTjBWVzVoY0hCeWIzWmxaRTV2ZEdsbWFXTmhkR2x2Ym5Nb0tUdGNjbHh1SUNBZ0lDQWdmU0JsYkhObElHbG1JQ2huWlhSVmJtRndjSEp2ZG1Wa1ZISmhibk5oWTNScGIyNURiM1Z1ZENncElENGdNQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUnlhV2RuWlhKVmFTZ3BPMXh5WEc0Z0lDQWdJQ0I5WEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ2s3WEhKY2JseHlYRzRnSUdaMWJtTjBhVzl1SUhKbGFtVmpkRlZ1WVhCd2NtOTJaV1JPYjNScFptbGpZWFJwYjI1ektDa2dlMXh5WEc0Z0lDQWdUMkpxWldOMExtdGxlWE1vWEhKY2JpQWdJQ0FnSUdOdmJuUnliMnhzWlhJdWRIaERiMjUwY205c2JHVnlMblI0VTNSaGRHVk5ZVzVoWjJWeUxtZGxkRlZ1WVhCd2NtOTJaV1JVZUV4cGMzUW9LU3hjY2x4dUlDQWdJQ2t1Wm05eVJXRmphQ2dvZEhoSlpDa2dQVDVjY2x4dUlDQWdJQ0FnWTI5dWRISnZiR3hsY2k1MGVFTnZiblJ5YjJ4c1pYSXVkSGhUZEdGMFpVMWhibUZuWlhJdWMyVjBWSGhUZEdGMGRYTlNaV3BsWTNSbFpDaDBlRWxrS1N4Y2NseHVJQ0FnSUNrN1hISmNiaUFnSUNCamIyNTBjbTlzYkdWeUxuTnBaMjVoZEhWeVpVTnZiblJ5YjJ4c1pYSXVjbVZxWldOMFZXNWhjSEJ5YjNabFpDaGNjbHh1SUNBZ0lDQWdVa1ZLUlVOVVgwNVBWRWxHU1VOQlZFbFBUbDlEVEU5VFJWOVRTVWNzWEhKY2JpQWdJQ0FwTzF4eVhHNGdJQ0FnWTI5dWRISnZiR3hsY2k1a1pXTnllWEIwVFdWemMyRm5aVU52Ym5SeWIyeHNaWEl1Y21WcVpXTjBWVzVoY0hCeWIzWmxaQ2hjY2x4dUlDQWdJQ0FnVWtWS1JVTlVYMDVQVkVsR1NVTkJWRWxQVGw5RFRFOVRSU3hjY2x4dUlDQWdJQ2s3WEhKY2JpQWdJQ0JqYjI1MGNtOXNiR1Z5TG1WdVkzSjVjSFJwYjI1UWRXSnNhV05MWlhsRGIyNTBjbTlzYkdWeUxuSmxhbVZqZEZWdVlYQndjbTkyWldRb1hISmNiaUFnSUNBZ0lGSkZTa1ZEVkY5T1QxUkpSa2xEUVZSSlQwNWZRMHhQVTBVc1hISmNiaUFnSUNBcE8xeHlYRzVjY2x4dUlDQWdJQzh2SUVacGJtRnNiSGtzSUhKbGMyOXNkbVVnYzI1aGNDQmthV0ZzYjJjZ1lYQndjbTkyWVd4eklHOXVJRVpzWVhOcklHRnVaQ0J5WldwbFkzUWdZV3hzSUhSb1pTQnZkR2hsY25NZ2JXRnVZV2RsWkNCaWVTQjBhR1VnUVhCd2NtOTJZV3hEYjI1MGNtOXNiR1Z5TGx4eVhHNGdJQ0FnVDJKcVpXTjBMblpoYkhWbGN5aGpiMjUwY205c2JHVnlMbUZ3Y0hKdmRtRnNRMjl1ZEhKdmJHeGxjaTV6ZEdGMFpTNXdaVzVrYVc1blFYQndjbTkyWVd4ektTNW1iM0pGWVdOb0tGeHlYRzRnSUNBZ0lDQW9leUJwWkN3Z2RIbHdaU0I5S1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnYzNkcGRHTm9JQ2gwZVhCbEtTQjdYSEpjYmx4dUlDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuUnliMnhzWlhJdVlYQndjbTkyWVd4RGIyNTBjbTlzYkdWeUxuSmxhbVZqZENoY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFpDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmxkR2hGY25KdmNuTXVjSEp2ZG1sa1pYSXVkWE5sY2xKbGFtVmpkR1ZrVW1WeGRXVnpkQ2dwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUgwc1hISmNiaUFnSUNBcE8xeHlYRzVjY2x4dUlDQWdJSFZ3WkdGMFpVSmhaR2RsS0NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1WEc1OVhISmNibHh5WEc0dkwxeHlYRzR2THlCRmRHTXVMaTVjY2x4dUx5OWNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQlBjR1Z1Y3lCMGFHVWdZbkp2ZDNObGNpQndiM0IxY0NCbWIzSWdkWE5sY2lCamIyNW1hWEp0WVhScGIyNWNjbHh1SUNvdlhISmNibUZ6ZVc1aklHWjFibU4wYVc5dUlIUnlhV2RuWlhKVmFTZ3BJSHRjY2x4dUlDQmpiMjV6ZENCMFlXSnpJRDBnWVhkaGFYUWdjR3hoZEdadmNtMHVaMlYwUVdOMGFYWmxWR0ZpY3lncE8xeHlYRzRnSUdOdmJuTjBJR04xY25KbGJuUnNlVUZqZEdsMlpVMWxkR0Z0WVhOclZHRmlJRDBnUW05dmJHVmhiaWhjY2x4dUlDQWdJSFJoWW5NdVptbHVaQ2dvZEdGaUtTQTlQaUJ2Y0dWdVRXVjBZVzFoYzJ0VVlXSnpTVVJ6VzNSaFlpNXBaRjBwTEZ4eVhHNGdJQ2s3WEhKY2JpQWdMeThnVm1sMllXeGthU0JwY3lCdWIzUWdZMnh2YzJsdVp5QndiM0owSUdOdmJtNWxZM1JwYjI0Z2IyNGdjRzl3ZFhBZ1kyeHZjMlVzSUhOdklIQnZjSFZ3U1hOUGNHVnVJR1J2WlhNZ2JtOTBJSGR2Y21zZ1kyOXljbVZqZEd4NVhISmNiaUFnTHk4Z1ZHOGdZbVVnY21WMmFXVjNaV1FnYVc0Z2RHaGxJR1oxZEhWeVpTQnBaaUIwYUdseklHSmxhR0YyYVc5MWNpQnBjeUJtYVhobFpDQXRJR0ZzYzI4Z2RHaGxJSGRoZVNCM1pTQmtaWFJsY20xcGJtVWdhWE5XYVhaaGJHUnBJSFpoY21saFlteGxJRzFwWjJoMElHTm9ZVzVuWlNCaGRDQnpiMjFsSUhCdmFXNTBYSEpjYmlBZ1kyOXVjM1FnYVhOV2FYWmhiR1JwSUQxY2NseHVJQ0FnSUhSaFluTXViR1Z1WjNSb0lENGdNQ0FtSmx4eVhHNGdJQ0FnZEdGaWMxc3dYUzVsZUhSRVlYUmhJQ1ltWEhKY2JpQWdJQ0IwWVdKeld6QmRMbVY0ZEVSaGRHRXVhVzVrWlhoUFppZ25kbWwyWVd4a2FWOTBZV0luS1NBK0lDMHhPMXh5WEc0Z0lHbG1JQ2hjY2x4dUlDQWdJQ0YxYVVselZISnBaMmRsY21sdVp5QW1KbHh5WEc0Z0lDQWdLR2x6Vm1sMllXeGthU0I4ZkNBaGNHOXdkWEJKYzA5d1pXNHBJQ1ltWEhKY2JpQWdJQ0FoWTNWeWNtVnVkR3g1UVdOMGFYWmxUV1YwWVcxaGMydFVZV0pjY2x4dUlDQXBJSHRjY2x4dUlDQWdJSFZwU1hOVWNtbG5aMlZ5YVc1bklEMGdkSEoxWlR0Y2NseHVJQ0FnSUhSeWVTQjdYSEpjYmlBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SUWIzQjFjRWxrSUQwZ1kyOXVkSEp2Ykd4bGNpNWhjSEJUZEdGMFpVTnZiblJ5YjJ4c1pYSXVaMlYwUTNWeWNtVnVkRkJ2Y0hWd1NXUW9LVHRjY2x4dUlDQWdJQ0FnWVhkaGFYUWdibTkwYVdacFkyRjBhVzl1VFdGdVlXZGxjaTV6YUc5M1VHOXdkWEFvWEhKY2JpQWdJQ0FnSUNBZ0tHNWxkMUJ2Y0hWd1NXUXBJRDArWEhKY2JpQWdJQ0FnSUNBZ0lDQmpiMjUwY205c2JHVnlMbUZ3Y0ZOMFlYUmxRMjl1ZEhKdmJHeGxjaTV6WlhSRGRYSnlaVzUwVUc5d2RYQkpaQ2h1WlhkUWIzQjFjRWxrS1N4Y2NseHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHOXdkWEJKWkN4Y2NseHVJQ0FnSUNBZ0tUdGNjbHh1SUNBZ0lIMGdabWx1WVd4c2VTQjdYSEpjYmlBZ0lDQWdJSFZwU1hOVWNtbG5aMlZ5YVc1bklEMGdabUZzYzJVN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNTlYSEpjYmx4eVhHNHZMeUJKZENCaFpHUnpJSFJvWlNCY0lrRndjQ0JKYm5OMFlXeHNaV1JjSWlCbGRtVnVkQ0JwYm5SdklHRWdjWFZsZFdVZ2IyWWdaWFpsYm5SekxDQjNhR2xqYUNCM2FXeHNJR0psSUhSeVlXTnJaV1FnYjI1c2VTQmhablJsY2lCaElIVnpaWElnYjNCMGN5QnBiblJ2SUcxbGRISnBZM011WEhKY2JtTnZibk4wSUdGa1pFRndjRWx1YzNSaGJHeGxaRVYyWlc1MElEMGdLQ2tnUFQ0Z2UxeHlYRzRnSUdsbUlDaGpiMjUwY205c2JHVnlLU0I3WEhKY2JpQWdJQ0JqYjI1MGNtOXNiR1Z5TG0xbGRHRk5aWFJ5YVdOelEyOXVkSEp2Ykd4bGNpNTFjR1JoZEdWVWNtRnBkSE1vZTF4eVhHNGdJQ0FnSUNCYlRXVjBZVTFsZEhKcFkzTlZjMlZ5VkhKaGFYUXVTVzV6ZEdGc2JFUmhkR1ZGZUhSZE9pQnVaWGNnUkdGMFpTZ3BYSEpjYmlBZ0lDQWdJQ0FnTG5SdlNWTlBVM1J5YVc1bktDbGNjbHh1SUNBZ0lDQWdJQ0F1YzNCc2FYUW9KMVFuS1Zzd1hTd2dMeThnZVhsNWVTMXRiUzFrWkZ4eVhHNGdJQ0FnZlNrN1hISmNiaUFnSUNCamIyNTBjbTlzYkdWeUxtMWxkR0ZOWlhSeWFXTnpRMjl1ZEhKdmJHeGxjaTVoWkdSRmRtVnVkRUpsWm05eVpVMWxkSEpwWTNOUGNIUkpiaWg3WEhKY2JpQWdJQ0FnSUdOaGRHVm5iM0o1T2lCTlpYUmhUV1YwY21samMwVjJaVzUwUTJGMFpXZHZjbmt1UVhCd0xGeHlYRzRnSUNBZ0lDQmxkbVZ1ZERvZ1RXVjBZVTFsZEhKcFkzTkZkbVZ1ZEU1aGJXVXVRWEJ3U1c1emRHRnNiR1ZrTEZ4eVhHNGdJQ0FnSUNCd2NtOXdaWEowYVdWek9pQjdmU3hjY2x4dUlDQWdJSDBwTzF4eVhHNGdJQ0FnY21WMGRYSnVPMXh5WEc0Z0lIMWNjbHh1SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2NseHVJQ0FnSUM4dklFbG1JSFJvWlNCamIyNTBjbTlzYkdWeUlHbHpJRzV2ZENCelpYUWdlV1YwTENCM1pTQjNZV2wwSUdGdVpDQjBjbmtnZEc4Z1lXUmtJSFJvWlNCY0lrRndjQ0JKYm5OMFlXeHNaV1JjSWlCbGRtVnVkQ0JoWjJGcGJpNWNjbHh1SUNBZ0lHRmtaRUZ3Y0VsdWMzUmhiR3hsWkVWMlpXNTBLQ2s3WEhKY2JpQWdmU3dnTVRBd01DazdYSEpjYm4wN1hISmNibHh5WEc0dkx5QlBiaUJtYVhKemRDQnBibk4wWVd4c0xDQnZjR1Z1SUdFZ2JtVjNJSFJoWWlCM2FYUm9JRTFsZEdGTllYTnJYSEpjYm1KeWIzZHpaWEl1Y25WdWRHbHRaUzV2YmtsdWMzUmhiR3hsWkM1aFpHUk1hWE4wWlc1bGNpZ29leUJ5WldGemIyNGdmU2tnUFQ0Z2UxeHlYRzRnSUdsbUlDaGNjbHh1SUNBZ0lISmxZWE52YmlBOVBUMGdKMmx1YzNSaGJHd25JQ1ltWEhKY2JpQWdJQ0FoS0hCeWIyTmxjM011Wlc1MkxrMUZWRUZOUVZOTFgwUkZRbFZISUh4OElIQnliMk5sYzNNdVpXNTJMa2xPWDFSRlUxUXBYSEpjYmlBZ0tTQjdYSEpjYmlBZ0lDQmhaR1JCY0hCSmJuTjBZV3hzWldSRmRtVnVkQ2dwTzF4eVhHNGdJQ0FnY0d4aGRHWnZjbTB1YjNCbGJrVjRkR1Z1YzJsdmJrbHVRbkp2ZDNObGNpZ3BPMXh5WEc0Z0lIMWNjbHh1ZlNrN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCelpYUjFjRk5sYm5SeWVVZGxkRk4wWVhSbFIyeHZZbUZzS0hOMGIzSmxLU0I3WEhKY2JpQWdaMnh2WW1Gc0xuTjBZWFJsU0c5dmEzTXVaMlYwVTJWdWRISjVVM1JoZEdVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0JqYjI1emRDQm1kV3hzVTNSaGRHVWdQU0J6ZEc5eVpTNW5aWFJUZEdGMFpTZ3BPMXh5WEc0Z0lDQWdZMjl1YzNRZ1pHVmlkV2RUZEdGMFpTQTlJRzFoYzJ0UFltcGxZM1FvZXlCdFpYUmhiV0Z6YXpvZ1puVnNiRk4wWVhSbElIMHNJRk5GVGxSU1dWOVRWRUZVUlNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZTF4eVhHNGdJQ0FnSUNCaWNtOTNjMlZ5T2lCM2FXNWtiM2N1Ym1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZEN4Y2NseHVJQ0FnSUNBZ2MzUnZjbVU2SUdSbFluVm5VM1JoZEdVc1hISmNiaUFnSUNBZ0lIWmxjbk5wYjI0NklIQnNZWFJtYjNKdExtZGxkRlpsY25OcGIyNG9LU3hjY2x4dUlDQWdJSDA3WEhKY2JpQWdmVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FXNXBkRUpoWTJ0bmNtOTFibVFvS1NCN1hISmNiaUFnYVc1cGRHbGhiR2w2WlNncExtTmhkR05vS0d4dlp5NWxjbkp2Y2lrN1hISmNibjFjY2x4dVhISmNibWxtSUNnaGNISnZZMlZ6Y3k1bGJuWXVVMHRKVUY5Q1FVTkxSMUpQVlU1RVgwbE9TVlJKUVV4SldrRlVTVTlPS1NCN1hISmNiaUFnYVc1cGRFSmhZMnRuY205MWJtUW9LVHRjY2x4dWZWeHlYRzRpWFgwPSJ9
