migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unn58ns58mgwjei")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "he4pvzu1",
    "name": "favori",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("unn58ns58mgwjei")

  // remove
  collection.schema.removeField("he4pvzu1")

  return dao.saveCollection(collection)
})
