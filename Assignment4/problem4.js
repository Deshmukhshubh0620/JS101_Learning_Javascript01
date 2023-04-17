let sum=0;
let count=0;
for(let i=1;i<=100;++i){
  if(i%2==0){
    count++;
    sum+=i;
  }
}console.log(sum/count);