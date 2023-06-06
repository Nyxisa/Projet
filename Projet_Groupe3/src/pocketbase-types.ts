/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Contact = "contact",
	Donation = "donation",
	Orders = "orders",
	Productors = "productors",
	Products = "products",
	SubscriptionCagette = "subscription_cagette",
	Users = "users",
	Warehouse = "warehouse",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ContactRecord = {
	nom?: string
	prenom?: string
	email?: string
	message?: string
}

export enum DonationTypeOptions {
	"Fruit" = "Fruit",
	"Légume" = "Légume",
	"Mixte" = "Mixte",
}
export type DonationRecord = {
	title_donation?: string
	description?: string
	img?: string
	user_donation?: RecordIdString[]
	distance?: number
	reservation?: boolean
	type?: DonationTypeOptions
}

export type OrdersRecord = {
	order_date?: IsoDateString
	delivery_date?: IsoDateString
	total_price?: number
	total_quantity_products?: number
	delivery_cost?: number
	user_order?: RecordIdString[]
	product_order?: RecordIdString[]
}

export type ProductorsRecord = {
	lastname?: string
	firstname?: string
	email?: string
	profilepic?: string
	phone?: number
	adresse?: string
	favori?: boolean
}

export enum ProductsCategoryOptions {
	"Légume" = "Légume",
	"Fruit" = "Fruit",
}

export enum ProductsPriceTypeOptions {
	"kg" = "kg",
	"pièce" = "pièce",
}

export enum ProductsCategoryRefinedOptions {
	"Légume vert" = "Légume vert",
	"Légume racine" = "Légume racine",
	"Légume feuilles" = "Légume feuilles",
	"Légume bulbe" = "Légume bulbe",
	"Fruit à pépins et noyaux" = "Fruit à pépins et noyaux",
	"Fruit sec" = "Fruit sec",
	"Agrume" = "Agrume",
}
export type ProductsRecord = {
	designation?: string
	category?: ProductsCategoryOptions
	price?: number
	price_type?: ProductsPriceTypeOptions
	img?: string
	productor?: RecordIdString
	order_product?: RecordIdString[]
	category_refined?: ProductsCategoryRefinedOptions
}

export enum SubscriptionCagetteFormuleOptions {
	"Light" = "Light",
	"Giant" = "Giant",
}

export enum SubscriptionCagetteFrequenceOptions {
	"1_month" = "1_month",
	"2_month" = "2_month",
	"3_month" = "3_month",
	"4_month" = "4_month",
}
export type SubscriptionCagetteRecord = {
	users_subscription?: RecordIdString[]
	formule?: SubscriptionCagetteFormuleOptions
	frequence?: SubscriptionCagetteFrequenceOptions
	prix?: number
}

export type UsersRecord = {
	firstname?: string
	lastname?: string
	avatar?: string
	social_reason?: string
	phone?: number
	adress?: string
	user_order?: RecordIdString[]
	donation_users?: RecordIdString[]
	subscription_cagette?: RecordIdString
}

export type WarehouseRecord = {
	warehouse_products?: RecordIdString[]
	capacity?: number
}

// Response types include system fields and match responses from the PocketBase API
export type ContactResponse = Required<ContactRecord> & BaseSystemFields
export type DonationResponse<Texpand = unknown> = Required<DonationRecord> & BaseSystemFields<Texpand>
export type OrdersResponse<Texpand = unknown> = Required<OrdersRecord> & BaseSystemFields<Texpand>
export type ProductorsResponse = Required<ProductorsRecord> & BaseSystemFields
export type ProductsResponse<Texpand = unknown> = Required<ProductsRecord> & BaseSystemFields<Texpand>
export type SubscriptionCagetteResponse<Texpand = unknown> = Required<SubscriptionCagetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type WarehouseResponse<Texpand = unknown> = Required<WarehouseRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	contact: ContactRecord
	donation: DonationRecord
	orders: OrdersRecord
	productors: ProductorsRecord
	products: ProductsRecord
	subscription_cagette: SubscriptionCagetteRecord
	users: UsersRecord
	warehouse: WarehouseRecord
}

export type CollectionResponses = {
	contact: ContactResponse
	donation: DonationResponse
	orders: OrdersResponse
	productors: ProductorsResponse
	products: ProductsResponse
	subscription_cagette: SubscriptionCagetteResponse
	users: UsersResponse
	warehouse: WarehouseResponse
}