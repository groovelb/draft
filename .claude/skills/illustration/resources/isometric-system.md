# 등각투영 시스템 (Isometric Projection System)

## 기본 수학

- **등각투영 각도**: 30° (수평 기준)
- **수직 축소율**: cos(30°) = 0.866
- **3축 균등 단축**: X, Y, Z 축이 120° 간격으로 동일하게 단축

## 페이스 변환 매트릭스

SVG `transform` 속성에서 사용하는 3면 매트릭스:

| 면 | SVG matrix | 설명 |
|---|-----------|------|
| Top | `matrix(0.866, 0.5, -0.866, 0.5, tx, ty)` | 윗면 (평면도) |
| Left | `matrix(0.866, -0.5, 0, 1, tx, ty)` | 왼쪽면 |
| Right | `matrix(0.866, 0.5, 0, 1, tx, ty)` | 오른쪽면 |

## 실용적 Polygon 방식 (권장)

매트릭스 대신 직접 꼭짓점 좌표를 계산하는 방식. 기존 골드 스탠다드 SVG에서 사용:

```svg
<!-- 등각투영 박스: 전면 꼭짓점이 아래 중앙 -->
<!-- Top face -->
<polygon points="[front],[top-right],[back],[top-left]"
  stroke="#003DA5" stroke-width="0.8"
  fill="rgba(0,61,165,0.02)" />
<!-- Right side face -->
<polygon points="[front],[top-right],[top-right+h],[front+h]"
  stroke="#003DA5" stroke-width="0.8"
  fill="rgba(0,61,165,0.05)" />
<!-- Left side face -->
<polygon points="[front],[top-left],[top-left+h],[front+h]"
  stroke="#003DA5" stroke-width="0.8"
  fill="rgba(0,61,165,0.04)" />
```

### 좌표 계산 규칙

전면 꼭짓점 `(cx, cy)` 기준:
- **오른쪽 위**: `(cx + w*cos30, cy - w*sin30)` = `(cx + w*0.866, cy - w*0.5)`
- **왼쪽 위**: `(cx - d*cos30, cy - d*sin30)` = `(cx - d*0.866, cy - d*0.5)`
- **뒤쪽**: `(cx + w*0.866 - d*0.866, cy - w*0.5 - d*0.5)`
- **높이 오프셋**: y 방향으로 `-h` (위로)

## 면 Fill Opacity 규약

| 면 | fill opacity | 시각적 역할 |
|---|-------------|------------|
| Top | 0.02 | 가장 밝은 면 (빛 직접 받음) |
| Left | 0.04 | 중간 밝기 (측면광) |
| Right | 0.05 | 가장 어두운 면 (그림자) |

## viewBox 규격

| 유형 | viewBox | 비율 | 용도 |
|------|---------|------|------|
| 제품 일러스트 | `"0 0 400 500"` | 4:5 세로 | exploded view, 치수선 공간 |
| 개념/가치 일러스트 | `"0 0 400 400"` | 1:1 정사각 | 아이콘형, 심볼형 |
| 씬 일러스트 | `"0 0 600 400"` | 3:2 가로 | 데스크 구성도 |

## 그리드 패턴 (재사용 가능)

```svg
<defs>
  <clipPath id="[name]-clip">
    <polygon points="[등각투영 면 꼭짓점]" />
  </clipPath>
</defs>

<!-- 그리드 라인 (clipPath로 면에 제한) -->
<g clip-path="url(#[name]-clip)"
   stroke="#003DA5" stroke-width="0.3" opacity="0.15">
  <!-- 한 방향 등간격 라인 (면의 한 축을 따라) -->
  <line x1="..." y1="..." x2="..." y2="..." />
  <!-- 다른 방향 등간격 라인 (면의 다른 축을 따라) -->
  <line x1="..." y1="..." x2="..." y2="..." />
</g>
```

## 골드 스탠다드 참조 파일

- `src/assets/illustrations/grid-notebook-a5.svg` — 등각투영 면 + clipPath 그리드 패턴
- `src/assets/illustrations/desk-mat.svg` — 대형 평면 등각투영 + ghost 오브젝트
- `src/assets/illustrations/brand-hero.svg` — 다중 오브젝트 등각 씬 구성
