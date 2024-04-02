import {SvgIconProps, useTheme} from '@mui/material';
import {createSvgIcon} from '../../icons/SvgIcon';

const SvgIcon = createSvgIcon({
  height: '128',
  viewBox: '0 0 256 128',
  width: '256',
  fill: 'none',
});

export default function OpenClosed(props: SvgIconProps): SvgIconProps {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimarySec = theme.palette.secondary.main;
  const colorPrimaryAlt = (theme.palette as any)?.alternate?.light;

  return (
    <SvgIcon {...props}>
      <path
        d="M160 49.5H178C179.933 49.5 181.5 51.067 181.5 53V78C181.5 79.933 179.933 81.5 178 81.5H160C158.067 81.5 156.5 79.933 156.5 78V53C156.5 51.067 158.067 49.5 160 49.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path
        d="M160 72.5H181.5V78C181.5 79.933 179.933 81.5 178 81.5H160C158.067 81.5 156.5 79.933 156.5 78V76C156.5 74.067 158.067 72.5 160 72.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path d="M161 58H175" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
      <path d="M161 64H173" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
      <path
        d="M53.5469 26.1416L19.4219 38.2276C18.5687 38.5119 18 39.3651 18 40.2182V82.8744C18 83.7987 18.5687 84.5807 19.4219 84.8651L53.5469 96.951C53.7602 97.0221 54.0445 97.0932 54.2578 97.0932C54.4 97.0932 54.4711 97.0932 54.6133 97.0932H54.6844C54.7555 97.0932 54.8266 97.0221 54.8977 97.0221L89.0227 84.9362C89.8758 84.6518 90.4445 83.7987 90.4445 82.9455V40.2182V40.1471C90.4445 40.076 90.4445 39.9338 90.4445 39.8627V39.7916C90.3023 39.0807 89.8047 38.4408 89.0938 38.2276L72.0312 32.1846H71.9602C71.5336 32.0424 70.9648 31.9713 70.4672 32.1846L37.1953 43.9151C36.3422 44.1994 35.7734 45.0526 35.7734 45.9057V53.726C35.7734 54.9346 36.6977 55.8588 37.9062 55.8588C39.1148 55.8588 40.0391 54.9346 40.0391 53.726V47.3987L71.1781 36.3791L81.9844 40.2182L53.5469 50.3135C52.6937 50.5979 52.125 51.3799 52.125 52.3041C52.125 52.3041 52.125 52.3041 52.125 52.3752V92.0455L22.2656 81.3815V41.7112L54.9688 30.1229C56.1063 29.6963 56.675 28.4877 56.2484 27.4213C55.893 26.2838 54.6844 25.7151 53.5469 26.1416ZM56.3906 53.7971L86.25 43.2041V81.3104L56.3906 91.9033V53.7971Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M117 23L107.026 28.818L117.051 34.5469L117 23ZM97.8682 58.4961L113.403 31.3103L111.667 30.3181L96.1318 57.5039L97.8682 58.4961Z"
        fill={colorPrimaryAlt}
      />
      <path
        d="M117 107L117.574 95.4673L107.299 100.736L117 107ZM96.1102 68.4563L112.003 99.448L113.783 98.5353L97.8898 67.5437L96.1102 68.4563Z"
        fill={colorPrimaryAlt}
      />
      <path d="M149 63L139 57.2265V68.7735L149 63ZM99 64H140V62H99V64Z" fill={colorPrimaryAlt} />
      <path d="M195 23L185 17.2265V28.7735L195 23ZM154 24L186 24V22L154 22V24Z" fill={colorPrimaryAlt} />
      <path d="M196 107L186 101.226V112.774L196 107ZM155 108L187 108V106L155 106V108Z" fill={colorPrimaryAlt} />
      <rect
        x="148"
        y="51.9565"
        width="9.83798"
        height="46.7304"
        rx="2"
        transform="rotate(-45 148 51.9565)"
        fill="#950000"
        fill-opacity="0.5"
      />
      <path
        d="M179.629 46.4142C180.41 45.6332 181.677 45.6332 182.458 46.4142L186.586 50.5423C187.367 51.3233 187.367 52.5897 186.586 53.3707L174.956 65.0009L167.999 58.0444L179.629 46.4142Z"
        fill="#950000"
        fill-opacity="0.5"
      />
      <path
        d="M161.041 65.0022L167.998 71.9587L156.371 83.5857C155.59 84.3668 154.323 84.3668 153.542 83.5857L149.414 79.4576C148.633 78.6766 148.633 77.4102 149.414 76.6292L161.041 65.0022Z"
        fill="#950000"
        fill-opacity="0.5"
      />
      <path
        d="M147 36.5H125C124.724 36.5 124.5 36.2761 124.5 36V8C124.5 7.72386 124.724 7.5 125 7.5H141.718C141.844 7.5 141.965 7.54734 142.057 7.6326L147.339 12.5083C147.442 12.6029 147.5 12.7361 147.5 12.8757V36C147.5 36.2761 147.276 36.5 147 36.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path
        d="M140 8.98433C140 7.18102 142.199 6.29874 143.445 7.60189L147.765 12.1176C148.981 13.3897 148.08 15.5 146.319 15.5H142C140.895 15.5 140 14.6046 140 13.5V8.98433Z"
        fill={colorPrimarySec}
      />
      <line
        x1="130.5"
        y1="19.5"
        x2="141.5"
        y2="19.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="130.5"
        y1="30.5"
        x2="141.5"
        y2="30.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="130.5"
        y1="24.5"
        x2="137.5"
        y2="24.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M148 120.5H126C125.724 120.5 125.5 120.276 125.5 120V92C125.5 91.7239 125.724 91.5 126 91.5H142.718C142.844 91.5 142.965 91.5473 143.057 91.6326L148.339 96.5083C148.442 96.6029 148.5 96.7361 148.5 96.8757V120C148.5 120.276 148.276 120.5 148 120.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path
        d="M141 92.9843C141 91.181 143.199 90.2987 144.445 91.6019L148.765 96.1176C149.981 97.3897 149.08 99.5 147.319 99.5H143C141.895 99.5 141 98.6046 141 97.5V92.9843Z"
        fill={colorPrimarySec}
      />
      <line
        x1="131.5"
        y1="103.5"
        x2="142.5"
        y2="103.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="131.5"
        y1="114.5"
        x2="142.5"
        y2="114.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <line
        x1="131.5"
        y1="108.5"
        x2="138.5"
        y2="108.5"
        stroke={colorPrimarySec}
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M207 6.5H225C226.933 6.5 228.5 8.067 228.5 10V35C228.5 36.933 226.933 38.5 225 38.5H207C205.067 38.5 203.5 36.933 203.5 35V10C203.5 8.067 205.067 6.5 207 6.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path
        d="M207 29.5H228.5V35C228.5 36.933 226.933 38.5 225 38.5H207C205.067 38.5 203.5 36.933 203.5 35V33C203.5 31.067 205.067 29.5 207 29.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path d="M208 15H222" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
      <path d="M208 21H220" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
      <path
        d="M207 88.5H225C226.933 88.5 228.5 90.067 228.5 92V117C228.5 118.933 226.933 120.5 225 120.5H207C205.067 120.5 203.5 118.933 203.5 117V92C203.5 90.067 205.067 88.5 207 88.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path
        d="M207 111.5H228.5V117C228.5 118.933 226.933 120.5 225 120.5H207C205.067 120.5 203.5 118.933 203.5 117V115C203.5 113.067 205.067 111.5 207 111.5Z"
        fill="none"
        stroke={colorPrimarySec}
        stroke-width="3"
      />
      <path d="M208 97H222" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
      <path d="M208 103H220" stroke={colorPrimarySec} stroke-width="3" stroke-linecap="round" />
    </SvgIcon>
  );
}
