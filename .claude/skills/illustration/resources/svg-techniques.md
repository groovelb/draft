# SVG 기법 (SVG Techniques)

## 파일 구조 템플릿

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 [W] [H]" fill="none">

  <!-- ============================================================
       [제목]
       [설명]
       Color: #003DA5 (Blueprint Blue), stroke only
       ============================================================ -->

  <defs>
    <!-- clipPaths, patterns, masks -->
  </defs>

  <!-- Layer 1: [PRIMARY OBJECT] -->
  <g>...</g>

  <!-- Layer 2: [SECONDARY ELEMENTS] -->
  <g>...</g>

  <!-- Layer N: [GHOST ELEMENTS] -->
  <g opacity="0.15-0.35">...</g>

  <!-- Alignment guide lines -->
  <g stroke="#003DA5" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.2">
    ...
  </g>

  <!-- Annotations -->
  <g>...</g>

  <!-- Dimension lines -->
  <g>...</g>

  <!-- Title -->
  <text x="[cx]" y="[bottom]"
    font-family="'VT323', monospace" font-size="8" fill="#003DA5"
    text-anchor="middle" letter-spacing="0.1em">
    [TITLE]
  </text>

</svg>
```

## `<defs>` + `<pattern>` — 재사용 패턴

### 대각선 해칭

```svg
<defs>
  <pattern id="hatch-diagonal" width="6" height="6"
    patternUnits="userSpaceOnUse"
    patternTransform="rotate(-45)">
    <line x1="0" y1="0" x2="0" y2="6"
      stroke="#003DA5" stroke-width="0.3" opacity="0.15" />
  </pattern>
</defs>

<!-- 적용 -->
<polygon points="..." fill="url(#hatch-diagonal)" stroke="#003DA5" />
```

### 크로스 해칭 (단면도용)

```svg
<defs>
  <pattern id="hatch-cross" width="6" height="6"
    patternUnits="userSpaceOnUse">
    <line x1="0" y1="6" x2="6" y2="0"
      stroke="#003DA5" stroke-width="0.3" opacity="0.15" />
    <line x1="0" y1="0" x2="6" y2="6"
      stroke="#003DA5" stroke-width="0.2" opacity="0.1" />
  </pattern>
</defs>
```

### 5mm 그리드 (등각투영 면 위)

기존 `grid-notebook-a5.svg` 방식: clipPath 안에서 개별 라인으로 구성

```svg
<defs>
  <clipPath id="surface-clip">
    <polygon points="[등각투영 면 꼭짓점]" />
  </clipPath>
</defs>

<g clip-path="url(#surface-clip)"
   stroke="#003DA5" stroke-width="0.3" opacity="0.15">
  <!-- 축 A 방향 라인들 -->
  <line x1="..." y1="..." x2="..." y2="..." />
  <!-- 축 B 방향 라인들 -->
  <line x1="..." y1="..." x2="..." y2="..." />
</g>
```

## `<clipPath>` — 영역 제한

- 등각투영 면에 그리드/패턴을 제한할 때 사용
- polygon 또는 circle로 클리핑 영역 정의
- `clip-path="url(#id)"` 로 적용

```svg
<defs>
  <clipPath id="face-clip">
    <polygon points="200,140 300,80 400,140 300,200" />
  </clipPath>
</defs>
<g clip-path="url(#face-clip)">
  <!-- 이 안의 모든 요소가 polygon 영역으로 잘림 -->
</g>
```

## 디테일 콜아웃 (Magnification Inset)

오브젝트의 특정 부분을 확대하여 보여주는 기법. 개념 일러스트에서 구체와 추상을 연결하는 핵심 장치.

```svg
<!-- 1. 소스 영역 표시 (대시 원) -->
<circle cx="[x]" cy="[y]" r="[r]"
  stroke="#003DA5" stroke-width="0.6" stroke-dasharray="4 2"
  fill="none" opacity="0.4" />

<!-- 2. 리더 라인 (소스 → 인셋) -->
<line x1="[원 가장자리]" y1="[y]" x2="[인셋x]" y2="[인셋y]"
  stroke="#003DA5" stroke-width="0.5" stroke-dasharray="2 2" opacity="0.3" />

<!-- 3. 확대 인셋 (더 큰 원 또는 사각형) -->
<defs>
  <clipPath id="inset-clip">
    <circle cx="[인셋cx]" cy="[인셋cy]" r="[인셋r]" />
  </clipPath>
</defs>

<circle cx="[인셋cx]" cy="[인셋cy]" r="[인셋r]"
  stroke="#003DA5" stroke-width="0.8"
  fill="rgba(0,61,165,0.01)" />

<!-- 4. 확대된 내용 (clipPath 안에서 스케일업) -->
<g clip-path="url(#inset-clip)">
  <!-- 확대 배율의 디테일 요소들 -->
</g>

<!-- 5. 배율 라벨 -->
<text x="[인셋cx]" y="[인셋cy + r + 10]"
  font-family="'VT323', monospace" font-size="5" fill="#003DA5"
  text-anchor="middle" opacity="0.4">
  DETAIL (4:1)
</text>
```

## Ghost 엘리먼트

맥락 제공용 반투명 오브젝트. 주 오브젝트와 경쟁하지 않으면서 환경을 설명.

```svg
<g opacity="0.2">
  <!-- 보조 오브젝트 (예: 펜 실루엣, 잉크병 윤곽) -->
  <line ... stroke="#003DA5" stroke-width="0.8" />
</g>
```

- opacity 범위: 0.15 ~ 0.35
- 참조: `desk-mat.svg` (매트 위 펜/노트북 ghost)
- 참조: `brand-hero.svg` (메모패드, 자 ghost)

## 금지 패턴

- 인라인 `style` 속성 사용 금지 (SVG 속성 직접 사용)
- `#003DA5` / `rgba(0,61,165,X)` 외 색상 금지
- 래스터 이미지 `<image>` 삽입 금지
- CSS 애니메이션 금지
- `<use>` 남용 금지 (가독성 우선)
