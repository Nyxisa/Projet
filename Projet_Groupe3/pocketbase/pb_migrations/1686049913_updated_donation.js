migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // remove
  collection.schema.removeField("cekun59v")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("br6tax7n1rgxa15")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cekun59v",
    "name": "localisation",
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
})
