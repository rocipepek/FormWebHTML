using Datos;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocios
{
    public class ManejoPedido
    {
        public static void GuardarPedido(Pedido pedido)
        {
                DatoPedido.GuardarNuevo(pedido);
        }

        public static List<Pedido> ObtenerPedido()
        {
            return DatoPedido.Obtener();

        }

        public static List<Pedido> ObtenerPedidoCliente(int id)
        {
            return DatoPedido.ObtenerPedidoCliente(id);
        }
    }
}
