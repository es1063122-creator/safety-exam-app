// 전역 문제 데이터
window.EXAMS = {
  "산업안전기사": {
    "2015-03-08": {
      title: "산업안전기사 2015년 3월 8일 필기",
      questions: [
        {
          no: 1,
          subject: "1과목 안전관리론",
          question: "휴먼에러(Human Error) 원인의 레벨(Level)을 분류할 때 작업조건이나 작업형태 중에서 다른 문제가 생겨서 그것 때문에 필요한 사항을 실행할 수 없는 에러를 무엇이라고 하는가?",
          options: ["Command Error","Primary Error","Secondary Error","Third Error"],
          answer: 2,
          explanation: "다른 원인으로 인해 필요한 행동을 실행하지 못하는 2차적 오류 → Secondary Error."
        },
        {
          no: 2,
          subject: "1과목 안전관리론",
          question: "다음의 재해사례에서 기인물에 해당하는 것은?",
          options: ["덮개","급유","변속치차","선반"],
          answer: 2,
          explanation: "재해를 직접 유발한 물체 = 기인물 → 변속치차."
        }
        // ... 나머지 3~120번까지 같은 형식으로 이어 붙이면 됨
      ]
    }
  },
  "건설안전기사": {
    "2017-03-05": {
      title: "건설안전기사 2017년 3월 5일 필기 (예시)",
      questions: [
        {
          no: 1,
          subject: "1과목 산업안전관리론",
          question: "건설공사 안전관리의 기본원칙과 가장 거리가 먼 것은?",
          options: [
            "계획된 공정에 맞춘 안전조치",
            "위험요인의 사전 제거",
            "재해 발생 후 조치 위주의 관리",
            "재해 통계에 근거한 예방대책 수립"
          ],
          answer: 2,
          explanation: "기본은 사전 예방 중심. 재해 발생 ‘후’ 조치 위주의 관리는 원칙과 거리가 멂."
        }
        // ... 이어서 2번~120번까지
      ]
    }
  }
};
