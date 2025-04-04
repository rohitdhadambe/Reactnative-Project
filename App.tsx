import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const profileData = {
  profilePic: "https://i.pravatar.cc/300?img=12",
  username: "@rohitdhadambe001",
  country: "INDIA",
  bio: "Passionate Computer Engineering student skilled in full-stack development, React, Firebase, and AI-based solutions. Finalist at SIH 2024",
  followers: 2500,
  following: 1022,
  collections: [
    {
      title: "LIKED",
      count: 32,
      icon: "heart",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      ],
    },
    {
      title: "SAVED",
      count: 23,
      icon: "bookmark",
      images: [
        "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
        "https://images.unsplash.com/photo-1508780709619-79562169bc64",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      ],
    },
    {
      title: "FILES",
      count: 12,
      icon: "file",
      images: [
        "https://images.unsplash.com/photo-1603415526960-f9e418dd7e8c",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1581090700227-1e8f9b84b79c",
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      ],
    },
  ],
};
type ItemType = {
  images: string[];
};
type CollectionCardProps = {
  item: ItemType;
};

const CollectionCard = ({ item }) => (
  <View style={styles.collectionCard}>
    <View style={styles.imageStackContainer}>
    {item.images.slice(0, 4).map((image: string, index: number) => (
  <Image
    key={index}
    source={{ uri: image }}
    style={[styles.imageStack, { top: index * 6, left: index * 6 }]}
  />
))}

    </View>
    <View style={styles.labelContainer}>
      <FontAwesome name={item.icon} size={16} color="#ccc" />
      <Text style={styles.labelText}>
        {item.title} ({item.count})
      </Text>
    </View>
  </View>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("Collections");

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header with Background */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1517816428104-797678c7cf0d?auto=format&fit=crop&w=1050&q=80",
        }}
        style={styles.profileCard}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={styles.profileOverlay}>
          <View style={styles.profileTopRow}>
            <Image source={{ uri: profileData.profilePic }} style={styles.profilePic} />
            <View style={styles.iconsContainer}>
              <TouchableOpacity>
                <FontAwesome name="pencil" size={18} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="cog" size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.username}>
            {profileData.username}{" "}
            <FontAwesome name="check-circle" size={16} color="#00FFAA" />
          </Text>

          <Text style={styles.country}>🇮🇳 {profileData.country}</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>

          <View style={styles.statsRow}>
            <Text style={styles.statsText}>👥 {profileData.followers} FOLLOWERS</Text>
            <Text style={styles.statsText}>👥 {profileData.following} FOLLOWING</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab("Collections")}>
          <Text style={[styles.tabText, activeTab === "Collections" && styles.activeTab]}>
            COLLECTIONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Manage Tags")}>
          <Text style={[styles.tabText, activeTab === "Manage Tags" && styles.activeTab]}>
            MANAGE TAGS
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic Content */}
      {activeTab === "Collections" ? (
        <FlatList
          data={profileData.collections}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => <CollectionCard item={item} />}
        />
      ) : (
        <View style={styles.manageTagsContainer}>
          <Text style={styles.manageTagsTitle}>Customize Your Tags</Text>

          <View style={styles.manageTagsBox}>
            <Text style={styles.manageTagsText}>🔹 Select topics you’re most passionate about.</Text>
            <Text style={styles.manageTagsText}>🔹 Add tags that reflect your learning journey.</Text>
            <Text style={styles.manageTagsText}>🔹 Explore trending tags to discover new content.</Text>
          </View>

          <View style={styles.manageTagsBox}>
            <Text style={styles.manageTagsText}>🔹 Organize your saved items using custom tags.</Text>
            <Text style={styles.manageTagsText}>🔹 Use colors and icons to personalize your tag list.</Text>
            <Text style={styles.manageTagsText}>🔹 Easily update or delete outdated tags anytime.</Text>
          </View>

          <View style={styles.manageTagsBox}>
            <Text style={styles.manageTagsText}>🔹 See which tags are driving your engagement.</Text>
            <Text style={styles.manageTagsText}>🔹 Keep your tags clean and clutter-free.</Text>
            <Text style={styles.manageTagsText}>🔹 Sync your tags across all your devices.</Text>
          </View>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Glitch.House</Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
          <Text style={styles.footerDot}>•</Text>
          <Text style={styles.footerLink}>Terms of Use</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  profileCard: {
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  profileOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    justifyContent: "center",
  },
  profileTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePic: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    borderWidth: 2,
    borderColor: "#00FFAA",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  country: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 3,
  },
  bio: {
    fontSize: 14,
    color: "#DDD",
    marginTop: 6,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  statsText: {
    fontSize: 14,
    color: "#AAA",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  activeTab: {
    color: "#00ff99",
    borderBottomWidth: 2,
    borderBottomColor: "#00ff99",
  },
  gridContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  collectionCard: {
    width: "48%",
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  imageStackContainer: {
    height: 100,
    position: "relative",
  },
  imageStack: {
    width: "80%",
    height: "80%",
    borderRadius: 8,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#444",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  labelText: {
    color: "#fff",
    marginLeft: 5,
  },
  manageTagsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#111",
    borderRadius: 10,
    shadowColor: "#00FFAA",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  manageTagsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00FFAA",
    marginBottom: 8,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  manageTagsBox: {
    backgroundColor: "#222",
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#00FFAA",
    marginBottom: 12,
  },
  manageTagsText: {
    fontSize: 14,
    color: "#DDD",
    marginBottom: 6,
    lineHeight: 20,
  },
  footer: {
    marginTop: 40,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#222",
    alignItems: "center",
    backgroundColor: "#000",
  },
  footerText: {
    color: "#999",
    fontSize: 14,
    marginBottom: 8,
  },
  footerLinks: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  footerLink: {
    color: "#00FFAA",
    fontSize: 13,
    marginHorizontal: 5,
  },
  footerDot: {
    color: "#555",
    fontSize: 13,
  },
});
