const kafka = require('kafka-node'); // Import the kafka-node library
const Producer = kafka.Producer; // Import the Producer class from kafka-node
const client = new kafka.KafkaClient({ kafkaHost: 'kafka:9092' }); // Create a Kafka client connected to the Kafka broker
const producer = new Producer(client); // Create a Producer instance

// Event listener for when the producer is ready
producer.on('ready', function () {
    console.log('Kafka Producer is connected and ready.'); // Log message indicating the producer is ready
});

// Event listener for any errors encountered by the producer
producer.on('error', function (error) {
    console.error('Error in Kafka Producer', error); // Log any errors that occur
});

// Function to send a message to a specified Kafka topic
const sendMessage = (topic, message) => {
    const payloads = [
        { topic: topic, messages: JSON.stringify(message), partition: 0 } // Prepare the message payload
    ];
    producer.send(payloads, (err, data) => {
        if (err) {
            console.log('Error sending message:', err); // Log any errors that occur while sending the message
        } else {
            console.log('Message sent:', data); // Log success message and data
        }
    });
};

module.exports = sendMessage; // Export the sendMessage function for use in other modules
