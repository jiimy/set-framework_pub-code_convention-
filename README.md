# set-framework - 퍼블리싱편(no gulp)

<!-- ## 부트스트랩처럼 규정을 만들려고 합니다. -->

### 전처리 환경(less는제외(cdn등 사용법이 편리), scss, sass)에서 작업하며, spa중 리액트처럼 컴포넌트 구분을 원칙으로 합니다. 

#### !는 폴더. @는 파일

<pre>
!assets 
├─!js
│ ├─!lib		#외부 스크립트 정의 ( jquery, jquery-ui를 제외한 나머지)
│ ├─!base		#제이쿼리종류들..jquery, jquery-ui등등
│ ├─!custom		#실제 작업 custom.js
└─!css
  ├─!base        #reset.css , font.css, commmon.css, basic.css(사용자정의 css mg:30px), index.Scss('다른 css들 @import');
  ├─!component		#각 component별 css정의, 구분별로 폴더로 따로 만들어도됨. index.Scss
  ├─!lib		#외부 css정의(slick.css) 
  └─!module 		#mixin.css mixin및 $등등 scss함수들
!html
├─main.html(jsp) #link:css(../assets/css/base/(컴파일된 index.css)..등등 /*css폴더 안에서 index로 각각의 폴더안의 css묶어도될듯*/)
│ └─header.(jsp) #jsp로 사용할때는 header.jsp, footer.jsp, popup.jsp 등등 공통으로 쓰이는 것들 분할
├─sub1.html(jsp)
└─sub..html(jsp)
</pre>


- - -

### 컨벤션

전체적으로 모음? 을 뺄지 말지, 반복되는 단어는 뺄지 말지 고민중...
ex) apply -> aply, consult -> cslt

위와 같은 맹목으로 구체적으로 길게 할지 . 짧게 하여 변수정의서를 따로 만들지..

##### css 컨벤션.
```
이하 변수 선언 $ (oocss기법?)
display 부분 .block{display:block!important;}
             .none{display:none!important;}
margin 종류들 .mr30{margin-right:30px;}

.unlink{
a링크의 기본 이벤트 막는 용도
}

--추가 작성중--
```

##### mixin 함수 정의하기
```
font정의하기 - font-family, size, weight
cursor:pointer 함수 
a링크에 대해서 pointer-events:none으로 하거나 js에서 막는 방법 

--추가 작성중--
```

##### 클래스 네이밍 및 변수 선언 규칙
```
- 기본적으로 카멜표기법.
동사먼저 오기, button은 Btn으로 -> .showBtn

- 레이어 popup들은 pop으로 클래스 

- bem기법 
전체구조를 본다음 최대 4depth까지 클래스를 어떻게 줄지 생각하고 5depth이상 갈거같으면 기존 구상을 카멜표기법으로 압축하여 구성 -> 최대한 작은 단위로 구조 쪼개기

- 일반적인 '홈페이지'의 경우 컨텐츠 사이즈의 클래스 명 
ㅁㅁWrap   (ㅁㅁ은 용도의 구분, main일수도 sub일수도 img일수도.. 이때 img가 중복된다면 img앞에 덧붙이는 식으로) 


--추가 작성중--
```

##### js 부분 
```
input:radio나 input:checkbox에 대하여 input+span형식으로 되어있는데 js에서 span클릭시 prev의 input을 체크한 효과를 주게하기


//익명함수 - 생성 후 함수 종료 후 바로 선언
    var browserWidthCheck = function(){
        if($(window).width() < 1024){
            $('html').addClass('under1024').removeClass('over1024')
        }else{
            $('html').addClass('over1024').removeClass('under1024')
        }
    }
    browserWidthCheck();
    
//재 사용성이 필요한 함수일 경우
_popup  과 같이 언더스코프를 붙인다. 
//단순 일회용일 거 같은 함수일 경우
언더스코프 제외

--추가 작성중--
```

`위의 규칙에 따른 작업으로 나오는 결과는 처음 구조(폴더생성 및 연결)에 시간이 오래걸리나구조를 파악에 용이하고 작업시 또는 수정시 리팩토링시 원할한 작업이 가능`

`요약`
`실제 작업하기 전 선작업 : 전체적인 프로젝트 파악이 중요 `

`장점 : 수정 및 구조 파악에 용이`

`단점 : 작업환경 구성이 오래걸림`


- - -

### scss 주요기능


##### 기타 표현법
```
//변수로 표현
$bg-color1:#fefec2;


//de-nest
.container {
  .child {
    color: blue;
  }
  @at-root .sibling {
    color: gray;
  }
}


//extend(상속)
*----Sass
.box {
  border: 1px solid gray;
}
.success-box {
  @extend .box;
  border: 1px solid green;
}

*----css
.box, .success-box {
  border: 1px solid gray;
}
.success-box {
  border: 1px solid green;
}
->.box의 속성들을 받아온다. 


//placeholder 
*----Sass
%box {
  padding: 0.5em;
}
.success-box {
  @extend %box;
  color: green;
}
.error-box {
  @extend %box;
  color: red;
}
%box {
  padding: 0.5em;
}
.success-box {
  @extend %box;
  color: green;
}
.error-box {
  @extend %box;
  color: red;
}

*----css
.success-box, .error-box {
  padding: 0.5em;
}
.success-box {
  color: green;
}
.error-box {
  color: red;
}
->%를 사용하면 상속은 하지만 해당 선택자는 컴파일 되지 않는다? (따로 빼낸다는 뜻인가)


//Mixin(믹스인)
*----Sass
@mixin headline ($color, $size) {
  color: $color;
  font-size: $size;
}
h1 {
  @include headline(green, 12px);
}

*----css
h1 {
  color: green;
  font-size: 12px;
}
->속성을 함수처럼 
```
