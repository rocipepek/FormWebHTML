using Dominio;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatoCliente
    {
        public static List<Cliente> Obtener()
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            List<Cliente> lista = new List<Cliente>();

            String consulta = "GetClientes";
            SqlCommand comando = new SqlCommand(consulta, conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            SqlDataReader reader = comando.ExecuteReader();

            while (reader.Read())
            {
                Cliente cliente = new Cliente();
                cliente.Id = reader.GetInt32(0);
                cliente.Nombre = reader.GetString(1);
                cliente.Apellido = reader.GetString(2);
                cliente.Fecha_Nac = reader.GetString(3);
                cliente.Direccion = reader.GetString(4);
              
                lista.Add(cliente);
            }
            conexion.Close();

            return lista;
        }
    }
}
