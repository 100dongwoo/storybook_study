
# storybook 이란?

React, Vue 및 Angular와 같은 컴포넌트기반은 복잡한 UI를 간단한 컴포넌트로 분해하는 데 도움이 되지만, 해결은 될 수 없습니다(갯수가 너무 많아짐) 그래서 이를 해결하고자, 
storybook은 UI 개발환경이며,UI를 컴포넌트 단위로 테스팅 해볼 수 있는 툴(구성 요소를 자동 으로 시각적으로 테스트가능)입니다.

 
###  🤷‍♂️ Storybook을 사용하는 이유 [링크](https://storybook.js.org/docs/react/why-storybook)
 
 <h4 style="color: green;fontWeight:bold">내구성이 더 뛰어난 UI 개발</h4>
 
 컴포넌트와 페이지를 분리하여 추적이 가능
 
 <h4 style="color: green;fontWeight:bold">적은 노력으로 플레이크 없이 UI 테스트</h4>
 Storybook은 자동화를 위한 기본 제공 워크플로를 제공합니다
 
 <h4 style="color: green;fontWeight:bold">팀에서 재사용할 문서 UI</h4>
 Storybook은 UI의 단일 정보 소스입니다. 스토리는 모든 구성 요소와 다양한 상태를 인덱싱하므로 팀에서 기존 UI 패턴을 쉽게 찾고 재사용할 수 있습니다. 스토리북도 자동 생성됩니다
 

 <h4 style="color: green;fontWeight:bold">UI가 실제로 어떻게 작동하는지 공유</h4>
 이야기는 UI가 어떻게 작동해야 하는지에 대한 그림이 아니라 UI가 실제로 어떻게 작동하는지 보여줍니다. 이를 통해 모든 사람이 현재 생산 중인 항목에 맞춰 정렬됨
 

 <h4 style="color: green;fontWeight:bold">UI 워크플로 자동화</h4>
 Storybook은 지속적 통합 워크플로와 호환이가능



 
> storybook을 처음 테스트 해보기위해 프로젝트에 관련 파일 삭제를 진행하였으며, 오직 storybook을 위한 프로젝트를 만들었습니다



# Step1 : Storybook 셋팅 및 실행

- npm uninstall --save react-scripts
-> react-scripts 삭제 시 의존성으로 인해서 npm start 등이 되지않는다.
- public 폴더 삭제 


- npm install --save-dev storybook-css-modules-preset
- npm install --save prop-types  (Typescript를 사용하지않고 js를 사용하므로 설치)
- npm install --save @storybook/addon-postcss 
- npx sb init (스트리북 설치)

### 결과

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
```
<hr/>


>저는 테스트를 위해서 스크립트를 최대한 간단하게 수정하였습니다


```
  "scripts": {
    "start": "start-storybook -p 6006",
    "build": "react-scripts build"
  },
```

-> npm start 시 나오는 화면
![](https://velog.velcdn.com/images/100dongwoo/post/033de6e8-2c57-4c9c-94b2-d1a95cbe95c3/image.png)





> export를 변경하여 새롭하게 추가되는것을 확인이 가능

![](https://velog.velcdn.com/images/100dongwoo/post/75605790-90fd-4716-b657-dbc74dfb65c6/image.png)


![](https://velog.velcdn.com/images/100dongwoo/post/8fadcbf8-78db-4231-a05b-0e21c83002df/image.png)






> JavaScript 기반으로 진행하여 prop-type를 설치했습니다

-> size 및 color등을 손 쉽게 추가 및 변경이 가능

![](https://velog.velcdn.com/images/100dongwoo/post/8c2c5f4b-ccfd-4b0e-8fd4-6ea48838bfcb/image.png)

-> button.css에 super를 지정해주면 적용이 된다. 
```
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
.storybook-button--super {
  font-size: 120px;
  padding: 12px 24px;
}
```



> [참고 ENUM](https://storybook.js.org/docs/react/essentials/controls) 해당 부분참고하여 radio가 아닌 select등으로 수정이가능

![](https://velog.velcdn.com/images/100dongwoo/post/0ed1df22-a66d-491b-b456-a7983b2bd651/image.png)



![](https://velog.velcdn.com/images/100dongwoo/post/d7190aba-a786-4b74-b267-326f46d8f998/image.png)



# Step2 : 구성요소 추가하는법


1. story폴더 내부 삭제를 먼저 진행
![](https://velog.velcdn.com/images/100dongwoo/post/d7109d24-babd-4f2a-8f3e-8a20faa8ec09/image.png)

-> main.js란?
가장 상단에 있는 .storybook 디렉토리에 존재하며 우리가 메인내부에서 활용하려는 구성이 포함되어있습니다.

-> 설치한 라이브러리 두개를 적용시킨다
![](https://velog.velcdn.com/images/100dongwoo/post/34d11dc9-444c-4b16-a096-9381f779da30/image.png)



> App.js를 Storybook.js로 이름을 변경하였습니댜(script실행을 하지않기 위해서입니다)

```
...Storybook.js

export const StoryBookTest=()=>{
  return(<h1>StoryBookTest</h1>)
}
```

![](https://velog.velcdn.com/images/100dongwoo/post/cd396edd-307a-4c31-8065-9806b09193c5/image.png)


> props를 해당 부분 처럼 입력 

![](https://velog.velcdn.com/images/100dongwoo/post/3330d87f-6c26-43a8-bd23-3673fc0d6df4/image.png)


=> TypeScript의 경우는 필요하지않습니다
![](https://velog.velcdn.com/images/100dongwoo/post/76801682-7c73-4093-8089-0f551a513816/image.png)


-> 결과 창

![](https://velog.velcdn.com/images/100dongwoo/post/a9348a6d-8b14-47df-b63c-1eb2b9d2cc72/image.png)


- StoryBook이 엄청 신기하게도 초기color는 지정해주지만 변경은 엄청 간단하게 해주네요~~


```
StoryBook.stories.js 수정

import { StoryBookTest } from "../StoryBook";

export default {
  title: "Storybook - A Customizable React Table Component",
  component: StoryBookTest,
};

const Template = (args) => <StoryBookTest {...args} />;

export const Default = Template.bind({});

Default.args = {
  rows: [
    ["This", "is", "just", "a", "test"],
    ["This", "is", "also", "a", "test"],
    ["Just", "a", "little", "more", "data"],
    ["Row", "number", "four", "right", "here"],
  ],
  headers: ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"],
};

```



# 결과 화면
![](https://velog.velcdn.com/images/100dongwoo/post/e77a126c-7536-47f6-a8ee-b92332cb5e1d/image.png)


## 참고

> argTypes를 수정하여 row,header 수정 불가능 하두록 수정 [참고](https://storybook.js.org/docs/react/essentials/controls)

![](https://velog.velcdn.com/images/100dongwoo/post/85ff8a52-6b53-4730-b0ce-8e1c1884d1b2/image.png)


# Step3 :MDX사용법 [참고](https://storybook.js.org/docs/react/writing-docs/mdx)


-> MDX는 스토리북에 포함되지는 않습니다
스토리북을 사용하여 구성요소를 렌더링하는 동시에 마크다운을 문서화하고 작성할 수 있습니다.
구성요서를 개발하는데 스토리북을 사용되긴 하지만 구성요소를 시연할수있는 좋은 방법이기도 하고, 사람들에게 문서를 제공이 가능합니다 


## 파일 생성
- stories/StoryBookTest.stories.mdx 생성

## 결과화면 및 StoryBookTest.stories.mdx소스코드

![](https://velog.velcdn.com/images/100dongwoo/post/5923cb59-1b9d-492b-b2fa-86d49284defc/image.png)


-> 보다간단하게 해당 문서가 작성이 가능합니다
