export async function getAutenticacion(x){
    try{
        const url = `https://www.elapi/login.php?file_get_contents=${x}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
        

    }catch(error){
        throw error;
    }
}