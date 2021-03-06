import Icon from './IconBase.js';

function HomeIconTopBar(props) {
    return (
        <Icon width="22" height="20" {...props}>
            <path d="M18 19.9999H4C3.73478 19.9999 3.48043 19.8946 3.29289 19.707C3.10536 19.5195 3 19.2651 3 18.9999V9.99992H0L10.327 0.61192C10.5111 0.444398 10.7511 0.351562 11 0.351562C11.2489 0.351563 11.4889 0.444398 11.673 0.61192L22 9.99992H19V18.9999C19 19.2651 18.8946 19.5195 18.7071 19.707C18.5196 19.8946 18.2652 19.9999 18 19.9999ZM12 17.9999H17V8.15692L11 2.70292L5 8.15692V17.9999H10V11.9999H12V17.9999Z" fill="url(#paint0_radial)" />
            <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.1622 16.4814) rotate(177.46) scale(19.3777 17.315)">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" />
                </radialGradient>
            </defs>
        </Icon>
    )
};

export default HomeIconTopBar;
