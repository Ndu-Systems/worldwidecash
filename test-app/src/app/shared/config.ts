
export const IS_LOCAL = false;
let api ="https://www.funderslife.com/api1"
let web ="https://www.funderslife.com"
if(IS_LOCAL){
    api='http://localhost:8080/worldwidecash/api';
    web='http://localhost:4200';
    
}else{

}
export   const API_URL=api;
export const  WEB_HOST = web;

export const EMAIL= "https://www.funderslife.com/api1/emailClient2.php";




export function GetImagePath(imageUrl){
return `${API_URL}/Invest/${imageUrl}`;
}
