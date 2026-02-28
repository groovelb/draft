# Project Rules

## 규칙 원본

### MUST
@.claude/rules/code-convention.md
@.claude/rules/design-system.md

### SHOULD
@.claude/rules/project-summary.md
@.claude/rules/mui-grid-usage.md
@.claude/rules/easy-refactoring.md
@.claude/rules/mui-theme.md

## Workflow

- 디자인 관련 작업 → `/frontend-design` Skill 사용
- 컴포넌트 작업 → `component-work` Skill이 워크플로우 담당
- 리팩토링 → easy-refactoring.md 참조, 기존 스토리 통과 확인
- 룰 수정 먼저 제안 → `src/data/ruleRelationships.js` 동기화 필수

## 제약

- `run_in_background: true` 사용 금지
- 병렬 실행은 하나의 메시지에서 여러 Task 동시 호출
- 빌드 검증은 사용자 요청 시만
- 규칙 충돌 시 사용자에게 알리고 승인 대기
