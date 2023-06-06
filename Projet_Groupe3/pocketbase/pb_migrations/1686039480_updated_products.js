migrate((db) => {
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // remove
  collection.schema.removeField("ufojpwza")

  return dao.saveCollection(collection)
})
