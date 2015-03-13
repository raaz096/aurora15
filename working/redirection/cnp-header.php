 <?php
echo <<< EOT
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<meta name="description" content="Aurora`15,IIIT Gwalior-National Level Cultural Fest,20-22 Feb,20sExtravaganza," />
<meta name="keywords" content="aurora,aurora iiit,iiitm,iiitm aurora,aurora 2015,aurora15,gwalior,culturalfest, aurora gwalior,festival,national,indian institute" />
<meta name="author" content="Aakash Khandelwal" />
<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Cinzel+Decorative' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Merienda' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="images/favicon.ico"> 
<link rel='stylesheet' href='css/video.css' type='text/css' media='all'/>
<link rel="stylesheet" type="text/css" href="css/default.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />
<link rel="stylesheet" type="text/css" href="css/video.css" />

<style type="text/css">
  @media screen and (max-width: 500px) { 
  div{width:70%;} 
}
@media screen and (max-device-width: 1280px) {
  html { background: url('images/mis.png') #000 no-repeat center center fixed; }
  #bgvid { display: none; }
}


h1{
        text-align: center; 
font-family: 'Droid Sans', sans-serif;
        font-weight: 1000%; 
        font-size: 250%;
        padding-top: 20px;
      }
      h2{
        text-align: center; 
font-family: 'Droid Sans', sans-serif;
        font-weight: 1000; 
        font-size: 120%;
        padding-top: 20px;
      }
      p, h3, h4, h4,  h6, li, button{
        font-family: 'Merienda', cursive; 
        font-weight: 250%; 
        font-size: 100%;
        text-align: center;

      }
      button{
font-family: 'Droid Sans', sans-serif;
        font-weight: 250%; 
        font-size:70%;
        text-align: center;

      }
      #section {
    width:10%;
    height:10%;
    float:left;
    margin-left :7%;
  margin-top: 3%;    
}
    
    #section_right {
    width:10%;
    float:right;
    height:10%;
    margin-right :8%;
  margin-top: 2%;    
}
    
 
  

</style>
</head>
<body>
<div id="section"><img src="images/logo.png" width="110%" height="20%"/></div>
    <div id="section_right"><img src="images/iiitmlogo.png" width="80%" height="20%"/></div>
<CENTER>
<br><br><br>
<h3 style="font-weight: 1000%; font-size: 150%;">
<a href="../index.php">Home</a> |
        <a href="../about.php">About</a>
        |
        <a href="../events.php">Events</a>|
        <a href="../team.php">Team</a> |
        <a href="../sponsers.php">Sponsors</a> |
        <a href="../gallery.php">Gallery</a>
        </h3></CENTER> 
         <div id="pause">
  <button style="margin-left:90%;text-align: center; 
font-family: 'Droid Sans', sans-serif;
        font-weight: 1000; 
        font-size: 120%;
        padding-top: -10px">Pause</button>
</div>
<video autoplay  poster="images/mis.png" id="bgvid" loop>
  <!-- WCAG general accessibility recommendation is that media such as 
  background video play through only once. Loop turned on for the purposes
   of illustration; if removed, the end of the video will fade in the same w
   ay created by pressing the "Pause" button  -->

EOT;
?>
