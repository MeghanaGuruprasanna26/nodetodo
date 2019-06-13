var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://Student:pass123@cluster0-shard-00-00-unnik.mongodb.net:27017,cluster0-shard-00-01-unnik.mongodb.net:27017,cluster0-shard-00-02-unnik.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
    }
    
}