/*

Amazon FEE - Phone Screen

https://leetcode.com/discuss/interview-question/573751/amazon-fee-phone-screen

https://www.youtube.com/watch?v=tvvCFeBr1bY&list=PL_KW_uw2ITn8xWRkGZjKTfb-9xj_pJfgT&index=17



Question
Given a HTML structure

<form id="parent">
	<input type="text" name="foo.bat" />
	<input type="text" name="foo.bar.baz" />
	<input type="text" name="fizz" />
</form>
Write a function (in JS) that returns an object with values of text inputs in the form id passed to it.
For eg:

getValues("parent") should return object like

{
	"foo": {
		"bat" : _____, //Actual value of 1st text box
		"bar" : {
			"baz" : _____ // Value of 2nd text box
		}
	},
	"fizz" : _____ // Value of 3rd text box
}

*/
