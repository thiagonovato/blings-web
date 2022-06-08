import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://blings-api.herokuapp.com'
})