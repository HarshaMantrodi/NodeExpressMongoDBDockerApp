<<<<<<< HEAD
const DockerCommand = require('../models/dockerCommand');

const getDockerCommands = async () => {
        try {
            const commands = await DockerCommand.find();
            return commands;
        }
        catch (err)
        {
            return [];
        }
};

=======
const DockerCommand = require('../models/dockerCommand');

const getDockerCommands = async () => {
        try {
            const commands = await DockerCommand.find();
            return commands;
        }
        catch (err)
        {
            return [];
        }
};

>>>>>>> 07587da31d055484ddcc90ac85d480175f9987e6
module.exports = getDockerCommands;