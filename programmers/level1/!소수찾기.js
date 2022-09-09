function solution(n) {
  var arr = [];
  var cnt = 0;
  for (var i = 0; i < n + 1; i++) {
    arr.push(true);
  }

  for (var i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for(var i = 0; i <arr.length; i++) {
    if(arr[i]) cnt++;
  }

  return cnt++;
}

/*
* 못풀겠어서 인터넷에 찾아봤음...
*
* */
