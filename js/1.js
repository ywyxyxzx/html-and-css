 //do whil
        function star(){
            let tr = 0;
            
            let mtr = 5;
            do{
                let n = 0;
                do{
                    console.log(`${n},${tr}`)
                    document.write("*");
                      
                }while(n++ <= tr)
              
                console.log(`${n},${tr}--`)
                document.write("<br>");
            }while(++tr <= mtr)
        }
       /// star()

    //    function tag(...vars){

    //     console.log(vars);
    //     console.log(vars instanceof Array,11);

    //    }
    //    tag(1,2,3,4,5,6123123)

    
    // let name = "hou dun ren ";
    // let web = "aaa.com";
    // console.log(tag1`online${name},address${web}...`);
    // function tag1(strings,...values){
    //     console.log(111, strings, 222, values)
    // }

    let lessons = [{
        title: 'aaa', author: "wang"
    }, {
        title: 'bbb', author: "hou"
    }, {
        title: 'ccc', author: "dun"
    }];

    function template(){
        return `<ul>
            ${lessons.map(item =>{
                return `<li>${item.title} by ${item.author}</li>`   
            }).join("")}
            </ul>`
    }
    document.body.innerHTML+= template()
