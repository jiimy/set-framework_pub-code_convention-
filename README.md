# set-framework - 퍼블리싱편(no gulp)

## 부트스트랩처럼 규정을 만들려고 합니다. 

### 전처리 환경(less는제외(cdn등 사용법이 편리), scss, sass)에서 작업하며, spa처럼 컴포넌트 구분을 원칙으로 합니다. 

#### !는 폴더. @는 파일

<pre>
!assets 
├─!js
│ ├─!lib		#외부 스크립트 정의 ( jquery, jquery-ui를 제외한 나머지)
│ ├─!base		#제이쿼리종류들..jquery, jquery-ui등등
│ ├─!custom		#실제 작업 custom.js
└─!css
  ├─!base #reset.css , font.css, commmon.css, basic.css(사용자정의 css mg:30px), index.Scss('다른 css들 @import');
  ├─!component		#각 component별 css정의, 구분별로 폴더로 따로 만들어도됨. index.Scss
  ├─!lib		#외부 css정의(slick.css) 
  └─!module 		#mixin 정의
!html
├─main.html(jsp) #link:css(../assets/css/base/(컴파일된 index.css)..등등 /*css폴더 안에서 index로 각각의 폴더안의 css묶어도될듯*/)
│ └─header.(jsp) #jsp로 사용할대는 header.jsp, footer.jsp, popup.jsp 등등 공통으로 쓰이는 것들 분할  
├─sub1.html(jsp)
└─sub..html(jsp)
</pre>


#### 컨벤션

##### css 컨벤션.
```
이하 변수 선언 $
display 부분 .block{display:block!important;}
             .none{display:none!important;}
margin 종류들 .mr30{margin-right:30px;}

--추가 작성중--
```

##### mixin 정의하기
```

```

##### 클래스 네이밍
```
기본적으로 카멜표기법.
동사먼저 오기, button은 Btn으로 -> .showBtn

--추가 작성중--
```

##### js 부분 
```
//익명함수 - 생성 후 함수 종료 후 바로 선언
    var browserWidthCheck = function(){
        if($(window).width() < 1024){
            $('html').addClass('under1024').removeClass('over1024')
        }else{
            $('html').addClass('over1024').removeClass('under1024')
        }
    }
    browserWidthCheck();
--추가 작성중--
```

#### scss 주요기능


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
