//开发
let BASE_URL = ''
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000/'
} else {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BASE_URL = 'http://152.136.185.210:5000/'
}

export { BASE_URL, TIME_OUT }
