//
// Created by qlghwp123 on 2024-10-09.
//
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;

        for(int i = 0; i < 32; i++) {
            if(n & (uint32_t) pow(2, 31 - i)) {
                result |= (uint32_t) pow(2, i);
            }
        }

        return result;
    }
};