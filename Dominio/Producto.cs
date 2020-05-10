using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Producto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public double Precio { get; set; }
        public string Stock { get; set; }

        public Producto() { }

        public Producto(int id, string nombre, string desc, double precio, string stock)
        {
            this.Id = id;
            this.Nombre = nombre;
            this.Descripcion = desc;
            this.Precio = precio;
            this.Stock = stock;
        }
    }
}

