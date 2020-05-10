using Dominio;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    public class DatoProducto
    {
        public static void GuardarNuevo(Producto producto)
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            SqlCommand comando = new SqlCommand("AddProducto", conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;

            comando.Parameters.AddWithValue("@Nombre", producto.Nombre);
            comando.Parameters.AddWithValue("@Descripcion", producto.Descripcion);
            comando.Parameters.AddWithValue("@Precio", producto.Precio);
            comando.Parameters.AddWithValue("@Stock", producto.Stock);

            SqlParameter outPutParameter = new SqlParameter();
            outPutParameter.ParameterName = "@IDProducto";
            outPutParameter.SqlDbType = System.Data.SqlDbType.Int;
            outPutParameter.Direction = System.Data.ParameterDirection.Output;
            comando.Parameters.Add(outPutParameter);

            comando.ExecuteNonQuery();
            conexion.Close();
        }

        public static void Modificar(Producto producto)
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            SqlCommand comando = new SqlCommand("UpdateProductos", conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;

            comando.Parameters.AddWithValue("@Nombre", producto.Nombre);
            comando.Parameters.AddWithValue("@Descripcion", producto.Descripcion);
            comando.Parameters.AddWithValue("@Precio", producto.Precio);
            comando.Parameters.AddWithValue("@Stock", producto.Stock);
            comando.Parameters.AddWithValue("@IDProducto", producto.Id);

            comando.ExecuteNonQuery();
            conexion.Close();

        }

        public static List<Producto> Obtener()
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            List<Producto> lista = new List<Producto>();
            String consulta = "GetProductos";
            SqlCommand comando = new SqlCommand(consulta, conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            SqlDataReader reader = comando.ExecuteReader();

            while (reader.Read())
            {
                Producto producto = new Producto();
                producto.Id = reader.GetInt32(0);
                producto.Nombre = reader.GetString(1);
                producto.Descripcion = reader.GetString(2);
                producto.Precio = reader.GetDouble(3);
                producto.Stock = reader.GetString(4);

                lista.Add(producto);
            }
            conexion.Close();

            return lista;
        }

        public static void Eliminar(int Id)
        {
            SqlConnection conexion = BdComun.EstablecerConexion();
            //String consulta = "DELETE from productos where IDProducto= '" + producto.Id + "'";
            String consulta = "DeleteProducto";
            SqlCommand comando = new SqlCommand(consulta, conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;

            comando.Parameters.AddWithValue("@IDProducto", Id);
            comando.ExecuteNonQuery();
            conexion.Close();

        }
    }
}

