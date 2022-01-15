import axios from 'axios'
import { getToken } from './auth.js'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllGuns() {
  return axios.get(`${baseUrl}/weapons`)
}

export function getAllAttachments() {
  return axios.get(`${baseUrl}/attachments`)
}

export function getOneWeapon(weaponId) {
  return axios.get(`${baseUrl}/weapons/${weaponId}`)
}


export function createAClass(weaponId, formData) {
  return axios.post(`${baseUrl}/weapons/${weaponId}/build`, formData, headers())
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

export function getUser(userId) {
  return axios.get(`${baseUrl}/user/${userId}`, headers())
}
