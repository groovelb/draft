# Components

Vibe Dictionary 텍소노미 v0.4 기반 분류. 번호는 텍소노미 카테고리 번호.

## 참조 문서

- 전체 텍소노미: `.claude/skills/component-work/resources/taxonomy-v0.4.md`
- 빠른 인덱스: `.claude/skills/component-work/resources/taxonomy-index.md`

새 컴포넌트 생성 시 위 문서에서 해당 카테고리 번호와 컴포넌트 원형을 확인한 후 구현할 것.

---

## 1. Typography

- FitText: 컨테이너에 맞춤 텍스트 (`components/typography/FitText.jsx`)
- HighlightedTypography: 하이라이트 타이포그래피 (`components/typography/HighlightedTypography.jsx`)
- InlineTypography: 인라인 타이포그래피 (`components/typography/InlineTypography.jsx`)
- StretchedHeadline: 스트레치 헤드라인 (`components/typography/StretchedHeadline.jsx`)
- StyledParagraph: 스타일드 문단 (`components/typography/StyledParagraph.jsx`)
- Title: 타이틀 컴포넌트 (`components/typography/Title.jsx`)
- QuotedContainer: 인용 컨테이너 (`components/typography/QuotedContainer.jsx`)

## 2. Container

- SectionContainer: 페이지 섹션 컨테이너 (`components/container/SectionContainer.jsx`)
- CarouselContainer: 캐로셀 컨테이너 (`components/container/CarouselContainer.jsx`)
- RatioContainer: 비율 기반 컨테이너 (`components/container/RatioContainer.jsx`)

## 3. Card

- CardContainer: 카드 기본 컨테이너 (`components/card/CardContainer.jsx`)
- CustomCard: 미디어+콘텐츠 카드 (`components/card/CustomCard.jsx`)
- ImageCard: 이미지 카드 (`components/card/ImageCard.jsx`)
- MoodboardCard: 무드보드 컬렉션 카드 (`components/card/MoodboardCard.jsx`)
- [MUI] Card

## 4. Media

- AspectMedia: 비율 기반 미디어 컨테이너 (`components/media/AspectMedia.jsx`)
- ImageCarousel: 이미지 캐로셀 (`components/media/ImageCarousel.jsx`)
- ImageTransition: 이미지 트랜지션 효과 (`components/media/ImageTransition.jsx`)
- CarouselIndicator: 캐로셀 인디케이터 (`components/media/CarouselIndicator.jsx`)

## 5. Data Display

- [MUI] Table

## 6. In-page Navigation

- CategoryTab: 카테고리 탭 (`components/in-page-navigation/CategoryTab.jsx`)
- [MUI] Tabs

## 7. Input & Control

- FileDropzone: 파일 드래그&드롭 영역 (`components/input/FileDropzone.jsx`)
- SearchBar: 검색 입력 바 (`components/input/SearchBar.jsx`)
- TagInput: 태그 입력 필드 (`components/input/TagInput.jsx`)
- [MUI] Button, Checkbox, Select, Switch, TextField

## 8. Layout

- PhiSplit: 황금비 분할 레이아웃 (`components/layout/PhiSplit.jsx`)
- SplitScreen: 좌우 분할 레이아웃 (`components/layout/SplitScreen.jsx`)
- BentoGrid: 벤토 그리드 레이아웃 (`components/layout/BentoGrid.jsx`)
- LineGrid: 그리드 라인 자동 삽입 (`components/layout/LineGrid.jsx`)
- FullPageContainer: 전체 페이지 컨테이너 (`components/layout/FullPageContainer.jsx`)
- PageContainer: 반응형 페이지 컨테이너 (`components/layout/PageContainer.jsx`)
- AppShell: 반응형 앱 셸 (`components/layout/AppShell.jsx`)
- StickyAsideCenterLayout: 대칭 3열 그리드 (`components/layout/StickyAsideCenterLayout.jsx`)
- [MUI] Grid, Masonry

## 9. Overlay & Feedback

- [MUI] Dialog

## 10. Navigation

- GNB: 반응형 글로벌 네비게이션 바 (`components/navigation/GNB.jsx`)
- NavMenu: 네비게이션 메뉴 (`components/navigation/NavMenu.jsx`)
- SlidingHighlightMenu: 슬라이딩 하이라이트 메뉴 (`components/navigation/SlidingHighlightMenu.jsx`)

## 11. KineticTypography

- RandomRevealText: 랜덤 순서 blur 리빌 (`components/kinetic-typography/RandomRevealText.jsx`)
- ScrambleText: 텍스트 스크램블 전환 (`components/kinetic-typography/ScrambleText.jsx`)
- ScrollRevealText: 스크롤 연동 텍스트 리빌 (`components/kinetic-typography/ScrollRevealText.jsx`)

## 12. Scroll

- VideoScrubbing: 스크롤 기반 비디오 스크러빙 (`components/scroll/VideoScrubbing.jsx`)
- ScrollScaleContainer: 뷰포트 연동 스케일 컨테이너 (`components/scroll/ScrollScaleContainer.jsx`)

## 13. ContentTransition

- HorizontalScrollContainer: 세로→가로 스크롤 변환 (`components/content-transition/HorizontalScrollContainer.jsx`)

## 14. Motion

- FadeTransition: opacity 전환 애니메이션 (`components/motion/FadeTransition.jsx`)
- PerspectiveTransition: 3D 원근 회전 전환 (`components/motion/PerspectiveTransition.jsx`)
- MarqueeContainer: 무한 루프 수평 흐름 (`components/motion/MarqueeContainer.jsx`)

## 15. DynamicColor

- GradientOverlay: WebGL 스크롤 반응형 그라데이션 (`components/dynamic-color/GradientOverlay.jsx`)

---

## Common

- Indicator: 범용 인디케이터 (`common/ui/Indicator.jsx`)
- Placeholder: 스토리 예제용 FPO 플레이스홀더 (`common/ui/Placeholder.jsx`)
- FilterBar: 필터 바 (`components/templates/FilterBar.jsx`)
