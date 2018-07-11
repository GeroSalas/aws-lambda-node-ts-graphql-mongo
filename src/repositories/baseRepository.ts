import { Connection, Model, Document, Query, Types } from 'mongoose'
import MongoDatabase from '../database/mongo'

// Reference: https://github.com/Thavarajan/Mangoose-Typescript-With-Repository-Pattern/blob/master/src/app/repository/base/RepositoryBase.ts
// Mongo Cheatsheet: https://docs.mongodb.com/manual/reference/mongo-shell/
export abstract class BaseRepository<T extends Document> {

    private _database: MongoDatabase
    private _model: Model<Document>

    constructor(schemaModel: Model<Document>) {
        this._database = MongoDatabase.Instance
        this._model = schemaModel
    }

    create(item: T[]): Promise<Document[]> {
        return this._model.create(item)
    }

    retrieve(): Promise<Document[]> {
        return this._model.find({}).exec()
    }

    update(_id: string, item: T): Promise<Query<any>> {
        return this._model.update({ _id }, item).exec()
    }

    delete(_id: string): Promise<Document> {
        return this._model.remove({ _id }).exec()
    }

    findById(_id: string): Promise<Document|null> {
        return this._model.findById(_id).exec()
    }

    private toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id)
    }

}
