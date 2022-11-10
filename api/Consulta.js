export async function getData(){
    try{
        const url = `https://www.elapi/offers.php`;
        const response = await fetch(url);
        const result = await response.json();
        return result;

    }catch(error){
        throw error;
    }
}

export async function getInfoComerc(id_comerciante){
    try{
        const url = `https://www.elapi/info_merch.php?id_comerciante=${id_comerciante}`;
        const response = await fetch(url);
        const result = await response.json();
        var img="";
        result.forEach(element => {
            img=element.logo_android;
        });

        return img;

    }catch(error){
        throw error;
    }
}