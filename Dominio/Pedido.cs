using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Pedido
    {
        public int IdPedido { get; set; }
        public int IdCliente { get; set; }
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string Producto { get; set; }
        public int Cantidad { get; set; }
        public double Precio { get; set; }


        public Pedido() { }

        public Pedido(int idpedido, int idcliente, int idproducto,int cantidad)
        {
            this.IdPedido = idpedido;
            this.IdCliente = idcliente;
            this.IdProducto = idproducto;
            this.Cantidad = cantidad;
            
        }
    }
}
