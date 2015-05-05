angular.module('utils',[])
    .value("defaultClosedStatus", false)
    .factory("Bug", function(defaultClosedStatus){

         function Bug(defautls){
            defaults = defautls || {};
            this.title = defaults.title || '';
            this.isClosed = defaults.isClosed || defaultClosedStatus;
        }
        Bug.prototype.toggle = function(){
            this.isClosed = !this.isClosed;
        };
        return Bug;

    });
