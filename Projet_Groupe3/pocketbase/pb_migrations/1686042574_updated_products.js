migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntqldypu",
    "name": "category_refined",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Légume vert",
        "Légume racine",
        "Légume feuilles",
        "Légume bulbe",
        "Fruit à pépins et noyaux",
        "Fruit sec",
        "Agrume"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb6j77yh66ahyn8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntqldypu",
    "name": "category_refined",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Légume vert",
        "Légume racine",
        "Légume feuilles",
        "Légume bulbe",
        "Fruit à pépins",
        "Fruit à noyau",
        "Fruit sec",
        "Agrume"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
