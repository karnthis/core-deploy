<html>
<head>
<title>Mineral Buyback</title>
</head>

<body onload="CCPEVE.requestTrust('http://eve.squirrellogic.com')">

<?php

//function setup

function clean_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

//fetches and prepares the eve-central prices for Hek

	$typeids=array(37,40,36,38,35,34,39);
	$url="http://api.eve-central.com/api/marketstat?usesystem=30002053&typeid=".join('&typeid=',$typeids);
	$pricexml=file_get_contents($url);
	$xml=new SimpleXMLElement($pricexml);
	foreach($typeids as $typeid)
	{
    		$item=$xml->xpath('/evec_api/marketstat/type[@id='.$typeid.']');
    		$price  = (float) $item[0]->buy->max;
    		$price  = round($price,2);
    		$price2 = ($price*1.05);
    		$price2 = round($price2,2);

    		if ($typeid == 37){
    		$IsogenBuyPrice  = $price;
    		$IsogenSellPrice = $price2;
    		}
    		elseif ($typeid == 40){
    		$MegacyteBuyPrice  = $price;
    		$MegacyteSellPrice = $price2;
    		}
    		elseif ($typeid == 36){
    		$MexallonBuyPrice  = $price;
    		$MexallonSellPrice = $price2;
    		}
    		elseif ($typeid == 38){
    		$NocxiumBuyPrice  = $price;
    		$NocxiumSellPrice = $price2;
    		}
    		elseif ($typeid == 35){
    		$PyeriteBuyPrice  = $price;
    		$PyeriteSellPrice = $price2;
    		}
    		elseif ($typeid == 34){
    		$TritaniumBuyPrice  = $price;
    		$TritaniumSellPrice = $price2;
    		}
    		elseif ($typeid == 39){
    		$ZydrineBuyPrice  = $price;
    		$ZydrineSellPrice = $price2;
    		}
	
	}

//executes the form

if ($_SERVER["REQUEST_METHOD"] == "POST") {

if (! empty($_POST["isogen"])) {
	$Isogen  = clean_input($_POST["isogen"]);
	$IsoBuyAmt  = clean_input($_POST["isobuyamt"]);
	$IsoSellAmt = clean_input($_POST["isosellamt"]);
	if ($Isogen == 'buy'){
		$IsogenBuyValue  = ($IsoBuyAmt * $IsogenBuyPrice);
	}
	if ($Isogen == 'sell'){
		$IsogenSellValue = ($IsoSellAmt * $IsogenSellPrice);
	}
}

if (! empty($_POST["megacyte"])) {
	$Megacyte = clean_input($_POST["megacyte"]);
	$MegaBuyAmt  = clean_input($_POST["megabuyamt"]);
	$MegaSellAmt = clean_input($_POST["megasellamt"]);
	if ($Megacyte == 'buy'){
		$MegacyteBuyValue  = ($MegaBuyAmt * $MegacyteBuyPrice);
	}
	if ($Megacyte == 'sell'){
		$MegacyteSellValue = ($MegaSellAmt * $MegacyteSellPrice);
	}
}

if (! empty($_POST["mexallon"])) {
	$Mexallon = clean_input($_POST["mexallon"]);
	$MexBuyAmt  = clean_input($_POST["mexbuyamt"]);
	$MexSellAmt = clean_input($_POST["mexsellamt"]);
	if ($Mexallon == 'buy'){
		$MexallonBuyValue  = ($MexBuyAmt * $MexallonBuyPrice);
	}
	if ($Mexallon == 'sell'){
		$MexallonSellValue = ($MexSellAmt * $MexallonSellPrice);
	}
}

if (! empty($_POST["nocxium"])) {
	$Nocxium = clean_input($_POST["nocxium"]);
	$NocxBuyAmt  = clean_input($_POST["nocxbuyamt"]);
	$NocxSellAmt = clean_input($_POST["nocxsellamt"]);
	if ($Nocxium == 'buy'){
		$NocxiumBuyValue  = ($NocxBuyAmt * $NocxiumBuyPrice);
	}
	if ($Nocxium == 'sell'){
		$NocxiumSellValue = ($NocxSellAmt * $NocxiumSellPrice);
	}
}

if (! empty($_POST["pyerite"])) {
	$Pyerite = clean_input($_POST["pyerite"]);
	$PyeBuyAmt  = clean_input($_POST["pyebuyamt"]);
	$PyeSellAmt = clean_input($_POST["pyesellamt"]);
	if ($Pyerite == 'buy'){
		$PyeriteBuyValue  = ($PyeBuyAmt * $PyeriteBuyPrice);
	}
	if ($Pyerite == 'sell'){
		$PyeriteSellValue = ($PyeSellAmt * $PyeriteSellPrice);
	}
}

if (! empty($_POST["tritanium"])) {
	$Tritanium = clean_input($_POST["tritanium"]);
	$TritBuyAmt  = clean_input($_POST["tritbuyamt"]);
	$TritSellAmt = clean_input($_POST["tritsellamt"]);
	if ($Tritanium == 'buy'){
		$TritaniumBuyValue  = ($TritBuyAmt * $TritaniumBuyPrice);
	}
	if ($Tritanium == 'sell'){
		$TritaniumSellValue = ($TritSellAmt * $TritaniumSellPrice);
	}
}

if (! empty($_POST["zydrine"])) {
	$Zydrine= clean_input($_POST["zydrine"]);
	$ZydBuyAmt  = clean_input($_POST["zydbuyamt"]);
	$ZydSellAmt = clean_input($_POST["zydsellamt"]);
	if ($Zydrine == 'buy'){
		$ZydrineBuyValue  = ($ZydBuyAmt * $ZydrineBuyPrice);
	}
	if ($Zydrine == 'sell'){
		$ZydrineSellValue = ($ZydSellAmt * $ZydrineSellPrice);
	}
}

$TotalBuyValue  = $IsogenBuyValue  + $MegacyteBuyValue  + $MexallonBuyValue  + $NocxiumBuyValue  + $PyeriteBuyValue  + $TritaniumBuyValue  + $ZydrineBuyValue;
$TotalSellValue = $IsogenSellValue + $MegacyteSellValue + $MexallonSellValue + $NocxiumSellValue + $PyeriteSellValue + $TritaniumSellValue + $ZydrineSellValue;

}

?>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

<fieldset>
<legend><h3>Isogen:</h3></legend>
Do you want to: 
<input type="radio" name="isogen" <?php if (isset($Isogen) && $Isogen=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="isogen" <?php if (isset($Isogen) && $Isogen=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $IsogenBuyPrice;?> Corp is charging: <?php echo $IsogenSellPrice;?><br>
Sell to Corp:<input type="number" name="isobuyamt" value="<?php echo $IsoBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="isosellamt" value="<?php echo $IsoSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Megacyte:</h3></legend>
Do you want to: 
<input type="radio" name="megacyte" <?php if (isset($Megacyte) && $Megacyte=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="megacyte" <?php if (isset($Megacyte) && $Megacyte=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $MegacyteBuyPrice;?> Corp is charging: <?php echo $MegacyteSellPrice;?><br>
Sell to Corp:<input type="number" name="megabuyamt" value="<?php echo $MegaBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="megasellamt" value="<?php echo $MegaSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Mexallon:</h3></legend>
Do you want to: 
<input type="radio" name="mexallon" <?php if (isset($Mexallon) && $Mexallon=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="mexallon" <?php if (isset($Mexallon) && $Mexallon=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $MexallonBuyPrice;?> Corp is charging: <?php echo $MexallonSellPrice;?><br>
Sell to Corp:<input type="number" name="mexbuyamt" value="<?php echo $MexBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="mexsellamt" value="<?php echo $MexSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Nocxium:</h3></legend>
Do you want to: 
<input type="radio" name="nocxium" <?php if (isset($Nocxium) && $Nocxium=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="nocxium" <?php if (isset($Nocxium) && $Nocxium=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $NocxiumBuyPrice;?> Corp is charging: <?php echo $NocxiumSellPrice;?><br>
Sell to Corp:<input type="number" name="nocxbuyamt" value="<?php echo $NocxBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="nocxsellamt" value="<?php echo $NocxSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Pyerite:</h3></legend>
Do you want to: 
<input type="radio" name="pyerite" <?php if (isset($Pyerite) && $Pyerite=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="pyerite" <?php if (isset($Pyerite) && $Pyerite=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $PyeriteBuyPrice;?> Corp is charging: <?php echo $PyeriteSellPrice;?><br>
Sell to Corp:<input type="number" name="pyebuyamt" value="<?php echo $PyeBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="pyesellamt" value="<?php echo $PyeSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Tritanium:</h3></legend>
Do you want to: 
<input type="radio" name="tritanium" <?php if (isset($Tritanium) && $Tritanium=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="tritanium" <?php if (isset($Tritanium) && $Tritanium=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $TritaniumBuyPrice;?> Corp is charging: <?php echo $TritaniumSellPrice;?><br>
Sell to Corp:<input type="number" name="tritbuyamt" value="<?php echo $TritBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="tritsellamt" value="<?php echo $TritSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<fieldset>
<legend><h3>Zydrine:</h3></legend>
Do you want to: 
<input type="radio" name="zydrine" <?php if (isset($Zydrine) && $Zydrine=="buy") echo "checked";?>  value="buy">Sell
<input type="radio" name="zydrine" <?php if (isset($Zydrine) && $Zydrine=="sell") echo "checked";?>  value="sell">Buy
<br>
Corp is paying: <?php echo $ZydrineBuyPrice;?> Corp is charging: <?php echo $ZydrineSellPrice;?><br>
Sell to Corp:<input type="number" name="zydbuyamt" value="<?php echo $ZydBuyAmt;?>" placeholder="Amount" /> Buy from Corp: <input type="number" name="zydsellamt" value="<?php echo $ZydSellAmt;?>" placeholder="Amount" /><br>
</fieldset>

<br>
<input type="submit" name="submit" value="submit" />
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	echo "<h2>Selling to Corp:</h2>";
	if ($Isogen == 'buy'){
		echo "Isogen: $IsoBuyAmt units for $IsogenBuyValue ISK";
		echo "<br>";
	}
	if ($Megacyte == 'buy'){
		echo "Megacyte: $MegaBuyAmt units for $MegacyteBuyValue ISK";
		echo "<br>";
	}
	if ($Mexallon == 'buy'){
		echo "Mexallon: $MexBuyAmt units for $MexallonBuyValue ISK";
		echo "<br>";
	}
	if ($Nocxium == 'buy'){
		echo "Nocxium: $NocxBuyAmt units for $NocxiumBuyValue ISK";
		echo "<br>";
	}
	if ($Pyerite == 'buy'){
		echo "Pyerite: $PyeBuyAmt units for $PyeriteBuyValue ISK";
		echo "<br>";
	}
	if ($Tritanium == 'buy'){
		echo "Tritanium: $TritBuyAmt units for $TritaniumBuyValue ISK";
		echo "<br>";
	}
	if ($Zydrine == 'buy'){
		echo "Zydrine: $ZydBuyAmt units for $ZydrineBuyValue ISK";
		echo "<br>";
	}
	
echo "<h3>Total Value Sold to Corp: $TotalBuyValue ISK";

}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	echo "<h2>Buying from Corp:</h2>";
	if ($Isogen == 'sell'){
		echo "Isogen: $IsoSellAmt units for $IsogenSellValue ISK";
		echo "<br>";
	}
	if ($Megacyte == 'sell'){
		echo "Megacyte: $MegaSellAmt units for $MegacyteSellValue ISK";
		echo "<br>";
	}
	if ($Mexallon == 'sell'){
		echo "Mexallon: $MexSellAmt units for $MexallonSellValue ISK";
		echo "<br>";
	}
	if ($Nocxium == 'sell'){
		echo "Nocxium: $NocxSellAmt units for $NocxiumSellValue ISK";
		echo "<br>";
	}
	if ($Pyerite == 'sell'){
		echo "Pyerite: $PyeSellAmt units for $PyeriteSellValue ISK";
		echo "<br>";
	}
	if ($Tritanium == 'sell'){
		echo "Tritanium: $TritSellAmt units for $TritaniumSellValue ISK";
		echo "<br>";
	}
	if ($Zydrine == 'sell'){
		echo "Zydrine: $ZydSellAmt units for $ZydrineSellValue ISK";
		echo "<br>";
	}
	
echo "<h3>Total Value Bought from Corp: $TotalSellValue ISK";
echo "<br><br>";
echo '<button type="button" onclick="CCPEVE.createContract(1)"><h3>Click To Create Contract</h3></button>';

}

echo "<br><br><br>";

?>

</body>
</html>