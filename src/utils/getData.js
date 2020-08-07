import moment from 'moment'

export default {
    //获取今日的开始结束时间
    getToday() {
        let obj = {
            starttime: '',
            endTime: ''
        }
        obj.starttime = moment(moment().startOf('day').valueOf()).format('YYYY-MM-DD');
        obj.endTime = moment(moment().valueOf()).format('YYYY-MM-DD');
        return obj
    },
    //获取昨日的开始结束时间
    getYesterday() {
        let obj = {
            starttime: '',
            endTime: ''
        }
        obj.starttime = moment(moment().add(-1, 'days').startOf('day').valueOf()).format('YYYY-MM-DD');
        obj.endTime = moment(moment().add(-1, 'days').endOf('day').valueOf()).format('YYYY-MM-DD');
        return obj
    },
    //获取当前周的开始结束时间
    getCurrWeekDays() {
        let obj = {
            starttime: '',
            endTime: ''
        }
        obj.starttime = moment(moment().week(moment().week()).startOf('week').add(1, 'days').valueOf()).format('YYYY-MM-DD');
        obj.endtime = moment(moment().week(moment().week()).endOf('week').add(1, 'days').valueOf()).format('YYYY-MM-DD');
    },
    //获取当前月的开始结束时间
    getCurrWeekDays() {
        let obj = {
            starttime: '',
            endTime: ''
        }
        obj.starttime = moment(moment().month(moment().month()).startOf('month').valueOf()).format('YYYY-MM-DD');
        obj.endtime = moment(moment().month(moment().month()).endOf('month').valueOf()).format('YYYY-MM-DD');
    },
    //获取上一个月的开始结束时间
    getLastMonthDays() {
        let obj = {
            starttime: '',
            endTime: ''
        }
        obj.starttime = moment(moment().month(moment().month() - 1).startOf('month').valueOf()).format('YYYY-MM-DD');
        obj.endtime = moment(moment().month(moment().month() - 1).endOf('month').valueOf()).format('YYYY-MM-DD');
    }
}