export const BASE_URL = "http://localhost:4000/api/v1/";

export const fetchSearchResults = async query =>{
    if(query && query.length > 0){
        const url = `${BASE_URL}/products?keyword=${query}`;
        const res = await fetch(url);
        const resJson = JSON.stringify(res.json());
        return resJson ;
    }else{
        return [];
    }
};

