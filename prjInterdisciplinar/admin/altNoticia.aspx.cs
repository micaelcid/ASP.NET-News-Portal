using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
namespace prjInterdisciplinar.admin
{

    public partial class altNoticia : System.Web.UI.Page
    {
        #region Objetos do banco

        MySqlConnection sqlConn;
        MySqlCommand sqlCmd;
        MySqlDataReader sqlRead;
        MySqlConnection sqlConn2;
        MySqlCommand sqlCmd2;
        MySqlDataReader sqlRead2;
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

                cmd = "SELECT CD_AUTOR FROM AUTOR_NOTICIA WHERE CD_NOTICIA="+Request.QueryString["n"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        if (sqlRead.Read())
                        {

                            #region Conexão com o banco

                            sqlConn2 = new MySqlConnection(conn);
                            try
                            {
                                sqlConn2.Open();
                            }
                            catch
                            {
                                Response.Redirect("~/erro.aspx");
                            }

                            #endregion   

                            cmd = "SELECT NM_AUTOR FROM AUTOR WHERE CD_AUTOR=" + sqlRead[0].ToString();
                            sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                            try
                            {
                                sqlRead2 = sqlCmd2.ExecuteReader();
                                if (sqlRead2.HasRows)
                                {
                                    if (sqlRead2.Read())
                                    {
                                        ListItem autor = new ListItem();
                                        autor.Value = sqlRead[0].ToString();
                                        autor.Text = sqlRead2[0].ToString();
                                        txtAutor.Items.Add(autor);
                                    }
                                }
                                if (!sqlRead2.IsClosed) { sqlRead2.Close(); }
                                
                            }
                            catch
                            {
                                Response.Redirect("~/erro.aspx");
                            }
                            cmd = "SELECT * FROM AUTOR WHERE CD_AUTOR!=" + sqlRead[0].ToString() + " ORDER BY NM_AUTOR ASC";
                            sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                            try
                            {
                                sqlRead2 = sqlCmd2.ExecuteReader();
                                if (sqlRead2.HasRows)
                                {
                                    while (sqlRead2.Read())
                                    {
                                        ListItem autor = new ListItem();
                                        autor.Value = sqlRead2[0].ToString();
                                        autor.Text = sqlRead2[1].ToString();
                                        txtAutor.Items.Add(autor);
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
                    if (!sqlRead.IsClosed) { sqlRead.Close(); }
                }
                catch
                {
                    Response.Redirect("~/erro.aspx");
                }

                cmd = "SELECT NM_TITULO_NOTICIA, NM_LINHA_FINA_NOTICIA, DS_TEXTO_NOTICIA, IC_DESTAQUE_NOTICIA, CD_CATEGORIA FROM NOTICIA WHERE CD_NOTICIA=" + Request.QueryString["n"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                try
                {
                    sqlRead = sqlCmd.ExecuteReader();
                    if (sqlRead.HasRows)
                    {
                        while (sqlRead.Read())
                        {
                            txtTitulo.Text = sqlRead[0].ToString().Replace("&#39;", "'");
                            txtLinha.Text = sqlRead[1].ToString().Replace("&#39;", "'");
                            txtTexto.Text = sqlRead[2].ToString().Replace("&#39;", "'").Replace("<br>", Environment.NewLine);
                            if (sqlRead[3].ToString() == "1")
                            {
                                txtDestaque.Checked = true;
                            }


                            #region Conexão com o banco

                            sqlConn2 = new MySqlConnection(conn);
                            try
                            {
                                sqlConn2.Open();
                            }
                            catch
                            {
                                Response.Redirect("~/erro.aspx");
                            }

                            #endregion   
                            cmd = "SELECT NM_CATEGORIA FROM CATEGORIA WHERE CD_CATEGORIA=" + sqlRead[4].ToString();
                            sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                            try
                            {
                                sqlRead2 = sqlCmd2.ExecuteReader();
                                if (sqlRead2.HasRows)
                                {
                                    if (sqlRead2.Read())
                                    {
                                        ListItem categoria = new ListItem();
                                        categoria.Value = sqlRead[4].ToString();
                                        categoria.Text = sqlRead2[0].ToString();
                                        txtCategoria.Items.Add(categoria);
                                    }
                                }
                                if (!sqlRead2.IsClosed) { sqlRead2.Close(); }
                                cmd = "SELECT * FROM CATEGORIA WHERE CD_CATEGORIA!=" + sqlRead[4].ToString() + " ORDER BY NM_CATEGORIA ASC";
                                sqlCmd2 = new MySqlCommand(cmd, sqlConn2);
                                try
                                {
                                    sqlRead2 = sqlCmd2.ExecuteReader();
                                    if (sqlRead2.HasRows)
                                    {
                                        while (sqlRead2.Read())
                                        {
                                            ListItem categoria = new ListItem();
                                            categoria.Value = sqlRead2[0].ToString();
                                            categoria.Text = sqlRead2[1].ToString();
                                            txtCategoria.Items.Add(categoria);
                                        }
                                    }
                                    if (!sqlRead2.IsClosed) { sqlRead2.Close(); }
                                }
                                catch
                                {
                                    Response.Redirect("~/erro.aspx");
                                }
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
            }
            
        }

        protected void btnAlterar_Click(object sender, EventArgs e)
        {
            #region Declaração de variáveis

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
                cmd = "UPDATE noticia SET NM_TITULO_NOTICIA='"+titulo+"', NM_LINHA_FINA_NOTICIA='"+linha+"', DS_TEXTO_NOTICIA='"+texto+"', DT_PUBLICACAO_NOTICIA=NOW(), HR_PUBLICACAO_NOTICIA=NOW(), IC_DESTAQUE_NOTICIA=1, CD_CATEGORIA="+categoria+" WHERE CD_NOTICIA="+Request.QueryString["n"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }
            else
            {
                cmd = "UPDATE noticia SET NM_TITULO_NOTICIA='" + titulo + "', NM_LINHA_FINA_NOTICIA='" + linha + "', DS_TEXTO_NOTICIA='" + texto + "', DT_PUBLICACAO_NOTICIA=NOW(), HR_PUBLICACAO_NOTICIA=NOW(), IC_DESTAQUE_NOTICIA=0, CD_CATEGORIA=" + categoria + " WHERE CD_NOTICIA=" + Request.QueryString["n"].ToString();
                sqlCmd = new MySqlCommand(cmd, sqlConn);
                sqlCmd.ExecuteNonQuery();
            }

            cmd = "UPDATE autor_noticia SET CD_AUTOR=" + autor + " WHERE CD_NOTICIA=" + Request.QueryString["n"].ToString();
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
                    if (System.IO.File.Exists(Request.PhysicalApplicationPath + @"img\noticias\" + Request.QueryString["n"].ToString() + ".jpg"))
                    {
                        System.IO.File.Delete(Request.PhysicalApplicationPath + @"img\noticias\" + Request.QueryString["n"].ToString() + ".jpg");
                        imgUpload.PostedFile.SaveAs(Request.PhysicalApplicationPath + @"img\noticias\" + Request.QueryString["n"].ToString() + ".jpg");
                    }
                    
                }
            }

            lblMsg.Text = "Notícia alterada com sucesso.";
        }
    }
}