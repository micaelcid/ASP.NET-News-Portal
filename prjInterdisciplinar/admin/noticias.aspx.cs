using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjInterdisciplinar.admin
{
    public partial class noticias : System.Web.UI.Page
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
           
        }

        protected void btnProcurar_Click(object sender, EventArgs e)
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
            lblNoticias.Text = "";
            lblQtd.Text = "";
            cmd = "SELECT CD_NOTICIA, SUBSTRING(NM_TITULO_NOTICIA, 1, 20),SUBSTRING(NM_LINHA_FINA_NOTICIA, 1, 40) ,SUBSTRING(DS_TEXTO_NOTICIA, 1, 60) , date_format(DT_PUBLICACAO_NOTICIA, '%d/%m/%Y'), date_format(HR_PUBLICACAO_NOTICIA, '%H:%i' ), IC_DESTAQUE_NOTICIA, CD_CATEGORIA from noticia";
            cmd += " WHERE  DS_TEXTO_NOTICIA LIKE '%"+txtFiltro.Text+"%'";
            cmd += " OR NM_TITULO_NOTICIA LIKE '%" + txtFiltro.Text + "%'";
            cmd += " OR NM_LINHA_FINA_NOTICIA LIKE '%" + txtFiltro.Text + "%' ORDER BY CD_NOTICIA DESC";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                int i = 0;
                sqlRead = sqlCmd.ExecuteReader();
                if(sqlRead.HasRows)
                {
                    lblNoticias.Text += "<table>";
                    lblNoticias.Text += "<tr>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Categoria</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Título</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Linha fina</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Texto</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Data</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Hora</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Destaque</td>";
                    lblNoticias.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Imagem</td>";
                    lblNoticias.Text += "</tr>";

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
                                    i++;
                                    if (i % 2 != 0)
                                    {
                                        lblNoticias.Text += "<tr>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead2[0].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[1].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[2].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[3].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[4].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[5].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[6].ToString() + "</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'>img/noticias/" + sqlRead[0].ToString() + ".jpg</td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'><a href='altNoticia.aspx?n=" + sqlRead[0].ToString() + "'><img src='images/edit.png'></a></td>";
                                        lblNoticias.Text += "<td style='background-color:#e9ebee;'><a href='delNoticia.aspx?n=" + sqlRead[0].ToString() + "'><img src='images/delete.png'></a></td>";
                                        lblNoticias.Text += "</tr>";
                                    }
                                    else
                                    {
                                        lblNoticias.Text += "<tr>";
                                        lblNoticias.Text += "<td>" + sqlRead2[0].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[1].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[2].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[3].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[4].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[5].ToString() + "</td>";
                                        lblNoticias.Text += "<td>" + sqlRead[6].ToString() + "</td>";
                                        lblNoticias.Text += "<td>img/noticias/" + sqlRead[0].ToString() + ".jpg</td>";
                                        lblNoticias.Text += "<td><a href='altNoticia.aspx?n=" + sqlRead[0].ToString() + "'><img src='images/edit.png'></a></td>";
                                        lblNoticias.Text += "<td><a href='delNoticia.aspx?n=" + sqlRead[0].ToString() + "'><img src='images/delete.png'></a></td>";
                                        lblNoticias.Text += "</tr>";
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
                    lblNoticias.Text += "</table>";
                    lblQtd.Text += "Foram encontradas " + i.ToString() + " notícias";
                }
                if(!sqlRead.IsClosed){sqlRead.Close();}
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }
        }

        protected void btnLimpar_Click(object sender, EventArgs e)
        {
            txtFiltro.Text = "";
            lblQtd.Text = "";
            lblNoticias.Text = "";
        }
    }
}