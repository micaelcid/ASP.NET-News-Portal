<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="altNoticia.aspx.cs" Inherits="prjInterdisciplinar.admin.altNoticia" validateRequest="false" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
    <style>
        .caixa{resize: vertical;}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 <h1 class="titulo">Alterar notícia</h1>
    <div class="frmAlteraSenha">
        <p>Faça suas alterações:</p>
        <div class="fl linha">
            <p>Autor:</p>
            <p > <asp:DropDownList ID="txtAutor" CssClass="caixa" runat="server" required autofocus>
                </asp:DropDownList></p>
        </div>
        <div class="fl linha">
            <p>Categoria:</p>
            <p><asp:DropDownList ID="txtCategoria" CssClass="caixa" runat="server" required autofocus>
                </asp:DropDownList></p>
        </div>
        <div class="fl linha">
            <p>Título: </p>
            <p><asp:TextBox ID="txtTitulo" TextMode="MultiLine" runat="server" CssClass="caixa" required autofocus></asp:TextBox></p>
            
        </div>
        <div class="fl linha">
            <p>Linha Fina:</p>
            <p><asp:TextBox ID="txtLinha" TextMode="MultiLine" runat="server" CssClass="caixa" required autofocus></asp:TextBox></p>
        </div>
        <div class="fl linha">
            <p>Texto: </p>
            <p><asp:TextBox ID="txtTexto" TextMode="MultiLine" runat="server" CssClass="caixa" required autofocus></asp:TextBox></p>
        </div>

        <div class="fl linha">
            <p>Imagem:</p>
            <p><asp:FileUpload ID="imgUpload" runat="server" /></p>
        </div>

        <div class="fl linha">
            <p>Destacar notícia:</p>
            <p>
                <asp:CheckBox ID="txtDestaque" runat="server" />Sim</p>
        </div>


        <div class="fl linha espSup">
            <asp:Button ID="btnAlterar" runat="server" Text="Salvar" 
                onclick="btnAlterar_Click"  />
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>

        <div class="limpa"></div>
    </div>
</asp:Content>
