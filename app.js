'use strict';
//左の値が何かあればそれを使い、なければ０を使う。
//argv[2]は、ubutuで node app.js 100 としたときに、
//nodeが０、app.jsが１、100が２　となるので、100を使うということ。
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);
