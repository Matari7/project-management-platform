const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' });
const producer = new Producer(client);

producer.on('ready', function () {
    console.log('Kafka Producer is connected and ready.');
});

producer.on('error', function (error) {
    console.error('Error in Kafka Producer', error);
});

const sendMessage = (topic, message) => {
    const payloads = [
        { topic: topic, messages: JSON.stringify(message), partition: 0 }
    ];
    producer.send(payloads, (err, data) => {
        if (err) {
            console.log('Error sending message:', err);
        } else {
            console.log('Message sent:', data);
        }
    });
};

module.exports = sendMessage;
