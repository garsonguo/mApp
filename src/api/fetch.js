import axios from 'axios'

export function fetchList (url) {
  return axios.get(url)
}
