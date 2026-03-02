import Box from '@mui/material/Box';

/**
 * BlueprintGrid 컴포넌트
 *
 * 5mm 모눈종이 스타일의 반복 그리드 패턴을 배경으로 표시한다.
 * 일러스트 뒤에 배치하여 "도면 위의 스케치" 느낌을 준다.
 *
 * 동작 흐름:
 * 1. SVG 모눈 패턴이 CSS background-image로 반복 렌더링된다
 * 2. 자식 콘텐츠(일러스트 등)가 그리드 위에 표시된다
 *
 * Props:
 * @param {React.ReactNode} children - 그리드 위에 표시할 콘텐츠 [Required]
 * @param {number} size - 그리드 셀 크기 (px) [Optional, 기본값: 20]
 * @param {string} color - 그리드 선 색상 [Optional, 기본값: '#003DA5']
 * @param {number} opacity - 그리드 선 투명도 (0~1) [Optional, 기본값: 0.12]
 * @param {number} strokeWidth - 선 두께 [Optional, 기본값: 0.5]
 * @param {object} sx - 추가 MUI sx 스타일 [Optional]
 *
 * Example usage:
 * <BlueprintGrid>
 *   <Illustration style={{ width: '100%' }} />
 * </BlueprintGrid>
 * <BlueprintGrid color="#ffffff" opacity={0.08}>
 *   <Illustration />
 * </BlueprintGrid>
 */
function BlueprintGrid({
  children,
  size = 20,
  color = '#003DA5',
  opacity = 0.12,
  strokeWidth = 0.5,
  sx = {},
}) {
  const gridSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" opacity="${opacity}"/></svg>`;
  const encodedSvg = encodeURIComponent(gridSvg);

  return (
    <Box
      sx={ {
        backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
        backgroundSize: `${size}px ${size}px`,
        ...sx,
      } }
    >
      { children }
    </Box>
  );
}

export default BlueprintGrid;
