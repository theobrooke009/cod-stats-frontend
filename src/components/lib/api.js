import axios from 'axios'

const baseUrl = '/api'

export function getAllGuns() {
  return axios.get(`${baseUrl}/weapons`)
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}