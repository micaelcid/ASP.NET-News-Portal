<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="addNoticia.aspx.cs" Inherits="prjInterdisciplinar.admin.addNoticia" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
    <style>
        .caixa{resize: vertical;}
        a{text-decoration:none;}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="titulo">Adicionar notícia</h1>
    <div class="frmAlteraSenha">
        <p>Preencha os dados a seguir:</p>
        <div class="fl linha">
            <p>Autor:</p>
            <p > <asp:DropDownList ID="txtAutor" CssClass="caixa" runat="server" required autofocus>
                </asp:DropDownList></p>
            <p style="margin-top:-5px"><a href='addAutor.aspx'>Novo autor?</a></p>
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
            <asp:Button ID="btnAdicionar" runat="server" Text="Adicionar" 
                onclick="btnAdicionar_Click" />
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>
        <div class="limpa"></div>
    </div>
</asp:Content>
