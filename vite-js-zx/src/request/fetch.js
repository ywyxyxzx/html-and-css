export default () => {
    const dataUrl = 'http://127.0.0.1:3002/news';
    
    return {
       async listRequest () {
           return await fetch(dataUrl , {
                method: "GET",
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                // body: JSON.stringify(data), // body data type must match "Content-Type" header
            }).then(r => r.json())
        },

        async delItemRequest(id){
            return await fetch(`${dataUrl}/${id}`,{
                method: "DELETE",
            }).then(r => r.json())
        },
        async addItemRequest(data){



            return await fetch(dataUrl,{



                method: "POST",

                mode: "cors", // no-cors, *cors, same-origin

                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached

                credentials: "same-origin", // include, *same-origin, omit

                headers: {

                    "Content-Type": "application/json",
                },


                body: JSON.stringify(data),



            }).then(r => r.json())



        },

        async updateItemRequest(id,data){


            return await fetch(`${dataUrl}/${id}`,{

                method: "PUT",

                body: JSON.stringify(data),

            }).then(r => r.json())

        },
        async getItemRequest(id){
            return await fetch(`${dataUrl}/${id}`,{
                method: "GET",
            }).then(r => r.json())
        },
    }

}
