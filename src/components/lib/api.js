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

export function getAllUserGuns() {
  return axios.get(`${baseUrl}/userweapons`, headers())
}

export function getAllAttachments() {
  return axios.get(`${baseUrl}/attachments`)
}

export function getOneWeapon(weaponId) {
  return axios.get(`${baseUrl}/weapons/${weaponId}`)
}

export function getOneUserWeapon(userWeaponId) {
  return axios.get(`${baseUrl}/userweapons/${userWeaponId}`, headers())
}


export function createAClass(weaponId, formData) {
  return axios.post(`${baseUrl}/weapons/${weaponId}/build`, formData, headers())
}

export function favouriteClass(userWeaponId) {
  return axios.post(`${baseUrl}/userweapons/${userWeaponId}`, headers(), headers())
}

export function deleteClass(userWeaponId) {
  return axios.delete(`${baseUrl}/userweapons/${userWeaponId}`, headers())
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

export function getUser() {
  return axios.get(`${baseUrl}/profile`, headers())
}

export function editUser(userId, formData) {
  return axios.put(`${baseUrl}/profile/${userId}`, formData, headers())
}
