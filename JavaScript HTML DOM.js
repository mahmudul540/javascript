<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>
<p>Finding HTML Elements Using <b>document.forms</b>.</p>

<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>These are the values of each element in the form:</p>

<p id="demo"></p>

<script>
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
