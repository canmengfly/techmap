function remove(){
    document.getElementById("index").classList.remove("active");
	document.getElementById("ai").classList.remove("active");
	document.getElementById("bd").classList.remove("active");
	document.getElementById("cc").classList.remove("active");
	document.getElementById("tech").classList.remove("active");
	document.getElementById("dev").classList.remove("active");
	document.getElementById("cp").classList.remove("active");
	document.getElementById("yy").classList.remove("active");
}

//首页加载
	function main()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/index.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("index").classList.add("active"); 
	}
    //人工智能
	function ai()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/ai.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("ai").classList.add("active");
	}
	//大数据
	function bd()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/bd.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("bd").classList.add("active");
	}
	//云计算
	function cc()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/cc.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("cc").classList.add("active");
	}
	//通用技术
	function tech()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/tech.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("tech").classList.add("active");
	}
	//服务运维
	function dev()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/dev.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("dev").classList.add("active");
	}
	//产品
	function cp()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/cp.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("cp").classList.add("active");
	}
	//运营
	function yy()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("main_ajax").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET","data/yy.xml",true);
        xmlhttp.send();
        remove();
		document.getElementById("yy").classList.add("active");
	}