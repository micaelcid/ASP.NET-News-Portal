<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="delBanner.aspx.cs" Inherits="prjInterdisciplinar.admin.delBanner" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<style>
    td{border:1px transparent solid;line-height:24px;padding:0 5px;}
</style>
<link href="css/estiloAlterarSenha.css" rel="stylesheet" type="text/css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<h1 class="titulo">DELETAR BANNER</h1>
    <div class="frmAlteraSenha">
        <p>Você realmente deseja deletar esse banner?</p>
        <div class="fl linha">
            <asp:Literal ID="lblBanner" runat="server"></asp:Literal>
        </div>
        <div class="fl linha espSup">
            <asp:Button ID="btnExcluir" runat="server" Text="Excluir" 
                onclick="btnExcluir_Click" />
            <p><asp:Label ID="lblMsg" runat="server" Text=""></asp:Label></p>
        </div>

        <div class="limpa"></div>
    </div>
</asp:Content>
