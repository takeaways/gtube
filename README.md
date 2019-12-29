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
