import axios from 'axios'

const baseUrl = '/api'

export function getAllGuns() {
  return axios.get(`${baseUrl}/weapons`)
}