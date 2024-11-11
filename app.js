import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export default app;

if (import.meta.url === `file://${process.argv[1]}`) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
