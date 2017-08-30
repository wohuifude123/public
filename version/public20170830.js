/**
 * JS函数库public
 *
 * @作者 刘建
 * @版本 0.0.5
 * @开始时间 2016年03月02日
 * @更新时间 2017年08月28日
 * @特点 操作简单，兼容性强，适合中国人的习惯
 * @网址 暂无
 */


(function (){
	//注册命名空间'pub'到window对象上
	window['pub'] = {};
	//各种选择器的操作
	/*
	时间
		2017年08月28日
	说明
		把获取类名函数注册到'pub'命名空间中
	举例
		<div class="abc"></div>
		<script type="text/javascript">
			var abc =pub.gec("abc")[0];
			abc.innerHTML = "我的喜欢是风筝";
		</script>
	*/
	window['pub']['gec']=getElementsClass;
	

})();



// 为了避免与JQ发生冲突，更改函数的名称
function $(id)//获取id
{
	return  "string" == typeof id ? document.getElementById(id) : id;
	//return  document.getElementById(id);
}

/* 2017年7月29日开始 */
function getID(id)//获取id
{
	return  "string" == typeof id ? document.getElementById(id) : id;
	//return  document.getElementById(id);
}
/* 2017年7月29日结束 */

/*2016年11月17日*/
/*
	正则基础学习
		\d : 匹配任意一个数字，0~9中的任意一个
		\s : 匹配任意一个空白字符
		\b : 匹配一个单词边界，不匹配任何字符
		\w : 匹配任意一个字符（字母、 数字、下划线）
		\n : 查找换行符
		\u : 通常用来匹配汉字
	
	方括号：
		[abc] : 查找方括号之间的任何字符。
		[^abc] : 查找任何不在方括号之间的字符。
		[0-9] : 查找任何从 0 至 9 的数字。
		[a-z] : 查找任何从小写 a 到小写 z 的字符。
		[A-Z] : 查找任何从大写 A 到大写 Z的字符。

	举例
		var r ="[0-9]{3,}";
		var re = new RegExp(r);	
		var str="123456";	
		var jg=re.exec(str);
		alert(jg);//结果123456
*/

/*2016年11月17日*/

/*2016年4月2日*/
	
function idname(idc)
{
	this.name=idc;
	this.className=idc;
	//alert("有参数");
}

/*
function idname()//如果有这个函数，先执行
{
	alert("无参数");
}
*/

	/*
		2017年7月29日
		
		增加使用实例
		
		<div id="avc"></div>
			
		var ida = new idname("avc");
		ida.id("avc").innerHTML = "AA开始测试了";
			
	*/
	
idname.prototype = (function(){//获取ClassName或者Id
		hqid=function(id)
		{
			alert("hqid");
			return document.getElementById(id);
		},
		hqclass=function(className)
		{
			/*
			if(document.getElementsByClassName)//支持这个函数
			{
				alert("ClassName直接");
				return document.getElementsByClassName(className);
			}
			else
			{
			*/

						alert("ClassName间接");
						var tags=document.getElementsByTagName('*');//获取标签
						var tagArr=[];//用于返回类名为className的元素
						for(var i=0;i < tags.length; i++)
						{
							if(tags[i].className == className)
							{
								tagArr.push(tags[i]);//保存满足条件的元素
								//alert(i);
							}
						}
						return tagArr;
			//}
		}
		return {
			id:hqid,
			class:hqclass
		}	
			
		
})();
		


/*
//测试push函数
var sz = [];
var a = [1,2,3,4,5];
for(var i=0;i<a.length;i++)
{
	sz.push(a[i]);
	alert(sz[i]);
	
}
*/


function getClass(tagName,className) //获得标签名为tagName,类名className的元素
{
    if(document.getElementsByClassName) //支持这个函数
    {
		return document.getElementsByClassName(className);
    }
    else
    {
		var tags=document.getElementsByTagName(tagName);//获取标签
		var tagArr=[];//用于返回类名为className的元素
        for(var i=0;i < tags.length; i++)
        {
			
            if(tags[i].className == className)
            {
                tagArr.push(tags[i]);//保存满足条件的元素
				alert(i);
            }
        }
        return tagArr;
    }

}
/*2016年4月2日*/



/*2016年4月3日*/
function tag(TagOperation,TagName,Tagcs)
{
	var TagElements = TagOperation.getElementsByTagName(TagName);
	if(Tagcs=="left")
	{
		for(var i =0;i< TagElements.length;i++)
		{
			//alert(i);
			TagElements[i].style.float = "left";
		}
	}
	if(Tagcs=="none")
	{
		//alert(0);
		TagElements[0].style.listStyle="none";
	}
}
/*2016年4月3日*/


/*2016年4月9日*/
function jsonArg(info){
    var userinfo="名字: "+info.name+"\n年龄:"+info.age+"\n性别:"+info.desc;
    alert(userinfo);
}
//jsonArg({desc:"男孩",name:"王子",age:23});
//jsonArg({name:"公主",age:22,desc:"女孩"});

// \r换行
// \n新行


cou({
    a: 1,
    b: 2,
    c: 3
})
 
function cou(o) {
    return o.a + o.b + o.c;
}
/*
alert(
cou({
    a: 1,
    b: 2,
    c: 3
	})
);

*/


	function Parent(){  
		this.name="李小龙";  
		this.age=32;    
	};   
	Parent.prototype.lev=function(){  
		return this.name; 
	};
	Parent.prototype.cou=function(a){  
		return a+1;
	};
	var  x =new  Parent();  
	//alert(x.lev()); 
	//alert(x.cou(1)); 
/*2016年4月9日*/


/*2016年4月15日*/


function arg()
{
	var len= arguments.length;
	alert("参数的长度："+len);
	var a = new Array();
	for(var i = 0;i<len;i++)
	{
		a.push(arguments[i]);
	}
	var x =a[0];
	var y =a[1];
	 
	if(len==0)
	{
		alert(0);
	}
	else
	{
		if(len==1)
		{
			if(y==undefined)
			{
				alert(x+"1");
				return 1;
			}
		}
		else
		{
			if(len==2)
			{
				if(y==undefined)
				{
					return 1;
				}
				else
				{
					alert(x+"||"+y);
				}
			}
			else
			{
				alert(x+"||"+y+"||3");
			}
		}
	}
}
/*
var x1="aaa";
var y1="bbb";
arg(x1);
arg(y1);
arg(x1,y1);
arg();

*/

//arg("a1","b1","c1");

function ad(p1_a,p2_b)
{
	alert("ad");
	var a = p1_a;
	var p =arg(p1_a,p2_b);
	if(p==1)
	{
		alert("p==1");
		
		return a;
	}
	else
	{
		var b=p2_b;
		return a+b;
	}
}
/*
var q = ad(1,2);
alert(q);
q=ad(5);
alert(q);
*/



function f() 
{ 
    var len= arguments.length; 
    if(1 == len) 
    {
		alert("1 == len"); 
        var length = arguments[0]; 
        var width = arguments[1]; 
        f2(length,width); 
    } 
    else 
    { 
        var length = arguments[0]; 
        f1(length); 
    } 
} 

function f1(length) 
{ 
    alert("高为："+length); 
} 

function f2(length,width) 
{
	if(width==undefined)
	{
		alert("width==undefined");
		alert("f2高为："+length+"，宽为："+5);
	}
}

//f(1);


//在函数中可以用f.arguments[0]和f.arguments[1]得到调用时传入的第一和第二个参数




/*2016年4月15日*/


/*2016年9月10日*/
//JSON测试


//var  $= {}
var  json= {};//空对象
 
	//$.ajax=function(a){
json.ajax=function(a){
		//alert(a.type);
		//alert(a.data.val1);
		//alert(a.data.val2);
		a.success("成功");
	}

//$.ajax({
	
	/*
 json.ajax({
    type:"POST", 
	data:{val1:"abc","val2":123,"val3":"456"},
	success:function(msg){  
        alert(msg);
    }
});
*/

/*2016年9月10日*/


/*
function text(){

var person={fname:"John",lname:"Doe",age:25};

var txt;
for (x in person)
  {
	  txt=txt + person[x]
	  alert(x+'#'+person[x]);
  }
}
*/

//text();
/*
	功能
		设置各种样式

	调用方法
		setStyle(head,{width:"200px",height:"70px",display:"block",backgroundColor:"red",color:'blue'})
*/
function setStyle(obj,css){
  for(var atr in css){
	  //alert(atr+'#'+css[atr]);
    obj.style[atr] = css[atr];
  }
}
//var head= document.getElementById("head");




/*2016年9月10日*/


/*2016年9月12日*/

//执行字符串的函数

/*
function a(id){
	var aid= "document.getElementById('"+id+"')";
	alert(aid);
	//eval("document.getElementById('wo').style.backgroundColor='blue'");

	b(aid,'backgroundColor');
}

function b(b1,b2){
	//b1.style[b2]='red';
	//b1.style.backgroundColor='red';
	//alert(b2);
	var b3= b1+'.style.'+b2+"='red'";
	alert(b3);
	eval(b3);
}

a('wo');
*/

/*2016年9月12日*/

/*2016年9月14日*/

/*
	2017年1月15日新增
	
	
	调用方法
	
<script type="application/javascript">
   var count = 10;
   var sh;
   function counter(){
		 sh = setInterval(jishi,1000);
	}

        function jishi(){
            var btn = document.getElementById("btn");
            btn.innerHTML = "倒计时"+(--count)+"秒";
            if(count == 0){
                btn.disabled = false;
                btn.innerHTML = "开始点击";
                clearInterval(sh);
				$L("#btn").click_L(function(){
                    var result = document.getElementById("result");
                    setInterval(function(){
                        //执行点击操作
                        result.innerHTML = "您点击了："+(count++)+"次";
                    },100);
				})
                btn.click();
            }
        }

        window.onload = counter;
</script>

<body>
 <button id="btn" disabled="disabled">倒计时10秒</button>
    <span id="result"></span>
</body>

*/

/*
var $L =function (id){
    var re = new RegExp("#(\\w+)","i");
    var result = re.test(id);
	this.xid = document.getElementById(RegExp.$1);
	//this.xid = document.getElementById(id);
    if(result&&!(this instanceof $L))// instanceof 用于判断一个变量是否某个对象实例
	//if(!(this instanceof $))
    {
		
		//alert(1);
        return new  $L(id);
    }
}

*/


/*
2017年1月18日
//两种定义函数方式
//aaa();
//这样调用就会出错
var aaa = function(){
	alert("A");   
}
aaa();
//这样就不会出错   
               
//先调用后声明   
bbb();   
function bbb(){
	alert("bb");
}

*/

/*
2017年1月18日
var base = {  
    name : "base",  
    getInfo : function(){  
       return this.name;  
    }  
}  
    
var ext1 = {  
    id : 0,  
    __proto__ : base  
}  
    
var ext2 = {  
    id : 9,  
    __proto__ : base  
}  

   
alert(ext1.id);  
alert(ext1.getInfo());  
alert(ext2.id);  
alert(ext2.getInfo());  
*/

/*
2017年1月18日
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {
		alert("Foo");
	}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar() // 创建Bar的一个新实例
//alert(test.method());
//alert(test.value);
//alert(test.foo);
*/


/*         
var $L = function (id){

    return new $L.fn.init(id);
}
*/

var $L = function (selector){

    return new $L.fn.init(selector);
}




$L.fn = $L.prototype;

/*

	2017年1月22日
	
	调用方法

	alert($L("#myid").innerHTML())
	var cc = $L("#myid").zo();
	alert(cc.a+"#"+cc.b)
*/

var version = "版本";
$L.fn = {
	jquery: version,
	innerHTML:function(){
		return this.xinnerHTML;
	},
	/*
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
	*/
	zo:function(){
		return {a:'a1',b:'b1'};
	}
};

/*

	2017年1月22日
	
	调用方法
	
	alert($L("#myid").name123())
	$L("#myid").sayHello()
	
*/


/*
$L.fn = function () {

	name123= function () {
		return this.xinnerHTML;
	}
	sayHello = function () {
		alert("Hello,I am "+this.xinnerHTML);
	}
	return {
		name123: name123,
		sayHello: sayHello
	}
} ();
*/


/*

	2017年1月22日
	
	调用方法
	
	alert($L("#myid").xid.innerHTML);
	alert($L("#myid").xinnerHTML); 

*/
      
/*
$L.fn.init = function (id){
    var re = new RegExp("#(\\w+)","i");
    var result = re.test(id);//test() 方法用于检测一个字符串是否匹配某个模式
	var Lid =document.getElementById(RegExp.$1);
    this.xid = document.getElementById(RegExp.$1);
	this.xinnerHTML =Lid.innerHTML;
}
*/

/*
	修改记录
	
	时间：2017年7月14日
	内容：增加类的获取

*/

$L.fn.init = function (selector){
	var re,//选择器的标志
		result,
		Lid;
	if(selector.charAt(0) === '#')
	/*
		对于string,number等基础的类型，==和===是有区别的
		1）不同类型间的比较，==比较“转化成同一类型后的值”看值是否相等，===如果类型不同，其结果就是不等的
		2）同类型比较，直接进行“值”比较，两者结果一样
	*/
	{
		re = new RegExp("#(\\w+)","i");
		result= re.test(selector);//test() 方法用于检测一个字符串是否匹配某个模式
		Lid=document.getElementById(RegExp.$1);
		this.xid = document.getElementById(RegExp.$1);
		this.xinnerHTML =Lid.innerHTML;
	}
	else if(selector.charAt(0) === '.')
	{
		re = /(.)([\w]*)/g;
		result = re.test(selector);
		if(result==true)
		{
			this.xclass = getElementsClass(RegExp.$2);
		}
	}


}

$L.fn.init.prototype = $L.fn;


$L.fn.show = function(a){
	if(this.xid != null)
	{
    	alert("获取ID成功=="+this.xid+'#'+a);
	}
	if(this.xclass != null)
	{
		alert("获取类的成功=="+this.xclass+'●'+a);
	}
	return this;
};

$L.fn.css = function(cs,style){
    //alert(cs+'#'+style+'#'+xid);
	this.xid.style[cs]=style;
	return this;
};


//$("#xx").show("red");

//$L("#xx").css("backgroundColor",'blue');



$L.fn.click_L = function(cl){
    var c = cl;
	this.xid.onclick =cl;
	/*
	xid.onclick = function()
	{
		onclick_L(c);
	}	
	*/
	return this;
};


//鼠标指针位于元素上方

/*
	时间
		2017年03月03日
	说明
		元素鼠标事件
	举例
	
		<div id="div">
			<div id="div01">这是div01</div>
			<div id="div02">这是div02</div>
		</div>
		
		$L("#div").mouseover(function(){
		  $L("#div").css("background-color","yellow");
		});
		$L("#div").mouseout(function(){
		  $L("#div").css("background-color","white");
		});
*/


$L.fn.mouseover = function(cl){
    var c = cl;
	this.xid.onmouseover =cl;

	return this;
};

$L.fn.mouseout = function(cl){
    var c = cl;
	this.xid.onmouseout =cl;

	return this;
};

//不会发生冒泡
/*
	时间
		2017年04月03日
*/
$L.fn.mouseenter = function(cl){
    var c = cl;
	this.xid.onmouseenter =cl;

	return this;
};

$L.fn.mouseleave = function(cl){
    var c = cl;
	this.xid.onmouseleave =cl;

	return this;
};

//但是firefox没有这两个事件

/*
	时间
		2017年04月03日
	说明
		鼠标点击事件
	举例
		$L("#user_cancel").onclick(function(){
			alert("退出");
		})
*/
$L.fn.onclick= function(k_L){
	var k_L = k_L;
	this.xid.onclick =k_L;

	return this;
}

/*2017年7月14日开始*/

/*2017年7月14日结束*/


$L.fn.bind_L = function(cl){
	var  method=cl;
	var  bind_L= {};
	
    
	bind_L.execute_L=function(th){
		//th.success("成功");
		
		//alert('th='+th);
	
		xid.onclick =th.click;
		//th.mouseover("成功123");

	}
	bind_L.execute_L(method);
	//alert("method");
	return this;
};

/*
$L("#sj").bind_L(
{
	success:function(msg){  
        alert(msg);
    },
	mouseover:function(msg){
		alert(msg); 
	
        
    },
	click: function() {
		$L("#sj").css("backgroundColor",'blue');
	}
});
*/



function onclick_L(k_L){
	alert(k_L);
}


//$L("#bx").click_L(function(){alert("测试现在开始");$L("#xx").css("backgroundColor",'red')});

//$L("#xx").mouseover(function(){$L("#xx").css("backgroundColor",'yellow')});

/*2016年9月14日*/

/*2016年9月21日*/

/*
	2016年11月15日
	
	ajax功能实现函数
	
	调用方法
	$_a.ajax_L({
		url:"aja.php",
		type:"POST", 
		data:{val1:"abc","val2":123,"val3":"456"},
		fun:"stateChanged_L",
		success:function(msg){  
			alert(msg);
		}
	});
	
	2016年11月16日
	
	调用方法
	$_a.ajax_L({
        url:'cs001.php',              //请求地址
        type: "POST",                       //请求方式
        data: { name: "super", age: 20 },        //请求参数
        dataType: "json",
		success: function (response, xml) {
            // 此处放成功后执行的代码
			document.getElementById("img01").innerHTML=response;
        },
        fail: function (status) {
            // 此处放失败后执行的代码
        }
    });
	
	
*/
$_a={};

$_a.ajax_L= function(options){
	//alert('ajax_L');
	//alert(a.type);
	//alert(a.data.val1);
	//alert(a.data.val2);
	//var url=a.url;
	//var type=a.type;
	xmlHttp=GetXmlHttpObject();
	//alert("发送=="+options.url);
	
	options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
	
    var params = formatParams(options.data);
	
	
	
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request");
		return;
	}
	//a.success("成功");
	
	/*
	初版函数调用
	xmlHttp.onreadystatechange=stateChanged_L;
	*/
	

	xmlHttp.onreadystatechange=function () {
            if (xmlHttp.readyState == 4) {
                var status = xmlHttp.status;
                if (status >= 200 && status < 300) {
					//alert("aa");
                    options.success && options.success(xmlHttp.responseText, xmlHttp.responseXML);
                } else {
                    options.fail && options.fail(status);
                }
            }
        }



	//xmlHttp.onreadystatechange=eval(a.fun);
	//eval()函数可计算某个字符串，并执行其中的 JavaScript 代码。
	
	//连接 和 发送 - 第二步
	
        if (options.type == "GET") {
            xmlHttp.open("GET", options.url + "?" + params, true);
            xmlHttp.send(null);
        } else if (options.type == "POST") {
			//alert("发送=="+options.type);
			
			//alert("发送=="+options.url);
		
            xmlHttp.open("POST", options.url, true);
            //设置表单提交时的内容类型
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.send(params);
        }
	
	
	
}

function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

//格式化参数
function formatParams(data) {
	var arr = [];
	for (var name in data) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
		/*
			定义和用法
			encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
		*/
	}
	arr.push(("v=" + Math.random()).replace(".",""));
	/*
		定义和用法
			push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
		提示和注释
			注释：该方法会改变数组的长度。
			提示：要想数组的开头添加一个或多个元素，请使用 unshift() 方法。
	*/
	var a1 = arr.join("&");
	//alert(a1);
	return a1;
	/*
		定义和用法
			join() 方法用于把数组中的所有元素放入一个字符串。
			元素是通过指定的分隔符进行分隔的。
	*/
}

function random(){   
 
    return Math.floor(Math.random() * 10000 + 500);   
 
}


function stateChanged_L() 
{
	/*
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{
		//alert(xmlHttp.responseText);
		document.getElementById("img01").innerHTML=xmlHttp.responseText;
	}
	*/

	if (xmlHttp.readyState==4 && xmlHttp.status==200)
		{
			document.getElementById("img01").innerHTML=xmlHttp.responseText;
		}



}
/*2016年9月21日*/


/*2016年11月17日*/

/*
	说明
		自定义属性的功能
	举例
		<div id="a1" data="bg|height|width">111</div>
		data("a1");

*/

function data(id){
	var data = document.getElementById(id).getAttribute("data");
	//alert(data);
	var ar = new Array();//记录位置
	//var index =data.indexOf("|");
	for(var i=0,d=0,k; i<data.length; i++) {
		k = data.charAt(i);
		//alert(k);
		if(k=="|"){
			ar.push(i);
			//alert("d=="+d);
			d++;
		}
	}
	var arc=new Array();//存放自定义的属性
	for(var i_1=0,char=0; i_1<ar.length; i_1++) {
		//alert(ar[i_1]);
		var char_d=data.substring(char,ar[i_1]);
		//alert(char_d);
		arc.push(char_d);
		char=ar[i_1]+1;
		}
	arc.push(data.substring(ar[ar.length-1]+1,data.length));//获取最后一个自定义的属性
	
	for(var i_c=0; i_c<arc.length; i_c++) {
		//alert(arc[i_c]);
		if(arc[i_c]="bg"){
			document.getElementById(id).style["backgroundColor"]="red";
		}
		if(arc[i_c]="height"){
			document.getElementById(id).style["height"]="100px";
		}
		if(arc[i_c]="width"){
			document.getElementById(id).style["width"]="500px";
		}
	}
}
/*
	时间
		2016年11月18日
	说明
		判断浏览器的种类
	举例
		var userAgent = navigator.userAgent;
		var browser;  
		var version;
		var browserMatch = uaMatch(userAgent.toLowerCase());
		if (browserMatch.browser){  
		  browser = browserMatch.browser;  
		  version = browserMatch.version;  
		}
		alert(browser+version);
*/
var abrowser={//所有浏览器的正则
	rMsie:"(msie\\s|trident.*rv:)([\\w.]+)",
	rFirefox:"(firefox)\\/([\\w.]+)"
	
	 
	//rOpera:"/(opera).+version\/([\w.]+)/",   
	//rChrome:"/(chrome)\/([\w.]+)/",   
	//rSafari:"/version\/([\w.]+).*(safari)/"
	
}
//判断浏览器的种类
function uaMatch(ua){
	var re = null;
	var mat = null;
	for(var u in abrowser)
	{
		//alert(ab[u]);
		switch (u)
		{
			//IE浏览器
			case "rMsie":
				re = new RegExp(abrowser[u]);
				mat = re.exec(ua);
				if(mat != null)
				{
					document.getElementById("browser").innerHTML="IE"+mat[2];
					document.getElementById("browser").style["color"]="green";
					return { browser : "IE", version : mat[2] || "0" };  
				}
			break;
			//火狐浏览器
			case "rFirefox":
				//alert(ab[u]);
	
				re = new RegExp(abrowser[u]);
				mat = re.exec(ua);
				//alert("mat=="+mat);
				if(mat != null)
				{
					
					document.getElementById("browser").innerHTML="争取获取了浏览器=="+mat[1]+mat[2];
					document.getElementById("browser").style["color"]="red";
					return { browser : mat[1] || "", version : mat[2] || "0" };    
				}
			break;
			//缺省情况
			default:
				dom = document.getElementsByTagName(dom);
			break;
		}
	};

}  

/*2016年11月17日*/


/*2016年11月19日*/


/*
	说明
		自动创建表格
	举例
		var table={
			
			tr:3,td:5,
			content:
			[
				{td:"王子1"},{td:"公主4"},{td:"公主7"},{td:"王子10"},{td:"王子13"},
				{td:"王子2"},{td:"公主5"},{td:"公主8"},{td:"王子11"},{td:"王子14"},
				{td:"王子3"},{td:"公主6"},{td:"公主9"},{td:"王子12"},{td:"王子15"}
			],
			border:0,
			td_style:"red"
		}
		
		autoTable("table",table);
*/


/*
	时间
		2017年02月11日
	说明
		自动创建表格
	举例
		var table={
			tr:3,td:5,
			content:
			[
				{td:"王子1"},{td:"公主4"},{td:"公主7"},{td:"王子10"},{td:"王子13"},
				{td:"王子2"},{td:"公主5"},{td:"公主8"},{td:"王子11"},{td:"王子14"},
				{td:"王子3"},{td:"公主6"},{td:"公主9"},{td:"王子12"},{td:"王子15"}
			],
			border:2,
			td_style:"red",
			td_border:"solid"
			
		}
		
		autoTable("table",table);
*/






//自动创建表格
function autoTable(id,table){
	var tr_l;//行数
	var td_l;//列数
	//alert(table.content.length);
	var td_style;//列的样式
	var td_border;
	var table_c=document.createElement("table");
	
	for(var t in table)
	{
		//alert(t);
		//alert(table[t]);
		switch(t){
			case "tr":
				tr_l=table[t];
			break;
			case "td":
				td_l=table[t];
			break;
			case "border":
				table_c.style["border"]=table[t]+"px solid" ;
				//alert(table_c.style.border);
			break;
			case "td_style":
				td_style=table[t];
			break;
			
			case "td_border":
				td_border=table[t];
			break;
			
			default:
			
			break;
		}
		 
		
	}
	
	var content = new Array();
	
	for(var i_x=0;i_x<tr_l;i_x++){
		content[i_x]=new Array(); //声明二维，每一个一维数组里面的一个元素都是一个数组；
		for(var i_y=0;i_y<td_l;i_y++){
			content[i_x][i_y]=i_x*i_y;
			//alert(i_x+"#"+i_y);
		}
	}
	
	var i_x_c=0,i_y_c=0;
	for(var i_content=0;i_content<table.content.length;i_content++)
	{
		//alert(table.content[i_content].td);

		content[i_x_c][i_y_c]=table.content[i_content].td;
		//alert("content=="+i_x_c+"#"+i_y_c);
		i_y_c++;
		if(i_y_c>=td_l)
		{
			i_x_c++
			i_y_c=0;
		}


	}
	//alert(content[2]);
	
	//循环创建内容
	for(var i=0;i<tr_l;i++)
	{
		var tr_c=document.createElement("tr");
		for(var j=0;j<td_l;j++)
		{
			var td_c=document.createElement("td");
			td_c.style.color=td_style;
			td_c.style.borderStyle=td_border;
			td_c.innerHTML=content[i][j];
			tr_c.appendChild(td_c);
		}
		table_c.appendChild(tr_c);
	}
	document.getElementById(id).appendChild(table_c);

}
/*2016年11月19日*/


/*2017年02月10日*/

/*
	时间
		2017年02月10日
	说明
		创建二级目录
	举例

		<ul id="ca">
		<li class="cc">111</li>
		<li class="cc">222</li>
		<li class="cc">333</li>
		<li class="cc">444</li>
		<li class="cc">555</li>
		<li class="cc">666</li>
		<li class="cc">777</li>
		<li class="cc">888</li>
		</ul>
		
		
		//数据层
		var tree = {
					"a0": {
						"id": 0,
						"name": "a0",
						"children": {
							"b1": {
								"cname":"b0_1",
								"href":"https://www.baidu.com/"
							},
							"b2":  {
								"cname":"b0_2",
								"href":"https://www.youku.com/"
							},
							"b3": "b0_3"
						}
					},
					"a1": {
						"id": 1,
						"name": "a1",
						"children": {
							"b1": "b1_1",
							"b2": "b1_2",
							"b3": "b1_3"
						}   
					},
					"a2": {
						"id": 2,
						"name": "a2",
						"children": {}
					},
					"a3": {
						"id": 3,
						"name": "a3",
						"children": {
							"b1": "b3_1",
							"b2": "b3_2",
							"b3": "b3_3"
						}
					}
				};
		//视图层
		create("cc",tree);
*/

//控制层
function create(cn,tree)
{

	//闭包
	//var obj_lis = document.getElementById("ca").getElementsByTagName("li");
	var obj_lis =getElementsClass(cn);
	for(var i=0;i<obj_lis.length;i++)
	{
		
		//obj_lis[i].onclick = createNodeList;
		(function(i) {
			obj_lis[i].onclick = function(event)
			{
				event = event || window.event;
				var target = event.target || event.srcElement;
				if (target == this)
				createNodeList(cn,i,tree);
			};
		})(i);
    }
}



function createNodeList(cn,num,tree){
	//alert(a);
	
	var bc =getElementsClass(cn)[num].childNodes;
	var str=getElementsClass(cn)[num].innerHTML;
	//判断节点是否存在
	//alert(str);


	if(str.indexOf("<ul>")>=0)
	{
		if(bc[1].innerHTML !=  null)
		{
			if(bc[1].style.display=="")
			{
				bc[1].parentNode.removeChild(bc[1]); 
				return;
			}
		}

	}
	/*
	if(bc[1].innerHTML ==  null)
	{
		alert("空白");
	}
	*/
	var n = document.createElement("ul"),
            docfrag = document.createDocumentFragment();//创建文档碎片节点
	for(var key in tree)
	{
		if(tree[key].id==num)
		{
			//alert(tree[key].name)
			for( var item_t in tree[key].children)
			{
				var c = document.createElement("li"),
					span = document.createElement("a");
					//alert(tree[key].children[item_t]+"长度"+getJsonLength(tree[key].children[item_t]));
					//长度
					var JsonLength=getJsonLength(tree[key].children[item_t]);
					if(JsonLength!=1)
					{
						var children_f = tree[key].children[item_t];
						for( var item_f in children_f)
						{
							if(item_f == "href")
							{
								//alert(item_f);
								span[item_f]=children_f[item_f];
							}
							else
							{
								span.appendChild(document.createTextNode( children_f[item_f] ));
							}
						}
						
						span.target="new";
					}
					else
					{
						span.appendChild(document.createTextNode( tree[key].children[item_t] ));
						span.onclick= function()
						{
							//alert("成功");
							//stopBubble(this);
						}
					}

				c.appendChild(span);
				docfrag.appendChild( c );
				n.appendChild( docfrag );
				getElementsClass(cn)[num].appendChild(n);
				var b =getElementsClass(cn)[num].childNodes;
				var exist =getElementsClass(cn)[0].getAttribute("exist");
				if(exist == null)
				{
					//alert("没有定义属性");
				}
				else
				{
					//alert("存在"+exist);
				}
				//alert("exist=="+exist);
				getElementsClass("cc")[0].setAttribute("exist","1");
				/*
				alert(b[1].nodeName);
				alert(b[1].nodeType);
				alert(b[1].nodeValue);
				alert(b[1].innerHTML);
				
				alert(b[1].childNodes[0].nodeName);
				alert(b[1].childNodes[0].nodeType);
				alert(b[1].childNodes[0].nodeValue);
				alert(b[1].childNodes[0].innerHTML);
				*/
			}
		}	
	}

}
/*
	时间
		2017年03月03日
	说明
		获取类名标签
	举例
		var alength = getElementsClass("lma").length;
*/
function getElementsClass(classnames)
{
	var classobj= new Array();//定义数组 
	var classint=0;//定义数组的下标 
	var tags=document.getElementsByTagName("*");//获取HTML的所有标签 
	for(var i in tags)
	{//对标签进行遍历
		if(tags[i].nodeType==1)
		{//判断节点类型
			if(tags[i].getAttribute("class") == classnames)//判断和需要CLASS名字相同的，并组成一个数组 
			{
				classobj[classint]=tags[i];
				classint++;
			}
		}
	}
	return classobj;//返回组成的数组
}
//阻止元素继承
function stopBubble(e)
{
	alert(e);
	if (e && e.stopPropagation)
	{//非IE浏览器 
		e.stopPropagation(); 
	} 
	else
	{//IE浏览器 
		window.event.cancelBubble = true; 
	} 
}
//获取JSON长度
function getJsonLength(jsonObj) {
        var Length = 0;
		//alert(typeof(jsonObj)=="string");
		if(typeof(jsonObj)=="string") return 1;
        for (var item in jsonObj) {
            Length++;
        }
        return Length;
}

/*
	时间
		2017年02月10日
	说明
		清除空白节点
	举例
		cleanWhiteSpace(document.getElementById("ca"))
*/
function cleanWhiteSpace(element) 
{ 
	for(var i=0; i<element.childNodes.length; i++) 
	{ 
		var node = element.childNodes[i];
		// \s 匹配任意的空白符
		// \S 匹配任意不是空白符的
		if(node.nodeType == 3 && !/\S/.test(node.nodeValue)) 
		{
			//alert("空白节点清除"+i);
			node.parentNode.removeChild(node); 
		} 
	} 
} 



/*2017年02月10日*/

/*2017年02月11日*/

/*
	时间
		2017年02月11日
	说明
		获取字符位置
	举例
	
		var a ="cqcafsffnnfgf";
		alert(sposition(a,"f"));

*/
function sposition(string_letter,letter)
{
	var n = string_letter.indexOf(letter);
	//alert(n);
	
//	语法
//	stringObject.substr(start,length)

	var sArray = [];// 创建数组
	
	for(var i=0;i<string_letter.length;i++)
	{
		if(letter == string_letter.substr(i,1))
		{
			sArray.push(i); // 添加到最后
		}
	}
	
	if(sArray.length == 1)
	{
		return n;
	}
	else
	{
		return sArray;
	}
	
}

/*
	时间
		2017年02月11日
	说明
		创建节点树木
	举例
	
		//[数据层]
		var tree = {
					"id": 0,
					"a1":{
						"id": 1,
						"name": "a1",
						"children": {
							"b1": "b1_1",
							"b2": "b1_2",
							"b3": "b1_3"
						}   
					},
					"a2": {
						"id": 2,
						"name": "a2",
						"children": {
							"b2": "b2_1",
						}   
					}
		}
		//[视图层]
		window.onload = function(){
			var T = new Tree_m(tree);
			document.getElementsByTagName("body")[0].appendChild(T);
		}

*/


//[控制层]
var Tree_m = function ( module ){


    function createTree( obj ) {
        var root, count = 0;
		root = document.createElement("ul");
            //创建文档碎片节点
		var docfrag = document.createDocumentFragment();
			
        for(var key in obj){
            if(obj[key] == "id" || !obj[key].children) continue;
			var children_k = obj[key].children;
			for(var keyc in children_k){
				//alert(children_k[keyc]);
				var c = document.createElement("li"),
					span = document.createElement("span");
				span.appendChild(document.createTextNode( children_k[keyc]));
				c.appendChild(span);
				docfrag.appendChild( c );
				root.appendChild( docfrag );
				//root.children[count].appendChild( children_k[keyc] );
			}
            //count来判断插入的位置
            count++;
        }
		for(var i = 0 ;i<count;i++)
		{
			//返回指定节点 之后紧跟节点，在相同的树层级中
			//.nextSibling
			var obj = root.childNodes[i].nextSibling.innerHTML;
			//alert(obj);
		}
		
        return root;
    }

    var T = createTree(module);
	return T;
}

/*2017年02月11日*/

/*2017年02月16日*/

/*
	时间
		2017年02月16日
	说明
		去掉前后空格
	举例
		var str_cs  = "                  aaaaaaaaaaaaaaaaaa           "
		alert(str_cs)
		alert(str_cs.trim_l());

*/
String.prototype.trim_l=function(){
	// \s 元字符用于查找空白字符
	var reSpace=/^\s*(.*?)\s*$/;
	// 我们将使用 "W3School" 替换字符串中的 "Microsoft"：
	// var str="Visit Microsoft!"
    // document.write(str.replace(/Microsoft/, "W3School"))
	//$1 第一个组 即第一个括号 12345 
	//$2 第二个组 即第二个括号 67890 
	//var re = /(\d{5})(\d{5})/gi;
	//alert(str_r.match(re));
	//alert("re$1=="+RegExp.$1);
	//alert("re$2=="+RegExp.$2);
	return this.replace(reSpace,"$1");//去掉前后空格
};

/*
	时间
		2017年02月16日
	说明
		创建切换功能
	举例
	
		//数据层
		var user = 
		{ 
			"id":"tab",
			"div2":
			[
				{"class":"a1","content":"222333"}, 
				{"class":"a1","content":"123788"}, 
				{"class":"a1","content":"555666"} 
			],
			"div3": {"id": "cc", "content": "内容变化开始"}
		}

		//视图层
		CreatePag(user);
		

*/

//控制层
function CreatePag(user)
{
	var div1 =document.createElement("div"),
		div2 =document.createElement("div"),
		div3 =document.createElement("div"),
		div4 =document.createElement("div"),
		div5 =document.createElement("div");
	for(var aa1 in user)
	{
		//alert(aa1+"&&"+user[aa1]+"&&"+typeof(user[aa1]));
		if(typeof(user[aa1])!="object")
		{
			div1.setAttribute("id",user[aa1]);
		}
		if(typeof(user[aa1])=="object")
		{
			if(user[aa1].length!=null)
			{
				var  v = 2;
				for(var aa2 in user[aa1])
				{// aa2 数组的索引号
					var div_v= "div"+v;
					//alert("div_v=="+div_v);
					div_v = eval(div_v);//字符串转变量
					for(var aa3 in user[aa1][aa2])
					{
						
						//alert( aa3+"&&"+user[aa1][aa2][aa3]);
						
						if(aa3=="class")
						{
							
							div_v.setAttribute(aa3,user[aa1][aa2][aa3]);
						}
						if(aa3=="content")
						{
							//alert("content=="+div_v);
		
							div_v.innerHTML=user[aa1][aa2][aa3];
						}
					}
					div1.appendChild(div_v);
					v++;
				}
				
			}
			else
			{
				for(var aa2 in user[aa1])
				{
					
					//alert( aa2+"&&"+user[aa1][aa2]);
					switch(aa2)
					{
						case "id":
							div5.setAttribute(aa2,user[aa1][aa2]);
						break;
						case "content":
							div5.innerHTML=user[aa1][aa2];
						break;
						default:
					}
				}
				div1.appendChild(div5);
			}
			
			//alert("对象"+user[aa1].length);
		}
	}
	//创建移动内容
	function getElementsClass(classnames)
	{
		var classobj= new Array();//定义数组 
		var classint=0;//定义数组的下标 
		var tags=document.getElementsByTagName("*");//获取HTML的所有标签 
		for(var i in tags)
		{//对标签进行遍历
			if(tags[i].nodeType==1)
			{//判断节点类型
				if(tags[i].getAttribute("class") == classnames)//判断和需要CLASS名字相同的，并组成一个数组 
				{
					classobj[classint]=tags[i];
					classint++;
				}
			}
		}
		return classobj;//返回组成的数组
	}
	String.prototype.trim_l=function(){
		var reSpace=/^\s*(.*?)\s*$/;
		return this.replace(reSpace,"$1");
	};
	
	
	document.getElementsByTagName("body")[0].appendChild(div1);
	
	//样式
	function style_tab()
	{
		var nod = document.createElement("style"), 
		//str = "body{background:#020;color:#002} a{color:#fff;text-decoration:none;} a:hover{color:red;text-decoration:underline}";
		str = "*{margin:0px;padding:0px;} .a1{width:200px;height:50px;background-color:#009;float:left;border:solid 1px #000000;}"
		+".a1:first-child{border-left:2px solid #000000;} div:nth-last-of-type(2){border-right:2px solid #000000;}"
		+"#tab{width:608px;height:352px;margin:0 auto;}"
		+"#cc{border-left:2px solid #000000;border-right:2px solid #000000;border-bottom:1px solid #000000;height:300px;}";
		nod.type="text/css";
		if(nod.styleSheet)
		{         //ie下
			nod.styleSheet.cssText = str;
		}
		else
		{
			nod.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))
		}
		document.getElementsByTagName("head")[0].appendChild(nod);
	}style_tab();
	
	function f1(a1)
	{
		var claObj = getElementsClass(a1);
		//alert(claObj.length);
		
		var content = claObj[0].innerHTML;
	
		for(var i=0;i<claObj.length;i++)
		{
				(function(i){
					claObj[i].onmouseover=function()
					{
						content = claObj[i].innerHTML;
						claObj[i].style.backgroundColor="red";
						//alert(i+"###"+typeof(content));
						content = content.trim_l();
						//alert("content=="+content)
						ff2(content)
					};
					claObj[i].onmouseout=function()
					{
	
						claObj[i].style.backgroundColor="#009";
					};
				})(i);
		}
	}
	
	function ff2(f1){
		document.getElementById("cc").innerHTML = f1;
	}

	f1("a1");
}


/*2017年02月16日*/


/*2017年02月17日*/

/*
	时间
		2017年02月17日
	说明
		创建分页功能
	举例
	
		<div id="aa"></div>
		<ul style="width:350px; list-style:none">
		<li style="float:left;width:100px;text-align:center"><input name="" type="button" value="上一页" onclick="prevPage('aa')"/></li>
		<li style="float:left;width:50px;text-align:center"><a href="javascript:goPage('aa',1)">1</a></li>
		<li style="float:left;width:50px;text-align:center"><a href="javascript:goPage('aa',2)">2</a></li>
		<li style="float:left;width:50px;text-align:center"><a href="javascript:goPage('aa',3)">3</a></li>
		<li style="float:left;width:100px;text-align:center"><input name="" type="button" value="下一页" onclick="nextPage('aa')"/></li>
		</ul>
		
		//数据层
		var myA01 =
		[
			{"id":"cxh","tid":123456,"score":2000,"time":"2009-08-20"},
			{"id":"zd1","tid":123356,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd2","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd3","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd4","tid":123456,"tscore":1500,"time":"2009-11-20"},
			
			{"id":"zd5","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd6","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd7","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd8","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd9","tid":123456,"tscore":1500,"time":"2009-11-20"},
			
			{"id":"zd0","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"zd111","tid":123456,"tscore":1500,"time":"2009-11-20"}
		];

		var myA02 =
		[
			{"id":"12h","tid":123456,"score":2000,"time":"2009-08-20"},
			{"id":"121","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"122","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"123","tid":123456,"tscore":1500,"time":"2009-11-20"},
			{"id":"124","tid":123456,"tscore":1500,"time":"2009-11-20"}
		];

		//视图层
		pagination("aa",myA01)
		//alert(myA01[0]["id"])
		

*/

//控制层〓分页
function pagination(pid,jar)
{
	var T = new bb(jar);
	document.getElementById(pid).appendChild(T);
}
//控制层〓上页下页按钮
var  bb = function ()
{
	var myArr_x = arguments[0];
	var fy= arguments[1]||null;
	
	var table_t =document.getElementById("aa").getElementsByTagName("table");
	var table_c = document.createElement("table");
	
	var index =table_c.getAttribute("index");//翻页
	//判断是否存在表格
	if(table_t[0]==null)
	{
		//alert("不存在");
		table_c=document.createElement("table");
		table_c.style.border="solid 5px red";
		index =table_c.getAttribute("index");
	}
	else
	{
		//alert("存在");
		
		table_c = table_t[0];
		index =table_c.getAttribute("index");
		table_c.innerHTML="";
	}
	//判断索引是否存在
	if(index==null)
	{
		//alert("判断=="+index);
		var T = create(myArr_x);
		
	}
	else
	{
		//alert("判断=="+index);
		create(myArr_x);
	}
	//创建分页表格
	function create(myArr)
	{
		
		
		//alert("index=="+index)
		var xa;//数组中的数据索引
		if(index==null)
		{
			//alert("索引==null");
			table_c.setAttribute("index",0);
			xa=0;
		}
		else
		{
			//alert(typeof(table_c.getAttribute("index")));
			if(fy=="prev")
			{//上一页
				//alert(fy);
				xa=parseInt(table_c.getAttribute("index"))-1;
			}
			else if(fy=="next")
			{//下一页
				//alert(fy);
				xa=parseInt(table_c.getAttribute("index"))+1;
			}
			else
			{
				//alert(parseInt(fy));
				xa = fy -1;
			}

		}
		if(myArr.length<=5)//单页
		{
			
			for(var data1 in myArr)
			{
				var tr_c=document.createElement("tr");
				//alert(data1);
				(function(){
					if(data1>=5)
					{
						data1=myArr.length;
					}
				})();
				for(var data_c in myArr[data1])
				{
					//alert(data_c+"     "+myArr[data1][data_c]);
					var td_c=document.createElement("td");
					td_c.innerHTML=myArr[data1][data_c];
					td_c.style.textAlign="center";
					td_c.style.fontSize="20px";
					td_c.style.borderStyle = "solid";
					td_c.style.borderWidth="1px";
					tr_c.appendChild(td_c);
				}
				table_c.appendChild(tr_c);
			}
		}
		else//多页
		{
			if(myArr.length%5==0)
			{
				
			}
			else
			{
				var page = Math.ceil(myArr.length/5);
				var ar_a = new Array();
				var number = 0;
				for(var xi=0; xi<page; xi++)  
				{
					var ar_b = new Array();
					for(var yi=0; yi<5; yi++)  
					{
						//alert(number);
						if(myArr[number]==null)
						{
							//alert("空"+number);
						}
						else
						{
							ar_b.push(myArr[number]);
						}
						number++;
					}
					ar_a.push(ar_b)
				}
				//alert(ar_a.length);
				for(var xb=0; xb<5; xb++)  
				{
					var tr_c=document.createElement("tr");
					for(var data_c in ar_a[xa][xb])
					{
						var td_c=document.createElement("td");
						//alert(ar_a[xa][xb][data_c]);
						td_c.innerHTML=ar_a[xa][xb][data_c];
						td_c.style.textAlign="center";
						td_c.style.fontSize="20px";
						td_c.style.borderStyle = "solid";
						td_c.style.borderWidth="1px";
						tr_c.appendChild(td_c);
					}
					table_c.appendChild(tr_c);
				}
				
			}
	
		}
		//判断向前还是向后
		if(fy=="next")
		{
			table_c.setAttribute("index",xa);
			//alert(xa);
		}
		if(fy=="prev")
		{
			
			table_c.setAttribute("index",xa);
			//alert(xa);
		}
		
	}

	return table_c;
}
//控制层〓点击
function prevPage(pid)//上一页
{
	document.getElementById(pid).appendChild(bb(myA01,"prev"));
	var table_t =document.getElementById(pid).getElementsByTagName("table");
	//alert("长度=="+table_t.length);
}

function nextPage(pid)//下一页
{
	document.getElementById(pid).appendChild(bb(myA01,"next"));
	var table_t =document.getElementById(pid).getElementsByTagName("table");
	//alert("长度=="+table_t.length);
}

function goPage(pid,number)//跳转到指定页
{
	document.getElementById(pid).appendChild(bb(myA01,number));
	var table_t =document.getElementById(pid).getElementsByTagName("table");
	//alert("长度=="+table_t.length);
}

/*2017年02月17日*/

/*2017年02月20日*/

/*
	时间
		2017年02月20日
	说明
		创建修改JSON数据
	举例
	
		var str001 = {"name": "apple", "sex": "21"};
		
		// 修改属性 name 的值为 banana  
		alert(str001["name"]);
		createJson(str001,"name", "banana");
		alert(str001["name"]);

		// 添加属性 color 的值为 red  
		alert("颜色=="+str001["color"]);
		createJson(str001,"color", "red");
		alert("颜色=="+str001["color"]);
			
		// 删除属性 sex  
		alert("性别=="+str001["sex"]);
		createJson(str001,"sex");  
		alert("性别=="+str001["sex"]);
*/


function createJson(str,prop, val) {  
    // 如果 val 被忽略  
    if(typeof val === "undefined") {  
        // 删除属性  
        delete str[prop];  
    }  
    else {  
        // 添加 或 修改  
        str[prop] = val;  
    }  
}

/*2017年02月20日*/

/*2017年03月07日*/

//判断IE10及以上的方法
function isIE(){
	if (!!window.ActiveXObject || "ActiveXObject" in window)
	{// !!将对应的类型转换为boolean型
		return true;
	}
	else
	{
		return false;
	}
}
function myBrowser(){
	var Sys={};
	var ua=navigator.userAgent.toLowerCase();
	var s;
	if(isIE()){
		Sys.ie = "IE"
	}
	//alert(ua);
	(s=ua.match(/firefox\/([\d.]+)/))?Sys.firefox=s[1]:
	(s=ua.match(/chrome\/([\d.]+)/))?Sys.chrome=s[1]://没测
	(s=ua.match(/opera.([\d.]+)/))?Sys.opera=s[1]://没测
	(s=ua.match(/version\/([\d.]+).*safari/))?Sys.safari=s[1]:0;//没测
	var version =displayProp(Sys);
	switch(version)
	{
		case "ie":
			return "ie"
		break;
		case "firefox":
			return "firefox"
		break;
	}
	if(Sys.firefox){//JS判断为火狐(firefox)浏览器
        return "firefox"+Sys.firefox;
    }


}
//获取对象中的属性
function displayProp(obj){      
	var names="";
	for(var name in obj){
		//names+=name+":"+obj[name]+",";
		names+=name+",";
	}
	names = substr_L(names);
	//alert("1=="+names);
	return names;
} 
function substr_L(stringObject)
{
	stringObject = stringObject.substring(0,stringObject.length-1);
	return stringObject
}

/*2017年03月07日*/


/*2017年03月14日*/

//函数类型判断
//jQuery 1.2
var isFunction = function(fn){
	return !!fn && //排除了false，空字符串，0，NaN，undefined
	typeof fn != "string" && //排除了字符串
			!fn.nodeName && //排除DOM对象
			fn.constructor != Array && //排除数组对象
			/^[\s[]?function/.test(fn + ""); //若前面的规则都没生效，那么检测该变量toString后的内容，如果以"function"字符串开头，那么可断定为函数
};

// jsonp 格式化参数
function jsonParams(data){
	var arr = [];
	for (var name in data) {
		switch(name)
		{
			case "url":
				//arr.push(encodeURIComponent(data[name]));
				arr.push(data[name]);
			break;
			case "jsonpCallback":
				//arr.push(encodeURIComponent(data[name]));
				arr.push("callback="+data[name]);
			break;
			default:
			
		}
	}
	arr.push(("v=" + Math.random()).replace(".",""));
	/*
		定义和用法
			push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
		提示和注释
			注释：该方法会改变数组的长度。
			提示：要想数组的开头添加一个或多个元素，请使用 unshift() 方法。
	*/
	var a1 = arr.join("&");
	//alert(a1);
	return a1;
	/*
		定义和用法
			join() 方法用于把数组中的所有元素放入一个字符串。
			元素是通过指定的分隔符进行分隔的。
	*/
}

//操作JSON总结
function createJson(str,prop,val) {  
    // 如果 val 被忽略  
    if(typeof val === "undefined") {  
        // 删除属性  
        delete str[prop];  
    }  
    else {  
        // 添加 或 修改  
        str[prop] = val;  
    }
	
}



//function jsonhandle(result){$_a.successName(result);}


function customFun(funname,parameters,fbody)
{
	window[funname] = new Function(parameters,fbody);
}

//网络地址截取
function substringByStop(str,stopStr)
{
	str = str.substring(0,str.indexOf(stopStr));
	//alert(str);
	return str;
}


/*
	时间
		2017年03月14日
	说明
		跨域JSONP
	举例
		$_a.jsonp({
			type: "get",
			async: false,
			url: "http://localhost:9096/dao/ajax/domain/services.php?code=CA1998",
			dataType: "jsonp",
			//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名（一般默认为:callback）
			jsonp: "callback",
			jsonpCallback:"jsonhandle",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
			success: function(json){
				alert("成功");
				for(var i in json)
				{
					alert(i+":"+json[i]);
				}
			},
			error: function(){
				alert('fail');
			}
		});

*/


$_a.jsonp= function(options){
	//alert(options.url);
	callbackName = options.jsonpCallback = isFunction( options.jsonpCallback ) ? options.jsonpCallback() : options.jsonpCallback;
	var strJson= {};
	for(var key in options){
		//alert(key+"=="+options[key]);
		createJson(strJson,key,options[key]);
	}
	
	customFun(options.jsonpCallback,"result","$_a.successName(result);");
	var script=document.getElementsByTagName("script");
	
	var JSONP=document.createElement("script");
		JSONP.type="text/javascript";
		//alert(substringByStop(jsonParams(strJson),"&v="));
		//alert(typeof(substringByStop(jsonParams(strJson),"&v=")));
		JSONP.src = substringByStop(jsonParams(strJson),"&v=");
		//JSONP.src="http://localhost:9096/dao/ajax/domain/services.php?code=CA1998&callback=jsonhandle";
	
	(function(){document.getElementsByTagName("head")[0].appendChild(JSONP);})();
	//返回数据函数
	this.successName=function(result_01)
    {
		//result_01=null;
		if(result_01)
		{
			options.success(result_01);
		}
		else
		{
			options.error();
		}
		
        
    };
	
}

/*2017年03月14日*/


/*2017年03月21日*/

/*
	错误例子需要记住
	var Cat = {
		name: "大毛",
		makeSound: function(){ alert(name); }
	};
	var c = new Cat();
	{}这种创建的直接就是对象了，不用new
 
*/

/*
	时间
		2017年03月21日
	说明
		滚动刷新功能
	举例
		<div id="divdc" style="width:1000px; height:1500px; background-color:#F00;"></div>
		
		window.onscroll = function (){
			var Mic = MicCase;
			if (Mic.getScrollTop() + Mic.getClientHeight() == Mic.getScrollHeight())
			{
				var xmlHttpReq = null; 
				//IE浏览器使用ActiveX 
				if (window.ActiveXObject){
					xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
				}
				//其它浏览器使用window的子对象XMLHttpRequest
				else if (window.XMLHttpRequest) {
					xmlHttpReq = new XMLHttpRequest();
				}
				if (xmlHttpReq != null)
				{
					xmlHttpReq.open('post','http://localhost:9096/dao/ajax/domain/trundle.php',true);
					//设置回调，当请求的状态发生变化时，就会被调用，传递参数xmlHttpReq 
					xmlHttpReq.onreadystatechange = function () { onajaxtest(xmlHttpReq); };
					//提交请求
					xmlHttpReq.send(null);
				}
			}
			else
			{
				
			}
			
		} 
		
		function onajaxtest(req) { 
			var newnode = document.createElement("a"); 
			newnode.setAttribute("href", "#"); 
			newnode.innerHTML = req.readyState + " " + req.status + " " + req.responseText; 
			document.body.appendChild(newnode); 
			var newline = document.createElement("br"); 
			document.body.appendChild(newline); 
		} 
		
*/
var MicCase = {
	//获取滚动条当前的位置
	getScrollTop:function()
	{
		var scrollTop = 0; 
		if (document.documentElement && document.documentElement.scrollTop)
		{
			scrollTop = document.documentElement.scrollTop;
		}
		else if (document.body)
		{
			scrollTop = document.body.scrollTop;
		}
		return scrollTop;
	},
	//获取当前可视范围的高度 
	getClientHeight:function()
	{
		var clientHeight = 0;
		if (document.body.clientHeight && document.documentElement.clientHeight)
		{
			clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
		}
		else
		{
			clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
		}
		return clientHeight; 
	},
	//获取文档完整的高度 
	getScrollHeight:function()
	{
		return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
	}
};
/*
	aa.prototype.test=function(){}
	是给aa的原型加了test方法
	而不是给aa加
	所以必须 实例化一下 也就是new一下 才行

	例子
	function aCase(){}
	aCase.prototype.test=function(){alert("aCase");}
	var ac = new aCase();
	ac.test();

*/


/*2017年03月21日*/

/*2017年03月22日*/

/*
	时间
		2017年03月22日
	说明
		加载
	举例
		document.ready(function(){
			document.getElementById("myBtn").addEventListener("click", function()
			{
				document.getElementById("demo").innerHTML = "Hello World";
			});
		});
*/
document.ready = function (callback)
{
	//兼容FF,Google
	if(document.addEventListener)
	{
		document.addEventListener
		(
			'DOMContentLoaded',
			function()
			{
				document.removeEventListener('DOMContentLoaded', arguments.callee, false);
				callback();
			}, 
			false
		)
	}
	//兼容IE
	else if(document.attachEvent)
	{
		document.attachEvent
		(
			'onreadystatechange',
			function()
			{
				if (document.readyState == "complete")
				{
					document.detachEvent("onreadystatechange", arguments.callee);
					callback();
				}
			}
		)
	}
	else if (document.lastChild == document.body)
	{
		callback();
	}
}
	
/*
	定义和用法
		addEventListener() 方法用于向指定元素添加事件句柄。
		提示：使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。
	
	例子
		<button id="myBtn">点我</button>
		<p id="demo"></p>
		
		document.getElementById("myBtn").addEventListener("click", function()
		{
			document.getElementById("demo").innerHTML = "Hello World";
		});
		
*/

/*2017年03月22日*/

/*2017年03月25日*/

/*
	时间
		2017年03月30日
	说明
		避免滑动时间互相冲突
	举例
		addEvent(window,'scroll',function(){
			adleft.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px"; 
			adright.style.top = Toppx + adtop + (document.documentElement.scrollTop || document.body.scrollTop) +"px"
		});
*/
function addEvent(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

/*
	时间
		2017年03月30日
	说明
		显示文本内容
	举例
		
		$L("#cs001").html("aaa");
		
		alert($L("#cs001").html());
*/

$L.fn.html = function(){
	var ht = arguments[0];
	if(ht==null)
	{
		//alert("没有参数");
		return this.xid.innerHTML
	}
	else
	{
		this.xid.innerHTML =ht;
		return this;
	}
};

/*2017年03月25日*/


/*2017年03月28日开始*/

/*
	时间
		2017年03月30日
	说明
		避免window.onload赋值后会覆盖
	举例
		function a(){
			alert("a=a");
		}
		
		function b(){
			alert("网=紫");
		}
		_addLoadEvent(a);
		_addLoadEvent(b);
*/
function _addLoadEvent(func)
{
    var oldonload=window.onload;
    if(typeof window.onload != 'function')
    {
        window.onload=func;
    }
    else
    {
        window.onload=function()
        {
            oldonload();
            func();
        }
    }
}

/*2017年03月28日结束*/


/*2017年03月30日开始*/

/*
	时间
		2017年03月30日
	说明
		返回或者设置属性
	举例
		alert($L("#input01").attr("value"));
		$L("#input01").attr("value","无限");
*/
$L.fn.attr= function(p)
{
	var property = p;
	var value = arguments[1];
	//alert(value);
	//alert(value==null);
	if(!(value==null))
	{
		//alert("两个参数");
		this.xid.setAttribute(p,value)
	}
	else
	{
		//alert(1);
		return this.xid.getAttribute(p)
	}
}

/*2017年03月30日结束*/

/*2017年04月05日开始*/
/*
function addClass(element,newclass){
	var c = element.className;
	element.className = (c =="") ? newclass : c+' '+newclass;
}
*/

/*2017年04月05日结束*/


/*2017年04月23日开始*/
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  

//注意：只能判断单个空格
function getElementsClassBlank(classnames)
{
	
	var classobj= new Array();//定义数组 
	var classint=0;//定义数组的下标 
	var tags=document.getElementsByTagName("*");//获取HTML的所有标签 
	for(var i in tags)
	{//对标签进行遍历
		if(tags[i].nodeType==1)
		{//判断节点类型
			if(tags[i].getAttribute("class")!= null)
			{
				//alert(tags[i].getAttribute("class").indexOf(" "));
				if(tags[i].getAttribute("class").indexOf(" ")!=-1)
				{
					var classArray = tags[i].getAttribute("class").split(" ");
					for(var ca=0;ca<classArray.length;ca++)
					{
						
						if(classArray[ca] == classnames)//判断和需要CLASS名字相同的，并组成一个数组 
						{
							classobj[classint]=tags[i];
							classint++;
						}
					}
					
				}
			}
			
		}
	}
	return classobj;//返回组成的数组
}
/*2017年04月23日结束*/




/*2017年05月15日开始*/

/*
	时间
		2017年05月15日
	说明
		数组去掉重复
	举例
		var aay= [1,2,3,2,3];
		//alert("去重前=="+aay);
		aay = aay.unique();
		//alert("去重后=="+aay);
*/

Array.prototype.each = function(breakCall)
{
    for (var i = 0; i < this.length; i++)
    {
        breakCall(this[i]);
    }
}

Array.prototype.unique = function(){

   var result = [];
   //回调函数
   this.forEach(function(v1){
	  // alert(v1);
       if(result.indexOf(v1) < 0){
           result.push(v1);
       }
   });

   return result;

}





/*
	breakCall
	函数体
	function(v){alert(v);}
*/

/*
	function each(obj,breakCall)
	{
		for (var i = 0; i < obj.length; i++)
		{
			breakCall(obj[i]);
		}
	}
	Array.prototype.unique = function(){
		var result = [];
		each(this,function(v1){
			//alert(v);
			if(result.indexOf(v1) < 0){
			   result.push(v1);
			}
		});
		return result;
	}
	var aay= [1,2,3,2,3];
	alert("去重前=="+aay);
	aay = aay.unique();
	alert("去重后=="+aay);
*/

/*2017年05月15日结束*/

/*2017年05月25日开始*/

/*
	时间
		2017年05月25日
	说明
		将JSON对象变成字符串
	举例
		var obj={name:'tom',class:'abc',classMates:'123'};
		var ps = parseParam(obj);
		alert(ps); 
	
*/
function eachJson(jsonStr,breakCall) {
	var a = '';
    for(var v in jsonStr)
    {
        var b = breakCall(v+"="+jsonStr[v]+"&");
        a = a+b;
    }
    return a;
}
 
 
var parseParam=function(param,key){ 
	var paramStr=""; 
    if(param instanceof String||param instanceof Number||param instanceof Boolean){ 
		paramStr+="&"+key+"="+encodeURIComponent(param);
    }
    else{
		paramStr = this.eachJson(param,function(i){ 
			var k=key==null?i:key+(param instanceof Array?"["+i+"]":"."+i); 
			return k;
		}); 
 
    } 
    return paramStr.substr(0,paramStr.length-1);    
    // return paramStr;
}

/*2017年05月25日结束*/

/*2017年08月28日开始*/

/*
	时间
		2017年08月28日
	说明
		数组去掉重复
	举例
		var arr = [112,112,35,'你好',112,23,35,'你好','str','str1'];
		alert(arr.unique_l());
		
	
*/
Array.prototype.unique_l = function(){
	var res = [];
	var json = {};
	for(var i = 0; i < this.length; i++)
	{
		if(!json[this[i]])
		{
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}


/*
	时间
		2017年08月28日
	说明
		去掉字符串的空格
	举例
		var str_test = "                    王子                               ";
		alert(str_test);
		var str_a = str_test.trim_l();
		alert(str_a);
		var str_l = str_test.ltrim_l();
		alert(str_l);
		var str_r = str_test.rtrim_l();
		alert(str_r);
	
*/
// 去掉前后空格
String.prototype.trim_l = function()  
{  
	return this.replace(/(^\s*)|(\s*$)/g, "");  
}
// 去掉前空格 
String.prototype.ltrim_l = function()  
{  
	return this.replace(/(^\s*)/g, "");  
}
// 去掉后空格
String.prototype.rtrim_l = function()  
{  
	return this.replace(/(\s*$)/g, "");  
}  
/*2017年08月28日结束*/

/*2017年08月30日结束*/
/*
	向指定位置插入某变量
*/
Array.prototype.insert = function (index, item) { 
	this.splice(index, 0, item); 
};
/*2017年08月30日结束*/