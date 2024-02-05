import {CodeExample} from '../../state';
import SyntaxHighlighter from './SyntaxHighlighter';
import HorizontalAccordion from '../generic/accordion/HorizontalAccordion';
import HorizontalAccordionSection from '../generic/accordion/HorizontalAccordionSection';
import HorizontalAccordionSectionTitle from '../generic/accordion/HorizontalAccordionSectionTitle';
import HorizontalAccordionSectionContent from '../generic/accordion/HorizontalAccordionSectionContent';

export type CodeExampleAccordionProps = {
  examples: CodeExample[];
  language?: string;
};

function CodeExampleAccordion({examples, language = 'js'}: CodeExampleAccordionProps) {
  return (
    <HorizontalAccordion>
      {examples.map((example, index) => {
        return (
          <HorizontalAccordionSection
            className={index === 0 ? 'HorizontalAccordionSection-Targeted' : ''}
            key={example.title}
          >
            <HorizontalAccordionSectionTitle>{example.title ?? 'Unknown Title'}</HorizontalAccordionSectionTitle>
            <HorizontalAccordionSectionContent>
              <SyntaxHighlighter code={example.code || '// missing code'} language={language} />
            </HorizontalAccordionSectionContent>
          </HorizontalAccordionSection>
        );
      })}
    </HorizontalAccordion>
  );
}

export default CodeExampleAccordion;
