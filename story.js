const axios = require("axios");
require('dotenv').config();
const { data } = require("./data")

const createJiraTask = async (description, value1, value2, value3, item) => {
    const issueData = {
        fields: {
            project: {
                key: process.env.JIRA_PROJECT_KEY
            },
            summary: description,
            issuetype: {
                name: 'Story'
            },
            customfield_10071: value1,
            customfield_10073: value2,
            customfield_10075: value3,
            customfield_10077: item
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

const createTasksFromData = async (data) => {
    for (const historia of data) {

        const description = historia.descricao;
        const value1 = String(historia.etapas[0].valor.toFixed(2));
        const value2 = String(historia.etapas[1].valor.toFixed(2));
        const value3 = String(historia.etapas[2].valor.toFixed(2));
        const item = String(historia.item)

        await createJiraTask(description, value1, value2, value3, item);
    }
};


const main = async () => {
    await createTasksFromData(data);
};

main();