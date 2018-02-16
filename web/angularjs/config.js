var extention = ".php";
var host = "http://funderslife.com/api/";
var base = "http://funderslife.com/Get-Started";

var isLocal = false;
if(isLocal){
base = "http://localhost:8080/worldwidecash/web/Get-Started";
host = "http://localhost:8080/worldwidecash/web/api/";
//base = "http://localhost/worldwidecash/web/Get-Started";//freedom
//host = "http://localhost/worldwidecash/web/api/"; //Freedom
}

var mail = "http://ndu-systems.net/demo/worldwidecash2/api/emailClient2.php";

function GetApiUrl(serviceName) {

    var url = host + serviceName + extention;
    return url;
}
function GetHost(data) {
    return host + "" + data;
}
function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
// email tempates 


function SendMail(emailFrom,to,name,subject,msg){
	$.post(mail,
    {
        emailFrom: emailFrom,
        to: to,
        name: name,
        subject: subject,
        msg: msg,
    },
    function(data, status){
		console.log(data);
    });
}


//emails
