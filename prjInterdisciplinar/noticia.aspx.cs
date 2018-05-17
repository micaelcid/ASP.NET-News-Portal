using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjInterdisciplinar
{
    public partial class noticia : System.Web.UI.Page
    {
        #region Objetos do banco

        MySqlConnection sqlConn;
        MySqlConnection sqlConn2;
        MySqlConnection sqlConn3;
        MySqlConnection sqlConn4;
        MySqlCommand sqlCmd;
        MySqlCommand sqlCmd2;
        MySqlCommand sqlCmd3;
        MySqlCommand sqlCmd4;
        MySqlDataReader sqlRead;
        MySqlDataReader sqlRead2;
        MySqlDataReader sqlRead3;
        MySqlDataReader sqlRead4;

        string cmd = "";
        string conn = "SERVER=localhost;UID=root;PASSWORD=root;DATABASE=db_senso";

        #endregion

        protected void Page_Load(object sender, EventArgs e)
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

            #region Carrega notícia

            string pk = Request.QueryString["n"];

            cmd = "SELECT CD_CATEGORIA, NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA, DS_TEXTO_NOTICIA, date_format(DT_PUBLICACAO_NOTICIA,'%d/%m/%Y'), date_format(HR_PUBLICACAO_NOTICIA, '%H:%i') FROM NOTICIA WHERE CD_NOTICIA=" + pk + "";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
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

                        cmd = "SELECT CD_AUTOR FROM AUTOR_NOTICIA WHERE CD_NOTICIA=" + pk + "";
                        sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                        try
                        {
                            sqlRead2 = sqlCmd2.ExecuteReader();
                            if (sqlRead2.HasRows)
                            {
                                if (sqlRead2.Read())
                                {
                                    sqlConn3 = new MySqlConnection(conn);
                                    try
                                    {
                                        sqlConn3.Open();
                                    }
                                    catch
                                    {
                                        Response.Redirect("~/erro.aspx");
                                    }
                                    cmd = "SELECT NM_AUTOR FROM AUTOR WHERE CD_AUTOR=" + sqlRead2[0].ToString() + "";
                                    sqlCmd3 = new MySqlCommand(cmd, sqlConn3);
                                    try
                                    {
                                        sqlRead3 = sqlCmd3.ExecuteReader();
                                        if (sqlRead3.HasRows)
                                        {
                                            if (sqlRead3.Read())
                                            {
                                                sqlConn4 = new MySqlConnection(conn);
                                                try
                                                {
                                                    sqlConn4.Open();
                                                }
                                                catch
                                                {
                                                    Response.Redirect("~/erro.aspx");
                                                }
                                                cmd = "SELECT NM_CATEGORIA FROM CATEGORIA WHERE CD_CATEGORIA=" + sqlRead[0].ToString() + "";
                                                sqlCmd4 = new MySqlCommand(cmd, sqlConn4);
                                                try
                                                {
                                                    sqlRead4 = sqlCmd4.ExecuteReader();
                                                    if (sqlRead4.HasRows)
                                                    {
                                                        if (sqlRead4.Read())
                                                        {
                                                            lblNoticia.Text += "<p class=\"categoryTitle\"><strong>" + sqlRead4[0].ToString() + "</strong></p><hr>";
                                                            lblNoticia.Text += "<h5>" + sqlRead[1].ToString() + "</h5>";
                                                            lblNoticia.Text += "<h6>" + sqlRead[2].ToString() + "<h6>";
                                                            lblNoticia.Text += "<h4><strong>" + sqlRead3[0].ToString() + "</strong></h4>";
                                                            lblNoticia.Text += "<h4>" + sqlRead[4].ToString() + " | " + sqlRead[5].ToString() + "</h4>";
                                                            lblNoticia.Text += "<div class=\"imgNoticia\"><img src=\"img/noticias/" + pk + ".jpg\" width=\"100%\"></div>";
                                                            lblNoticia.Text += "<h6>" + sqlRead[3].ToString()+ "</h6>";
                                                        }

                                                    }
                                                    if (!sqlRead4.IsClosed) { sqlRead4.Close(); }
                                                }
                                                catch
                                                {
                                                    Response.Redirect("~/erro.aspx");
                                                }
                                            }
                                        }
                                        if (!sqlRead3.IsClosed) { sqlRead3.Close(); }
                                    }
                                    catch
                                    {
                                        Response.Redirect("~/erro.aspx");
                                    }
                                }
                            }
                            if (!sqlRead2.IsClosed) { sqlRead2.Close(); }
                        }
                        catch
                        {
                            Response.Redirect("~/erro.aspx");
                        }

                    }
                }
                if (!sqlRead.IsClosed) { sqlRead.Close(); }
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }

            #endregion
        }
    }
}