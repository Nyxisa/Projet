import { allProducts } from './backend.mjs'

console.log("-------------------------------------Liste de tous les produits---------------------------------------------------")

try {
const allProductsRecords = await allProducts();
console.log(JSON.stringify(allProductsRecords, null, 2));
} catch (e) {
console.error(e);
}