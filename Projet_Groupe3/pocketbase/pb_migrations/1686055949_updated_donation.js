migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojlenvnk",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Fruit",
        "Légume",
        "Mixte"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ojlenvnk",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Fruit",
        "Légume"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
