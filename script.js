const url = "http://localhost:8080/api/student"
$.ajax({
    type: "get",
    url: url,
    dataType: "json",
    success: function (response) {
        const data = response.data
        $.each(data, function (indexInArray, valueOfElement) { 
            console.log(indexInArray, valueOfElement.name); 
            $("#li").val(valueOfElement.name)
        });
                
    }
});