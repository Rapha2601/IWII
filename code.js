import connectDB from "./conexao.js";

export default class Crud {

    //Consulta geral

    static selectALL(callback){
        let connection = connectDB.connect()
        let sql = "select id, nome, titulo, editora ano from autor"
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw error
            callback(results)
        })
        connection.end()
    }




//Consulta por id
    static selectById(Id,callback){
        let connection = connectDB.connect()
        let sql = "select * from autor where id = ?"
        let query = connection.query(sql, id, function(error, results, fields){
        if(error) throw error 
        callback(results)
        })
        connection.end()


    }

//Inserir dados
    static insert(livros, callback){
        let connection = connectDB.connect()
        let sql = "insert into autor set ?"
        let query = connection.query(sql, livros, function(error, results, fields){
            livros.id = results.insertId
            if(error) throw error
            callback(livros)
        })
            connection.end()
    }

    //Atualizar
        static update(livros, callback){
            let connection = connectDB.connect()
            let sql = "update autor set ? where id = ?"
            let id = livros.id
            let query = connection.query(sql, [livros,id], function(error, results, fields){
                if(error) throw error
                callback(livros)
            })
            connection.end
        }

//Apagar
        static deleteById(livros, calllback){
            let connection = connectDB.connect()
            let sql = "delete from autor where id = ?"
            let id = livros.id
            let query = connection.query(sql. id, function(error, results, fields){
                if(error) throw error
                calllback(livros)
            })
            connection.end
        }



}//Fecha classe