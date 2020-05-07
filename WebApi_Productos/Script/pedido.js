$(function () {
    MostrarSelectProducto();

    $("#btnAgregar").click(function () {
        //agregarCombo();
        alert("Combo Agregado");

    });

});

function construirSelectProducto(data) {
    var div = $('#cmbProducto');
    div.html("");

    var row = $('<select class="custom-select mr-sm-2" "></select >');
    var option = $('<option hidden selected>Seleccione un producto</option>');
    row.append(option);
    for (d in data) {
        row.append($('<option>' + data[d].Id + " " + data[d].Nombre+ ' </option>'));
    }
    div.append(row);

}

function MostrarSelectProducto() {
    var data = ajaxGETProducto();
    construirSelectProducto(data);
}

function ajaxGETProducto() {
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

