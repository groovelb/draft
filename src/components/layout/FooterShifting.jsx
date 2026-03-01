import { useRef } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * FooterShifting 컴포넌트
 *
 * Footer Reveal 레이아웃 패턴.
 * 콘텐츠 아래에 footer가 불투명 오버레이로 가려져 있다가,
 * 스크롤이 footer 영역에 도달하면 오버레이가 페이드아웃되며
 * footer 콘텐츠가 아래에서 슬라이드업으로 드러난다.
 *
 * 동작 흐름:
 * 1. 콘텐츠가 정상적으로 스크롤된다
 * 2. footer 영역이 뷰포트에 진입하면 불투명 오버레이가 사라진다
 *    (opacity: 1 → 0, scroll progress 기반)
 * 3. footer 콘텐츠가 아래에서 위로 슬라이드된다
 *    (translateY: -50% → 0%, scroll progress 기반)
 *
 * Props:
 * @param {ReactNode} children - 메인 콘텐츠 [Required]
 * @param {ReactNode} footer - footer 콘텐츠 [Required]
 * @param {string} overlayColor - 오버레이 색상 (콘텐츠 마지막 배경과 맞출 것) [Optional, 기본값: '#000']
 * @param {string} heightMode - 높이 모드 ('vh' | 'svh' | 'dvh') [Optional, 기본값: 'svh']
 * @param {object} sx - 최상위 컨테이너 추가 스타일 [Optional]
 *
 * Example usage:
 * <FooterShifting footer={ <CtaSection /> } overlayColor="#003DA5">
 *   <MainContent />
 * </FooterShifting>
 */
function FooterShifting({
  children,
  footer,
  overlayColor = '#000',
  heightMode = 'svh',
  sx = {},
}) {
  const footerRef = useRef(null);

  /** footer 영역이 뷰포트 하단에서 진입 → 완전 노출될 때 0→1 */
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  /** 오버레이 페이드아웃: 1 → 0 */
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  /** footer 콘텐츠 슬라이드업: -50% → 0% */
  const footerY = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  return (
    <Box sx={ { ...sx } }>
      { children }

      {/* Footer 영역 — 스크롤 트리거 + 콘텐츠 + 오버레이 */}
      <Box
        ref={ footerRef }
        sx={ {
          position: 'relative',
          height: `100${heightMode}`,
          overflow: 'hidden',
          zIndex: 2,
        } }
      >
        {/* Footer 콘텐츠 — 슬라이드업 */}
        <motion.div style={ { y: footerY, height: '100%', width: '100%' } }>
          { footer }
        </motion.div>

        {/* 오버레이 — 페이드아웃으로 footer 드러냄 */}
        <motion.div
          style={ {
            position: 'absolute',
            inset: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            pointerEvents: 'none',
          } }
        />
      </Box>
    </Box>
  );
}

export default FooterShifting;
