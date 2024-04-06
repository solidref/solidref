import {CodingPrinciple, DesignPattern} from '../../../state';

export type AsArticleProps = {
  patternOrPrinciple: DesignPattern | CodingPrinciple;
  language: string;
  type: string;
};

export default function AsArticle({patternOrPrinciple}: AsArticleProps) {
  const {title} = patternOrPrinciple;
  return (
    <div>
      <h1>{title}</h1>
      <p>Never implemented</p>
    </div>
  );
}
