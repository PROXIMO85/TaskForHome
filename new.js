
const a="valeh farajov";
const b=a.split(" ");
for(let i=0;i<b.length;i++){
    b[i]=b[i][0].toUpperCase()+b[i].substring(1);
}
b.join(" ");
console.log(b);


