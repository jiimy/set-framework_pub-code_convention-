# set-framework

## 부트스트랩처럼 규정을 만들려고 합니다. 

### 전처리 환경(less, scss, sass)에서 작업하며, spa처럼 컴포넌트 구분을 원칙으로 합니다. 

#### !는 폴더. @는 파일

!html 
 - @main.html

!assets 
 - !js
   - !lib
     - 외부 스크립트 정의 ( jquery, jquery-ui를 제외한 나머지)
  - base
     - 제이쿼리종류들..jquery, jquery-ui등등
  - custom
     - 실제 작업 custom.js
 - !css
   - !base
     - 기본으로 깔리는 css정의. common, font, reset, 기본 사용자 정의 css(mt:30px)
     @index.css : base 들의 파일 모음. ex   @import url(base/common.css);
   - !component
     - 각 component별 css정의
     - component.css (@import url(_header.scss) 처럼
   - !lib
     - 외부 css정의(slick.css)
   - !module 
     - mixin 정의
   
##### 나만의 css 컨벤션 추가 하기. 
