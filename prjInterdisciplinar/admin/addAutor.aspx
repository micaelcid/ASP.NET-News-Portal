<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="addAutor.aspx.cs" Inherits="prjInterdisciplinar.admin.addAutor" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
    <style>
        .caixa{resize: vertical;}
         a{text-decoration:none;}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<h1 class="titulo">Adicionar autor</h1>
    <div class="frmAlteraSenha">
        <p>Preencha:</p>
        <div class="fl linha">
            <p>Autor:</p>
            <p><asp:TextBox ID="txtAutor" runat="server" CssClass="caixa" required></asp:TextBox></p>
        </div>
        
        <div class="fl linha espSup">
            <asp:Button ID="btnAdicionar" runat="server" Text="Adicionar" 
                onclick="btnAdicionar_Click" />
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>
        <a href='addNoticia.aspx'>< Voltar</a>
        <div class="limpa"></div>
    </div>
</asp:Content>
