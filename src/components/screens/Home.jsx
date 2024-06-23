import { StyleSheet, FlatList, View } from "react-native";
import { colors } from "../../globals/colors.js";
import categories from "../../data/categories.json";
import CategoryItem from "../others/CategoryItem.jsx";

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        style={{marginVertical: 20}}
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            selectCategory={setCategorySelected}
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
    backgroundColor: "#0002",
    flex: 1,
    alignItems: "center",
  },
});
