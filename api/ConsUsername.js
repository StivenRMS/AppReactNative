export async function getName(name){
    try{
        const url = `https://www.elapi/i_us.php?username=${name}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
        

    }catch(error){
        throw error;
    }
}
