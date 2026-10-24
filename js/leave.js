/* Leave date helpers: count weekdays only, as required by the brief. */
(function(g){'use strict';g.HCMLeave={weekdaysBetween(start,end){let n=0,c=new Date(`${start}T12:00:00`),last=new Date(`${end}T12:00:00`);while(c<=last){if(c.getDay()!==0&&c.getDay()!==6)n++;c.setDate(c.getDate()+1)}return n}}})(window);
