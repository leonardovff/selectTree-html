(function(){
	'use strict'
	var selectTreeSelector = ".selectTree", 
	get = {
		// selectors tree dom - get.item/all("seletor",fatherDom) 
	 	item: function(el, root){
			if(typeof(root)!="undefined") return root.querySelector(el);
			return document.querySelector(el);
	 	},
	 	all: function(el, root){
	 		if(typeof(root)!="undefined") return root.querySelectorAll(el);
	 		return document.querySelectorAll(el);
	 	}	
	},
	selectTree = (function(el){
		var app = {
			captureValueData: function(data){
				data = data.split(",");
				for (var i = data.length - 1; i >= 0; i--) {
					console.log(data[i]);
				};
			},
			buildList: function(select){
				var elOptions = get.all("option",select),
				list = [],
				dataset = {};
				for (var i = 0, lim = elOptions.length; i<lim; i++) {
					//delete elOptions[i].dataset['codEm'];

					//PERCORRER OBJETO DATASET
					// dataset = Object.keys(elOptions[i].dataset)
					// for (var i = dataset.length - 1; i >= 0; i--) {
					dataset = elOptions[i].dataset;
					for (var key in dataset) if(dataset.hasOwnProperty(key)) {
						app.captureValueData(dataset[key]);
					}
				};
			},
		}
		app.buildList(el);
	});
	var el = get.all(selectTreeSelector);
	for (var i = el.length - 1; i >= 0; i--) {
		new selectTree(el[i]);
	};
}());