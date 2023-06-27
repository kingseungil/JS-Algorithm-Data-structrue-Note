/**
 * 백트래킹(Backtracking)
 * : 해를 찾는 도중에 '막히면' (즉, 해가 아니면) 되돌아가서 다시 해를 찾아가는 기법
 * 대표문제 : N-Queen
 */

let n = 8; // 전체 맵(map)의 크기
let queens = []; // 현재 체스판에 놓인 퀸의 위치 정보들

// (x,y)에 퀸을 놓을 수 있는지 확인하는 함수
function possible(x, y) {
    for (let [a, b] of queens) {
        if (a === x || b === y) return false; // 같은 행, 열에 놓이는 경우
        if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선에 놓이는 경우
    }
    return true;
}

let count = 0; // 경우의 수

// DFS를 이용하여 퀸을 놓는 경우의 수를 찾는 함수
function dfs(row) {
    if (row === n) count += 1; // 마지막 행까지 퀸을 놓을 수 있었다면 경우의 수 1 증가
    for (let i = 0; i < n; i++) {
        if (!possible(row, i)) continue; // 해당 위치에 퀸을 놓을 수 없다면 다음 열의 위치로 넘어감
        queens.push([row, i]); // 해당 위치에 퀸을 놓을 수 있다면 퀸을 놓고
        dfs(row + 1); // 다음 행으로 넘어감
        queens.pop(); // 현재 위치에서 퀸을 제거하여 다른 경우의 수를 찾음
    }
}

dfs(0); // 0행부터 시작
console.log(count); // 경우의 수 출력
