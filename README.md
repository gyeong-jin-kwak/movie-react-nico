# 2020 09 30 Movie App 만들기 with NICO쌤

## 배포된 페이지
[Movie App 보러가기](https://gyeong-jin-kwak.github.io/movie-react-nico/)

## after CRA 삭제해도 되는 파일
$npx create-react-app을 마친 뒤 src / index.js, App.js 파일을 남기고 모두 삭제

npm i --save prop-types
요구되는 protype을 작성자가 설정하여 그 이외의 type을 작성하면 console warn 이 뜨도록 한다.

npm i --save axios
https://yts-proxy.now.sh/list_movies.json

npm i --save gh-pages

## Life Cycle
componentDidMount는 render가 모두 끝난 후에 호출된다.

```
import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 3000)
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>{ isLoading ? 'loading...' : 'we are ready' }</div>
        );
    }
}

export default App;

```

## es5 -> es6
```
es5
const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
console.log(movies.data.data.movies)

es6
const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
console.log(movies)
```

## git cloud에 내 project 올리기 
npm i --save gh-pages
git remote -v
gyeong-jin-kwak.github.io/movie-react-nico
package.json 업데이트 -> hompage 추가 (homepage 폴더이름은 소문자여야만 한다.)
```
"homepage": "https://gyeong-jin-kwak.github.io/movie-react-nico/"
```
package.json 업데이트 -> script 추가
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages "
  },
```
npm run build 
완료되면 build 폴더가 생성된다.
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
```
deploy predeploy 'deploy' 이름이 같아야만 한다.
npm run deploy

public 페이지 -> index.html title 바꾸기 -> npm run deploy