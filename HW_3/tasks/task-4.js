
'use strict';

const countTotalSalary = function(employees) {
   const allSalaries = Object.values(employees);
   let totalSalary = 0;
   for(const employeeSalary of allSalaries){
      totalSalary += employeeSalary;
   }
   return totalSalary;
 };
 
 console.log(countTotalSalary({})); 
 
 console.log(
   countTotalSalary({
     mango: 100,
     poly: 150,
     alfred: 80,
   }),
 ); 
 
 console.log(
   countTotalSalary({
     kiwi: 200,
     lux: 50,
     chelsy: 150,
   }),
 ); 





