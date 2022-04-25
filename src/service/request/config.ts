let BASE_URL = 'http://coder.org/dev'

const TIME_OUT = 60000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}
export { BASE_URL, TIME_OUT }
