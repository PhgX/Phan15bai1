let flag = true;
let prime = '';
let num = prompt("Nhập số");
if(num > 1000 && num > 0){
    alert("xin nhập lại số nhỏ hơn 1000 và lớn hơn 1")
}
else {
    if (num < 2){
        flag = false;
    }
    else {
        for (let i = 2; i < num; i++)
                if (num%i===0){
                    flag = false;
                    alert(num + " Không phải là số nguyên tố")
                    break;
                }
        }
        if (flag === true) {
            alert(num + " là số nguyên tố");
        }    
}

    

