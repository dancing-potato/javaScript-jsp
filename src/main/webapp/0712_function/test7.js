/**
 * 외부자바스크립트 파일 내에 사용자 정의 함수 정의하고 호출하기
 */
function checkNumGame() {
	/*
	정수 1개를 입력받아 기존에 저장된 정수와 비교하여 일치 여부 확인한 후
	1) 기존에 저장된 숫자가 입력받은 숫자보다 클 경우 : "입력받은 숫자보다 큽니다!" 출력
	2) 기존에 저장된 숫자가 입력받은 숫자보다 작을 경우 : "입력받은 숫자보다 작습니다!" 출력
	3) 기존에 저장된 숫자가 입력받은 숫자와 같을 경우 : "정답입니다!" 출력
	----------------------------------------------------------------------------------------
    => 단, 입력받은 숫자보다 작거나 클 경우(정답이 아닐 경우) 다시 숫자 입력받기 => 무한루프 활용
	=> 이 때, 정답일 경우 반복문 종료 후 숫자를 입력한 횟수를 계산하여 "x번만에 정답!" 출력
	   (반복문 내에서 숫자 입력 후 입력받은 횟수를 카운팅 필요)
	*/
	
	var correctNum = 10; // 정답
	var count = 0; // 숫자 입력받은 횟수 카운팅 할 변수
	
//	while(true) {
//		var num = prompt("숫자 1개를 입력하세요");
//	//  alert("입력하신 숫자는 " + num + "입니다!");
//	
//		// 숫자 입력 횟수를 카운팅 하기 위해 숫자 입력 후 카운팅 변수(count) 값을 1 증가시키기
//		count++; // count = count + 1 또는 count += 1 과 동일
//	
//		// 입력받은 숫자와 저장된 숫자(= 정답)를 비교
//		if(correctNum > num) {
//			alert("입력받은 숫자보다 큽니다!");	
//		} else if(correctNum < num) {
//			alert("입력받은 숫자보다 작습니다!");
//		} else {
//			alert("정답입니다!");
//			break; // 현재 반복문(while)을 종료하고 빠져나감
//		}
//	} // while 문 끝
//	// => while 문 내에서 break 문을 만나면 이동하는 위치

	// =============================================================================
	// 무한루프를 사용하지 않고 동일한 작업을 수행하는 코드
//	var isCorrect = false; // 정답 여부를 저장할 변수 선언(기본값 : 정답이 아니라는 의미의 false)
//	
//	while(!isCorrect) { // isCorrect == false
//		var num = prompt("숫자 1개를 입력하세요");
//	//  alert("입력하신 숫자는 " + num + "입니다!");
//	
//		// 숫자 입력 횟수를 카운팅 하기 위해 숫자 입력 후 카운팅 변수(count) 값을 1 증가시키기
//		count++; // count = count + 1 또는 count += 1 과 동일
//	
//		// 입력받은 숫자와 저장된 숫자(= 정답)를 비교
//		if(correctNum > num) {
//			alert("입력받은 숫자보다 큽니다!");	
//		} else if(correctNum < num) {
//			alert("입력받은 숫자보다 작습니다!");
//		} else {
//			alert("정답입니다!");
//			isCorrect = true; // 정답일 때 정답 표시를 위해 isCorrect 를 true 로 변경
//		}
//	} // while 문 끝
	// => while 문 내에서 break 문을 만나면 이동하는 위치
	// =============================================================================
	// 무한루프를 사용하지 않고 동일한 작업을 수행하는 코드
	while(num != correctNum) { // 입력받은 숫자와 정답이 같지 않을 경우 반복 수행
		// => 자바스크립트의 var 은 변수 선언 전에 미리 변수 사용도 가능함(undefined 값 저장됨)
		var num = prompt("숫자 1개를 입력하세요");
	//  alert("입력하신 숫자는 " + num + "입니다!");
	
		// 숫자 입력 횟수를 카운팅 하기 위해 숫자 입력 후 카운팅 변수(count) 값을 1 증가시키기
		count++; // count = count + 1 또는 count += 1 과 동일
	
		// 입력받은 숫자와 저장된 숫자(= 정답)를 비교
		if(correctNum > num) {
			alert("입력받은 숫자보다 큽니다!");	
		} else if(correctNum < num) {
			alert("입력받은 숫자보다 작습니다!");
		} else {
			alert("정답입니다!");
		}
	} // while 문 끝
	// => while 문 내에서 break 문을 만나면 이동하는 위치

	// ===================================================================================
	document.write(count + "번만에 정답!");
	
	
	
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 