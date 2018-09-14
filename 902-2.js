/**
 * 我们有一组排序的数字 D，它是  {'1','2','3','4','5','6','7','8','9'} 的非空子集。（请注意，'0' 不包括在内。）
现在，我们用这些数字进行组合写数字，想用多少次就用多少次。例如 D = {'1','3','5'}，我们可以写出像 '13', '551', '1351315' 这样的数字。
返回可以用 D 中的数字写出的小于或等于 N 的正整数的数目。

示例 1：
输入：D = ["1","3","5","7"], N = 100
输出：20
解释：
可写出的 20 个数字是：
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.

示例 2：
输入：D = ["1","4","9"], N = 1000000000
输出：29523
解释：
我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，
81 个四位数字，243 个五位数字，729 个六位数字，
2187 个七位数字，6561 个八位数字和 19683 个九位数字。
总共，可以使用D中的数字写出 29523 个整数。

提示：
D 是按排序顺序的数字 '1'-'9' 的子集。
1 <= N <= 10^9
 */


/**
 * 
 * @param {String[]} D '1'-'9'的子集
 * @param {Number} N 最大值
 */
let atMostNGivenDigitSet = (D, N) => {
    let count = 0,
        lenD = D.length;

    /**将string子集转换成int子集 */
    let numD = [];
    D.forEach(d => {
        numD.push(parseInt(d));
    });

    /**将最大值转换成和上面子集一样的拼接形式 */
    let arrN = N.toString().split('');
    let numN = [];
    arrN.forEach(n => {
        numN.push(parseInt(n));
    });

    /**拼接的长度小于最大值的长度，则直接求溟
     * 例子： 子集数量4，最大值为100
     *       4的1次方 = 4
     *       4的2次方 = 16
     */
    for (let i = 1; i < arrN.length; i++) {
        count += Math.pow(lenD, i);
    }


    /**
     * 递归函数接受两个参数，D和N，表示用D组成与N相同位数的数字的个数，在函数中，遍历D，判断与N[0]的关系：
     * 若d大于N[0]，说明不能以d开头，break；
     * 若d等于N[0]，说明可以以d开头，但是还得继续判断后续其他数字，于是就要递归调用了；
     * 若d小于N[0]，说明只要以d开头，就都满足，所以是D长度的（N-1)长度次方。
     * 若N的长度为0，说明这里已经递归到个位数了，返回1。
     * @param {*} numD 
     * @param {*} numN 
     */
    const recursion = (numD, numN) => {
        if (!numN.length) return 1
        let count = 0
        for (let num of numD) {
            if (num > numN[0]) break
            else if (num === numN[0]) {
                count += recursion(numD, numN.slice(1));
            } else {
                count += Math.pow(numD.length, (numN.length - 1));
            }
        }
        return count;
    }
    return count + recursion(numD, numN)
};





console.log(`可以写出：${atMostNGivenDigitSet(['1','4','9'], 1000000000)}`)