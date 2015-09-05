module.exports = {

  getDaysInMonth (d) {
    let resultDate = this.getFirstDayOfMonth(d);
    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);
    return resultDate.getDate();
  },

  getFirstDayOfMonth (d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getFirstWeekDay (d) {
    return this.getFirstDayOfMonth(d).getDay();
  },

  getTimeMode (d) {
    return d.getHours() >= 12 ? 'pm' : 'am';
  },

  getFullMonth (d) {
    let month = d.getMonth();
    switch (month) {
      default: return 'Unknown';
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  },

  getShortMonth (d) {
    let month = d.getMonth();
    switch (month) {
      default: return 'Unknown';
      case 0: return 'Jan';
      case 1: return 'Feb';
      case 2: return 'Mar';
      case 3: return 'Apr';
      case 4: return 'May';
      case 5: return 'Jun';
      case 6: return 'Jul';
      case 7: return 'Aug';
      case 8: return 'Sep';
      case 9: return 'Oct';
      case 10: return 'Nov';
      case 11: return 'Dec';
    }
  },

  getFullDayOfWeek (day) {
    switch (day) {
      default: return 'Unknown';
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  },

  getShortDayOfWeek (day) {
    switch (day) {
      default: return 'Unknown';
      case 0: return 'Sun';
      case 1: return 'Mon';
      case 2: return 'Tue';
      case 3: return 'Wed';
      case 4: return 'Thu';
      case 5: return 'Fri';
      case 6: return 'Sat';
    }
  },

  clone (d) {
    return new Date(d.getTime());
  },

  cloneAsDate (d) {
    let clonedDate = this.clone(d);
    clonedDate.setHours(0, 0, 0, 0);
    return clonedDate;
  },

  isDateObject (d) {
    return d instanceof Date;
  },

  addDays (d, days) {
    let newDate = this.clone(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },

  addMonths (d, months) {
    let newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  addYears (d, years) {
    let newDate = this.clone(d);
    newDate.setFullYear(d.getFullYear() + years);
    return newDate;
  },

  setDay (d, day) {
    let newDate = this.clone(d);
    newDate.setDate(day);
    return newDate;
  },

  setMonth (d, month) {
    let newDate = this.clone(d);
    newDate.setMonth(month);
    return newDate;
  },

  setYear (d, year) {
    let newDate = this.clone(d);
    newDate.setFullYear(year);
    return newDate;
  },

  setHours (d, hours) {
    let newDate = this.clone(d);
    newDate.setHours(hours);
    return newDate;
  },

  setMinutes (d, minutes) {
    let newDate = this.clone(d);
    newDate.setMinutes(minutes);
    return newDate;
  },

  toggleTimeMode (d) {
    let newDate = this.clone(d);
    let hours = newDate.getHours();

    newDate.setHours(hours - (hours > 12 ? -12 : 12));
    return newDate;
  }

};
