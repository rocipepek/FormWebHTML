using Dominio;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatoPedido
    {
        public static void GuardarNuevo(Pedido pedido)
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            SqlCommand comando = new SqlCommand("AddPedido", conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;

            comando.Parameters.AddWithValue("@IdCliente", pedido.IdCliente);
            comando.Parameters.AddWithValue("@IdProducto", pedido.IdProducto);
            comando.Parameters.AddWithValue("@Cantidad", pedido.Cantidad);
           

            SqlParameter outPutParameter = new SqlParameter();
            outPutParameter.ParameterName = "@IDPedido";
            outPutParameter.SqlDbType = System.Data.SqlDbType.Int;
            outPutParameter.Direction = System.Data.ParameterDirection.Output;
            comando.Parameters.Add(outPutParameter);

            comando.ExecuteNonQuery();
            conexion.Close();
        }
    }
}
