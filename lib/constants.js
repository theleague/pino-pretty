'use strict'

module.exports = {
  DATE_FORMAT: 'yyyy-mm-dd HH:MM:ss.l o',

  ERROR_LIKE_KEYS: ['err', 'error'],

  MESSAGE_KEY: 'msg',

  LEVEL_KEY: 'level',

  LEVEL_LABEL: 'levelLabel',

  TIMESTAMP_KEY: 'time',

  LEVELS: {
    default: 'USERLVL',
    60: 'FATAL',
    50: 'ERROR',
    40: 'WARN',
    35: 'NOTICE', // Custom
    30: 'INFO',
    20: 'DEBUG',
    10: 'TRACE',
    5: 'SILLY' // Custom
  },

  LEVEL_NAMES: {
    fatal: 60,
    error: 50,
    warn: 40,
    notice: 35, // Custom
    info: 30,
    debug: 20,
    trace: 10,
    silly: 5 // Custom
  },

  // Object keys that probably came from a logger like Pino or Bunyan.
  LOGGER_KEYS: [
    'pid',
    'hostname',
    'name',
    'level',
    'time',
    'timestamp',
    'caller'
  ]
}
