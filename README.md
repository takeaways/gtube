# Babel

### 1. 사용하는 이유는 최신의 코드를 모든 브라우저가 이해할 수 있는 언어로 변환이 가능하다.

- npm i @babel/node
- npm install --save-dev @babel/preset-env
- npm install @babel/core
- .babelrc 파일에서 환경 설정을 해준다. [바벨이 실행되기 전에 제일 먼저 찾아 보는 파일이다.]
- 간단하게 설정하면 바로 최신의 코드사용가능
- babel-node index.js

# Nodemon

### 1. 서버를 자동으로 재실행 해준다.

- npm install nodemone -D
- nodemon --exec babel-node index.js
- nodemon --exec babel-node index.js --delay 2 : 2초를 기다리라

# Middleware

### 1. 미들웨어 이해하기

- (req, res, next) => {next();} : next를 호출함으로 다음으로 넘길 수 있다

<pre>
<code>
  const between = value => {
    console.log(`${value} 입니다.`);
    return (req, res, next) => {
      next();
    };
  };

  app.use(between('짱건일'));
</code>
</pre>

# MVC 이해하기

### 1. M model : data

### 2. V View : 화면

### 3. C Controller : 처리로직

# routes 파일로 경로 미리 정리 해두기

1. api 경로들을 미리 정의 해두면 관리 포인트가 줄어 든다.

# pug

### 1. 화면을 그리기 위한 템플릿으로 pug를 일단 사용해서 작업진행 추후 리엑트롤 변경 처리 진행 예정.

### 2. 사용법

- block ==> extends 로 사용가능
- inclde

### 3. res.locals. 를이용한 템플릿이로 정보 보내주기

# mixin

1. 웹 사이트에서 계속 반복되는 코드를 복사-붙여넣기 하지 않고
   재활용하는 방법!
2. views/mixins/videoBlock
3. html을 구조화 시킨 아이템이라고 생각하면 이해하기 쉽고 [리엑트 컴포넌트로 생각하면 쉬을 듯]

# 몽고디비 & 몽구스

### 1. npm i mongoose

# multer

### 1. npm i multer

# webpack

### 1. 최신자바스크립트를 사용하면지원하지 않는 브라우져가 있기때문에 사용

- npm i webpack webpack-cli
- npm install --save-dev extract-text-webpack-plugin@next
- webpack 을 실행하면 자동으로 webpack.config.js 을 찾아서 실행한다.
- 서버코드와 연관지어서는 절대 안되며!! 100% 프론트 코드에만 적용해야 한다.
