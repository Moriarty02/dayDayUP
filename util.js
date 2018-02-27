var util={

	isArray: Array.isArray || function( obj ) {
		return util.type(obj) === "array";
	},
	isObject(obj){
		return
	}
	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},
	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},
	extends(){
		
	}
}
