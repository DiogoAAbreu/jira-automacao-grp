const axios = require("axios");
require('dotenv').config();
const { subtasks, storys } = require("./data")



const createJiraSubTask = async (subtask, story) => {
    const issueData = {
        fields: {
            project: {
                key: process.env.JIRA_PROJECT_KEY
            },
            summary: subtask,
            issuetype: {
                name: 'Subtarefa'
            },
            parent: { key: story },
        }
    };

    try {
        const response = await axios.post(
            `${process.env.JIRA_BASE_URL}/rest/api/3/issue`,
            issueData,
            {
                auth: {
                    username: process.env.JIRA_EMAIL,
                    password: process.env.AUTH
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(`Tarefa criada: ${response.data.key}`);
    } catch (error) {
        if (error.response) {
            console.error(`Erro ao criar tarefa: ${error} - ${error}`);
        } else {
            console.error(`Erro ao criar tarefa: ${error}`);
        }
    }
};


const wait = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

const create = async () => {
    for (const story of storys) {
        for (const subtask of subtasks) {
            createJiraSubTask(subtask, story)
            await wait(750);
        }
    }
};



create()