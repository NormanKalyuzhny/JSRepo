'number' + 3 + 3 // Answer is 'number33' because of Concatenation.

null + 3 // Answer is 3 because 'nothing + 3'.

5 && "qwerty" // Answer is 'qwerty' (true).  AND returns the first falsy value or the last value if none were found.

+'40' + +'2' + "hillel"; // Answer is '42hillel' because of + before a string, cast a string to a number and Concatenation at the end.

'10' - 5 === 6; // Answer is 'false' because 5 is not equal to 6

true + false // 1 + 0 = 1

'4px' - 3 // Answer is 'NaN' because '4px' is not a number

'4' - 3 // Answer is 1

'6' + 3 ** 0; // Answer is 61 because any number to the zero power is 1. Concatenation at the end.

12 / '6' // Answer is 2 

'10' + (5 === 6); // Answer is '10false' because 5 is not equal to 6 and return false. Concatenation at the end.

null == '' // Answer is 'false' because null equals only itself and nothing else

3 ** (9 / 3); // Answer is 27

!!'false' == !!'true' // Answer is 'true' because 'false' and 'true' are boolean true

0 || '0' && 1 // Answer is 1 because OR converts each operand to boolean. If the result is true, stops and returns the original value of that operand.

(+null == false) < 1; // Answer is 'false' because +null is equal to 0 > 0 is false > false == false is true > true is 1 > '1 < 1' is false

false && true || true // Answer is 'true' because 'false && true' return 'false' and 'false || true' return 'true'

false && (false || true); // Answer is 'false' becouse 'false || true' return 'true' and 'false && true' return 'false'

(+null == false) < 1 ** 5; // Answer is 'false'. Same with (+null == false) < 1;