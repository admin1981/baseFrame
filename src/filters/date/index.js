import Vue from 'vue'
//import moment from 'moment'

const isEmpty = (value) => {
    return value === ''  ||  value === null || value === undefined
}

Vue.filter('data', function(value) {
    if(isEmpty(value)) {
        return '--'
    }else {
        return moment(value).format('YYYY-MM-DD');
    }
})
Vue.filter('dataTime', function(value) {
    if(isEmpty(value)) {
        return '--'
    }else {
        return moment(value).format('YYYY-MM-DD HH:mm:ss');
    }
})