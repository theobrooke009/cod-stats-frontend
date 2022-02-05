const devUrl = '/api'
const prodUrl = 'https://project-cod-stats-feb.herokuapp.com/api'
export const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl



