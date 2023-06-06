import PocketBase from 'pocketbase' ;
import type { ProductsResponse } from '../src/pocketbase-types';
import type { ProductorsResponse } from '../src/pocketbase-types';

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

