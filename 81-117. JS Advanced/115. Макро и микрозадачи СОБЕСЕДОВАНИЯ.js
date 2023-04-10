/* макрозадачи в коде это те задачи которые находяться
в очереди на выполнение, например отложенные запуск с помощью timeout */
setTimeout(() => console.log('timeout'));/* это макро задача 4мс*/


Promise.resolve()
    .tnen(() => console.log('promise'));/* это микро задача then catch finally
    формируются с помощью оператора await */
  
queueMicrotask(() => console.log('wow'));
    /* микро задача */    

Promise.resolve()
.tnen(() => console.log('promise_2'));/* это микро задача then catch finally
формируются с помощью оператора await */



console.log('code');/* это макро задача */

/* code 
promise
wow
promise_2
timeout */

/* как только выполняется одна макро задача после ней идут
 все накопленные микро задачи */

 /* 
 () => {} макро
 microtasks: rhen/catch/finally/await микро
 render
 () => () макро
 microtasks: rhen/catch/finally/await микро
 render
 и так далее...
 */