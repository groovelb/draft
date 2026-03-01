# MUI Custom Theme (SHOULD)

MUI 커스텀 테마 설정 규칙. 구현 상세는 `src/styles/themes/default.js` 참조.

## 테마 파일 관리

- 커스텀 테마는 `src/styles/themes/default.js`에서 관리

## Typography (3-tier)

- **Brand Display**: VT323 (클래식 터미널 픽셀) — `theme.typography.displayFontFamily`
- **Heading**: Playfair Display (세리프, 레트로 에디토리얼) — `theme.typography.headingFontFamily`
- **Body**: Pretendard Variable (산세리프, 한국어 가독성) — `theme.typography.fontFamily`

## Color

- **Primary**: `#003DA5` (Blueprint Blue)
- **Secondary**: `#5C4A3A` (Warm Leather)
- **Background**: `#F5F0E6` (Aged Paper)
- **Text**: `#1A1A2E` (Navy Ink)
- **Accent**: `#B8956A` (Brass)

## Elevation

- x, y offset: 0
- opacity: 낮춤, blur: 높임 (dimmed shadow)

## Border Radius

- 기본 borderRadius: **0** (인라인 직접 지정 시 예외)
