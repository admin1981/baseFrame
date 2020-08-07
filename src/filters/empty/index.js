import Vue from 'vue'

Vue.filter('empty', function(value) {
    return value === null ? '--' : value
})