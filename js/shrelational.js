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
			list: [],
			active: false,
			fathers: [],
			captureValueData: function(data){
				var list = [];
				data = data.split(",");
				for (var i = data.length - 1; i >= 0; i--) {
					list.push(data[i]);
				};
				return list;
			},
			list: function(select){
				var elOptions = get.all("option",select),
				list = [],
				dataset = {},
				temp,
				fathers = [];
				for (var i = 0, lim = elOptions.length; i<lim; i++) {
					temp = {};
					//PERCORRER OBJETO DATASET
					dataset = elOptions[i].dataset;
					//var keys = Object.keys(elOptions[i].dataset),key;
					//for (var i = keys.length - 1; i >= 0; i--) {
					//key = keys[i];
					for (var key in dataset) if(dataset.hasOwnProperty(key)) {
						// IF DATA OF SELECTTREE - @data-cod | @dataCod
						if(key.indexOf("Cod")!=-1){
							temp[key] = app.captureValueData(dataset[key]);
							delete dataset[key];
							if(!app.active) app.active = true;
							if(fathers.indexOf(key)===-1) fathers.push(key);
						}
					}
					temp['value'] = elOptions[i].value; 
					temp.html = elOptions[i].outerHTML;
					list.push(temp);
				};
				app.fathers = fathers;
				//CLEAN MEMORY
				delete app.captureValueData;
				return list;
			},
		}
		//FOR CLEAN FUNCTION LIST WITH LIST - CLEAN MEMORY
		app.list = app.list(el);
		if(!app.active) return 0;
		console.log(app);
	});
	var el = get.all(selectTreeSelector);
	for (var i = el.length - 1; i >= 0; i--) {
		new selectTree(el[i]);
	};
}());