import axios from 'axios'

const request = axios.create({
    // baseURL
})

/**
 * default request headers
 * https://docs.mcsmanager.com/apis/get_apikey.html#%E7%A4%BA%E4%BE%8B%E7%94%A8%E6%B3%95
 */
request.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
request.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

request.defaults.params = {
    //   apikey: process.env.VUE_APP_APIKEY
}
