import { Compendium as Client1 } from 'bot_client';
import { Compendium as Client2 } from 'bot_client2';
import { ref, toRaw } from 'vue';

const clients = [Client1, Client2];

let initialized = false;
let initializationPromise: Promise<void> | null = null;

const client = ref<Client1|Client2>(new Client1());

const compendiumClient = localStorage.getItem('compendium_client');
if (compendiumClient) {
    initializationPromise = switchInstance(parseInt(compendiumClient));
}

export default client;
export { initialized };

// Экспортируем Promise для отслеживания инициализации
export function waitForInitialization(): Promise<void> {
    return initializationPromise || Promise.resolve();
}

export async function init() {
    if (!initialized) {
        await client.value.initialize();
        initialized = true;
    }
}

export function stop() {
    client.value.shutdown();
    initialized = false;
}

export async function switchInstance(clientNum: number) {
    // Проверяем, не переключаемся ли мы на тот же клиент
    if (client.value.constructor.name === clients[clientNum].prototype.constructor.name) {
        return;
    }
    stop();
    const events = { ...toRaw(client.value._events) };
    client.value = new clients[clientNum]();
    client.value._events = events;
    localStorage.setItem('compendium_client', String(clientNum));
    await init();
}
