using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class delNoticia : System.Web.UI.Page
    {
        #region Objetos do banco

        MySqlConnection sqlConn;
        MySqlConnection sqlConn2;
        MySqlCommand sqlCmd;
        MySqlCommand sqlCmd2;
        MySqlDataReader sqlRead;
        MySqlDataReader sqlRead2;
        string cmd = "";
        string conn = "SERVER=localhost;UID=root;PASSWORD=root;DATABASE=db_senso";
        #endregion

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
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

                cmd = "SELECT CD_NOTICIA, SUBSTRING(NM_TITULO_NOTICIA, 1, 20),SUBSTRING(NM_LINHA_FINA_NOTICIA, 1, 40) ,SUBSTRING(DS_TEXTO_NOTICIA, 1, 60) , date_format(DT_PUBLICACAO_NOTICIA, '%d/%m/%Y'), HR_PUBLICACAO_NOTICIA, IC_DESTAQUE_NOTICIA, CD_CATEGORIA from noticia";
                cmd += " WHERE  CD_NOTICIA=" + Request.QueryString["n"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        lblNoticia.Text += "<table>";
                        lblNoticia.Text += "<tr>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Categoria</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Título</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Linha fina</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Texto</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Data</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Hora</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Destaque</td>";
                        lblNoticia.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Imagem</td>";
                        lblNoticia.Text += "</tr>";

                        while (sqlRead.Read())
                        {
                            sqlConn2 = new MySqlConnection(conn);
                            try
                            {
                                sqlConn2.Open();
                            }
                            catch
                            {
                                Response.Redirect("~/erro.aspx");
                            }
                            cmd = "SELECT NM_CATEGORIA FROM CATEGORIA WHERE CD_CATEGORIA=" + sqlRead[7].ToString() + "";
                            sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                            try
                            {
                                sqlRead2 = sqlCmd2.ExecuteReader();
                                if (sqlRead2.HasRows)
                                {
                                    if (sqlRead2.Read())
                                    {
                                        lblNoticia.Text += "<tr>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead2[0].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[1].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[2].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[3].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[4].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[5].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[6].ToString() + "</td>";
                                        lblNoticia.Text += "<td style='background-color:#e9ebee;'>img/noticias/" + sqlRead[0].ToString() + ".jpg</td>";
                                        lblNoticia.Text += "</tr>";
                                    }
                                }
                                if (!sqlRead2.IsClosed) { sqlRead2.Close(); }
                            }
                            catch
                            {
                                Response.Redirect("~/erro.aspx");
                            }
                        }
                        lblNoticia.Text += "</table>";
                    }
                    if (!sqlRead.IsClosed) { sqlRead.Close(); }
                }
                catch
                {
                    Response.Redirect("~/erro.aspx");
                }
                sqlConn.Close();
                sqlConn2.Close();
            }
        }

        protected void btnExcluir_Click(object sender, EventArgs e)
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

            cmd = "DELETE FROM AUTOR_NOTICIA WHERE CD_NOTICIA=" + Request.QueryString["n"].ToString();
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlCmd.ExecuteNonQuery();
            cmd = "DELETE FROM NOTICIA WHERE CD_NOTICIA=" + Request.QueryString["n"].ToString();
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlCmd.ExecuteNonQuery();
            if(System.IO.File.Exists(Request.ApplicationPath + "img/noticias/"+Request.QueryString["n"].ToString()+".jpg"))
            {
                System.IO.File.Delete(Request.ApplicationPath + "img/noticias/" + Request.QueryString["n"].ToString() + ".jpg");
            }
            Response.Redirect("~/admin/noticias.aspx");
        }
    }
}