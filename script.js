//Find the Smallest and Biggest Numbers
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
//Filter out Strings from an Array
//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    return arr.filter(n => typeof n === 'number')
    }
//Count Instances of a Character in a String
//Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(myChar, str) {
     return [...str].filter(x => x===myChar).length;
}
//Which Generation Are You?
//Try finding your ancestors and offspring with code.
//Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
//If the number is negative, return the related ancestor.
//If positive, return the related descendant.
//You are generation 0. In the case of 0 (male or female), return "me!".
function generation(x, y) {
	let f = ['great grandmother','grandmother','mother','me!','daughter','granddaughter','great granddaughter'];
	let m = ['great grandfather','grandfather','father','me!','son','grandson','great grandson'];
	return y === 'm' ? m[3+x] : f[3+x];
}