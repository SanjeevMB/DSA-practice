class Solution{
    
    findSum(A,N){
        
        let min = Infinity;
        let max = -Infinity;
        
        for (let i = 0; i < N; i++) {
            
            if (A[i] < min) {
                
                min = A[i];
                
            } if (A[i] > max) {
                
                max = A[i];
                
            }
        }
        
        return min + max;
        
    }
    
}

let max_min_sum = new Solution();

console.log(max_min_sum.findSum([-2, 1, -4, 5, 3], 5));