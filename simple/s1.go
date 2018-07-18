package simple

//两数之和
func TwoSum(nums []int, target int) []int {
	//获取数组长度
	ind:=len(nums)
	//初始化一个长度为2的int数组
	result:=make([]int,2)
	//暴力处理 遍历
	out:for i:=0;i<ind;i++{
		for j:=i+1;j<ind;j++{
			if nums[i]+nums[j]==target{
				result[0]=i
				result[1]=j
				break out
			}
		}
	}
	return result
}