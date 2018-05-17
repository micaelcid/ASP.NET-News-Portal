<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="alterarSenha.aspx.cs" Inherits="prjPortal.admin.alterarSenha" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="titulo">Alteração de Senha</h1>
    <div class="frmAlteraSenha">
        <p>Preencha os dados a seguir:</p>
        <div class="fl linha">
            <p>Senha Atual:</p>
            <p><asp:TextBox ID="txtSenhaAtual" TextMode="Password" runat="server" CssClass="caixa" required autofocus></asp:TextBox></p>
        </div>
        <div class="fl linha">
            <p>Nova Senha:</p>
            <p><asp:TextBox ID="txtNovaSenha" TextMode="Password" runat="server" CssClass="caixa" required></asp:TextBox></p>
        </div>
        <div class="fl linha">
            <p>Confirmação da Senha:</p>
            <p><asp:TextBox ID="txtConfSenha" TextMode="Password" runat="server" CssClass="caixa" required ></asp:TextBox></p>
        </div>

        <div class="fl linha espSup">
            <asp:Button ID="btnAlterar" runat="server" Text="Alterar" 
                onclick="btnAlterar_Click" />
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>
        <div class="limpa"></div>
    </div>
</asp:Content>
