var selectTree = (function(){
	'use strict'
	var selectTreeSelector = ".selectTree", 
	get = {
		// selectors tree dom 
		// get.item("seletor",fatherDom) 
		// get.all("seletor",fatherDom) 
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
			dataset = {};
			for (var i = 0, lim = elOptions.length; i<lim; i++) {
				//arr.father 
				//delete elOptions[i].dataset['codEm'];
				//console.log(elOptions[i].outerHTML);

				//PERCORRER OBJETO COM FOR IN
				dataset = elOptions[i].dataset;
				for (var key in dataset) if(dataset.hasOwnProperty(key)) {
					console.log(dataset[key].split(","));
				}

				//TRANSFORMAR AS CHAVES OBJETO DATASET EM ARRAY e DPS PERCORRER
				// arr = Object.keys(elOptions[i].dataset)
				// for (var i = arr.length - 1; i >= 0; i--) {
				// 	arr[i]
				// };
			};
		},
		init: function(el){
			var el = get.all(el);
			for (var i = el.length - 1; i >= 0; i--) {
				app.buildList(el[i]);
			};

		}
	}
	app.init(selectTreeSelector);
	return function(eu){
		//console.log(eu);
	}
}());
selectTree("eu"); 