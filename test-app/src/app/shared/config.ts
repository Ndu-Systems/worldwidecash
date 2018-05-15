//export const   API_URL='http://localhost:8080/worldwidecash/api';
//export const WEB_HOST = "http://localhost:4200";
export const   API_URL='https://www.funderslife.com/api1';
export const   WEB_HOST='https://www.funderslife.com';

export const EMAIL= "https://www.funderslife.com/api1/emailClient2.php";


export function GetImagePath(imageUrl){
return `${API_URL}/Invest/${imageUrl}`;
}