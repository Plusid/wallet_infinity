import { random, sample } from 'lodash'

/**
 * Generate a valid peer based on specs
 * @param {Object} params Force some spec on the peer.
 */
export function generateValidPeer (params = {}) {
  const ip = `${random(1, 255)}.${random(1, 255)}.${random(1, 255)}.${random(1, 255)}`
  const isHttps = !!random()
  const host = `${isHttps ? 'https://' : 'http://'}${ip}`
  const port = 4003
  const version = random() ? '2.0.0' : '1.3.1'
  const height = 6030358
  const os = sample(['linux', 'windows', 'mac_os'])
  const status = 'OK'
  const latency = random(1, 1000)
  const lastUpdated = Date.now()

  const peer = {
    ip,
    host,
    port,
    isHttps,
    p2pPort: null,
    version,
    height,
    status,
    os,
    latency,
    isCustom: false,
    lastUpdated
  }

  return {
    ...peer,
    ...params
  }
}

const goodPeer1 = {
  ip: '1.1.1.1',
  host: 'http://1.1.1.1',
  port: 4003,
  p2pPort: null,
  version: '1.3.1',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 123,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const goodPeer2 = {
  ip: '2.2.2.2',
  host: 'http://2.2.2.2',
  port: 4003,
  p2pPort: null,
  version: '1.3.1',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 234,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const goodPeer3 = {
  ip: '3.3.3.3',
  host: 'http://3.3.3.3',
  port: 4003,
  p2pPort: null,
  version: '1.3.1',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 345,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const goodPeer4 = {
  ip: '4.4.4.4',
  host: 'http://4.4.4.4',
  port: 4003,
  p2pPort: null,
  version: '2.0.0',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 345,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const goodPeer5 = {
  ip: '5.5.5.5',
  host: 'http://5.5.5.5',
  port: 4003,
  p2pPort: null,
  version: '2.0.0',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 345,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const goodPeer6 = {
  ip: '6.6.6.6',
  host: 'http://6.6.6.6',
  port: 4003,
  p2pPort: null,
  version: '2.0.0',
  height: 6030358,
  status: 'OK',
  os: 'linux',
  latency: 345,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4003
  }
}
const badPeer1 = {
  ip: '4.4.4.4',
  host: 'http://4.4.4.4',
  port: 4003,
  p2pPort: null,
  version: '1.3.1',
  height: 5000,
  status: 'OK',
  os: 'linux',
  latency: 456,
  isCustom: false,
  lastUpdated: null,
  isHttps: false,
  ports: {
    '@arkecosystem/core-api': 4001
  }
}

export default [
  goodPeer1,
  goodPeer2,
  goodPeer3,
  goodPeer4,
  goodPeer5,
  goodPeer6,
  badPeer1
]

export {
  goodPeer1,
  goodPeer2,
  goodPeer3,
  goodPeer4,
  goodPeer5,
  goodPeer6,
  badPeer1
}
