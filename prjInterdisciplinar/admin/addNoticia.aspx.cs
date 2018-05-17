using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{
    public partial class addNoticia : System.Web.UI.Page
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
                txtAutor.Items.Clear();
                txtCategoria.Items.Clear();
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

                cmd = "SELECT * FROM AUTOR ORDER BY NM_AUTOR ASC";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        while (sqlRead.Read())
                        {
                            ListItem autor = new ListItem();
                            autor.Value = sqlRead[0].ToString();
                            autor.Text = sqlRead[1].ToString();
                            txtAutor.Items.Add(autor);
                        }
                    }
                    if (!sqlRead.IsClosed) { sqlRead.Close(); }
                }
                catch
                {
                    Response.Redirect("~/erro.aspx");
                }

                cmd = "SELECT * FROM CATEGORIA ORDER BY NM_CATEGORIA ASC";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        while (sqlRead.Read())
                        {
                            ListItem categoria = new ListItem();
                            categoria.Value = sqlRead[0].ToString();
                            categoria.Text = sqlRead[1].ToString();
                            txtCategoria.Items.Add(categoria);
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
        protected void btnAdicionar_Click(object sender, EventArgs e)
        {
            #region Declaração de variáveis

            string pk = "";
            string autor = txtAutor.SelectedItem.Value;
            string categoria = txtCategoria.SelectedItem.Value;
            string titulo = txtTitulo.Text.Replace("'", "&#39;");
            string linha = txtLinha.Text.Replace("'", "&#39;");
            string texto = txtTexto.Text.Replace(Environment.NewLine, "<br>").Replace("'", "&#39;");

            #endregion

            #region Validação dos campos

            if (autor == null)
            {
                lblMsg.Text = "Selecione um autor.";
            }
            if (categoria == null)
            {
                lblMsg.Text = "Selecione uma categoria.";
            }
            if (titulo.Length > 80)
            {
                lblMsg.Text = "O título não pode conter mais que 80 caracteres.";
                txtTitulo.Focus();
                return;
            }
            if (titulo.Length == 0)
            {
                lblMsg.Text = "Digite o título.";
                txtTitulo.Focus();
                return;
            }
            if (linha.Length > 150)
            {
                lblMsg.Text = "A linha fina não pode conter mais que 150 caracteres.";
                txtLinha.Focus();
                return;
            }
            if (linha.Length == 0)
            {
                lblMsg.Text = "Digite a linha fina.";
                txtLinha.Focus();
                return;
            }
            if (texto.Length == 0)
            {
                lblMsg.Text = "Digite o texto.";
                txtTexto.Focus();
                return;
            }
            if (!imgUpload.HasFile)
            {
                lblMsg.Text = "Selecione uma foto para a notícia";
                imgUpload.Focus();
                return;
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

            if (txtDestaque.Checked == true)
            {
                cmd = "UPDATE noticia SET IC_DESTAQUE_NOTICIA=0 WHERE IC_DESTAQUE_NOTICIA=1";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
                cmd = "INSERT INTO noticia(NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA, DS_TEXTO_NOTICIA, DT_PUBLICACAO_NOTICIA, HR_PUBLICACAO_NOTICIA, IC_DESTAQUE_NOTICIA, CD_CATEGORIA) VALUES('" + titulo + "','" + linha + "','" + texto + "',NOW(),NOW(), 1, " + categoria + " )";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }
            else
            {
                cmd = "INSERT INTO noticia(NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA, DS_TEXTO_NOTICIA,DT_PUBLICACAO_NOTICIA, HR_PUBLICACAO_NOTICIA, IC_DESTAQUE_NOTICIA, CD_CATEGORIA) VALUES('" + titulo + "','" + linha + "','" + texto + "',NOW(),NOW(), 0, " + categoria + " )";
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }

            cmd = "SELECT CD_NOTICIA FROM NOTICIA ORDER BY CD_NOTICIA DESC LIMIT 0,1";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlRead = sqlCmd.ExecuteReader();
            if (sqlRead.HasRows)
            {
                if (sqlRead.Read())
                {
                    pk = sqlRead[0].ToString();
                }
            }
            if (!sqlRead.IsClosed) { sqlRead.Close(); }

            cmd = "INSERT INTO autor_noticia(CD_NOTICIA, CD_AUTOR) VALUES('" + pk + "','" + autor + "')";
            sqlCmd = new MySqlCommand(cmd, sqlConn);
            sqlCmd.ExecuteNonQuery();

            if (imgUpload.PostedFile != null)
            {
                string TipoArq = imgUpload.PostedFile.ContentType;
                int TamanhoArq = imgUpload.PostedFile.ContentLength;
                if (TamanhoArq <= 0)
                    lblMsg.Text = "A tentativa de upload do arquivo falhou!";
                else
                {
                    imgUpload.PostedFile.SaveAs(Request.PhysicalApplicationPath + @"img\noticias\" + pk + ".jpg");
                }
            } 
            
            lblMsg.Text = "Notícia adicionada com sucesso.";
            txtTitulo.Text = "";
            txtLinha.Text = "";
            txtTexto.Text = "";
            
        }
    }
}