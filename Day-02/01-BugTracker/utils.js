angular.module('utils',[])
    .value("defaultClosedStatus", false)
    .factory("Bug", function(defaultClosedStatus){

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

    });
