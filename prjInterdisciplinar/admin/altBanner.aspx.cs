using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class altBanner : System.Web.UI.Page
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
            if (!Page.IsPostBack)
            {
                txtEmpresa.Text = "";
                txtLink.Text = "";

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

                cmd = "SELECT * FROM BANNER WHERE CD_BANNER="+Request.QueryString["b"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        if (sqlRead.Read())
                        {  
                            txtEmpresa.Text = sqlRead[1].ToString();
                            txtLink.Text = sqlRead[5].ToString();
                            if(sqlRead[3].ToString() == "1")
                            {
                                txtAtivo.Checked = true;
                            }
                        }
                    }
                    if (!sqlRead.IsClosed) { sqlRead.Close(); }
                }
                catch
                {
                    Response.Redirect("~/erro.aspx");
                }
              
            }         
        }

        protected void btnAlterar_Click(object sender, EventArgs e)
        {
            #region Declaração de variáveis

            string empresa = txtEmpresa.Text;
            string link = txtLink.Text;

            #endregion

            #region Validação dos campos

            if (txtEmpresa.Text == null)
            {
                lblMsg.Text = "Digite o nome da empresa.";
            }
            if (txtLink.Text == null)
            {
                lblMsg.Text = "Digite o link da página da empresa.";
            }

            #endregion

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

            if (txtAtivo.Checked == true)
            {
                cmd = "UPDATE BANNER SET NM_EMPRESA_ANUNCIANTE_BANNER='" + empresa + "', IC_ATIVO_BANNER=1, DT_PUBLICACAO_BANNER=NOW(), HR_PUBLICACAO_BANNER=NOW(), NM_LINK_BANNER='"+link+"' WHERE CD_BANNER=" + Request.QueryString["b"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }
            else
            {
                cmd = "UPDATE BANNER SET NM_EMPRESA_ANUNCIANTE_BANNER='" + empresa + "', IC_ATIVO_BANNER=0, DT_PUBLICACAO_BANNER=NOW(), HR_PUBLICACAO_BANNER=NOW(), NM_LINK_BANNER='" + link + "' WHERE CD_BANNER=" + Request.QueryString["b"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }

            if (imgUpload.PostedFile != null)
            {
                string TipoArq = imgUpload.PostedFile.ContentType;
                int TamanhoArq = imgUpload.PostedFile.ContentLength;
                if (TamanhoArq <= 0)
                    lblMsg.Text = "A tentativa de upload do arquivo falhou!";
                else
                {
                    if (System.IO.File.Exists(Request.PhysicalApplicationPath + @"img\banner\" + Request.QueryString["b"].ToString() + ".gif"))
                    {
                        System.IO.File.Delete(Request.PhysicalApplicationPath + @"img\banner\" + Request.QueryString["b"].ToString() + ".gif");
                        imgUpload.PostedFile.SaveAs(Request.PhysicalApplicationPath + @"img\banner\" + Request.QueryString["b"].ToString() + ".gif");
                    }
                    
                }
            }

            lblMsg.Text = "Banner alterado com sucesso.";
        }

    }
}