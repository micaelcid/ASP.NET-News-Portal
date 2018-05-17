<%@ Page Title="" Language="C#" MasterPageFile="~/admin/ModeloAdmin.Master" AutoEventWireup="true" CodeBehind="noticias.aspx.cs" Inherits="prjInterdisciplinar.admin.noticias" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<style>
    td{border:1px transparent solid;line-height:24px;padding:0 5px;}
</style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 class="titulo">NOTÍCIAS</h1>
    
    <div id="barraSubMenu">
        <div id="conteudoBarraSubMenu" class="">
            <ul>
                <li><a href="addNoticia.aspx" class="lnkBranco"><i class="fa fa-user-plus fa-fw cor2"></i>&nbsp;Nova notícia</a></li>
            </ul>
        </div>
        <div class="barraProcura">
            <asp:TextBox ID="txtFiltro" runat="server" placeholder="Faça a busca"></asp:TextBox>
            <asp:Button ID="btnProcurar" runat="server" Text="Procurar" 
                onclick="btnProcurar_Click" />
            <asp:Button ID="btnLimpar" runat="server" Text="Limpar" onclick="btnLimpar_Click" />
        </div>
        <div class="limpa"></div>
    </div>
    <asp:Literal ID="lblQtd" runat="server"></asp:Literal>
    <asp:Literal ID="lblNoticias" runat="server"></asp:Literal>
   
</asp:Content>
