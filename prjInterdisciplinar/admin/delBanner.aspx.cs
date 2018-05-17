using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class delBanner : System.Web.UI.Page
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

                cmd = "SELECT * FROM BANNER WHERE CD_BANNER=" + Request.QueryString["b"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        lblBanner.Text += "<table>";
                        lblBanner.Text += "<tr>";
                        lblBanner.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Empresa</td>";
                        lblBanner.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Data</td>";
                        lblBanner.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Hora</td>";
                        lblBanner.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Ordenação</td>";
                        lblBanner.Text += "<td style='font-size:16px;font-weight:bold;color:#054F77'>Link</td>";
                        lblBanner.Text += "</tr>";

                        while (sqlRead.Read())
                        {
                            lblBanner.Text += "<tr>";
                            lblBanner.Text += "<td>" + sqlRead[1].ToString() + "</td>";
                            lblBanner.Text += "<td>" + sqlRead[2].ToString() + "</td>";
                            lblBanner.Text += "<td>" + sqlRead[3].ToString() + "</td>";
                            lblBanner.Text += "<td>" + sqlRead[4].ToString() + "</td>";
                            lblBanner.Text += "<td>" + sqlRead[5].ToString() + "</td>";
                            lblBanner.Text += "<td>img/banner/" + Request.QueryString["b"].ToString() + ".png</td>";
                            lblBanner.Text += "</tr>";
                        }
                        lblBanner.Text += "</table>";
                    }
                    if (!sqlRead.IsClosed) { sqlRead.Close(); }
                }
                catch
                {
                    Response.Redirect("~/erro.aspx");
                }
                sqlConn.Close();
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

            cmd = "DELETE FROM BANNER WHERE CD_BANNER=" + Request.QueryString["b"].ToString();
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlCmd.ExecuteNonQuery();
            if (System.IO.File.Exists(Request.ApplicationPath + "img/banner/" + Request.QueryString["b"].ToString() + ".gif"))
            {
                System.IO.File.Delete(Request.ApplicationPath + "img/banner/" + Request.QueryString["b"].ToString() + ".gif");
            }
            Response.Redirect("~/admin/publicidade.aspx");
        }
    }
}