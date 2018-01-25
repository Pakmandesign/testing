// function People(name){

// 	this.billable = {
// 		name: name,
// 		billable_hours_by_day: [],
// 		billable_hours_by_month: [0,0,0,0,0,0,0,0,0,0,0,0,]
// 	};

// }

var dataPool = [];
var dataForChart = [];
var base = "";

$(document).ready(function(){


	if (window.location.pathname === base+"callback.html" ) {
		var authArray = window.location.search.split("&");
		accessToken = authArray[0].split("=")[1];
		console.log(accessToken);
		localStorage.setItem('accessToken', accessToken);
		window.location.replace(base+"graph.html");
	}


	$(this).on('click', '.login', function(event) {


		event.preventDefault();
		window.location.href = 'https://id.getharvest.com/oauth2/authorize?client_id=QFImuBSExrux_CCAQSpKMxWA&response_type=token';

	});


	$(this).on('click', '.logout', function(event) {


		event.preventDefault();
		localStorage.removeItem("accessToken");
		window.location.replace(base);

	});


	$(this).on('click', '.get-info', function(event) { 

		var accessToken = localStorage.getItem("accessToken");

		event.preventDefault(); 

		$.ajax({

			  type: 'GET',
			  url: 'https://id.getharvest.com/api/v1/accounts',
			  crossDomain: true,
			  dataType: "json",
			  // async: true,
			  beforeSend: function(xhr) {

			  	xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);

			  	// xhr.setRequestHeader('User-Agent', 'billable')


			  },
			  error:function(err) {
			  	/* Act on the event */
			  	console.log(err.responseText); 	
			  },
			  success: function(data){

			 	console.log(data); 		

			 }

		});

	});







	// var Charley = new People('Charley');
	// var Pat = new People('Pat');
	// var Yin = new People('Yin');
	// var Justin = new People('Justin');
	// var Lisa = new People('Lisa');
	// var Alison = new People('Alison');



	// // var Yin = new People('Yin');
	// // var Yin = new People('Yin');





	// $.ajax({
	//   type: 'GET',
	//   url: 'js/charley-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;


	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Charley.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });


	//     // console.log(Charley.billable.billable_hours_by_month);


	//   },complete: function(){

	//   	var output =
	//   	  _(Charley.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Charley.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	// dataPool.push(Charley.billable.billable_hours_by_month);


	//   }


	// });

	// console.log(Charley.billable.billable_hours_by_month);

	// $.ajax({
	//   type: 'GET',
	//   url: 'js/pat-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;
	  	

	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Pat.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });





	//   },complete: function() {


	//   	var output =
	//   	  _(Pat.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Pat.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	// dataPool.push(Pat.billable.billable_hours_by_month);


	//   }

	// });


	// $.ajax({
	//   type: 'GET',
	//   url: 'js/yin-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;
	  	

	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Yin.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });





	//   },complete: function() {


	//   	var output =
	//   	  _(Yin.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Yin.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	// 	dataPool.push(Yin.billable.billable_hours_by_month);

	//   }

	// });


	// $.ajax({
	//   type: 'GET',
	//   url: 'js/justin-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;
	  	

	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Justin.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });





	//   },complete: function() {


	//   	var output =
	//   	  _(Justin.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Justin.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	// dataPool.push(Justin.billable.billable_hours_by_month);


	//   }

	// });


	// $.ajax({
	//   type: 'GET',
	//   url: 'js/lisa-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;
	  	

	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Lisa.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });





	//   },complete: function() {


	//   	var output =
	//   	  _(Lisa.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Lisa.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	//   		dataPool.push(Lisa.billable.billable_hours_by_month);

	//   }

	// });





	// $.ajax({
	//   type: 'GET',
	//   url: 'js/alison-timesheet.json',
	//   data: {},
	//   // crossDomain: true,
	//   dataType: "json",
	//   async: false,
	//   beforeSend: function(xhr) {
	//   },
	//   success: function(data){

	//   	var sum = 0;
	  	

	//   	$.each(data, function(index, element) {


	//   		var date = data[index]['day_entry']['spent_at'];
	//   		var objHour = {};
	//   		var month = data[index]['day_entry']['spent_at'].split("-")[1].toString().replace(/^0+/, '');
	//   		objHour['Month'] = month;
	//   		objHour['Hours'] = data[index]['day_entry']['hours'];

	//   		Alison.billable.billable_hours_by_day.push(objHour);
	  		
	//   	 });





	//   },complete: function() {


	//   	var output =
	//   	  _(Alison.billable.billable_hours_by_day)
	//   	    .groupBy('Month')
	//   	    .map((objs, key) => ({
	//   	        'Moth': key,
	//   	        'Hours': +_.sumBy(objs, 'Hours').toFixed(0) }))
	//   	    .value();

	//   	// console.log(output);

	//   	for (var i = 0; i < output.length; i++ )  {

	//   		Alison.billable.billable_hours_by_month[output[i]['Moth']-1] = output[i]['Hours'];

	//   	}

	//   		dataPool.push(Alison.billable.billable_hours_by_month);

	//   }

	// });

	




	// // console.log(Pat.billable.billable_hours_by_month);




	// for (var i = 0; i < 12; i++ ) {

	// 	var temp = [];
	// 		temp.push(new Date("2017/"+(i+1)));
	// 	for (var j = 0; j < dataPool.length; j++ )  {

	// 		temp.push(dataPool[j][i]);

	// 	}

	// 	dataForChart.push(temp);
	// }

	// // console.log(dataForChart);

	// g = new Dygraph(
	//       document.getElementById("graphdiv"),  // containing div
	// 		dataForChart,
	//       {
	//         labels: [ "x", "Charley", "Patrick", "Yin", "Justin", "Lisa",  "Alison" ]
	//       }                                   // the options
	// );

});