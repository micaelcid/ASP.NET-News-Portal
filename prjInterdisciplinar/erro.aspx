<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="erro.aspx.cs" Inherits="prjInterdisciplinar.erro" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <link rel="stylesheet" type="text/css" href="css/estiloGeral.css">
    <title>Senso Incomum</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" /> 
</head>
<body>
    <form id="form1" runat="server">
    <div style="width:300px; height:110px; margin-left:-150px; margin-top:-55px; position:absolute; top:50%; left:50%; text-align:center;">
        <i class="fa fa-exclamation-triangle fa-5x corErro"></i>
        <h1 style="font-size:14px;">Problemas com a conexão com o Servidor! <br />Tente novamente mais tarde.</h1>
    </div>
    </form>
</body>
</html>
