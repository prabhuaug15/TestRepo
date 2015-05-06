angular.module('utils',[])
    .value("defaultClosedStatus", false)
    .factory("Bug", function(defaultClosedStatus){
        console.log("Utils fctory executed - Bug");
         function Bug(defautls){
            defaults = defautls || {};
            this.id = defautls.id || Date.now().toString();
            this.title = defaults.title || '';
            this.isClosed = defaults.isClosed || defaultClosedStatus;
            this.createdAt = defautls.createdAt || new Date();
        }
        Bug.prototype.toggle = function(){
            this.isClosed = !this.isClosed;
        };
        return Bug;

    })
    .value("momentApi", moment)
    .filter("toMoment", function(momentApi){
        console.log("Utils filter executed - toMoment");
        return function(date){
            return momentApi(date).fromNow();
        }
    });

