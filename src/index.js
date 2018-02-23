/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var x;
  var y;
  var z;
  var number = 0;
	for (var i = 0; i < preferences.length; i++) {
  	x = i+1;
  	y = preferences[i];
  	z = preferences[y-1];
  	if (preferences[z-1] === x && y != z) {
  		preferences[i]= null;
  		preferences[y-1] = null;
  		preferences[z-1] = null;
  		number += 1;
		};
	};
	return number;
};

/* комментарий
i = 0 , 1 , 2 , 3 ..........
x = 1 , 2 , 3 , 4 ..........
[]=[2 , 3 , 1]
 x = 1
 y = 2
 z = 3
 z не должно равняться y, preferences[z-1] должно равняться xnpm

 */