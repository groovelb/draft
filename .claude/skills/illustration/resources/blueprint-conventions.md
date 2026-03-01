# Blueprint 규약 (Blueprint Conventions)

## 4단계 선 굵기 계층

| Tier | 용도 | stroke-width | opacity | 예시 |
|------|------|-------------|---------|------|
| Primary | 외곽선, 가시 모서리 | 1 - 1.2 | 1.0 | 오브젝트 경계, 구조 윤곽 |
| Secondary | 내부 디테일, 링, 밴드 | 0.5 - 0.8 | 0.8 - 1.0 | 캡 링, 그립 질감 윤곽, 닙 슬릿 |
| Tertiary | 미세 디테일, 해칭, 질감 | 0.3 - 0.4 | 0.1 - 0.25 | 그리드 라인, 페이지 모서리, 소재 해칭 |
| Annotation | 리더라인, 치수선 | 0.5 | 0.3 - 0.5 | 주석, 치수, 가이드 |

## 대시 패턴 (stroke-dasharray)

| 유형 | stroke-dasharray | 용도 |
|------|-----------------|------|
| Solid | (없음) | 가시 모서리, 구조선 |
| Leader line | `"2 2"` | 어노테이션 리더 라인 |
| Alignment guide | `"3 3"` | exploded view 정렬선 |
| Hidden line | `"8 4"` | 가려진 모서리 |
| Center line | `"20 5 5 5"` | 대칭축, 중심선 |
| Detail callout | `"4 2"` | 디테일 콜아웃 원 테두리 |

## 어노테이션 시스템

### 표준 어노테이션 (리더 라인 + 도트 + 2단 라벨)

```svg
<!-- 리더 라인 (점선) -->
<line x1="[소스x]" y1="[y]" x2="[라벨x]" y2="[y]"
  stroke="#003DA5" stroke-width="0.5" stroke-dasharray="2 2" />
<!-- 소스 도트 -->
<circle cx="[소스x]" cy="[y]" r="1.5" fill="#003DA5" />
<!-- 1차 라벨 (이름) -->
<text x="[라벨x+4]" y="[y-2]"
  font-family="'VT323', monospace" font-size="7" fill="#003DA5">
  PRIMARY LABEL
</text>
<!-- 2차 라벨 (상세) -->
<text x="[라벨x+4]" y="[y+8]"
  font-family="'VT323', monospace" font-size="6" fill="#003DA5" opacity="0.5">
  SECONDARY DETAIL
</text>
```

### 규칙
- 리더 라인은 수평 또는 대각선 (수직 금지)
- 소스 도트는 항상 오브젝트 위에 위치
- 라벨은 좌측 또는 우측에 균형 있게 배치
- 1차 라벨: font-size 7, opacity 1.0
- 2차 라벨: font-size 6, opacity 0.5

## 치수선 시스템

```svg
<g stroke="#003DA5" stroke-width="0.5" opacity="0.4">
  <!-- 치수선 (점선) -->
  <line x1="[시작x]" y1="[시작y]" x2="[끝x]" y2="[끝y]"
    stroke-dasharray="2 2" />
  <!-- 시작 눈금 (수직 짧은 선) -->
  <line x1="[sx-2]" y1="[sy-2]" x2="[sx+2]" y2="[sy+2]" />
  <!-- 끝 눈금 -->
  <line x1="[ex-2]" y1="[ey-2]" x2="[ex+2]" y2="[ey+2]" />
</g>
<!-- 치수 텍스트 -->
<text x="[중간]" y="[중간y-4]"
  font-family="'VT323', monospace" font-size="6" fill="#003DA5" opacity="0.5"
  text-anchor="middle">
  [측정값]MM
</text>
```

### 등각투영 치수선
- 등각투영 면의 축을 따라 배치
- 텍스트는 `transform="rotate([각도])"` 로 면 축 방향에 맞춤
- 참조: `grid-notebook-a5.svg` 치수선 (210MM, 148MM)

## 정렬 가이드 (Exploded View)

```svg
<!-- 레이어 간 정렬 가이드 -->
<g stroke="#003DA5" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.2">
  <line x1="[위 레이어 좌]" y1="[위 y]" x2="[아래 레이어 좌]" y2="[아래 y]" />
  <line x1="[위 레이어 우]" y1="[위 y]" x2="[아래 레이어 우]" y2="[아래 y]" />
</g>
```

## 색상 규칙

- **유일한 색상**: `#003DA5` (Blueprint Blue)
- **Fill 변형**: `rgba(0,61,165,X)` — X는 0.01~0.1 범위
- **어떤 경우에도 다른 색상 사용 금지**

## 타이포그래피 규칙

| 용도 | font-family | font-size | opacity |
|------|------------|-----------|---------|
| 타이틀 | `'VT323', monospace` | 8 | 1.0 |
| 1차 라벨 | `'VT323', monospace` | 7 | 1.0 |
| 2차 라벨 | `'VT323', monospace` | 6 | 0.5 |
| 미세 주석 | `'VT323', monospace` | 5 | 0.4 |
| 치수 텍스트 | `'VT323', monospace` | 6 | 0.5 |

- 타이틀: `text-anchor="middle"`, `letter-spacing="0.1em"`
- 모든 텍스트: `fill="#003DA5"`
