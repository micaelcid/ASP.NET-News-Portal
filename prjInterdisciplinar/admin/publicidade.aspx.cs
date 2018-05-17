using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjInterdisciplinar.admin
{
    public partial class publicidade : System.Web.UI.Page
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
            lblBanners.Text = "";
            lblQtd.Text = "";
            cmd = "SELECT CD_BANNER, NM_EMPRESA_ANUNCIANTE_BANNER, IC_ATIVO_BANNER, date_format(DT_PUBLICACAO_BANNER, '%d/%m/%Y'), date_format(HR_PUBLICACAO_BANNER, '%H:%i' ), NM_LINK_BANNER FROM BANNER";
            cmd += " WHERE  NM_EMPRESA_ANUNCIANTE_BANNER LIKE '%" + txtFiltro.Text + "%' ORDER BY CD_BANNER DESC";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                int i = 0;
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    lblBanners.Text += "<table>";
                    lblBanners.Text += "<tr>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Empresa</td>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Ativo</td>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Data</td>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Hora</td>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Link</td>";
                    lblBanners.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Caminho</td>";
                    lblBanners.Text += "</tr>";

                    while (sqlRead.Read())
                    {
                        i++;
                        if (i % 2 != 0)
                        {
                            lblBanners.Text += "<tr>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[1].ToString() + "</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[2].ToString() + "</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[3].ToString() + "</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[4].ToString() + "</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>" + sqlRead[5].ToString() + "</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'>img/banner/" + sqlRead[0].ToString() + ".png</td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'><a href='altBanner.aspx?b=" + sqlRead[0].ToString() + "'><img src='images/edit.png'></a></td>";
                            lblBanners.Text += "<td style='background-color:#e9ebee;'><a href='delBanner.aspx?b=" + sqlRead[0].ToString() + "'><img src='images/delete.png'></a></td>";
                            lblBanners.Text += "</tr>";
                        }
                        else
                        {
                            lblBanners.Text += "<tr>";
                            lblBanners.Text += "<td>" + sqlRead[1].ToString() + "</td>";
                            lblBanners.Text += "<td>" + sqlRead[2].ToString() + "</td>";
                            lblBanners.Text += "<td>" + sqlRead[3].ToString() + "</td>";
                            lblBanners.Text += "<td>" + sqlRead[4].ToString() + "</td>";
                            lblBanners.Text += "<td>" + sqlRead[5].ToString() + "</td>";
                            lblBanners.Text += "<td>img/banner/" + sqlRead[0].ToString() + ".png</td>";
                            lblBanners.Text += "<td><a href='altBanner.aspx?b=" + sqlRead[0].ToString() + "'><img src='images/edit.png'></a></td>";
                            lblBanners.Text += "<td><a href='delBanner.aspx?b=" + sqlRead[0].ToString() + "'><img src='images/delete.png'></a></td>";
                            lblBanners.Text += "</tr>";
                        }
                    }
                    lblBanners.Text += "</table>";
                    lblQtd.Text += "Foram encontrados " + i.ToString() + " banners" ;
                }
                if (!sqlRead.IsClosed) { sqlRead.Close(); }
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }
        }


        protected void btnLimpar_Click(object sender, EventArgs e)
        {
            txtFiltro.Text = "";
            lblBanners.Text = "";
            lblQtd.Text = "";
        }
    }
}