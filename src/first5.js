window.isEmpty = function (obj) {
	for(let property in obj){
		return false;
	}
	return true;
}

export {isEmpty};
