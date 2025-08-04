<<<<<<< HEAD
'use strict';

var logger = function() {
	
	var log = function(msg) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                console.log(msg);
        }
	}
	
	return {
		  log: log
	};
	
}();

=======
'use strict';

var logger = function() {
	
	var log = function(msg) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                console.log(msg);
        }
	}
	
	return {
		  log: log
	};
	
}();

>>>>>>> 07587da31d055484ddcc90ac85d480175f9987e6
module.exports = logger;