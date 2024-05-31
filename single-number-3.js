var singleNumber = function(nums) {
    const numbers={};
    const singleNum=[]
    for(let i=0; i<nums.length; i++){
        if(!numbers.hasOwnProperty(nums[i])){
            numbers[nums[i]]=i;
            singleNum.push(nums[i]);
        } else {
            let index = singleNum.indexOf(nums[i]);
            singleNum.splice(index, 1);
        }
    }
    return singleNum;
};
