/**
 * DRAFT. 브랜드 일러스트 중앙 관리
 *
 * 모든 SVG 일러스트 export + 카테고리별 매핑 객체.
 * Section/Card 컴포넌트에서 개별 import 대신 이 파일을 사용한다.
 *
 * 카테고리:
 * - Product (9): 제품 일러스트 — ProductCard, ProductLineBlock
 * - Core Value (4): 핵심 가치 — CoreValueCard
 * - USP (4): Unique Selling Point — UspCard
 * - Brand (1): 브랜드 히어로 — BrandStorySection
 */

// ── Product Illustrations (9) ──────────────────────────────────
import GridNotebookA5 from './grid-notebook-a5.svg?react';
import GridMemoPad from './grid-memo-pad.svg?react';
import DeskMat from './desk-mat.svg?react';
import RollerballPen from './rollerball-pen.svg?react';
import FountainPen from './fountain-pen.svg?react';
import InkCartridgeSet from './ink-cartridge-set.svg?react';
import LeatherBinderA5 from './leather-binder-a5.svg?react';
import DocumentFolder from './document-folder.svg?react';
import CardWallet from './card-wallet.svg?react';

// ── Core Value Illustrations (4) ───────────────────────────────
import ValuePrecision from './value-precision.svg?react';
import ValueOrigin from './value-origin.svg?react';
import ValueRestraint from './value-restraint.svg?react';
import ValueCraft from './value-craft.svg?react';

// ── USP Illustrations (4) ──────────────────────────────────────
import UspGridSystem from './usp-grid-system.svg?react';
import UspAnalogForDigital from './usp-analog-for-digital.svg?react';
import UspQuietLuxury from './usp-quiet-luxury.svg?react';
import UspBlueprintAesthetic from './usp-blueprint-aesthetic.svg?react';

// ── Brand Illustration (1) ─────────────────────────────────────
import BrandHero from './brand-hero.svg?react';

// ── Named Exports ──────────────────────────────────────────────
export {
  GridNotebookA5,
  GridMemoPad,
  DeskMat,
  RollerballPen,
  FountainPen,
  InkCartridgeSet,
  LeatherBinderA5,
  DocumentFolder,
  CardWallet,
  ValuePrecision,
  ValueOrigin,
  ValueRestraint,
  ValueCraft,
  UspGridSystem,
  UspAnalogForDigital,
  UspQuietLuxury,
  UspBlueprintAesthetic,
  BrandHero,
};

// ── Mapping Objects ────────────────────────────────────────────

/** 제품명 → 일러스트 SVG 매핑 */
export const productIllustrationMap = {
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

/** Core Value key → 일러스트 SVG 매핑 */
export const coreValueIllustrationMap = {
  'precision': ValuePrecision,
  'origin': ValueOrigin,
  'restraint': ValueRestraint,
  'craft': ValueCraft,
};

/** USP key → 일러스트 SVG 매핑 */
export const uspIllustrationMap = {
  'grid-system': UspGridSystem,
  'analog-for-digital': UspAnalogForDigital,
  'masculine-restraint': UspQuietLuxury,
  'blueprint-aesthetic': UspBlueprintAesthetic,
};
