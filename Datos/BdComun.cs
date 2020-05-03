using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos
{
    class BdComun
    {
        public static SqlConnection EstablecerConexion()
        {
            SqlConnection conectar = new SqlConnection("Data Source=ROCIO\\ROCIO;Initial Catalog=Taller;Integrated Security=true;");
            conectar.Open();
            return conectar;
        }

    }
}

