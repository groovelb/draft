# MUI Custom Theme (SHOULD)

MUI 커스텀 테마 설정 규칙. 구현 상세는 `src/styles/themes/default.js` 참조.

## 테마 파일 관리

- 커스텀 테마는 `src/styles/themes/default.js`에서 관리

## 브랜드 컨셉

**"The Blueprint of Ideas"** — 성인 남성을 위한 문구 브랜드
- Blueprint Precision + Analog Warmth + Pixel Heritage + Masculine Restraint

## Typography (3-tier)

- **Brand Display**: Google Font의 Silkscreen (pixel/bitmap) — 브랜드 마크, 특수 디스플레이
- **Heading (h1~h6)**: Google Font의 Playfair Display (serif) — 레트로 에디토리얼
- **Body/UI**: Pretendard Variable (sans-serif) — 한국어 가독성

### 커스텀 폰트 접근

```jsx
// 세리프 헤딩: Typography variant h1~h6 자동 적용
<Typography variant="h1">Heading</Typography>

// 픽셀 디스플레이: sx에서 theme.typography.displayFontFamily 참조
<Typography sx={{ fontFamily: (theme) => theme.typography.displayFontFamily }}>
  BRAND
</Typography>
```

## Color

- **Primary (Blueprint Blue)**: `#003DA5`
- **Secondary (Warm Leather)**: `#5C4A3A`
- **Background (Aged Paper)**: `#F5F0E6` (default), `#FAF7F0` (paper)
- **Text (Navy Ink)**: `#1A1A2E` (primary), `#5C5C6E` (secondary)
- **Accent (Brass)**: `#B8956A` (커스텀 토큰 `palette.accent`)

## Elevation

- x, y offset: 0
- opacity: 낮춤, blur: 높임 (dimmed shadow)

## Border Radius

- 기본 borderRadius: **0** (인라인 직접 지정 시 예외)
