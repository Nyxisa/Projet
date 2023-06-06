import PocketBase from 'pocketbase' ;
import type { ProductsResponse } from '../src/pocketbase-types';
import type { ProductorsResponse } from '../src/pocketbase-types';
import type { DonationResponse } from '../src/pocketbase-types';

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  pocketbase_ip = 'https://la-cagette-fermiere.lisa-cingolani.fr:443'
else // si developpement
  pocketbase_ip = 'http://127.0.0.1:8090'

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

// Liste de tous les produits 
export async function allProducts() {
const allProductsRecords = await pb.collection('products').getFullList<ProductsResponse>();
return allProductsRecords;
}

// Liste de tous les producteurs 
export async function allProductors() {
const allProductorsRecords = await pb.collection('productors').getFullList<ProductorsResponse>();
return allProductorsRecords;
}

// Liste de tous les dons
export async function allDons() {
const allDonsRecords = await pb.collection('donation').getFullList<DonationResponse>();
return allDonsRecords;
}

// Liste des dons triés par date 
export async function allDonsSorted() {
    const allDonsSortedRecords = await pb.collection('donation').getFullList<DonationResponse>({
        sort: 'created',
    });
    return allDonsSortedRecords;
}


// Liste des producteurs favoris (affichés sur la page dons) 
export async function allFavProductors() {
    const allFavProductorsRecords = await pb.collection('productors').getFullList<ProductorsResponse>({
        filter : 'favori = true'
    });
    return allFavProductorsRecords;
}
   

// export default {
//     methods: {
//         //this method allows a new user to sign up the system. Once done, the user receives an email
//         //asking for account validation. Once the validation made the user is added to the system
//         async login() {
//             await pb.collection('users').authWithPassword(document.getElementById("login").value,
//                 document.getElementById("passwd").value);
//         },
//         //this method allows the already registred user to log in the system.
//         async register() {
//             await pb.collection('users').create({
//                 email: document.getElementById("login").value,
//                 password: document.getElementById("passwd").value,
//                 passwordConfirm: document.getElementById("passwd").value,
//                 name: 'John Di',
//             });
//         }

//     }
// }

