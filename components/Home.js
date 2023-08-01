import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import colors from "../assets/colors/colors";
import { Feather } from "react-native-vector-icons";

// data
import discoverData from "../assets/data/discoverData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import activitiesData from "../assets/data/activitiesData";
import learnMoreData from "../assets/data/learnMoreData";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "../assets/images/person.png";

Feather.loadFont();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* HEADER */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage}></Image>
          </View>
        </SafeAreaView>

        {/* DISCOVER */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors,
  },
  menuWrapper: {
    marginHorizontal: 20,
    topMargin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.gray,
  },
});

export default Home;
