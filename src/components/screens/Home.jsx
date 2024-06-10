import { StyleSheet, FlatList, View } from "react-native";
import { colors } from "../../globals/colors.js";
import categories from "../../data/categories.json";
import CategoryItem from "../others/CategoryItem.jsx";

const Home = ({ setCategorySelected, fontFamily }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        style={styles.flatListStyle}
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            selectCategory={setCategorySelected}
            fontFamily={fontFamily}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "#000c",
    flex: 1,
    alignItems: "center",
  },
  flatListStyle: {},
});
