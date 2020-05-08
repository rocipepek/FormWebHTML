using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Fecha_Nac { get; set; }
        public string Direccion { get; set; }

        public Cliente() { }

        public Cliente(int id, string nombre, string apellido, string fecha_nac, string direccion)
        {
            this.Id = id;
            this.Nombre = nombre;
            this.Apellido = apellido;
            this.Fecha_Nac = fecha_nac;
            this.Direccion = direccion;
        }
    }

   
}
