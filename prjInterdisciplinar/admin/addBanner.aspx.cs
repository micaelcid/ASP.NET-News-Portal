using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjInterdisciplinar.admin
{
    public partial class addBanner : System.Web.UI.Page
    {
        #region Objetos do banco

        MySqlConnection sqlConn;
        MySqlCommand sqlCmd;
        MySqlDataReader sqlRead;
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

            if (txtEmpresa.Text.Length == 0)
            {
                lblMsg.Text = "Digite o nome da empresa anunciante.";
            }
            if (txtLink.Text.Length == 0)
            {
                lblMsg.Text = "Digite o link do site";
            }
            if (!imgUpload.HasFile)
            {
                lblMsg.Text = "Selecione o GIF que será utilizado.";
            }
            if (txtAtivo.Checked == true)
            {
                cmd = "INSERT INTO BANNER (NM_EMPRESA_ANUNCIANTE_BANNER, IC_ATIVO_BANNER, DT_PUBLICACAO_BANNER, HR_PUBLICACAO_BANNER, NM_LINK_BANNER) VALUES('" + txtEmpresa.Text + "', 1, NOW(), NOW(), '" + txtLink.Text + "')";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }
            else
            {
                cmd = "INSERT INTO BANNER (NM_EMPRESA_ANUNCIANTE_BANNER, IC_ATIVO_BANNER, DT_PUBLICACAO_BANNER, HR_PUBLICACAO_BANNER, NM_LINK_BANNER) VALUES('" + txtEmpresa.Text + "', 0, NOW(), NOW(), '" + txtLink.Text + "')";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }

            cmd = "SELECT CD_BANNER FROM BANNER ORDER BY CD_BANNER DESC LIMIT 0,1";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    if(sqlRead.Read())
                    {
                        int pk = int.Parse(sqlRead[0].ToString());
                        if (System.IO.File.Exists(Request.PhysicalApplicationPath + "img/banner/" + pk.ToString() + ".gif"))
                        {
                            System.IO.File.Delete(Request.PhysicalApplicationPath + "img/banner/" + pk.ToString() + ".gif");
                            imgUpload.SaveAs(Request.PhysicalApplicationPath + "img/banner/" + pk.ToString() + ".gif");
                        }
                        else
                        {
                            imgUpload.SaveAs(Request.PhysicalApplicationPath + "img/banner/" + pk.ToString() + ".gif");
                        }
                    }
                }
                if (!sqlRead.IsClosed) { sqlRead.Close(); }
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }
            lblMsg.Text = "Banner adicionado com sucesso.";
            Response.Redirect("~/admin/publicidade.aspx");
        }
    }
}