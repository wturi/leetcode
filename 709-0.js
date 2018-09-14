/**
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 
示例 1：
输入: "Hello"
输出: "hello"

示例 2：
输入: "here"
输出: "here"

示例 3：
输入: "LOVELY"
输出: "lovely"
 */

 /**
  * 
  */

  /**
   * 大小写字母之差是32
 * @param {string} str
 * @return {string}
 */
let toLowerCase = (str)=> {
    //return str.toLowerCase();
    let strs='';
    for (let i = 0; i < str.length; i++) {
       if(str[i]>='A'&&str[i]<='Z'){
          let unicode=str.charCodeAt(i);
         let char=String.fromCharCode(unicode+32);
         strs+=char;
       }else{
           strs+=str[i];
       }
    }
    return strs;
};

console.log(toLowerCase('HOoL'))