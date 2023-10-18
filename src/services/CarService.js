import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('cars')
    },
    show(carId) {
        return Api().get('car/' + carId)
    },
    post(car) {
        return Api().post('car', car)
    },
    put(car) {
        return Api().put('car/' + cra.id, car)
    },
    delete(car) {
        return Api().delete('car/' + car.id, car)
    },
}