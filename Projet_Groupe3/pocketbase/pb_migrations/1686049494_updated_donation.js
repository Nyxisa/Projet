migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cesdkwi1",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j16ytqyo",
    "name": "distance",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0xrrdako",
    "name": "reservation",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // remove
  collection.schema.removeField("cesdkwi1")

  // remove
  collection.schema.removeField("j16ytqyo")

  // remove
  collection.schema.removeField("0xrrdako")

  return dao.saveCollection(collection)
})
