// 邮箱正则
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


// 部分	               正则表达式	       
// ^	                匹配字符串开头，确保整个字符串是邮箱格式，不是部分匹配
// [a-zA-Z0-9._%+-]+	匹配邮箱的本地部分，允许英文字母、数字、.、_、%、+、-，但不能是空
// @	                匹配 @ 符号	电子邮件地址的分隔符
// [a-zA-Z0-9.-]+	    匹配域名部分（如 gmail.com）
// \.	                匹配 . 号（点
// [a-zA-Z]{2,}	      匹配顶级域名（TLD）至少2个英文字母，如com、org、net
// $	                匹配字符串结尾	确保邮箱地址格式完整