using Datos;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Negocios
{
    public class ManejoProducto
    {
        public static void GuardarProducto(Producto producto)
        {

            if ((producto.Id).Equals(0))
            {
                    DatoProducto.GuardarNuevo(producto);
            }
            else
            {
                DatoProducto.Modificar(producto);  
            }
        }

        public static void EliminarProducto(int Id)
        {
           DatoProducto.Eliminar(Id);
        }

      
        public static List<Producto> ObtenerProducto()
        {
            return DatoProducto.Obtener();
            
        }
    }
}

