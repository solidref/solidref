import {SvgIconProps, useTheme} from '@mui/material';
import {createSvgIcon} from '../../icons/languages/SvgIcon';

const SvgIcon = createSvgIcon({
  height: '128',
  viewBox: '0 0 256 128',
  width: '256',
});

export default function OpenClosed(props: SvgIconProps): SvgIconProps {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimarySec = theme.palette.secondary.main;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colorPrimaryAlt = (theme.palette as any)?.alternate?.light;

  return (
    <SvgIcon {...props}>
      <rect x="85.7639" y="18.5139" width="40.1805" height="40.1805" fill={colorPrimaryMain} />
      <path
        d="M85.5871 14.8232C85.4895 14.9209 85.4895 15.0791 85.5871 15.1768L87.1781 16.7678C87.2758 16.8654 87.4341 16.8654 87.5317 16.7678C87.6293 16.6701 87.6293 16.5118 87.5317 16.4142L86.1175 15L87.5317 13.5858C87.6293 13.4882 87.6293 13.3299 87.5317 13.2322C87.4341 13.1346 87.2758 13.1346 87.1781 13.2322L85.5871 14.8232ZM126.121 15.1768C126.219 15.0791 126.219 14.9209 126.121 14.8232L124.53 13.2322C124.433 13.1346 124.274 13.1346 124.177 13.2322C124.079 13.3299 124.079 13.4882 124.177 13.5858L125.591 15L124.177 16.4142C124.079 16.5118 124.079 16.6701 124.177 16.7678C124.274 16.8654 124.433 16.8654 124.53 16.7678L126.121 15.1768ZM85.7639 15.25H125.944V14.75H85.7639V15.25Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M81.9253 58.8719C82.0233 58.9692 82.1816 58.9685 82.2789 58.8705L83.8636 57.2733C83.9609 57.1753 83.9603 57.017 83.8623 56.9198C83.7642 56.8225 83.606 56.8232 83.5087 56.9212L82.1 58.3409L80.6803 56.9322C80.5823 56.835 80.424 56.8356 80.3268 56.9336C80.2295 57.0316 80.2301 57.1899 80.3281 57.2871L81.9253 58.8719ZM82.1205 18.3365C82.0225 18.2392 81.8642 18.2398 81.767 18.3378L80.1822 19.935C80.085 20.033 80.0856 20.1913 80.1836 20.2886C80.2816 20.3858 80.4399 20.3852 80.5372 20.2872L81.9458 18.8675L83.3656 20.2761C83.4636 20.3734 83.6219 20.3728 83.7191 20.2748C83.8164 20.1768 83.8157 20.0185 83.7177 19.9212L82.1205 18.3365ZM82.3514 58.6935L82.1945 18.5129L81.6945 18.5149L81.8514 58.6954L82.3514 58.6935Z"
        fill={colorPrimaryMain}
      />
      <rect x="63.4583" y="69.6945" width="62.4861" height="35.1389" fill={colorPrimaryMain} />
      <path
        d="M63.2815 65.3927C63.1838 65.4903 63.1838 65.6486 63.2815 65.7462L64.8725 67.3372C64.9701 67.4349 65.1284 67.4349 65.226 67.3372C65.3237 67.2396 65.3237 67.0813 65.226 66.9837L63.8118 65.5695L65.226 64.1552C65.3237 64.0576 65.3237 63.8993 65.226 63.8017C65.1284 63.7041 64.9701 63.7041 64.8725 63.8017L63.2815 65.3927ZM126.121 65.7462C126.219 65.6486 126.219 65.4903 126.121 65.3927L124.53 63.8017C124.433 63.7041 124.274 63.7041 124.177 63.8017C124.079 63.8993 124.079 64.0576 124.177 64.1552L125.591 65.5695L124.177 66.9837C124.079 67.0813 124.079 67.2396 124.177 67.3372C124.274 67.4349 124.433 67.4349 124.53 67.3372L126.121 65.7462ZM63.4583 65.8195H125.944V65.3195H63.4583V65.8195Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M59.615 105.01C59.7126 105.108 59.8709 105.108 59.9685 105.01L61.5595 103.419C61.6571 103.321 61.6571 103.163 61.5595 103.066C61.4619 102.968 61.3036 102.968 61.206 103.066L59.7917 104.48L58.3775 103.066C58.2799 102.968 58.1216 102.968 58.024 103.066C57.9263 103.163 57.9263 103.321 58.024 103.419L59.615 105.01ZM59.9685 69.5177C59.8709 69.4201 59.7126 69.4201 59.615 69.5177L58.024 71.1087C57.9263 71.2063 57.9263 71.3646 58.024 71.4622C58.1216 71.5599 58.2799 71.5599 58.3775 71.4622L59.7917 70.048L61.206 71.4622C61.3036 71.5599 61.4619 71.5599 61.5595 71.4622C61.6571 71.3646 61.6571 71.2063 61.5595 71.1087L59.9685 69.5177ZM60.0417 104.833V69.6945H59.5417V104.833H60.0417Z"
        fill={colorPrimaryMain}
      />
      <circle cx="156.882" cy="43.6458" r="21.9236" fill={colorPrimaryMain} />
      <path
        d="M178.982 43.7462C179.08 43.6485 179.08 43.4903 178.982 43.3926L177.391 41.8016C177.294 41.704 177.135 41.704 177.038 41.8016C176.94 41.8993 176.94 42.0576 177.038 42.1552L178.452 43.5694L177.038 44.9836C176.94 45.0812 176.94 45.2395 177.038 45.3372C177.135 45.4348 177.294 45.4348 177.391 45.3372L178.982 43.7462ZM156.806 43.8194H178.806V43.3194H156.806V43.8194Z"
        fill={colorPrimaryAlt}
      />
      <path
        d="M156.783 65.7474C156.881 65.8443 157.039 65.8432 157.136 65.7449L158.716 64.1429C158.813 64.0446 158.812 63.8863 158.714 63.7894C158.615 63.6924 158.457 63.6935 158.36 63.7918L156.956 65.2158L155.532 63.8115C155.434 63.7145 155.275 63.7156 155.178 63.8139C155.081 63.9123 155.082 64.0705 155.181 64.1675L156.783 65.7474ZM156.556 43.5711L156.568 45.4045L157.068 45.401L157.056 43.5677L156.556 43.5711ZM156.594 49.0711L156.619 52.7378L157.119 52.7343L157.094 49.0677L156.594 49.0711ZM156.645 56.4045L156.67 60.0711L157.17 60.0677L157.145 56.401L156.645 56.4045ZM156.696 63.7378L156.708 65.5711L157.208 65.5677L157.196 63.7343L156.696 63.7378ZM156.783 65.7474C156.881 65.8443 157.039 65.8432 157.136 65.7449L158.716 64.1429C158.813 64.0446 158.812 63.8863 158.714 63.7894C158.615 63.6924 158.457 63.6935 158.36 63.7918L156.956 65.2158L155.532 63.8115C155.434 63.7145 155.275 63.7156 155.178 63.8139C155.081 63.9123 155.082 64.0705 155.181 64.1675L156.783 65.7474ZM156.556 43.5711L156.568 45.4045L157.068 45.401L157.056 43.5677L156.556 43.5711ZM156.594 49.0711L156.619 52.7378L157.119 52.7343L157.094 49.0677L156.594 49.0711ZM156.645 56.4045L156.67 60.0711L157.17 60.0677L157.145 56.401L156.645 56.4045ZM156.696 63.7378L156.708 65.5711L157.208 65.5677L157.196 63.7343L156.696 63.7378Z"
        fill={colorPrimaryAlt}
      />
      <ellipse cx="178.806" cy="94.1389" rx="32.6944" ry="19.8611" fill={colorPrimaryMain} />
      <path
        d="M211.677 94.3156C211.774 94.218 211.774 94.0597 211.677 93.9621L210.086 92.3711C209.988 92.2735 209.83 92.2735 209.732 92.3711C209.635 92.4687 209.635 92.627 209.732 92.7246L211.146 94.1389L209.732 95.5531C209.635 95.6507 209.635 95.809 209.732 95.9066C209.83 96.0043 209.988 96.0043 210.086 95.9066L211.677 94.3156ZM178.806 94.3889H211.5V93.8889H178.806V94.3889Z"
        fill={colorPrimaryAlt}
      />
      <path
        d="M178.627 114.178C178.725 114.275 178.883 114.274 178.98 114.175L180.559 112.573C180.656 112.474 180.655 112.316 180.556 112.219C180.458 112.122 180.3 112.123 180.203 112.222L178.799 113.646L177.375 112.243C177.276 112.146 177.118 112.147 177.021 112.246C176.924 112.344 176.925 112.502 177.024 112.599L178.627 114.178ZM178.403 94.1407L178.421 96.6234L178.921 96.6196L178.903 94.137L178.403 94.1407ZM178.459 101.589L178.496 106.554L178.996 106.55L178.959 101.585L178.459 101.589ZM178.533 111.519L178.552 114.002L179.052 113.998L179.033 111.515L178.533 111.519ZM178.627 114.178C178.725 114.275 178.883 114.274 178.98 114.175L180.559 112.573C180.656 112.474 180.655 112.316 180.556 112.219C180.458 112.122 180.3 112.123 180.203 112.222L178.799 113.646L177.375 112.243C177.276 112.146 177.118 112.147 177.021 112.246C176.924 112.344 176.925 112.502 177.024 112.599L178.627 114.178ZM178.403 94.1407L178.421 96.6234L178.921 96.6196L178.903 94.137L178.403 94.1407ZM178.459 101.589L178.496 106.554L178.996 106.55L178.959 101.585L178.459 101.589ZM178.533 111.519L178.552 114.002L179.052 113.998L179.033 111.515L178.533 111.519Z"
        fill={colorPrimaryAlt}
      />
      <path d="M207.68 22.6389L230.57 62.2847H184.791L207.68 22.6389Z" fill={colorPrimaryMain} />
      <path
        d="M184.587 65.3927C184.49 65.4903 184.49 65.6486 184.587 65.7462L186.178 67.3372C186.276 67.4349 186.434 67.4349 186.532 67.3372C186.629 67.2396 186.629 67.0813 186.532 66.9837L185.117 65.5695L186.532 64.1552C186.629 64.0576 186.629 63.8993 186.532 63.8017C186.434 63.7041 186.276 63.7041 186.178 63.8017L184.587 65.3927ZM231.232 65.7462C231.33 65.6486 231.33 65.4903 231.232 65.3927L229.641 63.8017C229.544 63.7041 229.385 63.7041 229.288 63.8017C229.19 63.8993 229.19 64.0576 229.288 64.1552L230.702 65.5695L229.288 66.9837C229.19 67.0813 229.19 67.2396 229.288 67.3372C229.385 67.4349 229.544 67.4349 229.641 67.3372L231.232 65.7462ZM184.764 65.8195H231.056V65.3195H184.764V65.8195Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M207.855 22.4601C207.757 22.3636 207.598 22.3654 207.502 22.4641L205.929 24.0734C205.833 24.1721 205.835 24.3304 205.933 24.4269C206.032 24.5234 206.19 24.5216 206.287 24.4228L207.685 22.9924L209.115 24.3902C209.214 24.4867 209.372 24.4849 209.469 24.3861C209.565 24.2874 209.563 24.1291 209.465 24.0326L207.855 22.4601ZM207.961 62.2343C208.059 62.3308 208.218 62.329 208.314 62.2303L209.887 60.621C209.983 60.5223 209.981 60.364 209.883 60.2675C209.784 60.171 209.626 60.1728 209.529 60.2716L208.131 61.702L206.701 60.3042C206.602 60.2077 206.444 60.2095 206.347 60.3083C206.251 60.407 206.253 60.5653 206.351 60.6618L207.961 62.2343ZM207.431 22.6417L207.453 24.6126L207.953 24.6068L207.931 22.636L207.431 22.6417ZM207.499 28.5542L207.544 32.4959L208.044 32.4901L207.999 28.5485L207.499 28.5542ZM207.59 36.4376L207.635 40.3792L208.135 40.3735L208.09 36.4318L207.59 36.4376ZM207.681 44.3209L207.726 48.2626L208.226 48.2568L208.181 44.3151L207.681 44.3209ZM207.772 52.2043L207.817 56.1459L208.317 56.1401L208.272 52.1985L207.772 52.2043ZM207.863 60.0876L207.885 62.0584L208.385 62.0527L208.363 60.0818L207.863 60.0876ZM207.855 22.4601C207.757 22.3636 207.598 22.3654 207.502 22.4641L205.929 24.0734C205.833 24.1721 205.835 24.3304 205.933 24.4269C206.032 24.5234 206.19 24.5216 206.287 24.4228L207.685 22.9924L209.115 24.3902C209.214 24.4867 209.372 24.4849 209.469 24.3861C209.565 24.2874 209.563 24.1291 209.465 24.0326L207.855 22.4601ZM207.961 62.2343C208.059 62.3308 208.218 62.329 208.314 62.2303L209.887 60.621C209.983 60.5223 209.981 60.364 209.883 60.2675C209.784 60.171 209.626 60.1728 209.529 60.2716L208.131 61.702L206.701 60.3042C206.602 60.2077 206.444 60.2095 206.347 60.3083C206.251 60.407 206.253 60.5653 206.351 60.6618L207.961 62.2343ZM207.431 22.6417L207.453 24.6126L207.953 24.6068L207.931 22.636L207.431 22.6417ZM207.499 28.5542L207.544 32.4959L208.044 32.4901L207.999 28.5485L207.499 28.5542ZM207.59 36.4376L207.635 40.3792L208.135 40.3735L208.09 36.4318L207.59 36.4376ZM207.681 44.3209L207.726 48.2626L208.226 48.2568L208.181 44.3151L207.681 44.3209ZM207.772 52.2043L207.817 56.1459L208.317 56.1401L208.272 52.1985L207.772 52.2043ZM207.863 60.0876L207.885 62.0584L208.385 62.0527L208.363 60.0818L207.863 60.0876Z"
        fill={colorPrimaryAlt}
      />
      <path
        d="M58.5546 53.4433C56.4257 56.5291 52.1413 59.2748 50.5152 61.3467C46.2764 66.7487 43.7723 74.5872 36.7744 77.1598C32.7428 78.6417 28.7958 77.5335 26.7425 73.6612C24.4041 69.2519 26.4962 64.5107 25.5772 59.8937C24.5902 54.9358 20.2454 53.4599 16.1171 51.7193C13.201 50.4901 8.24533 48.1496 8.00961 44.4626C7.70207 39.6579 14.8593 37.1281 17.286 33.8623C20.041 30.1543 21.6436 26.0133 25.4055 23.0329C28.1098 20.8901 31.4652 19.5799 34.9066 19.3231C37.5704 19.1243 40.3268 19.5679 42.6403 20.9002C48.0724 24.0307 46.4845 27.723 47.3528 32.8494C48.1861 37.7696 51.1478 42.3847 55.4861 44.921C56.7043 45.6329 58.0638 46.2381 58.8801 47.3891C60.3662 49.4849 59.875 51.5293 58.5546 53.4433Z"
        fill={colorPrimarySec}
      />
      <path
        d="M49.0364 38.2731C49.0644 38.1379 48.9776 38.0056 48.8424 37.9775L46.6395 37.5197C46.5043 37.4916 46.372 37.5784 46.3439 37.7136C46.3158 37.8488 46.4026 37.9812 46.5378 38.0093L48.4959 38.4162L48.0891 40.3743C48.061 40.5095 48.1478 40.6419 48.283 40.67C48.4181 40.6981 48.5505 40.6112 48.5786 40.4761L49.0364 38.2731ZM34.7204 47.7507L48.9287 38.4313L48.6545 38.0132L34.4461 47.3326L34.7204 47.7507Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M33.6382 77.9639C33.7333 78.064 33.8916 78.068 33.9916 77.9729L35.6223 76.4225C35.7223 76.3274 35.7263 76.1692 35.6312 76.0691C35.5361 75.969 35.3778 75.965 35.2778 76.0602L33.8283 77.4382L32.4502 75.9888C32.3551 75.8887 32.1969 75.8847 32.0968 75.9799C31.9967 76.075 31.9927 76.2332 32.0879 76.3333L33.6382 77.9639ZM34.3333 47.5354L33.5694 77.7854L34.0693 77.798L34.8332 47.548L34.3333 47.5354Z"
        fill={colorPrimaryMain}
      />
      <path
        d="M8.78197 41.6782C8.66563 41.7526 8.63158 41.9072 8.70593 42.0235L9.91749 43.9195C9.99184 44.0358 10.1464 44.0699 10.2628 43.9955C10.3791 43.9212 10.4132 43.7666 10.3388 43.6502L9.26187 41.965L10.9472 40.888C11.0635 40.8137 11.0975 40.6591 11.0232 40.5427C10.9489 40.4264 10.7943 40.3923 10.6779 40.4667L8.78197 41.6782ZM34.637 47.2975L32.4981 46.8265L32.3906 47.3148L34.5295 47.7858L34.637 47.2975ZM28.2204 45.8843L23.9426 44.9422L23.835 45.4305L28.1128 46.3726L28.2204 45.8843ZM19.6648 44.0001L15.387 43.058L15.2795 43.5463L19.5573 44.4884L19.6648 44.0001ZM11.1092 42.1158L8.97036 41.6448L8.86282 42.1331L11.0017 42.6041L11.1092 42.1158ZM8.78197 41.6782C8.66563 41.7526 8.63158 41.9072 8.70593 42.0235L9.91749 43.9195C9.99184 44.0358 10.1464 44.0699 10.2628 43.9955C10.3791 43.9212 10.4132 43.7666 10.3388 43.6502L9.26187 41.965L10.9472 40.888C11.0635 40.8137 11.0975 40.6591 11.0232 40.5427C10.9489 40.4264 10.7943 40.3923 10.6779 40.4667L8.78197 41.6782ZM34.637 47.2975L32.4981 46.8265L32.3906 47.3148L34.5295 47.7858L34.637 47.2975ZM28.2204 45.8843L23.9426 44.9422L23.835 45.4305L28.1128 46.3726L28.2204 45.8843ZM19.6648 44.0001L15.387 43.058L15.2795 43.5463L19.5573 44.4884L19.6648 44.0001ZM11.1092 42.1158L8.97036 41.6448L8.86282 42.1331L11.0017 42.6041L11.1092 42.1158Z"
        fill={colorPrimaryMain}
      />
    </SvgIcon>
  );
}