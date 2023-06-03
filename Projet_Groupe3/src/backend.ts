import PocketBase from 'pocketbase' ;

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  pocketbase_ip = 'https://la-cagette-fermiere.lisa-cingolani.fr:443'
else // si developpement
  pocketbase_ip = 'http://127.0.0.1:8090'

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

