
			
			/*function addAnimals() {
				// body...
				//var x= [];
				 var name = document.getElementById('name').value;
				 var node = document.createElement("li");
				 var textnode=document.createTextNode(name);
				 node.appendChild(textnode);
				 document.getElementById("demo").appendChild(node);				 
	}*/
		function addAnimals() {
			var animals = [];
		document.getElementById("btn").onclick = function(){
  		var name = document.getElementById("name").value;
  			var alreadyExist = false;
  
 		 for (var i = 0; i < animals.length; i++){
    		if (name == animals[i]){
      			alreadyExist = true;
      				break;
    	}
  }
  		if (!alreadyExist){
      animals.push(name);
      var node = document.createElement("li");
      var textnode = document.createTextNode(name);
      node.appendChild(textnode);
      document.getElementById("demo").appendChild(node);
      document.getElementById('name').value = '';
  	 }else{
      		alert('animal already in the list');
   		}
	}
}
			