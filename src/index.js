module.exports = function longestConsecutiveLength(array) {	
	let n = array.length;
	if (n == 0) return 0;
	if (n == 1) return 1;

	let length = 0;
	let temp = 1;	
	let arr= mergeSort(array);
	for (let i = 0; i < n - 1; i++) {
		if (arr[i] == (arr[i + 1] - 1)) temp++;
		else {		
			length = temp > length ? temp : length;	
			temp = arr[i] == arr[i + 1] ? temp : 1;
		}
	  }
	return length;
	  
	function mergeSort(a) {
		if (a.length < 2) return a;
		let middle = Math.floor(a.length / 2);
		let left = a.slice(0, middle);
		let right = a.slice(middle);
		
		return merge(mergeSort(left), mergeSort(right));
	}
	function merge(left, right) {
		let a = [];
		while ((left.length > 0) && (right.length > 0)) {
			if (left[0] < right[0]) a.push(left.shift())
				else 				a.push(right.shift());
		}
		return a.concat(left.concat(right));
	}
}
