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
	 	},
		searchKey: function(arr, key, value){
			for (var i = arr.length; i--;) {
				if(arr[i][key]==value) return i;
			};
			return null;
		}
	},
	selectTree = (function(el){
		var app = {
			active: false,
			list: [],
			fathers: [],
			el: {},
			getValueFathers: function(){

			},
			list: function(select){
				var elOptions = get.all("option",select),
				list = [],
				dataset = {},
				fathers = [],
				valueCheck = [],
				temp,
				val = 0,
				keySearch;
				for (var i = 0, lim = elOptions.length; i<lim; i++) {
					val = elOptions[i].value
					temp = {'value': val};
					keySearch = null;
					if(valueCheck.indexOf(val)!==-1) {
						keySearch = get.searchKey(list, 'value', val);
					}
					valueCheck.push(elOptions[i].value);
					if(keySearch!==null) temp = list[keySearch]
					//PERCORRER OBJETO DATASET
					dataset = elOptions[i].dataset;
					// var keys = Object.keys(elOptions[i].dataset),key;
					// for (var i = keys.length - 1; i >= 0; i--) {
					// 	key = keys[i];
					for (var key in dataset) if(dataset.hasOwnProperty(key)) {
						// IF DATA OF SELECTTREE - @data-cod | @dataCod
						if(key.indexOf("Cod")!=-1){
							if(keySearch!==null && key in temp) {
								temp[key] = temp[key].concat(dataset[key].split(","));
							} else {
								temp[key] = dataset[key].split(",");
							}
							delete dataset[key];
							if(!app.active) app.active = true;
							if(fathers.indexOf(key)===-1) fathers.push(key);
						}
					}
					if(keySearch===null){
						temp.html = elOptions[i].outerHTML;
						list.push(temp);
					} else {
						list[keySearch] = temp;
					}
				};
				app.fathers = fathers;
				return list;
			}
		}
		//FOR CLEAN FUNCTION LIST WITH ARRAY LIST - CLEAN MEMORY
		app.list = app.list(el);
		if(!app.active) return 0;	
		app.el = el;
		console.dir(app);
	});
	var el = get.all(selectTreeSelector);
	for (var i = el.length - 1; i >= 0; i--) {
		new selectTree(el[i]);
	};
}());