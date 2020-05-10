$(function () {
    MostrarSelectProducto();
    MostrarSelectCliente();
    actualizarGrilla();
    
    $("#btnAgregar").click(function () {
        guardarPedido();
    });

});

function construirSelectProducto(data) {
    var div = $('#cmbProducto');
    div.html("");

    var row = $('<select class="custom-select mr-sm-2" "></select >');
    var option = $('<option value="0" hidden selected>Seleccione un producto</option>');
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
    var option = $('<option value="0" hidden selected>Seleccione un cliente</option>');
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
    actualizarGrilla();
    limpiarControles();
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
    }).fail(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });

    return result;
}

function ajaxGETPedido() {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/pedido',
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

function actualizarGrilla(){
    var data = ajaxGETPedido();
    data.map(item => item.Precio = item.Precio * item.Cantidad)
    construirGrilla(data, "Combo");
}

function construirGrilla(data, opcion) {
    if (opcion === "Combo") {
        var grd = $('#gridCombo');
        grd.html("");
    }
    else {
        var grd = $('#gridCliente');
        grd.html("");
    }
   
    var tbl = $('<table class="table table-striped table-bordered table-hover table-sm "></table>');


    var header = $('<thead></thead>');
    var tr = $('<tr class="bg-primary text-light "></tr>');
    tr.append('<th class="text-center d-none">Id Cliente</th>');
    tr.append('<th class="text-center">Nombre y Apellido</th>');
    //tr.append('<th class="text-center">Apellido</th>');
    tr.append('<th class="text-center">Producto</th>');
    tr.append('<th class="text-center">Cantidad</th>');
    tr.append('<th class="text-center">Precio Total</th>');

    tbl.append(header);
    header.append(tr);

    var body = $('<tbody></tbody>');

    for (d in data) {
        var row = $('<tr class="jqClickeable"></tr>');
        row.append('<td class="text-center d-none">' + data[d].IdCliente + '</td>');
        row.append('<td class="text-center">' + data[d].Nombre + '</td>');
        //row.append('<td class="text-center">' + data[d].Apellido + '</td>');
        row.append('<td class="text-center">' + data[d].Producto + '</td>');
        row.append('<td class="text-center">' + data[d].Cantidad + '</td>');
        row.append('<td class="text-center">' + "$" + data[d].Precio + '</td>');

        tbl.append(body);
        body.append(row);

    }
    grd.append(tbl);
    $('.jqClickeable').click(function () { mostrarCliente($(this)); });

}

function limpiarControles() {
    //$('#cmbCliente').val(0);
   
    //$('#cmbProducto').val(0) ;
    $('#txtCantidad').val(0);
}

function mostrarCliente(elem) {

    var id_cliente = elem.children().eq(0).text();
    var data = ajaxGETPedidoCliente(id_cliente);
    construirGrilla(data, "Cliente");
}

function ajaxGETPedidoCliente(id_cliente) {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/pedido/' + id_cliente,
        type: 'GET',
        async: false
    }).done(function (data) {
        result = data;
    }).fail(function (xhr, status, error) {
        alert("Error para obtener api de un cliente");
        var s = status;
        var e = error;
    });
    return result;
}