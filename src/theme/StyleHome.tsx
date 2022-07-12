import {
  StyleSheet
} from 'react-native';
import Color from '../assets/AppColor';

const StyleHome = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.backgroundColor
  },
  titleView: {
    height: 36,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  titleText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFF",
    flex: 1,
    height: "100%",
    marginLeft: 50
  },
  titleImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  inputView: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 10,
    paddingHorizontal: 12,
    height: 44,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#4D4D4D",
    borderRadius: 10
  },
  inputImage: {
    width: 16,
    height: 16
  },
  textInput: {
    fontSize: 17,
    flex: 1,
    marginLeft: 8,
    color: "#000"
  },
  filterView: {
    alignContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 12,
    height: 44
  },
  filterImage: {
    width: 30,
    height: 30
  },
  filterText: {
    fontSize: 17,
    flex: 1,
    marginLeft: 8,
    color: "#727272"
  },
  splitView: {
    width: "100%",
    height: 1,
    backgroundColor: "#251B55",
  },
  listView: {
    flex: 1,
    marginHorizontal: 16
  },
  flatList: {
    flex: 1
  },
  taskItem: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#1D134A",
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4
  },
  nameTaskText: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: 12,
    color: "#FFF",
    textAlignVertical: "center"
  },
  flagTaskView: {
    width: 12,
    height: 12,
    borderRadius: 6
  }
});

export default StyleHome;