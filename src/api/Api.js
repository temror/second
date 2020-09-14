import * as axios from "axios";

let instanse = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '0160ca7c-6b5d-4f52-9db3-b0ccd36c63fc'},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})},
    apiUnfollow(u) {
        return instanse.delete(`follow/${u.id}`)
            .then(response => {return response.data})},
    apiFollow(f) {
        return instanse.post(`follow/${f.id}`, {})
            .then(response => {return response.data})}}

export const headerApi = {
    authMe() {
        return instanse.get(`auth/me`)
            .then(response => {return response.data})}}

export const profileApi = {
    getProfile(id) {
        return instanse.get(`profile/${id}`)
            .then(response => {return response.data})}}
