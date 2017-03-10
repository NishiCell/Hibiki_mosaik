document.write(
    "<p>javajavascript</p>"
);

var num = 10;
num = num * 10;
document.write("<p>結果は" + num + "です</p>");

function hyoji2(num)
{
  if (num == 0)
  {
    document.getElementById("target").style.visibility="visible";
  }
  if(num == 1)
  {
    document.getElementById("target").style.visibility="hidden";
  }
}