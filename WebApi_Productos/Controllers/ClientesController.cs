﻿using Dominio;
using Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi_Productos.Controllers
{
    public class ClientesController : ApiController
    {
        // GET api/<controller>
       public IEnumerable<Cliente> Get()
       {
           return ManejoCliente.ObtenerCliente();
       }

    }
}