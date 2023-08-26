function CallApiGet() {
    return axios({
        method: 'get',
        url: 'https://64e7f497b0fd9648b7906925.mockapi.io/Products',
    })
}