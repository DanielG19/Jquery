
$(() => {
    //For Viewing Table
    $("#btnViewNotes").click(function(){
        $.ajax({
            url: `http://localhost:3000/notes`,
            contentType: "application/json",
            dataType: 'json',
            type: 'get',
            success: function (result) {
                //$('table').empty();
                result.forEach(element => {
                    let row = '<tr>'+`<td >` + element.title + '</td>' +
                    `<td>` + element.content + '</td>' + `<td>`+ `<button onclick="RemoveAnimal('${element._id}')">Delete</button>` + 
                    `<button onclick="UpdateAnimal('${element._id}')">Edit</button>` + '</td>' + '</tr>';

                    $('table').append(row);
                    
                });

                
            },
            error: function (result) {
                console.log("La llamada no se pudo completar")

            }
        });
    });

    //For adding Notes.
    $("#btnAddNote").click(function(){
        $.ajax({
            method: "POST",
            url: `http://localhost:3000/notes`,
            
            data: {

                title: $("#txtTitleInsert").val(),
                content: $("#txtContentInsert").val()
            },
            success: function(){
                alert("Saved Successfully");
            },
            error: function (result) {
                console.log("La llamada no se pudo completar")

            }
        });
    });

    //For Updating Notes
    $("#btnUpdateNote").click(function() {
        let id = $("#txtIdUpdate").val()
        console.log(id);
        $.ajax({
            method: "PUT",
            url: `http://localhost:3000/notes/${id}`,
            
            data: {

                title: $("#txtTitleUpdate").val(),
                content: $("#txtContentUpdate").val()
            },
            success: function(){
                alert("Updated Successfully");
            },
            error: function (result) {
                alert("La llamada no se pudo completar");
                console.log("La llamada no se pudo completar")
            }
        });
    });

})
//Function for Updating
function UpdateAnimal(id){
    $("#txtIdUpdate").val(id);
}

//Function for Deleting
    //For Deleting Notes.
    function RemoveAnimal(id){
        //console.log(id);
        $.ajax({
            method: "DELETE",
            url: `http://localhost:3000/notes/${id}`,
            
            success: function(){
                alert("Deleted Successfully");
            },
            error: function (result) {
                console.log("La llamada no se pudo completar")

            }
        });
    }



