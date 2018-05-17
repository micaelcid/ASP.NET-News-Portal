<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="prjInterdisciplinar.admin.login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../css/admin.css" rel="stylesheet" type="text/css" />
    <script src="../js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <link href="../font/Roboto/Roboto-Regular.ttf" rel="stylesheet">
    <link href="../font/Didact_Gothic/DidactGothic-Regular.ttf" rel="stylesheet">
    <meta name="authoring-tool" content="Adobe_Animate_CC"> 
    <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
    <script src="../js/script.js"></script>
    <title>Senso Incomum</title>
</head>
<body>
<div class="linhaAzul"></div>
    <main>
        <div class="pnlLogo">
            <div class="logo">
                <a href="../index.aspx"><img src="../img/logo.png" height="100%"></a>
            </div>
        </div>
        <h2>Administrador</h2>
        <div class="ContentBox">
        <form id="Form1" runat="server">
        <asp:TextBox ID="txtUser" placeholder="Nome do usuário" CssClass=TextBox runat="server"></asp:TextBox><br />
        <asp:TextBox ID="txtPass" placeholder="Senha do usuário" CssClass=TextBox 
            runat="server" TextMode="Password"></asp:TextBox><br />
        <asp:Button ID="btnLogin" runat="server" CssClass=Button Text="LOGIN" 
            onclick="btnLogin_Click" /><br />
	    </form>
	    <asp:Label ID="lblMensagem" runat="server" Text=""></asp:Label>
        </div>
    </main>
    
		
</body>
</html>
