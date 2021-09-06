$(() => {

    $.ajax({
        url: `https://jsonplaceholder.typicode.com/todos`,
        contentType: "application/json",
        dataType: 'json',
        type: 'get',
        success: function (result) {
            result.forEach(element => {
                let row = '<tr>'+`<td >` + element.id + '</td>'+`<td >` + element.title + '</td>' +
                `<td>` + element.completed + '</td>' + '</tr>'
                $('table').append(row);
            });

            $('td:contains(true)').parent().addClass('completed');
            $('tr:contains(false)').addClass('notcompleted');



        },
        error: function (result) {
            console.log("La llamada no se pudo completar")

        }

    });

});

