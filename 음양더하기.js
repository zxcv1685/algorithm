const absolutes = [4, 7, 12];
const signs = [true, false, true];
function solution(absolutes, signs) {
    let result = [];
    let answer = 0;
    absolutes.map((e, i) => {
        if (signs[i]) {
            result.push(e);
        } else {
            result.push(-e);
        }
    });
    for (const num of result) {
        answer += num;
    }
    console.log(answer);
}
solution(absolutes, signs);
