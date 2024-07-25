exports.addMessage = (client, req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'Username and message are required' });
  }

  const key = 'messages';
  const value = JSON.stringify({ username, message, timestamp: new Date() });

  client.rpush(key, value, (err, reply) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving message' });
    }
    return res.status(200).json({ message: 'Message added', reply });
  });
};

exports.getMessages = (client, req, res) => {
  const key = 'messages';

  client.lrange(key, 0, -1, (err, messages) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving messages' });
    }
    const parsedMessages = messages.map((msg) => JSON.parse(msg));
    return res.status(200).json(parsedMessages);
  });
};
