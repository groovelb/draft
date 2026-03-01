# Blueprint Illustration Skill

> Blueprint 스타일 SVG 일러스트레이션 생성, 수정, 검토 시 활성화되는 워크플로우

## 활성화 조건

| 의도 | 트리거 예시 |
|------|-----------|
| 생성 | "일러스트 만들어줘", "SVG 그려줘", "일러스트 추가" |
| 수정 | "일러스트 수정", "SVG 고쳐줘", "일러스트 개선" |
| 검토 | "일러스트 리뷰", "SVG 품질 확인", "일러스트 검토" |

---

## 워크플로우

### 의도 분기

```
├── 생성 → 생성 워크플로우
├── 수정 → 수정 워크플로우
└── 검토 → 품질 검토 워크플로우
```

### 생성 워크플로우

1. **주제 분석**: 무엇을 그리는지 파악
   - 제품: 실물 오브젝트의 기술 도면 (exploded view)
   - 개념: 추상적 가치를 시각적 메타포로 변환
   - 씬: 여러 오브젝트가 배치된 구성도
2. **구성 결정**: `resources/concept-visualization.md` Read
   - 뷰 타입 선택: exploded / section / close-up / scene
   - 개념 일러스트의 경우 메타포 매핑 수행
3. **등각투영 설정**: `resources/isometric-system.md` Read
   - viewBox 규격, 그리드 시스템, 페이스 매트릭스 참조
4. **구축**: `resources/blueprint-conventions.md` Read
   - Layer 1 (Primary) → Layer 2 (Secondary) → Layer 3 (Tertiary) 순서
   - 각 레이어에 적합한 선 굵기 계층 적용
5. **어노테이션**: `resources/blueprint-conventions.md` 재참조
   - 리더 라인 + 도트 + 2단 라벨 시스템
   - 치수선 + 눈금 + 회전 라벨
6. **SVG 기법**: `resources/svg-techniques.md` Read
   - defs, pattern, clipPath 적용 (반복 패턴 있을 시)
7. **품질 검증**: 아래 체크리스트로 최종 확인

### 수정 워크플로우

1. 대상 SVG 파일 Read
2. 현재 품질 수준 분석 (라인 수, 레이어 구조, 어노테이션 유무)
3. `resources/blueprint-conventions.md` Read → 부족한 요소 파악
4. 수정 구현 (기존 구조 보존)

### 품질 검토 워크플로우

1. 대상 SVG 파일 Read
2. 아래 체크리스트 항목별 평가
3. 개선 제안 리포트 출력

---

## Resources

| 파일 | 용도 | 언제 Read |
|------|------|----------|
| `isometric-system.md` | 등각투영 수학, 페이스 매트릭스, 그리드 | 3단계 (항상) |
| `blueprint-conventions.md` | 선 굵기, 대시 패턴, 어노테이션 규격 | 4, 5단계 (항상) |
| `svg-techniques.md` | defs, patterns, clips, masks, 디테일 콜아웃 | 6단계 (반복 패턴 필요 시) |
| `concept-visualization.md` | 추상 개념 시각화 방법론, 메타포 매핑 | 2단계 (개념 일러스트 시) |

---

## 품질 체크리스트

- [ ] #003DA5 단일 색상 (rgba(0,61,165,X) 변형 허용)
- [ ] 등각투영 적용 (flat 2D 금지)
- [ ] 3단계 이상 선 굵기 계층
- [ ] 3개 이상 어노테이션 (리더라인 + 도트 + 2단 라벨)
- [ ] 1개 이상 치수선
- [ ] 150줄 이상의 SVG 코드
- [ ] `<defs>` 사용 (반복 패턴 시)
- [ ] Doto monospace 폰트 사용
- [ ] 타이틀 텍스트 포함
- [ ] 파일 상단 헤더 주석 포함 (설명, 색상, 투영 방식)

---

## 핵심 원칙

- **#003DA5 단일 색상**: 임의의 색상 절대 금지. rgba(0,61,165,X) 변형만 허용
- **등각투영 필수**: 모든 일러스트는 30도 등각투영 기반 구성
- **어노테이션 시스템 준수**: 기존 제품 일러스트와 동일한 리더 라인 + 도트 + 2단 라벨
- **최소 품질 기준**: 150줄 이상, 3개 이상 어노테이션, 1개 이상 치수선
- **골드 스탠다드 참조**: `grid-notebook-a5.svg`, `desk-mat.svg`, `fountain-pen.svg`
