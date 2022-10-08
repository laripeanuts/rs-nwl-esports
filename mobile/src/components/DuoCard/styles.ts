import { StyleSheet } from 'react-native';
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: "80%",
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
  },
  button: {
    width: "100%",
    height: 36,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginLeft: 8,
  }
});