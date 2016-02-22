$(document).ready(function() {
    $('#btnRight').click(function(e) {
        var selectedOpts = $('#listBox1 option:selected');
        if (selectedOpts.length == 0) {
            alert("Select item to move");
            e.preventDefault(); 
        }

        $('#listBox2').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });

    $('#btnLeft').click(function(e) {
        var selectedOpts = $('#listBox2 option:selected');
        if (selectedOpts.length == 0) {
            alert("Select item to move");
            e.preventDefault();
        }

        $('#listBox1').append($(selectedOpts).clone());
        $(selectedOpts).remove();
        e.preventDefault();
    });
	
	$("#userinfo_state").change(function() { 
		var id = $(this).val();
		$('#userinfo_city').find('option').remove();
		if (id == 'CA') {
			var newOptions = {
				'San Diego' : 'CA' ,
                'Los Angeles' : 'CA' ,
            }; 
		} 
		else if (id == 'IL') {
			var newOptions = {
				'Chicago' : 'IL' ,
                'Evanston' : 'IL' ,
            }; 
		}
		$.each(newOptions, function(text, key) {
			var option = new Option(key, text);
			$('<option>').val(key).text(text).appendTo('#userinfo_city');
		});
	});
	
	$('#btnSubmit').click(function(){
		if (validateForm()==true) displayUserInputs();   
	});
	
	function validateForm(){
		 var numberReg =  /^[0-9]+$/;
		 var phoneReg = /\d{3}-\d{3}-\d{4}$/;
		 var firstname = $('#userinfo_firstname').val();
		 var lastname = $('#userinfo_lastname').val();
		 var zip = $('#userinfo_zip').val();
		 var phone = $('#userinfo_phone').val();
		 var title = $('#userinfo_title').val();
		 var address = $('#userinfo_address').val();
		 var state = $('#userinfo_state').val();
		 var genderSel = [];
		 var languagesSel = [];
		 var countriesSel = [];
		 var success = true;
		             
		 $('.error').hide();
		 
		 var inputVal = new Array(firstname,lastname,zip,phone,title,address,state);
		 var inputMessage = new Array("First Name","Last Name","Zip","Phone No","Title","Address","State");
		 
		 if(inputVal[0] == ""){
			success=false;
			$('#userinfo_firstname').after('<span class="error"> Please enter the ' + inputMessage[0] + '</span>');
		 }
		 
		 if(inputVal[1] == ""){
			success=false;
			$('#userinfo_lastname').after('<span class="error"> Please enter the ' + inputMessage[1] + '</span>');
		 }
		 
		 if(inputVal[2] == ""){
			success=false;
			$('#userinfo_zip').after('<span class="error"> Please enter the ' + inputMessage[2] + '</span>');
		 }
		 else if (!numberReg.test(zip)){
			success=false;
			$('#userinfo_zip').after('<span class="error"> Please enter numeric in ' + inputMessage[2] + '</span>');
		 }
		 
		 if(inputVal[3] == ""){
			success=false;
			$('#userinfo_phone').after('<span class="error"> Please enter the ' + inputMessage[3] + '</span>');
		 }
		 else if (!phoneReg.test(phone)){
			success=false;
			$('#userinfo_phone').after('<span class="error"> Please enter  ' + inputMessage[3] + ' in xxx-xxx-xxxx format</span>');
		 }
		 
		 if (inputVal[4] == "none") {
			 success=false;
			 $('#userinfo_title').after('<span class="error"> Please enter the ' + inputMessage[4] + '</span>');
		 }
		
		 if(inputVal[5] == ""){
			success=false;
			$('#userinfo_address').after('<span class="error"> Please enter the ' + inputMessage[5] + '</span>');
		 }
		 
		 if (inputVal[6] == "none") {
			 success=false;
			 $('#userinfo_state').after('<span class="error"> Please enter the ' + inputMessage[6] + '</span>');
		 }
		 
		
		$('select#listBox2 option').each(function() {
			countriesSel.push($(this).val());
		});
		if (countriesSel.length <= 0) {
			success=false;
			 $('#listBox2').after('<span class="error"> Please select at least one country visited' + '</span>');
		}
		 
		$.each($("input[name='gender']:checked"), function(){            
			genderSel.push($(this).val());
		});
		
		 if (genderSel.length <= 0) {
			 success=false;
			 $('#genderValidate').after('<span class="error"> Please enter the gender' + '</span>');
		 }

		$.each($("input[name='languages']:checked"), function(){            
			languagesSel.push($(this).val());
		});
		
		 if (languagesSel.length <= 0) {
			 success=false;
			 $('#langValidate').after('<span class="error"> Please enter the gender' + '</span>');
		 }
		 
		 return success;
	}
	
	function displayUserInputs() {
		 var title = $('#userinfo_title').val();
		 var firstname = $('#userinfo_firstname').val();
		 var lastname = $('#userinfo_lastname').val();
		 var address = $('#userinfo_address').val();
		 var state = $('#userinfo_state').val();
		 var city = $('#userinfo_city').val()
		 var zip = $('#userinfo_zip').val();
		 
		 $('#resultName').html(title + " " + firstname + " "+ lastname);
		 $('#resultAddress').html(address);
		 $('#resultCityStateZip').html(city+" "+state+" "+zip);
	}

});