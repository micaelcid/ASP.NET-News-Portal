<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="altBanner.aspx.cs" Inherits="prjInterdisciplinar.admin.altBanner" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
    <style>
        .caixa{resize: vertical;}
         a{text-decoration:none;}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<h1 class="titulo">Adicionar banner</h1>
    <div class="frmAlteraSenha">
        <p>Preencha os campos a seguir:</p>
        <div class="fl linha">
            <p>Empresa:</p>
            <p><asp:TextBox ID="txtEmpresa" runat="server" CssClass="caixa" required></asp:TextBox></p>
        </div>
        <div class="fl linha">
            <p>Link:</p>
            <p><asp:TextBox ID="txtLink" runat="server" CssClass="caixa" required></asp:TextBox></p>
        </div>
        <div class="fl linha">
            <p>Ativo:</p>
            <p><asp:CheckBox ID="txtAtivo" runat="server" />Sim</p>
        </div>
        <div class="fl linha">
            <p>Banner:</p>
            <p><asp:FileUpload ID="imgUpload" runat="server" /></p>
        </div>
        <div class="fl linha espSup">
        <asp:Button ID="btnAlterar" runat="server" Text="Salvar" 
                onclick="btnAlterar_Click"/>
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>
        <div class="limpa"></div>
    </div>
</asp:Content>
