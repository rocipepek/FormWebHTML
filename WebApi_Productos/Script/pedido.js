$(function () {
    MostrarSelectProducto();
    MostrarSelectCliente();

    $("#btnAgregar").click(function () {

        guardarPedido();
        
    });

});

function construirSelectProducto(data) {
    var div = $('#cmbProducto');
    div.html("");

    var row = $('<select class="custom-select mr-sm-2" "></select >');
    var option = $('<option hidden selected>Seleccione un producto</option>');
    row.append(option);
    for (d in data) {
        row.append($('<option value=' + data[d].Id +'>' + data[d].Nombre+ ' </option>'));
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

function construirSelectCliente(data) {
    var div = $('#cmbCliente');
    div.html("");

    var row = $('<select class="custom-select mr-sm-2" "></select >');
    var option = $('<option hidden selected>Seleccione un cliente</option>');
    row.append(option);
    for (d in data) {
        row.append($('<option value='+ data[d].Id +'>' + data[d].Nombre + ' </option>'));
    }
    div.append(row);

}

function MostrarSelectCliente() {
    var data = ajaxGETCliente();
    construirSelectCliente(data);
}

function ajaxGETCliente() {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/clientes',
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
function guardarPedido() {
    ajaxPOSTPedido();
    //actualizarGrilla();
    //restablecer();
}
function agregarPedido(){
    var pedido = {};
    pedido.IdCliente = $('#cmbCliente option:selected').val();
    pedido.IdProducto = $('#cmbProducto option:selected').val();
    pedido.Cantidad = $('#txtCantidad').val();
    
    return pedido;
}

function ajaxPOSTPedido() {
    var result;
    var obj = agregarPedido();

    $.ajax({
        url: 'https://localhost:44305/api/pedido',
        type: 'POST',
        async: false,
        data: { "IdPedido": obj.IdPedido, "IdCliente": obj.IdCliente, "IdProducto": obj.IdProducto, "Cantidad": obj.Cantidad }
    }).done(function (data) {
        result = data;
    }).error(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });

    return result;
}