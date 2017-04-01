/*
	自定义静态函数库
	
	作者：逍遥的医生
*/


var whole="";






//判断参数是否存在
function isNull(data)
{
	return (data == "" || data == undefined || data == null) ? true : false;
	//参数没有为真
}


/*
	时间
		2016年11月19日
	说明
		动态创建一个style标签
	举例
		<div id="d">123</div>
		addStyleNode("#d{color:red;font-size:50px;}");

*/
function addStyleNode(str){
	var styleNode=document.createElement("style");
	styleNode.type="text/css";
	if( styleNode.styleSheet){
		styleNode.styleSheet.cssText=   str;       //ie下要通过 styleSheet.cssText写入.   
	}else{
		styleNode.innerHTML=str;       //在ff中， innerHTML是可读写的，但在ie中，它是只读的. 
	}
	document.getElementsByTagName("head")[0].appendChild( styleNode );
}


/*
	时间
		2016年11月19日
	说明
		整体布局函数
	举例
		var entirety_c={
			width:"1000px",
			height:"1000px",
			background:"red",
			margin:"0 auto 0 auto"
			};
		entirety(entirety_c);

*/
function entirety(entirety_c)
{
	var a0 =arguments[0]//宽度
	var a1 =arguments[1]//高度
	var a2 =arguments[2]//背景颜色
	var div=document.createElement("div");
	div.setAttribute("id","entirety");
	document.getElementsByTagName("body")[0].appendChild(div);
	//document.body.appendChild(div);
	
	var span=document.createElement("span");
	var entirety =document.getElementById("entirety");

	for(var c in entirety_c)
	{
		entirety.style[c] = entirety_c[c];
	}
	//div.style.cssText="width:200px;height:200px;background:#636363;"
	/*
	margin:10px 5px 15px 20px;
	上外边距是 10px
	右外边距是 5px
	下外边距是 15px
	左外边距是 20px
	*/
	var a0 =arguments[0]//宽度
	var a1 =arguments[1]//高度
	var a2 =arguments[2]//背景颜色
	var entirety_String="<div id=\"entirety\" style=\" width:"+500+"px; height:300px; background-color:#000;'>"+"</div>";
	whole=entirety_String;
	//alert(entirety_String);

	//var entirety = document.createElement('entirety');
	//var newtext=xmlDoc.createTextNode('First');
	//entirety.appendChild(newtext);
}
/*
	时间
		2016年11月22日
	说明
		标题内容函数
	举例
		var title_c={
			width:"1000px",
			height:"100px",
			background:"green",
			textAlign:"center",
			lineHeight:"80px",
			content:"购物网站开始"
		}

		title(title_c);

*/

function title(title_c)
{
	var div=document.createElement("div");
	div.setAttribute("id","title");
	document.getElementById("entirety").appendChild(div);
	var title =document.getElementById("title");
	for(var c in title_c)
	{
		if(c!="content")
		{
			title.style[c] = title_c[c];
		}
		else
		{
			//alert(title_c["content"]);
			title.innerHTML=title_c["content"];
		}
	}
	
	
	
}
/*
	时间
		2016年11月22日
	说明
		头部图片样式
	举例
		var img_c="img/9-150313112P1.jpg";
		var top_c={width:"1000px",height:"200px",background:"yellow"};
		top(top_c,img_c);

*/

//头部样式设计
//整体布局函数
function top()
{
	top_c = arguments[0];
	var img_c=isNull(arguments[1]);
	var div=document.createElement("div");
	div.setAttribute("id","top");
	document.getElementById("entirety").appendChild(div);
	var top =document.getElementById("top");

	for(var c in top_c)
	{
		top.style[c] = top_c[c];
	}
	if(!img_c)//有参数时为假
	{
		//alert("图片");
		var img=document.createElement("img");
		img.setAttribute("id","img");
		img.setAttribute("width","1000px");
		img.setAttribute("height","200px");
		img.setAttribute("src",arguments[1]);
		document.getElementById("top").appendChild(img);
	}
	
}
//在头部中增加样式
function style(){
	var style = document.createElement("style"),   
	str = "body{background:#005;color:#fff} a{color:#fff;text-decoration:none;} a:hover{color:red;text-decoration:underline}";  
	style.type="text/css";
	

	//alert(style.type);
	if(style.styleSheet){//ie下  
		style.styleSheet.cssText = str;  
	} else {  
		//style.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))  
		 style.appendChild(document.createTextNode(str)) 
	}  
	document.getElementsByTagName("head")[0].appendChild(style);

}

//将样式写入文件中
function Write2Text()
{

//如果是服务器端就是Server.CreateObject("Scripting.FileSystemObject");
var fso = new ActiveXObject("Scripting.FileSystemObject");  
var f = fso.CreateTextFile("E://a.txt", true);
 
f.write(whole)
 f.WriteBlankLines(1)

f.Close();
}
//从文件中读取样式
function getPath()
    {
    //document.getElementById("tt").value = "";
    var ForReading = 1; 
    var filePath =  "E://a.txt"
    if(filePath == "")
    return;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var textFile = fso.GetFile(filePath);
    var ts = fso.OpenTextFile(filePath, ForReading); 
    var result = ts.ReadAll();
 
   alert(result)
 }
 
 
 
 
/*
	时间
		2016年11月23日
	说明
		ul样式
	举例
		var ul_c = {
			div:"dd",
			id:"da",
			style:{listStyle:"none",width:"120px",backgroundColor:"#0C3",height:"100px"},
			li:3,
			li_style:{float:"left",width:"30px",height:"30px",backgroundColor:"#039",textAlign:"center",marginLeft:"10px"},
			content:[
				{content:"kit"},
				{content:"ony"},
				{content:"ton"}
			]
		}
		var hrefs = ['#a','#b','#c'];//链接数组
		var ids = ['aaa','bbb',"ccc"];//id数组


		ul(ul_c);

*/
function ul(ul_c)
{
	var ul = document.createElement('ul');
	//alert(ul_c["li_style"].float);
	//ul.setAttribute("id","da");
	ul.id=ul_c["id"];
	
	for(var i=0;i<ul_c["li"];i++){
		var li = document.createElement('li');
		var a = document.createElement('a');
		a.setAttribute('href',hrefs[i]);
		a.id = ids[i];
		//alert(ul_c["content"][i].content+"#"+ul_c["content"].length);
		a.innerHTML = ul_c["content"][i].content;
		
		li.appendChild(a);
		ul.appendChild(li);
	}
	
	$(ul_c["div"]).appendChild(ul);
	for(var style_c in ul_c["style"])
	{
		//alert(style_c);
		//alert(ul_c["style"][style_c]);
		//alert(document.getElementById("da"));
		$(ul_c["id"]).style[style_c]=ul_c["style"][style_c];
	}
	for(var li_style in ul_c["li_style"])
	{
		var li=document.getElementsByTagName("li");
		for(var i=0;i<li.length;i++)
		{
			document.getElementsByTagName("li")[i].style[li_style]=ul_c["li_style"][li_style];
		}
		//alert(li_style+"#"+ul_c["li_style"][li_style]);
	}

	//$("da").style.width="100px";
	//$("da").style.height="100px";
	//$("da").style.backgroundColor="#0C3";
	//$("da").style.listStyle="circle";
	//$("da").style.textAlign="center";
	
	
}
