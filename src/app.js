const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes/serverRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const osRoutes = require('./routes/osRoutes');
const consoleRoutes = require('./routes/consoleRoutes');
const pxeRoutes = require('./routes/pxeRoutes');
const remoteAgentRoutes = require('./routes/remoteAgentRoutes');
const networkDeviceRoutes = require('./routes/networkDeviceRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api', serverRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', osRoutes);
app.use('/api', consoleRoutes);
app.use('/api', pxeRoutes);
app.use('/api', remoteAgentRoutes);
app.use('/api', networkDeviceRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', roleRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
