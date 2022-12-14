class ApiFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    // methods
    search(){
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword, // can search in parts of string
                $options: "i", //case insensetive
            }
        }:{};
         console.log(keyword);
        this.query = this.query.find({...keyword}).limit(5);
        return this;
    }
}

module.exports = ApiFeatures;