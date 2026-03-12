import { Compendium as Client1 } from 'bot_client';
import { Compendium as Client2 } from 'bot_client2';
import { ref, toRaw } from 'vue';

const clients = [Client1, Client2];

let initialized = false;
let initializationPromise: Promise<void> | null = null;

const client = ref<Client1|Client2>(new Client1());

const compendiumClient = localStorage.getItem('compendium_client');
if (compendiumClient) {
    console.log('🔄 Found saved client in localStorage, switching to:', compendiumClient);
    initializationPromise = switchInstance(parseInt(compendiumClient));
} else {
    console.log('📦 No saved client, using default client 0');
}

export default client;
export { initialized };

// Экспортируем Promise для отслеживания инициализации
export function waitForInitialization(): Promise<void> {
    return initializationPromise || Promise.resolve();
}

export async function init() {
    console.log('🚀 Compendium init() called, initialized:', initialized);
    if (!initialized) {
        console.log('📡 Initializing client:', client.value.constructor.name);
        await client.value.initialize();
        initialized = true;
        console.log('✅ Client initialized successfully');
    } else {
        console.log('⏭️ Client already initialized, skipping');
    }
}

export function stop() {
    client.value.shutdown();
    initialized = false;
}

export async function switchInstance(clientNum: number) {
    console.log('🔄 Switching to client instance:', clientNum);
    // Проверяем, не переключаемся ли мы на тот же клиент
    if (client.value.constructor.name === clients[clientNum].prototype.constructor.name) {
        console.log('⏭️ Already using client', clientNum, ', skipping switch');
        return;
    }
    stop();
    const events = { ...toRaw(client.value._events) };
    client.value = new clients[clientNum]();
    client.value._events = events;
    localStorage.setItem('compendium_client', String(clientNum));
    console.log('📦 New client created:', client.value.constructor.name);
    await init();
}
