import {CodingPrinciple, DesignPattern} from '../../../state';
import AsArticleItem from './item/AsArticle';

export type AsArticleProps = {
  patternsOrPrinciples: DesignPattern[] | CodingPrinciple[];
  type: string;
  language: string;
};

export default function AsArticle({language, patternsOrPrinciples, type}: AsArticleProps) {
  return (
    <div>
      {patternsOrPrinciples.map((patternOrPrinciple) => (
        <AsArticleItem
          key={patternOrPrinciple.title}
          language={language}
          patternOrPrinciple={patternOrPrinciple}
          type={type}
        />
      ))}
    </div>
  );
}
