using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjInterdisciplinar
{
    public partial class Modelo : System.Web.UI.MasterPage
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

            #region Carrega o menu

            cmd = "SELECT * FROM CATEGORIA";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    while (sqlRead.Read())
                    {
                        lblMenu.Text += "<li><a href=\"categoria.aspx?c="+sqlRead[0].ToString()+" \">"+sqlRead[1].ToString()+"</a></li>";
                    }
                }
                if (!sqlRead.IsClosed) {sqlRead.Close();}
            }
            catch
            {
                Response.Redirect("~/erro.aspx");
            }
            #endregion

            #region Carrega banner

            cmd = "SELECT CD_BANNER, NM_LINK_BANNER FROM BANNER WHERE IC_ATIVO_BANNER=1 ORDER BY DT_PUBLICACAO_BANNER DESC, HR_PUBLICACAO_BANNER DESC LIMIT 0,3";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    while (sqlRead.Read())
                    {
                        lblBanner.Text += "<a href='"+sqlRead[1].ToString()+"' target=\"_blank\"><img src='img/banner/" + sqlRead[0].ToString() +".gif'></a>";
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