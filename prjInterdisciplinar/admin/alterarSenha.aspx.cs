using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjPortal.admin
{
    public partial class alterarSenha : System.Web.UI.Page
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

            this.Page.Form.DefaultFocus = txtSenhaAtual.ClientID;
            this.Page.Form.DefaultButton = btnAlterar.UniqueID;
        }

        protected void btnAlterar_Click(object sender, EventArgs e)
        {
            #region Validações
            if (txtSenhaAtual.Text == "")
            {
                lblMsg.Text = "Senha atual é obrigatória!";
                txtSenhaAtual.Focus();
                return;
            }
            if (txtNovaSenha.Text == "")
            {
                lblMsg.Text = "Nova Senha é obrigatória!";
                txtNovaSenha.Focus();
                return;
            }
            if (txtConfSenha.Text == "")
            {
                lblMsg.Text = "Confirmação de Senha é obrigatória!";
                txtConfSenha.Focus();
                return;
            }
            if (txtNovaSenha.Text != txtConfSenha.Text)
            {
                lblMsg.Text = "Nova Senha não confere!";
                txtSenhaAtual.Text = "";
                txtNovaSenha.Text = "";
                txtConfSenha.Text = "";
                txtSenhaAtual.Focus();
                return;
            }
            #endregion

            string user = Request.Cookies["usuario"]["login"];
            cmd = "Select NM_USUARIO from USUARIO where CD_LOGIN_USUARIO =  '" + user + "' AND NM_SENHA_USUARIO=md5('"+txtSenhaAtual.Text+"')";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlRead = sqlCmd.ExecuteReader();
            if (sqlRead.HasRows)
            {
                if (!sqlRead.IsClosed) { sqlRead.Close(); }
                cmd = "Update USUARIO set NM_SENHA_USUARIO = md5('" + txtNovaSenha.Text + "') where CD_LOGIN_USUARIO ='" + user + "'";
                sqlCmd = new MySqlCommand(cmd, sqlConn);

                try
                {
                    sqlCmd.ExecuteNonQuery();
                    lblMsg.Text = "Senha alterada com sucesso!";
                    return;
                }
                catch
                {
                    lblMsg.Text = "Ocorreu um erro na tentativa de alteração de senha. Por favor tente novamente.";
                    txtSenhaAtual.Text = "";
                    txtNovaSenha.Text = "";
                    txtConfSenha.Text = "";
                    txtSenhaAtual.Focus();
                }
            }
            else
            {
                lblMsg.Text = "Senha incorreta!";
                txtSenhaAtual.Text = "";
                txtNovaSenha.Text = "";
                txtConfSenha.Text = "";
                txtSenhaAtual.Focus();
            }
            
        }
    }
}