# Project Directory Rules (MUST)

새로운 컴포넌트를 추가할 때는 아래 디렉토리 룰을 따른다.
분류 기준: Vibe Dictionary 텍소노미 v0.4 (`.claude/skills/component-work/resources/taxonomy-v0.4.md`)

## 디렉토리 구조

```
src/
  components/                   # Vibe Dictionary 텍소노미 기반 분류
    typography/                 # #1 텍스트 표현과 장식
    container/                  # #2 시각적 경계와 그룹핑
    card/                       # #3 독립적 정보 단위
    media/                      # #4 이미지, 비디오 표시
    data-display/               # #5 구조화된 데이터 시각화
    in-page-navigation/         # #6 페이지 내 탐색
    input/                      # #7 사용자 입력
    layout/                     # #8 공간 배치와 구조
    overlay-feedback/           # #9 맥락적 정보 표시
    navigation/                 # #10 페이지 간 이동
    kinetic-typography/         # #11 텍스트 애니메이션 효과
    scroll/                     # #12 스크롤 기반 효과
    content-transition/         # #13 섹션 간 전환
    motion/                     # #14 스토리텔링 모션
    dynamic-color/              # #15 동적 색상 변화
    templates/                  # 다수 컴포넌트 조합 템플릿
    storybookDocumentation/     # Storybook 문서 유틸
    *.stories.jsx               # 컴포넌트와 같은 폴더에 co-locate

  common/ui/                    # 공통 UI 요소
  stories/                      # 문서 전용 스토리 (style, overview, page, template, test-data)
  hooks/                        # 커스텀 React 훅
  utils/                        # 유틸리티 함수
  styles/                       # 전역 스타일, 테마
  data/                         # 데이터 파일
  assets/                       # 이미지, 폰트, 비디오 등 정적 자원

.storybook/                     # Storybook 설정 (main.js, preview.jsx)
```

## 새 컴포넌트 추가 시

1. `taxonomy-v0.4.md`에서 해당 카테고리 번호 확인
2. 해당 카테고리 디렉토리에 컴포넌트 생성
3. 스토리 파일은 컴포넌트와 같은 디렉토리에 `ComponentName.stories.jsx`로 생성
4. 스토리 title prefix는 `storybook-writing.md`의 카테고리 매핑 참조
5. 카테고리 디렉토리가 없으면 새로 생성 (텍소노미 번호 참조)
