import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

// Liste de tous les produits 
export async function allProducts() {
const allProductsRecords = await pb.collection('products').getFullList();
return allProductsRecords;
}
