/* Rest оператор берет отдельные элементы и обьединяет их в один массив */
const log = function(a, b, ...rest) {/* rest... всегда последнйи собирает все оставшееся */
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');
/* basic rest [ 'operator', 'usage' ] */
/* rest собрал лишние элементы в массиве */

function calcOrDouble(number, basis = 2) {/* basis = 2 это значение по умольчанию */
    /* basis = basis || 2; */ /* так использовали раньше значение по умолчанию */
    console.log(number * basis);
}
calcOrDouble(3);
/* 6 */



