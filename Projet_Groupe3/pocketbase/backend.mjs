import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090');

// Liste de tous les produits 
export async function allProducts() {
const allProductsRecords = await pb.collection('products').getFullList();
return allProductsRecords;
}

// Liste de tous les producteurs 
export async function allProductors() {
const allProductorsRecords = await pb.collection('productors').getFullList();
return allProductorsRecords;
}

// Liste de tous les dons
export async function allDons() {
const allDonsRecords = await pb.collection('donation').getFullList();
return allDonsRecords;
}

// Liste des dons triés par date 
export async function allDonsSorted() {
    const allDonsSortedRecords = await pb.collection('donation').getFullList({
        sort: 'created',
    });
    return allDonsSortedRecords;
}

// Liste des producteurs favoris (affichés sur la page dons) 
export async function allFavProductors() {
    const allFavProductorsRecords = await pb.collection('productors').getFullList({
        filter : 'favori = true'
    });
    return allFavProductorsRecords;
}
   