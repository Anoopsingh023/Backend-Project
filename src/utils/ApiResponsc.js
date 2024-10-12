class ApiResponse {
    constructor(statusCode, data, mesage = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.mesage = mesage
        this.success = statusCode < 400
    }
}