function matrixSearch(bigM,findM){
    //Outside loops look for findM[0][0] in bigM, stop loop before it tries to compare when findM can't fit inside what is left in bigM
    for(let row=0;row<=bigM.length-findM.length;row++){
        for (let col = 0; col <= bigM[row].length - findM[0].length; col++) {
            if(bigM[row][col] == findM[0][0]){
                for (let i = 0; i < findM.length; i++) {
                    for (let k = 0; k < findM[i].length; k++) {
                        if (bigM[row+i][col+k] != findM[i][k]) {
                            return false;//[-1,-1];
                        }
                    }
                }
                return true;//[row,col];
            }
        }
    }
    return false;//[-1,-1];
}
var lmatrix = [[12,34,45,56],
                [98,87,76,65],
                [56,67,78,89],
                [54,43,32,21],];
var smatrix = [[67, 78],
                [43, 32],];

console.log(matrixSearch(lmatrix,smatrix));