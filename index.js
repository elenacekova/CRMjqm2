
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {}


function onLoad(){

      $(document).ready(function(){
     
    	

	$("#btn_ok").click(function(e){
	var username = $("#inputEmail").val();
		if(username != "test")
		{
			e.preventDefault();
		}
		else{
			return;
		}
	});
      // start of the function after login button click

      
});




}