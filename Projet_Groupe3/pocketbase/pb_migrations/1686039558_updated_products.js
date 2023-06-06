migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // remove
  collection.schema.removeField("ufojpwza")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0a4s8ebm",
    "name": "price_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "kg",
        "pièce"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufojpwza",
    "name": "price_type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("0a4s8ebm")

  return dao.saveCollection(collection)
})
