import { Box } from '@mui/material';
import LineGrid from '../../layout/LineGrid';
import { Title } from '../../typography/Title';
import { ProductLineBlock } from './ProductLineBlock';

import GridNotebookA5 from '../../../assets/illustrations/grid-notebook-a5.svg?react';
import GridMemoPad from '../../../assets/illustrations/grid-memo-pad.svg?react';
import DeskMat from '../../../assets/illustrations/desk-mat.svg?react';
import RollerballPen from '../../../assets/illustrations/rollerball-pen.svg?react';
import FountainPen from '../../../assets/illustrations/fountain-pen.svg?react';
import InkCartridgeSet from '../../../assets/illustrations/ink-cartridge-set.svg?react';
import LeatherBinderA5 from '../../../assets/illustrations/leather-binder-a5.svg?react';
import DocumentFolder from '../../../assets/illustrations/document-folder.svg?react';
import CardWallet from '../../../assets/illustrations/card-wallet.svg?react';

/** 제품명 → 일러스트 SVG 매핑 */
const illustrationMap = {
  'Grid Notebook A5': GridNotebookA5,
  'Grid Memo Pad': GridMemoPad,
  'Desk Mat': DeskMat,
  'Rollerball Pen': RollerballPen,
  'Fountain Pen': FountainPen,
  'Ink Cartridge Set': InkCartridgeSet,
  'Leather Binder A5': LeatherBinderA5,
  'Document Folder': DocumentFolder,
  'Card Wallet': CardWallet,
};

/**
 * ProductLinesSection 컴포넌트
 *
 * DraftLanding의 Product Lines 섹션.
 * 3개 라인(GRID, INK, FOLIO)을 full-bleed 격자로 표시한다.
 * 타이틀 ↔ 각 라인 사이 full-bleed 수평선 구분.
 *
 * Props:
 * @param {Array} products - 제품 라인 데이터 배열 [Required]
 * @param {number} gridGap - LineGrid gap (px) [Required]
 *
 * Example usage:
 * <ProductLinesSection products={ data.products } gridGap={ 0 } />
 */
export function ProductLinesSection({ products, gridGap }) {
  return (
    <LineGrid
      gap={ gridGap }
      borderColor="common.white"
      sx={ {
        color: 'common.white',
        '& svg': { filter: 'brightness(0) invert(1)' },
      } }
    >
      <Box sx={ { p: { xs: 4, sm: 5, md: 8, lg: 10 } } }>
        <Title
          title="Three Lines of Tools"
          level="h1"
        />
      </Box>

      { products.map((line) => (
        <ProductLineBlock
          key={ line.line }
          lineName={ line.line }
          concept={ line.concept }
          items={ line.items }
          illustrationMap={ illustrationMap }
          gridGap={ gridGap }
        />
      )) }
    </LineGrid>
  );
}
