import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";



export default function Index() {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(342);

    const handleLike = () => {
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };
    const [isFollowing, setIsFollowing] = useState(false);
    const [followerCount, setFollowerCount] = useState(1250);
      return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <LikeButton isLiked={isLiked} likeCount={likeCount} onLike={handleLike} />
    </View>
  );
}

function LikeButton({ isLiked, likeCount, onLike }) {
  return (

      <Text>{isLiked ? "❤️" : "♡"} {likeCount}</Text>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
