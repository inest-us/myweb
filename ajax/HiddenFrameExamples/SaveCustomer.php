<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Save Customer</title>
<?php
    //get information
    $sName = mysql_real_escape_string($_POST["txtName"]);
    $sAddress = mysql_real_escape_string($_POST["txtAddress"]);
    $sCity = mysql_real_escape_string($_POST["txtCity"]);
    $sState = mysql_real_escape_string($_POST["txtState"]);
    $sZipCode = mysql_real_escape_string($_POST["txtZipCode"]);
    $sPhone = mysql_real_escape_string($_POST["txtPhone"]);
    $sEmail = mysql_real_escape_string($_POST["txtEmail"]);
    
    //status message
    $sStatus = "";
        
    //database information
    $sDBServer = "your.database.server";
    $sDBName = "your_db_name";
    $sDBUsername = "your_db_username";
    $sDBPassword = "your_db_password";

    //create the SQL query string
    $sSQL = "Insert into Customers(Name,Address,City,State,Zip,Phone,`Email`) ".
              " values ('$sName','$sAddress','$sCity','$sState', '$sZipCode'".
              ", '$sPhone', '$sEmail')";

    $oLink = mysql_connect($sDBServer,$sDBUsername,$sDBPassword);
    @mysql_select_db($sDBName) or $sStatus = "Unable to open database";
        
    if ($sStatus == "") {
        if(mysql_query($sSQL)) {
            $sStatus = "Added customer; customer ID is ".mysql_insert_id();
         } else {
            $sStatus = "An error occurred while inserting; customer not saved.";
        }
    }
    
    mysql_close($oLink);
?>
    <script type="text/javascript">
    //<![CDATA[
        window.onload = function () {
            top.frames["displayFrame"].saveResult("<?php echo $sStatus ?>");        
        }
    //]]>
    </script>
</head>
<body>
</body>
</html>
