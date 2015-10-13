var selectTree = (function(){
	'use strict'
	var teste = "emCod"
	// selectors tree dom 
	// get.item("seletor",fatherDom) 
	// get.all("seletor",fatherDom) 
	var get = {
	 	item: function(el, root){
			if(typeof(root)!="undefined") return root.querySelector(el);
			return document.querySelector(el);
	 	},
	 	all: function(el, root){
	 		if(typeof(root)!="undefined") return root.querySelectorAll(el);
	 		return document.querySelectorAll(el);
	 	}	
	},
	app = {
		buildList: function(son){
			var elOptions = get.all("option",son),
			list = [],
			arr = {};
			for (var i = 0, lim = elOptions.length; i<lim; i++) {
				//arr.father 
				delete elOptions[i].dataset[teste];
				console.log(elOptions[i].outerHTML);
				// return 
			};
		}	
	}
	//app.buildList(get.item(".teste"));
	app.init();
	return function(eu){
		console.log(eu);
	}
}());
selectTree("eu"); 