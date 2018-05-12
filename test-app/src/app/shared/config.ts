export const   API_URL='http://localhost:8080/worldwidecash/api';
//export const   API_URL='https://www.funderslife.com/api1';

export function GetImagePath(imageUrl){
return `${API_URL}/Invest/${imageUrl}`;
}