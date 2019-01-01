$(document).ready(function () {
var value1=-1;
$("#nbp").click(function(){
        $( "#chaises" ).empty();
        var value = $('#nbp').find(":selected").val();
		    var image = "<img src='images/chaise.jpg'/>";

		for (var i = 0 ; i < value ; i++) {
			$("#chaises").append(image);
		}
    value1 = value;
		
});

var d;       
$('#date').Zebra_DatePicker({format: 'd/m/Y',onSelect: function() { 
  var	dt =$(this).context.value;
  d=dt;
}});
    


$("#b1").click(function(){
      if (value1 === -1) {
      alert('saisir nombre des places')}else{
	    var h;
	    if ($('input[name="civilite"]').is(':checked')){
        var x = $("input[name=civilite]:checked").each(
		    function() {
			  var v = $(this).val();
			  if (v==="mme") { v="Madamme";
			  }else if (v==="mlle"){ v="Mademoiselle";
			  }else if (v==="m"){ v="Monsieur";
			  }
			  h=v;
	      });
        
        
        var nom = $('#nom').val();
        var n = nom.length;
        if(n<10 || isNaN(nom)===false){
         alert('nom et prenom tres court!!!!');
         
        }else{

          var validetel = /\d{8}$/;
          var tel = $('#tel').val();
          if(validetel.test(tel) === false){
          alert('numéro de tel invalide !!!!');
          }else{

               $( "#div_resume" ).empty();
               var large = '<div> Hello '+h+'<strong> '+nom+'</strong> </br> Your command of '+d+ ' a is registrated and your dishes will be :</div></br>';	
               $("#div_resume").append(large);
               var prix = 0;
               var man;
               var x = $("input[id=plat]:checked").each(
               function() {
                           var p = $(this).data('prix');
                           prix=prix+parseFloat(p);
                           px=prix;
                           var dt =$(this).context.value;
                           man=dt;
                           var large1 = '<ul> <li>'+man+'</li> </ul>';
        
                            $("#div_resume").append(large1);
        
                          });
                var large2= 'The total price of  your command is about '+px+' dt';
                 $("#div_resume").append(large2);

        
        

        }}}else alert('la civilite est obligatoire');
        }
                
});

});