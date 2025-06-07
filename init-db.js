// 데이터베이스 초기화 스크립트
function initializeDatabase() {
    // 계정 데이터베이스
    const accounts = {
        // 선생님 계정
        "teacher": {
            password: "1234",
            role: "teacher",
            name: "선생님"
        },
        // 학생 계정 (26명)
        "1": { password: "1234", role: "student", name: "고하준" },
        "2": { password: "1234", role: "student", name: "김도현" },
        "3": { password: "1234", role: "student", name: "김민채" },
        "4": { password: "1234", role: "student", name: "김준우" },
        "5": { password: "1234", role: "student", name: "김찬우" },
        "6": { password: "1234", role: "student", name: "문서호" },
        "7": { password: "1234", role: "student", name: "박시연" },
        "8": { password: "1234", role: "student", name: "박시윤" },
        "9": { password: "1234", role: "student", name: "성윤우" },
        "10": { password: "1234", role: "student", name: "신재인" },
        "11": { password: "1234", role: "student", name: "우찬희" },
        "12": { password: "1234", role: "student", name: "윤연제" },
        "13": { password: "1234", role: "student", name: "이다나" },
        "14": { password: "1234", role: "student", name: "이도윤" },
        "15": { password: "1234", role: "student", name: "이서아" },
        "16": { password: "1234", role: "student", name: "이연우" },
        "17": { password: "1234", role: "student", name: "임수호" },
        "18": { password: "1234", role: "student", name: "정서윤" },
        "19": { password: "1234", role: "student", name: "정서진" },
        "20": { password: "1234", role: "student", name: "조주원" },
        "21": { password: "1234", role: "student", name: "주현우" },
        "22": { password: "1234", role: "student", name: "지소율" },
        "23": { password: "1234", role: "student", name: "최예원" },
        "24": { password: "1234", role: "student", name: "최지우" },
        "25": { password: "1234", role: "student", name: "최환준" },
        "26": { password: "1234", role: "student", name: "황혜원" }
    };

    // 출석 데이터베이스
    const attendance = {
        // 날짜별 출석 데이터가 여기에 저장됩니다
    };

    // 숙제 데이터베이스
    const homework = {
        // 날짜별 숙제 데이터가 여기에 저장됩니다
    };

    // 로컬 스토리지에 데이터 저장
    localStorage.setItem('accounts', JSON.stringify(accounts));
    localStorage.setItem('attendance', JSON.stringify(attendance));
    localStorage.setItem('homework', JSON.stringify(homework));

    console.log('데이터베이스가 초기화되었습니다.');
}

// 데이터베이스 초기화 실행
initializeDatabase(); 