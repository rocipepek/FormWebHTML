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

        public static List<Pedido> Obtener()
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            List<Pedido> lista = new List<Pedido>();
            String consulta = "GetPedidos";
            SqlCommand comando = new SqlCommand(consulta, conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            SqlDataReader reader = comando.ExecuteReader();

            while (reader.Read())
            {
                Pedido pedido = new Pedido();
                pedido.IdCliente = reader.GetInt32(0);
                pedido.Nombre = reader.GetString(1);
                pedido.Producto = reader.GetString(2);
                pedido.Cantidad = reader.GetInt32(3);
                pedido.Precio = reader.GetDouble(4);


                lista.Add(pedido);
            }
            conexion.Close();

            return lista;
        }

        public static List<Pedido> ObtenerPedidoCliente(int id)
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            List<Pedido> lista = new List<Pedido>();
            String consulta = "GetPedidosClientes";
            SqlCommand comando = new SqlCommand(consulta, conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@IdCliente", id);

            SqlDataReader reader = comando.ExecuteReader();

            while (reader.Read())
            {
                Pedido pedido = new Pedido();
                pedido.IdCliente = reader.GetInt32(0);
                pedido.Nombre = reader.GetString(1);
                pedido.Producto = reader.GetString(2);
                pedido.Cantidad = reader.GetInt32(3);
                pedido.Precio = reader.GetDouble(4);


                lista.Add(pedido);
            }
            conexion.Close();
            return lista;
        }
    }
}
