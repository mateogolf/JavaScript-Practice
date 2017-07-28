function mostSigDigit(num){
	num = Math.abs(num);
	if (num==0 || (num >1 && num <10)){
		return Math.floor(num);
	}

	while (num <1) {
		num *=10;
		var mod = mod %10;
		if (mod >0){
			return Math.floor(num);
		}
	}

	while(num >10){
		num /= 10;
	}

	return Math.floor(num);
}