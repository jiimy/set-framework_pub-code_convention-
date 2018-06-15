# set-framework

## 부트스트랩처럼 규정을 만들려고 합니다. 

### 전처리 환경(less, scss, sass)에서 작업하며, spa처럼 컴포넌트 구분을 원칙으로 합니다. 

#### !는 폴더. @는 파일
<pre>
!html 
 - @main.html

!assets 
├─!js
│ ├─!lib		#외부 스크립트 정의 ( jquery, jquery-ui를 제외한 나머지)
│ ├─!base		#제이쿼리종류들..jquery, jquery-ui등등
│ ├─!custom		#실제 작업 custom.js
└─!css
  ├─!base #reset.css , font.css, commmon.css, basic.css(사용자정의 css mg:30px), index.css('다른 css들 @import');
  ├─!component		#각 component별 css정의, index.css
  ├─!lib		#외부 css정의(slick.css) 
  └─!module 		#mixin 정의

</pre>

##### css 컨벤션.
```
이하 변수 선언 $
display 부분 .block{display:block!important;}
             .none{display:none!important;}
margin 종류들 .mr30{margin-right:30px;}

```

##### 클래스 네이밍
```
기본적으로 카멜표기법.
동사먼저 오기, button은 Btn으로 -> .showBtn

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

```


##### mixin 정의하기
```



```

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
