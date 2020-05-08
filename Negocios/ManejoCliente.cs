using System;
using Datos;
using Dominio;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocios
{
    public class ManejoCliente
    {
        public static List<Cliente> ObtenerCliente()
        {
            return DatoCliente.Obtener();

        }
    }
}
