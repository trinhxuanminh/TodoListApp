import {
  StyleSheet
} from 'react-native';

const StyleCommon = StyleSheet.create({
  emptyView: {
    position: 'absolute',
    alignSelf: "center",
    marginTop: 150,
    zIndex: 0
  },
  emptyImage: {
    alignSelf: "center",
    width: 85,
    height: 85
  },
  emptyLabel: {
    alignItems: "center",
    marginTop: 15,
    color: "#C4C4C4",
    fontSize: 17
  }
});

export default StyleCommon;