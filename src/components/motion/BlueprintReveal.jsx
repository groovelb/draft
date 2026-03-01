import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/**
 * BlueprintReveal 컴포넌트
 *
 * SVG 일러스트의 `<g>` 레이어를 뷰포트 진입 시
 * 순차 조립 트랜지션으로 표시한다.
 *
 * 동작 흐름:
 * 1. 마운트 시 SVG 내부의 최상위 `<g>` 레이어를 탐색한다
 * 2. 각 레이어에 stagger 기반 딜레이를 CSS 변수로 설정한다
 * 3. 초기 상태: 모든 레이어가 opacity 0 + translateY 상태
 * 4. 뷰포트에 진입하면 IntersectionObserver가 감지한다
 * 5. 트리거 시 각 레이어가 순차적으로 페이드+슬라이드 인된다
 *
 * Props:
 * @param {React.ReactNode} children - inline SVG 컴포넌트 [Required]
 * @param {number} stagger - 레이어 간 딜레이 (ms) [Optional, 기본값: 120]
 * @param {number} duration - 각 레이어 트랜지션 시간 (ms) [Optional, 기본값: 600]
 * @param {number} distance - 슬라이드 거리 (px) [Optional, 기본값: 20]
 * @param {number} threshold - IntersectionObserver 감지 비율 (0~1) [Optional, 기본값: 0.15]
 * @param {string} easing - CSS 이징 함수 [Optional, 기본값: 'cubic-bezier(0.4, 0, 0.2, 1)']
 * @param {object} sx - MUI sx 추가 스타일 [Optional]
 *
 * Example usage:
 * <BlueprintReveal stagger={ 150 } duration={ 700 }>
 *   <FountainPenSvg style={{ width: '100%', height: 'auto' }} />
 * </BlueprintReveal>
 */
function BlueprintReveal({
  children,
  stagger = 120,
  duration = 600,
  distance = 20,
  threshold = 0.15,
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
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

  /** SVG 내부 <g> 레이어에 stagger delay CSS 변수 설정 */
  useEffect(() => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    const layers = Array.from(svg.children).filter(
      (el) => el.tagName.toLowerCase() === 'g',
    );

    layers.forEach((layer, i) => {
      layer.style.setProperty('--stagger-delay', `${i * stagger}ms`);
    });
  }, [stagger]);

  return (
    <Box
      ref={ containerRef }
      className={ isRevealed ? 'is-revealed' : '' }
      sx={ {
        '& svg > g': {
          opacity: 0,
          transform: `translateY(${distance}px)`,
          transition: `opacity ${duration}ms ${easing} var(--stagger-delay, 0ms), transform ${duration}ms ${easing} var(--stagger-delay, 0ms)`,
        },
        '&.is-revealed svg > g': {
          opacity: 1,
          transform: 'none',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '& svg > g': {
            transition: 'none',
            opacity: 1,
            transform: 'none',
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
