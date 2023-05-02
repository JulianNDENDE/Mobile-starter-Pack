import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TextInput, Button, List } from 'react-native-paper';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '13', sender: 'me', message: 'See you soon!' },
    { id: '12', sender: 'receiver', message: 'See you soon!' },
    { id: '11', sender: 'receiver', message: 'Bye!' },
    { id: '10', sender: 'me', message: 'Bye!' },
    { id: '9', sender: 'me', message: 'You too!' },
    { id: '8', sender: 'receiver', message: 'Have a nice day!' },
    { id: '7', sender: 'receiver', message: 'You are welcome.' },
    { id: '6', sender: 'me', message: 'Thanks for asking!' },
    { id: '5', sender: 'me', message: 'I am also doing well.' },
    { id: '4', sender: 'receiver', message: 'How about you?' },
    { id: '3', sender: 'receiver', message: 'I am doing well, thank you.' },
    { id: '2', sender: 'me', message: 'How are you?' },
    { id: '1', sender: 'me', message: 'Hi there!' },

  ]);

  const sendMessage = () => {
    if (!message) return;
    if (message.trim()) {
      const newMessage = { id: 1 + messages.length, sender: 'me', message };
      setMessages([newMessage, ...messages]);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => {
    const isMe = item.sender === 'me';
    return (
      <List.Item
        testID={`${item.id}`}
        title={item.message}
        titleNumberOfLines={10}
        titleStyle={[
          styles.messageText,
          isMe ? styles.myMessage : styles.receiverMessage,
          item.id === '1' && styles.firstMessage,
        ]}
        descriptionStyle={[
          styles.senderText,
          isMe ? styles.myMessage : styles.receiverMessage,
          item.id === '1' && styles.firstMessage,
        ]}
      />
    );
  };


  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.messagesContainer}
          inverted
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
          <Button mode="contained" onPress={sendMessage}>
            Send
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  receiverMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  senderText: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-start',
  },
  firstMessage: {
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    padding: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});

export default Chat;
