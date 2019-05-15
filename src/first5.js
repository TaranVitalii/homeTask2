export function isEmpty(obj) {
	  if (typeof(obj)==="number" || typeof(obj)==="boolean" ||typeof(obj)==="string"){
    return false
  }

	for(let property in obj){
		return false;
	}
	return true;
}
window.isEmpty=isEmpty;

