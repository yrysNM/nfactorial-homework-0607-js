const readLine = require("readline");
const atelierDalida = require("./atelierDalida");


const splitLine = function(num) {
    let indexLine = 0, strLength = "-"; 
    do {
        indexLine++; 
        strLength += "-"; 
    }while(indexLine < num);

    return strLength;
}

function resOrder(obj) {
    console.log("Product name     Quantity");
    console.log(...obj);
}



function main() {
    const atelier_Dalida = new atelierDalida();
    const RL = readLine.createInterface(process.stdin, process.stdout);
    let welcome = "Welcome Atelier Dalida :)";
    
    let objOrderNumProductsName = {
        1: "T-Shirt",
        2: "Shorts",
        3: "Sneakers"
    };
    let objProductsNameOrdernum = {
        "T-Shirt": 1,
        "Shorts": 2,
        "Sneakers": 3
    };
    let orderNum = Object.keys(objOrderNumProductsName);
    let productName  = Object.values(objOrderNumProductsName);
    let booleanCh = false;

    for(let[k, v]of Object.entries(objOrderNumProductsName)) {
        console.log(`${k}: ${v}`);
    }

   
    console.log(splitLine(50));
    
    RL.question("Order number || product name: ", (op) =>  {
        productName.forEach(value => {
            if(op === value) {
                let indexOrder = productName.some
                console.log("Order number: ", objProductsNameOrdernum[value]);
                atelier_Dalida.setProduct(objProductsNameOrdernum[value]);
                booleanCh = true;
            }
        });
        if(parseInt(op) <= 3 && parseInt(op) != 0) {
            orderNum.forEach(item => {
                if(item == op) {
                    console.log("Product name: ", objOrderNumProductsName[op]);
                    atelier_Dalida.setProduct(objOrderNumProductsName[op]);
                    booleanCh = true;
                }
            }); 
        }
        else if(parseInt(op) > 3){
            console.log("Wrong input");
            booleanCh = false;
            RL.close();
            RL.removeAllListeners();
        } 

        console.log(splitLine(50));

        if(booleanCh) {
            
            RL.question("Quantity?:  ", function(num) {
                switch(isNaN(num)) {
                    case false: 
                    atelier_Dalida.setProductCount(num);
                    atelier_Dalida.allOrders();
                    resOrder(atelier_Dalida.showAllOrders());
                    // console.log(atelier_Dalida.toString())
                    booleanCh = true;
                    RL.close();
                        break; 
                    case true:
                        console.log("Wrong answer");
                        booleanCh = false;
                        RL.close();
                        RL.removeAllListeners();
                        break;
                    // default:
                    //     atelier_Dalida.setProductCount(0);
                }
            });
        }
    
    });
}
main();