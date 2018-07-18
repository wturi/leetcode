package main

import (
	"fmt"
	"leetcode/simple"
)

func main(){
	nums := []int{1, 3, 4, 6, 7, 10}
	target := 11
    newArr := simple.TwoSum(nums, target)
    fmt.Println(newArr)
}