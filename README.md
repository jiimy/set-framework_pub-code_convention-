# set-framework

## 부트스트랩처럼 규정을 만들려고 합니다. 

### 전처리 환경(less, scss, sass)에서 작업하며, spa처럼 컴포넌트 구분을 원칙으로 합니다. 

#### !는 폴더. @는 파일
!html 
 - @main.html

public                        # (기본 트리구조)
├─dist                        # (컴파일 된 파일이 저장될 위치 폴더)
│ ├─com/                      # (컴파일 된 css를 min파일로 compress할 폴더)
│ ├─css/                      # (컴파일 된 css 파일)
│ ├─img/                      # (압축된 이미지가 저장될 곳)
│ ├─js/                       # (babel로인해 트렌스파일 된 js가 저장될 폴더)
│ └─index.html                # (compress된 html이 저장됨)
├─lib                         # (그대의 라이브버리 폴더)
│ └─etc..                     # (그대의 라이브러리)
└─src                         # (작업할 폴더)
  ├─img/                      # (작성할 img폴더)
  ├─js/                       # (작성할 js 폴더)
  ├─scss/                     # (작성할 scss 폴더)
  └─index.html                # (작성할 html 파일)

##### 나만의 css 컨벤션 추가 하기. 
