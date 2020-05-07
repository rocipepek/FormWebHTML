//Lo que se ejecuta apenas termine de cargar la pagina
//$(document).ready(function () {}

$(function () {
    actualizarGrilla();

    $("#save").click(function () {
        if (validar() === true) {
            guardarProducto();
        } else {
            alert("Se deben completar todos los campos");
        }
    });

    $("#cancel").click(function () {
        limpiarControles();
    });

    $("#delete").click(function () {
        id = $('#id').val();
        if (id != 0) {
            borrarProducto(id);
        } else {
            alert('Debe seleccionar un producto.');
        }
        
    });
    //Establece el boton a Nuevo.
    $("#save").val("Nuevo");

    
});

function validar() {

    var validacion = true;

    if ($('#name').val() == "") {
        validacion = true;
    }
    
    if ($('#description').val() == "") {
        validacion = false;
    }

    if ($('#price').val() < 0) {
        validacion = false;
    }

    if ($('#stock').val() < 0) {
        validacion = false;
    }

    return validacion;
}

function actualizarGrilla() {
    var data = ajaxGET();
    construirGrilla(data);
}

function ajaxGET() {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/productos',
        type: 'GET',
        async: false
    }).done(function (data) {
        result = data;
    }).fail(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });
    return result; 
}

function ajaxPOST() {
    var result;
    var obj = obtenerProducto();

    $.ajax({
        url: 'https://localhost:44305/api/productos',
        type: 'POST',
        async: false,
        data: { "Id": obj.Id, "Nombre": obj.Nombre, "Descripcion": obj.Descripcion, "Precio": obj.Precio, "Stock": obj.Stock }
    }).done(function (data) {
        result = data;
        alert('Elemento insertado')
    }).fail(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });

    return result;
}

function ajaxPUT() {
    var result;
    var obj = obtenerProducto();

    $.ajax({
        url: 'https://localhost:44305/api/productos',
        type: 'PUT',
        async: false,
        data: obj
    }).done(function (data) {
        result = data;
        alert('Elemento actualizado')
    }).fail(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });

    return result;
}

function ajaxDELETE(id) {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/productos/' + id,
        type: 'DELETE',
        async: false
    }).done(function (data) {
        result = data;
        alert('Elemento borrado')
    }).fail(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });

    return result;
}

function construirGrilla(data) {
    var grd = $('#gridProductos');
    grd.html("");
    var tbl = $('<table class="table table-striped table-bordered table-hover table-sm"></table>');


    var header = $('<thead class="thead-light"></thead>');
    var tr = $('<tr></tr>');
    tr.append('<th class="text-center">Id</th>');
    tr.append('<th class="text-center">Nombre</th>');
    tr.append('<th class="text-center">Descripcion</th>');
    tr.append('<th class="text-center">Precio</th>');
    tr.append('<th class="text-center">Stock</th>');

    tbl.append(header);
    header.append(tr);

    var body = $('<tbody></tbody>');

    for (d in data) {
        var row = $('<tr class="jqClickeable"></tr>');
        row.append('<td class="text-center">' + data[d].Id + '</td>');
        row.append('<td class="text-center">' + data[d].Nombre + '</td>');
        row.append('<td class="text-center">' + data[d].Descripcion + '</td>');
        row.append('<td class="text-center">' + data[d].Precio + '</td>');
        row.append('<td class="text-center">' + data[d].Stock + '</td>');

        tbl.append(body);
        body.append(row);
        
    }

    grd.append(tbl);
    $('.jqClickeable').click(function () { mostrarElemento($(this));});

}

function mostrarElemento(elem) {
    $('#id').val(elem.children().eq(0).text());
    $('#name').val(elem.children().eq(1).text());
    $('#description').val(elem.children().eq(2).text());
    $('#price').val(elem.children().eq(3).text());
    $('#stock').val(elem.children().eq(4).text());

    $('#save').val("Modificar");
}



function obtenerProducto() {
    var producto = {};
    producto.Id = $('#id').val();
    producto.Nombre = $('#name').val();
    producto.Descripcion = $('#description').val();
    producto.Precio = $('#price').val();
    producto.Stock = $('#stock').val();

    return producto;
}

function borrarProducto(id) {
    ajaxDELETE(id);
    actualizarGrilla();
    limpiarControles();
}

function guardarProducto() {
    var id = $('#id').val();
    if (id == 0) {
        ajaxPOST();
    }
    else {
        ajaxPUT();
    }
    actualizarGrilla();
    limpiarControles();
}

function limpiarControles() {
    $('#id').val(0);
    $('#name').val("");
    $('#description').val("");
    $('#price').val("");
    $('#stock').val("");

    $('#save').val("Nuevo");

}