import { View, Text, Image, Platform, Pressable } from "react-native";
import styles from "../styles/userCardStyles";
import { LinearGradient } from "expo-linear-gradient";
import Indicators from "./indicators";
import { BlurView } from "expo-blur";
import { GradientBorder } from "../../../ui/gradientBorder";
import Icon from "../../../ui/icon";
import { COLORS } from "../../../../constants/theme";

const UserCardHeader = ({ user, post, activeIdx, handleIndicatorFinish, total, pause }) => {
	return (
		<View style={styles.header}>
			<LinearGradient colors={["rgba(0, 0, 0, 0.32)", "rgba(0, 0, 0, 0)"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.gradient} />
			<Indicators isPaused={pause} onFinish={() => handleIndicatorFinish()} count={total} currentIndex={activeIdx} />
			<View style={styles.headerBlock}>
				<Image style={styles.headerAvatar} source={user.avatar} />
				<View style={styles.headerInfo}>
					<Text style={styles.infoName}>{user.name}</Text>
					<Text style={styles.infoDescription}>
						{post?.date} | {post?.views} views
					</Text>
				</View>
				<GradientBorder borderRadius={32} borderWidth={1}>
					{Platform.OS === "ios" ? (
						<BlurView style={styles.menuButton} blurReductionFactor={4} tint='dark' intensity={100}>
							<Icon icon='menu' size={26} color={COLORS.white} />
						</BlurView>
					) : (
						<View style={[styles.menuButton, { backgroundColor: COLORS.glassButton }]}>
							<Icon icon='menu' size={26} color={COLORS.white} />
						</View>
					)}
				</GradientBorder>

				{/* {isMenuVisible && <DropdownMenu setOpen={setIsMenuVisible} />} */}
			</View>
		</View>
	);
};

export default UserCardHeader;
