



var model = [{name:'Korona', address:'Minsk, Korzhenevskogo 26', worktime:'9.00 - 23.00'},
					{name:'Rublevski', address:'Minsk, Kizhevatova 72-1', worktime:'10.00 - 22.00', products: [{name:'dasd', description: "fsadf"},{name:'dasd', description: "fsadf"}]},
					{name:'Sosedi', address:'Minsk, Rotmistrova 7', worktime:'9.00 - 22.00', products: [{name:'dasd', description: "fsadf"}]},
					{name:'Vitalur', address:'Minsk, Golodeda 132', worktime:'9.00 - 22.30', products: [{name:'dasd', description: "fsadf"}]},
					{name:'Gippo', address:'Mibsk, Gintovta 19', worktime:'9.00 - 23.00', products: [{name:'dasd', description: "fsadf"}]},
					{name:'Bigzz', address:'Minsk, Kropotkina 14', worktime:'10.00 - 24.00', products: [{name:'f52345', description: "52345"}]}];

angular.module('shopApp',[]).controller('shopCtrl', function($scope){
		$scope.list = model;

		$scope.addNewShop = function () {
			$scope.list.push({
				name: $scope.shopName,
				address: $scope.shopAddress,
				worktime: $scope.shopWorktime
			});

			document.querySelector('.createForm').reset();

		};

		$scope.removeShop = function (index){
			$scope.list.splice(index, 1);
		};

		$scope.addProduct = function (index, item){	
			if(angular.isDefined(item) && angular.isDefined(item.addName)){
				$scope.list[index].products.push({name: item.addName, description: item.addDescription});
			}
		};

		$scope.removeProduct = function (index, pos) {
        	$scope.list[pos].products.splice(index, 1);
    	}; 

		$scope.showProducts = function (shop) {
			shop.clicked = !shop.clicked;
        	
    	};

		$scope.setMarker = function () {
			var marker = new google.maps.Marker({
  					position: myCenter,
  				});
 				marker.setMap(map);
		};

		$scope.mouseDownHandler = function (e){
			if(e.which == 1){
			var elem = e.currentTarget;				

			// elem.ondragstart = function() {
  	// 			return false;
			// };
			elem.style.position = 'absolute';
			elem.style.zIndex = 100;

			document.onmousemove = function (e) {
				elem.classList.add('draggable');
				elem.style.top = e.clientY + 'px';	
			};

			elem.onmouseup = function (e){
				document.onmousemove = null;
				elem.onmouseup = null;
				
			};
		}
		};
		

		  var myCenter = new google.maps.LatLng(53.904042,27.550850);
		  var mapProp = {
		    center: myCenter,
		    zoom:11,
		    mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
});



  
  



