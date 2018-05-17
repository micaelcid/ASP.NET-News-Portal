using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar
{
    public partial class categoria : System.Web.UI.Page
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
            string pk = Request.QueryString["c"]; 

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

            #region Carrega notícia recente

            cmd = "SELECT CD_NOTICIA, NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA FROM NOTICIA WHERE CD_CATEGORIA=" + pk + " ORDER BY DT_PUBLICACAO_NOTICIA DESC, HR_PUBLICACAO_NOTICIA DESC LIMIT 0,1";
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
                        cmd = "SELECT NM_CATEGORIA FROM CATEGORIA WHERE CD_CATEGORIA=\"" +pk + "\"";
                        sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                        try
                        {
                            sqlRead2 = sqlCmd2.ExecuteReader();
                            if (sqlRead2.HasRows)
                            {
                                while (sqlRead2.Read())
                                {
                                    lblRecente.Text += "<div class=\"pnlDestaque\">";
                                    lblRecente.Text += "<p class=\"categoryTitle\"><strong >RECENTE</strong></p><hr>";
                                    lblRecente.Text += "<div class=\"categoria\"><a href=\"categoria.aspx?c=" + pk + "\"><h1>" + sqlRead2[0].ToString() + "</h1></a></div>";
                                    lblRecente.Text += "<div class=\"tituloNoticia\"><h2><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                    lblRecente.Text += "" + sqlRead[1].ToString() + "</a></h2></div>";
                                    lblRecente.Text += "<div class=\"linhaNoticia\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                    lblRecente.Text += "<h4>" + sqlRead[2].ToString() + "</h4></a></div>";
                                    lblRecente.Text += "<div class=\"imgRecente\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                    lblRecente.Text += "<img src=\"img/noticias/" + sqlRead[0].ToString() + ".jpg\" width=\"100%\"></a></div></div>";
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

            #region Carrega o restante das notícias
            cmd = "SELECT CD_NOTICIA, NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA FROM NOTICIA WHERE CD_CATEGORIA=" + pk + " ORDER BY DT_PUBLICACAO_NOTICIA DESC, HR_PUBLICACAO_NOTICIA DESC LIMIT 1, 6";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    lblNoticias.Text += "<div class=\"pnlArtigos\"><p class=\"categoryTitle\" style=\"text-align:right;\">";
                    lblNoticias.Text += "<strong>SAIBA MAIS</strong></p><hr>";
                    int contador = 0;
                    while (sqlRead.Read())
                    {
                        contador++;
                        cmd = "SELECT NM_CATEGORIA FROM CATEGORIA WHERE CD_CATEGORIA="+pk+" ";
                        sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                        try
                        {
                            sqlRead2 = sqlCmd2.ExecuteReader();
                            if (sqlRead2.HasRows)
                            {

                                while (sqlRead2.Read())
                                {

                                    if (contador % 2 != 0)
                                    {
                                        lblNoticias.Text += "<div class=\"pnlArtigo fl\"><div class=\"descArtigo fl\"><div class=\"categoria\">";
                                        lblNoticias.Text += "<a href=\"categoria.aspx?c=" + pk + "\"><h1>" + sqlRead2[0].ToString() + "</h1></a></div>";
                                        lblNoticias.Text += "<div class=\"tituloNoticia\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<h3>" + sqlRead[1].ToString() + "</h3></a></div>";
                                        lblNoticias.Text += "<div class=\"linhaNoticia\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<h4>" + sqlRead[2].ToString() + "</h4></a></div></div>";
                                        lblNoticias.Text += "<div class=\"itemArtigo\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<img src=\"img/noticias/" + sqlRead[0].ToString() + ".jpg\" width=\"100%\"></a></div></div>";
                                    }
                                    else
                                    {
                                        lblNoticias.Text += "<div class=\"pnlArtigo fr\"><div class=\"descArtigo fr\"><div class=\"categoria\">";
                                        lblNoticias.Text += "<a href=\"categoria.aspx?c=" + pk + "\"><h1>" + sqlRead2[0].ToString() + "</h1></a></div>";
                                        lblNoticias.Text += "<div class=\"tituloNoticia\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<h3>" + sqlRead[1].ToString() + "</h3></a></div>";
                                        lblNoticias.Text += "<div class=\"linhaNoticia\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<h4>" + sqlRead[2].ToString() + "</h4></a></div></div>";
                                        lblNoticias.Text += "<div class=\"itemArtigo fr\"><a href=\"noticia.aspx?n=" + sqlRead[0].ToString() + "\">";
                                        lblNoticias.Text += "<img src=\"img/noticias/" + sqlRead[0].ToString() + ".jpg\" width=\"100%\"></a></div></div>";
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
                    lblNoticias.Text += "</div><div class=\"cls\"></div>";
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