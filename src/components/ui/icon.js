import Svg, { Path } from 'react-native-svg';
import { Animated } from 'react-native';
import { ICONS } from '../../constants/Icons';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Icon = ({ size = 24, color, icon = "" }) => {
    const pathData = ICONS[icon] || "";

    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <AnimatedPath
                fill={color}
                d={pathData}
            />
        </Svg>
    );
};

export default Icon;