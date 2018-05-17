using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class addAutor : System.Web.UI.Page
    {
        #region Objetos do banco

        MySqlConnection sqlConn;
        MySqlCommand sqlCmd;
        string cmd = "";
        string conn = "SERVER=localhost;UID=root;PASSWORD=root;DATABASE=db_senso";

        #endregion

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnAdicionar_Click(object sender, EventArgs e)
        {
            #region Conexão com o banco

            sqlConn = new MySqlConnection(conn);
            try
            {
                sqlConn.Open();
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }

            #endregion   

            if (txtAutor.Text.Length > 3)
            {
                cmd = "INSERT INTO AUTOR(NM_AUTOR) VALUES('" + txtAutor.Text + "')";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
                Response.Redirect("addNoticia.aspx");
            }
            else
            {
                if (txtAutor.Text.Length > 45)
                {
                    lblMsg.Text = "O nome não pode conter mais que 45 caracteres.";
                }
                else
                {
                    lblMsg.Text = "Digite o nome do autor devidamente";
                }
            }
        }
    }
}