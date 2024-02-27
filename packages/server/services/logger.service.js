import fs from 'node:fs'

class LoggerService {
  #logsDir = './logs'
  #logsFilePath = `${this.#logsDir}/backend.log`

  constructor() {
    if (!fs.existsSync(this.#logsDir)) {
      fs.mkdirSync(this.#logsDir)
    }
  }

  debug = (...args) => this.#doLog('DEBUG', ...args)
  info = (...args) => this.#doLog('INFO', ...args)
  warn = (...args) => this.#doLog('WARN', ...args)
  error = (...args) => this.#doLog('ERROR', ...args)

  //define the time format
  #getTime = () => new Date().toLocaleString('he')

  #isError = (e) => e && e.stack && e.message

  #doLog(level, ...args) {
    const strs = args.map(arg =>
      (typeof arg === 'string' || this.#isError(arg)) ? arg : JSON.stringify(arg)
    )
    let line = strs.join(' | ')
    line = `${this.#getTime()} - ${level} - ${line}\n`
    console.log(line)
    fs.appendFile(this.#logsFilePath, line, (err) => {
      if (err) console.log('FATAL: cannot write to log file')
    })
  }
}

export const loggerService = new LoggerService()
