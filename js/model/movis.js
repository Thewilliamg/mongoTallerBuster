import { connect } from "../../helper/db/connect.js";

export class movis extends connect {
    static instanceMovis;
    db;
    collection;
    constructor() {
        if (movis.instanceMovis) {
            return movis.instanceMovis;
        }
        super();
        this.db = this.conexion.db(this.getDbName);
        this.collection = this.db.collection('movis');
        movis.instanceMovis = this;
    }
    destructor(){
        movis.instanceMovis = undefined;
        connect.instanceConnect = undefined;
    }
    // async getCountByDvd(){
    //     await this.conexion.connect();
    //     let res =await this.collection.find([

    //     ])
    // }
    
    async getAll() {
        await this.conexion.connect();
        const res = await this.collection.find({name:'The Prestige'}).toArray(); 
        await this.conexion.close();
        return res;
    }

    // async getAllGenreDistict(){
    //     this.conexion.connect();
    //     let res=await this.collection.aggregate([
    //         {$unwind:}
    //     ]).toArray
    //     return res
    // }
    // async getAllFindSciFiMoviesByActor(){
    //     await this.conexion.connect();
    //     let res=await this.collection.find({
    //         genre:'Ciencia Ficcion',
    //         character.id_actor=3
    //     }).toArray();

    //     await this.conexion.close();
    //     return res
    // }
    async calculateAverageActorAge(){
        await this.conexion.connect();
        const res =await this.collection.aggregate()

        await this.conexion.close();
        return res;
    }
}   
