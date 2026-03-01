import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * BlueprintReveal 컴포넌트
 *
 * SVG 일러스트의 `<g>` 레이어를 뷰포트 진입 시
 * 분해도(exploded view) → 완성품 조립 트랜지션으로 표시한다.
 *
 * 동작 흐름:
 * 1. 마운트 시 SVG 내부의 최상위 `<g>` 레이어를 탐색한다
 * 2. 각 레이어의 getBBox()로 실제 위치를 읽고, SVG 중심까지 거리를 계산한다
 * 3. 초기 상태: 모든 레이어가 분해도 위치(SVG 원본)에서 opacity 0
 * 4. 뷰포트에 진입하면 IntersectionObserver가 감지한다
 * 5. 트리거 시 각 레이어가 SVG 중심을 향해 수렴하며 조립된다
 *    — 중심 위에 있는 부품은 아래로, 아래에 있는 부품은 위로 이동
 *    — 결과적으로 분해도의 갭이 닫히며 완성품 형태가 된다
 *
 * Props:
 * @param {React.ReactNode} children - inline SVG 컴포넌트 [Required]
 * @param {number} stagger - 레이어 간 딜레이 (ms) [Optional, 기본값: 120]
 * @param {number} duration - 각 레이어 트랜지션 시간 (ms) [Optional, 기본값: 600]
 * @param {number} converge - 부품 수렴 비율 (0~1, 1이면 중심에 완전 수렴) [Optional, 기본값: 0.35]
 * @param {number} threshold - IntersectionObserver 감지 비율 (0~1) [Optional, 기본값: 0.15]
 * @param {string} easing - CSS 이징 함수 [Optional, 기본값: 'cubic-bezier(0.22, 1, 0.36, 1)']
 * @param {object} sx - MUI sx 추가 스타일 [Optional]
 *
 * Example usage:
 * <BlueprintReveal stagger={ 150 } duration={ 700 } converge={ 0.4 }>
 *   <FountainPenSvg style={{ width: '100%', height: 'auto' }} />
 * </BlueprintReveal>
 */
function BlueprintReveal({
  children,
  stagger = 120,
  duration = 600,
  converge = 0.35,
  threshold = 0.15,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  sx = {},
}) {
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  /** IntersectionObserver 기반 뷰포트 진입 감지 */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  /**
   * SVG 내부 <g> 레이어의 실제 위치(getBBox)를 기반으로
   * 조립 오프셋(--assemble-y)과 stagger delay를 계산한다.
   *
   * 각 레이어의 중심 Y가 SVG 중심에서 먼 만큼 converge 비율로 이동:
   * — 중심 위의 부품 → 아래로 (캡이 배럴 쪽으로)
   * — 중심 아래의 부품 → 위로 (닙이 그립 쪽으로)
   * — 중심 근처의 주석/가이드선 → 거의 안 움직임
   */
  useEffect(() => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    const viewBox = svg.getAttribute('viewBox')?.split(/\s+/) || [];
    const svgHeight = Number(viewBox[3]) || svg.getBBox().height;
    const svgCenterY = svgHeight / 2;

    const layers = Array.from(svg.children).filter(
      (el) => el.tagName.toLowerCase() === 'g',
    );

    layers.forEach((layer, i) => {
      const box = layer.getBBox();
      const layerCenterY = box.y + box.height / 2;
      const distFromCenter = layerCenterY - svgCenterY;
      const assembleY = -distFromCenter * converge;

      layer.style.setProperty('--stagger-delay', `${i * stagger}ms`);
      layer.style.setProperty('--assemble-y', `${assembleY}px`);
    });
  }, [stagger, converge]);

  return (
    <Box
      ref={ containerRef }
      className={ isRevealed ? 'is-revealed' : '' }
      sx={ {
        '& svg > g': {
          opacity: 0,
          transition: `opacity ${duration}ms ${easing} var(--stagger-delay, 0ms), transform ${duration}ms ${easing} var(--stagger-delay, 0ms)`,
        },
        '&.is-revealed svg > g': {
          opacity: 1,
          transform: 'translateY(var(--assemble-y, 0px))',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '& svg > g': {
            transition: 'none',
            opacity: 1,
            transform: 'translateY(var(--assemble-y, 0px))',
          },
        },
        ...sx,
      } }
    >
      { children }
    </Box>
  );
}

export default BlueprintReveal;
