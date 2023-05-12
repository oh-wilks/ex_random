import moment from 'moment';

 class TimeFormatter {
    constructor(dateString) {
        this.date = moment()
    }

    toISO() {
        return this.date.toISOString();
      }

    toShort() {
        return this.date.format('YYYY-MM-DD')
    }

    toUnix() {
        return this.date.unix()

    }
      
}

 const formatter = new TimeFormatter(moment()).toUnix()
 console.log(formatter);

