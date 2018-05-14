//export const   API_URL='http://localhost:8080/worldwidecash/api';
export const   API_URL='https://www.funderslife.com/api1';

export const EMAIL= "https://www.funderslife.com/api/emailClient2.php";


export function GetImagePath(imageUrl){
return `${API_URL}/Invest/${imageUrl}`;
}