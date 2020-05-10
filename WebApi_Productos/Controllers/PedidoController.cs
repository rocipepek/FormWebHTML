using Dominio;
using Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi_Productos.Controllers
{
    public class PedidoController : ApiController
    {


        // POST api/<controller>
        public void Post([FromBody]Pedido pedido)
        {
            ManejoPedido.GuardarPedido(pedido);
        }
        public IEnumerable<Pedido> Get()
        {
            return ManejoPedido.ObtenerPedido();
        }
    }

       
}