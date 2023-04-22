import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Appbar, Avatar, Card, IconButton } from 'react-native-paper';

const posts = [
    {
        id: 1,
        username: 'johndoe',
        location: 'San Francisco, CA',
        image: require('../../assets/post1.jpg'),
        likes: 1024,
        comments: 16,
    },
    {
        id: 2,
        username: 'janedoe',
        location: 'New York, NY',
        image: require('../../assets/post2.jpg'),
        likes: 512,
        comments: 8,
    },
    {
        id: 3,
        username: 'johndoe',
        location: 'San Francisco, CA',
        image: require('../../assets/post3.jpg'),
        likes: 2048,
        comments: 32,
    },
];

export default function HomeScreen() {
    const nav = useNavigation()
    const onChat = () => {
        console.log('Chat')
        nav.navigate('Chat')
    }
    return (
        <View style={styles.container}>
            <Appbar>
                <Appbar.Action icon="camera" onPress={() => console.log('Open camera')} />
                <Appbar.Content title="SaveYourPet" />
                <Appbar.Action icon="send" onPress={onChat} />
            </Appbar>

            <ScrollView>
                {posts.map((post) => (
                    <Card key={post.id} style={styles.card}>
                        <Card.Title
                            title={post.username}
                            subtitle={post.location}
                            left={() => <Avatar.Image source={require('../../assets/avatar.jpg')} />}
                            titleStyle={styles.title}
                        />
                        <Card.Cover source={post.image} />
                        <Card.Actions>
                            <IconButton icon="heart-outline" onPress={() => console.log('Like')} />
                            <IconButton icon="comment-outline" onPress={() => console.log('Comment')} />
                            <IconButton icon="share-outline" onPress={() => console.log('Share')} />
                        </Card.Actions>
                        <Card.Content>
                            <View style={styles.cardFooter}>
                                <IconButton icon="heart" onPress={() => console.log('Unlike')} />
                                <IconButton icon="bookmark-outline" onPress={() => console.log('Bookmark')} />
                            </View>
                            <Card.Title title={`${post.likes} likes`} subtitle={`${post.comments} comments`} />
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        margin: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        marginTop: 10,
    },
});
