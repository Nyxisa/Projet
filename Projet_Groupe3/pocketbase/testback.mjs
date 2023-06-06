import { allProducts, allProductors, allDons, allDonsSorted, allFavProductors } from './backend.mjs'

console.log("-------------------------------------Liste de tous les produits---------------------------------------------------")

try {
const allProductsRecords = await allProducts();
console.log(JSON.stringify(allProductsRecords, null, 2));
} catch (e) {
console.error(e);
}

console.log("-------------------------------------Liste de tous les producteurs---------------------------------------------------")

try {
const allProductorsRecords = await allProductors();
console.log(JSON.stringify(allProductorsRecords, null, 2));
} catch (e) {
console.error(e);
}

console.log("-------------------------------------Liste de tous les dons---------------------------------------------------")

try {
const allDonsRecords = await allDons();
console.log(JSON.stringify(allDonsRecords, null, 2));
} catch (e) {
console.error(e);
}


console.log("-------------------------------------Liste des dons triés dans l'ordre chronologique------------------------------------------")

try {
const allDonsSortedRecords = await allDonsSorted();
console.log(JSON.stringify(allDonsSortedRecords, null, 2));
} catch (e) {
console.error(e);
}

console.log("-------------------------------------Liste des producteurs favoris------------------------------------------")

try {
const allFavProductorsRecords = await allFavProductors();
console.log(JSON.stringify(allFavProductorsRecords, null, 2));
} catch (e) {
console.error(e);
}