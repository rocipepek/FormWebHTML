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
    public class ProductosController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Producto> Get()
        {
            return ManejoProducto.ObtenerProducto();
        }

        // GET api/<controller>/5
        /*
        public string Get(int id)
        {
            return "value";
        }
        */

        // POST api/<controller>
        public void Post([FromBody]Producto producto)
        {
            ManejoProducto.GuardarProducto(producto);
        }

        // PUT api/<controller>/5
        public void Put([FromBody]Producto producto)
        {
            ManejoProducto.GuardarProducto(producto);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            ManejoProducto.EliminarProducto(id);
        }
    }
}