using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjPortal.admin
{
    public partial class ModeloAdmin : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Cookies["usuario"] == null)
            {
                Response.Redirect("~/admin/login.aspx");
            }
            string nome = Request.Cookies["usuario"]["nome"];
            lblLogado.Text = nome;
          
        }
    }
}