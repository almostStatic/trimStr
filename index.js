/**
 * trims a string so it's not longer than the specified `maxLength`
 * @param str The string to trim
 * @param maxLength The maximum length of which the string will e shortened to
 * @returns `str` which is not longer than `maxLength`. If `str` was longer than `maxLength` then the last 3 characters will be replaced with `.`
 */
function trimStr(str, maxLength) {
	if(isNaN(maxLength)) return new Error('maxLength must be a number');
	if (str.length > Number(maxLength)) return `${str.slice(0, maxLength - 3)}...`; else return str;
};

console.log(trim('aaaaa', 2))

//More compact version
//const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);