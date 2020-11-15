export class DurationHelper {
 /**
 * Function to print date diffs.
 * 
 * @param {Date} date1: The valid start date
 * @param {Date} date2: The end date. Can be null (if so the function uses "now").
 * @param {String} interval: The number of details you want to get out ('years'="in years",'months'="in months",...) 
 */
    public static getDateDiff(date1, date2, interval) {
        var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        week = day * 7;
        date1 = new Date(date1) ;
        date2 = (!date2) ? new Date()  : new Date(date2) ;
        var timediff = date2 - date1;
        if (isNaN(timediff)) return NaN;
        switch (interval) {
        case "years":
            return date2.getFullYear() - date1.getFullYear();
        case "months":
            return ((date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth()));
        case "weeks":
            return Math.floor(timediff / week);
        case "days":
            return Math.floor(timediff / day);
        case "hours":
            return Math.floor(timediff / hour);
        case "minutes":
            return Math.floor(timediff / minute);
        case "seconds":
            return Math.floor(timediff / second);
        default:
            return undefined;
        }
    }
    
    /**
 * Function to print date duration.
 * 
 * @param {Date} fromDate: The valid start date
 * @param {Date} toDate: The end date. Can be null (if so the function uses "now").
 * @param {Number} levels: The number of details you want to get out (1="in 2 Months",2="in 2 Months, 20 Days",...)
 * @param {Boolean} prefix: adds "in" or "ago" to the return string
 * @return {String} Diffrence between the two dates.
 */
public static getDuration(fromDate, toDate, levels, prefix) {
        fromDate = new Date(fromDate);
        toDate = new Date(toDate);
        var lang = {
            "date.past": "{0} ago",
            "date.future": "in {0}",
            "date.now": "now",
            "date.year": "{0} year",
            "date.years": "{0} years",
            "date.years.prefixed": "{0} years",
            "date.month": "{0} month",
            "date.months": "{0} months",
            "date.months.prefixed": "{0} months",
            "date.day": "{0} day",
            "date.days": "{0} days",
            "date.days.prefixed": "{0} days",
            "date.hour": "{0} hour",
            "date.hours": "{0} hours",
            "date.hours.prefixed": "{0} hours",
            "date.minute": "{0} minute",
            "date.minutes": "{0} minutes",
            "date.minutes.prefixed": "{0} minutes",
            "date.second": "{0} second",
            "date.seconds": "{0} seconds",
            "date.seconds.prefixed": "{0} seconds",
        },
            langFn = function (id, params) {
                var returnValue = lang[id] || "";
                if (params) {
                    for (var i = 0; i < params.length; i++) {
                        returnValue = returnValue.replace("{" + i + "}", params[i]);
                    }
                }
                return returnValue;
            },
            toDate = toDate ? toDate : new Date(),
            diff = fromDate - toDate,
            past = diff < 0 ? true : false,
            diff = diff < 0 ? diff * -1 : diff,
            date = new Date(new Date(1970, 0, 1, 0).getTime() + diff),
            returnString = '',
            count = 0,
            years = (date.getFullYear() - 1970);
        if (years > 0) {
            var langSingle = "date.year" + (prefix ? "" : ""),
                langMultiple = "date.years" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (years > 1 ? langFn(langMultiple, [years]) : langFn(langSingle, [years]));
            count++;
        }
        var months = date.getMonth();
        if (count < levels && months > 0) {
            var langSingle = "date.month" + (prefix ? "" : ""),
                langMultiple = "date.months" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (months > 1 ? langFn(langMultiple, [months]) : langFn(langSingle, [months]));
            count++;
        } else {
            if (count > 0)
                count = 99;
        }
        var days = date.getDate() - 1;
        if (count < levels && days > 0) {
            var langSingle = "date.day" + (prefix ? "" : ""),
                langMultiple = "date.days" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (days > 1 ? langFn(langMultiple, [days]) : langFn(langSingle, [days]));
            count++;
        } else {
            if (count > 0)
                count = 99;
        }
        var hours = date.getHours();
        if (count < levels && hours > 0) {
            var langSingle = "date.hour" + (prefix ? "" : ""),
                langMultiple = "date.hours" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (hours > 1 ? langFn(langMultiple, [hours]) : langFn(langSingle, [hours]));
            count++;
        } else {
            if (count > 0)
                count = 99;
        }
        var minutes = date.getMinutes();
        if (count < levels && minutes > 0) {
            var langSingle = "date.minute" + (prefix ? "" : ""),
                langMultiple = "date.minutes" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (minutes > 1 ? langFn(langMultiple, [minutes]) : langFn(langSingle, [minutes]));
            count++;
        } else {
            if (count > 0)
                count = 99;
        }
        var seconds = date.getSeconds();
        if (count < levels && seconds > 0) {
            var langSingle = "date.second" + (prefix ? "" : ""),
                langMultiple = "date.seconds" + (prefix ? ".prefixed" : "");
            returnString += (count > 0 ? ', ' : '') + (seconds > 1 ? langFn(langMultiple, [seconds]) : langFn(langSingle, [seconds]));
            count++;
        } else {
            if (count > 0)
                count = 99;
        }
        // if(prefix){
        //     if(returnString == ""){
        //         returnString = langFn("date.now");
        //     } else if(past)
        //         returnString = langFn("date.past",[returnString]);
        //     else
        //         returnString = langFn("date.future",[returnString]);
        // }
        return returnString;
    }
}