import Vue from 'vue'

function priceToString (num) {
    if(isNaN(num)) {
        return num
    }
    let str = Number(num).toString()
    if(!/e/i.test(str)) {
        return str
    }
    return(num).toFixed(8).replace(/\.?0+$/, '')
}

Vue.filter('priceToString', priceToString)