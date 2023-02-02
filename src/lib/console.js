import tracer from 'tracer'

export default tracer.console({
  format: '{{timestamp}} <{{title}}> {{file}}:{{line}} ({{method}}) {{message}}',
  dateformat: "yyyy-mm-dd HH:MM:ss",
  methods: ['debug', 'info', 'log', 'warn', 'error'],
  level: process.env.NODE_ENV.endsWith('production') ? 'info' : 'debug'
});