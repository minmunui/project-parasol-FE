# project-parasol-FE

## 개요
이 프로젝트는 부산대학교 2023년 전기 졸업과제 '심층 강화학습을 통한 주식투자 전략 개발'의 일환으로 진행되었습니다.

이 Repository는 강화학습으로 도출된 에이전트의 Action을 웹을 통해 볼 수 있도록 하는 프로젝트입니다.

## 프로젝트 설치
`node v18.15.0` 환경에서 개발되었습니다. nodejs를 설치해주세요.
https://nodejs.org/ko

### 1. 프로젝트 클론
이 프로젝트를 클론합니다.
```bash
git clone <해당 프로젝트 url>
```

### 2. 프로젝트 의존성 설치
이 프로젝트를 설치합니다.
```bash
npm install
```

### 3. 프로젝트 실행
이 프로젝트를 실행합니다.
```bash
npm run start
```

## 프로젝트 구조
```
├── README.md
├── package.json
├── public # 정적 파일
├── src
│   ├── components # 웹을 구성하는 컴포넌트
│   ├── hooks # 웹에 사용되는 커스텀 훅
│   ├── mocks # mocking을 이용한 테스트용 코드
│   │   ├── datas # mocking에 사용되는 데이터
│   ├── services # api 호출을 위한 코드
│   ├── utils # 유틸리티 코드
```
