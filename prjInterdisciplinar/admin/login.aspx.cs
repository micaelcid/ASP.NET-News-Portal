using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class login : System.Web.UI.Page
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
            if (Request.Cookies["usuario"] != null)
            {
                Response.Redirect("inicial.aspx");
            }
        }

        protected void btnLogin_Click(object sender, EventArgs e)
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

            #region Verifica a existência do login
            string login = txtUser.Text;
            string senha = txtPass.Text;
            string nome = "";
            cmd = "SELECT CD_LOGIN_USUARIO, NM_USUARIO, NM_SENHA_USUARIO FROM USUARIO WHERE CD_LOGIN_USUARIO=md5(\"" + login + "\") AND NM_SENHA_USUARIO=md5(\"" + senha + "\")";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            try
            {
                sqlRead = sqlCmd.ExecuteReader();
                if (sqlRead.HasRows)
                {
                    if(sqlRead.Read())
                    {
                    nome = sqlRead[1].ToString();
                    }
                    lblMensagem.Text = "Login efetuado com sucesso.";
                    var newCookie = new HttpCookie("usuario");
                    newCookie["login"] = sqlRead[0].ToString() ;
                    newCookie["senha"] = sqlRead[2].ToString();
                    newCookie["nome"] = nome;
                    newCookie.Expires = DateTime.Now.AddMinutes(20);
                    Response.Cookies.Add(newCookie);
                    lblMensagem.Text = "<script>window.location.href='inicial.aspx'</script>";
                }
                else
                {
                    lblMensagem.Text = "O login está incorreto.";
                    return;
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