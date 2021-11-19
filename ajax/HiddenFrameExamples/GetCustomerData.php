<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>Get Customer Data</title>
<?php
    $id = $_GET["id"];
    $info = "";
    
    $servername = "";
    $username = "";
    $password = "";
    $dbname = "";
    $sql = "Select * from Customers where CustomerId=".$id;
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        $info = "Unable to open database";
    }

    if ($info == "") {
        if (!$result = $conn->query($sql)) {
            $info = "Sorry, the website is experiencing problems.";
        }

        if ($result->num_rows == 0) {
            $info = "We could not find a match for ID $id, sorry about that. Please try again.";
        } else {
            $aValues = $result->fetch_assoc();
            $info = $aValues['Name']."<br />".$aValues['Address']."<br />".
                $aValues['City']."<br />".$aValues['State']."<br />".
                $aValues['Zip']."<br /><br />Phone: ".$aValues['Phone']."<br />".
                "<a href=\"mailto:".$aValues['Email']."\">".$aValues['Email']."</a>";
        
            $result->free();
        }

        $conn->close();
    }
?>
    
    <script type="text/javascript">
        window.onload = function () {
            var divInfoToReturn = document.getElementById("divInfoToReturn");
            top.frames["displayFrame"].displayCustomerInfo(divInfoToReturn.innerHTML);        
        };
    </script>
</head>
<body>
    <div id="divInfoToReturn"><?php echo $info ?></div>
</body>
</html>
