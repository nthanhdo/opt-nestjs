export default () => ({
  brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
});
