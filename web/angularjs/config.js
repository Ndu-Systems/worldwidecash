var extention = ".php";
//var host = "http://localhost/git.fknloans/loans/api/";
var host = "https://funderslife.com/api/";
//var host = "http://localhost:8080/sfiso/api/";
var mail = "http://ndu-systems.net/demo/worldwidecash2/api/emailClient2.php";
//var base = "http://localhost:8080/sfiso";
var base = "https://funderslife.com";
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
    });
}


//emails
