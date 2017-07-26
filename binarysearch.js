function binarySearch(arr,val){
	var mid = Math.floor(arr.length/2);
	var end = arr.length;
	var start = 0;

	while (mid >=start && mid <= end){
		if (val == arr[mid]){
			return true;
		}
		else if (val < arr[mid]){
			end= mid;
			mid= Math.floor((end-start)/2);
		}
		else if (val > arr[mid]){
			start = mid;
			mid += Math.floor((end-start)/2);
		}
	}
return false;
}
var evenArr = [1,2,3,4,5,6,7,8];
var oddArr = [1,2,3,4,5,6,7];
console.log(binarySearch(evenArr, 6));
console.log(binarySearch(oddArr, 6));